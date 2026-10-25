---
id: "classificacao"
titulo: "Identificação e Classificação de Métricas"
modulo: 2
tempoLeitura: "7 min"
fonte: "Material 07 - Identificação e Classificação de Métricas de Software"
atividadeVinculadaId: "classificacao"
---

# Identificação e Classificação de Métricas

Aprenda a diferenciar com precisão as três categorias fundamentais (Recursos, Processo e Produto), dominar a terminologia técnica e identificar a métrica certa para cada tomada de decisão.

## 1. Vocabulário Fundamental: Medida, Métrica e Indicador
Na prática profissional, distinguir esses termos evita confusões conceituais em auditorias e análises técnicas:

* **Medida (Valor Bruto):** O número obtido diretamente de uma contagem. *Exemplo:* "Este microserviço possui 450 linhas de código".
* **Medição (O Ato):** O processo operacional de atribuir um número ao atributo (ex: rodar o SonarQube para contar linhas).
* **Métrica (Cálculo Derivado):** Medida quantitativa do grau em que um sistema possui determinado atributo. *Exemplo:* `Taxa de Defeitos = Bugs / KLOC`.
* **Indicador (Visão Decisória):** Métrica ou combinação de métricas que fornece insight sobre tendências e guia ações estratégicas.

## 2. Métricas de Recursos: Monitorando os Insumos
* **Pergunta-chave:** *"Quais insumos materiais, humanos e financeiros foram alocados?"*
* **Analogia:** Relatórios de consumo de um data center (energia, técnicos contratados, espaço físico).
* **Métricas Principais:**
  * **Horas-Homem:** Esforço total da equipe consumido em uma sprint ou release.
  * **Custo com Infraestrutura de Nuvem:** Fatura mensal com servidores, instâncias de banco de dados e tráfego de rede.
  * **Tamanho da Equipe & Rotação:** Quantidade de desenvolvedores alocados e taxa de turnover.
  * **Licenças e Ferramental:** Investimento em ferramentas de monitoramento, CI/CD e IDEs.

## 3. Métricas de Processo: Monitorando o Fluxo de Entrega
* **Pergunta-chave:** *"Estamos desenvolvendo e entregando com eficiência e fluidez?"*
* **Analogia:** O pipeline de CI/CD: tempos de build, testes automatizados e deploy em produção.
* **Métricas Principais:**
  * **Lead Time:** Tempo total decorrido desde a criação da demanda até a chegada ao cliente final.
  * **Cycle Time:** Tempo em que a tarefa esteve ativamente em desenvolvimento.
  * **Taxa de Retrabalho:** Percentual de horas ou tarefas refeitas por falha de requisitos ou testes.
  * **Tempo Médio para Resolução de Bugs (MTTR):** Agilidade da equipe em restaurar o serviço normal após um incidente.

## 4. Métricas de Produto: Avaliando o Software Entregue
* **Pergunta-chave:** *"O artefato final atende aos padrões de qualidade, confiabilidade e performance?"*
* **Analogia:** Painel de telemetria do servidor em produção: latência da API, consumo de memória e taxa de erro.
* **Métricas Principais:**
  * **Complexidade Ciclomática:** Quantidade de caminhos de execução independentes no código-fonte.
  * **Tempo de Resposta da API:** Latência média em milissegundos para requisições críticas.
  * **Taxa de Sucesso em Tarefas (Usabilidade):** Percentual de usuários que concluem com êxito um fluxo operacional.
  * **Tamanho do Pacote de Instalação:** Dimensão do bundle gerado para distribuição ao cliente.

## 5. Lidando com Ambiguidades: O Propósito Prevalece
Nem todas as métricas pertencem a uma gaveta rígida. Algumas combinam atributos de naturezas diferentes:

* **O Caso Clássico da Densidade de Defeitos (`Defeitos / KLOC`):**
  * O número de defeitos decorre do **Produto**.
  * A contagem de linhas (KLOC) é uma dimensão do **Produto**.
  * No entanto, o resultado final avalia a eficácia do **Processo de QA e Desenvolvimento**!
* **A Regra de Ouro:** Não se apegue apenas ao nome da métrica. Avalie **qual pergunta de negócio ela responde** no seu cenário.

## 6. Síntese Comparativa Rápida
Consulte a tabela de referência rápida com classificações fundamentadas:

| Métrica Avaliada | Classificação | Justificativa Técnica |
|---|---|---|
| **Tempo de Execução da Suíte de Testes** | **Processo** | Avalia a duração e eficiência de uma fase do ciclo de entrega. |
| **Custo Mensal de Servidores AWS/GCP** | **Recursos** | Refere-se a gastos com infraestrutura técnica necessária. |
| **Tempo de Resposta da API de Pagamentos** | **Produto** | Mede o desempenho técnico intrínseco de uma funcionalidade em produção. |
| **Taxa de Falha em Builds de Integração** | **Processo** | Avalia a estabilidade do fluxo automatizado de integração contínua. |
| **Tamanho do Arquivo Executável / Bundle** | **Produto** | Reflete uma característica física e estrutural do artefato final. |
| **Horas de Treinamento da Equipe** | **Recursos** | Investimento de tempo e capital no desenvolvimento de habilidades humanas. |
