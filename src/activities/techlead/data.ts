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
          "justificativa": "Mede o insumo financeiro alocado para manter servidores e ambientes de teste ativos."
        },
        {
          "nome": "Taxa de aprovação em testes de regressão",
          "valor": "98%",
          "dimensao": "Processo",
          "justificativa": "Avalia a robustez do fluxo automatizado de verificação da qualidade do código."
        },
        {
          "nome": "Funcionalidades entregues no prazo",
          "valor": "90%",
          "dimensao": "Processo",
          "justificativa": "Mede a previsibilidade e cadência do fluxo de trabalho da equipe de desenvolvimento."
        },
        {
          "nome": "Número de falhas críticas em produção",
          "valor": "2 falhas",
          "dimensao": "Produto",
          "justificativa": "Reflete a estabilidade e qualidade intrínseca do software em uso pelos operadores do armazém."
        },
        {
          "nome": "Horas-homem totais da equipe",
          "valor": "640 horas",
          "dimensao": "Recursos",
          "justificativa": "Quantifica o insumo humano bruto (esforço da equipe) consumido no mês de trabalho."
        }
      ],
      "diagnostico_inicial": "Situação Controlada e Saudável: A equipe trabalha dentro da jornada nominal (640h para ~4 desenvolvedores), a esteira de validação é sólida (98% de aprovação), 90% das entregas são pontuais e apenas 2 falhas pontuais atingiram a produção, o que é um patamar aceitável para um sistema corporativo ativo."
    },
    "fase2_dilema": {
      "periodo": "Mês 2 (Outubro) - O Dilema da Diretoria",
      "dilema_texto": "A diretoria executiva impôs duas diretrizes imediatas sem consulta técnica: 1) Cortar o orçamento da infraestrutura de testes pela metade (R$ 5.000) para 'conter custos'; 2) Dobrar a meta de funcionalidades entregues para 'acelerar o negócio'. Você alertou sobre o risco iminente, mas as decisões foram mantidas. Ao término de Outubro, o painel comparativo é consolidado.",
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
        "Setembro (Ref.)",
        "Outubro (Atual)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A diretoria convocou uma reunião de emergência porque o cliente principal ameaça rescindir o contrato devido às constantes paralisações no armazém. Como Tech Lead, formule:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como o corte em Recursos impactou o Processo e destruiu o Produto?",
        "2. Proposição de Ação Tática (Curto Prazo): Qual a intervenção imediata para estancar o sangramento operacional hoje?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual decisão estrutural deve ser firmada com a diretoria para restaurar a saúde do projeto?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "O corte arbitrário de 50% em Recursos (infraestrutura de testes) inviabilizou a execução completa da suíte automatizada de validação, derrubando o Processo de homologação (queda de 98% para 65% na aprovação). Esse processo quebrado operou como uma peneira esburacada, permitindo a fuga em massa de defeitos que arruinaram a qualidade do Produto (aumento de 650% nas falhas críticas em produção).",
      "acao_tatica": "Deploy Freeze Imediato: Congelar 100% da entrega de novas funcionalidades (reduzir meta de entrega temporariamente a 0%) e direcionar toda a capacidade técnica da equipe para conter e corrigir os 15 incidentes críticos, restabelecendo a operação do armazém.",
      "acao_estrategica": "Recompor integralmente o orçamento de R$ 10.000 de infraestrutura de testes (Recurso), reajustar metas de cadência a patamares de capacidade real e institucionalizar no painel o indicador de retrabalho para blindar a engenharia contra cortes cegos.",
      "metrica_oculta": "O salto de 180 horas-homem (de 640h para 820h) não gerou avanço real de software: esse esforço foi integralmente desperdiçado em horas extras de sobreaviso para 'apagar incêndios' em produção, custando mais caro em folha salarial do que a 'economia' de R$ 5.000 em testes.",
      "nova_metrica_proposta": "Percentual de horas-homem gastas em manutenção corretiva vs. novo desenvolvimento (evidencia o custo do código defeituoso).",
      "ruidos_cenario": [
        {
          "item": "Cumprimento de entregas subindo ligeiramente de 90% para 95%",
          "motivo": "Ruído de falsa produtividade: O aumento de 5% no cumprimento do prazo mascarou a entrega de software defeituoso; entregar no prazo um código que paralisa o cliente gera prejuízo operacional líquido."
        },
        {
          "item": "'Exigência de acelerar e cortar simultaneamente'",
          "motivo": "Ruído de retórica política da gestão: Viola as leis fundamentais de capacidade produtiva e equilíbrio entre triângulo de ferro (escopo, custo e prazo)."
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
            "impacto": "Blindagem restabelecida (+49%)",
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
        "conclusao": "A recomposição dos Recursos restabeleceu o filtro do Processo, reduzindo as falhas em produção em 93% e eliminando a sobrecarga de horas extras da equipe."
      }
    }
  },
  {
    "id": 2,
    "titulo": "Checkout Expresso: Experimentação Científica e Validação A/B",
    "nivel": "Nível 2 • Fundamental: Validação de Hipótese e Tomada de Decisão Positiva",
    "fase1_cenario_inicial": {
      "periodo": "Linha de Base: Checkout Padrão em 5 Etapas (Grupo A)",
      "contexto": "Um e-commerce de alto tráfego opera com um funil de checkout tradicional estruturado em 5 etapas sequenciais (carrinho, identificação, entrega, pagamento e confirmação). A equipe de produto suspeita que a fricção do fluxo longo afasta compradores.",
      "metricas": [
        {
          "nome": "Custo de infraestrutura por transação",
          "valor": "R$ 0,02",
          "dimensao": "Recursos",
          "justificativa": "Mede o consumo unitário de insumo computacional em nuvem por venda processada."
        },
        {
          "nome": "Tempo médio do fluxo de compra",
          "valor": "3 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede a duração do processo operacional de preenchimento e navegação executado pelo cliente."
        },
        {
          "nome": "Taxa de sucesso na transação",
          "valor": "99,5%",
          "dimensao": "Produto",
          "justificativa": "Atributo de integridade e confiabilidade da comunicação com adquirentes e gateways."
        },
        {
          "nome": "Taxa de abandono de carrinho",
          "valor": "40%",
          "dimensao": "Produto",
          "justificativa": "Mede o comportamento de conversão e eficácia da experiência de compra gerada pelo produto."
        }
      ],
      "diagnostico_inicial": "Situação Funcional mas Subótima: O sistema é tecnicamente estável e barato para operar, mas perde 40% das vendas potenciais por atrito no processo de checkout, indicando uma oportunidade de otimização de produto."
    },
    "fase2_dilema": {
      "periodo": "O Experimento: Teste A/B com 10% da Base Ativa",
      "dilema_texto": "A equipe desenvolveu o 'Checkout Expresso' (fluxo em 1 etapa única) e submeteu 10% dos usuários a um teste A/B rigoroso durante 30 dias. Havia receio de que o carregamento consolidado aumentasse o custo de nuvem ou gerasse falhas transacionais. Os dados consolidados do teste chegaram para sua decisão.",
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
      "enunciado": "Diante da validação empírica do teste A/B, a diretoria pergunta se a nova solução deve ser descartada, mantida em teste ou expandida. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a redução no tempo do Processo alavancou o resultado do Produto sem elevar Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): Qual é o plano de migração imediato da base de usuários?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Como a engenharia deve capitalizar o retorno financeiro comprovado?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A simplificação da interface reduziu o tempo de Processo em 75% (de 3 min para 45s). Esse ganho ergonômico eliminou atritos cognitivos no Produto, provocando uma queda expressiva no abandono de carrinho (de 40% para 15%, um aumento de 25 pontos percentuais em conversão líquida) sem qualquer acréscimo no consumo de Recursos de infraestrutura (R$ 0,02 estável).",
      "acao_tatica": "Rollout Progressivo para 100%: Migrar 50% dos usuários na primeira semana e 100% na segunda semana para o Checkout Expresso, mantendo o checkout tradicional apenas como contingência oculta com desativação em 15 dias.",
      "acao_estrategica": "Expandir o investimento em Recursos (alocar 2 novos desenvolvedores e orçamento de pesquisa) para criar uma squad permanente de Otimização de Conversão (CRO), aplicando testes A/B nas etapas de catálogo e busca.",
      "metrica_oculta": "A manutenção rigorosa da taxa de sucesso de 99,6% comprova que a aceleração da interface não gerou concorrência de concorrência no banco nem falhas nos gateways de pagamento.",
      "nova_metrica_proposta": "GMV Incremental Estimado (Volume bruto de vendas em reais gerado exclusivamente pela redução de abandono).",
      "ruidos_cenario": [
        {
          "item": "Variação de 99,5% para 99,6% na taxa de sucesso",
          "motivo": "Ruído de variação estatística marginal: Indica que o sistema permaneceu estável, mas não é o indicador que justifica a aprovação executiva da nova funcionalidade."
        },
        {
          "item": "Amostragem em 10% da base",
          "motivo": "Parâmetro do desenho metodológico do teste A/B, não um indicador de desempenho operacional."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Migração de 100% da Base",
        "tabela": [
          {
            "metrica": "Custo de infraestrutura por transação",
            "anterior": "R$ 0,02",
            "projetado": "R$ 0,02",
            "impacto": "Custo mantido em escala",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo médio do fluxo de compra",
            "anterior": "3 min",
            "projetado": "45 seg",
            "impacto": "Experiência consolidada (-75%)",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de sucesso na transação",
            "anterior": "99,5%",
            "projetado": "99,6%",
            "impacto": "Confiabilidade íntegra",
            "dimensao": "Produto"
          },
          {
            "metrica": "Taxa de abandono de carrinho",
            "anterior": "40%",
            "projetado": "14,8%",
            "impacto": "Ganho consolidado de 25,2%",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A expansão para 100% consolida a conversão recorde de compras com custo estável e sem riscos transacionais."
      }
    }
  },
  {
    "id": 3,
    "titulo": "Benchmarking Interno: O Custo Invisível da Ausência de Processo",
    "nivel": "Nível 3 • Intermediário: Desmistificando o Custo do Rigor Técnico",
    "fase1_cenario_inicial": {
      "periodo": "Diagnóstico de Governança: Equipe Alfa vs. Equipe Gama",
      "contexto": "Você assumiu a liderança técnica corporativa e auditou duas squads com o mesmo investimento financeiro: Equipe Alfa (adota revisão rigorosa de código em pares e 100% de testes automatizados) e Equipe Gama (não possui revisão formal nem testes obrigatórios). A diretoria acreditava que Gama era mais rápida por 'não perder tempo com burocracia de testes'.",
      "metricas": [
        {
          "nome": "Custo total mensal da equipe",
          "valor": "R$ 50.000 (Alfa e Gama)",
          "dimensao": "Recursos",
          "justificativa": "Mede o insumo financeiro total alocado para remuneração e infraestrutura de cada squad."
        },
        {
          "nome": "Horas gastas em retrabalho/correção",
          "valor": "Alfa: 20h | Gama: 120h",
          "dimensao": "Recursos",
          "justificativa": "Quantifica o desperdício de esforço humano consumido para corrigir falhas do próprio time."
        },
        {
          "nome": "Percentual de entregas no prazo",
          "valor": "Alfa: 95% | Gama: 90%",
          "dimensao": "Processo",
          "justificativa": "Mede a consistência e previsibilidade da esteira de desenvolvimento de cada time."
        },
        {
          "nome": "Taxa de falhas operacionais em produção",
          "valor": "Alfa: 0,1% | Gama: 4,5%",
          "dimensao": "Produto",
          "justificativa": "Reflete a robustez e integridade do código entregue em produção."
        }
      ],
      "diagnostico_inicial": "Paradoxo Aparente: As equipes custam o mesmo valor e ambas entregam a maioria das demandas no prazo, mas a qualidade em produção e o retrabalho interno divergem de maneira brutal."
    },
    "fase2_dilema": {
      "periodo": "O Confronto dos Dados de Engenharia",
      "dilema_texto": "A diretoria planejava desativar a política de testes da Equipe Alfa para 'economizar tempo'. Você reúne os dados consolidados de desempenho das duas squads para defender a maturidade técnica perante o conselho.",
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal da squad (Folha + Ferramentas)",
          "col1": "R$ 50.000",
          "col2": "R$ 50.000",
          "var": "0% (Empatado)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Horas gastas em retrabalho e correções",
          "col1": "20h (5% da jornada)",
          "col2": "120h (30% da jornada)",
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
        "Equipe Alfa (Com Processo)",
        "Equipe Gama (Sem Processo)",
        "Resultado Comparativo",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "Utilize os dados empíricos para desconstruir o mito de que 'testes atrasam projetos' e estruture as ações do Tech Lead:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a disciplina de Processo de Alfa economiza Recursos e protege o Produto?",
        "2. Proposição de Ação Tática (Curto Prazo): Como provar à Equipe Gama que o rigor técnico economiza tempo útil?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual política de governança deve ser padronizada na organização?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A ausência de disciplina de Processo em Gama (sem testes nem code review) gera um Produto altamente frágil (45 vezes mais falhas em produção). Esse produto defeituoso drena o Recurso humano da própria equipe em retrabalho (120 horas jogadas fora corrigindo bugs), tornando a esteira menos pontual do que Alfa (90% vs 95%). O rigor de Alfa atua como poupança de tempo.",
      "acao_tatica": "Pareamento Técnico Cruzado: Apresentar os dados de retrabalho aos desenvolvedores de Gama e instaurar pareamento imediato de 2 semanas onde engenheiros seniores de Alfa ensinam técnicas de testes automatizados e code review.",
      "acao_estrategica": "Institucionalizar o 'Quality Gate Padrão' em toda a empresa: tornar obrigatória a suíte de testes e aprovação de pares antes do merge para todos os projetos, reservando 10% da sprint para capacitação técnica contínua.",
      "metrica_oculta": "Pelo mesmo orçamento (R$ 50 mil), a Equipe Alfa ganha 100 horas úteis por mês para inovar, enquanto a Equipe Gama queima 30% da sua jornada útil corrigindo o próprio código mal testado.",
      "nova_metrica_proposta": "Taxa de Escape de Defeitos (Defect Escape Rate) - percentual de defeitos descobertos em produção versus em testes internos.",
      "ruidos_cenario": [
        {
          "item": "'Equipe Alfa cuida de módulo crítico e Gama de módulo não-crítico'",
          "motivo": "Ruído de justificativa cultural: Módulos secundários também geram custo de folha e atrito operacional quando falham."
        },
        {
          "item": "Custo de R$ 50.000 idêntico",
          "motivo": "Variável de controle metodológico para demonstrar o retorno sobre o esforço investido."
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
            "impacto": "Previsibilidade restaurada (+6%)",
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
        "conclusao": "A adoção do processo de qualidade reduziu o retrabalho em 70% e libertou 85 horas mensais para Gama focar em novas entregas."
      }
    }
  },
  {
    "id": 4,
    "titulo": "Microsserviços sob Pressão: A Ilusão da Frequência de Deploy",
    "nivel": "Nível 4 • Intermediário: A Ilusão de Produtividade vs. Degradação Distribuída",
    "fase1_cenario_inicial": {
      "periodo": "Arquitetura Monolítica Estável (Linha de Base)",
      "contexto": "Um banco digital operava sobre um monólito centralizado. Embora seguro, a diretoria considerava o tempo de compilação de 25 minutos no CI e a cadência de 2 deploys semanais lentos para a ambição de crescimento da fintech.",
      "metricas": [
        {
          "nome": "Fatura mensal de rede/telemetria",
          "valor": "R$ 4.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o consumo financeiro de tráfego de rede e comunicação interna."
        },
        {
          "nome": "Tempo de compilação e teste unitário no CI",
          "valor": "25 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede a agilidade do fluxo automatizado de integração e verificação de código."
        },
        {
          "nome": "Frequência de deploys em produção",
          "valor": "2 por semana",
          "dimensao": "Processo",
          "justificativa": "Mede a cadência de liberação contínua de alterações em ambiente produtivo."
        },
        {
          "nome": "Latência no percentil 99 (p99) de saldo",
          "valor": "350ms",
          "dimensao": "Produto",
          "justificativa": "Avalia o desempenho de resposta técnica percebido pelos clientes do aplicativo."
        },
        {
          "nome": "Taxa de timeouts e erros HTTP 504",
          "valor": "0,05%",
          "dimensao": "Produto",
          "justificativa": "Atributo de confiabilidade e disponibilidade das requisições bancárias."
        }
      ],
      "diagnostico_inicial": "Sistema Estável mas de Cadência Lenta: A experiência do correntista era veloz e sem erros, mas o tempo de build gerava gargalos na dinâmica dos desenvolvedores."
    },
    "fase2_dilema": {
      "periodo": "A Mudança: Decomposição em 18 Microsserviços",
      "dilema_texto": "Para 'ganhar agilidade', a engenharia desmembrou o monólito em 18 microsserviços. A diretoria comemorou os 14 deploys semanais, mas a central de suporte entrou em pânico com milhares de reclamações de telas congeladas e falhas de saldo no app.",
      "tabela_comparativa": [
        {
          "metrica": "Fatura mensal de rede (Service Mesh)",
          "col1": "R$ 4.000",
          "col2": "R$ 21.000",
          "var": "+425%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Frequência de deploys em produção",
          "col1": "2 / semana",
          "col2": "14 / semana",
          "var": "+600%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo de build no CI",
          "col1": "25 min",
          "col2": "4 min",
          "var": "-84%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Latência p99 (saldo e extrato)",
          "col1": "350ms",
          "col2": "2.800ms",
          "var": "+700%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Taxa de erros HTTP 504 (Timeout)",
          "col1": "0,05%",
          "col2": "4,8%",
          "var": "+9.500%",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Monólito (Base)",
        "Microsserviços (Atual)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A liderança quer saber por que o app está quebrando se a equipe está 'mais rápida do que nunca'. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a aceleração de deploys no Processo gerou um acoplamento destrutivo no Produto e Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): Como blindar o aplicativo contra timeouts hoje mesmo?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual mudança arquitetural resolverá o encadeamento síncrono de chamadas?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A facilidade de compilação rápida (-84%) incentivou uma esteira de deploys frenética (+600%) que liberou microsserviços com dependências síncronas em cascata (chamadas HTTP aninhadas). Isso explodiu o consumo de Recursos de rede (+425%) e multiplicou a latência do Produto por 8 (2,8s), gerando quase 5% de timeouts nos clientes.",
      "acao_tatica": "Implementar Circuit Breakers com fallback estático para consultas de saldo e aplicar cache distribuído (Redis) com TTL de 30 segundos nas rotas de leitura imediata.",
      "acao_estrategica": "Desacoplar a arquitetura migrando de chamadas síncronas (REST) para arquitetura orientada a eventos (EDA via Apache Kafka/RabbitMQ) e adotar o padrão CQRS para consultas agregadas.",
      "metrica_oculta": "A alta frequência de deploys tornou-se uma métrica de vaidade: o time entrega com frequência alterações que ampliam o congestionamento distribuído.",
      "nova_metrica_proposta": "Profundidade Máxima de Chamadas Síncronas por Endpoint (Call Chain Depth).",
      "ruidos_cenario": [
        {
          "item": "Tempo de build no CI caindo para 4 minutos",
          "motivo": "Ruído de agilidade interna: Excelente para os desenvolvedores, mas sem relevância quando o código resultante trava o cliente final."
        },
        {
          "item": "Contagem de 18 microsserviços",
          "motivo": "Decisão topológica de arquitetura, não um indicador de saúde sistêmica."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado Pós-Implantação de Circuit Breakers e Cache",
        "tabela": [
          {
            "metrica": "Fatura mensal de tráfego de rede",
            "anterior": "R$ 21.000",
            "projetado": "R$ 7.500",
            "impacto": "Queda de 64% no tráfego",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Frequência de deploys em produção",
            "anterior": "14 / semana",
            "projetado": "10 / semana",
            "impacto": "Cadência sustentável com testes",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo de build no CI",
            "anterior": "4 min",
            "projetado": "5 min",
            "impacto": "Inclusão de testes de contrato",
            "dimensao": "Processo"
          },
          {
            "metrica": "Latência p99 de saldo",
            "anterior": "2.800ms",
            "projetado": "420ms",
            "impacto": "Redução drástica de 85%",
            "dimensao": "Produto"
          },
          {
            "metrica": "Taxa de erros HTTP 504 (Timeout)",
            "anterior": "4,8%",
            "projetado": "0,08%",
            "impacto": "Normalização de confiabilidade",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "O desacoplamento reduziu a latência em 85% e cortou R$ 13.500 em desperdício de tráfego em rede."
      }
    }
  },
  {
    "id": 5,
    "titulo": "FinOps: O Desperdício Silencioso do Autoscaling Desgovernado",
    "nivel": "Nível 5 • Avançado: Eficiência Econômica de Arquitetura em Nuvem",
    "fase1_cenario_inicial": {
      "periodo": "Operação Logística no Trimestre Passado (Linha de Base)",
      "contexto": "Uma startup de logística rastreia encomendas com faturamento saudável. As instâncias em nuvem operavam com dimensionamento sob demanda adequado ao volume de 200.000 pacotes/mês.",
      "metricas": [
        {
          "nome": "Custo total mensal em nuvem (AWS)",
          "valor": "R$ 22.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o insumo financeiro total consumido para manter o ambiente computacional."
        },
        {
          "nome": "Custo computacional por pacote rastreado",
          "valor": "R$ 0,11",
          "dimensao": "Recursos",
          "justificativa": "Mede a eficiência financeira unitária do consumo de recursos por transação."
        },
        {
          "nome": "Tempo para provisionar novo nó elástico",
          "valor": "12 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede a rapidez operacional do processo de escala da infraestrutura."
        },
        {
          "nome": "Taxa média de utilização real de CPU/RAM",
          "valor": "55%",
          "dimensao": "Produto",
          "justificativa": "Mede a densidade técnica e o aproveitamento computacional do software em execução."
        },
        {
          "nome": "Disponibilidade operacional do rastreamento",
          "valor": "99,9%",
          "dimensao": "Produto",
          "justificativa": "Atributo de confiabilidade e tempo ativo percebido pelos clientes."
        }
      ],
      "diagnostico_inicial": "Operação Equilibrada: O custo unitário era saudável (R$ 0,11) e a densidade de processamento adequada (55%), mantendo alta disponibilidade."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Acelerar Escala a Qualquer Custo",
      "dilema_texto": "Para suportar um crescimento de 20% nas entregas, o time anterior reconfigurou as regras de autoscaling para provisionar máquinas em 3 minutos sob qualquer oscilação de tráfego. A fatura mensal saltou para R$ 68.200 (+210%), consumindo toda a margem de lucro da operação.",
      "tabela_comparativa": [
        {
          "metrica": "Custo total mensal da nuvem",
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
          "metrica": "Tempo para provisionar nó elástico",
          "col1": "12 min",
          "col2": "3 min",
          "var": "-75%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Utilização média de CPU/RAM",
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
      "enunciado": "A diretoria exige corte imediato na fatura de nuvem, mas teme perder disponibilidade. Como Tech Lead, formule:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a histerese do autoscaling gerou ociosidade no Produto e dreno em Recursos?",
        "2. Proposição de Ação Tática (Curto Prazo): Como cortar 40% dos custos sem risco de queda no sistema?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual arquitetura de FinOps garantirá escala sustentável?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "Para acelerar o Processo de subida de servidores (-75%), a regra de autoscaling foi configurada com gatilhos excessivamente sensíveis e sem políticas de desligamento rápido. Isso gerou um Produto com ociosidade severa (apenas 14% de CPU/RAM usada), triplicando o consumo de Recursos financeiros (+210%) para entregar um ganho imperceptível de 0,02% no uptime.",
      "acao_tatica": "Ajuste Imediato de Thresholds: Elevar o gatilho de scale-up de 40% para 70% de CPU, aplicar scale-down automático em 10 minutos para máquinas sem carga e desligar ambientes de homologação fora do horário comercial.",
      "acao_estrategica": "Implantar cultura FinOps com contratação de Savings Plans/Instâncias Reservadas para a carga de base e migração de workers de processamento de pacotes para arquitetura Serverless (AWS Lambda/Fargate).",
      "metrica_oculta": "O custo unitário por pacote subiu 154% (de R$ 0,11 para R$ 0,28), provando que o sistema sofreu de deseconomia de escala por pura ineficiência de provisionamento.",
      "nova_metrica_proposta": "Cloud Waste Ratio (Percentual de gasto financeiro alocado em capacidade computacional ociosa não utilizada).",
      "ruidos_cenario": [
        {
          "item": "Aumento de 99,9% para 99,92% no Uptime",
          "motivo": "Ruído de justificativa: Métrica usada para disfarçar o desperdício; um ganho de 0,02% não possui valor de negócio que compense R$ 46.000 a mais por mês."
        },
        {
          "item": "Crescimento de 20% no volume de entregas",
          "motivo": "Indicador de negócio que torna o desperdício ainda mais evidente (fatura subiu 210% para 20% de novos pedidos)."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 30 Dias Pós-Calibração de FinOps",
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
            "impacto": "Eficiência unitária restaurada",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo para provisionar nó elástico",
            "anterior": "3 min",
            "projetado": "4 min",
            "impacto": "Tempo equilibrado e seguro",
            "dimensao": "Processo"
          },
          {
            "metrica": "Utilização média de CPU/RAM",
            "anterior": "14%",
            "projetado": "62%",
            "impacto": "Fim do desperdício ocioso",
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
        "conclusao": "A calibração do autoscaling cortou 56% da fatura (economia de R$ 38.700/mês) mantendo o sistema em 99,91% de disponibilidade."
      }
    }
  },
  {
    "id": 6,
    "titulo": "DevSecOps: A Bomba-Relógio da Velocidade sem Conformidade",
    "nivel": "Nível 6 • Avançado: Gestão de Risco Operacional e Segurança Crítica",
    "fase1_cenario_inicial": {
      "periodo": "Semestre Passado: Esteira com Portões Rígidos de Segurança",
      "contexto": "Uma fintech de crédito mantinha rotinas estritas de segurança da informação, submetendo qualquer código a escaneamentos estáticos (SAST) e dinâmicos (DAST) antes do deploy.",
      "metricas": [
        {
          "nome": "Custo com licenças de segurança (SAST/DAST)",
          "valor": "R$ 30.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o insumo financeiro contratual em tecnologias de varredura automatizada."
        },
        {
          "nome": "Tempo médio para aprovação no pipeline",
          "valor": "14 horas",
          "dimensao": "Processo",
          "justificativa": "Mede a duração do fluxo de análise de código e validação de conformidade."
        },
        {
          "nome": "Taxa de builds bloqueados por segurança",
          "valor": "16%",
          "dimensao": "Processo",
          "justificativa": "Avalia o rigor da esteira em barrar código inseguro antes de produção."
        },
        {
          "nome": "Vulnerabilidades críticas ativas em produção",
          "valor": "1 falha",
          "dimensao": "Produto",
          "justificativa": "Mede a postura e a blindagem técnica do software em execução contra ataques."
        },
        {
          "nome": "Tempo médio de exposição a falhas (MTTE)",
          "valor": "3 dias",
          "dimensao": "Produto",
          "justificativa": "Avalia a rapidez na aplicação de patches em brechas conhecidas."
        }
      ],
      "diagnostico_inicial": "Postura Segura mas Esteira Burocrática: O sistema era altamente blindado, mas o tempo de 14 horas para aprovação gerava descontentamento na equipe comercial."
    },
    "fase2_dilema": {
      "periodo": "A Mudança: Desativação dos Bloqueios Automáticos",
      "dilema_texto": "Para bater metas de lançamentos rápidos, a gestão anterior desativou os bloqueios automáticos no CI/CD para que 'regras de segurança não atrasassem deploys'. Agora, uma auditoria do Banco Central emitiu uma notificação formal de inconformidade.",
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
          "metrica": "Tempo médio para aprovação de PRs",
          "col1": "14 horas",
          "col2": "2 horas",
          "var": "-85% (Rápido)",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Taxa de builds bloqueados por segurança",
          "col1": "16%",
          "col2": "0,2%",
          "var": "-98% (Destravado)",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Vulnerabilidades críticas em produção (CVE)",
          "col1": "1",
          "col2": "27",
          "var": "+2.600%",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Tempo de exposição a falhas (MTTE)",
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
        "Flexibilizado (Atual)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "O banco corre risco iminente de suspensão de licença financeira pelo órgão regulador. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como o afrouxamento do Processo contaminou o Produto expondo a empresa a multas?",
        "2. Proposição de Ação Tática (Curto Prazo): Como remediar as 27 falhas críticas imediatamente sem travar o time?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual modelo de DevSecOps deve ser institucionalizado?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "Para acelerar artificialmente o Processo de entrega (-85% no tempo de aprovação), foram eliminadas as barreiras de segurança (-98% de bloqueios). Isso gerou um Produto vulnerável e contaminado (27 falhas críticas ativas expostas por até 42 dias), submetendo a instituição a penalidades severas da LGPD e do BACEN.",
      "acao_tatica": "Reativar imediatamente o bloqueio automático (hard fail) na esteira para vulnerabilidades de severidade Alta/Crítica (CVSS >= 7.0) e convocar um 'Security Sprint' de 5 dias úteis com dedicação exclusiva para correção das 27 falhas.",
      "acao_estrategica": "Instituir o programa de Security Champions (um desenvolvedor com treinamento especializado em cada squad) e automatizar o escaneamento de dependências vulneráveis (SCA via Dependabot/Snyk) diretamente nas branches de desenvolvimento.",
      "metrica_oculta": "O investimento de R$ 30.000 em ferramentas virou desperdício: as licenças continuavam pagas, mas seus relatórios eram ignorados na esteira, gerando compliance puramente ilusório.",
      "nova_metrica_proposta": "MTTR de Vulnerabilidades Críticas (Tempo médio decorrido entre a descoberta da brecha e a publicação do patch).",
      "ruidos_cenario": [
        {
          "item": "Tempo de aprovação caindo de 14h para 2h",
          "motivo": "Ruído de eficiência: Aceleração obtida pela supressão de controles de qualidade essenciais."
        },
        {
          "item": "Custo estável de R$ 30.000 em ferramentas",
          "motivo": "Mostra que a tecnologia foi adquirida, mas a disciplina de processo foi ignorada."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 30 Dias Pós-Security Sprint",
        "tabela": [
          {
            "metrica": "Custo com ferramentas de segurança",
            "anterior": "R$ 30.000",
            "projetado": "R$ 30.000",
            "impacto": "Recurso aproveitado com eficácia",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo de aprovação de PRs",
            "anterior": "2 horas",
            "projetado": "4 horas",
            "impacto": "Equilíbrio entre agilidade e segurança",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de builds bloqueados por segurança",
            "anterior": "0,2%",
            "projetado": "12%",
            "impacto": "Filtro automatizado ativo",
            "dimensao": "Processo"
          },
          {
            "metrica": "Vulnerabilidades críticas em produção",
            "anterior": "27",
            "projetado": "0",
            "impacto": "Risco regulatório neutralizado",
            "dimensao": "Produto"
          },
          {
            "metrica": "Tempo de exposição a falhas (MTTE)",
            "anterior": "42 dias",
            "projetado": "2 dias",
            "impacto": "Remediação ágil e contínua",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "As 27 vulnerabilidades foram eliminadas, a esteira foi reativada com travas de segurança e o tempo de exposição caiu para 2 dias."
      }
    }
  },
  {
    "id": 7,
    "titulo": "A Armadilha do Burnout: A Produtividade que Destrói a Equipe",
    "nivel": "Nível 7 • Avançado: Sustentabilidade do Capital Humano e Conhecimento Tácito",
    "fase1_cenario_inicial": {
      "periodo": "Semestre Passado: Ritmo Sustentável de Desenvolvimento",
      "contexto": "Uma software house de médio porte desenvolvia aplicações com estabilidade, respeitando a jornada regular de trabalho e mantendo retenção de seus profissionais seniores.",
      "metricas": [
        {
          "nome": "Custo mensal com horas extras da equipe",
          "valor": "R$ 4.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o insumo financeiro adicional aplicado em sobrecarga de jornada."
        },
        {
          "nome": "Taxa de rotatividade de desenvolvedores (Turnover)",
          "valor": "4% ao ano",
          "dimensao": "Recursos",
          "justificativa": "Mede o desgaste e a perda de capital humano na equipe de engenharia."
        },
        {
          "nome": "Tempo médio para onboarding de novos devs",
          "valor": "15 dias",
          "dimensao": "Processo",
          "justificativa": "Avalia a agilidade do processo de integração e transmissão de conhecimento."
        },
        {
          "nome": "Funcionalidades entregues no prazo acordado",
          "valor": "85%",
          "dimensao": "Processo",
          "justificativa": "Mede o cumprimento das metas contratuais na esteira de desenvolvimento."
        },
        {
          "nome": "Taxa de bugs introduzidos por nova alteração",
          "valor": "2,5%",
          "dimensao": "Produto",
          "justificativa": "Atributo de confiabilidade e sanidade do código gerado pela equipe."
        }
      ],
      "diagnostico_inicial": "Equipe Estável e Sustentável: A equipe operava com baixo turnover (4%) e código confiável, embora a liderança comercial cobrasse 'mais entregas no prazo'."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Aceleração sob Pressão e Horas Extras",
      "dilema_texto": "Para cumprir um cronograma comercial agressivo, a gestão forçou a equipe a trabalhar em regime constante de horas extras nos últimos dois trimestres. Na reunião de diretoria, o gerente celebrou: 'entregamos 98% das telas no prazo'. Porém, no mês seguinte, os dados de sustentabilidade revelaram o estrago.",
      "tabela_comparativa": [
        {
          "metrica": "Custo com horas extras da equipe",
          "col1": "R$ 4.000",
          "col2": "R$ 28.000",
          "var": "+600%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Turnover voluntário anualizado",
          "col1": "4%",
          "col2": "32%",
          "var": "+700%",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Tempo de onboarding de novos devs",
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
          "metrica": "Taxa de bugs por alteração (Regressão)",
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
      "enunciado": "Os principais desenvolvedores seniores pediram demissão e o sistema começou a quebrar a cada deploy. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como o esgotamento do Recurso humano desarticulou o Processo e degradou o Produto?",
        "2. Proposição de Ação Tática (Curto Prazo): Como estancar a saída de talentos e estabilizar a rotina?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Como criar uma política de capacidade produtiva realista?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A exploração predatória do Recurso humano (+600% em horas extras) provocou esgotamento (burnout) e fuga de cérebros (turnover de 32%). A perda dos profissionais seniores destruiu o Processo de transmissão de conhecimento tácito (onboarding saltou de 15 para 65 dias). O resultado foi um Produto frágil e repleto de regressões (+572% de bugs), desenvolvido por novatos sobrecarregados.",
      "acao_tatica": "Proibir imediatamente horas extras compulsórias, congelar novos compromissos comerciais no próximo mês e instaurar pareamento técnico para resgatar documentação viva da arquitetura.",
      "acao_estrategica": "Adotar planejamento de capacidade baseado em dados históricos de vazão real (Throughput com Simulação de Monte Carlo), limitar o WIP (Work In Progress) e condicionar a bonificação da gestão à taxa de retenção de talentos.",
      "metrica_oculta": "A entrega de 98% dos prazos foi conquistada 'queimando a equipe'; uma métrica canibal que sacrificou a sustentabilidade futura do negócio em troca de um ganho pontual de curtíssimo prazo.",
      "nova_metrica_proposta": "eNPS Técnico / Team Health Index (Satisfação e bem-estar dos engenheiros) e Débito de Descanso.",
      "ruidos_cenario": [
        {
          "item": "98% das entregas no prazo",
          "motivo": "Ruído de aparente sucesso: Métrica usada pela gestão para justificar a pressão, ignorando o colapso estrutural da equipe."
        },
        {
          "item": "R$ 28.000 em horas extras",
          "motivo": "Custo financeiro direto que esconde o prejuízo muito superior de rescisões, recrutamento e perda de conhecimento."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 90 Dias Pós-Ajuste de Capacidade",
        "tabela": [
          {
            "metrica": "Custo com horas extras",
            "anterior": "R$ 28.000",
            "projetado": "R$ 2.000",
            "impacto": "Jornada sustentável restabelecida",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Turnover voluntário anualizado",
            "anterior": "32%",
            "projetado": "6%",
            "impacto": "Fim da fuga de talentos",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo de onboarding de novos devs",
            "anterior": "65 dias",
            "projetado": "20 dias",
            "impacto": "Documentação viva e mentoria",
            "dimensao": "Processo"
          },
          {
            "metrica": "Entregas concluídas no prazo",
            "anterior": "98%",
            "projetado": "88%",
            "impacto": "Metas realistas e previsíveis",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de bugs por alteração",
            "anterior": "16,8%",
            "projetado": "3,1%",
            "impacto": "Queda drástica de 81%",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "A eliminação de horas extras reduziu o turnover de 32% para 6% e derrubou as falhas de código em 81%."
      }
    }
  },
  {
    "id": 8,
    "titulo": "O Monolito Asfixiado: O Débito Técnico que Paralisou a Inovação",
    "nivel": "Nível 8 • Mestre: Débito Técnico Estrutural vs. Custo de Oportunidade",
    "fase1_cenario_inicial": {
      "periodo": "Situação Histórica do Sistema Legado (Há 2 Anos)",
      "contexto": "Um sistema central de faturamento atende toda a corporação. Dois anos atrás, o código possuía complexidade moderada e permitia lançar novas regras fiscais em menos de uma semana.",
      "metricas": [
        {
          "nome": "Custo de sustentação do servidor legado",
          "valor": "R$ 15.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o insumo financeiro para manter máquinas físicas e licenças operacionais."
        },
        {
          "nome": "Lead time para novas regras fiscais",
          "valor": "6 dias",
          "dimensao": "Processo",
          "justificativa": "Mede a agilidade de ponta a ponta desde a especificação até a produção."
        },
        {
          "nome": "Taxa de retrabalho em testes manuais",
          "valor": "12%",
          "dimensao": "Processo",
          "justificativa": "Avalia o desperdício de tempo gerado por alterações que quebram módulos vizinhos."
        },
        {
          "nome": "Complexidade Ciclomática média dos métodos",
          "valor": "8,4",
          "dimensao": "Produto",
          "justificativa": "Mede os caminhos de execução independentes e inteligibilidade do código-fonte."
        },
        {
          "nome": "Grau de acoplamento entre módulos",
          "valor": "Moderado",
          "dimensao": "Produto",
          "justificativa": "Mede a interdependência e a rigidez arquitetural entre os componentes."
        }
      ],
      "diagnostico_inicial": "Sistema Maduro e Operacional: O código possuía complexidade aceitável (< 10) e permitia responder às demandas tributárias com agilidade."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: A Proibição de Mexer no 'Código que Está Ganhando'",
      "dilema_texto": "Nos últimos dois anos, a diretoria de negócios vetou sistematicamente todas as solicitações de refatoração sob a justificativa: 'se está funcionando e faturando, não gastem dinheiro mexendo em código antigo'. Agora, o setor comercial alerta que a concorrência lança produtos em 3 dias, enquanto o sistema interno exige meses.",
      "tabela_comparativa": [
        {
          "metrica": "Custo mensal de sustentação do legado",
          "col1": "R$ 15.000",
          "col2": "R$ 16.500",
          "var": "+10% (Estável)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Lead time para lançar novas regras fiscais",
          "col1": "6 dias",
          "col2": "48 dias",
          "var": "+700%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Retrabalho em testes de regressão manuais",
          "col1": "12%",
          "col2": "58%",
          "var": "+383%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Complexidade Ciclomática média (McCabe)",
          "col1": "8,4",
          "col2": "34,2",
          "var": "+307% (Espaguete)",
          "dimensao": "Produto",
          "status_var": "danger"
        },
        {
          "metrica": "Grau de acoplamento entre módulos",
          "col1": "Moderado",
          "col2": "Crítico (Emaranhado)",
          "var": "Degradação severa",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "2 Anos Atrás",
        "Cenário Atual",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A empresa está perdendo mercado porque não consegue atualizar suas regras de cobrança. Como Tech Lead, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a deterioração interna do Produto asfixiou a esteira de Processo?",
        "2. Proposição de Ação Tática (Curto Prazo): Como permitir novos lançamentos urgentes sem quebrar o legado?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual padrão arquitetural modernizará o monolito de forma segura?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A negligência contínua na arquitetura elevou a Complexidade Ciclomática do Produto para 34,2 (código espaguete e ininteligível) e tornou o acoplamento crítico. Esse código intrinsecamente apodrecido quebrou o Processo: mais da metade do tempo de testes (58%) é retrabalho e o Lead Time explodiu em 8 vezes (48 dias), paralisando a inovação da empresa.",
      "acao_tatica": "Aplicar o Padrão Estrangulador (Strangler Fig Pattern): congelar novas inserções de código no monólito e direcionar as novas regras de negócio para microsserviços modernos desacoplados em nuvem que consomem o legado via APIs de leitura.",
      "acao_estrategica": "Reservar 20% da capacidade de cada sprint exclusivamente para pagamento de débito técnico e refatoração arquitetural, implantando testes de regressão automatizados e linters com teto máximo de complexidade ciclomática.",
      "metrica_oculta": "O custo de sustentação da infraestrutura (R$ 16.500) parece estável e barato, mas é um ruído enganoso. O prejuízo real é o custo de oportunidade: a perda de contratos comerciais devido à incapacidade de lançar promoções a tempo.",
      "nova_metrica_proposta": "Technical Debt Ratio (TDR) via SonarQube e Índice de Manutenibilidade de Código.",
      "ruidos_cenario": [
        {
          "item": "Custo de infraestrutura subindo apenas R$ 1.500 em 2 anos",
          "motivo": "Ruído de falsa economia: Manter servidores antigos ligados custa pouco, mas oculta a perda de milhões em atrasos de novos negócios."
        },
        {
          "item": "'Sistema atende há 12 anos toda a corporação'",
          "motivo": "Fato histórico que gera apego emocional, mas não justifica manter código obsoleto e asfixiado."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 6 Meses Pós-Padrão Estrangulador",
        "tabela": [
          {
            "metrica": "Custo de sustentação e nuvem",
            "anterior": "R$ 16.500",
            "projetado": "R$ 21.000",
            "impacto": "Investimento absorvido pelo ganho",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Lead time para novas regras fiscais",
            "anterior": "48 dias",
            "projetado": "8 dias",
            "impacto": "Aceleração de 83% no ciclo",
            "dimensao": "Processo"
          },
          {
            "metrica": "Retrabalho em testes manuais",
            "anterior": "58%",
            "projetado": "15%",
            "impacto": "Suíte automatizada ativa",
            "dimensao": "Processo"
          },
          {
            "metrica": "Complexidade ciclomática (novos módulos)",
            "anterior": "34,2",
            "projetado": "6,5",
            "impacto": "Código limpo e modular",
            "dimensao": "Produto"
          },
          {
            "metrica": "Grau de acoplamento",
            "anterior": "Crítico",
            "projetado": "Baixo (APIs)",
            "impacto": "Desacoplamento por microsserviços",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "O Padrão Estrangulador reduziu o tempo de lançamento de 48 para 8 dias e estancou o retrabalho em testes."
      }
    }
  },
  {
    "id": 9,
    "titulo": "SRE e Error Budget: O Conflito entre Inovação Agressiva e Confiabilidade",
    "nivel": "Nível 9 • Mestre: Engenharia de Confiabilidade e Governança Orientada a Dados",
    "fase1_cenario_inicial": {
      "periodo": "Mês Anterior: Equilíbrio Operacional no Serviço de PIX",
      "contexto": "Em um aplicativo de pagamentos instantâneos (PIX), o SLA contratual com o Banco Central exige 99,95% de disponibilidade mensal, gerando uma margem de tolerância máxima de 21,6 minutos de indisponibilidade permitida por mês (Error Budget).",
      "metricas": [
        {
          "nome": "Consumo acumulado do Error Budget",
          "valor": "35% (margem segura)",
          "dimensao": "Processo",
          "justificativa": "Métrica de governança SRE que monitora o risco operacional consumido no período."
        },
        {
          "nome": "Taxa de falha nas mudanças em produção (DORA)",
          "valor": "6%",
          "dimensao": "Processo",
          "justificativa": "Mede a confiabilidade e assertividade da esteira de deploy de versões do software."
        },
        {
          "nome": "Frequência de deploys em produção",
          "valor": "3 por semana",
          "dimensao": "Processo",
          "justificativa": "Mede a cadência de liberação contínua de código da equipe de desenvolvimento."
        },
        {
          "nome": "Tempo médio para recuperação do serviço (MTTR)",
          "valor": "4 minutos",
          "dimensao": "Processo",
          "justificativa": "Mede a agilidade de reação da equipe na contenção e resolução de incidentes operacionais."
        },
        {
          "nome": "Disponibilidade operacional do PIX",
          "valor": "99,97%",
          "dimensao": "Produto",
          "justificativa": "Atributo de continuidade do serviço de software perante os clientes e o regulador."
        }
      ],
      "diagnostico_inicial": "Operação Confiável: Apenas 35% da margem de erro foi utilizada, MTTR rápido (4 min) e disponibilidade acima do patamar de segurança do Banco Central."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: Aceleração Desenfreada no Meio do Mês",
      "dilema_texto": "O setor comercial exigiu 18 deploys semanais para lançar promoções de cashback. No dia 18 do mês de 30 dias, a telemetria do SRE dispara o alarme: 94% do Error Budget já foi consumido e restam apenas 1,3 minuto de indisponibilidade permitida para os 12 dias restantes.",
      "tabela_comparativa": [
        {
          "metrica": "Consumo acumulado do Error Budget",
          "col1": "35%",
          "col2": "94% (no dia 18)",
          "var": "+168% (Crítico)",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Taxa de falha nas mudanças (Change Failure)",
          "col1": "6%",
          "col2": "28%",
          "var": "+366%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Frequência de deploys em produção",
          "col1": "3 / semana",
          "col2": "18 / semana",
          "var": "+500%",
          "dimensao": "Processo",
          "status_var": "positive"
        },
        {
          "metrica": "Tempo médio de recuperação (MTTR)",
          "col1": "4 min",
          "col2": "26 min",
          "var": "+550%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Disponibilidade operacional acumulada",
          "col1": "99,97%",
          "col2": "99,952%",
          "var": "À beira da multa",
          "dimensao": "Produto",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "Mês Anterior",
        "Mês Atual (Dia 18)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "O setor comercial exige subir mais 3 deploys hoje à noite. Como Tech Lead apoiado em dados de SRE, defina:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como a frequência desgovernada de deploys ameaça a estabilidade do Produto perante o BACEN?",
        "2. Proposição de Ação Tática (Curto Prazo): Qual é a decisão técnica mandatória para os próximos 12 dias do mês?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual mecanismo de governança automatizada evitará novas crises?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A aceleração imprudente na frequência de deploys (+500%) multiplicou a taxa de falha nas mudanças para 28%. Com o MTTR subindo para 26 minutos, o Error Budget de Processo foi consumido a um ritmo vertiginoso (94% consumido antes de 60% do mês transcorrer). Um único novo incidente de míseros 80 segundos romperá o patamar de 99,95% no Produto, acarretando multas e perda de licença do BACEN.",
      "acao_tatica": "Deploy Freeze Comercial Imediato: Bloquear qualquer nova funcionalidade até o dia 30 do mês. Autorizar estritamente patches de segurança e estabilização de bugs com aprovação conjunta de SRE e Tech Lead.",
      "acao_estrategica": "Instituir a política contratual de Error Budget: automatizar no pipeline de CI/CD o bloqueio automático de deploys comerciais sempre que o consumo do orçamento de erros ultrapassar 80%, forçando o uso de deploys canários e feature flags.",
      "metrica_oculta": "A frequência recorde de 18 deploys semanais gerou uma armadilha: velocidade sem testes de regressão automatizados converteu-se em velocidade de destruição de estabilidade.",
      "nova_metrica_proposta": "Error Budget Burn Rate (Velocidade horária de consumo da margem de indisponibilidade permitida).",
      "ruidos_cenario": [
        {
          "item": "Frequência recorde de 18 deploys por semana",
          "motivo": "Ruído de vaidade e pressão de negócio: Usado pelo marketing como sinônimo de inovação, mas que sabotou a estabilidade do sistema."
        },
        {
          "item": "Disponibilidade atual em 99,952%",
          "motivo": "Ruído de falsa segurança: Parece cumprir a meta (99,95%), mas a margem de segurança restante é microscópica frente aos 12 dias restantes."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado no Fechamento do Mês com Deploy Freeze Ativo",
        "tabela": [
          {
            "metrica": "Consumo acumulado do Error Budget",
            "anterior": "94%",
            "projetado": "96%",
            "impacto": "Margem preservada no limite",
            "dimensao": "Processo"
          },
          {
            "metrica": "Taxa de falha nas mudanças",
            "anterior": "28%",
            "projetado": "2%",
            "impacto": "Apenas patches cirúrgicos",
            "dimensao": "Processo"
          },
          {
            "metrica": "Frequência de deploys em produção",
            "anterior": "18 / semana",
            "projetado": "1 / semana",
            "impacto": "Estabilidade prioritária",
            "dimensao": "Processo"
          },
          {
            "metrica": "Tempo médio de recuperação (MTTR)",
            "anterior": "26 min",
            "projetado": "3 min",
            "impacto": "Foco total da equipe em suporte",
            "dimensao": "Processo"
          },
          {
            "metrica": "Disponibilidade operacional final",
            "anterior": "99,952%",
            "projetado": "99,951%",
            "impacto": "SLA do BACEN cumprido com sucesso",
            "dimensao": "Produto"
          }
        ],
        "conclusao": "O Deploy Freeze salvou a fintech de quebrar o SLA regulatório do Banco Central, fechando o mês em 99,951%."
      }
    }
  },
  {
    "id": 10,
    "titulo": "Engenharia de Plataforma: Destravando o Atrito Cognitivo e o Tempo de Espera",
    "nivel": "Nível 10 • Mestre: Produtividade Sistêmica e Plataforma Interna do Desenvolvedor (IDP)",
    "fase1_cenario_inicial": {
      "periodo": "Ano Passado: Operação Enxuta com 6 Squads",
      "contexto": "A empresa operava com 6 squads e 40 engenheiros. As ferramentas internas atendiam bem à demanda e a comunicação era rápida e sem intermediários.",
      "metricas": [
        {
          "nome": "Custo de infraestrutura interna de CI/CD",
          "valor": "R$ 18.000",
          "dimensao": "Recursos",
          "justificativa": "Mede o insumo financeiro alocado para servidores e ferramentas de build."
        },
        {
          "nome": "Horas mensais dos devs em filas de espera",
          "valor": "340 horas",
          "dimensao": "Recursos",
          "justificativa": "Quantifica o desperdício de esforço humano retido aguardando máquinas de build."
        },
        {
          "nome": "Tempo para configurar ambiente local (Setup)",
          "valor": "2 dias",
          "dimensao": "Processo",
          "justificativa": "Mede a facilidade operacional de integração de ferramentas locais."
        },
        {
          "nome": "Alternância de contexto diária (Interrupções)",
          "valor": "4 vezes/dia",
          "dimensao": "Processo",
          "justificativa": "Avalia o grau de fragmentação do fluxo de foco mental dos programadores."
        },
        {
          "nome": "Índice de atrito na esteira técnica (DevEx)",
          "valor": "78 (Bom)",
          "dimensao": "Processo",
          "justificativa": "Mede a satisfação percebida e a fluidez do ecossistema técnico interno."
        }
      ],
      "diagnostico_inicial": "Engenharia Produtiva: A esteira de suporte atendia aos 40 desenvolvedores com atrito baixo e espera aceitável."
    },
    "fase2_dilema": {
      "periodo": "O Dilema: A Escala sem Investimento em Ferramentas",
      "dilema_texto": "A empresa quase triplicou o quadro para 16 squads e 140 engenheiros, mas a diretoria congelou o orçamento de CI/CD em R$ 18.000 para 'conter custos'. Agora, a liderança reclama que os desenvolvedores 'estão produzindo menos', enquanto os engenheiros relatam exaustão e filas intermináveis.",
      "tabela_comparativa": [
        {
          "metrica": "Custo de infraestrutura interna de CI/CD",
          "col1": "R$ 18.000",
          "col2": "R$ 18.000",
          "var": "0% (Congelado)",
          "dimensao": "Recursos",
          "status_var": "neutral"
        },
        {
          "metrica": "Horas gastas em filas de build e testes",
          "col1": "340h",
          "col2": "1.850h",
          "var": "+444% (Desperdício)",
          "dimensao": "Recursos",
          "status_var": "danger"
        },
        {
          "metrica": "Tempo para setup de ambiente local",
          "col1": "2 dias",
          "col2": "9 dias",
          "var": "+350%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Interrupções diárias por contexto",
          "col1": "4 vezes/dia",
          "col2": "17 vezes/dia",
          "var": "+325%",
          "dimensao": "Processo",
          "status_var": "danger"
        },
        {
          "metrica": "Índice de atrito na esteira (DevEx Score)",
          "col1": "78 (Bom)",
          "col2": "31 (Crítico)",
          "var": "-60%",
          "dimensao": "Processo",
          "status_var": "danger"
        }
      ],
      "colunas_tabela": [
        "Indicador (Métrica)",
        "6 Squads (Ano Passado)",
        "16 Squads (Atual)",
        "Variação",
        "Dimensão"
      ]
    },
    "fase3_desafio": {
      "enunciado": "A diretoria acredita que a lentidão é 'falta de comprometimento dos novos contratados'. Como Head de Engenharia, estruture sua resposta:",
      "perguntas": [
        "1. Diagnóstico de Causa e Efeito: Como o estrangulamento de Recursos de plataforma colapsou o Processo de trabalho de 140 engenheiros?",
        "2. Proposição de Ação Tática (Curto Prazo): Como destravar as filas de compilação imediatamente?",
        "3. Proposição de Ação Estratégica (Longo Prazo): Qual iniciativa estrutural devolverá produtividade à engenharia?"
      ]
    },
    "fase4_resolucao": {
      "diagnostico_causa_efeito": "A escala de 6 para 16 squads sem investimento em Recursos de plataforma (CI/CD congelado em R$ 18k) congestionou totalmente o Processo: o tempo de setup saltou para 9 dias e os desenvolvedores sofrem 17 interrupções diárias. O resultado é a queima de 1.850 horas de Recursos humanos ociosos em filas travadas, destruindo o fluxo de trabalho da companhia.",
      "acao_tatica": "Destravar as Filas Imediatamente: Contratar runners elásticos em nuvem com auto-scaling automático no GitHub Actions/GitLab CI e paralelizar a execução dos testes de integração mais lentos.",
      "acao_estrategica": "Fundar a equipe de Engenharia de Plataforma (Platform Engineering) encarregada de construir uma Internal Developer Platform (IDP) com templates de código padronizados e ambientes de desenvolvimento em nuvem (DevContainers/Backstage), reduzindo o setup para 15 minutos.",
      "metrica_oculta": "A perda de 1.850 horas de engenharia por mês equivale a pagar o salário integral de 11 engenheiros seniores para ficarem olhando a tela carregar. O gargalo não é humano; é o colapso da infraestrutura interna.",
      "nova_metrica_proposta": "Custo Financeiro do Tempo Ocioso em Filas de Esteira (Wasted Engineering Hours in Cash).",
      "ruidos_cenario": [
        {
          "item": "Orçamento de CI/CD congelado em R$ 18.000",
          "motivo": "Ruído de falsa contenção de despesas: A diretoria comemorava economizar em servidores internos, ignorando o desperdício de R$ 185 mil em salários de engenheiros parados."
        },
        {
          "item": "Contagem de 140 engenheiros",
          "motivo": "Dimensionamento estrutural que sem plataforma de apoio gera deseconomia de escala e atrito de comunicação."
        }
      ],
      "painel_pos_acao": {
        "titulo": "Painel Projetado 90 Dias Pós-Engenharia de Plataforma",
        "tabela": [
          {
            "metrica": "Custo de ferramentas e plataforma",
            "anterior": "R$ 18.000",
            "projetado": "R$ 42.000",
            "impacto": "Investimento que destravou o time",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Horas mensais em filas de espera",
            "anterior": "1.850h",
            "projetado": "180h",
            "impacto": "Recuperação de 1.670 horas úteis (-90%)",
            "dimensao": "Recursos"
          },
          {
            "metrica": "Tempo para setup de ambiente local",
            "anterior": "9 dias",
            "projetado": "15 minutos",
            "impacto": "Padronização via DevContainers",
            "dimensao": "Processo"
          },
          {
            "metrica": "Interrupções diárias por contexto",
            "anterior": "17 / dia",
            "projetado": "5 / dia",
            "impacto": "Fluxo de foco restaurado",
            "dimensao": "Processo"
          },
          {
            "metrica": "Índice DevEx Score",
            "anterior": "31",
            "projetado": "84",
            "impacto": "Excelente experiência do desenvolvedor",
            "dimensao": "Processo"
          }
        ],
        "conclusao": "O investimento de R$ 24 mil em plataforma devolveu 1.670 horas úteis por mês, o equivalente a contratar 10 novos engenheiros."
      }
    }
  }
];
