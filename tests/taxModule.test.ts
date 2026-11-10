import { describe, it, expect, vi } from 'vitest';
import { createTaxModuleComponent } from '../src/components/pricing/TaxModule';

describe('Componente TaxModule - Governança Fiscal Obrigatória', () => {
  it('deve renderizar os campos de alíquota, presets e tabela de discriminação fiscal', () => {
    const comp = createTaxModuleComponent({
      valoresLiquidos: {
        piso: 10000,
        processo: 15000,
        produto: 25000
      }
    });

    expect(comp.element).not.toBeNull();
    expect(comp.getAliquota()).toBe(15.5);
    expect(comp.isValido()).toBe(true);

    const rows = comp.element.querySelectorAll('#tax-breakdown-table tbody tr');
    expect(rows.length).toBe(3); // Piso, Processo, Produto
  });

  it('deve exibir alerta de bloqueio e marcar invalidade se a alíquota for zerada', () => {
    const onChange = vi.fn();
    const comp = createTaxModuleComponent({
      initialAliquota: 15.5,
      valoresLiquidos: { piso: 10000, processo: 15000, produto: 25000 },
      onChange
    });

    const input = comp.element.querySelector<HTMLInputElement>('#tax-input-aliquota');
    expect(input).not.toBeNull();

    if (input) {
      input.value = '0';
      input.dispatchEvent(new Event('input'));
    }

    expect(comp.isValido()).toBe(false);
    expect(onChange).toHaveBeenCalledWith(0, false);

    const alertBox = comp.element.querySelector<HTMLElement>('#tax-alert-box');
    expect(alertBox?.style.display).not.toBe('none');
    expect(alertBox?.textContent).toContain('OBRIGATÓRIA');
  });

  it('deve permitir aplicar presets rápidos de regimes tributários (MEI, Simples, Lucro Presumido)', () => {
    const comp = createTaxModuleComponent({
      valoresLiquidos: { piso: 10000, processo: 15000, produto: 25000 }
    });

    const presetBtns = comp.element.querySelectorAll<HTMLButtonElement>('.tax-preset-btn');
    expect(presetBtns.length).toBe(3);

    // Clicar em MEI (6%)
    presetBtns[0].click();
    expect(comp.getAliquota()).toBe(6);
    expect(comp.isValido()).toBe(true);

    // Clicar em Lucro Presumido (16.33%)
    presetBtns[2].click();
    expect(comp.getAliquota()).toBe(16.33);
  });
});

