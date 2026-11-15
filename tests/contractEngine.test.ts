import { describe, it, expect } from 'vitest';
import {
  evaluateContractSafety,
  generateContractDocument,
  LEGAL_DISCLAIMER_TEXT,
} from '../src/services/contractEngine';
import { CONTRACT_TEMPLATES, BLANK_CONTRACT_TEMPLATE } from '../src/data/contractTemplates';

describe('Motor de Contratos e Segurança Jurídica (contractEngine)', () => {
  it('deve atribuir score 100% e nível Alto para o template padrão de Escopo Fechado', () => {
    const mvpData = CONTRACT_TEMPLATES[0].dados;
    const diag = evaluateContractSafety(mvpData);

    expect(diag.score).toBe(100);
    expect(diag.nivel).toBe('Alto');
    expect(diag.alertasRisco.length).toBe(0);
    expect(diag.pontosProtegidos.length).toBeGreaterThanOrEqual(6);
  });

  it('deve emitir alertas de risco quando salvaguardas críticas (Change Request, Aceite Tácito e Limite de Responsabilidade) forem desativadas', () => {
    const custom = structuredClone(CONTRACT_TEMPLATES[0].dados);
    custom.exigirChangeRequest = false;
    custom.aceiteTacitoAtivo = false;
    custom.limitarResponsabilidadeCivil = false;

    const diag = evaluateContractSafety(custom);

    expect(diag.score).toBe(45);
    expect(diag.nivel).toBe('Vulnerável');
    expect(diag.alertasRisco.some((a) => a.id === 'risco-scope-creep')).toBe(true);
    expect(diag.alertasRisco.some((a) => a.id === 'risco-homologacao-eterna')).toBe(true);
    expect(diag.alertasRisco.some((a) => a.id === 'risco-responsabilidade-ilimitada')).toBe(true);
  });

  it('deve alertar inconsistência caso o modelo seja SaaS mas a Propriedade Intelectual esteja como Cessão Definitiva', () => {
    const saasInconsistente = structuredClone(CONTRACT_TEMPLATES[2].dados);
    saasInconsistente.modeloContratual = 'saas_licenca';
    saasInconsistente.propriedadeIntelectual = 'cessao_cliente';

    const diag = evaluateContractSafety(saasInconsistente);
    expect(diag.alertasRisco.some((a) => a.id === 'risco-saas-cessao')).toBe(true);
  });

  it('deve incluir obrigatoriamente o aviso de caráter educativo/informativo e as 10 cláusulas na minuta gerada', () => {
    const doc = generateContractDocument(CONTRACT_TEMPLATES[0].dados);

    expect(doc).toContain(LEGAL_DISCLAIMER_TEXT);
    expect(doc).toContain('NÃO exime as partes de buscarem a orientação e revisão de um(a) advogado(a)');
    expect(doc).toContain('CLÁUSULA 1ª — DA NATUREZA DA RELAÇÃO E AUTONOMIA TÉCNICA');
    expect(doc).toContain('CLÁUSULA 2ª — DO OBJETO, ESCOPO TÉCNICO E GESTÃO DE MUDANÇAS');
    expect(doc).toContain('CLÁUSULA 3ª — DOS PRAZOS, DEVER DE COOPERAÇÃO E HOMOLOGAÇÃO');
    expect(doc).toContain('CLÁUSULA 5ª — DA PROPRIEDADE INTELECTUAL E CÓDIGO-FONTE (LEI Nº 9.609/1998)');
    expect(doc).toContain('CLÁUSULA 7ª — DA PROTEÇÃO DE DADOS PESSOAIS (LGPD) E CONFIDENCIALIDADE');
    expect(doc).toContain('CLÁUSULA 8ª — DA LIMITAÇÃO DE RESPONSABILIDADE E ALOCAÇÃO DE RISCOS');
  });

  it('deve utilizar placeholders seguros quando os campos estiverem em branco (BLANK_CONTRACT_TEMPLATE)', () => {
    const doc = generateContractDocument(BLANK_CONTRACT_TEMPLATE.dados);

    expect(doc).toContain('[NOME / RAZÃO SOCIAL DO CONTRATANTE]');
    expect(doc).toContain('[NOME / RAZÃO SOCIAL DO DESENVOLVEDOR / CONTRATADA]');
    expect(doc).toContain('[CIDADE / UF DA COMARCA]');
  });
});
