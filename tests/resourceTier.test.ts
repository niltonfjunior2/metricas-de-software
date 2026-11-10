import { describe, it, expect, vi } from 'vitest';
import { createResourceTierComponent } from '../src/components/pricing/ResourceTier';

describe('Componente ResourceTier - Camada de Recursos', () => {
  it('deve renderizar a tabela de equipe inicial, campos de custo e caixa de resumo', () => {
    const comp = createResourceTierComponent();

    expect(comp.element).not.toBeNull();
    expect(comp.element.classList.contains('tier-recursos')).toBe(true);

    const rows = comp.element.querySelectorAll('#team-table-body tr');
    expect(rows.length).toBeGreaterThanOrEqual(3);

    const summaryBox = comp.element.querySelector('#resource-summary-box');
    expect(summaryBox).not.toBeNull();
    expect(summaryBox?.textContent).toContain('Custo de Recursos Humanos');
    expect(summaryBox?.textContent).toContain('Preço Piso de Recursos');
  });

  it('deve recalcular valores quando a quantidade de horas ou profissionais é alterada', () => {
    const onChange = vi.fn();
    const comp = createResourceTierComponent({ onChange });

    const stateBefore = comp.getState();
    const initialPiso = stateBefore.result.precoPisoSemImpostos;

    // Aumentar as horas do primeiro membro
    const firstHorasInput = comp.element.querySelector<HTMLInputElement>('.member-horas');
    expect(firstHorasInput).not.toBeNull();

    if (firstHorasInput) {
      firstHorasInput.value = '320';
      firstHorasInput.dispatchEvent(new Event('input'));
    }

    const stateAfter = comp.getState();
    expect(stateAfter.result.precoPisoSemImpostos).toBeGreaterThan(initialPiso);
    expect(onChange).toHaveBeenCalled();
  });

  it('deve permitir adicionar e remover funções técnicas da equipe', () => {
    const comp = createResourceTierComponent();

    const initialCount = comp.element.querySelectorAll('#team-table-body tr').length;

    // Adicionar membro
    const btnAdd = comp.element.querySelector<HTMLButtonElement>('#btn-add-member');
    expect(btnAdd).not.toBeNull();
    btnAdd?.click();

    const afterAddCount = comp.element.querySelectorAll('#team-table-body tr').length;
    expect(afterAddCount).toBe(initialCount + 1);

    // Remover último membro
    const removeButtons = comp.element.querySelectorAll<HTMLButtonElement>('.btn-remove-member');
    removeButtons[removeButtons.length - 1].click();

    const afterRemoveCount = comp.element.querySelectorAll('#team-table-body tr').length;
    expect(afterRemoveCount).toBe(initialCount);
  });

  it('deve permitir atualizar o estado externamente via setState', () => {
    const comp = createResourceTierComponent();

    comp.setState({
      infraestrutura: 10000,
      overheadPercentual: 30,
      margemLucroPercentual: 40
    });

    const state = comp.getState();
    expect(state.input.infraestrutura).toBe(10000);
    expect(state.input.overheadPercentual).toBe(30);
    expect(state.input.margemLucroPercentual).toBe(40);
  });
});

