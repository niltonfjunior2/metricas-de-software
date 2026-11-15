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
    metasEficiencia: props.initialData?.metasEficiencia !== undefined
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
        <span>Acréscimo por Eficiência do Processo (${result.metasAtingidasCount} ativas):</span>
        <span class="pricing-value-mono" style="color: var(--color-processo);">+ ${formatCurrencyBRL(result.totalBonusProcesso)}</span>
      </div>
      <div class="pricing-summary-row total-piso" style="border-top-color: rgba(16, 185, 129, 0.25);">
        <div>
          <span style="color: var(--color-processo);">Preço da Faixa de Processo:</span>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400; margin-top: 0.15rem;">
            Preço competitivo com valorização da maturidade operacional sobre a base de recursos
          </div>
        </div>
        <span class="pricing-value-mono" style="color: var(--color-processo); font-size: 1.25rem;">
          ${formatCurrencyBRL(result.precoProcessoSemImpostos)}
        </span>
      </div>
    `;
  }

  function renderRows(): void {
    const tbody = container.querySelector<HTMLTableSectionElement>('#process-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    state.metasEficiencia.forEach((goal, idx) => {
      const valorAcrescido = goal.tipoBonus === 'percentual'
        ? currentBase * (Math.max(0, goal.bonusValor) / 100)
        : Math.max(0, goal.bonusValor);

      const tr = document.createElement('tr');
      tr.style.opacity = goal.atingida ? '1' : '0.55';
      tr.style.transition = 'opacity 0.2s ease';

      tr.innerHTML = `
        <td style="width: 44px; text-align: center;">
          <input type="checkbox" class="goal-check" data-index="${idx}" ${goal.atingida ? 'checked' : ''} style="cursor: pointer; width: 17px; height: 17px; accent-color: var(--color-processo);" title="Ativar ou desativar esta métrica" />
        </td>
        <td>
          <input type="text" class="pricing-input goal-nome" data-index="${idx}" value="${goal.nome}" placeholder="Ex: Redução de Ciclo, Aderência a Prazos" />
        </td>
        <td style="width: 140px;">
          <select class="pricing-input goal-tipo" data-index="${idx}" style="cursor: pointer;">
            <option value="percentual" ${goal.tipoBonus === 'percentual' ? 'selected' : ''}>% (sobre piso)</option>
            <option value="fixo" ${goal.tipoBonus === 'fixo' ? 'selected' : ''}>R$ (fixo)</option>
          </select>
        </td>
        <td style="width: 110px;">
          <input type="number" min="0" step="${goal.tipoBonus === 'percentual' ? '1' : '500'}" class="pricing-input pricing-input-num goal-valor" data-index="${idx}" value="${goal.bonusValor > 0 ? goal.bonusValor : ''}" placeholder="0" />
        </td>
        <td style="width: 130px; text-align: right; font-weight: 700; font-family: var(--font-mono); color: var(--color-processo);">
          + ${formatCurrencyBRL(valorAcrescido)}
        </td>
        <td style="width: 44px; text-align: center;">
          <button class="pricing-btn-icon btn-remove-goal" data-index="${idx}" title="Remover métrica" aria-label="Remover métrica">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </td>
      `;

      tbody.appendChild(tr);
    });

    // Event listeners
    tbody.querySelectorAll<HTMLInputElement>('.goal-check').forEach((chk) => {
      chk.addEventListener('change', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.metasEficiencia[idx].atingida = (e.target as HTMLInputElement).checked;
        renderRows();
        updateAndNotify();
      });
    });

    tbody.querySelectorAll<HTMLInputElement>('.goal-nome').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.metasEficiencia[idx].nome = (e.target as HTMLInputElement).value;
        if (props.onChange) props.onChange(calculateProcessTier(currentBase, state), state);
      });
    });

    tbody.querySelectorAll<HTMLSelectElement>('.goal-tipo').forEach((sel) => {
      sel.addEventListener('change', (e) => {
        const idx = Number((e.target as HTMLSelectElement).dataset.index);
        state.metasEficiencia[idx].tipoBonus = (e.target as HTMLSelectElement).value as 'percentual' | 'fixo';
        renderRows();
        updateAndNotify();
      });
    });

    tbody.querySelectorAll<HTMLInputElement>('.goal-valor').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.metasEficiencia[idx].bonusValor = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
        renderRows();
        updateAndNotify();
      });
    });

    tbody.querySelectorAll<HTMLButtonElement>('.btn-remove-goal').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetBtn = (e.target as HTMLElement).closest('.btn-remove-goal') as HTMLButtonElement;
        const idx = Number(targetBtn.dataset.index);
        state.metasEficiencia.splice(idx, 1);
        renderRows();
        updateAndNotify();
      });
    });
  }

  // Card Skeleton
  container.innerHTML = `
    <div class="pricing-tier-header">
      <div class="pricing-tier-title-box">
        <span class="pricing-tier-badge" style="background-color: rgba(16, 185, 129, 0.12); color: var(--color-processo); border: 1px solid rgba(16, 185, 129, 0.25);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle></svg>
          Faixa 2 • Eficiência do Processo
        </span>
        <h2 class="pricing-tier-name">Métricas de Processo (Maturidade & Execução)</h2>
        <p class="pricing-tier-desc">
          Responde à pergunta: <em>"Como o processo de produção influencia o preço?"</em>. Avalia a maturidade de execução, previsibilidade, qualidade do fluxo de trabalho e redução de desperdícios.
        </p>
      </div>
    </div>

    <!-- Tabela Dinâmica de Métricas de Processo -->
    <div style="margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-title);">1. Métricas de Eficiência e Operação do Processo</span>
      <button class="pricing-btn-add" id="btn-add-process-metric" style="color: var(--color-processo); border-color: rgba(16, 185, 129, 0.4);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Adicionar Métrica de Processo
      </button>
    </div>

    <div class="pricing-table-wrapper">
      <table class="pricing-table">
        <thead>
          <tr>
            <th style="width: 44px; text-align: center;">Ativa</th>
            <th>Métrica de Processo</th>
            <th style="width: 140px;">Tipo</th>
            <th style="width: 110px; text-align: right;">Valor</th>
            <th style="width: 130px; text-align: right;">Acréscimo (R$)</th>
            <th style="width: 44px;"></th>
          </tr>
        </thead>
        <tbody id="process-table-body"></tbody>
      </table>
    </div>

    <!-- Card Didático: Sugestões de Métricas de Processo -->
    <div style="margin: 1.25rem 0; padding: 1.1rem 1.25rem; background: var(--bg-card-inner); border-radius: 8px; border: 1px solid var(--border-inner); font-size: 0.84rem; line-height: 1.6;">
      <div style="font-weight: 700; color: var(--color-processo); display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        💡 Lembrete Didático: Quais métricas de processo considerar?
      </div>
      <div style="color: var(--text-secondary); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 0.5rem;">
        <div>
          <strong style="color: var(--text-title);">• Tempo de Ciclo (Cycle Time / Lead Time):</strong> Velocidade do fluxo entre a demanda inicial e a entrega final validada em produção.
        </div>
        <div>
          <strong style="color: var(--text-title);">• Taxa de Retrabalho (Rework Rate):</strong> Percentual de horas despendidas corrigindo defeitos ou refazendo etapas mal especificadas.
        </div>
        <div>
          <strong style="color: var(--text-title);">• Densidade e Eficácia de Remoção de Defeitos:</strong> Capacidade do processo de filtrar falhas nas etapas de testes e validação contínua.
        </div>
        <div>
          <strong style="color: var(--text-title);">• Aderência ao Cronograma e Previsibilidade:</strong> Conformidade das entregas aos prazos estipulados no planejamento.
        </div>
      </div>
      <div style="margin-top: 0.6rem; font-size: 0.78rem; color: var(--text-muted); border-top: 1px dashed var(--border-inner); padding-top: 0.4rem;">
        Dica: Métricas de processo podem ser expressas como <strong>porcentagem (%)</strong> adicional sobre o piso de recursos ou como <strong>valores financeiros (R$)</strong> fixos pelo cumprimento de metas.
      </div>
    </div>

    <!-- Caixa de Resumo de Processo -->
    <div class="pricing-summary-box" id="process-summary-box"></div>
  `;

  // Bind add button
  const btnAdd = container.querySelector<HTMLButtonElement>('#btn-add-process-metric');
  btnAdd?.addEventListener('click', () => {
    state.metasEficiencia.push({
      id: `proc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      nome: '',
      descricao: '',
      bonusValor: 0,
      tipoBonus: 'percentual',
      atingida: true
    });
    renderRows();
    updateAndNotify();
  });

  renderRows();
  updateAndNotify();

  return {
    element: container,
    updateBaseRecursos: (novaBase: number) => {
      currentBase = novaBase;
      renderRows();
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
      renderRows();
      updateAndNotify();
    }
  };
}
