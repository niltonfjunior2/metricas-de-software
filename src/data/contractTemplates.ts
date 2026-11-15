import { ContractInput } from '../services/contractEngine';

export interface ContractTemplate {
  id: string;
  nome: string;
  icone: string;
  resumo: string;
  dados: ContractInput;
}

export interface ContractLegalPillar {
  numero: string;
  titulo: string;
  baseLegal: string;
  riscoPratico: string;
  equilibrioJusto: string;
}

export const CONTRACT_PILLARS_GUIDE: ContractLegalPillar[] = [
  {
    numero: '01',
    titulo: 'Escopo Delimitado vs. Crescimento Descontrolado ("Escopo Infinito")',
    baseLegal: 'Código Civil (Arts. 421 e 593–609 — Prestação de Serviços e Boa-Fé Objetiva)',
    riscoPratico:
      'Descrever apenas "desenvolvimento de um sistema de vendas" abre margem para o cliente exigir dezenas de telas extras pelo mesmo preço inicial.',
    equilibrioJusto:
      'O cliente recebe exatamente os requisitos listados no Anexo de Especificação Técnica, e o desenvolvedor garante que novas funcionalidades pedidas no meio do caminho sejam orçadas via Termo Aditivo.',
  },
  {
    numero: '02',
    titulo: 'Homologação com Prazo e Cláusula de Aceite Tácito',
    baseLegal: 'Código Civil (Arts. 111 e 476 — Silêncio Qualificado e Cooperação Contratual)',
    riscoPratico:
      'Quando o pagamento final depende da aprovação do cliente e o cliente paralisa os testes por meses, o desenvolvedor fica sem receber mesmo tendo concluído o código.',
    equilibrioJusto:
      'O cliente tem um prazo claro (ex.: 5 a 10 dias úteis) para testar com calma e apontar falhas reais; se ficar em silêncio ou colocar em produção, a etapa é considerada aprovada.',
  },
  {
    numero: '03',
    titulo: 'Propriedade Intelectual e Acervo Técnico Pré-Existente',
    baseLegal: 'Lei do Software (Lei nº 9.609/1998, Art. 4º) e Lei de Direitos Autorais (nº 9.610/1998)',
    riscoPratico:
      'Pela lei brasileira, no silêncio do contrato, todo o código pertence ao cliente. Sem ressalva sobre sua Propriedade Intelectual Pré-Existente, você pode ficar proibido de reutilizar suas próprias bibliotecas base em outros projetos.',
    equilibrioJusto:
      'Em projetos sob encomenda, o cliente recebe o código específico após quitar 100% do contrato, enquanto o desenvolvedor preserva a titularidade de suas estruturas e componentes reutilizáveis.',
  },
  {
    numero: '04',
    titulo: 'Garantia Técnica (Erros de Código) vs. Manutenção Evolutiva',
    baseLegal: 'Lei nº 9.609/1998 (Art. 7º e 8º) e Código Civil (Vícios Redibitórios)',
    riscoPratico:
      'Clientes frequentemente confundem "garantia gratuita contra falhas de programação" com "suporte gratuito para mudanças de regra de negócio, quedas de sistemas externos ou erros de operação de usuários".',
    equilibrioJusto:
      'O desenvolvedor corrige sem custo qualquer erro do código original dentro do prazo de garantia (ex.: 90 dias), mas melhorias, mudanças externas e alterações feitas por terceiros são cobradas à parte.',
  },
  {
    numero: '05',
    titulo: 'Proteção de Dados Pessoais (LGPD) e Compromisso de Sigilo',
    baseLegal: 'Lei Geral de Proteção de Dados (Lei nº 13.709/2018, Arts. 7º, 37 a 42 e 46)',
    riscoPratico:
      'Misturar responsabilidades de Controlador e Operador pode fazer o desenvolvedor responder por coleta indevida de dados feita pelo modelo de negócio do próprio cliente.',
    equilibrioJusto:
      'O cliente atua como Controlador (define quais dados coleta e por quê) e o desenvolvedor atua como Operador técnico (protege credenciais, mantém sigilo bilateral e usa dados fictícios em ambientes de teste).',
  },
  {
    numero: '06',
    titulo: 'Limitação de Responsabilidade Civil e Rescisão Proporcional',
    baseLegal: 'Código Civil (Arts. 402, 421-A e 927 — Alocação de Riscos Paritários)',
    riscoPratico:
      'Cobrar R$ 15 mil por um software e sofrer um processo de R$ 500 mil por lucros cessantes porque o servidor de hospedagem em nuvem ou o sistema de pagamentos ficou fora do ar em uma data promocional.',
    equilibrioJusto:
      'Limita-se o teto de indenização direta ao valor efetivamente pago no contrato, isentando falhas de terceiros, e garante-se na rescisão o pagamento proporcional pelo que já foi entregue.',
  },
];

export const BLANK_CONTRACT_TEMPLATE: ContractTemplate = {
  id: 'template-blank',
  nome: 'Iniciar em Branco',
  icone: '📄',
  resumo: 'Campos de identificação e escopo limpos para preenchimento livre em aula ou simulação personalizada.',
  dados: {
    contratanteNome: '',
    contratanteDocumento: '',
    contratadaNome: '',
    contratadaDocumento: '',
    tituloProjeto: '',
    modeloContratual: 'escopo_fechado',
    escopoResumo: '',
    exclusoesEscopo: '',
    exigirChangeRequest: true,
    prazoEstimadoDias: 0,
    prazoHomologacaoDiasUteis: 0,
    aceiteTacitoAtivo: true,
    valorTotalOuMensal: 0,
    estruturaPagamento: 'sinal_parcelas',
    percentualSinal: 0,
    multaAtrasoPercentual: 0,
    diasToleranciaSuspensao: 0,
    propriedadeIntelectual: 'cessao_cliente',
    protegerBackgroundIP: true,
    permitirPortfolio: true,
    prazoGarantiaDias: 0,
    perdaGarantiaPorAlteracaoTerceiros: true,
    slaRespostaCriticoHoras: 0,
    conformidadeLGPD: true,
    clausulaConfidencialidadeNDA: true,
    limitarResponsabilidadeCivil: true,
    avisoPrevioRescisaoDias: 0,
    multaRescisoriaPercentual: 0,
    foroComarca: '',
  },
};

export const CONTRACT_TEMPLATES: ContractTemplate[] = [
  {
    id: 'template-mvp-fechado',
    nome: 'Sistema Sob Encomenda (Escopo Fechado)',
    icone: '📦',
    resumo: 'Desenvolvimento de primeira versão funcional ou sistema sob medida com entregas demarcadas, cessão de código após quitação e aceite tácito.',
    dados: {
      contratanteNome: 'Comércio Varejista Horizonte Ltda.',
      contratanteDocumento: '12.345.678/0001-90',
      contratadaNome: 'TechCraft Engenharia de Sistemas Ltda.',
      contratadaDocumento: '98.765.432/0001-10',
      tituloProjeto: 'Plataforma Web de Gestão Integrada de Pedidos e Estoque',
      modeloContratual: 'escopo_fechado',
      escopoResumo:
        'Desenvolvimento de aplicação web responsiva (interface visual e servidor de aplicação) contendo: (1) Módulo de autenticação com perfis de acesso; (2) Painel de catálogo e controle de estoque em tempo real; (3) Integração automatizada com meio de pagamento eletrônico; e (4) Relatório gerencial exportável em planilha e PDF, conforme detalhado no Anexo I (Caderno de Especificação Técnica).',
      exclusoesEscopo:
        'Mensalidades de servidores em nuvem e banco de dados, taxas cobradas pela operadora de pagamentos, compra de domínio de internet, desenvolvimento de aplicativo nativo para celulares e digitação ou cadastro inicial de produtos.',
      exigirChangeRequest: true,
      prazoEstimadoDias: 60,
      prazoHomologacaoDiasUteis: 5,
      aceiteTacitoAtivo: true,
      valorTotalOuMensal: 32000,
      estruturaPagamento: 'sinal_parcelas',
      percentualSinal: 30,
      multaAtrasoPercentual: 2,
      diasToleranciaSuspensao: 10,
      propriedadeIntelectual: 'cessao_cliente',
      protegerBackgroundIP: true,
      permitirPortfolio: true,
      prazoGarantiaDias: 90,
      perdaGarantiaPorAlteracaoTerceiros: true,
      slaRespostaCriticoHoras: 6,
      conformidadeLGPD: true,
      clausulaConfidencialidadeNDA: true,
      limitarResponsabilidadeCivil: true,
      avisoPrevioRescisaoDias: 30,
      multaRescisoriaPercentual: 15,
      foroComarca: 'São Paulo / SP',
    },
  },
  {
    id: 'template-sustentacao-agil',
    nome: 'Sustentação & Evolução Mensal Contínua',
    icone: '🛠️',
    resumo: 'Contrato continuado para manutenção evolutiva, redução de passivo técnico, monitoramento e alocação mensal de horas de engenharia.',
    dados: {
      contratanteNome: 'Logística Expressa Nacional S.A.',
      contratanteDocumento: '23.456.789/0001-05',
      contratadaNome: 'Aliança Análise e Desenvolvimento de Software Ltda.',
      contratadaDocumento: '87.654.321/0001-55',
      tituloProjeto: 'Sustentação Evolutiva, Monitoramento e Otimização do Sistema Central de Logística',
      modeloContratual: 'alocacao_horas',
      escopoResumo:
        'Prestação continuada de serviços de Engenharia de Sustentação com franquia de até 80 horas técnicas mensais para: manutenção corretiva e evolutiva de módulos, otimização de consultas ao banco de dados, atualização de componentes de segurança e acompanhamento de indicadores de estabilidade.',
      exclusoesEscopo:
        'Custos de servidores em nuvem, licenças de ferramentas externas de monitoramento, plantão 24x7 em feriados não acordados previamente e reescrita integral de sistemas antigos fora da lista priorizada de demandas.',
      exigirChangeRequest: true,
      prazoEstimadoDias: 365,
      prazoHomologacaoDiasUteis: 5,
      aceiteTacitoAtivo: true,
      valorTotalOuMensal: 14500,
      estruturaPagamento: 'mensal_recorrente',
      percentualSinal: 0,
      multaAtrasoPercentual: 2,
      diasToleranciaSuspensao: 10,
      propriedadeIntelectual: 'cessao_cliente',
      protegerBackgroundIP: true,
      permitirPortfolio: true,
      prazoGarantiaDias: 60,
      perdaGarantiaPorAlteracaoTerceiros: true,
      slaRespostaCriticoHoras: 4,
      conformidadeLGPD: true,
      clausulaConfidencialidadeNDA: true,
      limitarResponsabilidadeCivil: true,
      avisoPrevioRescisaoDias: 30,
      multaRescisoriaPercentual: 10,
      foroComarca: 'Curitiba / PR',
    },
  },
  {
    id: 'template-saas-licenca',
    nome: 'Licenciamento de Uso (Assinatura) + Implantação',
    icone: '☁️',
    resumo: 'Fornecimento de sistema próprio da desenvolvedora mediante licença de uso mensal em nuvem, sem transferência do código-fonte.',
    dados: {
      contratanteNome: 'Clínica Integrada Saúde & Vida Ltda.',
      contratanteDocumento: '45.678.901/0001-22',
      contratadaNome: 'MedFluxo Sistemas Inteligentes Ltda.',
      contratadaDocumento: '76.543.210/0001-88',
      tituloProjeto: 'Licenciamento de Uso da Plataforma em Nuvem de Agendamento e Prontuário Digital',
      modeloContratual: 'saas_licenca',
      escopoResumo:
        'Concessão de licença de uso não exclusiva da plataforma em nuvem para até 30 usuários ativos, incluindo implantação e parametrização inicial, treinamento remoto de 4 horas para a equipe administrativa e suporte técnico em horário comercial.',
      exclusoesEscopo:
        'Cessão ou entrega do código-fonte base da plataforma, desenvolvimento de customizações exclusivas fora do plano de evolução do produto, integrações com equipamentos locais antigos e pacotes de envio de mensagens de texto excedentes.',
      exigirChangeRequest: true,
      prazoEstimadoDias: 15,
      prazoHomologacaoDiasUteis: 5,
      aceiteTacitoAtivo: true,
      valorTotalOuMensal: 2800,
      estruturaPagamento: 'mensal_recorrente',
      percentualSinal: 0,
      multaAtrasoPercentual: 2,
      diasToleranciaSuspensao: 15,
      propriedadeIntelectual: 'licenca_uso',
      protegerBackgroundIP: true,
      permitirPortfolio: true,
      prazoGarantiaDias: 90,
      perdaGarantiaPorAlteracaoTerceiros: true,
      slaRespostaCriticoHoras: 4,
      conformidadeLGPD: true,
      clausulaConfidencialidadeNDA: true,
      limitarResponsabilidadeCivil: true,
      avisoPrevioRescisaoDias: 30,
      multaRescisoriaPercentual: 10,
      foroComarca: 'Belo Horizonte / MG',
    },
  },
  BLANK_CONTRACT_TEMPLATE,
];
