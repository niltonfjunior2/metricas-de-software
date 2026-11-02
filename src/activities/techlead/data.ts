export interface MetricBaseline {
  nome: string;
  valor: string;
  dimensao: 'Recursos' | 'Processo' | 'Produto';
  justificativa: string;
}

export interface Phase1Data {
  periodo: string;
  contexto: string;
  metricas: MetricBaseline[];
  diagnostico_inicial: string;
}

export interface ComparativeRow {
  metrica: string;
  col1: string;
  col2: string;
  var: string;
  dimensao: 'Recursos' | 'Processo' | 'Produto';
  status_var: 'danger' | 'positive' | 'neutral';
}

export interface Phase2Data {
  periodo: string;
  dilema_texto: string;
  colunas_tabela: string[];
  tabela_comparativa: ComparativeRow[];
}

export interface Phase3Data {
  enunciado: string;
  perguntas: string[];
}

export interface RuidoCenario {
  item: string;
  motivo: string;
}

export interface ProjectedRow {
  metrica: string;
  anterior: string;
  projetado: string;
  impacto: string;
  dimensao: 'Recursos' | 'Processo' | 'Produto';
}

export interface PostActionPanel {
  titulo: string;
  conclusao: string;
  tabela: ProjectedRow[];
}

export interface Phase4Data {
  diagnostico_causa_efeito: string;
  acao_tatica: string;
  acao_estrategica: string;
  metrica_oculta: string;
  nova_metrica_proposta: string;
  argumento_executivo?: string;
  ruidos_cenario: RuidoCenario[];
  painel_pos_acao: PostActionPanel;
}

export interface TechLeadCase {
  id: number;
  titulo: string;
  nivel: string;
  fase1_cenario_inicial: Phase1Data;
  fase2_dilema: Phase2Data;
  fase3_desafio: Phase3Data;
  fase4_resolucao: Phase4Data;
}

export const techLeadCasesData: TechLeadCase[] = [
  {
    "id": 1,
    "titulo": "Gestão de Armazéns: O Colapso do Corte de Gastos em Testes",
    "nivel": "Nível 1 • Fundamental: Causa e Efeito Direta",
    "fase1_cenario_inicial": {
      "periodo": "Mês 1 (Setembro) - Linha de Base (Baseline)",
      "contexto": "Você acabou de assumir como Tech Lead responsável pelo sistema de gestão de armazéns da empresa. O gerente de projeto lhe entrega o painel de métricas consolidado de Setembro para sua primeira avaliação técnica de saúde.",
      "metricas": [
        {
          "nome": "Custo com infraestrutura de testes",
          "valor": "R$ 10.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto para manter servidores e ambientes de teste funcionando."
        },
        {
          "nome": "Taxa de aprovação em testes de regressão",
          "valor": "98%",
          "dimensao": "Processo",
          "justificativa": "Avalia a eficácia dos testes automáticos em garantir que o código novo não quebre o que já funcionava."
        },
        {
          "nome": "Funcionalidades entregues no prazo",
          "valor": "90%",
          "dimensao": "Processo",
          "justificativa": "Mede o ritmo e a pontualidade da equipe de desenvolvimento nas entregas acordadas."
        },
        {
          "nome": "Número de falhas críticas em produção",
          "valor": "2 falhas",
          "dimensao": "Produto",
          "justificativa": "Reflete a estabilidade e a qualidade real do software em uso pelos operadores do armazém."
        },
        {
          "nome": "Horas-homem totais da equipe",
          "valor": "640 horas",
          "dimensao": "Recursos",
          "justificativa": "Mede o esforço humano total (tempo trabalhado pelos desenvolvedores) no mês."
        }
      ],
      "diagnostico_inicial": "Situação Controlada e Saudável: A equipe trabalha dentro da jornada normal (~4 desenvolvedores), os testes automáticos funcionam bem (98% de aprovação), 90% das entregas são pontuais e apenas 2 falhas pontuais atingiram a produção, o que é um nível aceitável."
    },
    "fase2_dilema": {
      "periodo": "Mês 2 (Outubro) - O Dilema da Diretoria",
      "dilema_texto": "A diretoria executiva impôs duas metas imediatas sem consultar a equipe técnica: 1) Cortar o orçamento de testes pela metade (R$ 5.000) para economizar; 2) Dobrar a quantidade de funções entregues para acelerar o negócio. Ao término de Outubro, o novo painel comparativo é consolidado.",
      "tabela_comparativa": [
        {
          "metrica": "Custo com infraestrutura de testes",
          "col1": "R$ 10.000",
          "col2": "R$ 5.000",
          "var": "-50%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Taxa de aprovação em testes de regressão",
          "col1": "98%",
          "col2": "65%",
          "var": "-33%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Funcionalidades entregues no prazo",
          "col1": "90%",
          "col2": "95%",
          "var": "+5%",
          "dimensao": "Processo",
          "status_var": "neutral"
        },
        {
          "metrica": "Número de falhas críticas em produção",
          "col1": "2",
          "col2": "15",
          "var": "+650%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Horas-homem totais da equipe",
          "col1": "640h",
          "col2": "820h",
          "var": "+28%",
          "dimensao": "Recursos",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Setembro (Antes)",
        "Outubro (Depois)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A diretoria convocou uma reunião de emergência porque o cliente principal ameaça cancelar o contrato pelas constantes paralisações no armazém. Como Tech Lead, formule:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como o corte em Recursos (testes) prejudicou o Processo e gerou defeitos no Produto final?",
        "2. Proposição de Ação Tática (Curto Prazo): Qual a decisão emergencial que o Tech Lead deve tomar hoje para conter as falhas?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual acordo estrutural deve ser firmado com a diretoria para recuperar a qualidade?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "O corte arbitrário de 50% em Recursos (orçamento para testes) prejudicou o Processo de verificação da qualidade (a taxa de aprovação caiu de 98% para 65%). Como a esteira de testes não conseguiu validar o sistema por completo, muitos defeitos passaram batidos e atingiram o Produto em uso real (as falhas graves em produção dispararam de 2 para 15, um aumento de 650%).",
      "acao_tatica": "Pausa Emergencial nas Publicações (Deploy Freeze): Suspender temporariamente a entrega de novas funções e direcionar toda a equipe técnica para corrigir as 15 falhas graves que estão paralisando o armazém.",
      "acao_estrategica": "Restabelecer integralmente o orçamento de R$ 10.000 para testes (Recursos), definir metas de entrega compatíveis com a capacidade real do time e incluir o indicador de retrabalho no painel gerencial para evitar novos cortes cegos.",
      "metrica_oculta": "O aumento de 180 horas no trabalho da equipe (de 640h para 820h) não representou avanço real: esse tempo foi todo consumido por horas extras para apagar incêndios e corrigir defeitos, custando em folha de pagamento muito mais do que a falsa economia de R$ 5.000.",
      "nova_metrica_proposta": "Percentual de tempo gasto em correções vs. desenvolvimento novo (evidencia com clareza o custo do retrabalho).",
      "ruidos_cenario": [
        {
          "item": "Entregas no prazo subindo ligeiramente de 90% para 95%",
          "motivo": "Ruído de falsa produtividade: entregar no prazo um software cheio de erros não ajuda o negócio; apenas acelera a entrega de problemas para os usuários."
        },
        {
          "item": "Exigência de acelerar e cortar gastos ao mesmo tempo",
          "motivo": "Ruído de gestão irrealista: não é possível cortar os recursos essenciais e ao mesmo tempo exigir mais rapidez sem que a qualidade do produto desmorone."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado no Mês 3 (Novembro) - Pós-Intervenção do Tech Lead",
        "tabela": [
          {
            "metrica": "Custo com infraestrutura de testes",
            "anterior": "R$ 5.000",
            "projetado": "R$ 10.000",
            "impacto": "Restaurado (+100%)",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Taxa de aprovação em testes de regressão",
            "anterior": "65%",
            "projetado": "97%",
            "impacto": "Proteção restabelecida (+49%)",
            "dimensao": "Processo"
          },
          {
            "metrica": "Funcionalidades entregues no prazo",
            "anterior": "95%",
            "projetado": "85%",
            "impacto": "Foco temporário em estabilidade",
            "dimensao": "Processo"
          },
          {
            "metrica": "Número de falhas críticas em produção",
            "anterior": "15",
            "projetado": "1",
            "impacto": "Queda drástica de 93%",
            "dimensao": "Produto"
          },
          {
            "metrica": "Horas-homem totais da equipe",
            "anterior": "820h",
            "projetado": "650h",
            "impacto": "Fim das horas extras (-21%)",
            "dimensao": "Recursos"
          }
        ],
        "conclusao": "Ao recuperar o investimento em Recursos (testes), o Processo voltou a filtrar os erros, reduzindo os defeitos graves no Produto em 93% e eliminando a sobrecarga de horas extras da equipe."
      }
    }
  },
  {
    "id": 2,
    "titulo": "Automação de CI/CD: A Conquista do Deploy Diário e a Gestão da Velocidade",
    "nivel": "Nível 1 • Fundamental: Causa e Efeito Direta",
    "fase1_cenario_inicial": {
      "periodo": "Mês 1 (Janeiro) - Antes da Automação de CI/CD",
      "contexto": "Você assumiu a liderança técnica da plataforma de pagamentos. As publicações em produção ocorriam a cada 15 dias, de forma manual nas madrugadas, frequentemente gerando incidentes e cansaço no time. Você propôs um ciclo inicial de automação da esteira de integração e entrega contínua (CI/CD).",
      "metricas": [
        {
          "nome": "Tempo para colocar em produção (Lead Time)",
          "valor": "14 dias",
          "dimensao": "Processo",
          "justificativa": "Mede o tempo total decorrido desde o commit no código até a funcionalidade estar rodando em produção."
        },
        {
          "nome": "Horas gastas em deploys manuais por mês",
          "valor": "32 horas",
          "dimensao": "Recursos",
          "justificativa": "Mede o esforço e dedicação de desenvolvedores consumidos exclusivamente na rotina de publicação manual."
        },
        {
          "nome": "Taxa de falhas na publicação (Change Failure Rate)",
          "valor": "30%",
          "dimensao": "Processo",
          "justificativa": "Percentual de publicações que provocaram incidentes ou precisaram de rollback imediato."
        },
        {
          "nome": "Incidentes graves pós-deploy",
          "valor": "5 por mês",
          "dimensao": "Produto",
          "justificativa": "Contabiliza falhas funcionais que afetaram diretamente a experiência dos usuários em produção."
        }
      ],
      "diagnostico_inicial": "O fluxo de entrega é lento, caro em horas humanas e instável. A lentidão das entregas atrasa o feedback do negócio e sobrecarrega a equipe com deploys estressantes."
    },
    "fase2_dilema": {
      "periodo": "Mês 3 (Março) - O Salto da Automação e a Euforia da Gestão",
      "dilema_texto": "Após dois meses implementando testes automatizados na esteira e deploys em um clique, os indicadores melhoraram espetacularmente. O Lead Time caiu para 2 horas e os incidentes despencaram. Diante desse sucesso estrondoso, a gerência de produto ficou empolgada e concluiu: 'Se agora podemos publicar todo dia sem falhas, vamos triplicar a meta de novas funcionalidades e eliminar o tempo reservado para refatoração e manutenção da esteira!'.",
      "colunas_tabela": [
        "Métrica",
        "Antes (Jan)",
        "Hoje (Mar)",
        "Variação",
        "Dimensão"
      ],
      "tabela_comparativa": [
        {
          "metrica": "Tempo para colocar em produção (Lead Time)",
          "col1": "14 dias",
          "col2": "2 horas",
          "var": "-99%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Frequência de deploys",
          "col1": "2 por mês",
          "col2": "22 por mês (diário)",
          "var": "+1000%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Horas em deploys manuais por mês",
          "col1": "32 horas",
          "col2": "1 hora",
          "var": "-97%",
          "dimensao": "Recursos",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de falha nas publicações",
          "col1": "30%",
          "col2": "4%",
          "var": "-87%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de build e execução de testes na esteira",
          "col1": "N/A",
          "col2": "18 min",
          "var": "Novo",
          "dimensao": "Recursos",
          "status_var": "neutral"
        }
      ]
    },
    "fase3_desafio": {
      "enunciado": "Como Tech Lead, você comemora o sucesso da automação, mas percebe o risco iminente de 'overfitting' e degradação futura se o time aceitar acelerar desenfreadamente sem manter a saúde da esteira. Reflita sobre as decisões:",
      "perguntas": [
        "Como demonstrar para a diretoria que a esteira de CI/CD é um produto interno que exige manutenção contínua e não apenas um facilitador pontual?",
        "Qual é o risco de triplicar o volume de entregas sem acompanhar a estabilidade e a cobertura dos novos testes automáticos criados?",
        "Que métrica de contra-peso deve ser monitorada para garantir que o tempo de execução da esteira (build time) não comece a inflar e travar o time no futuro?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A automação de testes e deploys gerou ganhos exponenciais de velocidade e estabilidade. No entanto, o sucesso gerou a falsa impressão de que a velocidade de entrega é infinita. Se o time parar de manter os testes e otimizar os scripts de CI/CD, a esteira ficará lenta (testes instáveis/flaky tests), os deploys voltarão a falhar e o ganho será totalmente perdido.",
      "acao_tatica": "Estabelecer uma cota protegida de 15% a 20% da capacidade da sprint dedicada à saúde da engenharia: manutenção de testes automatizados, atualização de dependências e monitoramento de testes instáveis (flaky tests).",
      "acao_estrategica": "Institucionalizar o pipeline de CI/CD como 'Golden Path' oficial da organização, definindo tempos máximos aceitáveis de execução de esteira (ex.: build e testes em menos de 15 minutos) e critérios rigorosos de aceitação contínua.",
      "metrica_oculta": "Taxa de testes instáveis (Flaky Tests Rate) e tempo de fila/execução da esteira de CI/CD, indicadores que antecipam a degradação da esteira antes que os deploys falhem.",
      "nova_metrica_proposta": "Tempo de Execução do Pipeline de CI/CD (Pipeline Duration) e Taxa de Testes Intermitentes (Flaky Tests Rate).",
      "argumento_executivo": "'O deploy diário é como uma rodovia de alta velocidade: ela só permite trafegar rápido e em segurança porque há manutenção constante no asfalto. Se cortarmos o tempo de manutenção da esteira para empurrar mais carros na pista, em três meses teremos acidentes e a estrada voltará a ficar engarrafada.'",
      "ruidos_cenario": [
        {
          "item": "Exigência de triplicar funcionalidades imediatamente",
          "motivo": "Ignora que a nova velocidade depende de manter o código modular e a esteira estável; sobrecarga imediata degrada os próprios testes que viabilizaram o ganho."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Projeção de Sustentabilidade da Automação (6 Meses)",
        "conclusao": "Com a governança ativa da esteira de CI/CD, a velocidade de entrega se consolida como padrão permanente da empresa, o tempo de build permanece controlado e a taxa de falha se estabiliza abaixo de 3%.",
        "tabela": [
          {
            "metrica": "Lead Time para Mudanças",
            "anterior": "2 horas",
            "projetado": "1,5 hora",
            "impacto": "Consolidado em regime diário",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo de Execução da Esteira",
            "anterior": "18 min",
            "projetado": "12 min",
            "impacto": "Otimizado com paralelização de testes",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Taxa de Falha em Produção",
            "anterior": "4%",
            "projetado": "2%",
            "impacto": "Qualidade mantida em nível World-Class",
            "dimensao": "Processo"
          }
        ]
      }
    }
  },
  {
    "id": 3,
    "titulo": "Checkout Expresso: Experimentação Científica e Validação A/B",
    "nivel": "Nível 2 • Fundamental: Validação de Hipótese e Tomada de Decisão Positiva",
    "fase1_cenario_inicial": {
      "periodo": "Linha de Base: Checkout Padrão em 5 Etapas (Grupo A)",
      "contexto": "Um e-commerce de alto tráfego opera com um funil de compras tradicional em 5 etapas (carrinho, identificação, entrega, pagamento e confirmação). A equipe suspeita que tantas etapas cansam os clientes e causam desistência.",
      "metricas": [
        {
          "nome": "Custo de infraestrutura por transação",
          "valor": "R$ 0,02",
          "dimensao": "Recursos",
          "justificativa": "Mede quanto custa em servidores de nuvem processar cada compra de um cliente."
        },
        {
          "nome": "Tempo médio do fluxo de compra",
          "valor": "3 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede o tempo que o cliente gasta preenchendo formulários e telas até pagar."
        },
        {
          "nome": "Taxa de sucesso na transação",
          "valor": "99,5%",
          "dimensao": "Produto",
          "justificativa": "Mede se a comunicação com os cartões e bancos ocorre sem falhas técnicas."
        },
        {
          "nome": "Taxa de abandono de carrinho",
          "valor": "40%",
          "dimensao": "Produto",
          "justificativa": "Mede quantos clientes desistem antes de concluir o pagamento."
        }
      ],
      "diagnostico_inicial": "Situação Funcional mas Subótima: O sistema é estável e barato para operar, mas perde 40% das vendas porque o processo de compra é longo e cansativo."
    },
    "fase2_dilema": {
      "periodo": "O Experimento: Teste Comparativo (A/B) com 10% dos Clientes",
      "dilema_texto": "A equipe desenvolveu o Checkout Expresso (compra em etapa única) e liberou para 10% dos compradores durante 30 dias. Havia receio de que a tela nova pudesse dar erros no pagamento ou aumentar custos de servidor. Os resultados consolidados chegaram para sua decisão.",
      "tabela_comparativa": [
        {
          "metrica": "Custo de infraestrutura por transação",
          "col1": "R$ 0,02",
          "col2": "R$ 0,02",
          "var": "0% (Estável)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Tempo médio do fluxo de compra",
          "col1": "3 min",
          "col2": "45 seg",
          "var": "-75%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de sucesso na transação",
          "col1": "99,5%",
          "col2": "99,6%",
          "var": "+0,1%",
          "dimensao": "Produto",
          "status_var": "neutral"
        },
        {
          "metrica": "Taxa de abandono de carrinho",
          "col1": "40%",
          "col2": "15%",
          "var": "-25% (Absoluto)",
          "dimensao": "Produto",
          "status_var": "positive"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Grupo A (Padrão)",
        "Grupo B (Expresso)",
        "Variação Líquida",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "Diante dos dados do teste comparativo, a diretoria pergunta se a nova solução deve ser descartada, mantida em teste ou liberada para todos. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a redução no tempo do Processo melhorou os resultados do Produto sem gastar mais Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): Qual é o plano seguro para migrar todos os usuários para o novo checkout?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Como a empresa deve aproveitar esse resultado para continuar melhorando o sistema?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A simplificação da tela reduziu o tempo de Processo em 75% (de 3 minutos para apenas 45 segundos). Essa melhora na facilidade de uso do Produto eliminou barreiras para o cliente, fazendo o abandono despencar de 40% para 15% (um ganho de 25 pontos percentuais em vendas concluídas), mantendo o gasto com Recursos de servidores perfeitamente estável (R$ 0,02 por venda).",
      "acao_tatica": "Liberação Gradual para Todos (Rollout Progressivo): Ativar o Checkout Expresso para 50% dos clientes na primeira semana e para 100% na segunda semana, mantendo a tela antiga apenas como plano B temporário em caso de imprevisto.",
      "acao_estrategica": "Alocar Recursos (programadores e designers) para criar uma equipe focada na melhoria da facilidade de compra, aplicando testes comparativos semelhantes em outras áreas da loja virtual (como a barra de busca e a vitrine de produtos).",
      "metrica_oculta": "A estabilidade da taxa de sucesso de pagamento (99,6%) comprova que agilizar a tela não causou sobrecarga nos servidores nem erros com os bancos parceiros.",
      "nova_metrica_proposta": "Faturamento Adicional Estimado (volume de dinheiro a mais que a loja faturou apenas por ter menos desistências de compra).",
      "ruidos_cenario": [
        {
          "item": "Pequena variação de 99,5% para 99,6% no pagamento",
          "motivo": "Ruído de oscilação comum: mostra que tudo continua seguro, mas o fator determinante do sucesso foi a grande redução na desistência dos clientes."
        },
        {
          "item": "Amostragem em 10% dos clientes",
          "motivo": "Critério de segurança do teste: testar com uma pequena parcela antes de liberar para todos é uma boa prática para evitar riscos, não um problema de desempenho."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Migração de 100% dos Clientes",
        "tabela": [
          {
            "metrica": "Custo de infraestrutura por transação",
            "anterior": "R$ 0,02",
            "projetado": "R$ 0,02",
            "impacto": "Custo mantido baixo",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo médio do fluxo de compra",
            "anterior": "3 min",
            "projetado": "45 seg",
            "impacto": "Experiência ágil mantida (-75%)",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de sucesso na transação",
            "anterior": "99,5%",
            "projetado": "99,6%",
            "impacto": "Pagamentos totalmente confiáveis",
            "dimensao": "Produto"
          },
          {
            "metrica": "Taxa de abandono de carrinho",
            "anterior": "40%",
            "projetado": "14,8%",
            "impacto": "Ganho permanente de 25,2%",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A liberação da tela simplificada para todos os clientes aumentou as vendas finalizadas, mantendo o custo de servidores baixo e as transações perfeitamente seguras."
      }
    }
  },
  {
    "id": 4,
    "titulo": "FinOps & Nuvem: O Dividendo da Otimização em Microsserviços",
    "nivel": "Nível 1 • Fundamental: Causa e Efeito Direta",
    "fase1_cenario_inicial": {
      "periodo": "Mês 1 (Abril) - Diagnóstico de Desperdício na Nuvem",
      "contexto": "A fatura mensal da nuvem (AWS) da empresa atingiu a marca de R$ 85.000/mês, com os servidores de banco de dados e pods de Kubernetes operando com picos constantes de CPU em 90%. O tempo de resposta para os clientes (latência P99) batia 1.800ms em horários de pico. Você assumiu como Tech Lead com o desafio de sanear o consumo sem degradar o serviço.",
      "metricas": [
        {
          "nome": "Custo mensal de infraestrutura na nuvem",
          "valor": "R$ 85.000",
          "dimensao": "Recursos",
          "justificativa": "Valor total pago mensalmente ao provedor de nuvem para hospedar bancos de dados, servidores e tráfego de rede."
        },
        {
          "nome": "Latência P99 das APIs (tempo de resposta)",
          "valor": "1.800 ms",
          "dimensao": "Produto",
          "justificativa": "Mede o tempo que 99% das requisições mais lentas demoram para responder aos clientes."
        },
        {
          "nome": "Consumo médio de CPU nos bancos de dados",
          "valor": "88%",
          "dimensao": "Recursos",
          "justificativa": "Percentual de capacidade de processamento consumida em consultas ao banco."
        },
        {
          "nome": "Requisições com erro 504 (Gateway Timeout)",
          "valor": "2,8%",
          "dimensao": "Produto",
          "justificativa": "Requisições que travaram e expiraram antes de retornar uma resposta ao usuário."
        }
      ],
      "diagnostico_inicial": "O sistema sofre com ineficiência arquitetural grave: consultas de banco sem índices adequados (N+1 queries) e ausência de cache forçam a máquina a trabalhar no limite, inflando a fatura financeira."
    },
    "fase2_dilema": {
      "periodo": "Mês 3 (Junho) - O Resultado da Otimização e o Conflito com o Financeiro",
      "dilema_texto": "Você liderou uma força-tarefa de três semanas de profiling técnico: adicionou índices estratégicos no banco, configurou cache distribuído em Redis para leituras repetitivas e redimensionou os clusters (rightsizing). O resultado foi impressionante: o custo caiu para R$ 29.500/mês e a latência despencou para 120ms. Porém, a diretoria financeira comemorou e enviou um memorando: 'Excelente! Como vocês reduziram a conta em R$ 55.000, estamos reduzindo o orçamento do departamento de tecnologia exatamente nesse valor e congelando novos treinamentos!'.",
      "colunas_tabela": [
        "Métrica",
        "Antes (Abr)",
        "Hoje (Jun)",
        "Variação",
        "Dimensão"
      ],
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal de infraestrutura de nuvem",
          "col1": "R$ 85.000",
          "col2": "R$ 29.500",
          "var": "-65%",
          "dimensao": "Recursos",
          "status_var": "positive"
        },
        {
          "metrica": "Latência P99 das APIs",
          "col1": "1.800 ms",
          "col2": "120 ms",
          "var": "-93%",
          "dimensao": "Produto",
          "status_var": "positive"
        },
        {
          "metrica": "Consumo médio de CPU no banco",
          "col1": "88%",
          "col2": "24%",
          "var": "-73%",
          "dimensao": "Recursos",
          "status_var": "positive"
        },
        {
          "metrica": "Requisições com timeout (erro 504)",
          "col1": "2,8%",
          "col2": "0,02%",
          "var": "-99%",
          "dimensao": "Produto",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de acerto do cache (Cache Hit Ratio)",
          "col1": "0%",
          "col2": "91%",
          "var": "Novo",
          "dimensao": "Processo",
          "status_var": "positive"
        }
      ]
    },
    "fase3_desafio": {
      "enunciado": "Diante de um caso exemplar de sucesso técnico e financeiro (FinOps), como Tech Lead você precisa defender a sustentabilidade do ecossistema e evitar que a vitória se torne uma punição orçamentária:",
      "perguntas": [
        "Como apresentar o cálculo de Custo por Transação (Unit Economics) para provar que a economia gerada foi fruto de engenharia e não de sorte?",
        "De que forma negociar com o CFO para que uma fração da economia (ex.: 20%) seja reinvestida em ferramentas de observabilidade e capacitação da equipe?",
        "Quais alertas preventivos devem ser criados para que novas consultas mal otimizadas em futuras sprints não façam a conta da nuvem explodir novamente?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A otimização gerou mais de meio milhão de reais em economia anualizada e multiplicou a velocidade do sistema por 15. Contudo, se a empresa cortar o orçamento de tecnologia pelo valor exato da economia obtida, os desenvolvedores serão desincentivados a otimizar códigos no futuro, e a falta de ferramentas de observabilidade fará a ineficiência retornar silenciosamente conforme o tráfego crescer.",
      "acao_tatica": "Implementar testes automatizados de performance e limites de consultas (query limits) nos pull requests, além de alertas de orçamento (AWS Budgets) que avisam o time sempre que um microsserviço ultrapassar o custo esperado.",
      "acao_estrategica": "Pactuar um acordo de FinOps corporativo: transformar 25% da economia recorrente em verba dedicada para modernização tecnológica, certificações da equipe e contratação de ferramentas profissionais de monitoramento APM (ex.: Datadog/Grafana).",
      "metrica_oculta": "Custo Médio de Infraestrutura por Transação de Usuário (Unit Cost), métrica que comprova que o sistema agora suporta 10x mais clientes com o mesmo dinheiro.",
      "nova_metrica_proposta": "Custo por Transação Ativa (Unit Cost per Transaction) e Taxa de Invalidação de Cache.",
      "argumento_executivo": "'Nossa otimização gerou mais de meio milhão de reais em economia direta por ano. Reinvestir 20% desse ganho em ferramentas de monitoramento garante que esse valor fique protegido nos próximos anos, permitindo que a empresa cresça 300% em clientes sem precisar gastar um único centavo a mais em servidores.'",
      "ruidos_cenario": [
        {
          "item": "Tentativa de confiscar 100% da economia técnica",
          "motivo": "Trata a eficiência como evento pontual e elimina a capacidade da engenharia de manter o sistema escalável para o próximo ciclo de crescimento."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Projeção de Eficiência e Escala Sustentável (12 Meses)",
        "conclusao": "Com a cultura de FinOps ativa e observabilidade implementada, o custo unitário por transação cai pela metade mesmo com o tráfego de clientes dobrando no final do ano.",
        "tabela": [
          {
            "metrica": "Custo Unitário por 10.000 Requisições",
            "anterior": "R$ 4,25",
            "projetado": "R$ 0,85",
            "impacto": "Redução estrutural de custo operacional",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Capacidade Máxima Suportada (Req/s)",
            "anterior": "450 req/s",
            "projetado": "3.500 req/s",
            "impacto": "Margem de crescimento sem saturação",
            "dimensao": "Produto"
          },
          {
            "metrica": "Disponibilidade da Aplicação (SLA)",
            "anterior": "98,5%",
            "projetado": "99,95%",
            "impacto": "Zero quedas por sobrecarga de banco",
            "dimensao": "Produto"
          }
        ]
      }
    }
  },
  {
    "id": 5,
    "titulo": "Benchmarking Interno: O Custo Invisível da Ausência de Processo",
    "nivel": "Nível 3 • Intermediário: Desmistificando o Custo do Rigor Técnico",
    "fase1_cenario_inicial": {
      "periodo": "Diagnóstico de Governança: Equipe Alfa vs. Equipe Gama",
      "contexto": "Você assumiu a liderança técnica e auditou duas equipes com o mesmo orçamento financeiro: Equipe Alfa (faz revisão de código por colegas e testes automáticos) e Equipe Gama (não faz testes obrigatórios nem revisão formal). A diretoria acreditava que Gama era mais rápida por não perder tempo com burocracias de qualidade.",
      "metricas": [
        {
          "nome": "Custo total mensal da equipe",
          "valor": "R$ 50.000 (Alfa e Gama)",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto em salários e computadores de cada time."
        },
        {
          "nome": "Horas gastas em retrabalho/correção",
          "valor": "Alfa: 20h | Gama: 120h",
          "dimensao": "Recursos",
          "justificativa": "Mede o tempo da equipe jogado fora para consertar erros que ela mesma cometeu."
        },
        {
          "nome": "Percentual de entregas no prazo",
          "valor": "Alfa: 95% | Gama: 90%",
          "dimensao": "Processo",
          "justificativa": "Mede a pontualidade e a previsibilidade das entregas de cada equipe."
        },
        {
          "nome": "Taxa de falhas operacionais em produção",
          "valor": "Alfa: 0,1% | Gama: 4,5%",
          "dimensao": "Produto",
          "justificativa": "Mede a qualidade e a solidez do código quando chega aos usuários."
        }
      ],
      "diagnostico_inicial": "Paradoxo Aparente: As equipes custam exatamente o mesmo valor e ambas entregam no prazo, mas a qualidade do software e as horas perdidas em retrabalho são extremamente desiguais."
    },
    "fase2_dilema": {
      "periodo": "O Confronto dos Dados de Engenharia",
      "dilema_texto": "A diretoria pretendia mandar a Equipe Alfa parar de fazer testes para economizar tempo. Você reuniu os dados consolidados das duas equipes para provar perante a diretoria que a qualidade técnica na verdade poupa tempo.",
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal da equipe (Folha + Ferramentas)",
          "col1": "R$ 50.000",
          "col2": "R$ 50.000",
          "var": "0% (Empatado)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Horas gastas em retrabalho e correções",
          "col1": "20h (5% do mês)",
          "col2": "120h (30% do mês)",
          "var": "+500% em Gama",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Percentual de entregas no prazo acordado",
          "col1": "95%",
          "col2": "90%",
          "var": "+5% em Alfa",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de falhas operacionais em produção",
          "col1": "0,1%",
          "col2": "4,5%",
          "var": "45x pior em Gama",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Equipe Alfa (Com Testes)",
        "Equipe Gama (Sem Testes)",
        "Resultado Comparativo",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "Utilize os dados práticos para desmistificar a crença de que testes e revisões atrasam projetos. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a disciplina de Processo da Equipe Alfa poupa Recursos humanos e protege o Produto?",
        "2. Proposição de Ação Tática (Curto Prazo): Como ajudar os desenvolvedores de Gama a entender na prática os benefícios dos testes?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual regra de qualidade deve se tornar padrão para toda a empresa?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A falta de disciplina de Processo na Equipe Gama (sem testes automáticos e sem revisão do código por outros colegas) gerou um Produto frágil (45 vezes mais defeitos em produção). Esse código quebrado drenou os Recursos humanos da própria equipe em retrabalho (120 horas jogadas fora consertando problemas), tornando o time menos pontual do que Alfa (90% contra 95%), pelo mesmo custo financeiro.",
      "acao_tatica": "Trabalho em Dupla para Troca de Experiência (Pareamento): Mostrar os dados de retrabalho para a Equipe Gama e colocar profissionais experientes de Alfa para ensinar na prática como escrever testes úteis e revisar código em conjunto.",
      "acao_estrategica": "Instituir um Padrão Mínimo de Qualidade para toda a empresa: exigir que todo código passe por testes e revisão antes de ir ao ar, reservando 10% da jornada dos desenvolvedores para capacitação contínua.",
      "metrica_oculta": "Mesmo com o mesmo salário (R$ 50 mil), a Equipe Alfa ganha 100 horas úteis a mais no mês para criar novas funções, enquanto a Equipe Gama perde quase um terço do seu tempo apenas consertando os próprios erros.",
      "nova_metrica_proposta": "Taxa de Erros que Escapam para Produção (Defect Escape Rate) - percentual de defeitos que só foram encontrados pelos clientes em vez de serem pegos pelos testes da equipe.",
      "ruidos_cenario": [
        {
          "item": "Equipe Alfa cuida de módulo importante e Gama de módulo simples",
          "motivo": "Ruído de justificativa: mesmo telas simples causam prejuízo e perda de tempo da equipe quando falham com frequência."
        },
        {
          "item": "Custo de R$ 50.000 idêntico entre os times",
          "motivo": "Variável de controle do estudo: serve para provar que a diferença de resultado está na disciplina do trabalho, e não na quantidade de dinheiro gasto."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 60 Dias Pós-Padronização na Equipe Gama",
        "tabela": [
          {
            "metrica": "Custo mensal da squad",
            "anterior": "R$ 50.000",
            "projetado": "R$ 50.000",
            "impacto": "Custo inalterado",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Horas gastas em retrabalho (Gama)",
            "anterior": "120h",
            "projetado": "35h",
            "impacto": "Economia de 85 horas úteis (-70%)",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Percentual de entregas no prazo (Gama)",
            "anterior": "90%",
            "projetado": "96%",
            "impacto": "Pontualidade recuperada (+6%)",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de falhas em produção (Gama)",
            "anterior": "4,5%",
            "projetado": "0,3%",
            "impacto": "Queda drástica de 93%",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A adoção de testes e revisões reduziu o retrabalho em 70%, liberando 85 horas mensais para a equipe focar em novas entregas com qualidade."
      }
    }
  },
  {
    "id": 6,
    "titulo": "Modernização de Legado: O Resgate do Monolito via Strangler Pattern",
    "nivel": "Nível 2 • Intermediário: Métricas Ocultas e Efeitos Colaterais",
    "fase1_cenario_inicial": {
      "periodo": "Mês 1 (Julho) - O Ponto de Asfixia do Sistema Monolítico",
      "contexto": "Você assumiu como Tech Lead de um sistema legado de faturamento com 12 anos de existência. O código possuía arquivos com mais de 7.000 linhas, complexidade ciclomática média de 45 e tempo de compilação/teste local de 45 minutos. Qualquer alteração exigia 'rezar para não quebrar outra parte', e novos desenvolvedores levavam 4 meses para conseguir fazer a primeira entrega sozinhos.",
      "metricas": [
        {
          "nome": "Complexidade Ciclomática média dos módulos centrais",
          "valor": "45",
          "dimensao": "Produto",
          "justificativa": "Mede a quantidade de caminhos independentes e estruturas de decisão; acima de 15 já é considerado de alto risco."
        },
        {
          "nome": "Tempo de integração de novos desenvolvedores (Onboarding)",
          "valor": "90 dias",
          "dimensao": "Recursos",
          "justificativa": "Tempo decorrido até um novo contratado conseguir entregar um pull request sem assistência direta de um sênior."
        },
        {
          "nome": "Taxa de regressão de bugs (bugs que reabrem)",
          "valor": "38%",
          "dimensao": "Processo",
          "justificativa": "Percentual de alterações que quebram comportamentos pré-existentes do sistema legado."
        },
        {
          "nome": "Tempo para construir e testar localmente",
          "valor": "45 minutos",
          "dimensao": "Recursos",
          "justificativa": "Tempo que o desenvolvedor perde esperando o código compilar a cada alteração."
        }
      ],
      "diagnostico_inicial": "O débito técnico acumulado sufocou a capacidade de evolução do produto. A complexidade do monolito tornou as manutenções perigosas, demoradas e causadoras de medo no time."
    },
    "fase2_dilema": {
      "periodo": "Mês 4 (Outubro) - O Avanço da Migração e o Impulso de Parar no Meio",
      "dilema_texto": "Em vez de tentar reescrever tudo do zero, você aplicou a estratégia padrão do mercado: o Padrão Estrangulador (Strangler Fig Pattern). Você isolou o módulo de cálculo de impostos em um serviço moderno, limpo e testado com microsserviço dedicado e APIs bem documentadas. A complexidade caiu para 6, o onboarding do novo módulo caiu para 15 dias e os bugs sumiram. Vendo esse resultado excelente, a diretoria de operações sugeriu: 'O novo serviço está perfeito e o faturamento voltou a ser estável! Vamos suspender a migração dos outros módulos legados para focar 100% em lançar novas campanhas comerciais!'.",
      "colunas_tabela": [
        "Métrica",
        "Antes (Jul)",
        "Hoje (Out)",
        "Variação",
        "Dimensão"
      ],
      "tabela_comparativa": [
        {
          "metrica": "Complexidade ciclomática média (módulos modernizados)",
          "col1": "45",
          "col2": "6",
          "var": "-86%",
          "dimensao": "Produto",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de Onboarding de novos desenvolvedores",
          "col1": "90 dias",
          "col2": "15 dias",
          "var": "-83%",
          "dimensao": "Recursos",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de defeitos reabertos no módulo",
          "col1": "38%",
          "col2": "2%",
          "var": "-94%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de execução de testes locais",
          "col1": "45 min",
          "col2": "3 min",
          "var": "-93%",
          "dimensao": "Recursos",
          "status_var": "positive"
        },
        {
          "metrica": "Percentual do sistema total modernizado",
          "col1": "0%",
          "col2": "28%",
          "var": "Em progresso",
          "dimensao": "Produto",
          "status_var": "neutral"
        }
      ]
    },
    "fase3_desafio": {
      "enunciado": "Parar a modernização de um sistema legado após o primeiro sucesso é uma das maiores armadilhas da Engenharia de Software. Como Tech Lead, guie a estratégia:",
      "perguntas": [
        "Quais problemas de sustentação ocorrem quando um time é obrigado a manter para sempre dois ecossistemas paralelos (o legado antigo e o novo serviço moderno)?",
        "Como usar os dados de produtividade conquistados no primeiro módulo para demonstrar o valor de continuar a migração dos módulos restantes?",
        "Que indicador deve ser monitorado para evitar que novos débitos técnicos sejam introduzidos sorrateiramente no serviço recém-criado?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "O sucesso do primeiro módulo provou a eficácia da modernização. Porém, congelar o projeto com 28% do código modernizado cria a pior situação possível: 'arquitetura de duas cabeças', onde o time gasta o dobro de esforço mantendo integrações complexas entre o velho e o novo. O ganho de velocidade no novo módulo logo será anulado pelo atrito de sincronização com o restante do monolito.",
      "acao_tatica": "Definir um roadmap contínuo de migração com metas trimestrais de percentual de desacoplamento do monolito (ex.: modernizar mais 15% do código a cada trimestre sem parar as features).",
      "acao_estrategica": "Instituir portões de qualidade automatizados (Quality Gates com SonarQube/linter): nenhuma linha de código novo pode ser adicionada ao módulo legado antigo; todas as novas regras de negócio devem nascer nos serviços modernos desacoplados.",
      "metrica_oculta": "Custo de Context Switching e Manutenção Dupla: o tempo que a equipe perde fazendo pontes manuais de dados entre o banco antigo e as APIs modernas.",
      "nova_metrica_proposta": "Percentual de Código em Arquitetura Alvo (% Modernized Codebase) e Índice de Acoplamento Aferente/Eferente.",
      "argumento_executivo": "'Concluímos com sucesso a fase mais difícil: provamos que a nova arquitetura funciona, é 10 vezes mais rápida e quase livre de bugs. Parar agora nos deixaria com o custo de manter dois sistemas diferentes. Continuar modernizando 1 módulo a cada dois meses pagará o investimento ao reduzir nosso custo de contratação e entrega pela metade nos próximos anos.'",
      "ruidos_cenario": [
        {
          "item": "Pressão para abandonar a modernização com apenas 28% concluído",
          "motivo": "Ilusão de economia que gera custo oculto permanente de manutenção de arquiteturas duplicadas e incompatíveis."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Projeção do Ciclo Completo de Estrangulamento do Monolito (18 Meses)",
        "conclusao": "Com a continuidade da estratégia, o monolito é 85% aposentado, o tempo de entrega de features complexas cai para 3 dias e a taxa de falhas atinge níveis mínimos históricos.",
        "tabela": [
          {
            "metrica": "Percentual na Arquitetura Alvo",
            "anterior": "28%",
            "projetado": "85%",
            "impacto": "Quase extinção dos componentes legados",
            "dimensao": "Produto"
          },
          {
            "metrica": "Lead Time de Novas Features",
            "anterior": "28 dias",
            "projetado": "3 dias",
            "impacto": "Time ágil e com autonomia real",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de Rotatividade da Equipe (Turnover)",
            "anterior": "35%/ano",
            "projetado": "8%/ano",
            "impacto": "Fim da frustração e cansaço com o legado",
            "dimensao": "Recursos"
          }
        ]
      }
    }
  },
  {
    "id": 7,
    "titulo": "Microsserviços sob Pressão: A Ilusão da Frequência de Deploy",
    "nivel": "Nível 4 • Intermediário: A Ilusão de Produtividade vs. Degradação Distribuída",
    "fase1_cenario_inicial": {
      "periodo": "Arquitetura Centralizada e Estável (Linha de Base)",
      "contexto": "Um banco digital operava sobre um sistema único centralizado. Embora o aplicativo funcionasse sem erros para os clientes, a compilação no computador dos programadores demorava 25 minutos e ocorriam apenas 2 publicações por semana, o que a diretoria achava lento.",
      "metricas": [
        {
          "nome": "Fatura mensal de rede/telemetria",
          "valor": "R$ 4.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto em tráfego de dados e comunicação entre servidores."
        },
        {
          "nome": "Tempo de compilação e teste no servidor",
          "valor": "25 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede quanto tempo os desenvolvedores esperam para saber se o código novo está pronto para publicação."
        },
        {
          "nome": "Frequência de publicações em produção",
          "valor": "2 por semana",
          "dimensao": "Processo",
          "justificativa": "Mede quantas vezes por semana novas versões do sistema vão ao ar para os clientes."
        },
        {
          "nome": "Tempo de resposta da consulta de saldo",
          "valor": "350ms",
          "dimensao": "Produto",
          "justificativa": "Mede a velocidade percebida pelo correntista ao abrir o aplicativo (350 milissegundos)."
        },
        {
          "nome": "Taxa de telas travadas por erro de resposta",
          "valor": "0,05%",
          "dimensao": "Produto",
          "justificativa": "Mede a confiabilidade: percentual de vezes que o app trava por falta de resposta do servidor."
        }
      ],
      "diagnostico_inicial": "Sistema Estável mas de Ritmo Lento: A experiência do correntista era veloz e sem falhas, mas a demora para gerar versões travava a rotina interna dos programadores."
    },
    "fase2_dilema": {
      "periodo": "A Mudança: Divisão em 18 Serviços Independentes",
      "dilema_texto": "Para agilizar o trabalho, o sistema foi fatiado em 18 pequenos serviços. A diretoria comemorou que agora são feitas 14 publicações por semana, mas o suporte a clientes começou a receber milhares de reclamações de telas congeladas e falhas de saldo no app.",
      "tabela_comparativa": [
        {
          "metrica": "Fatura mensal de tráfego de rede entre servidores",
          "col1": "R$ 4.000",
          "col2": "R$ 21.000",
          "var": "+425%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Frequência de publicações em produção",
          "col1": "2 / semana",
          "col2": "14 / semana",
          "var": "+600%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de compilação e testes",
          "col1": "25 min",
          "col2": "4 min",
          "var": "-84%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de resposta da consulta de saldo",
          "col1": "350ms",
          "col2": "2.800ms",
          "var": "+700%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Taxa de telas travadas por falta de resposta",
          "col1": "0,05%",
          "col2": "4,8%",
          "var": "+9.500%",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Sistema Único (Antes)",
        "18 Serviços (Depois)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A liderança quer entender por que o aplicativo dos clientes está travando se a equipe está publicando código mais rápido do que nunca. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a aceleração de publicações no Processo acabou criando um Produto mais lento e encarecendo os Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): O que fazer imediatamente hoje para evitar que o cliente fique com a tela travada esperando saldo?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual mudança na comunicação entre os serviços resolverá o problema de forma definitiva?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A facilidade de compilar mais rápido (-84% do tempo) incentivou uma esteira de publicações apressadas que colocou no ar serviços com chamadas dependentes em cadeia (um serviço chama outro, que chama outro, e todos ficam esperando). Isso quadruplicou os Recursos gastos com rede (+425%) e multiplicou a lentidão do Produto por 8 (de 350ms para 2,8s), fazendo quase 5% dos clientes sofrerem com telas congeladas.",
      "acao_tatica": "Instalar Travas de Proteção Automática (Circuit Breaker) e Armazenamento Rápido (Cache): Se um serviço demorar para responder, exibir instantaneamente o último saldo consultado guardado na memória, impedindo que o aplicativo do cliente fique congelado.",
      "acao_estrategica": "Desacoplar a comunicação entre os serviços: em vez de fazer um serviço esperar o outro na mesma hora (chamada direta), fazer com que eles troquem mensagens em segundo plano e mantenham cópias prontas das informações mais consultadas.",
      "metrica_oculta": "A alta frequência de 14 publicações por semana tornou-se uma métrica de vaidade: o time comemorava publicar mais vezes, mas na prática estava apenas colocando no ar alterações que pioravam o congestionamento do aplicativo.",
      "nova_metrica_proposta": "Quantidade de Chamadas em Sequência por Ação (mede quantos serviços precisam ser consultados para responder a um único toque do cliente no aplicativo).",
      "ruidos_cenario": [
        {
          "item": "Tempo de compilação caindo para 4 minutos",
          "motivo": "Ruído interno: muito bom para o dia a dia dos programadores, mas sem utilidade se o aplicativo que chega aos clientes finais estiver travando."
        },
        {
          "item": "Quantidade de 18 serviços",
          "motivo": "Decisão de organização técnica: ter mais serviços não é sinônimo de modernidade se a comunicação entre eles for desorganizada."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Implantação de Proteções e Armazenamento em Memória",
        "tabela": [
          {
            "metrica": "Fatura mensal de tráfego de rede",
            "anterior": "R$ 21.000",
            "projetado": "R$ 7.500",
            "impacto": "Queda de 64% no tráfego desnecessário",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Frequência de publicações em produção",
            "anterior": "14 / semana",
            "projetado": "10 / semana",
            "impacto": "Cadência sustentável com testes seguros",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo de compilação e testes",
            "anterior": "4 min",
            "projetado": "5 min",
            "impacto": "Pequeno acréscimo para testes de proteção",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo de resposta da consulta de saldo",
            "anterior": "2.800ms",
            "projetado": "420ms",
            "impacto": "Redução drástica de 85% na lentidão",
            "dimensao": "Produto"
          },
          {
            "metrica": "Taxa de telas travadas por erro de resposta",
            "anterior": "4,8%",
            "projetado": "0,08%",
            "impacto": "Confiabilidade restaurada",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A organização da comunicação entre serviços reduziu a lentidão em 85% e cortou R$ 13.500 em gastos de rede desperdiçados."
      }
    }
  },
  {
    "id": 8,
    "titulo": "Qualidade Proativa: A Transição Vitoriosa para o Shift-Left Testing",
    "nivel": "Nível 2 • Intermediário: Métricas Ocultas e Efeitos Colaterais",
    "fase1_cenario_inicial": {
      "periodo": "Mês 1 (Setembro) - A Rotina Reativa de Encontrar Bugs Tarde Demais",
      "contexto": "No seu squad de crédito bancário, 80% dos defeitos eram descobertos na fase final de homologação ou diretamente pelos clientes em produção. O ciclo era cansativo: desenvolvedores codificavam sem testes unitários, jogavam a versão para os analistas de QA, estes encontravam 40 bugs, e o código voltava para correção em um pingue-pongue de semanas. O custo para corrigir cada defeito era altíssimo.",
      "metricas": [
        {
          "nome": "Defeitos encontrados na homologação/produção",
          "valor": "82%",
          "dimensao": "Processo",
          "justificativa": "Percentual de bugs descobertos apenas nas últimas fases do ciclo ou por usuários reais."
        },
        {
          "nome": "Custo médio de correção por defeito",
          "valor": "R$ 3.400",
          "dimensao": "Recursos",
          "justificativa": "Mede o valor monetário das horas de retrabalho, testes adicionais e impacto operacional do bug."
        },
        {
          "nome": "Tempo médio de ciclo de testes manuais de QA",
          "valor": "9 dias",
          "dimensao": "Processo",
          "justificativa": "Dias que uma funcionalidade fica parada na fila aguardando validação manual dos analistas."
        },
        {
          "nome": "Cobertura de testes automatizados de unidade",
          "valor": "12%",
          "dimensao": "Produto",
          "justificativa": "Volume de código protegido por testes automáticos executados antes do envio."
        }
      ],
      "diagnostico_inicial": "Processo clássico 'Shift-Right' com feedback tardio. O time utiliza a equipe de testes manuais como escudo final, tornando as entregas arrastadas, caras e com alto desgaste entre as pessoas."
    },
    "fase2_dilema": {
      "periodo": "Mês 4 (Dezembro) - A Consolidação do Shift-Left e a Tentação do Relaxamento",
      "dilema_texto": "Você liderou uma profunda transformação cultural: introduziu testes de unidade no início do desenvolvimento (TDD/Shift-Left), testes estáticos de segurança (SAST) pré-commit e testes de contrato entre APIs. A dinâmica mudou por completo: 88% dos problemas agora são detectados e corrigidos pelo próprio desenvolvedor em sua máquina em minutos. O custo de correção despencou e o tempo de QA caiu para 1 dia. Com tudo calmo e funcionando em harmonia, alguns desenvolvedores começaram a propor: 'Como nosso código nunca mais deu bug em homologação, podemos desativar a exigência de testes de unidade nas entregas mais simples para ganharmos ainda mais tempo!'.",
      "colunas_tabela": [
        "Métrica",
        "Antes (Set)",
        "Hoje (Dez)",
        "Variação",
        "Dimensão"
      ],
      "tabela_comparativa": [
        {
          "metrica": "Defeitos detectados em desenvolvimento (Shift-Left)",
          "col1": "18%",
          "col2": "88%",
          "var": "+388%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Custo médio de correção de defeito",
          "col1": "R$ 3.400",
          "col2": "R$ 420",
          "var": "-87%",
          "dimensao": "Recursos",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de ciclo em validação de QA",
          "col1": "9 dias",
          "col2": "1 dia",
          "var": "-88%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Incidentes em produção por sprint",
          "col1": "14",
          "col2": "1",
          "var": "-92%",
          "dimensao": "Produto",
          "status_var": "positive"
        },
        {
          "metrica": "Eficácia dos testes de mutação (Mutation Score)",
          "col1": "Não medido",
          "col2": "78%",
          "var": "Novo",
          "dimensao": "Produto",
          "status_var": "positive"
        }
      ]
    },
    "fase3_desafio": {
      "enunciado": "O sucesso na qualidade cria a falsa sensação de que a disciplina pode ser dispensada. Como Tech Lead, guie o time para consolidar a cultura de excelência:",
      "perguntas": [
        "Por que abrir exceções para 'entregas simples' sem testes unitários costuma ser a porta de entrada para a reincidência de débitos técnicos?",
        "Como o papel dos analistas de QA evolui de 'testadores manuais de tela' para 'engenheiros de qualidade' que constroem testes de ponta a ponta e segurança?",
        "Que métricas de robustez de testes (como testes de mutação) impedem que o time escreva testes 'de faz-de-conta' apenas para bater metas burocráticas?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "O Shift-Left transferiu a detecção de defeitos para o momento mais barato e rápido do ciclo. Contudo, a estabilidade gerou uma ilusão de segurança no time, fazendo surgir a tentação de relaxar nos padrões de teste. Se as exceções forem aceitas, a cobertura cairá gradualmente, o código voltará a quebrar em produção e o ciclo virtuoso será destruído.",
      "acao_tatica": "Manter os Quality Gates automatizados intransponíveis no GitHub/GitLab: pull requests sem cobertura mínima correspondente e sem passar nos testes de mutação não podem ser mesclados, sem exceções manuais.",
      "acao_estrategica": "Reposicionar os profissionais de QA como Especialistas em Garantia de Qualidade (Quality Advocates/SDET), atuando em testes de carga, testes de resiliência (Chaos Engineering) e testes de segurança da informação.",
      "metrica_oculta": "Cobertura Real de Cenários Críticos vs. Cobertura Sintética de Linhas de Código: testes que passam pelas linhas mas não validam os cálculos de crédito.",
      "nova_metrica_proposta": "Índice de Sobrevivência de Mutantes (Mutation Score) e Densidade de Defeitos por KLOC em Produção.",
      "argumento_executivo": "'Nossa economia de R$ 3.000 por defeito corrigido só existe porque não deixamos o erro passar da máquina do desenvolvedor. Abrir mão dos testes nas tarefas simples é abrir a primeira rachadura na barragem. O teste não é uma burocracia, é o alicerce que nos permitiu entregar 5 vezes mais rápido hoje.'",
      "ruidos_cenario": [
        {
          "item": "Proposta de flexibilizar testes nas 'tarefas menores'",
          "motivo": "Falácia clássica da engenharia: a maioria das quebras graves em produção se origina em pequenas alterações que ninguém achou necessário testar."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Projeção de Maturidade em Garantia de Qualidade (12 Meses)",
        "conclusao": "Com os Quality Gates fixos e a equipe de QA atuando em testes avançados, a densidade de defeitos atinge níveis de classe mundial e a confiança nas entregas atinge 99%.",
        "tabela": [
          {
            "metrica": "Escore de Testes de Mutação",
            "anterior": "78%",
            "projetado": "92%",
            "impacto": "Testes comprovadamente testam as regras de negócio",
            "dimensao": "Produto"
          },
          {
            "metrica": "Defeitos Escapados para Produção",
            "anterior": "1/sprint",
            "projetado": "0,2/sprint",
            "impacto": "Produção blindada e clientes satisfeitos",
            "dimensao": "Processo"
          },
          {
            "metrica": "Retrabalho de Engenharia",
            "anterior": "8%",
            "projetado": "2%",
            "impacto": "Tempo 98% livre para criação de valor real",
            "dimensao": "Recursos"
          }
        ]
      }
    }
  },
  {
    "id": 9,
    "titulo": "FinOps: O Desperdício Silencioso do Autoscaling Desgovernado",
    "nivel": "Nível 5 • Avançado: Eficiência Econômica de Arquitetura em Nuvem",
    "fase1_cenario_inicial": {
      "periodo": "Operação Logística no Trimestre Passado (Linha de Base)",
      "contexto": "Uma startup de logística rastreia encomendas com faturamento saudável. Os servidores em nuvem operavam com contratação automática equilibrada para o volume de 200.000 pacotes/mês.",
      "metricas": [
        {
          "nome": "Custo total mensal em nuvem (servidores)",
          "valor": "R$ 22.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto para manter as máquinas da nuvem ligadas."
        },
        {
          "nome": "Custo computacional por pacote rastreado",
          "valor": "R$ 0,11",
          "dimensao": "Recursos",
          "justificativa": "Mede o custo unitário em tecnologia para processar cada pacote da empresa."
        },
        {
          "nome": "Tempo para ligar um novo servidor em caso de pico",
          "valor": "12 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede a rapidez operacional para disponibilizar novas máquinas quando o tráfego sobe."
        },
        {
          "nome": "Aproveitamento real dos computadores (CPU/RAM)",
          "valor": "55%",
          "dimensao": "Produto",
          "justificativa": "Mede quanto da capacidade dos computadores está sendo realmente utilizada para trabalho útil."
        },
        {
          "nome": "Disponibilidade do sistema de rastreamento",
          "valor": "99,9%",
          "dimensao": "Produto",
          "justificativa": "Mede a confiabilidade: percentual do mês em que o sistema funcionou sem sair do ar."
        }
      ],
      "diagnostico_inicial": "Operação Equilibrada: O custo por pacote era saudável (R$ 0,11) e os computadores tinham um bom nível de aproveitamento (55%), mantendo o site sempre no ar."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Acelerar a Contratação a Qualquer Custo",
      "dilema_texto": "Para suportar um aumento de 20% no envio de pacotes, a equipe anterior alterou as regras automáticas de nuvem para ligar novas máquinas em apenas 3 minutos diante de qualquer pequena oscilação de tráfego. A fatura mensal subiu para R$ 68.200 (+210%), consumindo todo o lucro da empresa.",
      "tabela_comparativa": [
        {
          "metrica": "Custo total mensal em nuvem",
          "col1": "R$ 22.000",
          "col2": "R$ 68.200",
          "var": "+210%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Custo computacional por pacote",
          "col1": "R$ 0,11",
          "col2": "R$ 0,28",
          "var": "+154%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Tempo para ligar novo servidor em picos",
          "col1": "12 min",
          "col2": "3 min",
          "var": "-75%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Aproveitamento real dos computadores",
          "col1": "55%",
          "col2": "14%",
          "var": "-74% (Ocioso)",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Disponibilidade do rastreamento",
          "col1": "99,9%",
          "col2": "99,92%",
          "var": "+0,02%",
          "dimensao": "Produto",
          "status_var": "neutral"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Trimestre Passado",
        "Trimestre Atual",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A diretoria exige reduzir imediatamente a conta da nuvem, mas teme que o sistema caia se cortarem máquinas. Como Tech Lead, formule:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como as regras automáticas mal configuradas deixaram os computadores ociosos e triplicaram os gastos de Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): Como cortar quase metade dos custos sem correr risco de deixar o sistema fora do ar?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual modelo financeiro e técnico de nuvem (FinOps) garantirá economia sustentável?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "Para fazer o Processo ligar servidores muito rápido (-75% do tempo), as regras automáticas foram configuradas com gatilhos excessivamente sensíveis e sem regras de desligamento ágil. Isso criou um Produto com servidores quase vazios (apenas 14% de uso real), triplicando o consumo de Recursos financeiros (+210%) apenas para gerar um ganho imperceptível de 0,02% no tempo no ar.",
      "acao_tatica": "Ajuste Imediato dos Gatilhos de Contratação e Desligamento: Configurar para ligar novos servidores apenas quando o uso passar de 70% da capacidade, desligar máquinas ociosas após 10 minutos sem carga e desligar servidores de teste fora do horário comercial.",
      "acao_estrategica": "Implantar Gestão Financeira de Nuvem (FinOps): contratar planos de longo prazo com desconto para a quantidade de servidores que a empresa usa o ano todo e usar tecnologias que cobram apenas pelos segundos exatos em que cada pacote é processado.",
      "metrica_oculta": "O custo de processar cada pacote subiu 154% (de R$ 0,11 para R$ 0,28), provando que o crescimento da empresa estava ficando mais caro em vez de mais eficiente devido ao desperdício de máquinas ligadas à toa.",
      "nova_metrica_proposta": "Índice de Desperdício em Nuvem (percentual do dinheiro gasto com servidores que ficaram ligados sem processar nada útil).",
      "ruidos_cenario": [
        {
          "item": "Aumento de 99,9% para 99,92% no tempo em que o site ficou no ar",
          "motivo": "Ruído de justificativa: um ganho mínimo de 0,02% não traz benefício prático para o cliente que compense gastar R$ 46.000 a mais por mês."
        },
        {
          "item": "Crescimento de 20% no volume de entregas",
          "motivo": "Dado de negócio: as entregas subiram apenas 20%, o que torna o aumento de 210% na conta de computadores ainda mais injustificável."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 30 Dias Pós-Calibração de Regras de Nuvem",
        "tabela": [
          {
            "metrica": "Custo total mensal em nuvem",
            "anterior": "R$ 68.200",
            "projetado": "R$ 29.500",
            "impacto": "Economia de R$ 38.700 (-56%)",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Custo computacional por pacote",
            "anterior": "R$ 0,28",
            "projetado": "R$ 0,12",
            "impacto": "Custo unitário saudável restabelecido",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo para ligar novo servidor em picos",
            "anterior": "3 min",
            "projetado": "4 min",
            "impacto": "Tempo seguro e equilibrado",
            "dimensao": "Processo"
          },
          {
            "metrica": "Aproveitamento real dos computadores",
            "anterior": "14%",
            "projetado": "62%",
            "impacto": "Fim do desperdício de máquinas ociosas",
            "dimensao": "Produto"
          },
          {
            "metrica": "Disponibilidade do rastreamento",
            "anterior": "99,92%",
            "projetado": "99,91%",
            "impacto": "Alta disponibilidade mantida",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A calibração das regras automáticas cortou 56% da fatura (economia de R$ 38.700/mês) mantendo o sistema em excelentes 99,91% de funcionamento contínuo."
      }
    }
  },
  {
    "id": 10,
    "titulo": "Maturidade DORA: Atingindo o Nível Elite com Governança de SLOs",
    "nivel": "Nível 3 • Avançado: Trade-offs Sistêmicos e Governança",
    "fase1_cenario_inicial": {
      "periodo": "Mês 1 (Outubro) - O Diagnóstico das Métricas DORA",
      "contexto": "Você assumiu como Tech Lead da plataforma core de e-commerce da organização durante a preparação para grandes datas sazonais. A liderança executiva adotou as métricas DORA (DevOps Research and Assessment) para medir o desempenho de engenharia. O time apresentava desempenho mediano: deploys semanais, tempo de recuperação em caso de falha de 12 horas e taxa de falhas em mudanças de 22%.",
      "metricas": [
        {
          "nome": "Frequência de Implantação (Deployment Frequency)",
          "valor": "1 vez por semana",
          "dimensao": "Processo",
          "justificativa": "Métrica DORA que avalia a frequência com que o código chega aos usuários finais."
        },
        {
          "nome": "Tempo de Lead Time para Mudanças (Lead Time for Changes)",
          "valor": "7 dias",
          "dimensao": "Processo",
          "justificativa": "Métrica DORA que mede o tempo entre o primeiro commit e a execução do código em produção."
        },
        {
          "nome": "Tempo Médio para Restauração (Time to Restore Service - MTTR)",
          "valor": "12 horas",
          "dimensao": "Processo",
          "justificativa": "Métrica DORA que mede quanto tempo o time leva para recuperar o sistema quando ocorre uma pane."
        },
        {
          "nome": "Taxa de Falhas em Mudanças (Change Failure Rate - CFR)",
          "valor": "22%",
          "dimensao": "Processo",
          "justificativa": "Métrica DORA que calcula a porcentagem de deploys que exigem hotfix emergencial ou rollback."
        }
      ],
      "diagnostico_inicial": "Desempenho operacional mediano segundo o benchmark DORA. Entregas em lotes grandes aumentam o risco e retardam o tempo de recuperação em caso de incidente."
    },
    "fase2_dilema": {
      "periodo": "Mês 6 (Abril) - Atingimento do Padrão 'Elite' e a Pressão do Negócio",
      "dilema_texto": "Após seis meses implementando observabilidade profunda (OpenTelemetry), rollbacks automatizados (Canary Deployments) e decoupling arquitetural com Feature Flags, o time atingiu a faixa máxima: padrão ELITE em todas as 4 métricas DORA. Múltiplos deploys diários, MTTR de 15 minutos e taxa de falhas abaixo de 4%. Diante disso, a diretoria comercial ficou empolgada: 'Agora que temos o melhor time de engenharia da empresa, queremos lançar 12 integrações de novos parceiros de uma só vez na próxima semana, dispensando os testes de carga para não perder o prazo comercial!'.",
      "colunas_tabela": [
        "Métrica DORA / Engenharia",
        "Antes (Out)",
        "Hoje (Abr)",
        "Status DORA",
        "Dimensão"
      ],
      "tabela_comparativa": [
        {
          "metrica": "Frequência de Deploys",
          "col1": "1x por semana",
          "col2": "5x ao dia",
          "var": "Padrão Elite",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Lead Time for Changes",
          "col1": "7 dias",
          "col2": "45 minutos",
          "var": "Padrão Elite",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Time to Restore Service (MTTR)",
          "col1": "12 horas",
          "col2": "15 minutos",
          "var": "Padrão Elite",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Change Failure Rate (CFR)",
          "col1": "22%",
          "col2": "3,5%",
          "var": "Padrão Elite",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Orçamento de Erro Restante (Error Budget)",
          "col1": "0%",
          "col2": "82%",
          "var": "Seguro",
          "dimensao": "Produto",
          "status_var": "positive"
        }
      ]
    },
    "fase3_desafio": {
      "enunciado": "Estar no nível 'Elite' não significa que o sistema é invulnerável. Como Tech Lead, você deve usar métricas de governança para arbitrar o conflito entre inovação e confiabilidade:",
      "perguntas": [
        "Como utilizar o conceito de 'Orçamento de Erro' (Error Budget derivado de SLOs) como regra objetiva e neutra para frear ou autorizar lançamentos arriscados?",
        "Por que lançar 12 integrações de terceiros de uma única vez viola os princípios fundamentais que levaram o time ao padrão Elite?",
        "Como explicar para a liderança comercial que usar Feature Flags e lançamentos progressivos (Canary) protege as vendas em vez de atrasá-las?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "Atingir o nível Elite do DORA só foi possível porque o time adotou entregas em pequenos lotes e validação automatizada. Lançar 12 integrações pesadas de uma só vez, sem testes de carga, recria instantaneamente o modelo antigo de 'Big Bang Release', com risco real de derrubar a plataforma no momento de maior tráfego e queimar todo o Orçamento de Erro.",
      "acao_tatica": "Adotar lançamento progressivo obrigatório: habilitar os parceiros individualmente atrás de Feature Flags, começando com 5% do tráfego para validar latência e taxas de erro antes de abrir 100%.",
      "acao_estrategica": "Instituir a política contratual de Error Budget: se o consumo do orçamento de erro mensal ultrapassar 50%, todas as novas features de alto risco são pausadas automaticamente até que a confiabilidade seja restabelecida.",
      "metrica_oculta": "Disponibilidade e Latência dos Serviços Terceiros (Dependency Health): falhas externas que poluem as métricas do seu sistema sem terem sido causadas pelo seu código.",
      "nova_metrica_proposta": "Consumo do Orçamento de Erro (Error Budget Burn Rate) e Latência P99 por Parceiro Integrado.",
      "argumento_executivo": "'Nosso time é de elite exatamente porque nunca colocamos todas as fichas em um único lançamento sem rede de segurança. Lançando os parceiros gradualmente com Feature Flags, colocamos as 12 integrações no ar em 3 dias com risco zero de queda nas vendas e mantendo nossa reputação de disponibilidade impecável.'",
      "ruidos_cenario": [
        {
          "item": "Pressão para fazer deploy 'Big Bang' de 12 parceiros",
          "motivo": "Contraria as práticas de engenharia moderna e destrói o isolamento de falhas, tornando impossível identificar qual parceiro gerou lentidão."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Projeção de Governança DORA e Estabilidade em Alta Escala (12 Meses)",
        "conclusao": "Com a gestão de SLOs e Feature Flags, a empresa lança 4 vezes mais integrações comerciais sem registrar um único minuto de indisponibilidade não programada.",
        "tabela": [
          {
            "metrica": "Disponibilidade Geral (SLO)",
            "anterior": "99,5%",
            "projetado": "99,99%",
            "impacto": "Alta confiabilidade e reputação no mercado",
            "dimensao": "Produto"
          },
          {
            "metrica": "Taxa de Reversão Automática (Canary Rollback)",
            "anterior": "Manual",
            "projetado": "< 2 min",
            "impacto": "Zero impacto para mais de 95% dos clientes",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo Médio de Onboarding de Integrações",
            "anterior": "3 semanas",
            "projetado": "2 dias",
            "impacto": "Agilidade de negócio com governança técnica",
            "dimensao": "Recursos"
          }
        ]
      }
    }
  },
  {
    "id": 11,
    "titulo": "DevSecOps: A Bomba-Relógio da Velocidade sem Conformidade",
    "nivel": "Nível 6 • Avançado: Gestão de Risco Operacional e Segurança Crítica",
    "fase1_cenario_inicial": {
      "periodo": "Semestre Passado: Esteira com Portões Rígidos de Segurança",
      "contexto": "Uma fintech de crédito mantinha rotinas estritas de segurança, submetendo todo código a verificações automáticas de vulnerabilidade antes da publicação.",
      "metricas": [
        {
          "nome": "Custo com ferramentas de segurança automatizada",
          "valor": "R$ 30.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto em licenças de softwares que procuram brechas no código."
        },
        {
          "nome": "Tempo médio para aprovação de segurança",
          "valor": "14 horas",
          "dimensao": "Processo",
          "justificativa": "Mede quanto tempo uma alteração fica em análise de segurança até poder ir ao ar."
        },
        {
          "nome": "Taxa de publicações bloqueadas por falhas de segurança",
          "valor": "16%",
          "dimensao": "Processo",
          "justificativa": "Avalia o rigor da esteira em barrar código vulnerável antes que chegue aos clientes."
        },
        {
          "nome": "Vulnerabilidades graves ativas em produção",
          "valor": "1 falha",
          "dimensao": "Produto",
          "justificativa": "Mede a segurança real do sistema contra ataques de invasores."
        },
        {
          "nome": "Tempo médio para consertar falhas conhecidas",
          "valor": "3 dias",
          "dimensao": "Produto",
          "justificativa": "Mede a rapidez da equipe em lançar correções de segurança."
        }
      ],
      "diagnostico_inicial": "Postura Segura mas Esteira Burocrática: O sistema era altamente blindado, mas a demora de 14 horas para aprovar alterações gerava descontentamento na equipe comercial."
    },
    "fase2_dilema": {
      "periodo": "A Mudança: Desativação das Travas Automáticas",
      "dilema_texto": "Para cumprir metas de lançamentos rápidos, a gestão anterior desligou os bloqueios automáticos de segurança para que nada atrasasse as publicações. Agora, uma auditoria do Banco Central emitiu uma notificação formal de inconformidade por brechas graves encontradas no sistema.",
      "tabela_comparativa": [
        {
          "metrica": "Custo com ferramentas de segurança",
          "col1": "R$ 30.000",
          "col2": "R$ 30.000",
          "var": "0% (Estável)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Tempo médio para aprovação de alterações",
          "col1": "14 horas",
          "col2": "2 horas",
          "var": "-85% (Rápido)",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de publicações bloqueadas por segurança",
          "col1": "16%",
          "col2": "0,2%",
          "var": "-98% (Destravado)",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Vulnerabilidades graves em produção",
          "col1": "1",
          "col2": "27",
          "var": "+2.600%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Tempo de exposição a falhas conhecidas",
          "col1": "3 dias",
          "col2": "42 dias",
          "var": "+1.300%",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Com Rigor (Passado)",
        "Sem Travas (Atual)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "O banco corre risco imediato de suspensão de licença financeira pelo órgão regulador. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a eliminação das travas do Processo expôs o Produto a invasões e multas pesadas?",
        "2. Proposição de Ação Tática (Curto Prazo): Como consertar as 27 falhas graves imediatamente sem travar as entregas futuras?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual rotina sustentável de segurança deve ser estabelecida?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "Para acelerar artificialmente o Processo de publicação (-85% no tempo de aprovação), foram desligadas as travas automáticas de segurança (-98% de bloqueios). Isso gerou um Produto desprotegido (27 falhas graves ativas expostas por mais de 40 dias), submetendo a instituição financeira a riscos de invasão, vazamento de dados e sanções graves do Banco Central.",
      "acao_tatica": "Reativar as Travas Automáticas Imediatamente: Configurar a esteira para barrar qualquer publicação que contenha falhas graves de segurança e convocar uma semana com foco total da equipe para corrigir as 27 brechas encontradas.",
      "acao_estrategica": "Formar Referências de Segurança nas Equipes: Treinar desenvolvedores de cada time para apoiar os colegas e incluir ferramentas automáticas que avisam sobre bibliotecas antigas e vulneráveis diretamente no dia a dia da escrita do código.",
      "metrica_oculta": "O dinheiro gasto em ferramentas (R$ 30.000) estava sendo jogado fora: as licenças continuavam pagas, mas seus avisos eram ignorados na pressa de publicar, gerando uma falsa sensação de proteção.",
      "nova_metrica_proposta": "Tempo Médio para Corrigir Falhas Críticas (quantos dias a equipe leva desde a descoberta de uma brecha até a publicação da correção no ar).",
      "ruidos_cenario": [
        {
          "item": "Tempo de aprovação caindo de 14h para 2h",
          "motivo": "Ruído de falsa eficiência: a velocidade foi conquistada simplesmente deixando de verificar se o software era seguro."
        },
        {
          "item": "Custo estável de R$ 30.000 em ferramentas",
          "motivo": "Métrica estática: mostra que comprar ferramentas não tem valor se a equipe não tiver a disciplina de seguir suas orientações."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 30 Dias Pós-Correção das Falhas de Segurança",
        "tabela": [
          {
            "metrica": "Custo com ferramentas de segurança",
            "anterior": "R$ 30.000",
            "projetado": "R$ 30.000",
            "impacto": "Dinheiro aproveitado com eficácia real",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo de aprovação de alterações",
            "anterior": "2 horas",
            "projetado": "4 horas",
            "impacto": "Equilíbrio entre agilidade e proteção",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de publicações bloqueadas por segurança",
            "anterior": "0,2%",
            "projetado": "12%",
            "impacto": "Filtro automático reativado com sucesso",
            "dimensao": "Processo"
          },
          {
            "metrica": "Vulnerabilidades graves em produção",
            "anterior": "27",
            "projetado": "0",
            "impacto": "Risco regulatório e multas eliminados",
            "dimensao": "Produto"
          },
          {
            "metrica": "Tempo de exposição a falhas conhecidas",
            "anterior": "42 dias",
            "projetado": "2 dias",
            "impacto": "Correções ágeis e constantes",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "As 27 brechas foram eliminadas, a esteira voltou a bloquear código inseguro e o tempo para corrigir novas falhas caiu para apenas 2 dias."
      }
    }
  },
  {
    "id": 12,
    "titulo": "A Armadilha do Burnout: A Produtividade que Destrói a Equipe",
    "nivel": "Nível 7 • Avançado: Sustentabilidade do Capital Humano e Conhecimento Tácito",
    "fase1_cenario_inicial": {
      "periodo": "Semestre Passado: Ritmo Sustentável de Desenvolvimento",
      "contexto": "Uma software house de médio porte desenvolvia sistemas com estabilidade, respeitando a jornada normal de trabalho e mantendo seus profissionais experientes na empresa.",
      "metricas": [
        {
          "nome": "Custo mensal com horas extras da equipe",
          "valor": "R$ 4.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto em horas adicionais de trabalho além da jornada normal."
        },
        {
          "nome": "Taxa de rotatividade de funcionários (Turnover)",
          "valor": "4% ao ano",
          "dimensao": "Recursos",
          "justificativa": "Mede quantos programadores pedem demissão da empresa ao longo do ano."
        },
        {
          "nome": "Tempo para treinar e integrar novos desenvolvedores",
          "valor": "15 dias",
          "dimensao": "Processo",
          "justificativa": "Mede a rapidez em capacitar um programador novo até que ele consiga fazer entregas úteis."
        },
        {
          "nome": "Funcionalidades entregues no prazo acordado",
          "valor": "85%",
          "dimensao": "Processo",
          "justificativa": "Mede o cumprimento dos prazos contratuais firmados com os clientes."
        },
        {
          "nome": "Taxa de bugs introduzidos a cada alteração",
          "valor": "2,5%",
          "dimensao": "Produto",
          "justificativa": "Mede a confiabilidade: percentual de alterações que geram novos defeitos no sistema."
        }
      ],
      "diagnostico_inicial": "Equipe Estável e Saudável: O time mantinha baixa rotatividade (4%) e código confiável, embora a liderança comercial cobrasse mais entregas no prazo."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Aceleração sob Pressão e Horas Extras",
      "dilema_texto": "Para cumprir um cronograma de vendas agressivo, a gestão forçou a equipe a fazer horas extras constantes nos últimos dois trimestres. A liderança celebrou: entregamos 98% das tarefas no prazo. Porém, no mês seguinte, os dados de sustentabilidade revelaram o tamanho do prejuízo.",
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal com horas extras",
          "col1": "R$ 4.000",
          "col2": "R$ 28.000",
          "var": "+600%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Rotatividade de funcionários (demissões)",
          "col1": "4%",
          "col2": "32%",
          "var": "+700%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Tempo para treinar novos desenvolvedores",
          "col1": "15 dias",
          "col2": "65 dias",
          "var": "+333%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Entregas concluídas dentro do prazo",
          "col1": "85%",
          "col2": "98%",
          "var": "+13% (Aparente sucesso)",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de novos bugs a cada alteração",
          "col1": "2,5%",
          "col2": "16,8%",
          "var": "+572%",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Semestre Passado",
        "Semestre Atual",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "Os desenvolvedores mais experientes pediram demissão e o sistema começou a quebrar a cada nova atualização. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como o esgotamento dos Recursos humanos desarticulou o Processo e prejudicou o Produto?",
        "2. Proposição de Ação Tática (Curto Prazo): O que fazer imediatamente para conter a saída de talentos e estabilizar a rotina?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Como criar um planejamento de entregas realista e sustentável?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A sobrecarga contínua do Recurso humano (+600% em horas extras) provocou exaustão física e mental (burnout) e a saída de quase um terço do time (32% de demissões). A perda dos profissionais mais antigos destruiu o Processo de transmissão de conhecimento (o tempo de treinamento de novatos subiu de 15 para 65 dias). O resultado foi um Produto frágil e cheio de defeitos (+572% de bugs), mantido por novatos sobrecarregados.",
      "acao_tatica": "Suspender Horas Extras Compulsórias Imediatamente: Estabelecer jornada de trabalho normal, pausar novos compromissos comerciais no próximo mês e colocar desenvolvedores trabalhando em duplas para registrar por escrito o conhecimento dos sistemas.",
      "acao_estrategica": "Planejar Entregas com Base na Capacidade Real do Time: Estimar prazos com base no histórico real de entregas da equipe, evitar iniciar muitas tarefas ao mesmo tempo e atrelar a avaliação dos gestores à retenção e bem-estar dos profissionais.",
      "metrica_oculta": "A comemoração de que 98% dos prazos foram cumpridos foi uma ilusão perigosa: a gestão sacrificou a saúde e o futuro da equipe em troca de um ganho passageiro que quase quebrou a empresa no mês seguinte.",
      "nova_metrica_proposta": "Índice de Saúde e Bem-Estar da Equipe (pesquisa periódica para medir o nível de estresse, satisfação e sobrecarga dos desenvolvedores).",
      "ruidos_cenario": [
        {
          "item": "98% das entregas no prazo",
          "motivo": "Ruído de aparente sucesso: a pontualidade ilusória escondeu o esgotamento dos profissionais e a explosão de defeitos no código."
        },
        {
          "item": "Gasto de R$ 28.000 em horas extras",
          "motivo": "Custo financeiro superficial: esse valor é pequeno se comparado ao prejuízo gigantesco de rescisões, novas contratações e perda de conhecimento crítico da empresa."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 90 Dias Pós-Ajuste de Capacidade Sustentável",
        "tabela": [
          {
            "metrica": "Custo com horas extras",
            "anterior": "R$ 28.000",
            "projetado": "R$ 2.000",
            "impacto": "Jornada saudável restabelecida",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Rotatividade anual de funcionários",
            "anterior": "32%",
            "projetado": "6%",
            "impacto": "Fim da fuga de talentos da empresa",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo para treinar novos programadores",
            "anterior": "65 dias",
            "projetado": "20 dias",
            "impacto": "Documentação clara e apoio mútuo",
            "dimensao": "Processo"
          },
          {
            "metrica": "Entregas concluídas no prazo",
            "anterior": "98%",
            "projetado": "88%",
            "impacto": "Prazos realistas e previsíveis",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de novos bugs por alteração",
            "anterior": "16,8%",
            "projetado": "3,1%",
            "impacto": "Queda drástica de 81% nos erros",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "O retorno a um ritmo sustentável de trabalho reduziu as demissões de 32% para 6% e derrubou as falhas no software em 81%."
      }
    }
  },
  {
    "id": 13,
    "titulo": "O Monolito Asfixiado: O Débito Técnico que Paralisou a Inovação",
    "nivel": "Nível 8 • Mestre: Débito Técnico Estrutural vs. Custo de Oportunidade",
    "fase1_cenario_inicial": {
      "periodo": "Situação Histórica do Sistema Legado (Há 2 Anos)",
      "contexto": "Um sistema central de faturamento atende toda a empresa. Dois anos atrás, o código possuía complexidade moderada e permitia lançar novas regras fiscais em menos de uma semana.",
      "metricas": [
        {
          "nome": "Custo de sustentação do servidor legado",
          "valor": "R$ 15.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto para manter servidores e licenças do sistema antigo funcionando."
        },
        {
          "nome": "Tempo para lançar novas regras fiscais no ar",
          "valor": "6 dias",
          "dimensao": "Processo",
          "justificativa": "Mede a agilidade desde o pedido da mudança até ela estar disponível para uso."
        },
        {
          "nome": "Taxa de retrabalho em testes manuais",
          "valor": "12%",
          "dimensao": "Processo",
          "justificativa": "Mede o tempo perdido quando uma alteração quebra outras partes vizinhas do sistema."
        },
        {
          "nome": "Complexidade do código-fonte (caminhos lógicos)",
          "valor": "8,4",
          "dimensao": "Produto",
          "justificativa": "Mede o grau de emaranhamento do código (quanto menor que 10, mais fácil de entender e manter)."
        },
        {
          "nome": "Dependência entre partes do sistema",
          "valor": "Moderada",
          "dimensao": "Produto",
          "justificativa": "Mede o quanto uma parte do software depende de outras para funcionar."
        }
      ],
      "diagnostico_inicial": "Sistema Maduro e Operacional: O código possuía complexidade aceitável e permitia atender às demandas tributárias com rapidez."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: A Proibição de Mexer no Código que Já Funciona",
      "dilema_texto": "Nos últimos 2 anos, a diretoria vetou qualquer melhoria interna no código sob a justificativa: se está funcionando e faturando, não gastem dinheiro mexendo em código antigo. Agora, o setor comercial alerta que os concorrentes lançam produtos em 3 dias, enquanto o sistema interno exige meses.",
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal do servidor legado",
          "col1": "R$ 15.000",
          "col2": "R$ 16.500",
          "var": "+10% (Estável)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Tempo para lançar novas regras fiscais",
          "col1": "6 dias",
          "col2": "48 dias",
          "var": "+700%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Retrabalho em testes manuais",
          "col1": "12%",
          "col2": "45%",
          "var": "+275%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Complexidade do código-fonte",
          "col1": "8,4",
          "col2": "38,2",
          "var": "+354%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Dependência entre partes do sistema",
          "col1": "Moderada",
          "col2": "Totalmente Emaranhado",
          "var": "Crítico",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Há 2 Anos",
        "Situação Atual",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A empresa está perdendo clientes para concorrentes porque não consegue mais atualizar suas regras fiscais a tempo. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a recusa em manter o código limpo no passado paralisou o Processo e degradou o Produto?",
        "2. Proposição de Ação Tática (Curto Prazo): O que fazer para entregar a próxima regra fiscal obrigatória sem reescrever tudo do zero?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual plano seguro deve substituir gradualmente as partes antigas do sistema?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A recusa em autorizar manutenção preventiva no código durante dois anos fez com que o Produto se tornasse extremamente emaranhado (complexidade saltou de 8,4 para 38,2 e tudo ficou dependente entre si). Como consequência, o Processo de lançar novidades quase parou (o tempo de lançamento subiu de 6 para 48 dias e quase metade dos testes gera retrabalho), porque qualquer mudança quebrava partes vizinhas de surpresa.",
      "acao_tatica": "Blindagem e Separação do Módulo Fiscal: Criar testes automáticos de segurança ao redor do cálculo tributário e começar a construí-lo como um serviço novo e independente, sem mexer no restante do sistema antigo.",
      "acao_estrategica": "Substituição Gradual do Sistema Antigo: Adotar a estratégia de construir módulos novos e independentes ao redor do sistema legado, desativando as partes antigas aos poucos e sem riscos, reservando 20% de cada ciclo para a limpeza contínua de código.",
      "metrica_oculta": "O custo com servidores parecia controlado (R$ 16.500), mas a empresa perdeu milhões em oportunidade de negócio porque demorava quase dois meses para lançar novidades que a concorrência entregava em poucos dias.",
      "nova_metrica_proposta": "Tempo para Lançar uma Mudança Pequena (Lead Time de alterações simples para medir se o código continua fácil ou difícil de mexer).",
      "ruidos_cenario": [
        {
          "item": "O custo de sustentação quase não subiu",
          "motivo": "Ruído financeiro ilusório: a conta de servidores ficou estável, mas a empresa ficou paralisada comercialmente pela demora em lançar novidades."
        },
        {
          "item": "O sistema fatura milhões e não deve ser mexido",
          "motivo": "Ruído cultural: ignorar a manutenção preventiva do código acumula dificuldades até o ponto em que o sistema não consegue mais evoluir."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Separação do Módulo Fiscal",
        "tabela": [
          {
            "metrica": "Custo mensal de sustentação",
            "anterior": "R$ 16.500",
            "projetado": "R$ 18.000",
            "impacto": "Pequeno acréscimo para novo servidor",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo para lançar regras fiscais",
            "anterior": "48 dias",
            "projetado": "9 dias",
            "impacto": "Redução drástica de 81% no tempo",
            "dimensao": "Processo"
          },
          {
            "metrica": "Retrabalho em testes manuais",
            "anterior": "45%",
            "projetado": "15%",
            "impacto": "Queda de 67% nos retrabalhos",
            "dimensao": "Processo"
          },
          {
            "metrica": "Complexidade do código novo",
            "anterior": "38,2",
            "projetado": "7,5",
            "impacto": "Código claro, simples e fácil de manter",
            "dimensao": "Produto"
          },
          {
            "metrica": "Dependência entre partes do sistema",
            "anterior": "Totalmente Emaranhado",
            "projetado": "Módulos Independentes",
            "impacto": "Flexibilidade e segurança conquistadas",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A construção do módulo fiscal de forma independente reduziu o tempo de entrega de 48 para 9 dias e diminuiu o retrabalho em 67%."
      }
    }
  },
  {
    "id": 14,
    "titulo": "SRE e Error Budget: O Conflito entre Inovação Agressiva e Confiabilidade",
    "nivel": "Nível 9 • Mestre: Confiabilidade de Sistemas e Equilíbrio de Risco",
    "fase1_cenario_inicial": {
      "periodo": "Trimestre Passado: Operação em Equilíbrio (Linha de Base)",
      "contexto": "Uma plataforma de pagamentos firmou com seus clientes corporativos o compromisso de manter o sistema funcionando em 99,9% do tempo no mês (o que permite no máximo 43 minutos de instabilidade aceitável ao longo de todo o mês).",
      "metricas": [
        {
          "nome": "Custo mensal com suporte a incidentes",
          "valor": "R$ 12.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto com equipes de plantão para resolver problemas urgentes."
        },
        {
          "nome": "Publicações de novidades por mês",
          "valor": "4 publicações",
          "dimensao": "Processo",
          "justificativa": "Mede o ritmo com que novas funcionalidades são entregues aos clientes."
        },
        {
          "nome": "Tempo de indisponibilidade acumulada no mês",
          "valor": "22 minutos",
          "dimensao": "Produto",
          "justificativa": "Mede quanto tempo o sistema ficou fora do ar no mês (o limite contratual é 43 minutos)."
        },
        {
          "nome": "Margem tolerável de falhas restante (Orçamento)",
          "valor": "49% sobrando",
          "dimensao": "Processo",
          "justificativa": "Percentual da tolerância contratual a falhas que ainda não foi gasta pela equipe."
        },
        {
          "nome": "Disponibilidade real da plataforma",
          "valor": "99,95%",
          "dimensao": "Produto",
          "justificativa": "Percentual do tempo em que os pagamentos funcionaram perfeitamente no mês."
        }
      ],
      "diagnostico_inicial": "Operação Exemplar: A equipe entregava novidades com cadência controlada e utilizou apenas metade da margem permitida de falhas, operando acima do compromisso contratual."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Acelerar Lançamentos Ignorando os Limites",
      "dilema_texto": "Para vencer uma disputa comercial, a diretoria quadruplicou a meta de lançamentos para 16 novidades por mês. Na segunda semana, o limite de falhas aceitáveis foi totalmente esgotado e a plataforma caiu várias vezes, gerando ameaças de processos judiciais de grandes clientes.",
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal com suporte a incidentes",
          "col1": "R$ 12.000",
          "col2": "R$ 48.000",
          "var": "+300%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Publicações de novidades por mês",
          "col1": "4 / mês",
          "col2": "16 / mês",
          "var": "+300%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de indisponibilidade acumulada",
          "col1": "22 min",
          "col2": "185 min",
          "var": "+740%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Margem tolerável de falhas restante",
          "col1": "49% sobrando",
          "col2": "Esgotada (-330%)",
          "var": "Estourada",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Disponibilidade real da plataforma",
          "col1": "99,95%",
          "col2": "99,57%",
          "var": "-0,38% (Abaixo)",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Trimestre Passado",
        "Trimestre Atual",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "O sistema violou o contrato com os clientes e o suporte está sobrecarregado. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a aceleração de publicações no Processo quebrou a estabilidade do Produto e quadruplicou os gastos de Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): O que deve acontecer com as próximas novidades enquanto o sistema estiver instável?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual regra de governança deve ser adotada entre diretoria e engenharia para proteger a estabilidade?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A ambição comercial de acelerar o Processo de lançamentos (+300% de publicações) foi feita sem respeito aos limites de segurança do sistema. A margem aceitável de falhas do mês foi totalmente esgotada nos primeiros 10 dias, resultando em um Produto que ficou mais de 3 horas fora do ar e violou os contratos com os clientes, além de quadruplicar os Recursos gastos com plantões e correções emergenciais.",
      "acao_tatica": "Pausar Novas Funções e Focar em Estabilidade: Como a margem aceitável de pequenas falhas foi estourada, congelar o lançamento de novidades comerciais e direcionar 100% da equipe para consertar a causa das quedas e melhorar o monitoramento até o início do próximo mês.",
      "acao_estrategica": "Formalizar a Política de Orçamento de Falhas com a Diretoria: Estabelecer em contrato interno que, quando o limite de falhas aceitáveis estiver em risco, a equipe tem autorização formal para priorizar qualidade antes de aceitar novas pressões comerciais.",
      "metrica_oculta": "Entregar 16 novidades por mês virou uma meta de vaidade tóxica: a rapidez aparente estava gerando mais cancelamentos de clientes irritados com as quedas do que novos usuários satisfeitos.",
      "nova_metrica_proposta": "Percentual Restante da Margem de Falhas (indicador compartilhado entre gestão e tecnologia para saber quando é seguro acelerar ou quando é hora de pisar no freio).",
      "ruidos_cenario": [
        {
          "item": "16 novas funcionalidades lançadas no mês",
          "motivo": "Ruído de vaidade: quantidade de novidades não compensa a perda de confiança dos clientes gerada pelas constantes quedas do sistema."
        },
        {
          "item": "Clientes continuam usando o sistema apesar das reclamações",
          "motivo": "Ruído de ilusão: clientes empresariais costumam trocar de fornecedor apenas no vencimento do contrato anual, acumulando insatisfação em silêncio."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Adoção da Política de Estabilidade",
        "tabela": [
          {
            "metrica": "Custo mensal com suporte a incidentes",
            "anterior": "R$ 48.000",
            "projetado": "R$ 14.000",
            "impacto": "Economia de R$ 34.000 em horas extras",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Publicações de novidades por mês",
            "anterior": "16 / mês",
            "projetado": "6 / mês",
            "impacto": "Ritmo sustentável e seguro",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo de indisponibilidade acumulada",
            "anterior": "185 min",
            "projetado": "18 min",
            "impacto": "Dentro da meta contratual de 43 min",
            "dimensao": "Produto"
          },
          {
            "metrica": "Margem tolerável de falhas restante",
            "anterior": "Esgotada",
            "projetado": "58% sobrando",
            "impacto": "Margem de segurança restaurada",
            "dimensao": "Processo"
          },
          {
            "metrica": "Disponibilidade real da plataforma",
            "anterior": "99,57%",
            "projetado": "99,96%",
            "impacto": "Confiabilidade recuperada",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "O respeito aos limites de estabilidade eliminou as quedas do sistema e devolveu a plataforma a um patamar confiável de 99,96% de funcionamento contínuo."
      }
    }
  },
  {
    "id": 15,
    "titulo": "Engenharia de Plataforma: Destravando o Atrito Cognitivo e o Tempo de Espera",
    "nivel": "Nível 10 • Mestre: Eficiência Organizacional e Redução de Atrito Cognitivo",
    "fase1_cenario_inicial": {
      "periodo": "Situação Histórica: Equipes Autônomas mas Atoladas em Burocracia",
      "contexto": "Uma corporação de tecnologia possui 12 equipes de produto. Para colocar qualquer sistema novo no ar, os programadores precisavam abrir chamados manuais para a equipe de infraestrutura criar bancos de dados, servidores e permissões de segurança.",
      "metricas": [
        {
          "nome": "Tempo médio de espera em chamados manuais",
          "valor": "8 dias úteis",
          "dimensao": "Processo",
          "justificativa": "Mede quantos dias um programador fica parado esperando outra equipe criar um banco ou servidor."
        },
        {
          "nome": "Novos serviços entregues por mês",
          "valor": "3 serviços",
          "dimensao": "Produto",
          "justificativa": "Mede a velocidade da empresa em colocar novas soluções úteis no ar."
        },
        {
          "nome": "Tempo gasto pelos devs com tarefas de infraestrutura",
          "valor": "35% da jornada",
          "dimensao": "Recursos",
          "justificativa": "Mede o esforço humano dos programadores desperdiçado em burocracias de servidores em vez de programar."
        },
        {
          "nome": "Erros de configuração de segurança por entrega",
          "valor": "4,2 falhas",
          "dimensao": "Produto",
          "justificativa": "Mede a quantidade de configurações esquecidas ou malfeitas em cada publicação manual."
        },
        {
          "nome": "Custo de sustentação da equipe de infraestrutura",
          "valor": "R$ 80.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o dinheiro gasto com analistas dedicados a atender chamados manuais repetitivos."
        }
      ],
      "diagnostico_inicial": "Empresa Travada por Filas: A empresa tem bons programadores, mas o processo cheio de pedidos manuais faz com que todos percam tempo em filas e burocracias."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Aumentar a Equipe ou Automatizar o Processo?",
      "dilema_texto": "A diretoria planejava contratar mais 10 desenvolvedores para tentar acelerar as entregas. Porém, uma análise mais profunda revelou que contratar mais pessoas em um processo cheio de filas apenas aumentaria o congestionamento de pedidos. A liderança técnica propôs automatizar as solicitações.",
      "tabela_comparativa": [
        {
          "metrica": "Tempo médio de espera em chamados manuais",
          "col1": "8 dias úteis",
          "col2": "11 dias úteis",
          "var": "+37% (Pior)",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Novos serviços entregues por mês",
          "col1": "3 / mês",
          "col2": "3 / mês",
          "var": "0% (Empacado)",
          "dimensao": "Produto",
          "status_var": "neutral"
        },
        {
          "metrica": "Tempo gasto com burocracias de servidor",
          "col1": "35% do tempo",
          "col2": "42% do tempo",
          "var": "+20% (Pior)",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Erros de configuração por entrega",
          "col1": "4,2",
          "col2": "5,8",
          "var": "+38%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Custo de analistas para atender chamados",
          "col1": "R$ 80.000",
          "col2": "R$ 110.000",
          "var": "+37%",
          "dimensao": "Recursos",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Situação Anterior",
        "Com Mais Pessoas na Fila",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "Contratar mais pessoas não resolveu e as filas só aumentaram. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Por que as filas e burocracias do Processo travam o Produto e desperdiçam Recursos humanos?",
        "2. Proposição de Ação Tática (Curto Prazo): O que pode ser automatizado imediatamente para os programadores não dependerem de chamados manuais?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Como estruturar uma plataforma interna de autosserviço para a empresa inteira?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "Adicionar mais Recursos humanos (programadores) não adiantou porque o gargalo estava no Processo de atendimento manual (dias de espera em filas para criar servidores e bancos). Como cada pedido dependia de outra equipe, os desenvolvedores perdiam quase metade do tempo parados ou configurando coisas manuais, resultando em um Produto que demorava meses para nascer e vinha com erros de configuração.",
      "acao_tatica": "Criar Modelos Prontos de Autosserviço: Desenvolver receitas prontas e automatizadas para as 3 solicitações mais comuns (criar banco de dados, criar ambiente de testes e configurar publicação), permitindo que os próprios desenvolvedores façam isso em minutos com um clique.",
      "acao_estrategica": "Estruturar uma Equipe de Plataforma Interna: Tratar as ferramentas internas de trabalho como um produto, construindo um portal unificado onde as equipes conseguem tudo o que precisam sem burocracia e com regras de segurança embutidas automaticamente.",
      "metrica_oculta": "Os programadores gastavam quase metade do tempo esperando aprovações manuais ou tentando configurar servidores, o que gerava um desperdício enorme de talento e dinheiro em tarefas que poderiam ser automáticas.",
      "nova_metrica_proposta": "Tempo de Espera em Filas de Chamados (quanto tempo uma demanda fica parada esperando a ação de outra pessoa para poder continuar).",
      "ruidos_cenario": [
        {
          "item": "Contratar mais programadores para tentar acelerar",
          "motivo": "Ruído de capacidade: adicionar mais pessoas a um processo cheio de filas e burocracia apenas cria mais filas e mais atrasos."
        },
        {
          "item": "Segurança exige que tudo seja feito manualmente por um analista",
          "motivo": "Ruído de falsa proteção: aprovações manuais repetitivas viram rotina desatenta, enquanto regras de segurança embutidas no código protegem de verdade."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Implantação do Portal de Autosserviço",
        "tabela": [
          {
            "metrica": "Tempo médio de espera para novos recursos",
            "anterior": "11 dias",
            "projetado": "2 horas",
            "impacto": "Redução drástica de 98% na espera",
            "dimensao": "Processo"
          },
          {
            "metrica": "Novos serviços entregues por mês",
            "anterior": "3 / mês",
            "projetado": "11 / mês",
            "impacto": "Velocidade multiplicada por 3,6x",
            "dimensao": "Produto"
          },
          {
            "metrica": "Tempo gasto com burocracias de servidor",
            "anterior": "42%",
            "projetado": "8%",
            "impacto": "Devs focados 92% do tempo em programar",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Erros de configuração por entrega",
            "anterior": "5,8",
            "projetado": "0,2",
            "impacto": "Modelos padronizados e seguros",
            "dimensao": "Produto"
          },
          {
            "metrica": "Custo de analistas para atender chamados manuais",
            "anterior": "R$ 110.000",
            "projetado": "R$ 55.000",
            "impacto": "Fim do retrabalho manual repetitivo",
            "dimensao": "Recursos"
          }
        ],
        "conclusao": "A criação de modelos prontos de autosserviço reduziu a espera de 11 dias para apenas 2 horas, multiplicando a velocidade de entregas úteis em mais de 3,5 vezes."
      }
    }
  }
];
