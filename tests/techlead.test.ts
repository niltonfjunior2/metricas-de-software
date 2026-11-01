import { describe, it, expect } from 'vitest';
import { techLeadCasesData } from '../src/activities/techlead/data';
import { createTechLeadActivity } from '../src/activities/techlead';

describe('Base de Dados do Simulador de Tech Lead', () => {
  it('deve conter 10 estudos de caso completos e estruturados em 4 fases', () => {
    expect(techLeadCasesData.length).toBe(10);

    techLeadCasesData.forEach((c) => {
      expect(c.id).toBeGreaterThan(0);
      expect(c.titulo.trim().length).toBeGreaterThan(5);
      expect(c.nivel.trim().length).toBeGreaterThan(3);

      // Fase 1
      expect(c.fase1_cenario_inicial.periodo.trim().length).toBeGreaterThan(3);
      expect(c.fase1_cenario_inicial.contexto.trim().length).toBeGreaterThan(20);
      expect(c.fase1_cenario_inicial.metricas.length).toBeGreaterThanOrEqual(3);
      expect(c.fase1_cenario_inicial.diagnostico_inicial.trim().length).toBeGreaterThan(10);

      c.fase1_cenario_inicial.metricas.forEach((m) => {
        expect(['Recursos', 'Processo', 'Produto']).toContain(m.dimensao);
        expect(m.nome.trim().length).toBeGreaterThan(2);
        expect(m.valor.trim().length).toBeGreaterThan(0);
        expect(m.justificativa.trim().length).toBeGreaterThan(5);
      });

      // Fase 2
      expect(c.fase2_dilema.periodo.trim().length).toBeGreaterThan(3);
      expect(c.fase2_dilema.dilema_texto.trim().length).toBeGreaterThan(20);
      expect(c.fase2_dilema.colunas_tabela.length).toBeGreaterThanOrEqual(4);
      expect(c.fase2_dilema.tabela_comparativa.length).toBeGreaterThanOrEqual(3);

      c.fase2_dilema.tabela_comparativa.forEach((row) => {
        expect(row.metrica.trim().length).toBeGreaterThan(2);
        expect(['Recursos', 'Processo', 'Produto']).toContain(row.dimensao);
        expect(['danger', 'positive', 'neutral']).toContain(row.status_var);
      });

      // Fase 3
      expect(c.fase3_desafio.enunciado.trim().length).toBeGreaterThan(10);
      expect(c.fase3_desafio.perguntas.length).toBe(3);

      // Fase 4
      expect(c.fase4_resolucao.diagnostico_causa_efeito.trim().length).toBeGreaterThan(20);
      expect(c.fase4_resolucao.acao_tatica.trim().length).toBeGreaterThan(15);
      expect(c.fase4_resolucao.acao_estrategica.trim().length).toBeGreaterThan(15);
      expect(c.fase4_resolucao.metrica_oculta.trim().length).toBeGreaterThan(10);
      expect(c.fase4_resolucao.nova_metrica_proposta.trim().length).toBeGreaterThan(5);
      expect(c.fase4_resolucao.ruidos_cenario.length).toBeGreaterThanOrEqual(1);

      expect(c.fase4_resolucao.painel_pos_acao.titulo.trim().length).toBeGreaterThan(5);
      expect(c.fase4_resolucao.painel_pos_acao.conclusao.trim().length).toBeGreaterThan(10);
      expect(c.fase4_resolucao.painel_pos_acao.tabela.length).toBeGreaterThanOrEqual(3);
    });
  });
});

describe('Componente Interativo do Simulador de Tech Lead', () => {
  it('deve renderizar a Fase 1 com título, stepper de 4 fases e tabela de baseline', () => {
    const activity = createTechLeadActivity(0);
    expect(activity.element).not.toBeNull();

    const titleEl = activity.element.querySelector('.techlead-case-title');
    expect(titleEl?.textContent).toContain('Gestão de Armazéns');

    const tabs = activity.element.querySelectorAll('.techlead-step-tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0].classList.contains('active')).toBe(true);

    const metricsRows = activity.element.querySelectorAll('.techlead-table tbody tr');
    expect(metricsRows.length).toBe(techLeadCasesData[0].fase1_cenario_inicial.metricas.length);

    activity.cleanup();
  });

  it('deve permitir revelar as dimensões na Fase 1', () => {
    const activity = createTechLeadActivity(0);

    const revealAllBtn = activity.element.querySelector('#btn-reveal-all') as HTMLButtonElement;
    expect(revealAllBtn).not.toBeNull();
    revealAllBtn.click();

    const buttons = activity.element.querySelectorAll('.badge-dim-btn');
    expect(buttons[0].textContent).toContain('Recursos');
    expect(buttons[1].textContent).toContain('Processo');

    activity.cleanup();
  });

  it('deve navegar entre as 4 fases através dos tabs do stepper', () => {
    const activity = createTechLeadActivity(0);

    // Navegar para Fase 2
    const tabs = activity.element.querySelectorAll('.techlead-step-tab');
    (tabs[1] as HTMLElement).click();

    expect(activity.element.innerHTML).toContain('Novo Painel de Métricas');
    expect(activity.element.innerHTML).toContain(techLeadCasesData[0].fase2_dilema.periodo);

    // Navegar para Fase 3
    (tabs[2] as HTMLElement).click();
    expect(activity.element.innerHTML).toContain(techLeadCasesData[0].fase3_desafio.enunciado);
    expect(activity.element.innerHTML).toContain('Pergunta 1');

    // Navegar para Fase 4
    (tabs[3] as HTMLElement).click();
    expect(activity.element.innerHTML).toContain('Cadeia de Causa e Efeito');
    expect(activity.element.innerHTML).toContain('Ação Tática Imediata');
    expect(activity.element.innerHTML).toContain('Auditoria de Ruídos do Cenário');
    expect(activity.element.innerHTML).toContain('Painel Projetado Pós-Intervenção');

    activity.cleanup();
  });

  it('deve permitir navegar para o próximo caso de estudo', () => {
    const activity = createTechLeadActivity(0);

    const footerButtons = activity.element.querySelectorAll('.techlead-btn-group button');
    // btnNextCase é o último botão do grupo
    const nextCaseBtn = footerButtons[footerButtons.length - 1] as HTMLButtonElement;
    nextCaseBtn.click();

    const titleEl = activity.element.querySelector('.techlead-case-title');
    expect(titleEl?.textContent).toContain('Checkout Expresso');

    const counter = activity.element.querySelector('.activity-counter');
    expect(counter?.textContent).toContain('2 / 10');

    activity.cleanup();
  });
});

