---
id: "introducao"
titulo: "Introdução às Métricas de Software"
modulo: 1
tempoLeitura: "5 min"
fonte: "Material 06 - Introdução às Métricas de Software"
atividadeVinculadaId: "classificacao"
---

# Introdução às Métricas de Software

Fundamentos essenciais de medição em Engenharia de Software: como transformar dados qualitativos em indicadores concretos para tomada de decisão sem navegar às cegas.

## 1. O Princípio Fundamental & Definição Técnica
> *"O que não se mede, não se gerencia."* — **Peter Drucker**

No desenvolvimento de software, navegar sem métricas é como pilotar um avião sem altímetro ou combustível. 

* **Definição Técnica:** Uma métrica de software é a **medição sistemática de um atributo específico** de uma entidade de software.
* **As Três Entidades Básicas:**
  * **Recursos:** Pessoas, ferramentas, infraestrutura e orçamento.
  * **Processo:** Métodos, fluxos e práticas de engenharia.
  * **Produto:** O artefato entregue (código-fonte, interfaces e documentação).

## 2. Finalidade das Métricas: Observar, Comparar e Controlar
O objetivo de quantificar aspectos do software divide-se em três ações progressivas:

* 👁️ **Observar:** Coletar dados de forma objetiva e automatizada (ex: taxa de falhas em produção).
* ⚖️ **Comparar:** Contrastar o valor observado contra padrões históricos, metas da sprint ou benchmarks do setor.
* 🎯 **Controlar:** Utilizar a evidência comparada para ajustar rumos, corrigir gargalos e fundamentar decisões técnicas.

## 3. As Três Lentes de Medição
Toda métrica responde a uma pergunta gerencial distinta:

| Categoria | Pergunta Central | O que avalia? | Exemplos Práticos |
|---|---|---|---|
| **Recursos** | *"Quais insumos foram consumidos?"* | Esforço humano, custo e capacidade instalada | Horas-homem, custo de nuvem, licenças |
| **Processo** | *"Estamos construindo com eficiência?"* | O fluxo e a cadência das atividades de entrega | Lead time, tempo de ciclo, taxa de retrabalho |
| **Produto** | *"O que entregamos tem qualidade?"* | As propriedades intrínsecas do software final | LOC, complexidade ciclomática, tempo de resposta |

## 4. Formulação de Métricas de Alta Qualidade: Framework SMART
Uma métrica mal formulada gera desmotivação e dados inúteis. Aplique sempre o critério **SMART**:

* **S (Specific - Específica):** Foco claro. *Evite:* "Melhorar a qualidade". *Prefira:* "Reduzir bugs críticos no checkout".
* **M (Measurable - Mensurável):** Unidade objetiva (%, tempo, contagem numérica).
* **A (Achievable - Atingível):** Metas desafiadoras, porém realistas para o contexto da equipe.
* **R (Relevant - Relevante):** Conectada aos objetivos do produto e do negócio.
* **T (Time-bound - Temporal):** Com janela e frequência definidas (ex: medição semanal ou por release).

## 5. A Lei de Goodhart & O Risco da Punição (Gaming)
> *"Quando uma medida se torna uma meta, ela deixa de ser uma boa medida."* — **Lei de Goodhart**

* **O Efeito Colateral do 'Gaming':** Se desenvolvedores forem recompensados ou punidos por quantidade de commits, farão commits triviais e vazios apenas para inflar o número.
* **Cultura de Aprendizado vs. Punição:** Métricas devem ser usadas para **diagnosticar falhas sistêmicas no processo**, e nunca para coagir ou punir indivíduos.

## 6. Output (Saída) versus Outcome (Valor de Negócio)
* **Output (Atividade):** Mede o volume de trabalho produzido (ex: 50 features entregues no trimestre, 10.000 linhas escritas).
* **Outcome (Impacto):** Mede o resultado concreto gerado para os usuários e o negócio (ex: aumento de 20% nas conversões, redução de 40% nas reclamações de lentidão).
* 💡 *Lição Ágil:* É preferível entregar **10 features com alto outcome** do que 50 features que ninguém utiliza.
