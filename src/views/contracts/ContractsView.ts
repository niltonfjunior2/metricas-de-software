import {
  ContractInput,
  ContractModelType,
  IntellectualPropertyType,
  PaymentStructureType,
  LEGAL_DISCLAIMER_TEXT,
  evaluateContractSafety,
  generateContractDocument,
} from '../../services/contractEngine';
import {
  CONTRACT_TEMPLATES,
  BLANK_CONTRACT_TEMPLATE,
  CONTRACT_PILLARS_GUIDE,
} from '../../data/contractTemplates';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderContractsView(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'contracts-view-container';
  container.style.maxWidth = '1100px';
  container.style.margin = '0 auto';
  container.style.padding = '0.5rem 0 3rem 0';

  let state: ContractInput = structuredClone(CONTRACT_TEMPLATES[0].dados);
  let isBlankMode = false;

  const pillarsHtml = CONTRACT_PILLARS_GUIDE.map(
    (p) => `
      <div style="background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 10px; padding: 1.15rem; display: flex; flex-direction: column; gap: 0.6rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="badge badge-produto" style="font-size: 0.68rem;">Pilar ${p.numero}</span>
          <strong style="color: var(--text-title); font-size: 0.94rem;">${p.titulo}</strong>
        </div>
        <div style="font-size: 0.74rem; color: var(--accent-cyan); font-weight: 600;">
          📚 Base Legal: ${p.baseLegal}
        </div>
        <div style="font-size: 0.81rem; color: var(--text-secondary); background: rgba(239, 68, 68, 0.06); border-left: 3px solid #ef4444; padding: 0.55rem 0.75rem; border-radius: 4px;">
          <strong style="color: #ef4444;">⚠️ Armadilha Comum:</strong> ${p.riscoPratico}
        </div>
        <div style="font-size: 0.81rem; color: var(--text-secondary); background: rgba(16, 185, 129, 0.06); border-left: 3px solid #10b981; padding: 0.55rem 0.75rem; border-radius: 4px;">
          <strong style="color: #10b981;">⚖️ Contrato Justo (Win-Win):</strong> ${p.equilibrioJusto}
        </div>
      </div>
    `
  ).join('');

  container.innerHTML = `
    <!-- Breadcrumb -->
    <div class="no-print" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
      <a href="#/" style="font-size: 0.85rem; color: var(--text-muted); text-decoration: none;">Início</a>
      <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
      <span style="font-size: 0.85rem; color: var(--color-produto); font-weight: 600;">Assistente de Contratos de Software</span>
    </div>

    <!-- Header Section -->
    <div class="no-print" style="margin-bottom: 1.75rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.85rem; border-radius: 9999px; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.28); color: var(--color-produto-tag); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem;">
        Segurança Jurídica em Engenharia de Software • Lei 9.609/98 & LGPD
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem; letter-spacing: -0.02em;">
        Assistente de Construção de Contratos de Software
      </h1>
      <p style="color: var(--text-secondary); max-width: 850px; font-size: 0.98rem; line-height: 1.6;">
        Estruture minutas contratuais claras, éticas e equilibradas entre <strong>desenvolvedor</strong> e <strong>cliente</strong>. Compreenda na prática como prevenir o escopo infinito (<em>scope creep</em>), resguardar a propriedade intelectual, estabelecer critérios justos de homologação e adequar o projeto à LGPD.
      </p>
    </div>

    <!-- Aviso Legal Obrigatório (Disclaimer de Governança) -->
    <div id="legal-disclaimer-banner" class="card" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.07); border-color: rgba(245, 158, 11, 0.35); margin-bottom: 2rem; padding: 1.25rem;">
      <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
        <span style="font-size: 1.5rem; line-height: 1;">⚖️</span>
        <div>
          <strong style="color: var(--text-title); font-size: 0.95rem; display: block; margin-bottom: 0.3rem;">
            Caráter Estritamente Educativo e Informativo — Não Substitui Assessoria Jurídica
          </strong>
          <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.6; margin: 0;">
            ${LEGAL_DISCLAIMER_TEXT}
          </p>
        </div>
      </div>
    </div>

    <!-- Guia Didático dos 6 Pilares de Segurança Jurídica em ADS -->
    <div class="card no-print" style="margin-bottom: 2rem;">
      <div style="margin-bottom: 1.15rem;">
        <span class="badge badge-recursos" style="margin-bottom: 0.4rem;">Fundamentos para Profissionais de ADS</span>
        <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.3rem;">
          Os 6 Pilares de um Contrato Justo de Desenvolvimento de Software
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          Um bom contrato de tecnologia não é aquele que beneficia apenas um lado, mas o que traz <strong>previsibilidade técnica e financeira</strong> para ambas as partes:
        </p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 1rem;">
        ${pillarsHtml}
      </div>
    </div>

    <!-- Barra de Cenários / Templates Contratuais -->
    <div class="card templates-bar-container no-print" style="background: var(--bg-card-inner); border: 1px solid var(--border-inner); margin-bottom: 2rem; padding: 1.25rem;">
      <div style="margin-bottom: 0.85rem;">
        <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-title);">Cenários Contratuais de Referência</span>
        <div style="font-size: 0.78rem; color: var(--text-muted);">Escolha o modelo que melhor representa seu serviço ou produto para carregar cláusulas recomendadas ou inicie em branco:</div>
      </div>
      <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;" id="contract-templates-group">
        ${CONTRACT_TEMPLATES.map(
          (tpl) => `
          <button type="button" class="btn btn-secondary contract-tpl-btn" data-id="${tpl.id}" style="font-size: 0.82rem; padding: 0.45rem 0.9rem; ${tpl.id === 'template-blank' ? 'border-style: dashed;' : ''}">
            ${tpl.icone} ${tpl.nome}
          </button>
        `
        ).join('')}
      </div>
    </div>

    <!-- Formulário Interativo de Configuração Contratual -->
    <div id="contract-form-wrapper" class="no-print" style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;"></div>

    <!-- Termômetro de Segurança Jurídica e Alertas -->
    <div id="contract-safety-panel" class="no-print" style="margin-bottom: 2rem;"></div>

    <!-- Pré-visualização da Minuta e Ações de Exportação -->
    <div class="card" id="contract-preview-card" style="border-top: 4px solid var(--color-produto);">
      <div class="no-print" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-inner);">
        <div>
          <span class="badge badge-produto" style="margin-bottom: 0.35rem;">Minuta Referencial Dinâmica</span>
          <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-title);">
            Documento Base para Revisão Jurídica
          </h2>
          <p style="font-size: 0.82rem; color: var(--text-secondary);">
            O texto abaixo reflete instantaneamente as cláusulas e salvaguardas configuradas acima.
          </p>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary" id="btn-copy-contract" style="font-size: 0.85rem;">
            📋 Copiar Minuta Completa
          </button>
          <button type="button" class="btn btn-primary" id="btn-print-contract" style="font-size: 0.85rem;">
            🖨️ Exportar PDF / Imprimir (A4)
          </button>
        </div>
      </div>

      <pre id="contract-document-output" style="background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px; padding: 1.5rem; font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.65; color: var(--text-primary); white-space: pre-wrap; word-wrap: break-word; overflow-x: auto; margin: 0;"></pre>
    </div>
  `;

  const formWrapper = container.querySelector<HTMLElement>('#contract-form-wrapper')!;
  const safetyPanel = container.querySelector<HTMLElement>('#contract-safety-panel')!;
  const docOutput = container.querySelector<HTMLElement>('#contract-document-output')!;

  const formatNumVal = (val: number): string => {
    if (isBlankMode && val === 0) return '';
    return String(val);
  };

  function renderForm(): void {
    formWrapper.innerHTML = `
      <!-- Bloco 1: Partes e Modalidade -->
      <div class="pricing-tier-card tier-recursos">
        <div class="pricing-tier-header">
          <div class="pricing-tier-title-box">
            <span class="pricing-tier-badge badge-tier-recursos">Etapa 1 • Identificação e Modalidade</span>
            <h3 class="pricing-tier-name">Qualificação das Partes & Natureza do Contrato</h3>
            <p class="pricing-tier-desc">
              Se preferir não digitar dados reais agora, deixe em branco: o assistente preencherá placeholders padronizados na minuta.
            </p>
          </div>
        </div>
        <div class="pricing-params-grid" style="margin-top: 0.5rem;">
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-contratante-nome">Nome / Razão Social do Cliente (Contratante)</label>
            <input type="text" id="ct-contratante-nome" class="pricing-input" value="${escapeHtml(state.contratanteNome)}" placeholder="Ex: Empresa Cliente Ltda." />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-contratante-doc">CNPJ / CPF do Contratante</label>
            <input type="text" id="ct-contratante-doc" class="pricing-input" value="${escapeHtml(state.contratanteDocumento)}" placeholder="Ex: 00.000.000/0001-00" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-contratada-nome">Nome / Razão Social do Desenvolvedor (Contratada)</label>
            <input type="text" id="ct-contratada-nome" class="pricing-input" value="${escapeHtml(state.contratadaNome)}" placeholder="Ex: DevStudio Engenharia Ltda." />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-contratada-doc">CNPJ / CPF do Desenvolvedor</label>
            <input type="text" id="ct-contratada-doc" class="pricing-input" value="${escapeHtml(state.contratadaDocumento)}" placeholder="Ex: 00.000.000/0001-00" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-titulo-projeto">Título / Nome do Projeto ou Produto</label>
            <input type="text" id="ct-titulo-projeto" class="pricing-input" value="${escapeHtml(state.tituloProjeto)}" placeholder="Ex: Sistema de Gestão Comercial" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-modelo">Modalidade Jurídica da Contratação</label>
            <select id="ct-modelo" class="pricing-input">
              <option value="escopo_fechado" ${state.modeloContratual === 'escopo_fechado' ? 'selected' : ''}>Desenvolvimento por Escopo Fechado (Sob Encomenda)</option>
              <option value="alocacao_horas" ${state.modeloContratual === 'alocacao_horas' ? 'selected' : ''}>Sustentação / Alocação Mensal de Horas (Day 2)</option>
              <option value="saas_licenca" ${state.modeloContratual === 'saas_licenca' ? 'selected' : ''}>Licenciamento de Uso de Software (SaaS)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Bloco 2: Escopo, Exclusões e Change Request -->
      <div class="pricing-tier-card tier-processo">
        <div class="pricing-tier-header">
          <div class="pricing-tier-title-box">
            <span class="pricing-tier-badge" style="background: rgba(16, 185, 129, 0.12); color: var(--color-processo); border: 1px solid rgba(16, 185, 129, 0.25);">Etapa 2 • Delimitação de Escopo</span>
            <h3 class="pricing-tier-name">Objeto Técnico, "Não-Escopo" e Gestão de Mudanças</h3>
            <p class="pricing-tier-desc">
              A maior causa de litígios e prejuízos em projetos de software é a falta de clareza sobre o que está e o que NÃO está incluído no preço.
            </p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-escopo">Resumo dos Entregáveis e Módulos (Vinculado ao SOW / Anexo Técnico)</label>
            <textarea id="ct-escopo" class="pricing-input" rows="3" placeholder="Descreva os módulos principais, plataformas (Web/Mobile), integrações e entregáveis do projeto...">${escapeHtml(state.escopoResumo)}</textarea>
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-exclusoes">Exclusões Explícitas (O que NÃO faz parte do orçamento do desenvolvedor)</label>
            <textarea id="ct-exclusoes" class="pricing-input" rows="2" placeholder="Ex: Faturas de servidores cloud (AWS/Azure), taxas da Apple Store/Google Play, compra de domínio, alimentação manual de cadastros...">${escapeHtml(state.exclusoesEscopo)}</textarea>
          </div>
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.75rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-change-request" ${state.exigirChangeRequest ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-processo);" />
            <span style="font-size: 0.86rem; color: var(--text-primary);">
              <strong>Exigir Termo Aditivo (Change Request) para demandas extras:</strong> Blinda o projeto contra o <em>Scope Creep</em>, exigindo repactuação formal de prazo e preço para qualquer funcionalidade nova pedida durante o desenvolvimento.
            </span>
          </label>
        </div>
      </div>

      <!-- Bloco 3: Prazos, Homologação e Pagamento -->
      <div class="pricing-tier-card tier-produto">
        <div class="pricing-tier-header">
          <div class="pricing-tier-title-box">
            <span class="pricing-tier-badge" style="background: rgba(59, 130, 246, 0.12); color: var(--color-produto-tag); border: 1px solid rgba(59, 130, 246, 0.25);">Etapa 3 • Cronograma, Aceite e Financeiro</span>
            <h3 class="pricing-tier-name">Homologação, Aceite Tácito e Fluxo de Pagamento</h3>
            <p class="pricing-tier-desc">
              Vincule pagamentos a entregas objetivas e evite que a demora do cliente em testar o sistema congele o seu recebimento.
            </p>
          </div>
        </div>

        <div class="pricing-params-grid" style="margin-top: 0.5rem;">
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-prazo-dias">Prazo Estimado de Execução / Vigência (Dias)</label>
            <input type="number" id="ct-prazo-dias" class="pricing-input pricing-input-num" min="0" value="${formatNumVal(state.prazoEstimadoDias)}" placeholder="60" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-dias-homologacao">Prazo para Homologação do Cliente (Dias Úteis)</label>
            <input type="number" id="ct-dias-homologacao" class="pricing-input pricing-input-num" min="0" value="${formatNumVal(state.prazoHomologacaoDiasUteis)}" placeholder="5" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-valor">Valor Total ou Mensalidade (R$)</label>
            <input type="number" id="ct-valor" class="pricing-input pricing-input-num" min="0" step="100" value="${formatNumVal(state.valorTotalOuMensal)}" placeholder="0" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-estrutura-pgto">Estrutura de Faturamento</label>
            <select id="ct-estrutura-pgto" class="pricing-input">
              <option value="sinal_parcelas" ${state.estruturaPagamento === 'sinal_parcelas' ? 'selected' : ''}>Sinal na Assinatura + Saldo nas Entregas</option>
              <option value="mensal_recorrente" ${state.estruturaPagamento === 'mensal_recorrente' ? 'selected' : ''}>Mensalidade Recorrente (Sustentação / SaaS)</option>
              <option value="vista_homologacao" ${state.estruturaPagamento === 'vista_homologacao' ? 'selected' : ''}>Parcela Única na Homologação Final</option>
            </select>
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-sinal-pct">Percentual de Sinal na Assinatura (%)</label>
            <input type="number" id="ct-sinal-pct" class="pricing-input pricing-input-num" min="0" max="100" value="${formatNumVal(state.percentualSinal)}" placeholder="30" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-dias-suspensao">Tolerância de Atraso para Suspender Serviços (Dias)</label>
            <input type="number" id="ct-dias-suspensao" class="pricing-input pricing-input-num" min="0" value="${formatNumVal(state.diasToleranciaSuspensao)}" placeholder="10" />
          </div>
        </div>

        <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; margin-top: 1rem; padding: 0.75rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
          <input type="checkbox" id="ct-aceite-tacito" ${state.aceiteTacitoAtivo ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-produto);" />
          <span style="font-size: 0.86rem; color: var(--text-primary);">
            <strong>Ativar Cláusula de Aceite Tácito na Homologação:</strong> Se o cliente não apontar falhas objetivas dentro do prazo de homologação ou colocar o sistema em produção, a entrega é considerada aprovada.
          </span>
        </label>
      </div>

      <!-- Bloco 4: Propriedade Intelectual, Garantia Técnica e SLA -->
      <div class="pricing-tier-card tier-recursos">
        <div class="pricing-tier-header">
          <div class="pricing-tier-title-box">
            <span class="pricing-tier-badge badge-tier-recursos">Etapa 4 • Propriedade Intelectual & Garantia</span>
            <h3 class="pricing-tier-name">Titularidade do Código-Fonte (Lei 9.609/98), Garantia e SLA</h3>
            <p class="pricing-tier-desc">
              Defina quem será dono do código-fonte ao final e separe claramente correção gratuita de bugs vs. evolução cobrada à parte.
            </p>
          </div>
        </div>

        <div class="pricing-params-grid" style="margin-top: 0.5rem;">
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-ip">Regime de Propriedade Intelectual</label>
            <select id="ct-ip" class="pricing-input">
              <option value="cessao_cliente" ${state.propriedadeIntelectual === 'cessao_cliente' ? 'selected' : ''}>Cessão Definitiva ao Cliente (após quitação total)</option>
              <option value="licenca_uso" ${state.propriedadeIntelectual === 'licenca_uso' ? 'selected' : ''}>Licença de Uso (Desenvolvedor mantém o Código-Fonte)</option>
            </select>
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-garantia-dias">Prazo de Garantia Técnica contra Bugs (Dias)</label>
            <input type="number" id="ct-garantia-dias" class="pricing-input pricing-input-num" min="0" value="${formatNumVal(state.prazoGarantiaDias)}" placeholder="90" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-sla-horas">SLA de 1ª Resposta para Incidente Crítico (Horas Úteis)</label>
            <input type="number" id="ct-sla-horas" class="pricing-input pricing-input-num" min="0" value="${formatNumVal(state.slaRespostaCriticoHoras)}" placeholder="4" />
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-top: 1rem;">
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.7rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-bg-ip" ${state.protegerBackgroundIP ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--accent-cyan);" />
            <span style="font-size: 0.85rem; color: var(--text-primary);">
              <strong>Proteger <em>Background IP</em> (Bibliotecas Próprias e Componentes Reutilizáveis):</strong> Garante que você continue dono de seus frameworks e estruturas base para usar em outros projetos.
            </span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.7rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-garantia-terceiros" ${state.perdaGarantiaPorAlteracaoTerceiros ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--accent-cyan);" />
            <span style="font-size: 0.85rem; color: var(--text-primary);">
              <strong>Extinguir garantia em módulos alterados por terceiros sem anuência:</strong> Evita que você seja obrigado a consertar gratuitamente erros inseridos por outra equipe no código.
            </span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.7rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-portfolio" ${state.permitirPortfolio ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--accent-cyan);" />
            <span style="font-size: 0.85rem; color: var(--text-primary);">
              <strong>Autorizar divulgação em Portfólio Comercial:</strong> Permite citar o projeto e exibir a marca do cliente como case técnico.
            </span>
          </label>
        </div>
      </div>

      <!-- Bloco 5: LGPD, Confidencialidade, Limitação de Responsabilidade e Foro -->
      <div class="pricing-tier-card tier-processo">
        <div class="pricing-tier-header">
          <div class="pricing-tier-title-box">
            <span class="pricing-tier-badge" style="background: rgba(16, 185, 129, 0.12); color: var(--color-processo); border: 1px solid rgba(16, 185, 129, 0.25);">Etapa 5 • Governança, Riscos & Rescisão</span>
            <h3 class="pricing-tier-name">LGPD, Sigilo (NDA), Teto de Responsabilidade e Foro</h3>
            <p class="pricing-tier-desc">
              Proteja o patrimônio das partes contra riscos desproporcionais, defina os papéis da LGPD e estabeleça uma saída justa em caso de distrato.
            </p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1rem;">
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.7rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-lgpd" ${state.conformidadeLGPD ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-processo);" />
            <span style="font-size: 0.85rem; color: var(--text-primary);">
              <strong>Delimitação de Papéis na LGPD (Lei 13.709/18):</strong> Define o Cliente como <em>Controlador</em> e o Desenvolvedor como <em>Operador</em> técnico, prevendo uso de dados fictícios em testes.
            </span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.7rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-nda" ${state.clausulaConfidencialidadeNDA ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-processo);" />
            <span style="font-size: 0.85rem; color: var(--text-primary);">
              <strong>Cláusula de Confidencialidade Bilateral (NDA):</strong> Protege segredos de negócio, chaves de API, regras operacionais e algoritmos de ambas as partes.
            </span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.65rem; cursor: pointer; padding: 0.7rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 8px;">
            <input type="checkbox" id="ct-limit-resp" ${state.limitarResponsabilidadeCivil ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-processo);" />
            <span style="font-size: 0.85rem; color: var(--text-primary);">
              <strong>Limitação de Responsabilidade Civil (Teto Indenizatório):</strong> Limita indenizações por danos diretos ao valor pago no contrato e isenta quedas de nuvem/APIs de terceiros e lucros cessantes.
            </span>
          </label>
        </div>

        <div class="pricing-params-grid" style="margin-top: 0.5rem;">
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-aviso-previo">Aviso Prévio para Rescisão (Dias)</label>
            <input type="number" id="ct-aviso-previo" class="pricing-input pricing-input-num" min="0" value="${formatNumVal(state.avisoPrevioRescisaoDias)}" placeholder="30" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-multa-rescisao">Multa Compensatória sobre Saldo Restante (%)</label>
            <input type="number" id="ct-multa-rescisao" class="pricing-input pricing-input-num" min="0" max="50" value="${formatNumVal(state.multaRescisoriaPercentual)}" placeholder="10" />
          </div>
          <div class="pricing-field-group">
            <label class="pricing-field-label" for="ct-foro">Comarca do Foro de Eleição (Cidade / UF)</label>
            <input type="text" id="ct-foro" class="pricing-input" value="${escapeHtml(state.foroComarca)}" placeholder="Ex: São Paulo / SP" />
          </div>
        </div>
      </div>
    `;

    bindFormEvents();
  }

  function renderDiagnosticAndPreview(): void {
    const diag = evaluateContractSafety(state);
    const scoreColor =
      diag.nivel === 'Alto' ? '#10b981' : diag.nivel === 'Moderado' ? '#f59e0b' : '#ef4444';

    const alertsHtml =
      diag.alertasRisco.length > 0
        ? `
          <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <strong style="font-size: 0.85rem; color: #ef4444;">⚠️Pontos de Atenção e Vulnerabilidades Detectadas (${diag.alertasRisco.length}):</strong>
            ${diag.alertasRisco
              .map(
                (a) => `
              <div style="padding: 0.75rem 1rem; background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; font-size: 0.82rem;">
                <strong style="color: #ef4444; display: block; margin-bottom: 0.2rem;">• ${a.titulo}</strong>
                <span style="color: var(--text-secondary);">${a.descricao}</span>
              </div>
            `
              )
              .join('')}
          </div>
        `
        : `
          <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; font-size: 0.83rem; color: #10b981; font-weight: 600;">
            ✔️ Excelente! Todas as salvaguardas essenciais de escopo, aceite tácito, propriedade intelectual, LGPD e limitação de responsabilidade estão ativas.
          </div>
        `;

    safetyPanel.innerHTML = `
      <div class="card" style="border-left: 4px solid ${scoreColor};">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.75rem;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">Diagnóstico em Tempo Real</span>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-title);">
              Termômetro de Cobertura e Equilíbrio Contratual
            </h3>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 1.65rem; font-weight: 800; color: ${scoreColor};">${diag.score}%</span>
            <span class="badge" style="background: ${scoreColor}20; color: ${scoreColor}; border: 1px solid ${scoreColor}50;">
              Nível ${diag.nivel}
            </span>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${diag.pontosProtegidos
            .map(
              (pt) => `
            <span style="font-size: 0.76rem; padding: 0.3rem 0.65rem; background: var(--bg-card-inner); border: 1px solid var(--border-inner); border-radius: 6px; color: var(--text-secondary);">
              ✅ ${pt}
            </span>
          `
            )
            .join('')}
        </div>

        ${alertsHtml}
      </div>
    `;

    docOutput.textContent = generateContractDocument(state);
  }

  function bindFormEvents(): void {
    const bindText = (id: string, key: keyof ContractInput) => {
      const el = formWrapper.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`#${id}`);
      el?.addEventListener('input', (e) => {
        (state[key] as string) = (e.target as HTMLInputElement).value;
        renderDiagnosticAndPreview();
      });
    };

    const bindNum = (id: string, key: keyof ContractInput) => {
      const el = formWrapper.querySelector<HTMLInputElement>(`#${id}`);
      el?.addEventListener('input', (e) => {
        const val = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
        (state[key] as number) = val;
        renderDiagnosticAndPreview();
      });
    };

    const bindBool = (id: string, key: keyof ContractInput) => {
      const el = formWrapper.querySelector<HTMLInputElement>(`#${id}`);
      el?.addEventListener('change', (e) => {
        (state[key] as boolean) = (e.target as HTMLInputElement).checked;
        renderDiagnosticAndPreview();
      });
    };

    bindText('ct-contratante-nome', 'contratanteNome');
    bindText('ct-contratante-doc', 'contratanteDocumento');
    bindText('ct-contratada-nome', 'contratadaNome');
    bindText('ct-contratada-doc', 'contratadaDocumento');
    bindText('ct-titulo-projeto', 'tituloProjeto');
    bindText('ct-escopo', 'escopoResumo');
    bindText('ct-exclusoes', 'exclusoesEscopo');
    bindText('ct-foro', 'foroComarca');

    const selectModelo = formWrapper.querySelector<HTMLSelectElement>('#ct-modelo');
    selectModelo?.addEventListener('change', (e) => {
      state.modeloContratual = (e.target as HTMLSelectElement).value as ContractModelType;
      renderDiagnosticAndPreview();
    });

    const selectPgto = formWrapper.querySelector<HTMLSelectElement>('#ct-estrutura-pgto');
    selectPgto?.addEventListener('change', (e) => {
      state.estruturaPagamento = (e.target as HTMLSelectElement).value as PaymentStructureType;
      renderDiagnosticAndPreview();
    });

    const selectIp = formWrapper.querySelector<HTMLSelectElement>('#ct-ip');
    selectIp?.addEventListener('change', (e) => {
      state.propriedadeIntelectual = (e.target as HTMLSelectElement).value as IntellectualPropertyType;
      renderDiagnosticAndPreview();
    });

    bindNum('ct-prazo-dias', 'prazoEstimadoDias');
    bindNum('ct-dias-homologacao', 'prazoHomologacaoDiasUteis');
    bindNum('ct-valor', 'valorTotalOuMensal');
    bindNum('ct-sinal-pct', 'percentualSinal');
    bindNum('ct-dias-suspensao', 'diasToleranciaSuspensao');
    bindNum('ct-garantia-dias', 'prazoGarantiaDias');
    bindNum('ct-sla-horas', 'slaRespostaCriticoHoras');
    bindNum('ct-aviso-previo', 'avisoPrevioRescisaoDias');
    bindNum('ct-multa-rescisao', 'multaRescisoriaPercentual');

    bindBool('ct-change-request', 'exigirChangeRequest');
    bindBool('ct-aceite-tacito', 'aceiteTacitoAtivo');
    bindBool('ct-bg-ip', 'protegerBackgroundIP');
    bindBool('ct-garantia-terceiros', 'perdaGarantiaPorAlteracaoTerceiros');
    bindBool('ct-portfolio', 'permitirPortfolio');
    bindBool('ct-lgpd', 'conformidadeLGPD');
    bindBool('ct-nda', 'clausulaConfidencialidadeNDA');
    bindBool('ct-limit-resp', 'limitarResponsabilidadeCivil');
  }

  // Template Selector Buttons
  container.querySelectorAll<HTMLButtonElement>('.contract-tpl-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const found = CONTRACT_TEMPLATES.find((t) => t.id === id) || BLANK_CONTRACT_TEMPLATE;
      isBlankMode = found.id === 'template-blank';
      state = structuredClone(found.dados);
      renderForm();
      renderDiagnosticAndPreview();
    });
  });

  // Copy Contract Button
  const btnCopy = container.querySelector<HTMLButtonElement>('#btn-copy-contract');
  btnCopy?.addEventListener('click', () => {
    const text = generateContractDocument(state);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btnCopy.textContent;
        btnCopy.textContent = '✔️ Minuta Copiada!';
        setTimeout(() => {
          btnCopy.textContent = originalText;
        }, 2000);
      });
    }
  });

  // Print Contract Button
  const btnPrint = container.querySelector<HTMLButtonElement>('#btn-print-contract');
  btnPrint?.addEventListener('click', () => {
    window.print();
  });

  renderForm();
  renderDiagnosticAndPreview();

  return container;
}
