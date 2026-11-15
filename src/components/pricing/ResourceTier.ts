import {
  calculateResourceTier,
  formatCurrencyBRL,
  DEFAULT_TEAM_ROLES,
  type ResourceTierInput,
  type ResourceTierResult
} from '../../services/pricingEngine';

export interface ResourceTierProps {
  initialData?: Partial<ResourceTierInput>;
  isBlankMode?: boolean;
  onChange?: (result: ResourceTierResult, input: ResourceTierInput) => void;
}

export function createResourceTierComponent(props: ResourceTierProps = {}): {
  element: HTMLElement;
  getState: () => { input: ResourceTierInput; result: ResourceTierResult };
  setState: (data: Partial<ResourceTierInput>, isBlank?: boolean) => void;
  setBlankMode: (blank: boolean) => void;
} {
  const container = document.createElement('div');
  container.className = 'pricing-tier-card tier-recursos';

  let isBlankMode = props.isBlankMode ?? false;

  // Internal state
  let state: ResourceTierInput = {
    equipe: props.initialData?.equipe !== undefined
      ? JSON.parse(JSON.stringify(props.initialData.equipe))
      : [
          { id: 'role-1', funcao: 'Desenvolvedor Sênior', quantidade: 1, custoHora: 150, horas: 160 },
          { id: 'role-2', funcao: 'Desenvolvedor Pleno', quantidade: 2, custoHora: 100, horas: 160 },
          { id: 'role-3', funcao: 'Analista de QA / Tester', quantidade: 1, custoHora: 80, horas: 120 }
        ],
    infraestrutura: props.initialData?.infraestrutura ?? 3500,
    ferramentas: props.initialData?.ferramentas ?? 1500,
    overheadPercentual: props.initialData?.overheadPercentual ?? 25,
    margemLucroPercentual: props.initialData?.margemLucroPercentual ?? 30
  };

  function updateAndNotify(): void {
    const result = calculateResourceTier(state);
    renderSummary(result);
    if (props.onChange) {
      props.onChange(result, state);
    }
  }

  function renderSummary(result: ResourceTierResult): void {
    const summaryEl = container.querySelector<HTMLElement>('#resource-summary-box');
    if (!summaryEl) return;

    summaryEl.innerHTML = `
      <div class="pricing-summary-row">
        <span>Custo Total de Recursos & Insumos:</span>
        <span class="pricing-value-mono">${formatCurrencyBRL(result.custoTotalProducao)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Margem de Lucro Desejada (${state.margemLucroPercentual}%):</span>
        <span class="pricing-value-mono" style="color: var(--accent-cyan);">+ ${formatCurrencyBRL(result.valorMargemLucro)}</span>
      </div>
      <div class="pricing-summary-row total-piso">
        <div>
          <span>Preço Piso de Recursos:</span>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400; margin-top: 0.15rem;">
            Valor mínimo de venda antes da incidência de impostos
          </div>
        </div>
        <span class="pricing-value-mono pricing-value-piso">${formatCurrencyBRL(result.precoPisoSemImpostos)}</span>
      </div>
    `;
  }

  function renderRows(): void {
    const tbody = container.querySelector<HTMLTableSectionElement>('#team-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    state.equipe.forEach((member, index) => {
      const subtotal = Math.max(0, member.quantidade) * Math.max(0, member.custoHora) * Math.max(0, member.horas);
      const qtdVal = member.quantidade > 0 ? member.quantidade : '';
      const custoVal = member.custoHora > 0 ? member.custoHora : '';
      const horasVal = member.horas > 0 ? member.horas : '';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="text" class="pricing-input member-funcao" value="${member.funcao}" data-index="${index}" placeholder="Ex: Desenvolvedor Pleno" />
        </td>
        <td style="width: 80px;">
          <input type="number" min="0" step="1" class="pricing-input pricing-input-num member-qtd" value="${qtdVal}" data-index="${index}" placeholder="0" />
        </td>
        <td style="width: 120px;">
          <input type="number" min="0" step="5" class="pricing-input pricing-input-num member-valor-hora" value="${custoVal}" data-index="${index}" placeholder="0" />
        </td>
        <td style="width: 110px;">
          <input type="number" min="0" step="8" class="pricing-input pricing-input-num member-horas" value="${horasVal}" data-index="${index}" placeholder="0" />
        </td>
        <td style="width: 130px; text-align: right; font-weight: 700; font-family: var(--font-mono); color: var(--text-title);">
          ${formatCurrencyBRL(subtotal)}
        </td>
        <td style="width: 44px; text-align: center;">
          <button class="pricing-btn-icon btn-remove-member" data-index="${index}" title="Remover função" aria-label="Remover função">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </td>
      `;

      tbody.appendChild(tr);
    });

    // Bind row events
    tbody.querySelectorAll<HTMLInputElement>('.member-funcao').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.equipe[idx].funcao = (e.target as HTMLInputElement).value;
        if (props.onChange) props.onChange(calculateResourceTier(state), state);
      });
    });

    tbody.querySelectorAll<HTMLInputElement>('.member-qtd').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.equipe[idx].quantidade = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
        renderRows();
        updateAndNotify();
      });
    });

    tbody.querySelectorAll<HTMLInputElement>('.member-valor-hora').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.equipe[idx].custoHora = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
        renderRows();
        updateAndNotify();
      });
    });

    tbody.querySelectorAll<HTMLInputElement>('.member-horas').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number((e.target as HTMLInputElement).dataset.index);
        state.equipe[idx].horas = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
        renderRows();
        updateAndNotify();
      });
    });

    tbody.querySelectorAll<HTMLButtonElement>('.btn-remove-member').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetBtn = (e.target as HTMLElement).closest('.btn-remove-member') as HTMLButtonElement;
        const idx = Number(targetBtn.dataset.index);
        state.equipe.splice(idx, 1);
        renderRows();
        updateAndNotify();
      });
    });
  }

  // Render initial card skeleton
  container.innerHTML = `
    <div class="pricing-tier-header">
      <div class="pricing-tier-title-box">
        <span class="pricing-tier-badge badge-tier-recursos">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle></svg>
          Faixa 1 • O Piso de Sobrevivência
        </span>
        <h2 class="pricing-tier-name">Métricas de Recursos (Insumos)</h2>
        <p class="pricing-tier-desc">
          Responde à pergunta: <em>"Quanto custa para fazer?"</em>. Calcula todos os custos diretos e indiretos necessários para executar o serviço sem prejuízo.
        </p>
      </div>
    </div>

    <!-- Tabela Dinâmica de Recursos do Projeto -->
    <div style="margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-title);">1. Métricas de Recursos & Insumos do Projeto</span>
      <button class="pricing-btn-add" id="btn-add-member">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Adicionar Recurso
      </button>
    </div>

    <div class="pricing-table-wrapper">
      <table class="pricing-table">
        <thead>
          <tr>
            <th>Item / Métrica de Recurso</th>
            <th style="text-align: right;">Qtd</th>
            <th style="text-align: right;">Custo Unitário (R$)</th>
            <th style="text-align: right;">Unidades / Horas</th>
            <th style="text-align: right;">Total (R$)</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="team-table-body"></tbody>
      </table>
    </div>

    <!-- Card Didático: Sugestões de Recursos a Considerar -->
    <div style="margin: 1.25rem 0; padding: 1.1rem 1.25rem; background: var(--bg-card-inner); border-radius: 8px; border: 1px solid var(--border-inner); font-size: 0.84rem; line-height: 1.6;">
      <div style="font-weight: 700; color: var(--accent-cyan); display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        💡 Lembrete Didático: Quais métricas de recursos considerar?
      </div>
      <div style="color: var(--text-secondary); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 0.5rem;">
        <div>
          <strong style="color: var(--text-title);">• Pessoas & Equipe:</strong> Horas de desenvolvimento, QA/testes, design UX/UI, gestão, DevOps e liderança técnica.
        </div>
        <div>
          <strong style="color: var(--text-title);">• Infraestrutura & Nuvem:</strong> Servidores (AWS/Azure/GCP), banco de dados gerenciado, storage, tráfego e domínios.
        </div>
        <div>
          <strong style="color: var(--text-title);">• Ferramentas & Licenças:</strong> IDEs pagas, esteira de CI/CD, monitoramento/APM, ferramentas de prototipação e APIs pagas.
        </div>
        <div>
          <strong style="color: var(--text-title);">• Overhead & Administrativo:</strong> Custos de assessoria contábil, jurídica, instalações físicas, energia e telecomunicações.
        </div>
      </div>
      <div style="margin-top: 0.6rem; font-size: 0.78rem; color: var(--text-muted); border-top: 1px dashed var(--border-inner); padding-top: 0.4rem;">
        Dica: Para incluir custos fixos ou mensais na tabela acima, informe <strong>Qtd = 1</strong>, <strong>Custo Unitário</strong> = valor do item e <strong>Unidades / Horas</strong> = 1 (ou número de meses).
      </div>
    </div>

    <!-- Margem de Lucro Desejada -->
    <div style="margin-bottom: 1.25rem; max-width: 320px;">
      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-margem">Margem de Lucro Desejada (%)</label>
        <input type="number" min="0" max="200" step="5" class="pricing-input pricing-input-num" id="input-margem" value="${state.margemLucroPercentual > 0 ? state.margemLucroPercentual : ''}" placeholder="0" />
        <span class="pricing-field-hint">Margem bruta sobre o total de recursos e insumos</span>
      </div>
    </div>

    <!-- Caixa de Resumo do Piso -->
    <div class="pricing-summary-box" id="resource-summary-box"></div>
  `;

  // Bind fixed inputs
  const inputMargem = container.querySelector<HTMLInputElement>('#input-margem');

  inputMargem?.addEventListener('input', (e) => {
    state.margemLucroPercentual = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  // Add member button
  const btnAdd = container.querySelector<HTMLButtonElement>('#btn-add-member');
  btnAdd?.addEventListener('click', () => {
    if (isBlankMode || state.equipe.length === 0) {
      state.equipe.push({
        id: `role-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        funcao: '',
        quantidade: 0,
        custoHora: 0,
        horas: 0
      });
    } else {
      const rolePreset = DEFAULT_TEAM_ROLES[state.equipe.length % DEFAULT_TEAM_ROLES.length];
      state.equipe.push({
        id: `role-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        funcao: rolePreset.funcao,
        quantidade: rolePreset.quantidade,
        custoHora: rolePreset.custoHora,
        horas: rolePreset.horas
      });
    }
    renderRows();
    updateAndNotify();
  });

  // Initial render
  renderRows();
  updateAndNotify();

  return {
    element: container,
    getState: () => ({
      input: JSON.parse(JSON.stringify(state)),
      result: calculateResourceTier(state)
    }),
    setState: (newData: Partial<ResourceTierInput>, isBlank: boolean = false) => {
      isBlankMode = isBlank;
      state = {
        ...state,
        ...newData,
        equipe: newData.equipe !== undefined ? JSON.parse(JSON.stringify(newData.equipe)) : state.equipe
      };
      if (inputMargem) inputMargem.value = state.margemLucroPercentual > 0 ? String(state.margemLucroPercentual) : '';
      renderRows();
      updateAndNotify();
    },
    setBlankMode: (blank: boolean) => {
      isBlankMode = blank;
    }
  };
}
