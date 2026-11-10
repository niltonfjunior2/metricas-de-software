import {
  applyMandatoryTaxes,
  formatCurrencyBRL,
  formatPercent
} from '../../services/pricingEngine';

export interface TaxModuleProps {
  initialAliquota?: number;
  valoresLiquidos: {
    piso: number;
    processo: number;
    produto: number;
  };
  onChange?: (aliquota: number, isValido: boolean) => void;
}

export function createTaxModuleComponent(props: TaxModuleProps): {
  element: HTMLElement;
  updateValoresLiquidos: (valores: { piso: number; processo: number; produto: number }) => void;
  getAliquota: () => number;
  isValido: () => boolean;
  setAliquota: (aliquota: number) => void;
} {
  const container = document.createElement('div');
  container.className = 'pricing-tier-card';
  container.style.borderTop = '4px solid #F59E0B'; // Amarelo/Âmbar governança tributária

  let aliquota = props.initialAliquota ?? 15.5; // Default Simples Nacional TI
  let valoresLiquidos = { ...props.valoresLiquidos };

  function updateAndNotify(): void {
    const taxPiso = applyMandatoryTaxes(valoresLiquidos.piso, aliquota);
    const taxProcesso = applyMandatoryTaxes(valoresLiquidos.processo, aliquota);
    const taxProduto = applyMandatoryTaxes(valoresLiquidos.produto, aliquota);

    renderSummary(taxPiso.isValido, taxPiso, taxProcesso, taxProduto);

    if (props.onChange) {
      props.onChange(aliquota, taxPiso.isValido);
    }
  }

  function renderSummary(
    isValid: boolean,
    taxPiso: ReturnType<typeof applyMandatoryTaxes>,
    taxProcesso: ReturnType<typeof applyMandatoryTaxes>,
    taxProduto: ReturnType<typeof applyMandatoryTaxes>
  ): void {
    const alertBox = container.querySelector<HTMLElement>('#tax-alert-box');
    const tableEl = container.querySelector<HTMLElement>('#tax-breakdown-table');

    if (alertBox) {
      if (!isValid) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `
          <div style="background-color: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.4); padding: 1rem 1.25rem; border-radius: 8px; color: #EF4444; font-size: 0.9rem; line-height: 1.5;">
            <strong>⚠️ Atenção: A incidência de impostos é OBRIGATÓRIA!</strong><br />
            Em nenhuma hipótese uma proposta comercial profissional pode ser formada sem a presença de tributos. Informe uma alíquota maior que 0% para habilitar os preços finais.
          </div>
        `;
      } else {
        alertBox.style.display = 'none';
      }
    }

    if (tableEl) {
      if (!isValid) {
        tableEl.innerHTML = `
          <div style="text-align: center; padding: 1.5rem; color: var(--text-muted); font-size: 0.88rem;">
            Aguardando definição de alíquota tributária válida...
          </div>
        `;
        return;
      }

      tableEl.innerHTML = `
        <div class="pricing-table-wrapper" style="margin-top: 1rem;">
          <table class="pricing-table">
            <thead>
              <tr>
                <th>Faixa de Precificação</th>
                <th style="text-align: right;">Preço Líquido (R$)</th>
                <th style="text-align: right;">Impostos (${formatPercent(aliquota)})</th>
                <th style="text-align: right; color: var(--text-title);">Preço Bruto Final (R$)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Piso de Recursos</strong> (Insumos)</td>
                <td style="text-align: right; font-family: var(--font-mono);">${formatCurrencyBRL(taxPiso.precoLiquido)}</td>
                <td style="text-align: right; font-family: var(--font-mono); color: #F59E0B;">+ ${formatCurrencyBRL(taxPiso.valorImpostos)}</td>
                <td style="text-align: right; font-family: var(--font-mono); font-weight: 800; font-size: 1rem; color: var(--text-title);">${formatCurrencyBRL(taxPiso.precoBrutoFinal)}</td>
              </tr>
              <tr>
                <td><strong style="color: var(--color-processo);">Faixa de Processo</strong> (Eficiência Ágil)</td>
                <td style="text-align: right; font-family: var(--font-mono);">${formatCurrencyBRL(taxProcesso.precoLiquido)}</td>
                <td style="text-align: right; font-family: var(--font-mono); color: #F59E0B;">+ ${formatCurrencyBRL(taxProcesso.valorImpostos)}</td>
                <td style="text-align: right; font-family: var(--font-mono); font-weight: 800; font-size: 1rem; color: var(--color-processo);">${formatCurrencyBRL(taxProcesso.precoBrutoFinal)}</td>
              </tr>
              <tr>
                <td><strong style="color: var(--color-produto);">Teto de Produto</strong> (Captura de Valor)</td>
                <td style="text-align: right; font-family: var(--font-mono);">${formatCurrencyBRL(taxProduto.precoLiquido)}</td>
                <td style="text-align: right; font-family: var(--font-mono); color: #F59E0B;">+ ${formatCurrencyBRL(taxProduto.valorImpostos)}</td>
                <td style="text-align: right; font-family: var(--font-mono); font-weight: 800; font-size: 1.05rem; color: var(--color-produto);">${formatCurrencyBRL(taxProduto.precoBrutoFinal)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }
  }

  container.innerHTML = `
    <div class="pricing-tier-header">
      <div class="pricing-tier-title-box">
        <span class="pricing-tier-badge" style="background-color: rgba(245, 158, 11, 0.12); color: #F59E0B; border: 1px solid rgba(245, 158, 11, 0.25);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle></svg>
          Módulo Fiscal Mandatório
        </span>
        <h2 class="pricing-tier-name">Governança Tributária Obrigatória</h2>
        <p class="pricing-tier-desc">
          Obrigatório em todas as formações de preço. No setor de TI, os impostos incidem <strong>por dentro</strong> da nota fiscal (faturamento bruto).
        </p>
      </div>
    </div>

    <!-- Seletor de Regime & Input de Alíquota -->
    <div class="pricing-params-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
      <div class="pricing-field-group">
        <label class="pricing-field-label" for="tax-input-aliquota">Alíquota Percentual Efetiva (%) *</label>
        <input type="number" min="0.1" max="99" step="0.5" class="pricing-input pricing-input-num" id="tax-input-aliquota" value="${aliquota}" />
        <span class="pricing-field-hint">Percentual obrigatório retido para o fisco</span>
      </div>

      <div class="pricing-field-group" style="grid-column: span 2;">
        <label class="pricing-field-label">Atalhos de Regimes Tributários de TI (Brasil)</label>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.25rem;">
          <button type="button" class="btn btn-secondary tax-preset-btn" data-aliquota="6" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
            MEI (~6%)
          </button>
          <button type="button" class="btn btn-secondary tax-preset-btn" data-aliquota="15.5" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
            Simples Nacional TI (~15.5%)
          </button>
          <button type="button" class="btn btn-secondary tax-preset-btn" data-aliquota="16.33" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
            Lucro Presumido (~16.33%)
          </button>
        </div>
        <span class="pricing-field-hint" style="margin-top: 0.35rem;">Clique para aplicar a alíquota de referência de mercado</span>
      </div>
    </div>

    <div id="tax-alert-box" style="margin-top: 1.25rem; display: none;"></div>
    <div id="tax-breakdown-table"></div>

    <!-- Explicação didática do cálculo por dentro -->
    <div style="margin-top: 1.25rem; padding: 1rem; background: var(--bg-card-inner); border-radius: 8px; border: 1px solid var(--border-inner); font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6;">
      <strong style="color: var(--text-title);">💡 Por que calculamos os impostos "por dentro"?</strong><br />
      Se você precisa receber R$ 10.000 líquidos e seu imposto é de 15,5%, somar apenas 15,5% resultaria em R$ 11.550. Porém, ao emitir a nota de R$ 11.550, o governo reterá 15,5% do total (R$ 1.790,25), restando apenas R$ 9.759,75 (gerando prejuízo!). O cálculo profissional por dentro divide o valor líquido por $(1 - 0.155) = 0.845$, gerando a nota exata de R$ 11.834,32, onde após pagar o imposto restam exatamente os seus R$ 10.000 líquidos.
    </div>
  `;

  const inputAliquota = container.querySelector<HTMLInputElement>('#tax-input-aliquota');
  inputAliquota?.addEventListener('input', (e) => {
    aliquota = Number((e.target as HTMLInputElement).value);
    updateAndNotify();
  });

  container.querySelectorAll<HTMLButtonElement>('.tax-preset-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const val = Number((e.target as HTMLElement).dataset.aliquota);
      aliquota = val;
      if (inputAliquota) inputAliquota.value = String(val);
      updateAndNotify();
    });
  });

  updateAndNotify();

  return {
    element: container,
    updateValoresLiquidos: (novosValores) => {
      valoresLiquidos = { ...novosValores };
      updateAndNotify();
    },
    getAliquota: () => aliquota,
    isValido: () => !isNaN(aliquota) && aliquota > 0 && aliquota < 100,
    setAliquota: (novaAliquota: number) => {
      aliquota = novaAliquota;
      if (inputAliquota) inputAliquota.value = String(novaAliquota);
      updateAndNotify();
    }
  };
}

