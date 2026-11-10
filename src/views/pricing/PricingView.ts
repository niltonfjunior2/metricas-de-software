import { createResourceTierComponent } from '../../components/pricing/ResourceTier';
import { createProcessTierComponent } from '../../components/pricing/ProcessTier';
import { createProductTierComponent } from '../../components/pricing/ProductTier';
import { createTaxModuleComponent } from '../../components/pricing/TaxModule';
import { createComparisonDashboardComponent } from '../../components/pricing/ComparisonDashboard';
import { calculateFullPricing } from '../../services/pricingEngine';
import { PRICING_TEMPLATES, BLANK_TEMPLATE } from '../../data/pricingTemplates';
import { getSavedDrafts, savePricingDraft, deletePricingDraft, getPricingDraftById } from '../../services/draftStorage';

export function renderPricingView(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'pricing-view-container';
  container.style.maxWidth = '1100px';
  container.style.margin = '0 auto';
  container.style.padding = '0.5rem 0 3rem 0';

  container.innerHTML = `
    <!-- Breadcrumb -->
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
      <a href="#/" style="font-size: 0.85rem; color: var(--text-muted); text-decoration: none;">Início</a>
      <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
      <span style="font-size: 0.85rem; color: var(--color-processo); font-weight: 600;">Calculadora de Precificação</span>
    </div>

    <!-- Header Section -->
    <div style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.85rem; border-radius: 9999px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.25); color: var(--color-processo); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem;">
        Simulador de Formação de Preço em TI • Módulos 10 e 11
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem; letter-spacing: -0.02em;">
        Calculadora de Precificação com Base em Métricas
      </h1>
      <p style="color: var(--text-secondary); max-width: 820px; font-size: 0.98rem; line-height: 1.6;">
        Forme o preço de projetos e serviços de software de forma fundamentada: descubra o <strong>piso de sobrevivência</strong> com métricas de Recursos, apure a <strong>eficiência competitiva</strong> com métricas de Processo e determine o <strong>teto de captura de valor</strong> com métricas de Produto, com <strong>incidência compulsória de impostos</strong>.
      </p>
    </div>

    <!-- Citação Teórica / Dica de Ouro -->
    <div class="card" style="border-left: 4px solid var(--color-processo); margin-bottom: 2rem; background: var(--bg-card);">
      <blockquote style="font-style: italic; color: var(--text-title); font-size: 1.05rem; margin-bottom: 0.5rem; font-weight: 600;">
        "O preço é o que você paga. Valor é o que você recebe." — Warren Buffett
      </blockquote>
      <p style="color: var(--text-desc); font-size: 0.88rem; line-height: 1.6; margin: 0;">
        Na engenharia de software contemporânea, a precificação migrou da ótica exclusiva de insumos (quantas horas gastamos?) para a ótica de resultados de negócio (qual impacto geramos?). Esta ferramenta permite simular as três realidades de forma simultânea e integrada.
      </p>
    </div>

    <!-- Barra de Templates Didáticos de Mercado -->
    <div class="card templates-bar-container" style="background: var(--bg-card-inner); border: 1px solid var(--border-inner); margin-bottom: 2rem; padding: 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-title);">Modelos Didáticos Prontos (Casos do Mercado)</span>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Selecione um projeto de referência para carregar métricas realistas ou inicie em branco</div>
        </div>
        <button type="button" class="btn btn-secondary" id="btn-save-draft" style="font-size: 0.82rem; padding: 0.4rem 0.85rem;">
          💾 Salvar Simulação
        </button>
      </div>

      <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;" id="templates-selector-group">
        <button type="button" class="btn btn-secondary template-btn" data-id="template-ecommerce" style="font-size: 0.82rem; padding: 0.45rem 0.85rem;">
          🛍️ E-commerce (GMV)
        </button>
        <button type="button" class="btn btn-secondary template-btn" data-id="template-finops" style="font-size: 0.82rem; padding: 0.45rem 0.85rem;">
          ☁️ FinOps & Nuvem (Cost Savings)
        </button>
        <button type="button" class="btn btn-secondary template-btn" data-id="template-saas" style="font-size: 0.82rem; padding: 0.45rem 0.85rem;">
          🚀 SaaS B2B (DORA & Leads)
        </button>
        <button type="button" class="btn btn-secondary template-btn" data-id="template-blank" style="font-size: 0.82rem; padding: 0.45rem 0.85rem; border-style: dashed;">
          📄 Iniciar em Branco
        </button>
      </div>

      <!-- Gaveta de Rascunhos Salvos -->
      <div id="saved-drafts-drawer" style="margin-top: 1rem; padding-top: 0.85rem; border-top: 1px solid var(--border-inner); display: none;">
        <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-title); text-transform: uppercase;">Rascunhos Salvos no Navegador:</span>
        <div id="saved-drafts-list" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;"></div>
      </div>
    </div>

    <!-- Pipeline Interativo em 4 Blocos -->
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Bloco 1: Recursos (Piso) -->
      <div id="mount-resource-tier"></div>

      <!-- Bloco 2: Processo (Eficiência) -->
      <div id="mount-process-tier"></div>

      <!-- Bloco 3: Produto (Teto de Valor) -->
      <div id="mount-product-tier"></div>

      <!-- Bloco 4: Impostos Obrigatórios (Governança Fiscal) -->
      <div id="mount-tax-module"></div>

      <!-- Bloco 5: Painel Comparativo Tridimensional Final -->
      <div id="mount-comparison-dashboard"></div>
    </div>
  `;

  // Mount components
  const mountResource = container.querySelector('#mount-resource-tier');
  const mountProcess = container.querySelector('#mount-process-tier');
  const mountProduct = container.querySelector('#mount-product-tier');
  const mountTax = container.querySelector('#mount-tax-module');
  const mountDashboard = container.querySelector('#mount-comparison-dashboard');

  if (mountResource && mountProcess && mountProduct && mountTax && mountDashboard) {
    const resourceTier = createResourceTierComponent();
    const initialPiso = resourceTier.getState().result.precoPisoSemImpostos;

    const processTier = createProcessTierComponent({
      precoBaseRecursos: initialPiso
    });

    const productTier = createProductTierComponent({
      precoBaseRecursos: initialPiso
    });

    const taxModule = createTaxModuleComponent({
      valoresLiquidos: {
        piso: initialPiso,
        processo: processTier.getState().result.precoProcessoSemImpostos,
        produto: productTier.getState().result.precoProdutoSemImpostos
      }
    });

    const getFullState = () => calculateFullPricing(
      resourceTier.getState().input,
      processTier.getState().input,
      productTier.getState().input,
      taxModule.getAliquota()
    );

    const comparisonDashboard = createComparisonDashboardComponent({
      data: getFullState()
    });

    const syncAll = (): void => {
      const currentPiso = resourceTier.getState().result.precoPisoSemImpostos;
      processTier.updateBaseRecursos(currentPiso);
      productTier.updateBaseRecursos(currentPiso);

      taxModule.updateValoresLiquidos({
        piso: currentPiso,
        processo: processTier.getState().result.precoProcessoSemImpostos,
        produto: productTier.getState().result.precoProdutoSemImpostos
      });

      comparisonDashboard.updateData(getFullState());
    };

    // Wiring callbacks
    resourceTier.element.addEventListener('input', syncAll);
    processTier.element.addEventListener('click', syncAll);
    productTier.element.addEventListener('input', syncAll);
    taxModule.element.addEventListener('input', syncAll);
    taxModule.element.addEventListener('click', syncAll);

    // Template buttons
    container.querySelectorAll<HTMLButtonElement>('.template-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.target as HTMLElement).dataset.id;
        if (id === 'template-blank') {
          resourceTier.setState(BLANK_TEMPLATE.recursos);
          processTier.setState(BLANK_TEMPLATE.processo);
          productTier.setState(BLANK_TEMPLATE.produto);
          taxModule.setAliquota(BLANK_TEMPLATE.aliquotaImposto);
        } else {
          const tmpl = PRICING_TEMPLATES.find((t) => t.id === id);
          if (tmpl) {
            resourceTier.setState(tmpl.recursos);
            processTier.setState(tmpl.processo);
            productTier.setState(tmpl.produto);
            taxModule.setAliquota(tmpl.aliquotaImposto);
          }
        }
        syncAll();
      });
    });

    // Drafts management
    const btnSaveDraft = container.querySelector<HTMLButtonElement>('#btn-save-draft');
    const draftsDrawer = container.querySelector<HTMLElement>('#saved-drafts-drawer');
    const draftsList = container.querySelector<HTMLElement>('#saved-drafts-list');

    const renderDrafts = (): void => {
      const drafts = getSavedDrafts();
      if (!draftsDrawer || !draftsList) return;

      if (drafts.length === 0) {
        draftsDrawer.style.display = 'none';
        return;
      }

      draftsDrawer.style.display = 'block';
      draftsList.innerHTML = '';

      drafts.forEach((draft) => {
        const chip = document.createElement('div');
        chip.style.display = 'inline-flex';
        chip.style.alignItems = 'center';
        chip.style.gap = '0.4rem';
        chip.style.background = 'var(--bg-main)';
        chip.style.border = '1px solid var(--border-inner)';
        chip.style.padding = '0.25rem 0.6rem';
        chip.style.borderRadius = '6px';
        chip.style.fontSize = '0.78rem';

        chip.innerHTML = `
          <button type="button" class="btn-load-draft" data-id="${draft.id}" style="background: none; border: none; color: var(--text-title); cursor: pointer; font-weight: 600;">
            ${draft.nome}
          </button>
          <button type="button" class="btn-del-draft" data-id="${draft.id}" title="Excluir rascunho" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0 0.2rem;">
            &times;
          </button>
        `;

        chip.querySelector('.btn-load-draft')?.addEventListener('click', () => {
          const d = getPricingDraftById(draft.id);
          if (d) {
            resourceTier.setState(d.recursos);
            processTier.setState(d.processo);
            productTier.setState(d.produto);
            taxModule.setAliquota(d.aliquotaImposto);
            syncAll();
          }
        });

        chip.querySelector('.btn-del-draft')?.addEventListener('click', () => {
          deletePricingDraft(draft.id);
          renderDrafts();
        });

        draftsList.appendChild(chip);
      });
    };

    btnSaveDraft?.addEventListener('click', () => {
      const name = window.prompt('Nome para identificar esta simulação:', `Proposta ${new Date().toLocaleDateString('pt-BR')}`);
      if (name) {
        savePricingDraft(
          name,
          taxModule.getAliquota(),
          resourceTier.getState().input,
          processTier.getState().input,
          productTier.getState().input
        );
        renderDrafts();
      }
    });

    renderDrafts();

    mountResource.appendChild(resourceTier.element);
    mountProcess.appendChild(processTier.element);
    mountProduct.appendChild(productTier.element);
    mountTax.appendChild(taxModule.element);
    mountDashboard.appendChild(comparisonDashboard.element);
  }

  return container;
}
