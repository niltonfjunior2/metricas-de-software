import { describe, it, expect, vi } from 'vitest';
import { createProductTierComponent } from '../src/components/pricing/ProductTier';

describe('Componente ProductTier - Camada de Produto', () => {
  it('deve renderizar os inputs de impacto financeiro e percentual de captura, sem o dropdown de modelo', () => {
    const comp = createProductTierComponent({
      precoBaseRecursos: 80000
    });

    expect(comp.element).not.toBeNull();
    expect(comp.element.classList.contains('tier-produto')).toBe(true);

    // O seletor de modelo foi removido
    const selectModel = comp.element.querySelector('#select-capture-model');
    expect(selectModel).toBeNull();

    // Inputs devem existir
    const inputOutcome = comp.element.querySelector<HTMLInputElement>('#input-outcome-value');
    const inputPct = comp.element.querySelector<HTMLInputElement>('#input-capture-pct');
    expect(inputOutcome).not.toBeNull();
    expect(inputPct).not.toBeNull();

    // Card didático explicativo de texto deve existir
    expect(comp.element.textContent).toContain('Modelos de Captura de Valor no Mercado de Software');
    expect(comp.element.textContent).toContain('Economia de Custos (Cost Savings)');
    expect(comp.element.textContent).toContain('Participação na Receita (Revenue Share)');
    expect(comp.element.textContent).toContain('Baseado em Performance (Value-Based)');
  });

  it('deve recalcular o teto de valor e a relação Win-Win ao alterar os inputs', () => {
    const onChange = vi.fn();
    const comp = createProductTierComponent({
      precoBaseRecursos: 50000,
      initialData: {
        resultadoClienteEstimado: 200000,
        percentualCaptura: 20
      },
      onChange
    });

    // 20% de R$ 200.000 = R$ 40.000 -> Teto = 50.000 + 40.000 = R$ 90.000
    let state = comp.getState();
    expect(state.result.valorCapturadoProduto).toBe(40000);
    expect(state.result.precoProdutoSemImpostos).toBe(90000);

    // Alterar o percentual para 30%
    const inputPct = comp.element.querySelector<HTMLInputElement>('#input-capture-pct');
    if (inputPct) {
      inputPct.value = '30';
      inputPct.dispatchEvent(new Event('input'));
    }

    state = comp.getState();
    // 30% de 200.000 = 60.000 -> Teto = 50.000 + 60.000 = 110.000
    expect(state.result.valorCapturadoProduto).toBe(60000);
    expect(state.result.precoProdutoSemImpostos).toBe(110000);
    expect(onChange).toHaveBeenCalled();
  });
});
