import { describe, it, expect } from 'vitest';
import { classificationMetricsData } from '../src/activities/classification/data';
import { createClassificationActivity } from '../src/activities/classification';

describe('Base de Dados de Classificação de Métricas', () => {
  it('deve conter 30 métricas completas com todos os campos obrigatórios', () => {
    expect(classificationMetricsData.length).toBe(30);

    classificationMetricsData.forEach((item) => {
      expect(item.id).toBeGreaterThan(0);
      expect(item.metrica.trim().length).toBeGreaterThan(5);
      expect(['recursos', 'processo', 'produto']).toContain(item.categoria);
      expect(item.descricaoNeutra.trim().length).toBeGreaterThan(10);
      expect(item.justificativa.trim().length).toBeGreaterThan(10);
      expect(item.exemplo.trim().length).toBeGreaterThan(10);
    });
  });

  it('deve possuir representatividade equilibrada entre as três categorias', () => {
    const recursos = classificationMetricsData.filter((m) => m.categoria === 'recursos');
    const processo = classificationMetricsData.filter((m) => m.categoria === 'processo');
    const produto = classificationMetricsData.filter((m) => m.categoria === 'produto');

    expect(recursos.length).toBeGreaterThanOrEqual(8);
    expect(processo.length).toBeGreaterThanOrEqual(8);
    expect(produto.length).toBeGreaterThanOrEqual(8);
  });
});

describe('Componente Interativo da Atividade 1', () => {
  it('deve renderizar a interface do jogador e opções de categoria', () => {
    const activity = createClassificationActivity(10);
    expect(activity.element).not.toBeNull();

    const titleElement = activity.element.querySelector('.metric-stage-title');
    expect(titleElement).not.toBeNull();
    expect(titleElement?.textContent).toContain(classificationMetricsData[0].metrica);

    const choices = activity.element.querySelectorAll('.category-choice-btn');
    expect(choices.length).toBe(3);

    activity.cleanup();
  });

  it('deve processar a escolha do usuário e exibir o painel pedagógico', () => {
    const activity = createClassificationActivity(10);
    const firstMetric = classificationMetricsData[0]; // Categoria: processo

    // Selecionar "Processo"
    const processoBtn = activity.element.querySelector(
      '[data-choice="processo"]'
    ) as HTMLButtonElement;
    processoBtn.click();

    const revealPane = activity.element.querySelector('.reveal-pedagogic-pane');
    expect(revealPane).not.toBeNull();
    expect(revealPane?.textContent).toContain('Resposta Correta');
    expect(revealPane?.textContent).toContain(firstMetric.justificativa);

    activity.cleanup();
  });

  it('deve alternar entre o modo de 10 desafios e todos os 30', () => {
    const activity = createClassificationActivity(10);

    const btn30 = activity.element.querySelector('#mode-30') as HTMLButtonElement;
    btn30.click();

    const counter = activity.element.querySelector('.activity-counter');
    expect(counter?.textContent).toContain('1 / 30');

    activity.cleanup();
  });
});
