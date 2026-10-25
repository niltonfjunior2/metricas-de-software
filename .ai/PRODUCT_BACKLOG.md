# PRODUCT BACKLOG — PLATAFORMA DE MÉTRICAS DE SOFTWARE

Organizado por valor de negócio, derivado do [PROJECT_DNA.md](file:///c:/Users/Nilton/Workspaces/Diversos/metricas-de-software/PROJECT_DNA.md).

---

## EPIC 1: Fundação Visual & Design System Unificado
**Objetivo:** Estabelecer a identidade visual moderna (Dark Mode), tokens de estilização e o layout responsivo que abrigará tanto os conteúdos teóricos quanto as atividades interativas.
**Prioridade:** Alta (Bloqueante para as demais entregas)

### Feature 1.1: Design Tokens e Layout Shell
* **User Story:** Como estudante ou profissional acessando a plataforma, quero navegar em uma interface limpa, moderna e responsiva com tema escuro imersivo, para que minha experiência de leitura e interação seja agradável e sem distrações visuais.
* **Critérios de Aceite:**
  1. Paleta de cores semântica definida em CSS Variables (`--bg-main`, `--bg-card`, `--accent-blue`, `--color-recursos`, `--color-processo`, `--color-produto`).
  2. Tipografia legível com fontes modernas (sans-serif para texto, monospace para métricas e fórmulas).
  3. Header fixo com logo, links de navegação ("Trilha Teórica", "Atividades Práticas", "Sobre") e indicador de contexto.
  4. Responsividade testada em Mobile (375px+), Tablet e Desktop (1280px+).
* **Dependências:** Nenhuma.
* **Prioridade:** Must Have.

---

## EPIC 2: Motor de Conteúdo Teórico em Acordeões
**Objetivo:** Permitir a leitura ágil de conceitos de métricas de software sem sobrecarga de textos extensos, estruturados via Markdown.
**Prioridade:** Alta

### Feature 2.1: Parser e Renderizador de Markdown com Formato Accordion
* **User Story:** Como leitor, quero visualizar os tópicos conceituais organizados em seções expansíveis (accordions), para que eu possa explorar os conceitos sob demanda e focar no que realmente preciso aprender.
* **Critérios de Aceite:**
  1. Cada arquivo Markdown em `conteudos/teoria/` deve ser lido e transformado em um grupo de accordions onde cada cabeçalho de segundo nível (`##`) vira um bloco retrátil.
  2. Apenas uma lâmina pode estar aberta por vez (ou modo multi-abertura configurável), com animação suave de transição (max-height / grid transition).
  3. Suporte a caixas de destaque semânticas (Notas, Avisos, Fórmulas e Exemplos Práticos).
  4. Botão de "Expandir Todos" e "Recolher Todos" para comodidade do usuário.
* **Dependências:** Feature 1.1.
* **Prioridade:** Must Have.

### Feature 2.2: Transposição dos Conteúdos Iniciais dos PDFs
* **User Story:** Como usuário, quero acessar os conceitos essenciais dos materiais "06 - Introdução às Métricas" e "07 - Identificação e Classificação de Métricas" em linguagem concisa, para que eu compreenda as diferenças fundamentais entre Métricas de Processo, Produto e Recursos.
* **Critérios de Aceite:**
  1. Arquivo `01-introducao-metricas.md` criado com: definição de medição vs. métrica, por que medir em software, métricas diretas vs. indiretas, armadilhas clássicas.
  2. Arquivo `02-classificacao-metricas.md` criado com: Métricas de Recursos (esforço, custo, equipe), Métricas de Processo (lead time, cycle time, taxa de defeitos), Métricas de Produto (complexidade ciclomática, tamanho/LOC, acoplamento).
  3. Cada módulo contém um call-to-action no final apontando diretamente para a atividade prática vinculada.
* **Dependências:** Feature 2.1.
* **Prioridade:** Must Have.

---

## EPIC 3: Reconstrução e Integração das Atividades Interativas
**Objetivo:** Reconstruir no design system as atividades práticas existentes, mantendo seu conteúdo rico e regras originais, viabilizando acesso tanto contextualizado quanto direto.
**Prioridade:** Alta

### Feature 3.1: Atividade 1 — Classificação de Métricas (Recursos, Processo, Produto)
* **User Story:** Como aprendiz, quero classificar métricas em Recursos, Processo ou Produto por meio de cartões interativos e atalhos rápidos de teclado/clique, recebendo feedback imediato sobre meus acertos e justificativas conceituais.
* **Critérios de Aceite:**
  1. Incorporar os 10 cenários/métricas da atividade original (`classificacao_metricas.html`).
  2. Suporte a interação por mouse/touch e teclas de atalho (1/R para Recursos, 2/P para Processo, 3/D para Produto).
  3. Feedback visual imediato com explicação técnica e contextualização do porquê da classificação.
  4. Tela final de resultados com pontuação, taxa de acerto e opção de reiniciar.
* **Dependências:** Feature 1.1.
* **Prioridade:** Must Have.

### Feature 3.2: Atividade 2 — Auditoria e Identificação de Métricas em Cenários Reais
* **User Story:** Como usuário em treinamento, quero analisar cenários complexos de projetos de software e identificar se uma métrica proposta é de alto valor, neutra ou ruído prejudicial, para desenvolver pensamento crítico sobre medição.
* **Critérios de Aceite:**
  1. Incorporar os cenários detalhados da atividade original (`auditoria_metricas_cenarios.html`).
  2. Mecânica de auditoria com destaque para identificação de métricas vaidosas vs. métricas acionáveis.
  3. Painel de explicação profunda e recomendação de boas práticas para cada decisão do auditor.
  4. Resumo final da auditoria com perfil de acurácia.
* **Dependências:** Feature 1.1.
* **Prioridade:** Must Have.

### Feature 3.3: Hub Central de Atividades Independentes
* **User Story:** Como estudante revisando para uma prova ou instrutor em sala de aula, quero acessar uma página de "Catálogo de Atividades" que lista todos os exercícios disponíveis de forma avulsa, para que eu possa praticar sem precisar reler a teoria.
* **Critérios de Aceite:**
  1. Rota/Visão `/atividades` exibindo cards com título, descrição resumida, nível de dificuldade estimado, tempo médio e categoria.
  2. Status visual indicando se a atividade já foi concluída na sessão atual (opcional via LocalStorage).
* **Dependências:** Feature 3.1, Feature 3.2.
* **Prioridade:** Should Have.

---

## EPIC 4: Extensibilidade & Governança de Novos Conteúdos
**Objetivo:** Garantir que novos tópicos e atividades possam ser plugados por meio de arquivos no repositório sem alterar o núcleo do site.
**Prioridade:** Média

### Feature 4.1: Registro Dinâmico de Módulos e Validação de Schema
* **User Story:** Como autor de conteúdo adicionando uma nova aula ou exercício, quero apenas criar um novo arquivo `.md` ou `.ts` na pasta designada, para que o site o indexe automaticamente na barra de navegação e no índice de conteúdos.
* **Critérios de Aceite:**
  1. Sistema de auto-descoberta de arquivos de conteúdo via glob import do Vite.
  2. Ordenação configurada através do campo `ordem` no frontmatter.
  3. Guia de documentação e template de novo arquivo Markdown incluído no repositório.
* **Dependências:** Feature 2.1, Feature 3.3.
* **Prioridade:** Should Have.

---

## EPIC 5: Deploy Contínuo, Otimizações & Qualidade
**Objetivo:** Assegurar entrega contínua com zero quebras de build, auditoria Lighthouse e deploy na Vercel.
**Prioridade:** Média

### Feature 5.1: Pipeline de Build e Deploy na Vercel
* **User Story:** Como mantenedor do projeto, quero que cada alteração aprovada no branch principal gere automaticamente um deploy de produção na Vercel, para manter o site sempre atualizado e disponível.
* **Critérios de Aceite:**
  1. Arquivo de configuração `vercel.json` com rotas SPA/clean URLs e headers de segurança.
  2. Scripts no `package.json` para `build`, `preview`, `lint` e `test`.
  3. Pontuação de performance e acessibilidade no Lighthouse superior a 95.
* **Dependências:** Todas as anteriores.
* **Prioridade:** Must Have.
