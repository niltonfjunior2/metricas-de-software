import { describe, it, expect } from 'vitest';
import { renderWelcomeView } from '../src/views/WelcomeView';

describe('Welcome Gateway View', () => {
  it('deve renderizar a saudação principal e os dois cartões de portais de acesso', () => {
    const welcome = renderWelcomeView();

    expect(welcome).not.toBeNull();
    expect(welcome.className).toContain('welcome-container');

    // Título e Hero
    const title = welcome.querySelector('.welcome-title');
    expect(title).not.toBeNull();
    expect(title?.textContent).toContain('Aprenda Métricas');
    expect(title?.textContent).toContain('Precifique com Consciência Técnica');

    // Dois grandes portais de acesso
    const metricasPortal = welcome.querySelector<HTMLAnchorElement>('#portal-metricas-link');
    const pricingPortal = welcome.querySelector<HTMLAnchorElement>('#portal-pricing-link');

    expect(metricasPortal).not.toBeNull();
    expect(pricingPortal).not.toBeNull();

    expect(metricasPortal?.getAttribute('href')).toBe('#/metricas');
    expect(pricingPortal?.getAttribute('href')).toBe('#/precificacao');

    expect(metricasPortal?.textContent).toContain('MétricaLab');
    expect(pricingPortal?.textContent).toContain('Calculadora de Precificação');

    // Destaque de 3 faixas e governança tributária no portal de precificação
    expect(pricingPortal?.textContent).toContain('Comparação em 3 Faixas');
    expect(pricingPortal?.textContent).toContain('Governança Tributária');
  });

  it('deve apresentar os pilares metodológicos do ecossistema', () => {
    const welcome = renderWelcomeView();
    const pillars = welcome.querySelectorAll('.welcome-pillar-box');
    expect(pillars.length).toBe(3);

    expect(welcome.textContent).toContain('Piso, Eficiência e Valor');
    expect(welcome.textContent).toContain('Zero Custo & Client-Side');
    expect(welcome.textContent).toContain('Consciência Fiscal');
  });
});

