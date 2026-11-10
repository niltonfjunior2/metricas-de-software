import type {
  ResourceTierInput,
  ProcessTierInput,
  ProductTierInput
} from '../services/pricingEngine';

export interface PricingTemplate {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  icone: string;
  recursos: ResourceTierInput;
  processo: ProcessTierInput;
  produto: ProductTierInput;
  aliquotaImposto: number;
}

export const PRICING_TEMPLATES: PricingTemplate[] = [
  {
    id: 'template-ecommerce',
    nome: 'Plataforma de E-commerce (Varejo & GMV)',
    categoria: 'Desenvolvimento Web / Revenue Share',
    descricao: 'Baseado no estudo de caso da página 3 e 6 do PDF: software house desenvolvendo e-commerce com equipe completa e captura por percentual do faturamento (GMV).',
    icone: '🛍️',
    aliquotaImposto: 15.5, // Simples Nacional TI
    recursos: {
      equipe: [
        { id: 'dev-sr', funcao: 'Desenvolvedor Sênior', quantidade: 1, custoHora: 150, horas: 320 },
        { id: 'dev-pl', funcao: 'Desenvolvedor Pleno', quantidade: 2, custoHora: 100, horas: 320 },
        { id: 'ux-ds', funcao: 'Designer UX/UI', quantidade: 1, custoHora: 120, horas: 80 },
        { id: 'gp-sm', funcao: 'Gerente de Projetos', quantidade: 1, custoHora: 130, horas: 160 },
        { id: 'qa-ts', funcao: 'Analista de QA / Tester', quantidade: 1, custoHora: 80, horas: 120 }
      ],
      infraestrutura: 5000,
      ferramentas: 3000,
      overheadPercentual: 25,
      margemLucroPercentual: 30
    },
    processo: {
      metasEficiencia: [
        { id: 'p1', nome: 'Velocity Estável (> 40 pts)', descricao: 'Capacidade preditiva alta em sprints quinzenais.', bonusValor: 8000, tipoBonus: 'fixo', atingida: true },
        { id: 'p2', nome: 'Lead Time Reduzido (< 2 semanas)', descricao: 'Fluxo rápido desde a especificação até produção.', bonusValor: 5000, tipoBonus: 'fixo', atingida: true },
        { id: 'p3', nome: 'Zero Bugs Críticos em Produção', descricao: 'Estabilidade sem quedas no checkout.', bonusValor: 7000, tipoBonus: 'fixo', atingida: true },
        { id: 'p4', nome: 'Deployment Diário Automatizado', descricao: 'Esteira de CI/CD contínua.', bonusValor: 5000, tipoBonus: 'fixo', atingida: false }
      ]
    },
    produto: {
      modeloCaptura: 'revenue_share',
      resultadoClienteEstimado: 1000000, // R$ 1.000.000 em vendas projetadas (GMV)
      percentualCaptura: 3 // 3% do GMV
    }
  },
  {
    id: 'template-finops',
    nome: 'Otimização de Nuvem & FinOps (Automação)',
    categoria: 'Consultoria Especializada / Cost Savings',
    descricao: 'Baseado no estudo de caso da página 7 do PDF: consultoria de arquitetura reduzindo desperdício na AWS/Azure com remuneração atrelada à economia comprovada.',
    icone: '☁️',
    aliquotaImposto: 6.0, // MEI / Alíquota inicial
    recursos: {
      equipe: [
        { id: 'devops-sr', funcao: 'Especialista Cloud / FinOps', quantidade: 1, custoHora: 160, horas: 80 },
        { id: 'dev-sr', funcao: 'Engenheiro de Backend Sênior', quantidade: 1, custoHora: 140, horas: 60 }
      ],
      infraestrutura: 1200,
      ferramentas: 800,
      overheadPercentual: 20,
      margemLucroPercentual: 35
    },
    processo: {
      metasEficiencia: [
        { id: 'f1', nome: 'Lead Time de Migração < 3 semanas', descricao: 'Aplicação rápida de profiling e rightsizing.', bonusValor: 4000, tipoBonus: 'fixo', atingida: true },
        { id: 'f2', nome: 'Zero Downtime durante as alterações', descricao: 'Migração transparente sem indisponibilidade de APIs.', bonusValor: 6000, tipoBonus: 'fixo', atingida: true }
      ]
    },
    produto: {
      modeloCaptura: 'cost_savings',
      resultadoClienteEstimado: 60000, // R$ 60.000 de economia mensal em cloud
      percentualCaptura: 30 // 30% da economia obtida
    }
  },
  {
    id: 'template-saas',
    nome: 'SaaS B2B & Squad Ágil (Performance)',
    categoria: 'Produto Digital / Value-Based',
    descricao: 'Baseado no estudo de caso da página 5 e 7 do PDF: desenvolvimento de software com squad dedicada e remuneração mista (sprint base + leads convertidos).',
    icone: '🚀',
    aliquotaImposto: 16.33, // Lucro Presumido
    recursos: {
      equipe: [
        { id: 's-dev1', funcao: 'Desenvolvedor Fullstack Sênior', quantidade: 2, custoHora: 130, horas: 160 },
        { id: 's-qa', funcao: 'Engenheiro de Qualidade (SDET)', quantidade: 1, custoHora: 90, horas: 160 },
        { id: 's-po', funcao: 'Product Owner / Agilista', quantidade: 1, custoHora: 110, horas: 80 }
      ],
      infraestrutura: 4000,
      ferramentas: 2500,
      overheadPercentual: 30,
      margemLucroPercentual: 25
    },
    processo: {
      metasEficiencia: [
        { id: 's1', nome: 'Velocity > 40 pontos por sprint', descricao: 'Entregas previsíveis e consistentes.', bonusValor: 8000, tipoBonus: 'fixo', atingida: true },
        { id: 's2', nome: 'Lead Time < 10 dias', descricao: 'Ciclo curto de feedback do usuário.', bonusValor: 5000, tipoBonus: 'fixo', atingida: true },
        { id: 's3', nome: 'Zero Bugs Críticos', descricao: 'Garantia de retenção e estabilidade do SaaS.', bonusValor: 7000, tipoBonus: 'fixo', atingida: true },
        { id: 's4', nome: 'Deployment Diário Automatizado', descricao: 'Releases contínuas com Canary Deployments.', bonusValor: 5000, tipoBonus: 'fixo', atingida: true }
      ]
    },
    produto: {
      modeloCaptura: 'value_based',
      resultadoClienteEstimado: 250000, // R$ 250.000 em receita incremental de novos leads
      percentualCaptura: 15 // 15% de participação
    }
  }
];

export const BLANK_TEMPLATE: Omit<PricingTemplate, 'id' | 'nome' | 'categoria' | 'descricao' | 'icone'> = {
  aliquotaImposto: 15.5,
  recursos: {
    equipe: [
      { id: 'custom-1', funcao: 'Desenvolvedor Pleno', quantidade: 1, custoHora: 100, horas: 160 }
    ],
    infraestrutura: 1000,
    ferramentas: 500,
    overheadPercentual: 20,
    margemLucroPercentual: 25
  },
  processo: {
    metasEficiencia: [
      { id: 'c1', nome: 'Velocity Estável', descricao: 'Entregas ágeis consistentes.', bonusValor: 3000, tipoBonus: 'fixo', atingida: true },
      { id: 'c2', nome: 'Zero Bugs Críticos', descricao: 'Qualidade assegurada em produção.', bonusValor: 4000, tipoBonus: 'fixo', atingida: true }
    ]
  },
  produto: {
    modeloCaptura: 'cost_savings',
    resultadoClienteEstimado: 50000,
    percentualCaptura: 20
  }
};
