export function createSidebar(onCloseMobile: () => void): HTMLElement {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'app-sidebar';

  sidebar.innerHTML = `
    <div>
      <div class="sidebar-section-title">Trilha Teórica</div>
      <ul class="sidebar-menu">
        <li>
          <a href="#/teoria/introducao" class="sidebar-link" data-route="/teoria/introducao">
            <span class="badge badge-processo" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">01</span>
            <span>Introdução às Métricas</span>
          </a>
        </li>
        <li>
          <a href="#/teoria/classificacao" class="sidebar-link" data-route="/teoria/classificacao">
            <span class="badge badge-produto" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">02</span>
            <span>Classificação & Tipos</span>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <div class="sidebar-section-title">Atividades Interativas</div>
      <ul class="sidebar-menu">
        <li>
          <a href="#/atividades/classificacao" class="sidebar-link" data-route="/atividades/classificacao">
            <span class="badge badge-recursos" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">A1</span>
            <span>Classificação (Rec/Proc/Prod)</span>
          </a>
        </li>
        <li>
          <a href="#/atividades/auditoria" class="sidebar-link" data-route="/atividades/auditoria">
            <span class="badge badge-recursos" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">A2</span>
            <span>Auditoria de Cenários</span>
          </a>
        </li>
      </ul>
    </div>

    <div style="margin-top: auto; padding: 1rem 0.5rem; border-top: 1px solid var(--border-color);">
      <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">
        Engenharia de Software<br />
        <span style="color: var(--accent-blue);">Modo Auto-Instrucional</span>
      </div>
    </div>
  `;

  // Close sidebar on mobile when a link is clicked
  const links = sidebar.querySelectorAll<HTMLAnchorElement>('.sidebar-link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        onCloseMobile();
      }
    });
  });

  return sidebar;
}
