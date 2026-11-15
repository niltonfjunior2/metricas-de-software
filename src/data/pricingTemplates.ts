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
        { id: 'qa-ts', funcao: 'Analista de QA / Tester', quantidade: 1, custoHora: 80, horas: 120 },
        { id: 'infra-cloud', funcao: 'Infraestrutura Cloud & Nuvem', quantidade: 1, custoHora: 5000, horas: 1 },
        { id: 'ferr-tools', funcao: 'Ferramentas de CI/CD & Licenças', quantidade: 1, custoHora: 3000, horas: 1 },
        { id: 'overhead-adm', funcao: 'Overhead Administrativo & Contábil', quantidade: 1, custoHora: 4000, horas: 1 }
      ],
      infraestrutura: 0,
      ferramentas: 0,
      overheadPercentual: 0,
      margemLucroPercentual: 30
    },
    processo: {
      metasEficiencia: [
        { id: 'p1', nome: 'Previsibilidade e Aderência a Prazos', descricao: 'Capacidade preditiva alta no cumprimento de cronogramas.', bonusValor: 8000, tipoBonus: 'fixo', atingida: true },
        { id: 'p2', nome: 'Redução do Tempo de Ciclo (< 2 semanas)', descricao: 'Fluxo rápido desde a especificação da demanda até a produção.', bonusValor: 5000, tipoBonus: 'fixo', atingida: true },
        { id: 'p3', nome: 'Baixa Densidade de Defeitos no Processo', descricao: 'Estabilidade da entrega sem incidentes críticos.', bonusValor: 7000, tipoBonus: 'fixo', atingida: true },
        { id: 'p4', nome: 'Automação Contínua de Publicação', descricao: 'Esteira técnica de integração e testes automatizados.', bonusValor: 5000, tipoBonus: 'fixo', atingida: false }
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
        { id: 'dev-sr', funcao: 'Engenheiro de Backend Sênior', quantidade: 1, custoHora: 140, horas: 60 },
        { id: 'infra-mon', funcao: 'Telemetria & Infra de Nuvem', quantidade: 1, custoHora: 1200, horas: 1 },
        { id: 'ferr-apm', funcao: 'Licenças APM / Profiling FinOps', quantidade: 1, custoHora: 800, horas: 1 }
      ],
      infraestrutura: 0,
      ferramentas: 0,
      overheadPercentual: 0,
      margemLucroPercentual: 35
    },
    processo: {
      metasEficiencia: [
        { id: 'f1', nome: 'Tempo de Ciclo de Otimização < 3 semanas', descricao: 'Aplicação rápida de diagnóstico, profiling e rightsizing.', bonusValor: 4000, tipoBonus: 'fixo', atingida: true },
        { id: 'f2', nome: 'Continuidade Operacional e Zero Indisponibilidade', descricao: 'Execução transparente sem interrupção de serviços.', bonusValor: 6000, tipoBonus: 'fixo', atingida: true }
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
    nome: 'Plataforma SaaS B2B (Performance & Conversão)',
    categoria: 'Produto Digital / Value-Based',
    descricao: 'Baseado no estudo de caso da página 5 e 7 do PDF: desenvolvimento de software com equipe dedicada e remuneração mista (piso base + metas de processo + receita gerada).',
    icone: '🚀',
    aliquotaImposto: 16.33, // Lucro Presumido
    recursos: {
      equipe: [
        { id: 's-dev1', funcao: 'Desenvolvedor Fullstack Sênior', quantidade: 2, custoHora: 130, horas: 160 },
        { id: 's-qa', funcao: 'Engenheiro de Qualidade (SDET)', quantidade: 1, custoHora: 90, horas: 160 },
        { id: 's-po', funcao: 'Product Owner / Coordenador', quantidade: 1, custoHora: 110, horas: 80 },
        { id: 's-infra', funcao: 'Infraestrutura Cloud & Nuvem', quantidade: 1, custoHora: 4000, horas: 1 },
        { id: 's-ferr', funcao: 'Ferramentas de CI/CD & Automação', quantidade: 1, custoHora: 2500, horas: 1 }
      ],
      infraestrutura: 0,
      ferramentas: 0,
      overheadPercentual: 0,
      margemLucroPercentual: 25
    },
    processo: {
      metasEficiencia: [
        { id: 's1', nome: 'Alta Cadência e Previsibilidade de Entregas', descricao: 'Entregas regulares e consistentes a cada ciclo planejado.', bonusValor: 8000, tipoBonus: 'fixo', atingida: true },
        { id: 's2', nome: 'Tempo de Ciclo Otimizado (< 10 dias)', descricao: 'Ciclo curto de validação e feedback do usuário final.', bonusValor: 5000, tipoBonus: 'fixo', atingida: true },
        { id: 's3', nome: 'Baixa Taxa de Retrabalho (< 5%)', descricao: 'Garantia de estabilidade do processo e confiabilidade do sistema.', bonusValor: 7000, tipoBonus: 'fixo', atingida: true },
        { id: 's4', nome: 'Automação Contínua de Testes e Publicação', descricao: 'Homologação e publicação contínua sem esforço manual.', bonusValor: 5000, tipoBonus: 'fixo', atingida: true }
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
  aliquotaImposto: 0,
  recursos: {
    equipe: [],
    infraestrutura: 0,
    ferramentas: 0,
    overheadPercentual: 0,
    margemLucroPercentual: 0
  },
  processo: {
    metasEficiencia: []
  },
  produto: {
    modeloCaptura: 'cost_savings',
    resultadoClienteEstimado: 0,
    percentualCaptura: 0
  }
};

