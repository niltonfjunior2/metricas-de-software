import { describe, it, expect } from 'vitest';
import { auditScenariosData } from '../src/activities/audit/data';
import { createAuditActivity } from '../src/activities/audit';

describe('Base de Dados de Auditoria de Cenários', () => {
  it('deve conter 20 cenários corporativos completos e estruturados', () => {
    expect(auditScenariosData.length).toBe(20);

    auditScenariosData.forEach((scenario) => {
      expect(scenario.id).toBeGreaterThan(0);
      expect(scenario.objetivo.trim().length).toBeGreaterThan(10);
      expect(scenario.contexto.trim().length).toBeGreaterThan(20);
      expect(scenario.metricas_alvo.length).toBe(3);
      expect(scenario.ruidos_cenario.length).toBeGreaterThanOrEqual(1);

      // Cada métrica-alvo deve ter campos válidos
      scenario.metricas_alvo.forEach((m) => {
        expect(['Recursos', 'Processo', 'Produto']).toContain(m.categoria);
        expect(m.nome.trim().length).toBeGreaterThan(3);
        expect(m.valor.trim().length).toBeGreaterThan(0);
        expect(m.justificativa.trim().length).toBeGreaterThan(10);
      });

      // Cada ruído deve ter justificativa
      scenario.ruidos_cenario.forEach((r) => {
        expect(r.item.trim().length).toBeGreaterThan(2);
        expect(r.motivo.trim().length).toBeGreaterThan(10);
      });
    });
  });
});

describe('Componente Interativo da Atividade 2 (Auditoria)', () => {
  it('deve renderizar o cenário inicial com objetivo e narrativa', () => {
    const activity = createAuditActivity(0);
    expect(activity.element).not.toBeNull();

    const objective = activity.element.querySelector('.scenario-objective-banner p');
    expect(objective).not.toBeNull();
    expect(objective?.textContent).toContain(auditScenariosData[0].objetivo);

    const narrative = activity.element.querySelector('.narrative-text');
    expect(narrative).not.toBeNull();
    expect(narrative?.textContent).toContain(auditScenariosData[0].contexto);

    activity.cleanup();
  });

  it('deve revelar as 3 métricas SMART e a auditoria de ruídos ao clicar no botão de revelação', () => {
    const activity = createAuditActivity(0);

    const revealBtn = activity.element.querySelector(
      '#btn-trigger-reveal'
    ) as HTMLButtonElement;
    expect(revealBtn).not.toBeNull();

    revealBtn.click();

    // Após revelação, deve conter 3 cards de métricas e a caixa de ruídos
    const metricCards = activity.element.querySelectorAll('.audit-metric-card');
    expect(metricCards.length).toBe(3);

    const ruidosBox = activity.element.querySelector('.ruidos-box');
    expect(ruidosBox).not.toBeNull();
    expect(ruidosBox?.textContent).toContain('Auditoria de Ruídos do Cenário');

    activity.cleanup();
  });

  it('deve permitir navegar para o próximo cenário', () => {
    const activity = createAuditActivity(0);

    const nextBtn = activity.element.querySelector('#btn-next') as HTMLButtonElement;
    nextBtn.click();

    const counter = activity.element.querySelector('.activity-counter');
    expect(counter?.textContent).toContain('2 / 20');

    const objective = activity.element.querySelector('.scenario-objective-banner p');
    expect(objective?.textContent).toContain(auditScenariosData[1].objetivo);

    activity.cleanup();
  });
});
