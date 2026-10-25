import { auditScenariosData, type ScenarioAudit } from './data';

export function createAuditActivity(initialScenarioIndex: number = 0): {
  element: HTMLElement;
  cleanup: () => void;
} {
  const container = document.createElement('div');
  container.className = 'audit-container';

  let currentIndex = Math.max(0, Math.min(initialScenarioIndex, auditScenariosData.length - 1));
  const revealedMap = new Map<number, boolean>();

  function render(): void {
    container.innerHTML = '';
    const scenario: ScenarioAudit = auditScenariosData[currentIndex];
    const isRevealed = revealedMap.get(scenario.id) || false;

    // Header bar
    const headerBar = document.createElement('div');
    headerBar.className = 'activity-header-bar';
    headerBar.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <a href="#/atividades" class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;">
          &larr; Catálogo
        </a>
        <span class="badge badge-processo" style="font-size: 0.75rem;">
          Auditoria de Cenários
        </span>
      </div>

      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 0.82rem; color: var(--text-muted);">Ir para:</span>
        <select id="scenario-jump-select" style="background: var(--bg-control); border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.82rem; max-width: 260px;">
          ${auditScenariosData
            .map(
              (s, i) => `
            <option value="${i}" ${i === currentIndex ? 'selected' : ''}>
              Cenário ${s.id}: ${s.objetivo.slice(0, 32)}...
            </option>
          `
            )
            .join('')}
        </select>
        <span class="activity-counter" style="margin-left: 0.5rem;">
          ${currentIndex + 1} / ${auditScenariosData.length}
        </span>
      </div>
    `;

    // Stage Card
    const stageCard = document.createElement('div');
    stageCard.className = `scenario-stage-card ${isRevealed ? 'revealed' : ''}`;

    stageCard.innerHTML = `
      <div class="scenario-header-row">
        <span class="metric-stage-badge">Cenário Corporativo #${scenario.id}</span>
        <div style="display: flex; gap: 0.5rem;">
          <span class="badge badge-recursos" style="font-size: 0.7rem;">Recursos</span>
          <span class="badge badge-processo" style="font-size: 0.7rem;">Processo</span>
          <span class="badge badge-produto" style="font-size: 0.7rem;">Produto</span>
        </div>
      </div>

      <div class="scenario-objective-banner">
        <h4>Objetivo Gerencial da Medição:</h4>
        <p>"${scenario.objetivo}"</p>
      </div>

      <div class="narrative-box">
        <div class="narrative-title">
          <span>📄</span>
          <span>Contexto Operacional do Projeto:</span>
        </div>
        <p class="narrative-text">${scenario.contexto}</p>
      </div>

      <div class="challenge-banner">
        <span style="font-size: 1.25rem;">🎯</span>
        <div>
          <strong>Desafio de Auditoria:</strong> Identifique as 3 métricas essenciais que atendem ao objetivo e distinga-as dos ruídos e métricas de vaidade presentes no texto.
        </div>
      </div>

      ${
        !isRevealed
          ? `
        <button class="waiting-reveal-btn" id="btn-trigger-reveal">
          <span>🔍</span>
          <span>Aguardando análise do cenário... <strong>[Clique aqui ou aperte Espaço para auditar]</strong></span>
        </button>
      `
          : `
        <div class="audit-reveal-container">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: var(--accent-cyan);">
            <span>✅</span>
            <span>Métricas Centrais Selecionadas & Classificação SMART:</span>
          </div>

          <div class="audit-metrics-grid">
            ${scenario.metricas_alvo
              .map((m) => {
                const catLower = m.categoria.toLowerCase();
                const badgeClass =
                  catLower === 'recursos'
                    ? 'badge-recursos'
                    : catLower === 'processo'
                    ? 'badge-processo'
                    : 'badge-produto';
                return `
                <div class="audit-metric-card border-${catLower}">
                  <div class="audit-metric-header">
                    <span class="badge ${badgeClass}">${m.categoria}</span>
                  </div>
                  <div class="audit-metric-name">${m.nome}</div>
                  <div class="audit-metric-value">${m.valor}</div>
                  <div class="audit-metric-justification">${m.justificativa}</div>
                </div>
              `;
              })
              .join('')}
          </div>

          <div class="ruidos-box">
            <div class="ruidos-header">
              <span>⚠️</span>
              <span>Auditoria de Ruídos do Cenário & Análise de Ambiguidade:</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${scenario.ruidos_cenario
                .map(
                  (r) => `
                <div class="ruido-item">
                  <div class="ruido-target-name">${r.item}</div>
                  <div class="ruido-explanation">${r.motivo}</div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
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
          !isRevealed
            ? `<button class="btn btn-secondary" id="btn-reveal">Revelar Resposta</button>`
            : ''
        }
        <button class="btn btn-primary" id="btn-next">
          ${currentIndex === auditScenariosData.length - 1 ? 'Reiniciar Auditoria &rarr;' : 'Próximo Cenário &rarr;'}
        </button>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;">
        Atalhos: <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">Espaço</kbd> Revelar/Avançar | <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">&larr;</kbd> <kbd style="background: var(--bg-control); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">&rarr;</kbd> Navegar
      </div>
    `;

    container.appendChild(headerBar);
    container.appendChild(stageCard);
    container.appendChild(controlsBar);

    attachEvents(container, scenario);
  }

  function attachEvents(root: HTMLElement, scenario: ScenarioAudit): void {
    root.querySelector('#scenario-jump-select')?.addEventListener('change', (e) => {
      const select = e.target as HTMLSelectElement;
      currentIndex = parseInt(select.value, 10);
      render();
    });

    root.querySelector('#btn-trigger-reveal')?.addEventListener('click', () => {
      revealedMap.set(scenario.id, true);
      render();
    });

    root.querySelector('#btn-reveal')?.addEventListener('click', () => {
      revealedMap.set(scenario.id, true);
      render();
    });

    root.querySelector('#btn-prev')?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        render();
      }
    });

    root.querySelector('#btn-next')?.addEventListener('click', () => {
      if (currentIndex < auditScenariosData.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      render();
    });
  }

  // Keyboard navigation
  const handleKeydown = (e: KeyboardEvent): void => {
    if (
      document.activeElement?.tagName === 'INPUT' ||
      document.activeElement?.tagName === 'TEXTAREA' ||
      document.activeElement?.tagName === 'SELECT'
    ) {
      return;
    }

    const scenario = auditScenariosData[currentIndex];
    const isRevealed = revealedMap.get(scenario.id) || false;

    if (e.key === ' ') {
      e.preventDefault();
      if (!isRevealed) {
        revealedMap.set(scenario.id, true);
        render();
      } else {
        if (currentIndex < auditScenariosData.length - 1) {
          currentIndex++;
          render();
        }
      }
    } else if (e.key === 'ArrowRight') {
      if (currentIndex < auditScenariosData.length - 1) {
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

  render();

  return {
    element: container,
    cleanup: () => {
      window.removeEventListener('keydown', handleKeydown);
    },
  };
}
