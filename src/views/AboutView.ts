export function renderAboutView(): HTMLElement {
  const container = document.createElement('div');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Sobre</span>
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
        Sobre o MétricaLab
      </h1>
      <p style="color: var(--text-secondary); max-width: 780px; font-size: 0.95rem;">
        Ecossistema educacional concebido para o ensino prático e integrado de Métricas de Software, Formação de Preços e Segurança Contratual em Engenharia de Software.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 850px;">
      
      <!-- Seção: O Foco na Educação -->
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">O Foco na Educação</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 0.85rem;">
          Métricas de software são fundamentais não apenas para o controle técnico de qualidade e melhoria contínua de processos, mas também para sustentar orçamentos viáveis e relações contratuais justas no mercado de tecnologia.
        </p>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O <strong>MétricaLab</strong> conecta três frentes essenciais na formação de estudantes e profissionais de Análise e Desenvolvimento de Sistemas: (1) o <strong>Laboratório Analítico</strong> com trilhas teóricas e simuladores práticos de classificação, auditoria de cenários e tomada de decisão técnica; (2) a <strong>Calculadora de Precificação com Base em Métricas</strong> (estruturada nas faixas de Recursos, Processo e Produto com governança tributária obrigatória); e (3) o <strong>Assistente de Construção de Contratos de Software</strong>, focado em boas práticas de segurança jurídica e equilíbrio contratual.
        </p>
      </div>

      <!-- Seção: Quem Sou Eu (Autoria) -->
      <div class="card" style="border-left: 4px solid var(--accent-blue);">
        <h3 class="card-title" style="margin-bottom: 1.25rem;">Quem Sou Eu</h3>
        
        <div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
          <img src="/NJ.png" alt="Logo NJ - Prof. Nilton F. Junior" style="width: 90px; height: 90px; object-fit: contain; flex-shrink: 0; filter: drop-shadow(0 4px 12px rgba(6, 182, 212, 0.25));" />
          <div style="flex: 1; min-width: 260px;">
            <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
              Prof. Nilton F. Junior
            </h4>
            <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 1.25rem;">
              A tecnologia não deve burocratizar o aprendizado, mas facilitá-lo. O <strong>MétricaLab</strong> é a materialização da minha vivência como Desenvolvedor e Pesquisador, unindo minha experiência no ensino acadêmico e na gestão diária de sistemas de informação para preparar profissionais capazes de medir, precificar e contratar com consciência técnica.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
              <a href="https://professornilton.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.45rem 0.9rem;">
                Acessar Meu Portfólio &rarr;
              </a>
              <a href="https://niltonfjunior2.github.io/simulador_criptografia/index.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.45rem 0.9rem;">
                Simulador de Criptografia &rarr;
              </a>
              <a href="https://tabela-hash.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.45rem 0.9rem;">
                Laboratório de Tabela Hash &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção: Fontes Curriculares -->
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">Fontes de Conteúdo Curricular</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 1rem;">
          O escopo teórico e prático sintetiza os tópicos basilares da disciplina de Engenharia de Software e práticas contemporâneas da indústria nacional:
        </p>
        <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.8; font-size: 0.92rem;">
          <li><strong>Módulo 01:</strong> <em>Introdução às Métricas de Software</em> (Fundamentos da medição, finalidades de observação, comparação e controle, critérios de qualidade, Lei de Goodhart e diferença entre volume de entrega e impacto de negócio).</li>
          <li><strong>Módulo 02:</strong> <em>Identificação e Classificação de Métricas</em> (Taxonomia de Recursos, Processo e Produto; medidas diretas e indiretas; resolução de ambiguidades em projetos reais).</li>
          <li><strong>Módulo 03:</strong> <em>Qualidade de Software e Liderança Técnica</em> (Engenharia de sustentação na prática, métricas como instrumento de gestão, equilíbrio de passivo técnico e cultura de qualidade).</li>
          <li><strong>Módulos 10 e 11:</strong> <em>Precificação de Software com Base em Métricas</em> (Formação de preço pelo Piso de Recursos, Eficiência de Processo e Teto de Captura de Valor em Produto, com cálculo obrigatório de impostos por dentro).</li>
          <li><strong>Módulo Complementar:</strong> <em>Segurança Jurídica e Contratos de Software</em> (Diretrizes educativas baseadas na Lei do Software nº 9.609/1998, Código Civil Brasileiro e Lei Geral de Proteção de Dados nº 13.709/2018).</li>
        </ul>
      </div>

      <!-- Seção: Pilares Arquiteturais -->
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">Pilares Arquiteturais</h3>
        <div class="grid-cards" style="margin-top: 1rem;">
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.25rem;">Privacidade Absoluta</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Sem coleta de dados pessoais em servidores, sem rastreamento invasivo, 100% processado no navegador do usuário.</div>
          </div>
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 700; color: var(--color-processo); margin-bottom: 0.25rem;">Desempenho Instantâneo</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Arquitetura estática moderna distribuída globalmente com carregamento imediato e suporte a exportação em formato A4.</div>
          </div>
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 700; color: var(--color-recursos); margin-bottom: 0.25rem;">Código e Conteúdo Abertos</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Conteúdos teóricos, simuladores, modelos de precificação e minutas didáticas estruturados de forma transparente e auditável.</div>
          </div>
        </div>
      </div>

    </div>
  `;

  return container;
}
