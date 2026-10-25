export function renderPrivacyView(): HTMLElement {
  const container = document.createElement('div');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Política de Privacidade</span>
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
        Política de Privacidade
      </h1>
      <p style="color: var(--text-secondary); max-width: 750px; font-size: 0.95rem;">
        Compromisso de transparência e privacidade por padrão (Privacy by Design).
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 850px;">
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">1. Coleta e Tratamento de Dados</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Esta plataforma é uma aplicação executada <strong>inteiramente no lado do cliente (no seu navegador)</strong>. Não solicitamos cadastro, login, e-mail ou quaisquer dados pessoais. Não coletamos, armazenamos ou transmitimos quaisquer respostas ou escolhas realizadas nas atividades para servidores externos ou bases de dados corporativas.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">2. Uso de Cookies e Armazenamento Local</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          <strong>Não utilizamos cookies para rastreamento de usuários, perfilamento ou publicidade.</strong> O único recurso de armazenamento empregado é o <code>localStorage</code> do próprio navegador do usuário, com o propósito técnico estrito de salvar sua preferência visual de tema (Modo Claro ou Modo Escuro).
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">3. Compartilhamento de Informações</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Como não coletamos nem mantemos informações pessoais em servidores, inexiste qualquer compartilhamento, cessão ou comercialização de dados com parceiros, patrocinadores ou terceiros.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">4. Alinhamento com a LGPD</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O projeto atende com rigor aos princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), em especial os princípios de <strong>finalidade</strong>, <strong>adequação</strong>, <strong>necessidade (minimização de dados)</strong> e <strong>segurança</strong>, garantindo acesso aberto, anônimo e seguro a todos os usuários.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">5. Alterações nesta Política</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Reservamo-nos o direito de atualizar este documento periodicamente para refletir evoluções pedagógicas ou aprimoramentos técnicos no sistema.
        </p>
      </div>

      <div style="margin-top: 1rem;">
        <a href="#/" class="btn btn-primary">&larr; Voltar ao Início</a>
      </div>
    </div>
  `;

  return container;
}
