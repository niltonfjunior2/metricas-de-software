import {
  calculateProcessTier,
  formatCurrencyBRL,
  DEFAULT_PROCESS_GOALS,
  type ProcessTierInput,
  type ProcessTierResult
} from '../../services/pricingEngine';

export interface ProcessTierProps {
  precoBaseRecursos: number;
  initialData?: Partial<ProcessTierInput>;
  onChange?: (result: ProcessTierResult, input: ProcessTierInput) => void;
}

export function createProcessTierComponent(props: ProcessTierProps): {
  element: HTMLElement;
  updateBaseRecursos: (novaBase: number) => void;
  getState: () => { input: ProcessTierInput; result: ProcessTierResult };
  setState: (data: Partial<ProcessTierInput>) => void;
} {
  const container = document.createElement('div');
  container.className = 'pricing-tier-card tier-processo';

  let currentBase = props.precoBaseRecursos;

  let state: ProcessTierInput = {
    metasEficiencia: props.initialData?.metasEficiencia && props.initialData.metasEficiencia.length > 0
      ? JSON.parse(JSON.stringify(props.initialData.metasEficiencia))
      : JSON.parse(JSON.stringify(DEFAULT_PROCESS_GOALS))
  };

  function updateAndNotify(): void {
    const result = calculateProcessTier(currentBase, state);
    renderSummary(result);
    if (props.onChange) {
      props.onChange(result, state);
    }
  }

  function renderSummary(result: ProcessTierResult): void {
    const summaryEl = container.querySelector<HTMLElement>('#process-summary-box');
    if (!summaryEl) return;

    summaryEl.innerHTML = `
      <div class="pricing-summary-row">
        <span>Base de Sustentação Mínima (Recursos):</span>
        <span class="pricing-value-mono">${formatCurrencyBRL(result.precoBaseRecursos)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Bônus por Metas de Agilidade e Eficiência (${result.metasAtingidasCount} ativas):</span>
        <span class="pricing-value-mono" style="color: var(--color-processo);">+ ${formatCurrencyBRL(result.totalBonusProcesso)}</span>
      </div>
      <div class="pricing-summary-row total-piso" style="border-top-color: rgba(16, 185, 129, 0.25);">
        <div>
          <span style="color: var(--color-processo);">Preço da Faixa de Eficiência:</span>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400; margin-top: 0.15rem;">
            Preço competitivo recomendado para equipes ágeis com alta previsibilidade
          </div>
        </div>
        <span class="pricing-value-mono" style="color: var(--color-processo); font-size: 1.25rem;">
          ${formatCurrencyBRL(result.precoProcessoSemImpostos)}
        </span>
      </div>
    `;
  }

  function renderGoals(): void {
    const listEl = container.querySelector<HTMLElement>('#process-goals-list');
    if (!listEl) return;

    listEl.innerHTML = '';

    state.metasEficiencia.forEach((goal, idx) => {
      const card = document.createElement('div');
      card.style.display = 'flex';
      card.style.justifyContent = 'space-between';
      card.style.alignItems = 'center';
      card.style.padding = '0.9rem 1.15rem';
      card.style.background = goal.atingida ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-card-inner)';
      card.style.border = `1px solid ${goal.atingida ? 'rgba(16, 185, 129, 0.35)' : 'var(--border-inner)'}`;
      card.style.borderRadius = '8px';
      card.style.cursor = 'pointer';
      card.style.transition = 'all 0.2s ease';

      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <input type="checkbox" id="goal-check-${idx}" ${goal.atingida ? 'checked' : ''} style="cursor: pointer; width: 18px; height: 18px; accent-color: var(--color-processo);" />
          <div>
            <label for="goal-check-${idx}" style="font-weight: 700; font-size: 0.92rem; color: var(--text-title); cursor: pointer; display: block;">
              ${goal.nome}
            </label>
            <span style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">
              ${goal.descricao}
            </span>
          </div>
        </div>
        <div style="text-align: right; flex-shrink: 0; margin-left: 1rem;">
          <span style="font-weight: 800; font-family: var(--font-mono); color: var(--color-processo); font-size: 0.95rem;">
            + ${formatCurrencyBRL(goal.bonusValor)}
          </span>
          <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">
            ${goal.tipoBonus === 'percentual' ? '% sobre base' : 'bônus fixo'}
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).tagName !== 'INPUT') {
          goal.atingida = !goal.atingida;
        } else {
          goal.atingida = (e.target as HTMLInputElement).checked;
        }
        renderGoals();
        updateAndNotify();
      });

      listEl.appendChild(card);
    });
  }

  // Card Skeleton
  container.innerHTML = `
    <div class="pricing-tier-header">
      <div class="pricing-tier-title-box">
        <span class="pricing-tier-badge" style="background-color: rgba(16, 185, 129, 0.12); color: var(--color-processo); border: 1px solid rgba(16, 185, 129, 0.25);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle></svg>
          Faixa 2 • Eficiência Competitiva
        </span>
        <h2 class="pricing-tier-name">Métricas de Processo (Agilidade & DORA)</h2>
        <p class="pricing-tier-desc">
          Responde à pergunta: <em>"Quão eficientemente nós entregamos?"</em>. Alinha incentivos entre fornecedor e cliente, remunerando a alta velocidade com estabilidade e previsibilidade.
        </p>
      </div>
    </div>

    <!-- Lista de Metas de Eficiência -->
    <div style="margin-bottom: 0.75rem;">
      <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-title);">Metas de Performance Operacional (DORA & Scrum)</span>
    </div>

    <div id="process-goals-list" style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem;"></div>

    <!-- Caixa de Resumo de Processo -->
    <div class="pricing-summary-box" id="process-summary-box"></div>
  `;

  renderGoals();
  updateAndNotify();

  return {
    element: container,
    updateBaseRecursos: (novaBase: number) => {
      currentBase = novaBase;
      updateAndNotify();
    },
    getState: () => ({
      input: JSON.parse(JSON.stringify(state)),
      result: calculateProcessTier(currentBase, state)
    }),
    setState: (newData: Partial<ProcessTierInput>) => {
      state = {
        ...state,
        ...newData,
        metasEficiencia: newData.metasEficiencia ? JSON.parse(JSON.stringify(newData.metasEficiencia)) : state.metasEficiencia
      };
      renderGoals();
      updateAndNotify();
    }
  };
}

