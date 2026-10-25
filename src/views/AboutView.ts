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
        Sobre a Plataforma
      </h1>
      <p style="color: var(--text-secondary); max-width: 750px; font-size: 0.95rem;">
        Iniciativa educacional concebida para o ensino prático e dinâmico de Métricas de Software em Engenharia de Software.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 850px;">
      
      <!-- Seção: O Foco na Educação -->
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">O Foco na Educação</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Métricas de software são fundamentais para o gerenciamento de projetos, controle de qualidade e melhoria contínua de processos. O ponto central desta plataforma são as <strong>atividades interativas e simuladores práticos</strong> de classificação e auditoria de cenários reais, complementados por <strong>conteúdos conceituais sintetizados em tópicos expansíveis</strong> para enriquecer a tomada de decisão.
        </p>
      </div>

      <!-- Seção: Quem Sou Eu (Autoria) -->
      <div class="card" style="border-left: 4px solid var(--accent-blue);">
        <h3 class="card-title" style="margin-bottom: 1.25rem;">Quem Sou Eu</h3>
        
        <div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-cyan), var(--color-produto)); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.75rem; color: #FFFFFF; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35); flex-shrink: 0;">
            NJ
          </div>
          <div style="flex: 1; min-width: 260px;">
            <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
              Prof. Nilton F. Junior
            </h4>
            <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 1.25rem;">
              A tecnologia não deve burocratizar o aprendizado, mas facilitá-lo. Esta plataforma de Métricas de Software é a materialização da minha vivência como Desenvolvedor e Pesquisador, unindo minha experiência no ensino acadêmico e na gestão diária de sistemas de informação.
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
          O escopo teórico inicial sintetiza os tópicos basilares da disciplina de Engenharia de Software:
        </p>
        <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.8; font-size: 0.92rem;">
          <li><strong>Módulo 01:</strong> <em>Introdução às Métricas de Software</em> (Fundamentos da medição, finalidades de observação/comparação/controle, framework SMART, Lei de Goodhart, output vs outcome).</li>
          <li><strong>Módulo 02:</strong> <em>Identificação e Classificação de Métricas</em> (Taxonomia de Recursos, Processo e Produto; medidas vs métricas vs indicadores; resolução de ambiguidades).</li>
        </ul>
      </div>

      <!-- Seção: Pilares Arquiteturais -->
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">Pilares Arquiteturais</h3>
        <div class="grid-cards" style="margin-top: 1rem;">
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.25rem;">Privacidade Absoluta</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Sem coleta de dados pessoais, sem cookies invasivos, 100% aberto e seguro.</div>
          </div>
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 700; color: var(--color-processo); margin-bottom: 0.25rem;">Performance Edge</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Arquitetura estática rápida servida globalmente na Vercel com carregamento instantâneo.</div>
          </div>
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 700; color: var(--color-recursos); margin-bottom: 0.25rem;">Manutenção via Git</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Conteúdos teóricos mantidos declarativamente em arquivos Markdown no repositório.</div>
          </div>
        </div>
      </div>

    </div>
  `;

  return container;
}
