import { describe, it, expect, vi } from 'vitest';
import { createComparisonDashboardComponent } from '../src/components/pricing/ComparisonDashboard';
import type { FullPricingComparisonResult } from '../src/services/pricingEngine';

describe('Componente ComparisonDashboard - Painel Consolidado Tridimensional', () => {
  const mockData: FullPricingComparisonResult = {
    pisoRecursos: { precoLiquido: 10000, valorImpostos: 1550, precoFinalComImpostos: 11550 },
    eficienciaProcesso: { precoLiquido: 14000, valorImpostos: 2170, precoFinalComImpostos: 16170 },
    tetoProduto: { precoLiquido: 25000, valorImpostos: 3875, precoFinalComImpostos: 28875 },
    aliquotaImposto: 15.5,
    isFiscalmenteValido: true
  };

  it('deve renderizar os 3 cartões de preço, gráfico de barras e botões de ação', () => {
    const comp = createComparisonDashboardComponent({ data: mockData });

    expect(comp.element).not.toBeNull();

    const titles = comp.element.querySelectorAll('h3');
    expect(titles.length).toBe(3); // Recursos, Processo, Produto

    expect(comp.element.querySelector('#btn-copy-proposal')).not.toBeNull();
    expect(comp.element.querySelector('#btn-print-proposal')).not.toBeNull();

    expect(comp.element.textContent).toContain('11.550,00');
    expect(comp.element.textContent).toContain('16.170,00');
    expect(comp.element.textContent).toContain('28.875,00');
  });

  it('deve permitir atualizar os dados dinamicamente via updateData', () => {
    const comp = createComparisonDashboardComponent({ data: mockData });

    const updatedData: FullPricingComparisonResult = {
      ...mockData,
      pisoRecursos: { precoLiquido: 20000, valorImpostos: 3100, precoFinalComImpostos: 23100 }
    };

    comp.updateData(updatedData);
    expect(comp.element.textContent).toContain('23.100,00');
  });

  it('deve disparar a função de impressão quando o botão imprimir for clicado', () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});
    const onPrint = vi.fn();

    const comp = createComparisonDashboardComponent({ data: mockData, onPrint });

    const btnPrint = comp.element.querySelector<HTMLButtonElement>('#btn-print-proposal');
    btnPrint?.click();

    expect(printSpy).toHaveBeenCalled();
    expect(onPrint).toHaveBeenCalled();
    printSpy.mockRestore();
  });
});

