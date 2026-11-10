import {
  calculateProductTier,
  formatCurrencyBRL,
  formatPercent,
  type ProductTierInput,
  type ProductTierResult,
  type ProductCaptureModel
} from '../../services/pricingEngine';

export interface ProductTierProps {
  precoBaseRecursos: number;
  initialData?: Partial<ProductTierInput>;
  onChange?: (result: ProductTierResult, input: ProductTierInput) => void;
}

export function createProductTierComponent(props: ProductTierProps): {
  element: HTMLElement;
  updateBaseRecursos: (novaBase: number) => void;
  getState: () => { input: ProductTierInput; result: ProductTierResult };
  setState: (data: Partial<ProductTierInput>) => void;
} {
  const container = document.createElement('div');
  container.className = 'pricing-tier-card tier-produto';

  let currentBase = props.precoBaseRecursos;

  let state: ProductTierInput = {
    modeloCaptura: props.initialData?.modeloCaptura ?? 'cost_savings',
    resultadoClienteEstimado: props.initialData?.resultadoClienteEstimado ?? 200000,
    percentualCaptura: props.initialData?.percentualCaptura ?? 20
  };

  function updateAndNotify(): void {
    const result = calculateProductTier(currentBase, state);
    renderSummary(result);
    if (props.onChange) {
      props.onChange(result, state);
    }
  }

  function renderSummary(result: ProductTierResult): void {
    const summaryEl = container.querySelector<HTMLElement>('#product-summary-box');
    if (!summaryEl) return;

    summaryEl.innerHTML = `
      <div class="pricing-summary-row">
        <span>Base de Sustentação Mínima (Recursos):</span>
        <span class="pricing-value-mono">${formatCurrencyBRL(result.precoBaseRecursos)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Resultado Gerado para o Negócio do Cliente:</span>
        <span class="pricing-value-mono" style="color: var(--text-title);">${formatCurrencyBRL(result.resultadoClienteEstimado)}</span>
      </div>
      <div class="pricing-summary-row">
        <span>Participação por Captura de Valor (${state.percentualCaptura}%):</span>
        <span class="pricing-value-mono" style="color: var(--color-produto);">+ ${formatCurrencyBRL(result.valorCapturadoProduto)}</span>
      </div>
      <div class="pricing-summary-row" style="background: rgba(139, 92, 246, 0.08); padding: 0.5rem 0.75rem; border-radius: 6px;">
        <span style="font-weight: 600; color: var(--color-produto);">Relação Ganha-Ganha (Win-Win):</span>
        <span style="font-size: 0.85rem; color: var(--text-title);">
          O cliente retém <strong>${formatPercent(100 - result.participacaoNoResultadoPercentual)}</strong> do valor e investe <strong>${formatPercent(result.participacaoNoResultadoPercentual)}</strong>
        </span>
      </div>
      <div class="pricing-summary-row total-piso" style="border-top-color: rgba(139, 92, 246, 0.25);">
        <div>
          <span style="color: var(--color-produto);">Preço Teto de Valor:</span>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400; margin-top: 0.15rem;">
            Preço máximo justificado pelo retorno mensurável proporcionado ao cliente
          </div>
        </div>
        <span class="pricing-value-mono" style="color: var(--color-produto); font-size: 1.25rem;">
          ${formatCurrencyBRL(result.precoProdutoSemImpostos)}
        </span>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="pricing-tier-header">
      <div class="pricing-tier-title-box">
        <span class="pricing-tier-badge" style="background-color: rgba(139, 92, 246, 0.12); color: var(--color-produto); border: 1px solid rgba(139, 92, 246, 0.25);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle></svg>
          Faixa 3 • O Teto de Valor
        </span>
        <h2 class="pricing-tier-name">Métricas de Produto (Outcome & Impacto)</h2>
        <p class="pricing-tier-desc">
          Responde à pergunta: <em>"Qual impacto positivo o software gerou para o cliente?"</em>. O preço é atrelado aos resultados mensuráveis de negócio (aumento de vendas ou economia de custos).
        </p>
      </div>
    </div>

    <!-- Seletor de Modelo de Captura -->
    <div class="pricing-params-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
      <div class="pricing-field-group">
        <label class="pricing-field-label" for="select-capture-model">Modelo de Captura de Valor</label>
        <select class="pricing-input" id="select-capture-model" style="cursor: pointer;">
          <option value="cost_savings" ${state.modeloCaptura === 'cost_savings' ? 'selected' : ''}>Economia de Custos (Cost Savings)</option>
          <option value="revenue_share" ${state.modeloCaptura === 'revenue_share' ? 'selected' : ''}>Participação na Receita (Revenue Share)</option>
          <option value="value_based" ${state.modeloCaptura === 'value_based' ? 'selected' : ''}>Baseado em Performance / Conversão</option>
        </select>
        <span class="pricing-field-hint" id="capture-model-hint">Comum em automações, otimizações e migrações de nuvem</span>
      </div>

      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-outcome-value">Impacto Financeiro Estimado do Cliente (R$)</label>
        <input type="number" min="0" step="5000" class="pricing-input pricing-input-num" id="input-outcome-value" value="${state.resultadoClienteEstimado}" />
        <span class="pricing-field-hint">Economia gerada ou receita extra conquistada</span>
      </div>

      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-capture-pct">Percentual de Captura do Fornecedor (%)</label>
        <input type="number" min="0" max="50" step="1" class="pricing-input pricing-input-num" id="input-capture-pct" value="${state.percentualCaptura}" />
        <span class="pricing-field-hint">Fração justa do resultado retida pela TI (sugestão: 10% a 30%)</span>
      </div>
    </div>

    <!-- Caixa de Resumo de Produto -->
    <div class="pricing-summary-box" id="product-summary-box"></div>
  `;

  // Bind inputs
  const selectModel = container.querySelector<HTMLSelectElement>('#select-capture-model');
  const inputOutcome = container.querySelector<HTMLInputElement>('#input-outcome-value');
  const inputPct = container.querySelector<HTMLInputElement>('#input-capture-pct');
  const hintEl = container.querySelector<HTMLElement>('#capture-model-hint');

  const hintsMap: Record<ProductCaptureModel, string> = {
    cost_savings: 'Comum em automações, otimizações de processo e FinOps de nuvem.',
    revenue_share: 'Comum em plataformas de e-commerce, marketplaces e SaaS B2B.',
    value_based: 'Comum em captação de leads qualificados e aumento de conversão.'
  };

  selectModel?.addEventListener('change', (e) => {
    state.modeloCaptura = (e.target as HTMLSelectElement).value as ProductCaptureModel;
    if (hintEl) hintEl.textContent = hintsMap[state.modeloCaptura];
    updateAndNotify();
  });

  inputOutcome?.addEventListener('input', (e) => {
    state.resultadoClienteEstimado = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  inputPct?.addEventListener('input', (e) => {
    state.percentualCaptura = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    updateAndNotify();
  });

  updateAndNotify();

  return {
    element: container,
    updateBaseRecursos: (novaBase: number) => {
      currentBase = novaBase;
      updateAndNotify();
    },
    getState: () => ({
      input: JSON.parse(JSON.stringify(state)),
      result: calculateProductTier(currentBase, state)
    }),
    setState: (newData: Partial<ProductTierInput>) => {
      state = { ...state, ...newData };
      if (selectModel) selectModel.value = state.modeloCaptura;
      if (inputOutcome) inputOutcome.value = String(state.resultadoClienteEstimado);
      if (inputPct) inputPct.value = String(state.percentualCaptura);
      if (hintEl) hintEl.textContent = hintsMap[state.modeloCaptura];
      updateAndNotify();
    }
  };
}

