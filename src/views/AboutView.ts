export function renderAboutView(): HTMLElement {
  const container = document.createElement('div');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Sobre</span>
      </div>
      <h1 style="font-size: 2rem; font-weight: 700; color: var(--text-title); margin-bottom: 0.5rem;">
        Sobre a Plataforma
      </h1>
      <p style="color: var(--text-secondary); max-width: 750px; font-size: 0.95rem;">
        Iniciativa educacional focada no ensino e fixação prática de Métricas de Software em Engenharia de Software.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 850px;">
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">Propósito Pedagógico</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Métricas de software são fundamentais para o gerenciamento de projetos, controle de qualidade e melhoria contínua de processos. No entanto, o estudo dessa disciplina frequentemente sofre com textos excessivamente prolixos e teoria desconectada da tomada de decisão real. Esta plataforma foi concebida para quebrar essa barreira, apresentando <strong>conceitos enxutos</strong> acompanhados de <strong>simulações interativas imediatas</strong>.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">Fontes de Conteúdo</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 1rem;">
          O escopo teórico inicial sintetiza os tópicos basilares da Engenharia de Software:
        </p>
        <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.8; font-size: 0.92rem;">
          <li><strong>Módulo 01:</strong> <em>Introdução às Métricas de Software</em> (Definições de medição, métricas diretas e indiretas, atributos internos e externos).</li>
          <li><strong>Módulo 02:</strong> <em>Identificação e Classificação de Métricas</em> (Métricas de Recursos, Métricas de Processo e Métricas de Produto).</li>
        </ul>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">Pilares Arquiteturais</h3>
        <div class="grid-cards" style="margin-top: 1rem;">
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 600; color: var(--accent-cyan); margin-bottom: 0.25rem;">Zero Rastreamento</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Sem coleta de dados pessoais, sem cookies invasivos, 100% aberto e seguro.</div>
          </div>
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 600; color: var(--color-processo); margin-bottom: 0.25rem;">Performance Edge</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Arquitetura estática rápida servida globalmente na Vercel com carregamento instantâneo.</div>
          </div>
          <div style="background-color: var(--bg-card-inner); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
            <div style="font-weight: 600; color: var(--color-recursos); margin-bottom: 0.25rem;">Manutenção via Git</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">Conteúdos teóricos mantidos declarativamente em arquivos Markdown no repositório.</div>
          </div>
        </div>
      </div>
    </div>
  `;

  return container;
}
