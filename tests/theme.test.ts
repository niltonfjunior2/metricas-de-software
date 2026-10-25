import { describe, it, expect, beforeEach } from 'vitest';
import { getStoredTheme, applyTheme, toggleTheme, initTheme } from '../src/utils/theme';

describe('Theme Manager', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('deve inicializar com dark mode por padrão quando não houver localStorage', () => {
    initTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('deve alternar entre modo escuro e claro corretamente', () => {
    applyTheme('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(getStoredTheme()).toBe('dark');

    const nextTheme = toggleTheme();
    expect(nextTheme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(getStoredTheme()).toBe('light');

    const backTheme = toggleTheme();
    expect(backTheme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(getStoredTheme()).toBe('dark');
  });

  it('deve respeitar a preferência salva no localStorage', () => {
    localStorage.setItem('metrics_theme', 'light');
    initTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
