# IMPLEMENTATION PLAN — PLATAFORMA DE MÉTRICAS DE SOFTWARE

Este plano orienta o desenvolvimento passo a passo, minimizando riscos arquiteturais e entregando valor tangível a cada sprint.

---

## 1. Visão Geral das Fases e Marcos (Milestones)

```
[FASE 1: Fundação & Setup]  -->  [FASE 2: Núcleo Teórico]  -->  [FASE 3: Atividades Práticas]  -->  [FASE 4: Integração & Deploy]
        M1: Shell & Tokens            M2: Accordion & MD             M3: Games Integrados               M4: Produção Vercel
```

* **Milestone 1 (M1):** Infraestrutura do projeto configurada com Design Tokens, Shell responsivo e roteador leve funcionando.
* **Milestone 2 (M2):** Conteúdos teóricos iniciais (06 e 07) convertidos para Markdown e renderizados em acordeões interativos.
* **Milestone 3 (M3):** Atividades de "Classificação" e "Auditoria" completamente reconstruídas e operacionais no design system unificado.
* **Milestone 4 (M4):** Hub de atividades avulsas, testes de performance, validação de acessibilidade e deploy na Vercel ativo.

---

## 2. Divisão por Sprints

### Sprint 1: Setup da Plataforma, Design System & Layout Shell
* **Objetivo:** Estabelecer a base tecnológica com Vite + TypeScript + Vanilla CSS Design Tokens e criar a casca visual da aplicação.
* **Tarefas de Execução:**
  1. Inicializar projeto Vite com TypeScript (zero dependências pesadas).
  2. Implementar a camada de Design Tokens em CSS (`variables.css`) com o tema escuro idêntico às paletas ricas das atividades existentes.
  3. Criar componentes centrais do Layout Shell: Header/Navbar, Main Content Container, Footer e Sidebar de navegação.
  4. Configurar roteador SPA client-side leve baseado em rotas hash ou HTML5 History API.
  5. Configurar ferramentas de linting e validação de código.
* **Entregável da Sprint:** Aplicação executando localmente com navegação funcional entre as visões principais (mesmo com placeholders).

---

### Sprint 2: Motor de Conteúdo Teórico em Accordion & Carga Inicial
* **Objetivo:** Implementar o parser de Markdown com rendering em formato de acordeões dinâmicos e alimentar os conteúdos conceituais de introdução e classificação.
* **Tarefas de Execução:**
  1. Integrar parser leve de Markdown (ex: `marked`) com sanitização de HTML.
  2. Desenvolver o componente `Accordion` com animação suave de expansão/recolhimento e suporte a atalhos de teclado.
  3. Criar `conteudos/teoria/01-introducao-metricas.md` sintetizando os conceitos centrais do PDF 06 (medição, atributos internos/externos, diretas/indiretas).
  4. Criar `conteudos/teoria/02-classificacao-metricas.md` sintetizando os conceitos centrais do PDF 07 (recursos, processo, produto).
  5. Adicionar cards semânticos de síntese visual no final de cada tópico.
* **Entregável da Sprint:** Páginas de teoria 100% navegáveis, com leitura agradável em acordeões e sem sobrecarga de texto.

---

### Sprint 3: Reconstrução da Atividade 1 (Classificação de Métricas)
* **Objetivo:** Portar a mecânica interativa de classificação de métricas para a arquitetura do site, aproveitando os tokens globais.
* **Tarefas de Execução:**
  1. Estruturar os dados dos 10 desafios de classificação em TypeScript com tipagem estrita (`MetricCategory: 'recursos' | 'processo' | 'produto'`).
  2. Implementar o card interativo com animações de transição de pergunta.
  3. Integrar controle por teclado (teclas 1, 2, 3 ou R, P, D) e toque em dispositivos móveis.
  4. Criar caixa de feedback dinâmico com explicação do porquê da classificação correta.
  5. Desenvolver tela de consolidação de resultado final com score e botão de reiniciar.
  6. Vincular a atividade ao final do módulo teórico correspondente (`02-classificacao-metricas.md`).
* **Entregável da Sprint:** Atividade 1 jogável nativamente na plataforma com visual refinado e zero dependências externas.

---

### Sprint 4: Reconstrução da Atividade 2 (Auditoria de Cenários) & Hub Avulso
* **Objetivo:** Portar a atividade de auditoria de métricas e construir o catálogo de acesso independente a todas as atividades.
* **Tarefas de Execução:**
  1. Estruturar o banco de cenários de auditoria (`auditoria_metricas_cenarios.html`) em TypeScript.
  2. Implementar a interface de análise crítica de cenários (métrica acionável vs. ruído/vaidade).
  3. Implementar lógica de pontuação ponderada e explicações aprofundadas com lições aprendidas.
  4. Desenvolver a página de catálogo `/atividades`, permitindo que o usuário escolha e jogue qualquer exercício diretamente.
* **Entregável da Sprint:** Ambas as atividades disponíveis tanto de forma contextualizada após a teoria quanto pelo catálogo independente.

---

### Sprint 5: Validação Hostil, Acessibilidade & Deploy Vercel
* **Objetivo:** Refinar performance, acessibilidade, SEO, mobile touch e colocar em produção no Vercel via GitHub.
* **Tarefas de Execução:**
  1. Realizar auditoria de performance no Lighthouse (Meta: 95+ em Performance, Acessibilidade e Best Practices).
  2. Adicionar meta tags semânticas, Open Graph e favicon temático.
  3. Criar `vercel.json` com regras de cache para assets estáticos e fallback de rotas SPA.
  4. Validar fluxo de edição de novos arquivos Markdown (instruções do mantenedor).
  5. Deploy na Vercel e homologação final em múltiplos dispositivos.
* **Entregável da Sprint:** Aplicação em produção na Vercel, com código commitado no repositório GitHub.

---

## 3. Matriz de Dependências Técnicas

| Etapa | Depende de | Impacto se atrasar |
|---|---|---|
| **Design Tokens & Shell** | Nenhuma | Bloqueia todas as telas visuais |
| **Componente Accordion** | Design Tokens | Bloqueia a apresentação da teoria |
| **Atividade 1** | Design Tokens & Shell | Não impacta o módulo teórico |
| **Atividade 2** | Atividade 1 (padrão de componentes) | Não impacta o módulo teórico |
| **Hub de Atividades** | Atividade 1 e Atividade 2 | Apenas funcionalidade avulsa |
| **Deploy Vercel** | Sprints 1 a 4 | Entrega final |
