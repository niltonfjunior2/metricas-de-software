import { describe, it, expect, vi } from 'vitest';
import { createNavbar } from '../src/components/Navbar';
import { createSidebar } from '../src/components/Sidebar';
import { createFooter } from '../src/components/Footer';

describe('Layout Shell Components', () => {
  it('Navbar deve renderizar marca, links de navegação e botão de toggle', () => {
    const onToggle = vi.fn();
    const navbar = createNavbar(onToggle);

    expect(navbar.querySelector('.navbar-brand')).not.toBeNull();
    expect(navbar.querySelectorAll('.nav-link').length).toBe(4);

    const toggleBtn = navbar.querySelector<HTMLButtonElement>('#menu-toggle');
    expect(toggleBtn).not.toBeNull();

    toggleBtn?.click();
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('Sidebar deve conter seções da Trilha Teórica e Atividades Interativas', () => {
    const onCloseMobile = vi.fn();
    const sidebar = createSidebar(onCloseMobile);

    const links = sidebar.querySelectorAll('.sidebar-link');
    expect(links.length).toBeGreaterThanOrEqual(4);

    const sectionTitles = sidebar.querySelectorAll('.sidebar-section-title');
    expect(sectionTitles.length).toBe(2);
    expect(sectionTitles[0].textContent).toBe('Trilha Teórica');
    expect(sectionTitles[1].textContent).toBe('Atividades Interativas');
  });

  it('Footer deve renderizar referências acadêmicas e link para GitHub', () => {
    const footer = createFooter();
    expect(footer.textContent).toContain('Métricas de Software');
    expect(footer.querySelector('a[href*="github.com"]')).not.toBeNull();
  });
});
