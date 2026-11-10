/**
 * Motor de Cálculo Financeiro com Base em Métricas de Software
 * Implementa as fórmulas canônicas dos Módulos 10 e 11:
 * - Recursos (Insumos e Piso de Sobrevivência)
 * - Processo (Eficiência, Agilidade e DORA)
 * - Produto (Captura de Valor e ROI)
 * - Tributação Obrigatória (Cálculo Fiscal)
 */

export interface TeamMemberInput {
  id: string;
  funcao: string;
  quantidade: number;
  custoHora: number;
  horas: number;
}

export interface ResourceTierInput {
  equipe: TeamMemberInput[];
  infraestrutura: number;
  ferramentas: number;
  overheadPercentual: number; // Sugestão 20% a 40%
  margemLucroPercentual: number; // Ex: 20% a 35%
}

export interface ResourceTierResult {
  custoPessoal: number;
  custoDiretoTotal: number;
  valorOverhead: number;
  custoTotalProducao: number;
  valorMargemLucro: number;
  precoPisoSemImpostos: number;
}

export interface ProcessMetricGoal {
  id: string;
  nome: string;
  descricao: string;
  bonusValor: number; // Valor adicional em R$
  tipoBonus: 'fixo' | 'percentual';
  atingida: boolean;
}

export interface ProcessTierInput {
  metasEficiencia: ProcessMetricGoal[];
}

export interface ProcessTierResult {
  precoBaseRecursos: number;
  totalBonusProcesso: number;
  precoProcessoSemImpostos: number;
  metasAtingidasCount: number;
}

export type ProductCaptureModel = 'revenue_share' | 'cost_savings' | 'value_based';

export interface ProductTierInput {
  modeloCaptura: ProductCaptureModel;
  resultadoClienteEstimado: number; // R$ gerados em receita ou economizados
  percentualCaptura: number; // Ex: 3% a 30%
  manutencaoBaseMensal?: number; // Fee fixo opcional derivado de recursos
}

export interface ProductTierResult {
  precoBaseRecursos: number;
  modeloCaptura: ProductCaptureModel;
  resultadoClienteEstimado: number;
  percentualCaptura: number;
  valorCapturadoProduto: number;
  precoProdutoSemImpostos: number;
  roiClientePercentual: number; // Retorno do cliente
  participacaoNoResultadoPercentual: number;
}

export interface TaxCalculationResult {
  aliquotaPercentual: number;
  precoLiquido: number;
  valorImpostos: number;
  precoBrutoFinal: number;
  isValido: boolean;
  mensagemErro?: string;
}

export interface FullComparisonTier {
  precoLiquido: number;
  valorImpostos: number;
  precoFinalComImpostos: number;
}

export interface FullPricingComparisonResult {
  pisoRecursos: FullComparisonTier;
  eficienciaProcesso: FullComparisonTier;
  tetoProduto: FullComparisonTier;
  aliquotaImposto: number;
  isFiscalmenteValido: boolean;
}

/**
 * Funções padrão de mercado para inserção rápida
 */
export const DEFAULT_TEAM_ROLES: Omit<TeamMemberInput, 'id'>[] = [
  { funcao: 'Desenvolvedor Sênior', quantidade: 1, custoHora: 150, horas: 160 },
  { funcao: 'Desenvolvedor Pleno', quantidade: 2, custoHora: 100, horas: 160 },
  { funcao: 'Desenvolvedor Júnior', quantidade: 1, custoHora: 60, horas: 160 },
  { funcao: 'Designer UX/UI', quantidade: 1, custoHora: 120, horas: 80 },
  { funcao: 'Gerente de Projetos / Scrum Master', quantidade: 1, custoHora: 130, horas: 80 },
  { funcao: 'Analista de QA / Tester', quantidade: 1, custoHora: 80, horas: 120 },
  { funcao: 'Engenheiro de DevOps / Cloud', quantidade: 1, custoHora: 140, horas: 60 }
];

/**
 * Metas de processo e métricas DORA pré-configuradas (baseadas no PDF p. 5)
 */
export const DEFAULT_PROCESS_GOALS: ProcessMetricGoal[] = [
  {
    id: 'goal-velocity',
    nome: 'Velocity Estável (> 40 pts)',
    descricao: 'Capacidade preditiva alta e entregas ágeis consistentes a cada sprint.',
    bonusValor: 8000,
    tipoBonus: 'fixo',
    atingida: true
  },
  {
    id: 'goal-leadtime',
    nome: 'Lead Time Reduzido (< 2 semanas)',
    descricao: 'Agilidade organizacional para transformar demanda em código rodando em produção.',
    bonusValor: 5000,
    tipoBonus: 'fixo',
    atingida: true
  },
  {
    id: 'goal-zerobugs',
    nome: 'Zero Bugs Críticos em Produção',
    descricao: 'Garantia de qualidade contínua e ausência de incidentes graves de severidade 1.',
    bonusValor: 7000,
    tipoBonus: 'fixo',
    atingida: true
  },
  {
    id: 'goal-deploy',
    nome: 'Deployment Diário Automatizado (DORA Elite)',
    descricao: 'Esteira de CI/CD robusta que permite deploys diários sob demanda sem atrito.',
    bonusValor: 5000,
    tipoBonus: 'fixo',
    atingida: false
  }
];

/**
 * Calcula o Piso da Camada de Recursos (Insumos)
 * Preço = (Custo de Pessoal + Infraestrutura + Ferramentas + Overhead) × (1 + Margem)
 */
export function calculateResourceTier(input: ResourceTierInput): ResourceTierResult {
  const custoPessoal = (input.equipe || []).reduce((acc, m) => {
    const qtd = Math.max(0, Number(m.quantidade) || 0);
    const custoH = Math.max(0, Number(m.custoHora) || 0);
    const horas = Math.max(0, Number(m.horas) || 0);
    return acc + (qtd * custoH * horas);
  }, 0);

  const infra = Math.max(0, Number(input.infraestrutura) || 0);
  const ferr = Math.max(0, Number(input.ferramentas) || 0);
  const custoDiretoTotal = custoPessoal + infra + ferr;

  const overheadPct = Math.max(0, Number(input.overheadPercentual) || 0);
  const valorOverhead = custoDiretoTotal * (overheadPct / 100);

  const custoTotalProducao = custoDiretoTotal + valorOverhead;

  const margemPct = Math.max(0, Number(input.margemLucroPercentual) || 0);
  const valorMargemLucro = custoTotalProducao * (margemPct / 100);

  const precoPisoSemImpostos = custoTotalProducao + valorMargemLucro;

  return {
    custoPessoal,
    custoDiretoTotal,
    valorOverhead,
    custoTotalProducao,
    valorMargemLucro,
    precoPisoSemImpostos
  };
}

/**
 * Calcula a Faixa de Eficiência de Processo
 * Preço = Base de Recursos + Bônus por Metas de Agilidade e DORA
 */
export function calculateProcessTier(
  precoBaseRecursos: number,
  input: ProcessTierInput
): ProcessTierResult {
  const base = Math.max(0, Number(precoBaseRecursos) || 0);

  let totalBonus = 0;
  let metasAtingidas = 0;

  (input.metasEficiencia || []).forEach((goal) => {
    if (goal.atingida) {
      metasAtingidas++;
      if (goal.tipoBonus === 'percentual') {
        totalBonus += base * (Math.max(0, goal.bonusValor) / 100);
      } else {
        totalBonus += Math.max(0, goal.bonusValor);
      }
    }
  });

  const precoProcessoSemImpostos = base + totalBonus;

  return {
    precoBaseRecursos: base,
    totalBonusProcesso: totalBonus,
    precoProcessoSemImpostos,
    metasAtingidasCount: metasAtingidas
  };
}

/**
 * Calcula o Teto por Captura de Valor de Produto
 * Preço = Base de Recursos (garantia de custos) + (% do Resultado Gerado ao Cliente)
 */
export function calculateProductTier(
  precoBaseRecursos: number,
  input: ProductTierInput
): ProductTierResult {
  const base = Math.max(0, Number(precoBaseRecursos) || 0);
  const resultado = Math.max(0, Number(input.resultadoClienteEstimado) || 0);
  const pctCaptura = Math.max(0, Number(input.percentualCaptura) || 0);

  const valorCapturado = resultado * (pctCaptura / 100);
  const precoProdutoSemImpostos = base + valorCapturado;

  // Cálculo de ROI para o cliente:
  const ganhoLiquidoCliente = Math.max(0, resultado - precoProdutoSemImpostos);
  const roiClientePercentual = precoProdutoSemImpostos > 0
    ? (ganhoLiquidoCliente / precoProdutoSemImpostos) * 100
    : 0;

  const participacaoNoResultado = resultado > 0
    ? (precoProdutoSemImpostos / resultado) * 100
    : 0;

  return {
    precoBaseRecursos: base,
    modeloCaptura: input.modeloCaptura,
    resultadoClienteEstimado: resultado,
    percentualCaptura: pctCaptura,
    valorCapturadoProduto: valorCapturado,
    precoProdutoSemImpostos,
    roiClientePercentual,
    participacaoNoResultadoPercentual: participacaoNoResultado
  };
}

/**
 * Aplica a tributação obrigatória sobre a receita bruta (Cálculo por dentro padrão de TI no Brasil)
 * PreçoBruto = PreçoLíquido / (1 - Alíquota/100)
 * ValorImposto = PreçoBruto - PreçoLíquido
 */
export function applyMandatoryTaxes(
  precoLiquido: number,
  aliquotaPercentual: number
): TaxCalculationResult {
  const liquido = Math.max(0, Number(precoLiquido) || 0);
  const aliquota = Number(aliquotaPercentual);

  if (isNaN(aliquota) || aliquota <= 0) {
    return {
      aliquotaPercentual: 0,
      precoLiquido: liquido,
      valorImpostos: 0,
      precoBrutoFinal: liquido,
      isValido: false,
      mensagemErro: 'A alíquota de impostos é obrigatória e deve ser maior que 0% para a formação de preço profissional.'
    };
  }

  if (aliquota >= 100) {
    return {
      aliquotaPercentual: aliquota,
      precoLiquido: liquido,
      valorImpostos: 0,
      precoBrutoFinal: liquido,
      isValido: false,
      mensagemErro: 'A alíquota de impostos não pode ser igual ou superior a 100%.'
    };
  }

  // Cálculo por dentro (Gross-Up)
  const divisor = 1 - (aliquota / 100);
  const precoBrutoFinal = liquido / divisor;
  const valorImpostos = precoBrutoFinal - liquido;

  return {
    aliquotaPercentual: aliquota,
    precoLiquido: liquido,
    valorImpostos,
    precoBrutoFinal,
    isValido: true
  };
}

/**
 * Computa a comparação tridimensional completa com governança tributária
 */
export function calculateFullPricing(
  recursosInput: ResourceTierInput,
  processoInput: ProcessTierInput,
  produtoInput: ProductTierInput,
  aliquotaImposto: number
): FullPricingComparisonResult {
  const resRecursos = calculateResourceTier(recursosInput);
  const resProcesso = calculateProcessTier(resRecursos.precoPisoSemImpostos, processoInput);
  const resProduto = calculateProductTier(resRecursos.precoPisoSemImpostos, produtoInput);

  const taxPiso = applyMandatoryTaxes(resRecursos.precoPisoSemImpostos, aliquotaImposto);
  const taxProcesso = applyMandatoryTaxes(resProcesso.precoProcessoSemImpostos, aliquotaImposto);
  const taxProduto = applyMandatoryTaxes(resProduto.precoProdutoSemImpostos, aliquotaImposto);

  return {
    pisoRecursos: {
      precoLiquido: taxPiso.precoLiquido,
      valorImpostos: taxPiso.valorImpostos,
      precoFinalComImpostos: taxPiso.precoBrutoFinal
    },
    eficienciaProcesso: {
      precoLiquido: taxProcesso.precoLiquido,
      valorImpostos: taxProcesso.valorImpostos,
      precoFinalComImpostos: taxProcesso.precoBrutoFinal
    },
    tetoProduto: {
      precoLiquido: taxProduto.precoLiquido,
      valorImpostos: taxProduto.valorImpostos,
      precoFinalComImpostos: taxProduto.precoBrutoFinal
    },
    aliquotaImposto: Math.max(0, aliquotaImposto || 0),
    isFiscalmenteValido: taxPiso.isValido
  };
}

/**
 * Formata um valor numérico para o padrão de moeda Real Brasileiro (R$)
 */
export function formatCurrencyBRL(value: number): string {
  const safeValue = isNaN(value) ? 0 : value;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(safeValue);
}

/**
 * Formata um percentual no padrão pt-BR
 */
export function formatPercent(value: number): string {
  const safeValue = isNaN(value) ? 0 : value;
  return `${safeValue.toFixed(1).replace('.', ',')}%`;
}
