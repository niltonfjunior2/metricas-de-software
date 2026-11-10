import {
  formatCurrencyBRL,
  formatPercent,
  type FullPricingComparisonResult
} from '../../services/pricingEngine';

export interface ComparisonDashboardProps {
  data: FullPricingComparisonResult;
  onCopyProposal?: () => void;
  onPrint?: () => void;
}

export function createComparisonDashboardComponent(props: ComparisonDashboardProps): {
  element: HTMLElement;
  updateData: (newData: FullPricingComparisonResult) => void;
} {
  const container = document.createElement('div');
  container.className = 'pricing-tier-card';
  container.style.border = '2px solid var(--border-inner)';
  container.style.background = 'var(--bg-card)';

  let currentData = { ...props.data };

  function render(): void {
    const { pisoRecursos, eficienciaProcesso, tetoProduto, aliquotaImposto, isFiscalmenteValido } = currentData;

    // Calcular valores máximos para escala visual das barras
    const maxVal = Math.max(
      pisoRecursos.precoFinalComImpostos,
      eficienciaProcesso.precoFinalComImpostos,
      tetoProduto.precoFinalComImpostos,
      1
    );

    const pctBarPiso = Math.min(100, (pisoRecursos.precoFinalComImpostos / maxVal) * 100);
    const pctBarProc = Math.min(100, (eficienciaProcesso.precoFinalComImpostos / maxVal) * 100);
    const pctBarProd = Math.min(100, (tetoProduto.precoFinalComImpostos / maxVal) * 100);

    const amplitudeNegociacao = Math.max(0, tetoProduto.precoFinalComImpostos - pisoRecursos.precoFinalComImpostos);

    container.innerHTML = `
      <div class="pricing-tier-header" style="border-bottom: 1px solid var(--border-inner); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <div class="pricing-tier-title-box">
          <span class="pricing-tier-badge" style="background-color: rgba(6, 182, 212, 0.12); color: var(--accent-cyan); border: 1px solid rgba(6, 182, 212, 0.25);">
            Visão Consolidada Tridimensional
          </span>
          <h2 class="pricing-tier-name" style="font-size: 1.6rem;">Painel Comparativo de Precificação</h2>
          <p class="pricing-tier-desc">
            Análise simultânea das 3 faixas com governança fiscal: do piso inegociável de custos à captura máxima de valor no negócio do cliente.
          </p>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary" id="btn-copy-proposal" style="font-size: 0.85rem; padding: 0.5rem 1rem; display: inline-flex; align-items: center; gap: 0.4rem;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span id="copy-btn-text">Copiar Proposta</span>
          </button>
          <button type="button" class="btn btn-primary" id="btn-print-proposal" style="font-size: 0.85rem; padding: 0.5rem 1rem; display: inline-flex; align-items: center; gap: 0.4rem;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Imprimir / Salvar PDF</span>
          </button>
        </div>
      </div>

      <!-- 3 Cartões de Preço Lado a Lado -->
      <div class="grid-cards" style="margin-bottom: 2rem;">
        
        <!-- Card 1: Piso (Recursos) -->
        <div class="card" style="border-top: 4px solid var(--color-recursos); background: var(--bg-card-inner);">
          <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-recursos-tag); margin-bottom: 0.25rem;">
            Faixa 1 • Piso Mínimo
          </div>
          <h3 style="font-size: 1.15rem; color: var(--text-title); margin-bottom: 0.5rem;">Recursos (Insumos)</h3>
          
          <div style="margin: 1rem 0;">
            <div style="font-size: 0.78rem; color: var(--text-muted);">Preço Final (com impostos):</div>
            <div style="font-size: 1.65rem; font-weight: 800; font-family: var(--font-mono); color: var(--accent-cyan);">
              ${isFiscalmenteValido ? formatCurrencyBRL(pisoRecursos.precoFinalComImpostos) : '—'}
            </div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; border-top: 1px solid var(--border-inner); padding-top: 0.75rem;">
            <div>Líquido: <strong>${formatCurrencyBRL(pisoRecursos.precoLiquido)}</strong></div>
            <div>Impostos: <strong style="color: #F59E0B;">+ ${formatCurrencyBRL(pisoRecursos.valorImpostos)}</strong></div>
            <div style="margin-top: 0.5rem; color: var(--text-desc); font-size: 0.75rem;">
              Cobre 100% dos insumos e margem. Abaixo disto, há prejuízo garantido.
            </div>
          </div>
        </div>

        <!-- Card 2: Faixa de Eficiência (Processo) -->
        <div class="card" style="border-top: 4px solid var(--color-processo); background: var(--bg-card-inner);">
          <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-processo); margin-bottom: 0.25rem;">
            Faixa 2 • Preço Competitivo
          </div>
          <h3 style="font-size: 1.15rem; color: var(--text-title); margin-bottom: 0.5rem;">Processo (Ágil & DORA)</h3>
          
          <div style="margin: 1rem 0;">
            <div style="font-size: 0.78rem; color: var(--text-muted);">Preço Final (com impostos):</div>
            <div style="font-size: 1.65rem; font-weight: 800; font-family: var(--font-mono); color: var(--color-processo);">
              ${isFiscalmenteValido ? formatCurrencyBRL(eficienciaProcesso.precoFinalComImpostos) : '—'}
            </div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; border-top: 1px solid var(--border-inner); padding-top: 0.75rem;">
            <div>Líquido: <strong>${formatCurrencyBRL(eficienciaProcesso.precoLiquido)}</strong></div>
            <div>Impostos: <strong style="color: #F59E0B;">+ ${formatCurrencyBRL(eficienciaProcesso.valorImpostos)}</strong></div>
            <div style="margin-top: 0.5rem; color: var(--text-desc); font-size: 0.75rem;">
              Remunera o time pela velocidade comprovada e zero incidentes em produção.
            </div>
          </div>
        </div>

        <!-- Card 3: Teto de Valor (Produto) -->
        <div class="card" style="border-top: 4px solid var(--color-produto); background: var(--bg-card-inner);">
          <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-produto); margin-bottom: 0.25rem;">
            Faixa 3 • Teto de Valor
          </div>
          <h3 style="font-size: 1.15rem; color: var(--text-title); margin-bottom: 0.5rem;">Produto (Outcome / ROI)</h3>
          
          <div style="margin: 1rem 0;">
            <div style="font-size: 0.78rem; color: var(--text-muted);">Preço Final (com impostos):</div>
            <div style="font-size: 1.65rem; font-weight: 800; font-family: var(--font-mono); color: var(--color-produto);">
              ${isFiscalmenteValido ? formatCurrencyBRL(tetoProduto.precoFinalComImpostos) : '—'}
            </div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; border-top: 1px solid var(--border-inner); padding-top: 0.75rem;">
            <div>Líquido: <strong>${formatCurrencyBRL(tetoProduto.precoLiquido)}</strong></div>
            <div>Impostos: <strong style="color: #F59E0B;">+ ${formatCurrencyBRL(tetoProduto.valorImpostos)}</strong></div>
            <div style="margin-top: 0.5rem; color: var(--text-desc); font-size: 0.75rem;">
              Preço máximo sustentável ancorado no valor financeiro devolvido ao cliente.
            </div>
          </div>
        </div>

      </div>

      <!-- Gráfico Comparativo em Barras Horizontais -->
      <div style="background-color: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.75rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-title); margin: 0;">
            Comparação Visual de Escala & Composição Tributária
          </h4>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Alíquota Fiscal Efetiva: ${formatPercent(aliquotaImposto)}</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          
          <!-- Barra 1: Recursos -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
              <span style="color: var(--accent-cyan); font-weight: 700;">1. Piso de Recursos</span>
              <span style="font-family: var(--font-mono); font-weight: 700;">${formatCurrencyBRL(pisoRecursos.precoFinalComImpostos)}</span>
            </div>
            <div style="width: 100%; height: 18px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; overflow: hidden; display: flex;">
              <div style="width: ${pctBarPiso}%; height: 100%; background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan)); transition: width 0.3s ease;"></div>
            </div>
          </div>

          <!-- Barra 2: Processo -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
              <span style="color: var(--color-processo); font-weight: 700;">2. Faixa de Processo (Eficiência)</span>
              <span style="font-family: var(--font-mono); font-weight: 700;">${formatCurrencyBRL(eficienciaProcesso.precoFinalComImpostos)}</span>
            </div>
            <div style="width: 100%; height: 18px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; overflow: hidden; display: flex;">
              <div style="width: ${pctBarProc}%; height: 100%; background: linear-gradient(90deg, #059669, var(--color-processo)); transition: width 0.3s ease;"></div>
            </div>
          </div>

          <!-- Barra 3: Produto -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
              <span style="color: var(--color-produto); font-weight: 700;">3. Teto de Produto (Valor Máximo)</span>
              <span style="font-family: var(--font-mono); font-weight: 700;">${formatCurrencyBRL(tetoProduto.precoFinalComImpostos)}</span>
            </div>
            <div style="width: 100%; height: 18px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; overflow: hidden; display: flex;">
              <div style="width: ${pctBarProd}%; height: 100%; background: linear-gradient(90deg, #7C3AED, var(--color-produto)); transition: width 0.3s ease;"></div>
            </div>
          </div>

        </div>
      </div>

      <!-- Diagnóstico Estratégico do Negócio -->
      <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-neutral-box); border: 1px solid var(--border-inner); padding: 1.25rem; border-radius: 8px; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-title); margin-bottom: 0.25rem;">
            Margem de Negociação Estratégica
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); max-width: 650px; line-height: 1.5;">
            Sua proposta possui uma margem de manobra de <strong>${formatCurrencyBRL(amplitudeNegociacao)}</strong> entre o piso de custo e o teto de valor. Inicie negociando próximo à faixa de Processo ou Produto, utilizando o piso como limite absoluto de concessão.
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Amplitude Total</div>
          <div style="font-size: 1.25rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-title);">
            ${formatCurrencyBRL(amplitudeNegociacao)}
          </div>
        </div>
      </div>
    `;

    // Bind action buttons
    const btnCopy = container.querySelector<HTMLButtonElement>('#btn-copy-proposal');
    const copyText = container.querySelector<HTMLElement>('#copy-btn-text');
    btnCopy?.addEventListener('click', () => {
      const summaryText = generateProposalText(currentData);
      navigator.clipboard.writeText(summaryText).then(() => {
        if (copyText) {
          copyText.textContent = 'Copiado!';
          setTimeout(() => {
            copyText.textContent = 'Copiar Proposta';
          }, 2500);
        }
        if (props.onCopyProposal) props.onCopyProposal();
      });
    });

    const btnPrint = container.querySelector<HTMLButtonElement>('#btn-print-proposal');
    btnPrint?.addEventListener('click', () => {
      window.print();
      if (props.onPrint) props.onPrint();
    });
  }

  function generateProposalText(d: FullPricingComparisonResult): string {
    return [
      `=======================================================`,
      `PROPOSTA DE PRECIFICAÇÃO DE SOFTWARE COM BASE EM MÉTRICAS`,
      `Plataforma MétricaLab • Engenharia de Software`,
      `Data da Simulação: ${new Date().toLocaleDateString('pt-BR')}`,
      `=======================================================`,
      ``,
      `1. FAIXA 1 • PISO DE RECURSOS (Insumos Mínimos)`,
      `- Preço Líquido: ${formatCurrencyBRL(d.pisoRecursos.precoLiquido)}`,
      `- Impostos Retidos (${formatPercent(d.aliquotaImposto)}): ${formatCurrencyBRL(d.pisoRecursos.valorImpostos)}`,
      `* PREÇO FINAL BRUTO: ${formatCurrencyBRL(d.pisoRecursos.precoFinalComImpostos)}`,
      ``,
      `2. FAIXA 2 • EFICIÊNCIA DE PROCESSO (Preço Competitivo)`,
      `- Preço Líquido: ${formatCurrencyBRL(d.eficienciaProcesso.precoLiquido)}`,
      `- Impostos Retidos (${formatPercent(d.aliquotaImposto)}): ${formatCurrencyBRL(d.eficienciaProcesso.valorImpostos)}`,
      `* PREÇO FINAL BRUTO: ${formatCurrencyBRL(d.eficienciaProcesso.precoFinalComImpostos)}`,
      ``,
      `3. FAIXA 3 • TETO DE PRODUTO (Captura de Valor / Outcome)`,
      `- Preço Líquido: ${formatCurrencyBRL(d.tetoProduto.precoLiquido)}`,
      `- Impostos Retidos (${formatPercent(d.aliquotaImposto)}): ${formatCurrencyBRL(d.tetoProduto.valorImpostos)}`,
      `* PREÇO FINAL BRUTO: ${formatCurrencyBRL(d.tetoProduto.precoFinalComImpostos)}`,
      ``,
      `-------------------------------------------------------`,
      `GOVERNANÇA TRIBUTÁRIA: Alíquota efetiva de ${formatPercent(d.aliquotaImposto)} (Cálculo por dentro sobre a Receita Bruta)`,
      `Margem de Negociação Disponível: ${formatCurrencyBRL(Math.max(0, d.tetoProduto.precoFinalComImpostos - d.pisoRecursos.precoFinalComImpostos))}`,
      `=======================================================`
    ].join('\n');
  }

  render();

  return {
    element: container,
    updateData: (newData: FullPricingComparisonResult) => {
      currentData = { ...newData };
      render();
    }
  };
}

