# IMPLEMENTATION PLAN — PLATAFORMA DE MÉTRICAS DE SOFTWARE

Este plano orienta o desenvolvimento passo a passo, minimizando riscos arquiteturais e entregando valor tangível a cada sprint.

---

## 1. Visão Geral das Fases e Marcos (Milestones)

```
[FASE 1: Fundação & Setup]  -->  [FASE 2: Núcleo Teórico]  -->  [FASE 3: Atividades Práticas]  -->  [FASE 4: Integração & Deploy]
    [x] M1: Shell & Tokens           [x] M2: Accordion & MD          [x] M3: Games Integrados            [x] M4: Produção Vercel
```

* **Milestone 1 (M1):** `[CONCLUÍDO]` Infraestrutura do projeto configurada com Design Tokens, Shell responsivo e roteador leve funcionando.
* **Milestone 2 (M2):** `[CONCLUÍDO]` Conteúdos teóricos iniciais (06 e 07) convertidos para Markdown e renderizados em acordeões interativos.
* **Milestone 3 (M3):** `[CONCLUÍDO]` Atividades de "Classificação" e "Auditoria" completamente reconstruídas e operacionais no design system unificado.
* **Milestone 4 (M4):** `[CONCLUÍDO]` Hub de atividades avulsas, testes de performance, validação de acessibilidade e deploy na Vercel ativo.

---

## 2. Divisão por Sprints

### Sprint 1: Setup da Plataforma, Design System & Layout Shell
* **Status:** `[CONCLUÍDA]`
* **Objetivo:** Estabelecer a base tecnológica com Vite + TypeScript + Vanilla CSS Design Tokens e criar a casca visual da aplicação.
* **Entregas Realizadas:**
  * Projeto Vite com TypeScript e path aliases `@/*`.
  * Tokens de Design System em CSS Variables (`variables.css`, `layout.css`, `components.css`).
  * Layout Shell com Navbar, Sidebar responsiva e Footer.
  * Roteador SPA hash client-side com despacho reativo.
  * Testes unitários para Shell e Roteador.

---

### Sprint 2: Motor de Conteúdo Teórico em Accordion & Carga Inicial
* **Status:** `[CONCLUÍDA]`
* **Objetivo:** Implementar o parser de Markdown com rendering em formato de acordeões dinâmicos e alimentar os conteúdos conceituais de introdução e classificação.
* **Entregas Realizadas:**
  * Componente `Accordion` com animação via CSS Grid e acessibilidade ARIA.
  * Parser `markdownParser.ts` integrando `marked` com sanitização estrita via `DOMPurify`.
  * Sínteses dos materiais: `01-introducao-metricas.md` (PDF 06) e `02-classificacao-metricas.md` (PDF 07).
  * Renderizador de módulos teóricos com abas e CTA para atividade prática.

---

### Sprint 3: Reconstrução da Atividade 1 (Classificação de Métricas)
* **Status:** `[CONCLUÍDA]`
* **Objetivo:** Portar a mecânica interativa de classificação de métricas para a arquitetura do site, aproveitando os tokens globais.
* **Entregas Realizadas:**
  * Base de dados com 30 métricas reais tipadas em `src/activities/classification/data.ts`.
  * Player interativo com atalhos de teclado (1/R, 2/P, 3/D, Espaço), feedback cromático imediato e explicação pedagógica.
  * Modos de jogo: 10 desafios rápidos ou todos os 30 casos.
  * Tela final com score, aproveitamento por dimensão e reinício de rodada.

---

### Sprint 4: Reconstrução da Atividade 2 (Auditoria de Cenários) & Hub Avulso
* **Status:** `[CONCLUÍDA]`
* **Objetivo:** Portar a atividade de auditoria de métricas e construir o catálogo de acesso independente a todas as atividades.
* **Entregas Realizadas:**
  * Base de dados com os 20 cenários corporativos complexos em `src/activities/audit/data.ts`.
  * Player de auditoria com destaque para o objetivo gerencial, narrativa operacional e desafio.
  * Mecânica de revelação da tríade SMART e painel crítico de auditoria de ruídos de cenário.
  * Catálogo `/atividades` unificado, permitindo prática autônoma de qualquer exercício.

---

### Sprint 5: Validação Hostil, Acessibilidade & Deploy Vercel
* **Status:** `[CONCLUÍDA]`
* **Objetivo:** Refinar performance, acessibilidade, SEO, mobile touch e colocar em produção no Vercel via GitHub.
* **Entregas Realizadas:**
  * Favicon temático SVG e metatags completas de SEO, Open Graph e Twitter Cards.
  * Configuração de produção no `vercel.json` com cache imutável para assets e cabeçalhos de segurança.
  * Documentação executiva completa no `README.md`.
  * 24 testes unitários automatizados cobrindo toda a aplicação com 100% de sucesso.
  * Commit inicial consolidado no Git pronto para deploy.
