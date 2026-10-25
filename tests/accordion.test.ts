import { describe, it, expect } from 'vitest';
import { parseMarkdownToAccordion } from '../src/utils/markdownParser';
import { createAccordion } from '../src/components/Accordion';

describe('Markdown Parser para Accordion', () => {
  it('deve extrair frontmatter e seções delimitadas por ##', () => {
    const sampleMd = `---
id: "modulo-teste"
titulo: "Módulo de Teste"
---

Texto introdutório antes da primeira seção.

## Primeira Seção
Conteúdo da primeira seção.

## Segunda Seção
Conteúdo da segunda seção com lista:
* Item 1
* Item 2
`;

    const result = parseMarkdownToAccordion(sampleMd);

    expect(result.metadata.id).toBe('modulo-teste');
    expect(result.metadata.titulo).toBe('Módulo de Teste');
    expect(result.leadTextHtml).toContain('Texto introdutório');
    expect(result.sections.length).toBe(2);
    expect(result.sections[0].title).toBe('Primeira Seção');
    expect(result.sections[0].html).toContain('Conteúdo da primeira seção');
    expect(result.sections[1].title).toBe('Segunda Seção');
    expect(result.sections[1].html).toContain('Item 1');
  });

  it('deve sanitizar scripts maliciosos injetados no markdown', () => {
    const maliciousMd = `
## Seção Insegura
Conteúdo normal <script>alert("xss")</script><img src="x" onerror="alert(1)" />
`;
    const result = parseMarkdownToAccordion(maliciousMd);
    expect(result.sections[0].html).not.toContain('<script>');
    expect(result.sections[0].html).not.toContain('onerror');
  });
});

describe('Componente Accordion', () => {
  it('deve renderizar os itens de acordeão e permitir alternar expansão', () => {
    const mockSections = [
      { id: 'sec-1', title: 'Tópico 1', html: '<p>Conteúdo 1</p>' },
      { id: 'sec-2', title: 'Tópico 2', html: '<p>Conteúdo 2</p>' },
    ];

    const accordion = createAccordion(mockSections);
    const items = accordion.querySelectorAll('.accordion-item');
    expect(items.length).toBe(2);

    // Primeiro item inicia ativo por padrão
    expect(items[0].classList.contains('active')).toBe(true);
    expect(items[1].classList.contains('active')).toBe(false);

    // Clicar no segundo item para expandi-lo
    const secondHeader = items[1].querySelector<HTMLButtonElement>('.accordion-header');
    secondHeader?.click();
    expect(items[1].classList.contains('active')).toBe(true);

    // Testar botão Expandir Todos
    const expandAllBtn = accordion.querySelector('.accordion-control-btn') as HTMLButtonElement;
    expandAllBtn.click();
    expect(items[0].classList.contains('active')).toBe(true);
    expect(items[1].classList.contains('active')).toBe(true);

    // Testar botão Recolher Todos
    const collapseAllBtn = accordion.querySelectorAll('.accordion-control-btn')[1] as HTMLButtonElement;
    collapseAllBtn.click();
    expect(items[0].classList.contains('active')).toBe(false);
    expect(items[1].classList.contains('active')).toBe(false);
  });
});
