import { techLeadCasesData, type TechLeadCase } from './data';

export function createTechLeadActivity(initialCaseIndex: number = 0): {
  element: HTMLElement;
  cleanup: () => void;
} {
  const container = document.createElement('div');
  container.className = 'techlead-container';

  let currentCaseIndex = Math.max(0, Math.min(initialCaseIndex, techLeadCasesData.length - 1));
  let currentPhase = 1;

  // Track revealed dimensions per case (index in metrics array)
  const revealedDimensions = new Map<number, Set<number>>();

  function getRevealedSet(caseIdx: number): Set<number> {
    if (!revealedDimensions.has(caseIdx)) {
      revealedDimensions.set(caseIdx, new Set<number>());
    }
    return revealedDimensions.get(caseIdx)!;
  }

  // Synthesized Web Audio beep
  function playBeep(type: 'reveal' | 'nav'): void {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      if (type === 'reveal') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
      } else {
        osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
        osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.08); // C5
      }

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Audio not permitted or unsupported, fail silently
    }
  }

  function goToPhase(phaseNum: number): void {
    if (phaseNum < 1 || phaseNum > 4) return;
    currentPhase = phaseNum;
    playBeep('nav');
    render();
  }

  function navigatePhase(delta: number): void {
    const target = currentPhase + delta;
    if (target >= 1 && target <= 4) {
      goToPhase(target);
    } else if (target > 4) {
      navigateCase(1);
    }
  }

  function navigateCase(delta: number): void {
    const target = currentCaseIndex + delta;
    if (target >= 0 && target < techLeadCasesData.length) {
      currentCaseIndex = target;
      currentPhase = 1;
      playBeep('nav');
      render();
    }
  }

  function jumpToCase(idx: number): void {
    if (idx >= 0 && idx < techLeadCasesData.length) {
      currentCaseIndex = idx;
      currentPhase = 1;
      playBeep('nav');
      render();
    }
  }

  function revealDimension(metricIndex: number): void {
    const set = getRevealedSet(currentCaseIndex);
    if (!set.has(metricIndex)) {
      set.add(metricIndex);
      playBeep('reveal');
      render();
    }
  }

  function revealAllDimensions(): void {
    const currentCase = techLeadCasesData[currentCaseIndex];
    const set = getRevealedSet(currentCaseIndex);
    currentCase.fase1_cenario_inicial.metricas.forEach((_, idx) => set.add(idx));
    playBeep('reveal');
    render();
  }

  function getDimensionIcon(dim: string): string {
    switch (dim) {
      case 'Recursos':
        return '🧪';
      case 'Processo':
        return '🔄';
      case 'Produto':
        return '🖥️';
      default:
        return '📊';
    }
  }

  function render(): void {
    container.innerHTML = '';
    const currentCase: TechLeadCase = techLeadCasesData[currentCaseIndex];
    const revealedSet = getRevealedSet(currentCaseIndex);

    // Header Controls Bar
    const headerBar = document.createElement('div');
    headerBar.className = 'activity-header-bar';
    headerBar.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
        <a href="#/atividades" class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;">
          &larr; Catálogo
        </a>
        <span class="badge badge-produto" style="font-size: 0.75rem;">
          Simulador de Tech Lead
        </span>
        <span class="badge badge-processo" style="font-size: 0.75rem;">
          ${currentCase.nivel}
        </span>
      </div>

      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 0.82rem; color: var(--text-muted);">Caso:</span>
        <select id="case-jump-select" style="background: var(--bg-control); border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.82rem; max-width: 260px;">
          ${techLeadCasesData
            .map(
              (c, i) => `
            <option value="${i}" ${i === currentCaseIndex ? 'selected' : ''}>
              Caso #${c.id}: ${c.titulo.slice(0, 32)}...
            </option>
          `
            )
            .join('')}
        </select>
        <span class="activity-counter" style="margin-left: 0.5rem;">
          ${currentCaseIndex + 1} / ${techLeadCasesData.length}
        </span>
      </div>
    `;

    // Case Card
    const card = document.createElement('div');
    card.className = 'techlead-card';

    // Badge Row and Title
    const badgeRow = document.createElement('div');
    badgeRow.className = 'techlead-badge-row';
    badgeRow.innerHTML = `
      <span class="badge badge-produto" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;">
        ESTUDO DE CASO EM ANÁLISE
      </span>
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">
        ${currentCase.nivel}
      </span>
    `;

    const titleEl = document.createElement('h2');
    titleEl.className = 'techlead-case-title';
    titleEl.textContent = `Caso #${currentCase.id}: ${currentCase.titulo}`;

    // 4-Phase Stepper
    const stepperEl = document.createElement('div');
    stepperEl.className = 'techlead-stepper';
    const phaseNames = [
      'Cenário Inicial & Baseline',
      'O Dilema & Novo Painel',
      'O Desafio',
      'Resolução & Pós-Ação',
    ];

    phaseNames.forEach((name, i) => {
      const phaseNum = i + 1;
      const tab = document.createElement('div');
      let statusClass = '';
      if (phaseNum === currentPhase) {
        statusClass = 'active';
      } else if (phaseNum < currentPhase) {
        statusClass = 'completed';
      }
      tab.className = `techlead-step-tab ${statusClass}`;
      tab.innerHTML = `
        <span class="techlead-step-num">Fase ${phaseNum}</span>
        <span class="techlead-step-label">${name}</span>
      `;
      tab.addEventListener('click', () => goToPhase(phaseNum));
      stepperEl.appendChild(tab);
    });

    // Phase Content Stage
    const stageEl = document.createElement('div');
    stageEl.className = 'techlead-phase-stage';

    if (currentPhase === 1) {
      renderPhase1(stageEl, currentCase, revealedSet);
    } else if (currentPhase === 2) {
      renderPhase2(stageEl, currentCase);
    } else if (currentPhase === 3) {
      renderPhase3(stageEl, currentCase);
    } else if (currentPhase === 4) {
      renderPhase4(stageEl, currentCase);
    }

    card.appendChild(badgeRow);
    card.appendChild(titleEl);
    card.appendChild(stepperEl);
    card.appendChild(stageEl);

    // Footer Navigation Bar
    const footerBar = document.createElement('div');
    footerBar.className = 'techlead-footer-bar';

    const prevNextGroup = document.createElement('div');
    prevNextGroup.className = 'techlead-btn-group';

    const btnPrevCase = document.createElement('button');
    btnPrevCase.className = 'btn btn-secondary';
    btnPrevCase.textContent = '⏮ Caso Anterior';
    btnPrevCase.disabled = currentCaseIndex === 0;
    btnPrevCase.addEventListener('click', () => navigateCase(-1));

    const btnPrevPhase = document.createElement('button');
    btnPrevPhase.className = 'btn btn-secondary';
    btnPrevPhase.textContent = '⬅ Fase Anterior';
    btnPrevPhase.disabled = currentPhase === 1;
    btnPrevPhase.addEventListener('click', () => navigatePhase(-1));

    const btnNextPhase = document.createElement('button');
    btnNextPhase.className = 'btn btn-primary';
    btnNextPhase.textContent =
      currentPhase === 4 ? 'Próximo Caso ⏭' : `Avançar para Fase ${currentPhase + 1} ➡`;
    btnNextPhase.addEventListener('click', () => navigatePhase(1));

    const btnNextCase = document.createElement('button');
    btnNextCase.className = 'btn btn-secondary';
    btnNextCase.textContent = 'Próximo Caso ⏭';
    btnNextCase.disabled = currentCaseIndex === techLeadCasesData.length - 1;
    btnNextCase.addEventListener('click', () => navigateCase(1));

    prevNextGroup.appendChild(btnPrevCase);
    prevNextGroup.appendChild(btnPrevPhase);
    prevNextGroup.appendChild(btnNextPhase);
    prevNextGroup.appendChild(btnNextCase);

    const shortcutLegend = document.createElement('div');
    shortcutLegend.className = 'techlead-shortcuts-legend';
    shortcutLegend.innerHTML = `
      Atalhos: <kbd>Espaço</kbd> avançar fase | <kbd>&larr;</kbd> <kbd>&rarr;</kbd> mudar caso
    `;

    footerBar.appendChild(prevNextGroup);
    footerBar.appendChild(shortcutLegend);

    container.appendChild(headerBar);
    container.appendChild(card);
    container.appendChild(footerBar);

    // Event listener for dropdown jump
    const jumpSelect = headerBar.querySelector('#case-jump-select') as HTMLSelectElement | null;
    if (jumpSelect) {
      jumpSelect.addEventListener('change', (e) => {
        const val = parseInt((e.target as HTMLSelectElement).value, 10);
        jumpToCase(val);
      });
    }
  }

  function renderPhase1(
    stageEl: HTMLElement,
    currentCase: TechLeadCase,
    revealedSet: Set<number>
  ): void {
    const f1 = currentCase.fase1_cenario_inicial;

    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'techlead-narrative-box';
    narrativeBox.innerHTML = `
      <h5>${f1.periodo}</h5>
      <p>${f1.contexto}</p>
    `;

    const tableHeaderBar = document.createElement('div');
    tableHeaderBar.style.cssText =
      'display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;';
    tableHeaderBar.innerHTML = `
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em;">
        📊 Painel de Indicadores Atuais (Clique nos badges para classificar):
      </span>
      <button class="btn btn-secondary" id="btn-reveal-all" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">
        👁️ Revelar Todas as Dimensões
      </button>
    `;

    const tableContainer = document.createElement('div');
    tableContainer.className = 'techlead-table-container';

    const table = document.createElement('table');
    table.className = 'techlead-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Indicador (Métrica)</th>
          <th>Valor Atual</th>
          <th>Dimensão / Lente</th>
          <th>Papel no Projeto / Justificativa</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody')!;
    f1.metricas.forEach((m, idx) => {
      const isRevealed = revealedSet.has(idx);
      const tr = document.createElement('tr');
      const icon = getDimensionIcon(m.dimensao);
      const dimClass = m.dimensao.toLowerCase();

      tr.innerHTML = `
        <td class="cell-metric">${m.nome}</td>
        <td class="cell-val">${m.valor}</td>
        <td>
          <button class="badge-dim-btn ${isRevealed ? `revealed-${dimClass}` : ''}" data-idx="${idx}">
            ${
              isRevealed
                ? `${icon} ${m.dimensao}`
                : `❓ [Clique para classificar]`
            }
          </button>
        </td>
        <td style="color: var(--text-body); font-size: 0.92rem;">${m.justificativa}</td>
      `;

      const btn = tr.querySelector('.badge-dim-btn') as HTMLButtonElement;
      if (!isRevealed) {
        btn.addEventListener('click', () => revealDimension(idx));
      }
      tbody.appendChild(tr);
    });

    tableContainer.appendChild(table);

    const diagBox = document.createElement('div');
    diagBox.className = 'techlead-diag-initial-box';
    diagBox.innerHTML = `
      <div class="diag-icon">🩺</div>
      <div>
        <h5>Diagnóstico Inicial da Saúde do Projeto:</h5>
        <p>${f1.diagnostico_inicial}</p>
      </div>
    `;

    const waitingBanner = document.createElement('div');
    waitingBanner.className = 'techlead-waiting-banner';
    waitingBanner.innerHTML = `
      <span class="pulse-dot"></span>
      <span>Cenário inicial compreendido! <strong>[Clique aqui ou aperte Espaço para conhecer o Dilema da Fase 2]</strong> &rarr;</span>
    `;
    waitingBanner.addEventListener('click', () => goToPhase(2));

    stageEl.appendChild(narrativeBox);
    stageEl.appendChild(tableHeaderBar);
    stageEl.appendChild(tableContainer);
    stageEl.appendChild(diagBox);
    stageEl.appendChild(waitingBanner);

    const revealAllBtn = tableHeaderBar.querySelector('#btn-reveal-all');
    if (revealAllBtn) {
      revealAllBtn.addEventListener('click', revealAllDimensions);
    }
  }

  function renderPhase2(stageEl: HTMLElement, currentCase: TechLeadCase): void {
    const f2 = currentCase.fase2_dilema;

    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'techlead-narrative-box dilemma';
    narrativeBox.innerHTML = `
      <h5>${f2.periodo}</h5>
      <p>${f2.dilema_texto}</p>
    `;

    const tableLabel = document.createElement('div');
    tableLabel.style.cssText =
      'font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem;';
    tableLabel.textContent = '📈 Novo Painel de Métricas (Comparativo Antes vs. Depois com Variações):';

    const tableContainer = document.createElement('div');
    tableContainer.className = 'techlead-table-container';

    const table = document.createElement('table');
    table.className = 'techlead-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    f2.colunas_tabela.forEach((col) => {
      const th = document.createElement('th');
      th.textContent = col;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    f2.tabela_comparativa.forEach((row) => {
      const tr = document.createElement('tr');
      const icon = getDimensionIcon(row.dimensao);
      const dimBadgeClass = `badge-${row.dimensao.toLowerCase()}`;

      tr.innerHTML = `
        <td class="cell-metric">${row.metrica}</td>
        <td class="cell-val">${row.col1}</td>
        <td class="cell-val">${row.col2}</td>
        <td class="cell-var ${row.status_var}">${row.var}</td>
        <td><span class="badge ${dimBadgeClass}">${icon} ${row.dimensao}</span></td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    const waitingBanner = document.createElement('div');
    waitingBanner.className = 'techlead-waiting-banner';
    waitingBanner.innerHTML = `
      <span class="pulse-dot"></span>
      <span>Novo painel analisado! <strong>[Clique aqui ou aperte Espaço para abrir o Desafio na Fase 3]</strong> &rarr;</span>
    `;
    waitingBanner.addEventListener('click', () => goToPhase(3));

    stageEl.appendChild(narrativeBox);
    stageEl.appendChild(tableLabel);
    stageEl.appendChild(tableContainer);
    stageEl.appendChild(waitingBanner);
  }

  function renderPhase3(stageEl: HTMLElement, currentCase: TechLeadCase): void {
    const f3 = currentCase.fase3_desafio;

    const challengeCard = document.createElement('div');
    challengeCard.className = 'techlead-challenge-card';
    challengeCard.innerHTML = `
      <h4>
        <span>🎯</span>
        <span>${f3.enunciado}</span>
      </h4>
    `;

    const questionsList = document.createElement('div');
    questionsList.className = 'techlead-questions-list';

    f3.perguntas.forEach((q, idx) => {
      const item = document.createElement('div');
      item.className = 'techlead-question-item';
      item.innerHTML = `
        <span class="q-badge">Pergunta ${idx + 1}</span>
        <span>${q}</span>
      `;
      questionsList.appendChild(item);
    });

    challengeCard.appendChild(questionsList);

    const waitingBanner = document.createElement('div');
    waitingBanner.className = 'techlead-waiting-banner';
    waitingBanner.innerHTML = `
      <span class="pulse-dot"></span>
      <span>Reflita sobre o cenário e formule sua hipótese... <strong>[Clique aqui ou aperte Espaço para revelar a Resolução na Fase 4]</strong> &rarr;</span>
    `;
    waitingBanner.addEventListener('click', () => goToPhase(4));

    stageEl.appendChild(challengeCard);
    stageEl.appendChild(waitingBanner);
  }

  function renderPhase4(stageEl: HTMLElement, currentCase: TechLeadCase): void {
    const f4 = currentCase.fase4_resolucao;

    // 1. Diagnóstico Causa e Efeito
    const step1Header = document.createElement('div');
    step1Header.className = 'techlead-step-header';
    step1Header.innerHTML = `
      <h4>1️⃣ Diagnóstico de Causa e Efeito & Métrica Oculta</h4>
      <div class="line"></div>
    `;

    const diagCard = document.createElement('div');
    diagCard.className = 'techlead-diag-card';
    diagCard.innerHTML = `
      <div class="techlead-diag-row">
        <div class="techlead-diag-icon">🔗</div>
        <div class="techlead-diag-content">
          <h5 class="title-causa">Cadeia de Causa e Efeito (Recurso &rarr; Processo &rarr; Produto)</h5>
          <p>${f4.diagnostico_causa_efeito}</p>
        </div>
      </div>
      <div class="techlead-diag-row">
        <div class="techlead-diag-icon">🕵️‍♂️</div>
        <div class="techlead-diag-content">
          <h5 class="title-oculta">Interpretação da Métrica Oculta (Esforço Desperdiçado)</h5>
          <p>${f4.metrica_oculta}</p>
        </div>
      </div>
      <div class="techlead-diag-row">
        <div class="techlead-diag-icon">💡</div>
        <div class="techlead-diag-content">
          <h5 class="title-proposta">Proposição de Nova Métrica de Processo</h5>
          <p>${f4.nova_metrica_proposta}</p>
        </div>
      </div>
    `;

    // 2. Tomada de Decisão: Plano de Intervenção
    const step2Header = document.createElement('div');
    step2Header.className = 'techlead-step-header';
    step2Header.innerHTML = `
      <h4>2️⃣ Tomada de Decisão: Plano de Intervenção do Tech Lead</h4>
      <div class="line"></div>
    `;

    const actionsGrid = document.createElement('div');
    actionsGrid.className = 'techlead-actions-grid';

    let actionsHtml = '';
    if (f4.argumento_executivo) {
      actionsHtml += `
        <div class="techlead-action-box box-exec">
          <div class="techlead-action-header">💼 Argumento Executivo para a Diretoria</div>
          <div class="techlead-action-content">${f4.argumento_executivo}</div>
        </div>
      `;
    }
    actionsHtml += `
      <div class="techlead-action-box box-tatica">
        <div class="techlead-action-header">⚡ Ação Tática Imediata (Curto Prazo)</div>
        <div class="techlead-action-content">${f4.acao_tatica}</div>
      </div>
      <div class="techlead-action-box box-estrat">
        <div class="techlead-action-header">🏛️ Ação Estratégica Sustentável (Longo Prazo)</div>
        <div class="techlead-action-content">${f4.acao_estrategica}</div>
      </div>
    `;
    actionsGrid.innerHTML = actionsHtml;

    // 3. Auditoria de Ruídos
    const step3Header = document.createElement('div');
    step3Header.className = 'techlead-step-header';
    step3Header.innerHTML = `
      <h4>3️⃣ Auditoria de Ruídos do Cenário</h4>
      <div class="line"></div>
    `;

    const ruidosBox = document.createElement('div');
    ruidosBox.className = 'techlead-ruidos-box';
    ruidosBox.innerHTML = `
      <div class="techlead-ruidos-header">
        <span>🛡️</span>
        <span>Elementos que Não Devem Contaminar a Tomada de Decisão:</span>
      </div>
      <div>
        ${f4.ruidos_cenario
          .map(
            (r) => `
          <div class="techlead-ruido-item">
            <span class="techlead-ruido-bullet">✕</span>
            <div><strong>"${r.item}":</strong> ${r.motivo}</div>
          </div>
        `
          )
          .join('')}
      </div>
    `;

    // 4. Painel Projetado Pós-Intervenção
    const step4Header = document.createElement('div');
    step4Header.className = 'techlead-step-header';
    step4Header.innerHTML = `
      <h4>4️⃣ Painel Projetado Pós-Intervenção (Validação Prática da Ação)</h4>
      <div class="line"></div>
    `;

    const projPanel = document.createElement('div');
    projPanel.className = 'techlead-projected-panel';

    const projHeader = document.createElement('div');
    projHeader.className = 'techlead-projected-header';
    projHeader.innerHTML = `<span>📈</span><span>${f4.painel_pos_acao.titulo}</span>`;

    const projTableContainer = document.createElement('div');
    projTableContainer.className = 'techlead-table-container';

    const projTable = document.createElement('table');
    projTable.className = 'techlead-table';
    projTable.innerHTML = `
      <thead>
        <tr>
          <th>Indicador (Métrica)</th>
          <th>Valor Anterior</th>
          <th>Valor Projetado</th>
          <th>Impacto / Resultado Técnico</th>
          <th>Dimensão</th>
        </tr>
      </thead>
      <tbody>
        ${f4.painel_pos_acao.tabela
          .map((row) => {
            const icon = getDimensionIcon(row.dimensao);
            const dimBadgeClass = `badge-${row.dimensao.toLowerCase()}`;
            return `
            <tr>
              <td class="cell-metric">${row.metrica}</td>
              <td class="cell-val">${row.anterior}</td>
              <td class="cell-val" style="color: var(--color-processo); font-weight: 800;">${row.projetado}</td>
              <td style="font-weight: 600; color: var(--accent-blue);">${row.impacto}</td>
              <td><span class="badge ${dimBadgeClass}">${icon} ${row.dimensao}</span></td>
            </tr>
          `;
          })
          .join('')}
      </tbody>
    `;
    projTableContainer.appendChild(projTable);

    const projSummary = document.createElement('div');
    projSummary.className = 'techlead-projected-summary';
    projSummary.innerHTML = `💡 <strong>Conclusão Técnica:</strong> ${f4.painel_pos_acao.conclusao}`;

    projPanel.appendChild(projHeader);
    projPanel.appendChild(projTableContainer);
    projPanel.appendChild(projSummary);

    stageEl.appendChild(step1Header);
    stageEl.appendChild(diagCard);
    stageEl.appendChild(step2Header);
    stageEl.appendChild(actionsGrid);
    stageEl.appendChild(step3Header);
    stageEl.appendChild(ruidosBox);
    stageEl.appendChild(step4Header);
    stageEl.appendChild(projPanel);
  }

  // Keyboard shortcut listener
  const handleKeyDown = (e: KeyboardEvent): void => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'SELECT' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }

    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      navigatePhase(1);
    } else if (e.code === 'ArrowRight' || e.code === 'PageDown') {
      e.preventDefault();
      navigateCase(1);
    } else if (e.code === 'ArrowLeft' || e.code === 'PageUp') {
      e.preventDefault();
      navigateCase(-1);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // Initial render
  render();

  return {
    element: container,
    cleanup: () => {
      window.removeEventListener('keydown', handleKeyDown);
    },
  };
}

