import { describe, it, expect } from 'vitest';
import {
  calculateProcessTier,
  calculateProductTier,
  applyMandatoryTaxes,
  calculateFullPricing,
  type ProcessTierInput,
  type ProductTierInput,
  type ResourceTierInput
} from '../src/services/pricingEngine';

describe('Pricing Engine - Camadas Avançadas & Governança Fiscal', () => {
  describe('Camada de Processo (Eficiência e Bônus DORA)', () => {
    it('deve somar a base de Recursos aos bônus de eficiência de processo ativos', () => {
      // Exemplo real do PDF página 5:
      // Preço Base = R$ 80.000
      // Bônus Velocity (> 40 pts): +R$ 8.000
      // Bônus Lead Time (< 2 sem): +R$ 5.000
      // Bônus Zero bugs críticos: +R$ 7.000
      // Bônus Deploy diário (desmarcado): +R$ 5.000
      // Total Esperado = 80.000 + 8.000 + 5.000 + 7.000 = R$ 100.000 (Sprint 2 do PDF)
      const input: ProcessTierInput = {
        metasEficiencia: [
          { id: '1', nome: 'Velocity', descricao: '', bonusValor: 8000, tipoBonus: 'fixo', atingida: true },
          { id: '2', nome: 'Lead Time', descricao: '', bonusValor: 5000, tipoBonus: 'fixo', atingida: true },
          { id: '3', nome: 'Zero Bugs', descricao: '', bonusValor: 7000, tipoBonus: 'fixo', atingida: true },
          { id: '4', nome: 'Deploy Diário', descricao: '', bonusValor: 5000, tipoBonus: 'fixo', atingida: false }
        ]
      };

      const res = calculateProcessTier(80000, input);
      expect(res.precoBaseRecursos).toBe(80000);
      expect(res.totalBonusProcesso).toBe(20000);
      expect(res.precoProcessoSemImpostos).toBe(100000);
      expect(res.metasAtingidasCount).toBe(3);
    });
  });

  describe('Camada de Produto (Captura de Valor e ROI)', () => {
    it('deve calcular a captura de valor sobre a economia de custos (Cost Savings) do exemplo do PDF', () => {
      // Exemplo real do PDF página 7 (Automação Industrial):
      // Base de manutenção = R$ 20.000
      // Economia gerada = R$ 60.000/mês
      // Captura = 30% da economia = R$ 18.000
      // Total Esperado = 20.000 + 18.000 = R$ 38.000/mês
      const input: ProductTierInput = {
        modeloCaptura: 'cost_savings',
        resultadoClienteEstimado: 60000,
        percentualCaptura: 30
      };

      const res = calculateProductTier(20000, input);
      expect(res.precoBaseRecursos).toBe(20000);
      expect(res.valorCapturadoProduto).toBe(18000);
      expect(res.precoProdutoSemImpostos).toBe(38000);
      // Cliente economiza 60.000, paga 38.000 -> ganho líquido 22.000
      expect(res.participacaoNoResultadoPercentual).toBeCloseTo(63.33, 1);
    });

    it('deve calcular a captura por Revenue Share (GMV de E-commerce)', () => {
      // Exemplo real do PDF página 6 e 7:
      // Base inicial = R$ 150.000
      // GMV = R$ 1.000.000
      // Participação = 3% = R$ 30.000
      // Total = R$ 180.000
      const input: ProductTierInput = {
        modeloCaptura: 'revenue_share',
        resultadoClienteEstimado: 1000000,
        percentualCaptura: 3
      };

      const res = calculateProductTier(150000, input);
      expect(res.valorCapturadoProduto).toBe(30000);
      expect(res.precoProdutoSemImpostos).toBe(180000);
    });
  });

  describe('Módulo de Governança Fiscal Obrigatória (Impostos por dentro)', () => {
    it('deve rejeitar e sinalizar invalidade quando a alíquota for zero ou negativa', () => {
      const resZero = applyMandatoryTaxes(100000, 0);
      expect(resZero.isValido).toBe(false);
      expect(resZero.mensagemErro).toContain('obrigatória');

      const resNeg = applyMandatoryTaxes(100000, -5);
      expect(resNeg.isValido).toBe(false);
    });

    it('deve calcular os tributos corretamente no modelo por dentro (Gross-Up)', () => {
      // Preço Líquido = R$ 84.500
      // Alíquota Simples TI = 15.5%
      // Divisor = 1 - 0.155 = 0.845
      // Preço Bruto = 84.500 / 0.845 = R$ 100.000
      // Valor do Imposto = R$ 15.500
      const res = applyMandatoryTaxes(84500, 15.5);
      expect(res.isValido).toBe(true);
      expect(res.precoLiquido).toBe(84500);
      expect(res.precoBrutoFinal).toBeCloseTo(100000, 2);
      expect(res.valorImpostos).toBeCloseTo(15500, 2);
    });
  });

  describe('Cálculo Full Pricing Tridimensional', () => {
    it('deve encadear simultaneamente Piso, Processo e Teto com impostos obrigatórios', () => {
      const recInput: ResourceTierInput = {
        equipe: [{ id: '1', funcao: 'Dev', quantidade: 1, custoHora: 100, horas: 100 }], // 10.000
        infraestrutura: 2000,
        ferramentas: 0,
        overheadPercentual: 0,
        margemLucroPercentual: 25 // +2.500 => Piso Líquido = 12.500
      };

      const procInput: ProcessTierInput = {
        metasEficiencia: [
          { id: '1', nome: 'DORA Elite', descricao: '', bonusValor: 3500, tipoBonus: 'fixo', atingida: true }
        ] // Processo Líquido = 12.500 + 3.500 = 16.000
      };

      const prodInput: ProductTierInput = {
        modeloCaptura: 'cost_savings',
        resultadoClienteEstimado: 50000,
        percentualCaptura: 20 // 20% de 50.000 = 10.000 => Produto Líquido = 12.500 + 10.000 = 22.500
      };

      const full = calculateFullPricing(recInput, procInput, prodInput, 10); // 10% de imposto por dentro (divisor 0.9)

      expect(full.isFiscalmenteValido).toBe(true);

      // Custo Direto = 10.000 (pessoal) + 2.000 (infra) = 12.000
      // Margem 25% = +3.000 => Piso Líquido = 15.000
      // Com imposto de 10% por dentro: 15.000 / 0.9 = 16.666,67
      expect(full.pisoRecursos.precoLiquido).toBe(15000);
      expect(full.pisoRecursos.precoFinalComImpostos).toBeCloseTo(16666.67, 2);

      // Processo = 15.000 + 3.500 (DORA) = 18.500
      // Com imposto de 10% por dentro: 18.500 / 0.9 = 20.555,56
      expect(full.eficienciaProcesso.precoLiquido).toBe(18500);
      expect(full.eficienciaProcesso.precoFinalComImpostos).toBeCloseTo(20555.56, 2);

      // Produto = 15.000 + 10.000 (20% de 50k) = 25.000
      // Com imposto de 10% por dentro: 25.000 / 0.9 = 27.777,78
      expect(full.tetoProduto.precoLiquido).toBe(25000);
      expect(full.tetoProduto.precoFinalComImpostos).toBeCloseTo(27777.78, 2);
    });
  });
});
