import { describe, it, expect } from 'vitest';
import { PRICING_TEMPLATES, BLANK_TEMPLATE } from '../src/data/pricingTemplates';
import { calculateFullPricing } from '../src/services/pricingEngine';

describe('Templates Didáticos de Precificação', () => {
  it('deve disponibilizar ao menos 3 templates de mercado e o template em branco', () => {
    expect(PRICING_TEMPLATES.length).toBeGreaterThanOrEqual(3);
    expect(BLANK_TEMPLATE).toBeDefined();

    const ids = PRICING_TEMPLATES.map((t) => t.id);
    expect(ids).toContain('template-ecommerce');
    expect(ids).toContain('template-finops');
    expect(ids).toContain('template-saas');
  });

  it('todos os templates devem produzir cálculos de precificação válidos e fiscalmente regulares', () => {
    PRICING_TEMPLATES.forEach((tmpl) => {
      expect(tmpl.aliquotaImposto).toBeGreaterThan(0);
      expect(tmpl.recursos.equipe.length).toBeGreaterThan(0);

      const res = calculateFullPricing(tmpl.recursos, tmpl.processo, tmpl.produto, tmpl.aliquotaImposto);
      expect(res.isFiscalmenteValido).toBe(true);

      // Piso deve ser menor ou igual a Processo
      expect(res.pisoRecursos.precoFinalComImpostos).toBeLessThanOrEqual(res.eficienciaProcesso.precoFinalComImpostos);

      // Produto deve ser maior que zero
      expect(res.tetoProduto.precoFinalComImpostos).toBeGreaterThan(0);
    });
  });
});
