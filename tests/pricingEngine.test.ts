import { describe, it, expect } from 'vitest';
import {
  calculateResourceTier,
  formatCurrencyBRL,
  formatPercent,
  type ResourceTierInput
} from '../src/services/pricingEngine';

describe('Pricing Engine - Camada de Recursos', () => {
  it('deve calcular com exatidão o custo de insumos e o preço piso do exemplo acadêmico do PDF', () => {
    // Exemplo real da página 3 do PDF:
    // Dev Sênior: 1 * 150 * 320h = 48.000
    // Dev Pleno: 2 * 100 * 320h = 64.000
    // Designer UX: 1 * 120 * 80h = 9.600
    // Gerente de Projetos: 1 * 130 * 160h = 20.800
    // QA Tester: 1 * 80 * 120h = 9.600
    // Infra e Ferramentas = 8.000
    // Total de Custos = 160.000
    // Margem (30%) = 48.000
    // PREÇO FINAL PISO = 208.000
    const input: ResourceTierInput = {
      equipe: [
        { id: '1', funcao: 'Desenvolvedor Sênior', quantidade: 1, custoHora: 150, horas: 320 },
        { id: '2', funcao: 'Desenvolvedor Pleno', quantidade: 2, custoHora: 100, horas: 320 },
        { id: '3', funcao: 'Designer UX', quantidade: 1, custoHora: 120, horas: 80 },
        { id: '4', funcao: 'Gerente de Projetos', quantidade: 1, custoHora: 130, horas: 160 },
        { id: '5', funcao: 'QA Tester', quantidade: 1, custoHora: 80, horas: 120 }
      ],
      infraestrutura: 5000,
      ferramentas: 3000,
      overheadPercentual: 0, // No exemplo básico do PDF p.3 o overhead está embutido ou zerado
      margemLucroPercentual: 30
    };

    const res = calculateResourceTier(input);

    expect(res.custoPessoal).toBe(152000); // 48k + 64k + 9.6k + 20.8k + 9.6k
    expect(res.custoDiretoTotal).toBe(160000); // 152k + 8k
    expect(res.valorOverhead).toBe(0);
    expect(res.custoTotalProducao).toBe(160000);
    expect(res.valorMargemLucro).toBe(48000);
    expect(res.precoPisoSemImpostos).toBe(208000);
  });

  it('deve aplicar corretamente o percentual de overhead administrativo (25%) sobre os custos diretos', () => {
    const input: ResourceTierInput = {
      equipe: [
        { id: '1', funcao: 'Dev Fullstack', quantidade: 1, custoHora: 100, horas: 100 } // 10.000
      ],
      infraestrutura: 1500,
      ferramentas: 500,
      overheadPercentual: 25, // 25% de 12.000 = 3.000
      margemLucroPercentual: 20 // 20% de 15.000 = 3.000
    };

    const res = calculateResourceTier(input);

    expect(res.custoPessoal).toBe(10000);
    expect(res.custoDiretoTotal).toBe(12000);
    expect(res.valorOverhead).toBe(3000);
    expect(res.custoTotalProducao).toBe(15000);
    expect(res.valorMargemLucro).toBe(3000);
    expect(res.precoPisoSemImpostos).toBe(18000);
  });

  it('deve ser resiliente contra valores negativos ou nulos', () => {
    const input: ResourceTierInput = {
      equipe: [
        { id: '1', funcao: 'Dev', quantidade: -2, custoHora: -50, horas: 10 }
      ],
      infraestrutura: -100,
      ferramentas: 0,
      overheadPercentual: -10,
      margemLucroPercentual: -5
    };

    const res = calculateResourceTier(input);
    expect(res.custoPessoal).toBe(0);
    expect(res.custoTotalProducao).toBe(0);
    expect(res.precoPisoSemImpostos).toBe(0);
  });

  it('deve formatar adequadamente moedas em BRL e percentuais', () => {
    const formatted = formatCurrencyBRL(208000);
    // Deve conter R$ e 208.000,00
    expect(formatted).toContain('208.000,00');
    expect(formatPercent(25.5)).toBe('25,5%');
  });
});

