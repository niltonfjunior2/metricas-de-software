import introMarkdown from '../content/teoria/01-introducao-metricas.md?raw';
import classifMarkdown from '../content/teoria/02-classificacao-metricas.md?raw';
import { parseMarkdownToAccordion } from '../utils/markdownParser';
import { createAccordion } from '../components/Accordion';

export function renderTheoryView(moduleId?: string): HTMLElement {
  const container = document.createElement('div');

  const modules = [
    {
      id: 'introducao',
      number: '01',
      title: 'Introdução às Métricas de Software',
      source: 'Material 06',
      badgeClass: 'badge-processo',
      raw: introMarkdown,
      activityRoute: '#/atividades/classificacao',
      activityLabel: 'Praticar Classificação de Métricas',
    },
    {
      id: 'classificacao',
      number: '02',
      title: 'Identificação e Classificação de Métricas',
      source: 'Material 07',
      badgeClass: 'badge-produto',
      raw: classifMarkdown,
      activityRoute: '#/atividades/classificacao',
      activityLabel: 'Praticar Classificação de Métricas',
    },
  ];

  // Default to first module if not specified or invalid
  const currentModule = modules.find((m) => m.id === moduleId) || modules[0];
  const parsed = parseMarkdownToAccordion(currentModule.raw);

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Trilha Teórica</span>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--text-title);">${currentModule.title}</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <span class="badge ${currentModule.badgeClass}">Módulo ${currentModule.number}</span>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${currentModule.source}</span>
          </div>
          <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); line-height: 1.2;">
            ${currentModule.title}
          </h1>
        </div>
      </div>
      ${
        parsed.leadTextHtml
          ? `<div style="color: var(--text-secondary); max-width: 800px; font-size: 0.98rem; margin-top: 1rem; line-height: 1.6;">
              ${parsed.leadTextHtml}
            </div>`
          : ''
      }
    </div>

    <!-- Module Selector Tabs -->
    <div style="display: flex; gap: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem; overflow-x: auto;">
      ${modules
        .map(
          (m) => `
        <a href="#/teoria/${m.id}" class="nav-link ${m.id === currentModule.id ? 'active' : ''}" style="white-space: nowrap; border-radius: 8px;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem;">MÓDULO ${m.number}:</span>
          <span>${m.title}</span>
        </a>
      `
        )
        .join('')}
    </div>

    <!-- Accordion Host Container -->
    <div id="accordion-host"></div>

    <!-- Call to action to linked activity -->
    <div class="card" style="margin-top: 2.5rem; background: var(--bg-card-inner); border-color: var(--accent-cyan-border); padding: 1.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.25rem;">
        <div>
          <span class="badge badge-recursos" style="margin-bottom: 0.5rem;">Prática Recomendada</span>
          <h3 style="font-size: 1.2rem; color: var(--text-title); margin-bottom: 0.25rem;">
            Fixe os conceitos com um simulador prático
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">
            Teste sua capacidade de identificar Recursos, Processo e Produto em tempo real com feedback instantâneo.
          </p>
        </div>
        <a href="${currentModule.activityRoute}" class="btn btn-primary">
          ${currentModule.activityLabel} &rarr;
        </a>
      </div>
    </div>
  `;

  // Attach Accordion DOM element
  const host = container.querySelector('#accordion-host');
  if (host) {
    const accordionElement = createAccordion(parsed.sections);
    host.appendChild(accordionElement);
  }

  return container;
}
