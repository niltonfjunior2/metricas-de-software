export function createNavbar(onToggleSidebar: () => void): HTMLElement {
  const nav = document.createElement('header');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <button class="menu-toggle-btn" id="menu-toggle" aria-label="Abrir menu de navegação">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <a href="#/" class="navbar-brand">
        <div class="navbar-logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20V10"></path>
            <path d="M18 20V4"></path>
            <path d="M6 20v-4"></path>
          </svg>
        </div>
        <span>Métricas<span style="color: var(--accent-blue)">.ES</span></span>
      </a>
    </div>

    <nav>
      <ul class="navbar-links">
        <li>
          <a href="#/" class="nav-link" data-route="/">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Início
          </a>
        </li>
        <li>
          <a href="#/teoria" class="nav-link" data-route="/teoria">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
              <path d="M6 6h10"></path>
              <path d="M6 10h10"></path>
            </svg>
            Trilha Teórica
          </a>
        </li>
        <li>
          <a href="#/atividades" class="nav-link" data-route="/atividades">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            Atividades Práticas
          </a>
        </li>
        <li>
          <a href="#/sobre" class="nav-link" data-route="/sobre">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Sobre
          </a>
        </li>
      </ul>
    </nav>
  `;

  const toggleBtn = nav.querySelector<HTMLButtonElement>('#menu-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', onToggleSidebar);
  }

  return nav;
}
