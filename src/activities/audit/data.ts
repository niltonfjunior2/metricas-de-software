export interface AuditTargetMetric {
  categoria: 'Recursos' | 'Processo' | 'Produto';
  nome: string;
  valor: string;
  justificativa: string;
}

export interface AuditNoiseItem {
  item: string;
  motivo: string;
}

export interface ScenarioAudit {
  id: number;
  objetivo: string;
  contexto: string;
  metricas_alvo: AuditTargetMetric[];
  ruidos_cenario: AuditNoiseItem[];
}

export const auditScenariosData: ScenarioAudit[] = [
  {
    "id": 1,
    "objetivo": "Avaliar entrega de valor e a performance técnica do sistema durante o desenvolvimento",
    "contexto": "Uma equipe ágil está desenvolvendo um sistema de gestão hospitalar. Durante o último sprint, foram entregues 8 funcionalidades. O tempo médio de resposta da API de agendamento caiu de 1.2s para 0.8s. A equipe trabalhou 240 horas no ciclo e gastou R$ 18.000 com infraestrutura.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Custo financeiro com infraestrutura de servidores",
        "valor": "R$ 18.000",
        "justificativa": "Quantifica o insumo monetário alocado no ciclo. Atende ao critério SMART por ser específica (S), mensurável por faturas da nuvem (M), atingível (A), relevante para o controle orçamentário (R) e delimitada ao período do sprint (T)."
      },
      {
        "categoria": "Processo",
        "nome": "Funcionalidades entregues por sprint (Throughput)",
        "valor": "8 funcionalidades",
        "justificativa": "Avalia o fluxo e a cadência da equipe na esteira de desenvolvimento. Responde diretamente ao objetivo de 'entrega de valor', mensurada via ferramentas de gestão (Jira/Trello) de forma temporal por ciclo."
      },
      {
        "categoria": "Produto",
        "nome": "Tempo de resposta da API de agendamento (Latência)",
        "valor": "Redução de 1.2s para 0.8s",
        "justificativa": "Mede um atributo técnico de performance da solução entregue e percebida pelo usuário final. Monitorável via APM (New Relic/Datadog) de forma contínua e específica por endpoint."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "240 horas trabalhadas pela equipe no ciclo",
        "motivo": "Ruído de esforço versus valor: Embora quantifique o esforço humano bruto da equipe (dimensão Recurso), este dado atua como ruído frente ao objetivo central, que exige expressamente avaliar a 'entrega de valor e performance técnica'. No paradigma contemporâneo da Engenharia de Software, o total de horas gastas não comprova a utilidade do que foi construído nem reflete a qualidade do código entregue; as 8 funcionalidades entregues (vazão de Processo) e a redução na latência para 0.8s (Produto) respondem com precisão muito superior à relação entre valor gerado e custo de infraestrutura (R$ 18.000)."
      },
      {
        "item": "'Equipe ágil' e 'Sistema de gestão hospitalar'",
        "motivo": "Ruído de contexto descritivo e metodológico: Trata-se unicamente de elementos textuais que situam a dinâmica organizacional e o domínio de aplicação da solução. Não possuem escala numérica, unidade de medida, fórmula de cálculo ou periodicidade de coleta, sendo completamente desprovidos de atributos mensuráveis de engenharia."
      }
    ]
  },
  {
    "id": 2,
    "objetivo": "Produtividade da equipe e a qualidade técnica durante o ciclo de desenvolvimento",
    "contexto": "Durante o desenvolvimento de um aplicativo de delivery, a equipe registrou 12 funcionalidades entregues no último ciclo. O tempo médio de revisão de código foi de 2 horas por funcionalidade. O sistema apresentou 3 falhas em produção na última semana. O projeto conta com 6 desenvolvedores e consome R$ 2.500 mensais em servidores.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Funcionalidades entregues no ciclo",
        "valor": "12 funcionalidades",
        "justificativa": "Mede a vazão produtiva do time no período. Responde ao objetivo de 'produtividade', sendo específica e auditável por rastreadores de tarefas."
      },
      {
        "categoria": "Processo",
        "nome": "Tempo médio de revisão de código (Code Review)",
        "valor": "2 horas por funcionalidade",
        "justificativa": "Avalia a agilidade e o rigor do fluxo interno de garantia de qualidade na esteira colaborativa (Processo), impactando diretamente o lead time."
      },
      {
        "categoria": "Produto",
        "nome": "Falhas em produção na última semana",
        "valor": "3 falhas",
        "justificativa": "Avalia a estabilidade e a qualidade intrínseca do software em operação (Produto), servindo de indicador de confiabilidade após o deploy."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "6 desenvolvedores alocados no projeto",
        "motivo": "Ruído demográfico e estrutural: Indica apenas o tamanho nominal da equipe (capacidade instalada de pessoal), e não o esforço efetivamente despendido ou o rendimento alcançado. A contagem estática de profissionais não responde ao objetivo de 'produtividade' (que exige métricas de vazão temporal, como as 12 funcionalidades entregues no ciclo) nem de 'qualidade técnica' (que demanda medição de defeitos em produção ou rigor na revisão de código)."
      },
      {
        "item": "R$ 2.500 mensais consumidos em servidores",
        "motivo": "Ruído de escopo em relação à meta técnica: É uma métrica legítima da dimensão Recursos (custo financeiro de infraestrutura), porém atua como ruído de priorização no cenário, cujo objetivo delimitou a investigação estritamente à 'produtividade da equipe e qualidade técnica durante o desenvolvimento'. O custo em nuvem não explica a velocidade da esteira de código nem a robustez da aplicação."
      }
    ]
  },
  {
    "id": 3,
    "objetivo": "Melhorar a confiabilidade técnica e o desempenho do sistema após ajustes",
    "contexto": "Um sistema de controle financeiro foi implantado em uma empresa. A taxa de erro por requisição caiu de 4% para 1% após ajustes. A equipe gastou 180 horas no último mês com testes automatizados. O tempo de carregamento da tela de relatórios foi reduzido para 1,5 segundos. O custo total do projeto até agora é de R$ 85.000.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Custo total consolidado do projeto",
        "valor": "R$ 85.000",
        "justificativa": "Representa a totalização financeira dos insumos consumidos. Permite mensurar a viabilidade e o investimento frente aos ganhos obtidos."
      },
      {
        "categoria": "Processo",
        "nome": "Horas gastas na execução/construção de testes automatizados",
        "valor": "180 horas no mês",
        "justificativa": "Mede o esforço alocado em uma atividade essencial do fluxo de garantia da qualidade (Processo), correlacionando-se com a redução de bugs."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de erro por requisição HTTP",
        "valor": "Queda de 4% para 1%",
        "justificativa": "Métrica técnica de confiabilidade do software em produção (Produto). Mostra diretamente o efeito prático das correções aplicadas."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Tempo de carregamento da tela de relatórios reduzido para 1,5s",
        "motivo": "Ruído por incompletude métrica (violação do SMART): Embora seja uma métrica técnica de Produto, o dado foi apresentado no texto sem parâmetros fundamentais de comparação: não há registro da linha de base anterior (quanto tempo levava antes dos ajustes?), nem a frequência de amostragem ou a representatividade estatística dessa tela frente ao sistema. Em contrapartida, a taxa de erro geral (que caiu explicitamente de 4% para 1%) atende com precisão ao objetivo de melhoria de confiabilidade sob o framework SMART."
      },
      {
        "item": "'Implantação em uma empresa'",
        "motivo": "Ruído contextual de marco de negócio: Representa o evento fático de instalação e entrega da solução ao cliente corporativo. Trata-se de uma condição de contorno do cenário, sem nenhuma variável matemática ou indicador de controle técnico."
      }
    ]
  },
  {
    "id": 4,
    "objetivo": "Avaliar a eficiência da manutenção corretiva e a estabilidade do sistema após ajustes",
    "contexto": "Durante a manutenção de um sistema de gestão escolar, foram realizadas 22 reuniões técnicas. A equipe identificou 15 bugs, que foram corrigidos em média em 36 horas. A taxa de aprovação nos testes de regressão foi de 92%. O sistema possui 18 telas acessadas com frequência pelos usuários.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Quantidade de reuniões técnicas realizadas",
        "valor": "22 reuniões",
        "justificativa": "Quantifica o dispêndio de tempo e esforço organizacional da equipe (insumo humano de coordenação) alocado durante o período de manutenção."
      },
      {
        "categoria": "Processo",
        "nome": "Tempo médio para correção de bugs (MTTR)",
        "valor": "36 horas em média",
        "justificativa": "Avalia com exatidão a 'eficiência da manutenção corretiva' solicitada no objetivo, medindo a agilidade do time na resolução de problemas."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de aprovação na suíte de testes de regressão",
        "valor": "92%",
        "justificativa": "Mede a estabilidade da esteira de validação após os ajustes, garantindo que correções pontuais não quebrem funcionalidades legadas."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "15 bugs identificados na fase de manutenção",
        "motivo": "Ruído por dado bruto sem normalização: A contagem pura e isolada de defeitos não possui valor decisório se não estiver associada ao volume de código examinado (densidade de defeitos por KLOC), à severidade das ocorrências ou ao tempo exigido para o reparo. Para responder ao objetivo de avaliar a 'eficiência da manutenção corretiva', a métrica imperativa é o MTTR (36 horas), que mede a agilidade operacional do time, e não o número absoluto de itens reportados."
      },
      {
        "item": "18 telas acessadas com frequência pelos usuários",
        "motivo": "Ruído de escopo funcional e navegação: O volume de telas acessadas descreve a extensão da interface e o padrão de navegação (Produto), sendo totalmente ortogonal e irrelevante para a pergunta do exercício, que exige diagnosticar a eficiência corretiva da equipe e a estabilidade das alterações."
      }
    ]
  },
  {
    "id": 5,
    "objetivo": "Eficiência do processo de entrega e o aproveitamento das funcionalidades pelos usuários",
    "contexto": "Em um projeto de CRM, o tempo entre commit e deploy foi reduzido para 30 minutos. A equipe adquiriu 12 licenças de software para ferramentas de gestão. A taxa de funcionalidades utilizadas pelos clientes ativos é de 68%. O número de retrabalhos por funcionalidade caiu de 5 para 2 após revisão de requisitos.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Licenças de software adquiridas",
        "valor": "12 licenças",
        "justificativa": "Representa o investimento em insumos e ferramentas de trabalho para viabilizar as atividades da equipe."
      },
      {
        "categoria": "Processo",
        "nome": "Tempo transcorrido entre commit e deploy (Lead Time de Mudança)",
        "valor": "Redução para 30 minutos",
        "justificativa": "Métrica central do objetivo de 'eficiência do processo de entrega', mensurando a maturidade do pipeline de CI/CD."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de funcionalidades ativamente utilizadas pelos clientes",
        "valor": "68% de utilização",
        "justificativa": "Responde diretamente à segunda metade do objetivo ('aproveitamento das funcionalidades'), avaliando o valor real percebido no Produto."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Número de retrabalhos caindo de 5 para 2 por funcionalidade",
        "motivo": "Ruído por falta de delimitação e representatividade: Embora retrabalho seja um indicador relevante de Processo, no texto ele é apresentado de forma pontual e sem a devida frequência temporal ou correlação com o pipeline automatizado. O 'Lead Time de 30 minutos' entre commit e deploy sintetiza com muito mais amplitude a eficiência global da esteira de entrega contínua pretendida no objetivo."
      },
      {
        "item": "'Revisão de requisitos'",
        "motivo": "Ruído de ação metodológica: Constitui o nome de uma atividade ou intervenção operacional executada pelo time, e não um indicador quantitativo mensurável. Confundir a execução de tarefas com métricas de resultado é uma armadilha frequente na avaliação de projetos."
      }
    ]
  },
  {
    "id": 6,
    "objetivo": "Identificar gargalos de qualidade e desempenho durante a entrega funcional do sistema",
    "contexto": "Durante a implantação de um sistema de gestão de estoque, a equipe realizou 18 reuniões técnicas e utilizou 5 licenças de software para controle de versão. O tempo médio de carregamento da tela de movimentação de produtos é de 2,3 segundos. Foram entregues 10 funcionalidades no último ciclo, mas 3 delas precisaram de retrabalho. O sistema foi instalado em 12 máquinas virtuais e o custo total do projeto até o momento é de R$ 92.000.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Taxa de retrabalho funcional (reprovações de entrega)",
        "valor": "3 em 10 funcionalidades (30%)",
        "justificativa": "Atende pontualmente ao objetivo de identificar 'gargalos de qualidade' no fluxo da equipe, mostrando que quase um terço do entregável precisou ser refeito."
      },
      {
        "categoria": "Processo",
        "nome": "Funcionalidades entregues no ciclo (Throughput)",
        "valor": "10 funcionalidades",
        "justificativa": "Mede a cadência de entrega funcional do sistema, servindo de base de cálculo para a eficiência da esteira."
      },
      {
        "categoria": "Produto",
        "nome": "Tempo de carregamento da tela de movimentação",
        "valor": "2,3 segundos",
        "justificativa": "Responde ao objetivo de 'desempenho', avaliando a latência percebida na interface do software pelo operador do estoque."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "18 reuniões técnicas e 5 licenças de software utilizadas",
        "motivo": "Ruído de insumos organizacionais e de apoio: Reuniões e licenças de ferramentas são insumos da dimensão Recursos (esforço humano de comunicação e instrumental de apoio). Embora necessários à rotina de trabalho, não diagnosticam gargalos técnicos de qualidade nem medem o desempenho de resposta do software entregue aos usuários do estoque."
      },
      {
        "item": "12 máquinas virtuais instaladas e custo acumulado de R$ 92.000",
        "motivo": "Ruído de dimensionamento de infraestrutura e custo global: O volume de VMs e o orçamento total alocado expressam o investimento material e financeiro acumulado (Recursos), mas não revelam a causa raiz dos retrabalhos funcionais (30% das entregas) nem explicam a lentidão operacional da tela de movimentação."
      }
    ]
  },
  {
    "id": 7,
    "objetivo": "Avaliar o impacto das melhorias de usabilidade no engajamento dos usuários e no esforço da equipe",
    "contexto": "Uma plataforma de ensino online foi atualizada com foco em usabilidade. A taxa de sucesso dos alunos ao completar atividades subiu para 87%. A equipe trabalhou 220 horas no último mês e utilizou ferramentas de análise de comportamento para medir o tempo médio de permanência por sessão, que ficou em 14 minutos. O número de commits no repositório Git aumentou 35% em relação ao mês anterior. Foram adquiridas novas licenças para o sistema de autenticação.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Horas trabalhadas pela equipe no mês",
        "valor": "220 horas",
        "justificativa": "Mede o 'esforço da equipe' explicitamente solicitado no objetivo da avaliação, permitindo correlacionar horas investidas com o resultado obtido."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de sucesso na conclusão de atividades pelos alunos",
        "valor": "Aumento para 87%",
        "justificativa": "Mede a eficácia e facilidade de uso do software (Produto), respondendo ao impacto direto da reformulação de usabilidade."
      },
      {
        "categoria": "Produto",
        "nome": "Tempo médio de permanência por sessão",
        "valor": "14 minutos",
        "justificativa": "Indicador de engajamento e comportamento do usuário na plataforma (Produto), demonstrando a retenção gerada pela interface."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Aumento de 35% no número de commits no repositório Git",
        "motivo": "Ruído por métrica de vaidade (Vanity Metric): A contagem de commits mede apenas a fragmentação e a frequência com que os programadores salvam alterações no repositório, não guardando correlação direta com qualidade técnica, esforço real ou valor percebido pelo aluno na plataforma. Trata-se de um ruído com forte potencial de induzir a liderança a avaliações distorcidas de produtividade."
      },
      {
        "item": "'Novas licenças adquiridas para o sistema de autenticação'",
        "motivo": "Ruído por ausência de mensurabilidade (violação do SMART): O dado é introduzido de maneira vaga e qualitativa, sem especificar a quantidade de licenças contratadas, o investimento financeiro realizado ou o impacto na segurança do acesso, inviabilizando qualquer análise métrica consistente."
      }
    ]
  },
  {
    "id": 8,
    "objetivo": "Monitorar a confiabilidade técnica do sistema e a eficiência da equipe na resolução de problemas durante o desenvolvimento",
    "contexto": "Durante o desenvolvimento de um aplicativo de saúde, a equipe registrou uma taxa de erro por requisição de 0,7%. O tempo médio para corrigir bugs foi de 48 horas. O sistema apresentou 2 falhas em produção após o último deploy. Foram realizadas 16 reuniões com stakeholders e o tempo de resposta da API de agendamento caiu para 0,9 segundos. O projeto conta com 7 desenvolvedores e consome R$ 3.200 mensais em infraestrutura.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Tempo médio para correção de bugs (MTTR)",
        "valor": "48 horas",
        "justificativa": "Atende pontualmente ao objetivo de 'eficiência da equipe na resolução de problemas', monitorando a agilidade do fluxo de suporte."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de erro por requisição HTTP",
        "valor": "0,7%",
        "justificativa": "Avalia a estabilidade contínua e a tolerância a falhas da aplicação em tempo de execução (Confiabilidade técnica do Produto)."
      },
      {
        "categoria": "Produto",
        "nome": "Falhas em produção após o último deploy",
        "valor": "2 falhas",
        "justificativa": "Mede o impacto e a severidade dos incidentes que escaparam da esteira e atingiram o usuário hospitalar (Confiabilidade do Produto)."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "7 desenvolvedores alocados e R$ 3.200 mensais em infraestrutura",
        "motivo": "Ruído de capacidade estática e despesa básica: O dimensionamento da equipe e a fatura mensal com servidores são métricas de Recursos indispensáveis para controle orçamentário, mas não oferecem resposta à diretriz central do cenário, que exige monitorar a confiabilidade do aplicativo hospitalar e a prontidão na resolução de falhas."
      },
      {
        "item": "16 reuniões realizadas com stakeholders",
        "motivo": "Ruído de comunicação externa: Contabiliza o esforço de alinhamento negocial com partes interessadas (Recursos), mas não reflete a capacidade técnica nem a agilidade da equipe de engenharia para depurar defeitos e estabilizar a aplicação em produção."
      },
      {
        "item": "Tempo de resposta da API de agendamento (0,9s)",
        "motivo": "Ruído de concorrência com o foco em confiabilidade: Embora seja uma métrica de Produto sólida para avaliar latência, o objetivo declarado do exercício solicitou monitorar 'confiabilidade técnica' (taxa de erro e falhas críticas em produção) e 'eficiência corretiva' (MTTR), tornando a performance da API um indicador concorrente secundário."
      }
    ]
  },
  {
    "id": 9,
    "objetivo": "Garantir estabilidade e velocidade na entrega do sistema, mantendo alta performance na experiência do usuário",
    "contexto": "Um sistema de atendimento ao cliente foi implantado com foco em performance. A taxa de aprovação nos testes de regressão foi de 95%. O tempo entre commit e deploy foi reduzido para 25 minutos. A equipe utilizou 4 ferramentas de gestão simultaneamente e realizou 20 sessões de treinamento. O tempo de carregamento da tela de histórico de atendimento é de 1,2 segundos. O custo com infraestrutura aumentou 12% após a expansão.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Taxa de aprovação na suíte de testes de regressão",
        "valor": "95%",
        "justificativa": "Garante a 'estabilidade na entrega', comprovando que a esteira de CI/CD barra código defeituoso antes do lançamento."
      },
      {
        "categoria": "Processo",
        "nome": "Tempo transcorrido entre commit e deploy (Lead Time)",
        "valor": "Reduzido para 25 minutos",
        "justificativa": "Responde diretamente à 'velocidade na entrega', atestando a fluidez da automação de implantação da squad."
      },
      {
        "categoria": "Produto",
        "nome": "Tempo de carregamento da tela de histórico",
        "valor": "1,2 segundos",
        "justificativa": "Responde diretamente à 'alta performance na experiência do usuário' estipulada na meta do projeto."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Aumento de 12% no custo com infraestrutura de servidores",
        "motivo": "Ruído orçamentário secundário: Trata-se de uma métrica financeira de Recursos legítima, mas que atua como ruído no contexto da tomada de decisão técnica, uma vez que a liderança estabeleceu foco estrito na tríade de entrega: estabilidade do software, velocidade de esteira e alta performance percebida pelo atendente."
      },
      {
        "item": "4 ferramentas de gestão simultâneas e 20 sessões de treinamento",
        "motivo": "Ruído de instrumentos de apoio e capacitação: O número de softwares de controle e os treinamentos realizados quantificam insumos de apoio e formação da equipe, mas não comprovam se as entregas em produção aceleraram ou se o tempo de carregamento da tela de histórico atingiu a meta de performance estipulada."
      }
    ]
  },
  {
    "id": 10,
    "objetivo": "Avaliar a eficiência técnica da equipe e a estabilidade do sistema durante a fase de testes",
    "contexto": "Durante a fase de testes de um sistema de controle financeiro, foram identificados 28 bugs, com tempo médio de correção de 36 horas. A taxa de falha em builds de integração contínua caiu para 3%. O sistema possui 22 telas acessadas com frequência e consome 1,8 GB de memória em média. A equipe trabalhou 250 horas no mês e realizou 14 reuniões de alinhamento. O número de funcionalidades entregues foi o mesmo do mês anterior.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Tempo médio de correção de defeitos (MTTR)",
        "valor": "36 horas",
        "justificativa": "Mede a 'eficiência técnica da equipe' na resolução de inconsistências encontradas na etapa de verificação."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de quebra/falha em builds de integração contínua",
        "valor": "Redução para 3%",
        "justificativa": "Evidencia a 'estabilidade durante a fase de testes', mostrando que os desenvolvedores estão integrando código com menos conflitos."
      },
      {
        "categoria": "Produto",
        "nome": "Consumo médio de memória RAM pelo sistema",
        "valor": "1,8 GB em média",
        "justificativa": "Avalia o impacto técnico do código gerado sobre a infraestrutura de execução (Atributo de qualidade do Produto)."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "28 bugs identificados na fase de testes",
        "motivo": "Ruído de dado bruto sem normalização: Contar defeitos de forma isolada não evidencia a estabilidade do software se não conhecemos o tamanho do código testado nem a taxa de quebra dos builds de integração. Além disso, a eficiência técnica da equipe só é comprovada pela velocidade de reparo no tempo (MTTR de 36 horas), e não pela contagem pura de itens encontrados."
      },
      {
        "item": "250 horas trabalhadas no mês e 14 reuniões de alinhamento",
        "motivo": "Ruído de esforço genérico desprovido de eficácia: Indicadores brutos de horas e reuniões quantificam a carga de esforço despendida (Recursos), mas não atestam se a fase de testes foi conduzida com rigor técnico nem se a aplicação financeira alcançou maturidade para liberação."
      },
      {
        "item": "22 telas acessadas com frequência",
        "motivo": "Ruído de escopo funcional estático: Descreve o tamanho e a arquitetura visual do sistema, não mantendo relação com a qualidade do processo de integração contínua ou com a eficiência computacional de memória do software."
      }
    ]
  },
  {
    "id": 11,
    "objetivo": "Avaliar a resiliência arquitetural e a governança orçamentária na migração para microsserviços",
    "contexto": "Uma fintech desmembrou seu monólito em 14 microsserviços rodando sobre Kubernetes. A taxa de indisponibilidade por serviço caiu para 0,02% ao mês. O time investiu 160 horas no mês na modelagem de observabilidade e registrou uma fatura mensal de cloud de R$ 34.000 (um aumento de 40%). O tempo médio de recuperação após falha de pods (MTTR do cluster) ficou em 45 segundos. A liderança estipulou como meta realizar reuniões diárias de 15 minutos e contratar mais 3 engenheiros SRE.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Fatura financeira mensal de infraestrutura em nuvem",
        "valor": "R$ 34.000 (aumento de 40%)",
        "justificativa": "Responde diretamente à 'governança orçamentária', mensurando a pressão financeira gerada pela proliferação de clusters e rede."
      },
      {
        "categoria": "Processo",
        "nome": "Tempo médio de recuperação após falhas no cluster (MTTR automatizado)",
        "valor": "45 segundos",
        "justificativa": "Avalia a eficácia operacional do processo de orquestração e self-healing implementado pela engenharia para conter incidentes."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de indisponibilidade por microsserviço (Downtime Rate)",
        "valor": "0,02% ao mês",
        "justificativa": "Mede o atributo intrínseco de confiabilidade e resiliência dos serviços finais entregues aos correntistas da fintech."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Meta de contratar 3 engenheiros SRE e fazer reuniões diárias de 15 minutos",
        "motivo": "Ruído de planejamento prescritivo e intenção gerencial: Planos futuros de contratação e cerimônias ágeis representam diretrizes administrativas ou ritos metodológicos, e não métricas empíricas coletadas sobre o comportamento do sistema ou a saúde orçamentária do projeto."
      },
      {
        "item": "14 microsserviços rodando sobre clusters Kubernetes",
        "motivo": "Ruído de descrição topológica e arquitetural: Representa a descrição do padrão de decomposição do software. O número de microsserviços é uma decisão de engenharia de arquitetura, e não uma medição quantitativa de resiliência ou de governança orçamentária."
      },
      {
        "item": "160 horas no mês investidas na modelagem de observabilidade",
        "motivo": "Ruído de esforço pontual de setup: Quantifica o tempo humano consumido na implantação da telemetria (Recurso), mas é superado pela despesa financeira contínua de nuvem (R$ 34.000/mês), que constitui a métrica primária e recorrente para responder à 'governança orçamentária' exigida no objetivo."
      }
    ]
  },
  {
    "id": 12,
    "objetivo": "Avaliar a postura de segurança e a velocidade de mitigação de vulnerabilidades na esteira DevSecOps",
    "contexto": "Um banco digital implementou escaneamento estático (SAST) e dinâmico (DAST) em seu pipeline. O tempo decorrido entre a detecção de uma brecha crítica (CVE) e o deploy do patch corretivo (MTTR de Vulnerabilidade) foi de 6 horas. A proporção de builds reprovados por violação de políticas de segurança estipuladas foi de 8%. A equipe desembolsou R$ 45.000 em licenças de ferramentas de escaneamento de código. Foram catalogadas 40 bibliotecas open-source e a diretoria emitiu um comunicado formal sobre conformidade ISO 27001.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Custo de aquisição de licenças das ferramentas de segurança",
        "valor": "R$ 45.000",
        "justificativa": "Quantifica o insumo financeiro empregado na contratação das tecnologias de varredura automatizada necessárias à esteira."
      },
      {
        "categoria": "Processo",
        "nome": "Tempo de remediação de vulnerabilidades críticas (Security MTTR)",
        "valor": "6 horas",
        "justificativa": "Mede a agilidade com que o time responde a riscos de segurança no fluxo de integração contínua (velocidade de mitigação)."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de reprovação de builds por conformidade de segurança",
        "valor": "8% dos builds",
        "justificativa": "Avalia o rigor e a eficácia das regras da esteira DevSecOps em bloquear alterações inseguras antes da produção."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "40 bibliotecas open-source catalogadas no ecossistema",
        "motivo": "Ruído de inventário estático de dependências (SBOM): Listar o volume de pacotes de terceiros descreve a estrutura da base de código, mas não avalia a postura de segurança se não houver a mensuração de quantas bibliotecas contêm brechas ativas, desatualizações ou severidade crítica explorável."
      },
      {
        "item": "'Comunicado formal da diretoria sobre conformidade ISO 27001'",
        "motivo": "Ruído de comunicação institucional e burocrática: Constitui um ato corporativo de governança administrativa, desprovido de qualquer dimensão quantitativa, periodicidade temporal ou capacidade de rastrear a agilidade de resposta a incidentes de segurança."
      }
    ]
  },
  {
    "id": 13,
    "objetivo": "Mensurar a eficiência técnica, custos operacionais e acurácia de um copiloto de IA integrado ao software",
    "contexto": "Uma plataforma de suporte jurídico acoplou um agente baseado em Large Language Models (LLM). O custo mensal com tokens de inferência na API atingiu US$ 4.200. O tempo médio de resposta da geração da minuta jurídica pelo modelo foi de 2,4 segundos. A taxa de aceitação das minutas sugeridas sem edição humana (acurácia percebida) foi de 74%. A equipe técnica registrou 180 horas dedicadas em refinamento de prompts (Prompt Engineering) e utilizou o modelo GPT-4o.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Custo financeiro com consumo de tokens de API de inferência",
        "valor": "US$ 4.200 / mês",
        "justificativa": "Mede o consumo contínuo de insumos financeiros essenciais para a operação do componente de IA generativa."
      },
      {
        "categoria": "Produto",
        "nome": "Latência média na geração de respostas pelo modelo (Tempo de resposta)",
        "valor": "2,4 segundos",
        "justificativa": "Avalia a performance técnica percebida na entrega do artefato textual pelo modelo de IA ao usuário final."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de aceitação de minutas sem intervenção (Acurácia / Precisão)",
        "valor": "74%",
        "justificativa": "Mede a qualidade intrínseca e o valor do resultado gerado pela funcionalidade de IA entregue ao cliente."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "180 horas da equipe dedicadas a engenharia de prompts",
        "motivo": "Ruído de esforço humano transitório: Métrica válida de Recursos que mensura o tempo inicial de calibração do agente, porém atua como ruído frente ao custo operacional contínuo (US$ 4.200 mensais com tokens), que é o fator financeiro crítico e permanente que dita a sustentabilidade do copiloto em produção."
      },
      {
        "item": "'Utilização do modelo fundacional GPT-4o'",
        "motivo": "Ruído de seleção tecnológica de fornecedor: Refere-se à escolha de infraestrutura e fornecedor externo de API de Inteligência Artificial. É uma especificação técnica da arquitetura, e não uma medição quantitativa de eficiência, custo ou qualidade das respostas."
      }
    ]
  },
  {
    "id": 14,
    "objetivo": "Avaliar o impacto de um programa de refatoração de código na manutenibilidade e no retrabalho da equipe",
    "contexto": "Um software de varejo com 10 anos de operação passou por refatoração para diminuir acoplamento. A complexidade ciclomática média das classes críticas caiu de 24 para 7. O índice de falhas em testes de regressão caiu de 18% para 2%. A squad despendeu 320 horas em revisões de arquitetura. O tempo médio para entender e implementar novos requisitos pelo time caiu de 5 dias para 1,5 dia. Foram deletadas 14.000 linhas de código duplicadas.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Taxa de quebra em testes de regressão após mudanças",
        "valor": "Queda de 18% para 2%",
        "justificativa": "Demonstra o ganho de segurança e a eliminação de retrabalho no fluxo de integração após a melhoria interna."
      },
      {
        "categoria": "Processo",
        "nome": "Lead time para desenvolvimento de novos requisitos",
        "valor": "Queda de 5 dias para 1,5 dia",
        "justificativa": "Mede a agilidade do processo de engenharia, demonstrando que um código menos acoplado acelera a vazão do time."
      },
      {
        "categoria": "Produto",
        "nome": "Complexidade ciclomática média dos módulos críticos (McCabe)",
        "valor": "Redução de 24 para 7",
        "justificativa": "Avalia diretamente a manutenibilidade e a clareza estrutural intrínseca do artefato de código-fonte entregue (Produto)."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "14.000 linhas de código duplicadas deletadas",
        "motivo": "Ruído de volume bruto de código (Vanity Metric): A exclusão de linhas é uma consequência da higienização do repositório, mas não serve como indicador técnico de manutenibilidade. A melhoria estrutural real do software é comprovada pela redução da Complexidade Ciclomática (de 24 para 7), que avalia caminhos de execução independentes, e não o tamanho bruto do texto do código."
      },
      {
        "item": "320 horas despendidas em revisões de arquitetura",
        "motivo": "Ruído de investimento de esforço inicial: Quantifica a carga de trabalho humana dedicada ao redesenho (Recursos), mas não afere se a manutenibilidade do código realmente aumentou nem se a esteira de desenvolvimento tornou-se mais fluida e segura contra regressões."
      }
    ]
  },
  {
    "id": 15,
    "objetivo": "Controlar o orçamento de erros (Error Budget) e a adesão aos Acordos de Nível de Serviço (SLA)",
    "contexto": "Um gateway de pagamentos monitora seus compromissos contratuais de 99,95% de disponibilidade. No último mês, o índice real de disponibilidade alcançou 99,98%. O consumo do 'Error Budget' foi de apenas 40% da margem permitida. A equipe técnica despendeu 60 horas em plantão de sobreaviso (on-call). A latência no percentil 99 (p99) do processamento de transações foi de 320ms. A infraestrutura rodava em modo redundante multi-região na nuvem.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Horas dedicadas pela equipe em regime de sobreaviso (On-call)",
        "valor": "60 horas de plantão",
        "justificativa": "Quantifica o recurso humano especializado disponibilizado e reservado para sustentar o acordo de nível de serviço."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de consumo da margem de erro permitida (Error Budget Burn Rate)",
        "valor": "40% consumido",
        "justificativa": "Métrica de governança de Processo no SRE, utilizada para decidir se o time pode liberar novos deploys ou se deve pausar para estabilizar o sistema."
      },
      {
        "categoria": "Produto",
        "nome": "Disponibilidade operacional do serviço (Uptime efetivo do SLA)",
        "valor": "99,98% de disponibilidade",
        "justificativa": "Mede a qualidade e a confiabilidade contratual do sistema em produção perante o cliente final."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Latência no percentil 99 (p99) de 320ms",
        "motivo": "Ruído por desvio do foco contratual do SLA: Embora seja uma métrica técnica de Produto vital para a performance de processamento, atua como ruído analítico neste exercício porque o objetivo do cenário foi taxativo ao priorizar o controle do Error Budget e o compromisso contratual de SLA, que é estritamente de disponibilidade e estabilidade operacional (99,98%)."
      },
      {
        "item": "'Arquitetura com redundância multi-região na nuvem'",
        "motivo": "Ruído de estratégia arquitetural: Trata-se do padrão de tolerância a falhas implementado na infraestrutura para assegurar resiliência, e não de uma medição numérica de conformidade aos acordos de nível de serviço."
      }
    ]
  },
  {
    "id": 16,
    "objetivo": "Avaliar o overhead de coordenação e a previsibilidade de entrega na adoção de metodologia ágil escalada",
    "contexto": "Uma seguradora com 8 squads adotou SAFe. Durante o trimestre (Program Increment), a proporção de objetivos de negócio atingidos foi de 91%. A proporção de tempo dos desenvolvedores consumida em alinhamentos e cerimônias de sincronização subiu para 28%. A frequência de liberações em produção passou de quinzenal para deploys diários. A diretoria adquiriu 120 licenças da ferramenta Jira Align ao custo de R$ 90.000.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Percentual de tempo da equipe consumido em cerimônias e reuniões",
        "valor": "28% do tempo útil",
        "justificativa": "Atende pontualmente ao objetivo de medir o 'overhead de coordenação', comprovando o quanto da capacidade humana é drenado em sincronização."
      },
      {
        "categoria": "Processo",
        "nome": "Frequência de liberação em produção (Deployment Frequency)",
        "valor": "De quinzenal para deploys diários",
        "justificativa": "Mede a fluidez e a agilidade do fluxo contínuo de entrega de software entre as múltiplas squads (Métrica DORA de Processo)."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de previsibilidade de entrega de objetivos acordados (PI Predictability)",
        "valor": "91% dos objetivos atingidos",
        "justificativa": "Avalia a consistência de estimativas e a aderência aos compromissos planejados no ciclo escalado da organização."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "120 licenças adquiridas e custo de R$ 90.000 em software Jira Align",
        "motivo": "Ruído de insumo instrumental e financeiro: A compra de licenças é um custo orçamentário relevante para o setor financeiro, mas atua como ruído perante o objetivo central do cenário, que exige mensurar especificamente o overhead de coordenação humana decorrente da sincronização entre as squads (medido pelo consumo de 28% do tempo dos profissionais em reuniões)."
      },
      {
        "item": "'Estrutura com 8 squads alocadas no Program Increment'",
        "motivo": "Ruído de divisão organizacional: Descreve o arranjo departamental e a quantidade de células de desenvolvimento da empresa, dado estático que não mede previsibilidade de entrega nem atesta eficiência do fluxo ágil."
      }
    ]
  },
  {
    "id": 17,
    "objetivo": "Monitorar a elasticidade de infraestrutura e a experiência de compra em pico extremo de tráfego (Black Friday)",
    "contexto": "Um e-commerce de grande porte enfrentou seu maior evento de vendas. O autoscaling escalou a frota de 20 para 110 servidores dinamicamente. O tempo médio de finalização do checkout na aplicação web foi de 1,8 segundo sob carga. A taxa de abandono de carrinho associada a erros ou lentidão da página foi de 3,2%. A equipe de operações consumiu R$ 62.000 adicionais em largura de banda (CDN) e servidores durante as 48 horas do evento.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Gasto financeiro adicional com capacidade elástica e CDN no pico",
        "valor": "R$ 62.000 em 48h",
        "justificativa": "Quantifica o recurso financeiro extraordinário injetado para sustentar a infraestrutura diante da explosão de tráfego."
      },
      {
        "categoria": "Produto",
        "nome": "Tempo de carregamento e resposta da etapa de checkout",
        "valor": "1,8 segundo",
        "justificativa": "Avalia o desempenho e a velocidade técnica da aplicação sob o estresse de requisições simultâneas."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de abandono de sessão motivada por falhas técnicas",
        "valor": "3,2%",
        "justificativa": "Mede a qualidade da experiência do usuário no momento crítico de conversão do software (Comportamento e retenção no Produto)."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Frota de instâncias escalando dinamicamente de 20 para 110 servidores",
        "motivo": "Ruído de resposta operacional do mecanismo elástico: A oscilação na quantidade de nós é a ação de automação do autoscaler para suportar a carga de acessos; a métrica consolidada que expressa o consumo de Recursos no evento é a despesa financeira extraordinária incorrida (R$ 62.000), e não a contagem flutuante de máquinas virtuais."
      },
      {
        "item": "'Evento comercial com duração de 48 horas'",
        "motivo": "Ruído de delimitação temporal de negócio: Refere-se à janela comercial da campanha de Black Friday no varejo, e não a uma medição de desempenho técnico da aplicação ou de comportamento do consumidor no sistema."
      }
    ]
  },
  {
    "id": 18,
    "objetivo": "Avaliar o impacto de uma camada Backend-for-Frontend (BFF) na eficiência de rede e consumo de bateria mobile",
    "contexto": "Um aplicativo de transporte substituiu chamadas diretas a múltiplos serviços por uma camada BFF intermediária. O número de requisições HTTP disparadas pelo dispositivo por minuto caiu de 45 para 6. A taxa de drenagem de bateria por hora de uso do app caiu de 8% para 3,5%. O tempo gasto pelos desenvolvedores mobile depurando problemas de rede reduziu em 60%. A camada BFF foi implementada em Node.js rodando em containers serverless com orçamento mensal fixo de R$ 1.800.",
    "metricas_alvo": [
      {
        "categoria": "Processo",
        "nome": "Tempo dedicado pela equipe na resolução e depuração de falhas de rede",
        "valor": "Redução de 60%",
        "justificativa": "Mede a eliminação de atrito e o ganho de agilidade na manutenção e no fluxo de desenvolvimento da squad mobile."
      },
      {
        "categoria": "Produto",
        "nome": "Volume de requisições disparadas por sessão pelo app (Payload/Rede)",
        "valor": "Redução de 45 para 6 requisições/min",
        "justificativa": "Mede a eficiência de comunicação e arquitetura técnica do próprio aplicativo nos aparelhos dos usuários."
      },
      {
        "categoria": "Produto",
        "nome": "Taxa de consumo energético / bateria nos dispositivos clientes",
        "valor": "Queda de 8% para 3,5% por hora",
        "justificativa": "Atributo de qualidade intrínseca do software instalado no smartphone (eficiência de recursos de hardware do cliente)."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "Orçamento mensal fixo de R$ 1.800 em containers serverless",
        "motivo": "Ruído financeiro de baixo impacto comparativo: Métrica financeira de Recursos com valor marginal, desprovida de poder explicativo para responder ao objetivo do cenário, cujo propósito é verificar o ganho de eficiência no hardware do dispositivo do cliente (tráfego de rede e consumo de bateria) e a redução do retrabalho da squad de desenvolvimento mobile."
      },
      {
        "item": "'Implementação em Node.js rodando sobre serverless'",
        "motivo": "Ruído de escolha de linguagem e runtime: Identifica a stack tecnológica e o paradigma de execução adotado na arquitetura intermediária, não constituindo um indicador quantitativo mensurável de desempenho."
      }
    ]
  },
  {
    "id": 19,
    "objetivo": "Auditar a prontidão do software e o tempo de conformidade legal perante os direitos dos titulares (LGPD)",
    "contexto": "Uma plataforma de saúde implementou rotinas para atender às exigências de exclusão e portabilidade de dados. O tempo médio transcorrido para anonimizar completamente o prontuário de um paciente após solicitação caiu de 14 dias para 3 horas. A proporção de pedidos de titulares atendidos dentro do prazo legal de 15 dias atingiu 99,4%. A equipe técnica dedicou 210 horas no trimestre implementando criptografia ponta a ponta. O encarregado de dados (DPO) realizou 4 auditorias e o banco de dados armazena 4,5 TB de registros confidenciais.",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Horas de trabalho dedicadas pela equipe na implementação de segurança",
        "valor": "210 horas no trimestre",
        "justificativa": "Quantifica o esforço humano bruto (recurso de mão de obra) direcionado especificamente para viabilizar as rotinas de conformidade."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de cumprimento do prazo legal nas solicitações de titulares",
        "valor": "99,4% dentro do prazo legal",
        "justificativa": "Avalia a maturidade, a consistência operacional e a fluidez do fluxo de atendimento a exigências regulatórias (Processo)."
      },
      {
        "categoria": "Produto",
        "nome": "Tempo de processamento técnico do comando de anonimização no sistema",
        "valor": "Redução para 3 horas",
        "justificativa": "Mede a performance e a eficácia de uma funcionalidade específica construída dentro do software de saúde."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "4,5 TB de registros confidenciais armazenados no banco de dados",
        "motivo": "Ruído de volumetria física de dados em repouso: Quantifica o tamanho ocupado pelo banco de dados em disco, mas não avalia se o software possui rotinas ágeis para atender aos direitos dos pacientes nem se os prazos legais de conformidade estão sendo honrados pela organização."
      },
      {
        "item": "4 auditorias formais realizadas pelo encarregado de dados (DPO)",
        "motivo": "Ruído de fiscalização e governança administrativa: Contabiliza ações pontuais de controle e governança interna, não sendo uma métrica contínua do fluxo operacional do software nem da eficácia das rotinas de privacidade."
      }
    ]
  },
  {
    "id": 20,
    "objetivo": "Avaliar a eficiência financeira por transação de negócio e a eliminação de capacidade ociosa (FinOps)",
    "contexto": "Uma instituição financeira implementou práticas de FinOps para otimizar custos em ambientes de homologação e produção. O custo computacional médio por transação financeira processada com sucesso caiu de R$ 0,08 para R$ 0,02. O percentual de instâncias de nuvem ociosas desligadas automaticamente fora do expediente atingiu 94%. O time utilizou 3 ferramentas analíticas de faturamento em nuvem e registrou economia consolidada de R$ 120.000 no ano. A equipe trabalhou 140 horas revisando políticas de dimensionamento (rightsizers).",
    "metricas_alvo": [
      {
        "categoria": "Recursos",
        "nome": "Economia financeira líquida consolidada na operação de nuvem",
        "valor": "R$ 120.000 / ano",
        "justificativa": "Mede o retorno econômico direto e a redução do consumo de recursos financeiros na manutenção da infraestrutura."
      },
      {
        "categoria": "Processo",
        "nome": "Taxa de desligamento automatizado de capacidade ociosa fora de expediente",
        "valor": "94% de instâncias ociosas desligadas",
        "justificativa": "Avalia a eficiência do processo e das rotinas automatizadas de governança e sustentabilidade da infraestrutura da organização."
      },
      {
        "categoria": "Produto",
        "nome": "Custo unitário de processamento por transação de software executada",
        "valor": "Redução de R$ 0,08 para R$ 0,02",
        "justificativa": "Mede a eficiência arquitetural e algorítmica do software construído, calculando o consumo de máquina exigido para entregar uma unidade de valor transacional."
      }
    ],
    "ruidos_cenario": [
      {
        "item": "140 horas trabalhadas na revisão de políticas de dimensionamento",
        "motivo": "Ruído de esforço de análise humana preliminar: Mensura o tempo pontual gasto pela equipe em levantamentos e discussões de dimensionamento, sendo amplamente superado pelo resultado econômico contínuo e recorrente atingido (economia financeira consolidada de R$ 120.000 ao ano na operação)."
      },
      {
        "item": "3 ferramentas analíticas de faturamento em nuvem utilizadas",
        "motivo": "Ruído de instrumentação analítica: A contagem de softwares de apoio adotados para auditoria é um dado de inventário de ferramentas auxiliares, não constituindo medida de eficiência financeira por transação nem de desativação de capacidade ociosa de servidores."
      }
    ]
  }
];
