import {
  calculateResourceTier,
  formatCurrencyBRL,
  DEFAULT_TEAM_ROLES,
  type ResourceTierInput,
  type ResourceTierResult
} from '../../services/pricingEngine';

export interface ResourceTierProps {
  initialData?: Partial<ResourceTierInput>;
  onChange?: (result: ResourceTierResult, input: ResourceTierInput) => void;
}

export function createResourceTierComponent(props: ResourceTierProps = {}): {
  element: HTMLElement;
  getState: () => { input: ResourceTierInput; result: ResourceTierResult };
  setState: (data: Partial<ResourceTierInput>) => void;
} {
  const container = document.createElement('div');
  container.className = 'pricing-tier-card tier-recursos';

  // Internal state
  let state: ResourceTierInput = {
    equipe: props.initialData?.equipe && props.initialData.equipe.length > 0
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
        <span>Custo de Recursos Humanos (Pessoal):</span>
        <span class="pricing-value-mono">${formatCurrencyBRL(result.custoPessoal)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Custos Diretos (Pessoal + Infra + Ferramentas):</span>
        <span class="pricing-value-mono">${formatCurrencyBRL(result.custoDiretoTotal)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Overhead Administrativo (${state.overheadPercentual}%):</span>
        <span class="pricing-value-mono" style="color: var(--text-desc);">+ ${formatCurrencyBRL(result.valorOverhead)}</span>
      </div>
      <div class="pricing-summary-row" style="font-weight: 700; color: var(--text-title);">
        <span>Custo Total de Produção (Break-even):</span>
        <span class="pricing-value-mono">${formatCurrencyBRL(result.custoTotalProducao)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Margem de Lucro Bruta (${state.margemLucroPercentual}%):</span>
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
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="text" class="pricing-input member-funcao" value="${member.funcao}" data-index="${index}" placeholder="Ex: Desenvolvedor Pleno" />
        </td>
        <td style="width: 80px;">
          <input type="number" min="1" step="1" class="pricing-input pricing-input-num member-qtd" value="${member.quantidade}" data-index="${index}" />
        </td>
        <td style="width: 120px;">
          <input type="number" min="0" step="5" class="pricing-input pricing-input-num member-valor-hora" value="${member.custoHora}" data-index="${index}" />
        </td>
        <td style="width: 110px;">
          <input type="number" min="1" step="8" class="pricing-input pricing-input-num member-horas" value="${member.horas}" data-index="${index}" />
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

    <!-- Tabela Dinâmica de Recursos Humanos -->
    <div style="margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-title);">1. Equipe Técnica & Horas de Trabalho</span>
      <button class="pricing-btn-add" id="btn-add-member">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Adicionar Função
      </button>
    </div>

    <div class="pricing-table-wrapper">
      <table class="pricing-table">
        <thead>
          <tr>
            <th>Função / Perfil Técnico</th>
            <th style="text-align: right;">Qtd</th>
            <th style="text-align: right;">Custo/h (R$)</th>
            <th style="text-align: right;">Horas</th>
            <th style="text-align: right;">Total (R$)</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="team-table-body"></tbody>
      </table>
    </div>

    <!-- Custos de Infraestrutura, Overhead e Margem -->
    <div class="pricing-params-grid">
      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-infra">Infraestrutura & Nuvem (R$)</label>
        <input type="number" min="0" step="100" class="pricing-input pricing-input-num" id="input-infra" value="${state.infraestrutura}" />
        <span class="pricing-field-hint">Servidores, banco de dados, storage, tráfego</span>
      </div>

      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-ferr">Ferramentas & Licenças (R$)</label>
        <input type="number" min="0" step="50" class="pricing-input pricing-input-num" id="input-ferr" value="${state.ferramentas}" />
        <span class="pricing-field-hint">IDEs, CI/CD, monitoramento, SaaS</span>
      </div>

      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-overhead">Overhead Administrativo (%)</label>
        <input type="number" min="0" max="100" step="5" class="pricing-input pricing-input-num" id="input-overhead" value="${state.overheadPercentual}" />
        <span class="pricing-field-hint">Financeiro, jurídico, comercial (sugestão: 20-40%)</span>
      </div>

      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-margem">Margem de Lucro Desejada (%)</label>
        <input type="number" min="0" max="200" step="5" class="pricing-input pricing-input-num" id="input-margem" value="${state.margemLucroPercentual}" />
        <span class="pricing-field-hint">Margem bruta antes dos impostos</span>
      </div>
    </div>

    <!-- Caixa de Resumo do Piso -->
    <div class="pricing-summary-box" id="resource-summary-box"></div>
  `;

  // Bind fixed inputs
  const inputInfra = container.querySelector<HTMLInputElement>('#input-infra');
  const inputFerr = container.querySelector<HTMLInputElement>('#input-ferr');
  const inputOverhead = container.querySelector<HTMLInputElement>('#input-overhead');
  const inputMargem = container.querySelector<HTMLInputElement>('#input-margem');

  inputInfra?.addEventListener('input', (e) => {
    state.infraestrutura = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  inputFerr?.addEventListener('input', (e) => {
    state.ferramentas = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  inputOverhead?.addEventListener('input', (e) => {
    state.overheadPercentual = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  inputMargem?.addEventListener('input', (e) => {
    state.margemLucroPercentual = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  // Add member button
  const btnAdd = container.querySelector<HTMLButtonElement>('#btn-add-member');
  btnAdd?.addEventListener('click', () => {
    const rolePreset = DEFAULT_TEAM_ROLES[state.equipe.length % DEFAULT_TEAM_ROLES.length];
    state.equipe.push({
      id: `role-${Date.now()}`,
      funcao: rolePreset.funcao,
      quantidade: rolePreset.quantidade,
      custoHora: rolePreset.custoHora,
      horas: rolePreset.horas
    });
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
    setState: (newData: Partial<ResourceTierInput>) => {
      state = {
        ...state,
        ...newData,
        equipe: newData.equipe ? JSON.parse(JSON.stringify(newData.equipe)) : state.equipe
      };
      if (inputInfra) inputInfra.value = String(state.infraestrutura);
      if (inputFerr) inputFerr.value = String(state.ferramentas);
      if (inputOverhead) inputOverhead.value = String(state.overheadPercentual);
      if (inputMargem) inputMargem.value = String(state.margemLucroPercentual);
      renderRows();
      updateAndNotify();
    }
  };
}
