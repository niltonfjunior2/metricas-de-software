import './styles/main.css';
import { createNavbar } from './components/Navbar';
import { createSidebar } from './components/Sidebar';
import { createFooter } from './components/Footer';
import { router } from './utils/router';
import { initTheme, toggleTheme } from './utils/theme';
import { renderHomeView } from './views/HomeView';
import { renderTheoryView } from './views/TheoryView';
import { renderActivitiesView } from './views/ActivitiesView';
import { renderAboutView } from './views/AboutView';
import { renderTermsView } from './views/TermsView';
import { renderPrivacyView } from './views/PrivacyView';

function initializeApp(): void {
  // Initialize Theme from localStorage or system preference
  initTheme();

  const appElement = document.getElementById('app');
  if (!appElement) return;

  appElement.className = 'app-container';
  appElement.innerHTML = '';

  // Mobile drawer state
  let isSidebarOpen = false;

  const toggleSidebarMobile = (): void => {
    isSidebarOpen = !isSidebarOpen;
    sidebar.classList.toggle('open', isSidebarOpen);
    backdrop.classList.toggle('active', isSidebarOpen);
  };

  const closeSidebarMobile = (): void => {
    isSidebarOpen = false;
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
  };

  // Desktop sidebar collapsed state (persisted in localStorage)
  let isSidebarCollapsed = localStorage.getItem('metrics_sidebar_collapsed') === 'true';

  const applySidebarCollapsedState = (): void => {
    sidebar.classList.toggle('collapsed', isSidebarCollapsed);
    expandBtn.classList.toggle('visible', isSidebarCollapsed);
    localStorage.setItem('metrics_sidebar_collapsed', isSidebarCollapsed ? 'true' : 'false');
  };

  const toggleCollapseSidebar = (): void => {
    isSidebarCollapsed = !isSidebarCollapsed;
    applySidebarCollapsedState();
  };

  // Universal toggle handler for navbar hamburger button
  const handleNavToggle = (): void => {
    if (window.innerWidth <= 900) {
      toggleSidebarMobile();
    } else {
      toggleCollapseSidebar();
    }
  };

  // Build Shell
  const navbar = createNavbar(handleNavToggle);
  const backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  backdrop.addEventListener('click', closeSidebarMobile);

  const shellBody = document.createElement('div');
  shellBody.className = 'shell-body';

  const sidebar = createSidebar(closeSidebarMobile, toggleCollapseSidebar);

  // Floating expand button on left edge when collapsed
  const expandBtn = document.createElement('button');
  expandBtn.className = 'sidebar-expand-btn';
  expandBtn.id = 'sidebar-expand-btn';
  expandBtn.title = 'Exibir barra lateral';
  expandBtn.setAttribute('aria-label', 'Exibir barra lateral');
  expandBtn.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
    <span>Menu</span>
  `;
  expandBtn.addEventListener('click', toggleCollapseSidebar);

  if (isSidebarCollapsed) {
    applySidebarCollapsedState();
  }

  const mainContent = document.createElement('main');
  mainContent.className = 'main-content';
  mainContent.id = 'page-content';

  shellBody.appendChild(sidebar);
  shellBody.appendChild(mainContent);

  const footer = createFooter();

  appElement.appendChild(navbar);
  appElement.appendChild(expandBtn);
  appElement.appendChild(backdrop);
  appElement.appendChild(shellBody);
  appElement.appendChild(footer);

  // Helper to mount view with cleanup
  let activeCleanup: (() => void) | null = null;

  const setView = (view: HTMLElement | { element: HTMLElement; cleanup?: () => void }): void => {
    if (activeCleanup) {
      activeCleanup();
      activeCleanup = null;
    }

    const element = view instanceof HTMLElement ? view : view.element;
    if (!(view instanceof HTMLElement) && typeof view.cleanup === 'function') {
      activeCleanup = view.cleanup;
    }

    mainContent.innerHTML = '';
    mainContent.appendChild(element);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Register SPA Routes
  router
    .on('/', () => {
      setView(renderHomeView());
    })
    .on('/teoria', () => {
      setView(renderTheoryView());
    })
    .on('/teoria/:id', (params) => {
      setView(renderTheoryView(params.id));
    })
    .on('/atividades', () => {
      setView(renderActivitiesView());
    })
    .on('/atividades/:id', (params) => {
      setView(renderActivitiesView(params.id));
    })
    .on('/sobre', () => {
      setView(renderAboutView());
    })
    .on('/termos', () => {
      setView(renderTermsView());
    })
    .on('/privacidade', () => {
      setView(renderPrivacyView());
    })
    .notFound(() => {
      const notFoundElement = document.createElement('div');
      notFoundElement.style.textAlign = 'center';
      notFoundElement.style.padding = '4rem 1rem';
      notFoundElement.innerHTML = `
        <h2 style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 1rem;">404</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Página não encontrada.</p>
        <a href="#/" class="btn btn-primary">Voltar para o Início</a>
      `;
      setView(notFoundElement);
    });

  // Global keyboard shortcut to toggle theme ('t' or 'T' when not inside inputs)
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    const activeEl = document.activeElement;
    const isEditing = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || (activeEl as HTMLElement).isContentEditable);
    if (!isEditing && (e.key === 't' || e.key === 'T')) {
      toggleTheme();
    }
  });

  // Initial routing resolution
  router.resolve();
}

// Start application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
