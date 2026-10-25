import type { AccordionSection } from '../utils/markdownParser';

export function createAccordion(sections: AccordionSection[]): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'accordion-wrapper';

  // Controls: Expand All / Collapse All
  const controls = document.createElement('div');
  controls.className = 'accordion-controls';

  const expandAllBtn = document.createElement('button');
  expandAllBtn.className = 'accordion-control-btn';
  expandAllBtn.textContent = 'Expandir Todos';

  const collapseAllBtn = document.createElement('button');
  collapseAllBtn.className = 'accordion-control-btn';
  collapseAllBtn.textContent = 'Recolher Todos';

  controls.appendChild(expandAllBtn);
  controls.appendChild(collapseAllBtn);
  wrapper.appendChild(controls);

  const itemElements: HTMLElement[] = [];

  sections.forEach((section, index) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.id = section.id;

    // Start with the first section expanded by default for immediate engagement
    if (index === 0) {
      item.classList.add('active');
    }

    const header = document.createElement('button');
    header.className = 'accordion-header';
    header.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    header.setAttribute('aria-controls', `${section.id}-content`);

    header.innerHTML = `
      <div class="accordion-header-title">
        <span class="accordion-header-number">${String(index + 1).padStart(2, '0')}</span>
        <span>${section.title}</span>
      </div>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;

    const collapse = document.createElement('div');
    collapse.className = 'accordion-collapse';
    collapse.id = `${section.id}-content`;

    const content = document.createElement('div');
    content.className = 'accordion-content';

    const inner = document.createElement('div');
    inner.className = 'accordion-content-inner';
    inner.innerHTML = section.html;

    content.appendChild(inner);
    collapse.appendChild(content);

    header.addEventListener('click', () => {
      const isExpanded = item.classList.contains('active');
      item.classList.toggle('active', !isExpanded);
      header.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
    });

    item.appendChild(header);
    item.appendChild(collapse);
    wrapper.appendChild(item);
    itemElements.push(item);
  });

  expandAllBtn.addEventListener('click', () => {
    itemElements.forEach((item) => {
      item.classList.add('active');
      item.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'true');
    });
  });

  collapseAllBtn.addEventListener('click', () => {
    itemElements.forEach((item) => {
      item.classList.remove('active');
      item.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
    });
  });

  return wrapper;
}
