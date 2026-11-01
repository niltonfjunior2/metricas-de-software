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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
