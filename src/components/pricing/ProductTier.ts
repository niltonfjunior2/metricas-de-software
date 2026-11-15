import {
  calculateProductTier,
  formatCurrencyBRL,
  formatPercent,
  type ProductTierInput,
  type ProductTierResult
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
    modeloCaptura: props.initialData?.modeloCaptura ?? 'value_based',
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
          Responde à pergunta: <em>"Qual impacto positivo o software gerou para o cliente?"</em>. O preço é atrelado aos resultados mensuráveis de negócio (aumento de vendas, ganho de conversão ou economia de custos).
        </p>
      </div>
    </div>

    <!-- Inputs de Impacto Financeiro e Percentual de Captura -->
    <div class="pricing-params-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-bottom: 1.25rem;">
      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-outcome-value">Impacto Financeiro Estimado do Cliente (R$)</label>
        <input type="number" min="0" step="5000" class="pricing-input pricing-input-num" id="input-outcome-value" value="${state.resultadoClienteEstimado > 0 ? state.resultadoClienteEstimado : ''}" placeholder="0" />
        <span class="pricing-field-hint">Economia gerada ou receita extra conquistada pelo cliente com o software</span>
      </div>

      <div class="pricing-field-group">
        <label class="pricing-field-label" for="input-capture-pct">Percentual de Captura do Fornecedor (%)</label>
        <input type="number" min="0" max="100" step="1" class="pricing-input pricing-input-num" id="input-capture-pct" value="${state.percentualCaptura > 0 ? state.percentualCaptura : ''}" placeholder="0" />
        <span class="pricing-field-hint">Fração justa do resultado retida pela TI (sugestão de mercado: 10% a 30%)</span>
      </div>
    </div>

    <!-- Card Didático: Modelos de Captura de Valor no Mercado de Software -->
    <div style="margin: 1.25rem 0; padding: 1.1rem 1.25rem; background: var(--bg-card-inner); border-radius: 8px; border: 1px solid var(--border-inner); font-size: 0.84rem; line-height: 1.6;">
      <div style="font-weight: 700; color: var(--color-produto); display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        💡 Modelos de Captura de Valor no Mercado de Software
      </div>
      <div style="color: var(--text-secondary); display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem; margin-top: 0.5rem;">
        <div>
          <strong style="color: var(--text-title);">• Economia de Custos (Cost Savings):</strong><br />
          O impacto financeiro é mensurado pela redução de despesas operacionais, custos de infraestrutura ou eliminação de desperdícios (ex.: automações de processos repetitivos, otimização e governança de nuvem/FinOps).
        </div>
        <div>
          <strong style="color: var(--text-title);">• Participação na Receita (Revenue Share):</strong><br />
          O valor é ancorado no volume de receita bruta adicional, vendas ou transações diretamente viabilizadas pelo software (ex.: plataformas de e-commerce, gateways de pagamento, marketplaces).
        </div>
        <div>
          <strong style="color: var(--text-title);">• Baseado em Performance (Value-Based):</strong><br />
          Remuneração vinculada ao alcance de indicadores-chave de desempenho comercial ou operacional (ex.: aumento na taxa de conversão de leads, redução de cancelamentos/churn, retenção de clientes).
        </div>
      </div>
      <div style="margin-top: 0.6rem; font-size: 0.78rem; color: var(--text-muted); border-top: 1px dashed var(--border-inner); padding-top: 0.4rem;">
        Nota: Em todos os modelos acima, a formação do preço teto calcula a fração percentual de captura sobre o resultado projetado somada ao piso de sustentação da TI.
      </div>
    </div>

    <!-- Caixa de Resumo de Produto -->
    <div class="pricing-summary-box" id="product-summary-box"></div>
  `;

  // Bind inputs
  const inputOutcome = container.querySelector<HTMLInputElement>('#input-outcome-value');
  const inputPct = container.querySelector<HTMLInputElement>('#input-capture-pct');

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
      if (inputOutcome) inputOutcome.value = state.resultadoClienteEstimado > 0 ? String(state.resultadoClienteEstimado) : '';
      if (inputPct) inputPct.value = state.percentualCaptura > 0 ? String(state.percentualCaptura) : '';
      updateAndNotify();
    }
  };
}
