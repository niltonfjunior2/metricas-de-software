import { classificationMetricsData, type ClassificationMetric } from './data';
import type { MetricCategory } from '../../types';

export function createClassificationActivity(totalQuestions: number = 10): {
  element: HTMLElement;
  cleanup: () => void;
} {
  const container = document.createElement('div');
  container.className = 'activity-container';

  // State
  let sessionMode: '10' | '30' = totalQuestions === 30 ? '30' : '10';
  let activeMetrics: ClassificationMetric[] = getMetricsForMode(sessionMode);
  let currentIndex = 0;
  let isAnswered = false;
  const userAnswers: Record<number, { selected: MetricCategory; isCorrect: boolean }> = {};

  function getMetricsForMode(mode: '10' | '30'): ClassificationMetric[] {
    if (mode === '30') return [...classificationMetricsData];
    // Balanced 10 items representing resources, process and product
    return classificationMetricsData.slice(0, 10);
  }

  function render(): void {
    container.innerHTML = '';

    // If finished all questions, render result card
    if (currentIndex >= activeMetrics.length) {
      renderResults();
      return;
    }

    const currentMetric = activeMetrics[currentIndex];
    const answer = userAnswers[currentMetric.id];
    isAnswered = !!answer;

    // Calculate score
    const totalAnswered = Object.keys(userAnswers).length;
    const correctCount = Object.values(userAnswers).filter((a) => a.isCorrect).length;
    const progressPercent = ((currentIndex + 1) / activeMetrics.length) * 100;

    // Header bar
    const headerBar = document.createElement('div');
    headerBar.className = 'activity-header-bar';
    headerBar.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <a href="#/atividades" class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;">
          &larr; Catálogo
        </a>
        <div style="display: flex; gap: 0.35rem;">
          <button class="btn btn-secondary ${sessionMode === '10' ? 'btn-primary' : ''}" id="mode-10" style="padding: 0.3rem 0.65rem; font-size: 0.75rem;">
            10 Desafios
          </button>
          <button class="btn btn-secondary ${sessionMode === '30' ? 'btn-primary' : ''}" id="mode-30" style="padding: 0.3rem 0.65rem; font-size: 0.75rem;">
            Todos os 30
          </button>
        </div>
      </div>

      <div class="activity-progress-wrapper">
        <div class="activity-progress-bar">
          <div class="activity-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <div class="activity-counter">
          ${currentIndex + 1} / ${activeMetrics.length}
        </div>
      </div>

      <div class="activity-score-badge">
        <span style="color: var(--accent-cyan);">Acertos:</span>
        <span style="color: var(--text-title); font-family: var(--font-mono);">${correctCount} / ${totalAnswered}</span>
      </div>
    `;

    // Stage Card
    const stageCard = document.createElement('div');
    stageCard.className = `metric-stage-card ${
      isAnswered ? (answer.isCorrect ? 'correct' : 'incorrect') : ''
    }`;

    stageCard.innerHTML = `
      <div class="metric-stage-badge">
        Desafio ${currentIndex + 1} de ${activeMetrics.length}
      </div>
      <div class="metric-stage-title">
        "${currentMetric.metrica}"
      </div>

      <div class="neutral-definition-box">
        <div style="font-size: 1.25rem;">🔍</div>
        <div>
          <h5>O que esta métrica avalia (Definição Operacional):</h5>
          <p>${currentMetric.descricaoNeutra}</p>
        </div>
      </div>

      <div class="category-choices-grid">
        <button class="category-choice-btn ${getChoiceClass('recursos', currentMetric, answer)}" data-choice="recursos" ${isAnswered ? 'disabled' : ''}>
          <div class="choice-tag">Lente 1</div>
          <div class="choice-title" style="color: var(--color-recursos-tag);">Recursos</div>
          <div class="choice-question">"Quais insumos usamos?"</div>
          <div class="choice-shortcut"><kbd>1</kbd> ou <kbd>R</kbd></div>
        </button>

        <button class="category-choice-btn ${getChoiceClass('processo', currentMetric, answer)}" data-choice="processo" ${isAnswered ? 'disabled' : ''}>
          <div class="choice-tag">Lente 2</div>
          <div class="choice-title" style="color: var(--color-processo-tag);">Processo</div>
          <div class="choice-question">"Como desenvolvemos?"</div>
          <div class="choice-shortcut"><kbd>2</kbd> ou <kbd>P</kbd></div>
        </button>

        <button class="category-choice-btn ${getChoiceClass('produto', currentMetric, answer)}" data-choice="produto" ${isAnswered ? 'disabled' : ''}>
          <div class="choice-tag">Lente 3</div>
          <div class="choice-title" style="color: var(--color-produto-tag);">Produto</div>
          <div class="choice-question">"O que entregamos?"</div>
          <div class="choice-shortcut"><kbd>3</kbd> ou <kbd>D</kbd></div>
        </button>
      </div>

      ${
        isAnswered
          ? `
        <div class="reveal-pedagogic-pane">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: ${
            answer.isCorrect ? 'var(--color-processo)' : '#EF4444'
          }; margin-bottom: 0.25rem;">
            <span>${answer.isCorrect ? '✅ Resposta Correta!' : '❌ Resposta Incorreta!'}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;">
              Classificação: <strong>${currentMetric.categoria.toUpperCase()}</strong>
            </span>
          </div>
          <div class="pedagogic-item">
            <div class="pedagogic-icon">📌</div>
            <div>
              <div class="pedagogic-title" style="color: var(--accent-blue);">Justificativa Técnica</div>
              <div class="pedagogic-desc">${currentMetric.justificativa}</div>
            </div>
          </div>
          <div class="pedagogic-item">
            <div class="pedagogic-icon">💡</div>
            <div>
              <div class="pedagogic-title" style="color: var(--color-recursos);">Exemplo & Desambiguação</div>
              <div class="pedagogic-desc">${currentMetric.exemplo}</div>
            </div>
          </div>
        </div>
      `
          : `
        <div style="font-size: 0.85rem; color: var(--text-muted); padding: 0.5rem 0;">
          Selecione uma das 3 lentes acima para validar e desbloquear a justificativa.
        </div>
      `
      }
    `;

    // Footer Controls Bar
    const controlsBar = document.createElement('div');
    controlsBar.className = 'activity-controls-bar';
    controlsBar.innerHTML = `
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="btn-prev" ${currentIndex === 0 ? 'disabled' : ''}>
          &larr; Anterior
        </button>
        ${
          !isAnswered
            ? `<button class="btn btn-secondary" id="btn-reveal">Revelar Resposta</button>`
            : ''
        }
        <button class="btn btn-primary" id="btn-next">
          ${currentIndex === activeMetrics.length - 1 ? 'Ver Resultado Final &rarr;' : 'Próxima Métrica &rarr;'}
        </button>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;">
        Atalhos: <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">1/R</kbd> <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">2/P</kbd> <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">3/D</kbd> <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">Espaço</kbd>
      </div>
    `;

    container.appendChild(headerBar);
    container.appendChild(stageCard);
    container.appendChild(controlsBar);

    // Event Listeners
    attachEvents(container, currentMetric);
  }

  function getChoiceClass(
    cat: MetricCategory,
    metric: ClassificationMetric,
    answer?: { selected: MetricCategory; isCorrect: boolean }
  ): string {
    if (!answer) return '';
    if (metric.categoria === cat) return 'is-correct-target';
    if (answer.selected === cat && !answer.isCorrect) return 'is-wrong-selection';
    return '';
  }

  function handleSelect(selected: MetricCategory, metric: ClassificationMetric): void {
    if (isAnswered) return;
    const isCorrect = metric.categoria === selected;
    userAnswers[metric.id] = { selected, isCorrect };
    render();
  }

  function attachEvents(root: HTMLElement, metric: ClassificationMetric): void {
    // Mode toggles
    root.querySelector('#mode-10')?.addEventListener('click', () => {
      sessionMode = '10';
      activeMetrics = getMetricsForMode('10');
      currentIndex = 0;
      render();
    });

    root.querySelector('#mode-30')?.addEventListener('click', () => {
      sessionMode = '30';
      activeMetrics = getMetricsForMode('30');
      currentIndex = 0;
      render();
    });

    // Choices clicks
    root.querySelectorAll<HTMLButtonElement>('.category-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice') as MetricCategory;
        if (choice) handleSelect(choice, metric);
      });
    });

    // Prev / Next / Reveal
    root.querySelector('#btn-prev')?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        render();
      }
    });

    root.querySelector('#btn-next')?.addEventListener('click', () => {
      currentIndex++;
      render();
    });

    root.querySelector('#btn-reveal')?.addEventListener('click', () => {
      if (!isAnswered) {
        userAnswers[metric.id] = { selected: metric.categoria, isCorrect: false };
        render();
      }
    });
  }

  function renderResults(): void {
    const total = activeMetrics.length;
    const correct = Object.values(userAnswers).filter((a) => a.isCorrect).length;
    const percentage = Math.round((correct / total) * 100);

    // Categories breakdown
    const categories: MetricCategory[] = ['recursos', 'processo', 'produto'];
    const breakdown = categories.map((cat) => {
      const metricsInCat = activeMetrics.filter((m) => m.categoria === cat);
      const correctInCat = metricsInCat.filter((m) => userAnswers[m.id]?.isCorrect).length;
      return {
        cat,
        total: metricsInCat.length,
        correct: correctInCat,
        percent: metricsInCat.length ? Math.round((correctInCat / metricsInCat.length) * 100) : 0,
      };
    });

    const resultElement = document.createElement('div');
    resultElement.className = 'result-card';
    resultElement.innerHTML = `
      <div class="result-trophy">${percentage >= 70 ? '🏆' : '🎯'}</div>
      <h2 style="font-size: 2rem; color: var(--text-title); margin-bottom: 0.5rem;">
        ${percentage >= 80 ? 'Excelente Desempenho!' : percentage >= 60 ? 'Bom Trabalho!' : 'Continue Praticando!'}
      </h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">
        Você concluiu a rodada de classificação de métricas de software.
      </p>

      <div class="result-score-circle">
        <div class="result-score-number">${percentage}%</div>
        <div class="result-score-total">${correct} de ${total} corretas</div>
      </div>

      <div class="result-breakdown">
        ${breakdown
          .map(
            (b) => `
          <div class="breakdown-box">
            <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--color-${b.cat}-tag); margin-bottom: 0.25rem;">
              ${b.cat}
            </div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-title);">
              ${b.correct} / ${b.total}
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${b.percent}% de acerto</div>
          </div>
        `
          )
          .join('')}
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary" id="btn-restart">
          Jogar Novamente
        </button>
        <a href="#/atividades" class="btn btn-secondary">
          Voltar ao Catálogo
        </a>
        <a href="#/teoria/classificacao" class="btn btn-secondary">
          Revisar Teoria
        </a>
      </div>
    `;

    resultElement.querySelector('#btn-restart')?.addEventListener('click', () => {
      currentIndex = 0;
      Object.keys(userAnswers).forEach((key) => delete userAnswers[Number(key)]);
      render();
    });

    container.appendChild(resultElement);
  }

  // Global Keyboard Navigation
  const handleKeydown = (e: KeyboardEvent): void => {
    // Avoid interfering if user is inside an input/textarea
    if (
      document.activeElement?.tagName === 'INPUT' ||
      document.activeElement?.tagName === 'TEXTAREA'
    ) {
      return;
    }

    if (currentIndex >= activeMetrics.length) return;
    const currentMetric = activeMetrics[currentIndex];

    if (e.key === '1' || e.key.toLowerCase() === 'r') {
      handleSelect('recursos', currentMetric);
    } else if (e.key === '2' || e.key.toLowerCase() === 'p') {
      handleSelect('processo', currentMetric);
    } else if (e.key === '3' || e.key.toLowerCase() === 'd') {
      handleSelect('produto', currentMetric);
    } else if (e.key === ' ') {
      e.preventDefault();
      // Space advances to next question if answered, or reveals
      if (isAnswered) {
        currentIndex++;
        render();
      } else {
        userAnswers[currentMetric.id] = { selected: currentMetric.categoria, isCorrect: false };
        render();
      }
    } else if (e.key === 'ArrowRight') {
      if (currentIndex < activeMetrics.length) {
        currentIndex++;
        render();
      }
    } else if (e.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        currentIndex--;
        render();
      }
    }
  };

  window.addEventListener('keydown', handleKeydown);

  // Initial render
  render();

  return {
    element: container,
    cleanup: () => {
      window.removeEventListener('keydown', handleKeydown);
    },
  };
}
