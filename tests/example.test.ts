import { describe, it, expect } from 'vitest';
import type { MetricCategory } from '../src/types';

describe('Ambiente de Testes e Estrutura Inicial', () => {
  it('deve executar testes unitários corretamente com suporte a DOM', () => {
    const div = document.createElement('div');
    div.id = 'teste-elemento';
    div.textContent = 'Métricas de Software';
    document.body.appendChild(div);

    const elemento = document.getElementById('teste-elemento');
    expect(elemento).not.toBeNull();
    expect(elemento?.textContent).toBe('Métricas de Software');
  });

  it('deve validar tipos estruturais de métricas sem erro', () => {
    const categoriaValida: MetricCategory = 'processo';
    expect(['recursos', 'processo', 'produto']).toContain(categoriaValida);
  });
});
