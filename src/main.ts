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

  const toggleSidebar = (): void => {
    isSidebarOpen = !isSidebarOpen;
    sidebar.classList.toggle('open', isSidebarOpen);
    backdrop.classList.toggle('active', isSidebarOpen);
  };

  const closeSidebar = (): void => {
    isSidebarOpen = false;
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
  };

  // Build Shell
  const navbar = createNavbar(toggleSidebar);
  const backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  backdrop.addEventListener('click', closeSidebar);

  const shellBody = document.createElement('div');
  shellBody.className = 'shell-body';

  const sidebar = createSidebar(closeSidebar);

  const mainContent = document.createElement('main');
  mainContent.className = 'main-content';
  mainContent.id = 'page-content';

  shellBody.appendChild(sidebar);
  shellBody.appendChild(mainContent);

  const footer = createFooter();

  appElement.appendChild(navbar);
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
