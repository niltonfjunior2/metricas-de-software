import { describe, it, expect, vi } from 'vitest';
import { createProcessTierComponent } from '../src/components/pricing/ProcessTier';

describe('Componente ProcessTier - Camada de Processo', () => {
  it('deve renderizar a tabela de métricas de processo, botão de adicionar e caixa de resumo', () => {
    const comp = createProcessTierComponent({
      precoBaseRecursos: 50000
    });

    expect(comp.element).not.toBeNull();
    expect(comp.element.classList.contains('tier-processo')).toBe(true);

    const rows = comp.element.querySelectorAll('#process-table-body tr');
    expect(rows.length).toBeGreaterThanOrEqual(1);

    const summaryBox = comp.element.querySelector('#process-summary-box');
    expect(summaryBox).not.toBeNull();
    expect(summaryBox?.textContent).toContain('Base de Sustentação Mínima');
    expect(summaryBox?.textContent).toContain('Preço da Faixa de Processo');
  });

  it('deve permitir adicionar uma nova métrica de processo livremente', () => {
    const comp = createProcessTierComponent({
      precoBaseRecursos: 50000
    });

    const initialRows = comp.element.querySelectorAll('#process-table-body tr').length;
    const btnAdd = comp.element.querySelector<HTMLButtonElement>('#btn-add-process-metric');
    expect(btnAdd).not.toBeNull();

    btnAdd?.click();

    const afterRows = comp.element.querySelectorAll('#process-table-body tr').length;
    expect(afterRows).toBe(initialRows + 1);
  });

  it('deve suportar alternar entre porcentagem (%) e valor financeiro (R$) recalculando o preço', () => {
    const onChange = vi.fn();
    const comp = createProcessTierComponent({
      precoBaseRecursos: 100000,
      initialData: {
        metasEficiencia: [
          { id: 'm1', nome: 'Eficiência de Entrega', bonusValor: 10, tipoBonus: 'percentual', atingida: true }
        ]
      },
      onChange
    });

    // 10% de R$ 100.000 = + R$ 10.000 -> Preço = R$ 110.000
    let state = comp.getState();
    expect(state.result.totalBonusProcesso).toBe(10000);
    expect(state.result.precoProcessoSemImpostos).toBe(110000);

    // Mudar para valor fixo R$ 25.000
    const selectTipo = comp.element.querySelector<HTMLSelectElement>('.goal-tipo');
    const inputValor = comp.element.querySelector<HTMLInputElement>('.goal-valor');

    if (selectTipo && inputValor) {
      selectTipo.value = 'fixo';
      selectTipo.dispatchEvent(new Event('change'));

      inputValor.value = '25000';
      inputValor.dispatchEvent(new Event('input'));
    }

    state = comp.getState();
    expect(state.result.totalBonusProcesso).toBe(25000);
    expect(state.result.precoProcessoSemImpostos).toBe(125000);
    expect(onChange).toHaveBeenCalled();
  });

  it('deve permitir desativar ou remover métricas de processo', () => {
    const comp = createProcessTierComponent({
      precoBaseRecursos: 40000,
      initialData: {
        metasEficiencia: [
          { id: 'm1', nome: 'Métrica 1', bonusValor: 5000, tipoBonus: 'fixo', atingida: true },
          { id: 'm2', nome: 'Métrica 2', bonusValor: 5000, tipoBonus: 'fixo', atingida: true }
        ]
      }
    });

    expect(comp.getState().result.totalBonusProcesso).toBe(10000);

    // Desativar primeira métrica (checkbox)
    const firstCheck = comp.element.querySelector<HTMLInputElement>('.goal-check');
    if (firstCheck) {
      firstCheck.checked = false;
      firstCheck.dispatchEvent(new Event('change'));
    }

    expect(comp.getState().result.totalBonusProcesso).toBe(5000);

    // Remover a segunda métrica
    const removeButtons = comp.element.querySelectorAll<HTMLButtonElement>('.btn-remove-goal');
    removeButtons[1]?.click();

    expect(comp.element.querySelectorAll('#process-table-body tr').length).toBe(1);
  });
});
