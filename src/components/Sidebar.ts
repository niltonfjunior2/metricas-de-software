export function createSidebar(
  onCloseMobile: () => void,
  onToggleCollapse?: () => void
): HTMLElement {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'app-sidebar';

  sidebar.innerHTML = `
    <div class="sidebar-header-row">
      <span class="sidebar-main-title">Navegação</span>
      <button class="sidebar-collapse-btn" id="sidebar-collapse-btn" title="Recuar barra lateral" aria-label="Recuar barra lateral">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="11 17 6 12 11 7"></polyline>
          <polyline points="18 17 13 12 18 7"></polyline>
        </svg>
        <span class="collapse-label">Recuar</span>
      </button>
    </div>

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
        <li>
          <a href="#/teoria/techlead" class="sidebar-link" data-route="/teoria/techlead">
            <span class="badge badge-recursos" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">03</span>
            <span>Qualidade & Tech Lead</span>
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
        <li>
          <a href="#/atividades/techlead" class="sidebar-link" data-route="/atividades/techlead">
            <span class="badge badge-recursos" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">A3</span>
            <span>Simulador de Tech Lead</span>
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

  const collapseBtn = sidebar.querySelector<HTMLButtonElement>('#sidebar-collapse-btn');
  if (collapseBtn && onToggleCollapse) {
    collapseBtn.addEventListener('click', onToggleCollapse);
  }

  return sidebar;
}
