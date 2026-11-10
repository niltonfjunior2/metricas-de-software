import { describe, it, expect, beforeEach } from 'vitest';
import {
  getSavedDrafts,
  savePricingDraft,
  deletePricingDraft,
  getPricingDraftById
} from '../src/services/draftStorage';

describe('Serviço de Persistência Local (Draft Storage)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve iniciar com lista vazia de rascunhos', () => {
    expect(getSavedDrafts()).toEqual([]);
  });

  it('deve salvar, recuperar por id e listar propostas no localStorage', () => {
    const recursos = {
      equipe: [{ id: '1', funcao: 'Dev', quantidade: 1, custoHora: 100, horas: 100 }],
      infraestrutura: 2000,
      ferramentas: 1000,
      overheadPercentual: 20,
      margemLucroPercentual: 30
    };

    const processo = { metasEficiencia: [] };
    const produto = { modeloCaptura: 'cost_savings' as const, resultadoClienteEstimado: 50000, percentualCaptura: 20 };

    const saved = savePricingDraft('Meu Projeto E-commerce', 15.5, recursos, processo, produto);

    expect(saved.id).toBeDefined();
    expect(saved.nome).toBe('Meu Projeto E-commerce');
    expect(saved.aliquotaImposto).toBe(15.5);

    const list = getSavedDrafts();
    expect(list.length).toBe(1);
    expect(list[0].id).toBe(saved.id);

    const byId = getPricingDraftById(saved.id);
    expect(byId).not.toBeNull();
    expect(byId?.recursos.infraestrutura).toBe(2000);
  });

  it('deve permitir excluir um rascunho por ID', () => {
    const recursos = { equipe: [], infraestrutura: 0, ferramentas: 0, overheadPercentual: 0, margemLucroPercentual: 0 };
    const d1 = savePricingDraft('Rascunho 1', 10, recursos, { metasEficiencia: [] }, { modeloCaptura: 'revenue_share', resultadoClienteEstimado: 0, percentualCaptura: 0 });
    const d2 = savePricingDraft('Rascunho 2', 15, recursos, { metasEficiencia: [] }, { modeloCaptura: 'revenue_share', resultadoClienteEstimado: 0, percentualCaptura: 0 });

    expect(getSavedDrafts().length).toBe(2);

    deletePricingDraft(d1.id);
    const after = getSavedDrafts();
    expect(after.length).toBe(1);
    expect(after[0].id).toBe(d2.id);
  });
});
