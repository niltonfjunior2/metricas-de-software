export type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'metrics_theme';

export function getStoredTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Fallback if localStorage is inaccessible
  }
  return 'dark';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors
  }

  // Update theme toggle button UI if present
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    const iconSpan = toggleBtn.querySelector('.theme-icon');
    const labelSpan = toggleBtn.querySelector('.theme-label');
    if (theme === 'dark') {
      if (iconSpan) iconSpan.textContent = '☀️';
      if (labelSpan) labelSpan.textContent = 'Modo Claro';
      toggleBtn.setAttribute('title', 'Alternar para Modo Claro (Tecla T)');
    } else {
      if (iconSpan) iconSpan.textContent = '🌙';
      if (labelSpan) labelSpan.textContent = 'Modo Escuro';
      toggleBtn.setAttribute('title', 'Alternar para Modo Escuro (Tecla T)');
    }
  }
}

export function toggleTheme(): Theme {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const newTheme: Theme = current === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  return newTheme;
}

export function initTheme(): void {
  const initial = getStoredTheme();
  applyTheme(initial);
}
