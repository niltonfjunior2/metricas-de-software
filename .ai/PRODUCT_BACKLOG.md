# PRODUCT BACKLOG — PLATAFORMA DE MÉTRICAS DE SOFTWARE

Organizado por valor de negócio, derivado do [PROJECT_DNA.md](file:///c:/Users/Nilton/Workspaces/Diversos/metricas-de-software/PROJECT_DNA.md).

---

## EPIC 1: Fundação Visual & Design System Unificado
**Objetivo:** Estabelecer a identidade visual moderna (Dark Mode), tokens de estilização e o layout responsivo que abrigará tanto os conteúdos teóricos quanto as atividades interativas.  
**Status do Épico:** `[CONCLUÍDO]` (Sprint 1)

### Feature 1.1: Design Tokens e Layout Shell
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como estudante ou profissional acessando a plataforma, quero navegar em uma interface limpa, moderna e responsiva com tema escuro imersivo, para que minha experiência de leitura e interação seja agradável e sem distrações visuais.
* **Critérios de Aceite:**
  1. [x] Paleta de cores semântica definida em CSS Variables (`--bg-main`, `--bg-card`, `--accent-blue`, `--color-recursos`, `--color-processo`, `--color-produto`).
  2. [x] Tipografia legível com fontes modernas (sans-serif para texto, monospace para métricas e fórmulas).
  3. [x] Header fixo com logo, links de navegação ("Trilha Teórica", "Atividades Práticas", "Sobre") e indicador de contexto.
  4. [x] Responsividade testada em Mobile (375px+), Tablet e Desktop (1280px+).
* **Dependências:** Nenhuma.
* **Prioridade:** Must Have.

---

## EPIC 2: Motor de Conteúdo Teórico em Acordeões
**Objetivo:** Permitir a leitura ágil de conceitos de métricas de software sem sobrecarga de textos extensos, estruturados via Markdown.  
**Status do Épico:** `[CONCLUÍDO]` (Sprint 2)

### Feature 2.1: Parser e Renderizador de Markdown com Formato Accordion
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como leitor, quero visualizar os tópicos conceituais organizados em seções expansíveis (accordions), para que eu possa explorar os conceitos sob demanda e focar no que realmente preciso aprender.
* **Critérios de Aceite:**
  1. [x] Cada arquivo Markdown em `conteudos/teoria/` deve ser lido e transformado em um grupo de accordions onde cada cabeçalho de segundo nível (`##`) vira um bloco retrátil.
  2. [x] Animação suave de transição (grid-template-rows 0fr para 1fr).
  3. [x] Suporte a caixas de destaque semânticas (Notas, Avisos, Fórmulas e Exemplos Práticos).
  4. [x] Botões de "Expandir Todos" e "Recolher Todos" para comodidade do usuário.
* **Dependências:** Feature 1.1.
* **Prioridade:** Must Have.

### Feature 2.2: Transposição dos Conteúdos Iniciais dos PDFs
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como usuário, quero acessar os conceitos essenciais dos materiais "06 - Introdução às Métricas" e "07 - Identificação e Classificação de Métricas" em linguagem concisa, para que eu compreenda as diferenças fundamentais entre Métricas de Processo, Produto e Recursos.
* **Critérios de Aceite:**
  1. [x] Arquivo `01-introducao-metricas.md` criado com: definição de medição vs. métrica, por que medir em software, métricas diretas vs. indiretas, armadilhas clássicas.
  2. [x] Arquivo `02-classificacao-metricas.md` criado com: Métricas de Recursos (esforço, custo, equipe), Métricas de Processo (lead time, cycle time, taxa de defeitos), Métricas de Produto (complexidade ciclomática, tamanho/LOC, acoplamento).
  3. [x] Cada módulo contém um call-to-action no final apontando diretamente para a atividade prática vinculada.
* **Dependências:** Feature 2.1.
* **Prioridade:** Must Have.

---

## EPIC 3: Reconstrução e Integração das Atividades Interativas
**Objetivo:** Reconstruir no design system as atividades práticas existentes, mantendo seu conteúdo rico e regras originais, viabilizando acesso tanto contextualizado quanto direto.  
**Status do Épico:** `[CONCLUÍDO]` (Sprints 3 e 4)

### Feature 3.1: Atividade 1 — Classificação de Métricas (Recursos, Processo, Produto)
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como aprendiz, quero classificar métricas em Recursos, Processo ou Produto por meio de cartões interativos e atalhos rápidos de teclado/clique, recebendo feedback imediato sobre meus acertos e justificativas conceituais.
* **Critérios de Aceite:**
  1. [x] Incorporar os 30 cenários/métricas da atividade original (`classificacao_metricas.html`), com modo de 10 desafios rápidos e modo completo com todos os 30.
  2. [x] Suporte a interação por mouse/touch e teclas de atalho (1/R para Recursos, 2/P para Processo, 3/D para Produto).
  3. [x] Feedback visual imediato com explicação técnica e contextualização do porquê da classificação.
  4. [x] Tela final de resultados com pontuação, taxa de acerto por dimensão e opção de reiniciar.
* **Dependências:** Feature 1.1.
* **Prioridade:** Must Have.

### Feature 3.2: Atividade 2 — Auditoria e Identificação de Métricas em Cenários Reais
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como usuário em treinamento, quero analisar cenários complexos de projetos de software e identificar se uma métrica proposta é de alto valor, neutra ou ruído prejudicial, para desenvolver pensamento crítico sobre medição.
* **Critérios de Aceite:**
  1. [x] Incorporar os 20 cenários detalhados da atividade original (`auditoria_metricas_cenarios.html`).
  2. [x] Mecânica de auditoria com destaque para identificação de métricas vaidosas vs. métricas acionáveis.
  3. [x] Painel de explicação profunda e recomendação de boas práticas para cada decisão do auditor.
  4. [x] Resumo e navegação entre todos os cenários com dropdown de salto direto e atalhos de teclado.
* **Dependências:** Feature 1.1.
* **Prioridade:** Must Have.

### Feature 3.3: Hub Central de Atividades Independentes
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como estudante revisando para uma prova ou instrutor em sala de aula, quero acessar uma página de "Catálogo de Atividades" que lista todos os exercícios disponíveis de forma avulsa, para que eu possa praticar sem precisar reler a teoria.
* **Critérios de Aceite:**
  1. [x] Rota/Visão `/atividades` exibindo cards com título, descrição resumida, nível de dificuldade estimado, tempo médio e categoria.
  2. [x] Status visual indicando atividades disponíveis e links diretos para cada player.
* **Dependências:** Feature 3.1, Feature 3.2.
* **Prioridade:** Should Have.

---

## EPIC 4: Extensibilidade & Governança de Novos Conteúdos
**Objetivo:** Garantir que novos tópicos e atividades possam ser plugados por meio de arquivos no repositório sem alterar o núcleo do site.  
**Status do Épico:** `[CONCLUÍDO]` (Sprints 2 e 5)

### Feature 4.1: Registro Dinâmico de Módulos e Validação de Schema
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como autor de conteúdo adicionando uma nova aula ou exercício, quero apenas criar um novo arquivo `.md` ou `.ts` na pasta designada, para que o site o indexe automaticamente na barra de navegação e no índice de conteúdos.
* **Critérios de Aceite:**
  1. [x] Sistema de parsing desacoplado de Markdown com sanitização e extração de frontmatter.
  2. [x] Estrutura padronizada de dados para atividades em `src/activities/`.
  3. [x] Guia de documentação e template de novo arquivo Markdown incluído no `README.md`.
* **Dependências:** Feature 2.1, Feature 3.3.
* **Prioridade:** Should Have.

---

## EPIC 5: Deploy Contínuo, Otimizações & Qualidade
**Objetivo:** Assegurar entrega contínua com zero quebras de build, auditoria Lighthouse e deploy na Vercel.  
**Status do Épico:** `[CONCLUÍDO]` (Sprint 5)

### Feature 5.1: Pipeline de Build e Deploy na Vercel
* **Status:** `[CONCLUÍDO]`
* **User Story:** Como mantenedor do projeto, quero que cada alteração aprovada no branch principal gere automaticamente um deploy de produção na Vercel, para manter o site sempre atualizado e disponível.
* **Critérios de Aceite:**
  1. [x] Arquivo de configuração `vercel.json` com rotas SPA, clean URLs, cache imutável de 1 ano para assets estáticos e headers de segurança.
  2. [x] Scripts no `package.json` para `build`, `preview`, `lint` e `test`.
  3. [x] Suíte de testes unitários automatizados (24 testes passando com 100% de sucesso).
* **Dependências:** Todas as anteriores.
* **Prioridade:** Must Have.
