export function renderWelcomeView(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'welcome-container';

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="welcome-hero">
      <div class="welcome-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="12 8 8 12 12 16 12 8"></polygon>
        </svg>
        Ecossistema Educacional de Engenharia de Software
      </div>
      <h1 class="welcome-title">
        Aprenda Métricas. Domine a Qualidade.<br />
        <span class="hero-title-gradient">Precifique com Consciência Técnica e Segurança Jurídica.</span>
      </h1>
      <p class="welcome-subtitle">
        Uma plataforma aberta e auto-instrucional que conecta toda a jornada profissional de Engenharia de Software: domine os fundamentos e simuladores de medição no <strong>MétricaLab</strong>, estruture orçamentos sustentáveis na <strong>Calculadora de Precificação</strong> e proteja a relação com o cliente no <strong>Assistente de Contratos</strong>.
      </p>
    </section>

    <!-- Three Main Gateway Cards -->
    <section class="welcome-grid" aria-label="Portais de Acesso">
      
      <!-- Card 1: Portal MétricaLab -->
      <a href="#/metricas" class="gateway-card portal-metricas" id="portal-metricas-link">
        <div class="gateway-header">
          <div class="gateway-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
              <path d="M6 6h10"></path>
              <path d="M6 10h10"></path>
              <path d="M12 18h4"></path>
            </svg>
          </div>
          <span class="badge badge-recursos" style="font-size: 0.72rem;">Laboratório Analítico</span>
        </div>

        <h2 class="gateway-card-title">MétricaLab</h2>
        <div class="gateway-card-role">Fundamentos Teóricos & Simuladores de Decisão</div>
        <p class="gateway-card-desc">
          Compreenda a fundo a taxonomia de medição em software (Recursos, Processo e Produto), audite cenários corporativos contra métricas de vaidade e vivencie estudos de caso reais de liderança técnica.
        </p>

        <ul class="gateway-features-list">
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>3 Módulos de Teoria:</strong> Acordeões dinâmicos e critérios de qualidade</span>
          </li>
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>30 Desafios de Classificação:</strong> Fixação de dimensões com atalhos</span>
          </li>
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Simulador de Liderança Técnica:</strong> 15 estudos de caso práticos</span>
          </li>
        </ul>

        <div class="gateway-card-footer">
          <span style="font-size: 0.82rem; color: var(--text-muted);">Módulos Curriculares 01, 02 e 03</span>
          <span class="gateway-cta-btn">
            Entrar no MétricaLab
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      </a>

      <!-- Card 2: Portal Calculadora de Precificação -->
      <a href="#/precificacao" class="gateway-card portal-pricing" id="portal-pricing-link">
        <div class="gateway-header">
          <div class="gateway-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="16" y1="14" x2="16" y2="18"></line>
              <path d="M16 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M8 14h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M8 18h.01"></path>
            </svg>
          </div>
          <span class="badge badge-processo" style="font-size: 0.72rem;">Simulador Financeiro</span>
        </div>

        <h2 class="gateway-card-title">Calculadora de Precificação</h2>
        <div class="gateway-card-role">Formação de Preço com Base em Métricas</div>
        <p class="gateway-card-desc">
          Aprenda a orçar serviços e produtos de tecnologia: apure o piso mínimo de sobrevivência em Recursos, precifique a eficiência em Processo e alcance o teto por captura de valor em Produto.
        </p>

        <ul class="gateway-features-list">
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Comparação em 3 Faixas:</strong> Piso (Recursos), Eficiência (Processo) e Teto de Valor</span>
          </li>
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Governança Tributária:</strong> Cálculo obrigatório de impostos por dentro</span>
          </li>
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Cenários Prontos & Exportação:</strong> Modelos de mercado, rascunhos e PDF</span>
          </li>
        </ul>

        <div class="gateway-card-footer">
          <span style="font-size: 0.82rem; color: var(--text-muted);">Módulos Curriculares 10 e 11</span>
          <span class="gateway-cta-btn">
            Abrir Calculadora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      </a>

      <!-- Card 3: Portal Assistente de Contratos -->
      <a href="#/contratos" class="gateway-card portal-contracts" id="portal-contracts-link">
        <div class="gateway-header">
          <div class="gateway-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <span class="badge badge-produto" style="font-size: 0.72rem;">Segurança Jurídica</span>
        </div>

        <h2 class="gateway-card-title">Assistente de Contratos</h2>
        <div class="gateway-card-role">Segurança Jurídica & Boas Práticas em TI</div>
        <p class="gateway-card-desc">
          Estruture minutas contratuais equilibradas entre desenvolvedor e cliente com base na Lei do Software (9.609/98), Código Civil e LGPD, prevenindo litígios e escopo infinito.
        </p>

        <ul class="gateway-features-list">
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Proteção de Escopo:</strong> Entregáveis, Exclusões e Termo Aditivo</span>
          </li>
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Propriedade Intelectual & LGPD:</strong> Cessão, Licença e Sigilo</span>
          </li>
          <li class="gateway-feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Termômetro de Risco & Minuta:</strong> Diagnóstico e exportação A4</span>
          </li>
        </ul>

        <div class="gateway-card-footer">
          <span style="font-size: 0.82rem; color: var(--text-muted);">Guia Informativo de Contratos</span>
          <span class="gateway-cta-btn">
            Abrir Assistente
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      </a>

    </section>

    <!-- Pilares Metodológicos -->
    <section>
      <div style="margin-bottom: 0.75rem;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-title);">Diretrizes do Ecossistema</h3>
      </div>
      <div class="welcome-pillars-grid">
        <div class="welcome-pillar-box">
          <div class="welcome-pillar-title" style="color: var(--accent-cyan);">Piso, Eficiência e Valor</div>
          <div class="welcome-pillar-desc">
            Recursos cobrem os custos operacionais, Processo entrega com maturidade e Produto define o teto do valor gerado para o cliente.
          </div>
        </div>
        <div class="welcome-pillar-box">
          <div class="welcome-pillar-title" style="color: var(--color-processo);">Zero Custo & Client-Side</div>
          <div class="welcome-pillar-desc">
            Execução 100% local no navegador do usuário, sem banco de dados externo, sem coleta de dados pessoais e com privacidade absoluta.
          </div>
        </div>
        <div class="welcome-pillar-box">
          <div class="welcome-pillar-title" style="color: var(--color-produto);">Consciência Fiscal & Jurídica</div>
          <div class="welcome-pillar-desc">
            Formação de preço profissional com cálculo obrigatório de tributos por dentro e diretrizes de segurança contratual equilibrada.
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
