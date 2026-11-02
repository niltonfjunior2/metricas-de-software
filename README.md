# MétricaLab • Laboratório de Métricas em Engenharia de Software

[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2%20(33%20passed)-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel%20Edge-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Plataforma web moderna, aberta, auto-instrucional e de alto impacto visual voltada para o aprendizado prático de **Métricas de Software** em Engenharia de Software. O projeto combina teoria concisa estruturada em **acordeões dinâmicos** com **três simuladores interativos** focados na classificação, auditoria de cenários reais e tomada de decisão estratégica como Tech Lead.

---

## 🎯 Objetivos do Projeto

* **Ensino Prático e Imersivo:** Permitir que estudantes universitários, desenvolvedores em capacitação e líderes técnicos assimilem fundamentos de medição através de experimentação direta, superando o modelo passivo de leitura tradicional.
* **Visão Sistêmica de Engenharia:** Demonstrar como as três grandes lentes de medição (**Recursos**, **Processo** e **Produto**) formam uma cadeia de causa e efeito interligada: alterações em insumos e equipe afetam a cadência de entrega, que por sua vez determinam a qualidade intrínseca do software final.
* **Tomada de Decisão do Tech Lead:** Desenvolver pensamento crítico para distinguir indicadores de alto valor de **métricas de vaidade** e ruídos de projeto, capacitando o profissional a formular ações táticas imediatas e soluções estratégicas de longo prazo.
* **Acesso Aberto e Sustentabilidade:** Custo zero de infraestrutura ($0/mês), sem necessidade de login ou cadastro, processamento 100% *client-side* e entrega contínua em Edge CDN global via Vercel.

---

## 📚 Trilha Teórica (Módulos em Acordeão)

Os conteúdos conceituais são mantidos de forma desacoplada em arquivos Markdown (`src/content/teoria/`) e renderizados como lâminas retráteis com animações suaves em CSS Grid:

1. **Módulo 01: Introdução às Métricas de Software**
   * Por que medir em software: transição do "achismo" para decisões orientadas a evidências empíricas.
   * As três entidades de medição: Recursos, Processo e Produto.
   * Formulação de métricas de alta qualidade com o framework **SMART**.
   * A **Lei de Goodhart** e o risco do *gaming* (distorção de comportamento por metas cegas).
   * Diferença essencial entre *Output* (volume de trabalho bruto) e *Outcome* (valor real de negócio).

2. **Módulo 02: Identificação e Classificação de Métricas**
   * Métricas Diretas (contagens objetivas imediatas) vs. Métricas Indiretas (cálculos derivados e taxas percentuais).
   * **Métricas de Recursos:** Horas-homem, esforço da equipe, orçamento, custo em nuvem e licenças de software.
   * **Métricas de Processo:** Lead Time, Cycle Time, Throughput, taxa de retrabalho e eficiência na detecção de falhas.
   * **Métricas de Produto:** Complexidade ciclomática, tamanho (LOC), acoplamento, coesão e defeitos em produção.

3. **Módulo 03: Qualidade, o Engenheiro de Software e o Papel do Tech Lead**
   * Qualidade como prática contínua de engenharia (*Quality by Design*) e postura de sustentação de longo prazo (*Day 2*).
   * A interdependência sistêmica entre Recursos, Processo e Produto.
   * O papel do **Tech Lead**: tradução de dados técnicos para a diretoria executiva, filtro de métricas de vaidade e proteção da equipe contra pressões irreais.
   * Resolução estruturada de crises: **Ações Táticas** (curto prazo para estancar sangramentos) versus **Ações Estratégicas** (estruturais para soluções definitivas).

---

## 🎮 Catálogo de Atividades Práticas & Simuladores

A plataforma abriga três ambientes interativos integrados nativamente ao Design System da aplicação:

| Atividade | Mecânica | Descrição |
|---|---|---|
| **01. Classificação de Métricas** | Cartões Interativos com Atalhos de Teclado | 30 métricas reais para classificar em Recursos (<kbd>1</kbd>/<kbd>R</kbd>), Processo (<kbd>2</kbd>/<kbd>P</kbd>) ou Produto (<kbd>3</kbd>/<kbd>D</kbd>), com feedback cromático imediato, explicação pedagógica e tela final de aproveitamento por dimensão. Modos rápido (10 desafios) e completo (30 desafios). |
| **02. Auditoria de Cenários** | Auditoria Crítica e Filtro de Vaidade | 20 cenários corporativos complexos para avaliar o objetivo gerencial da medição, revelar a tríade de métricas SMART recomendada e auditar ruídos de vaidade que tentam contaminar a gestão do projeto. |
| **03. Simulador de Tech Lead** | Progressão Cognitiva em 4 Fases | 15 estudos de caso aprofundados intercalando cenários de crise e governança de sucesso (Armazéns, Automação CI/CD, Checkout, FinOps/Nuvem, Logística, Strangler Pattern, Fintech, Shift-Left Testing, SaaS, Maturidade DORA, Terceirização, Débito Técnico, Hospitalar, SRE e Gestão Sistêmica). Cada caso avança por: **Fase 1 (Baseline)** $\rightarrow$ **Fase 2 (O Dilema)** $\rightarrow$ **Fase 3 (O Desafio)** $\rightarrow$ **Fase 4 (Resolução com Painel Projetado Pós-Ação)**. |

---

## 🎨 Diferenciais de Interface & Acessibilidade

* **Dark Theme & Light Theme:** Alternância instantânea de tema no cabeçalho ou pelo atalho de teclado <kbd>T</kbd>, com persistência automática no navegador (`metrics_theme`).
* **Sidebar Retrátil:** Barra lateral recolhível no desktop com botão `[◀ Recuar]` para ampliar a visualização de tabelas e botão flutuante `[▶ Menu]` para reabertura com persistência de estado (`metrics_sidebar_collapsed`).
* **Navegação Total por Teclado:** Suporte a atalhos rápidos (<kbd>Espaço</kbd>/<kbd>Enter</kbd> para avançar fases, setas direcionais <kbd>←</kbd> <kbd>→</kbd> para trocar de cenário).
* **Feedback Auditivo Sintético:** Síntese sonora sutil e não-bloqueante via Web Audio API nativa (sem necessidade de baixar arquivos MP3 externos).

---

## 🛡️ Arquitetura, Segurança & Conformidade (LGPD)

* **JAMstack Estático Puro:** Construído com Vite + TypeScript + Vanilla CSS Variables, servido integralmente via Edge CDN global na Vercel com carregamento inicial abaixo de 500ms.
* **Zero Coleta de Dados Pessoais (Privacy by Design):** Sem formulários, sem banco de dados exposto e sem cookies de rastreamento invasivo (100% em conformidade com as diretrizes da LGPD).
* **Higienização e Zero Trust:** Conteúdos em Markdown passam por validação estrita e sanitização contra ataques XSS via DOMPurify.
* **Ciclo de Vida de Eventos:** Cada módulo e atividade SPA implementa o contrato `ViewResult { element, cleanup?: () => void }`, garantindo o descarte limpo de *listeners* globais e prevenindo vazamentos de memória.

---

## 🛠️ Tecnologias Utilizadas

* **Bundler & Build Tool:** [Vite 6](https://vitejs.dev/)
* **Linguagem:** [TypeScript 5.6](https://www.typescriptlang.org/) (Strict Mode com zero warnings)
* **Estilização:** Vanilla CSS estruturado em Design Tokens (`variables.css`, `layout.css`, `components.css`, `techlead.css`)
* **Parser de Markdown:** [Marked](https://marked.js.org/) + [DOMPurify](https://github.com/cure53/DOMPurify)
* **Testes Automatizados:** [Vitest 3](https://vitest.dev/) com ambiente JSDOM (33 testes passando)
* **Qualidade de Código:** [ESLint 9](https://eslint.org/) (Flat Config) e [Prettier](https://prettier.io/)
* **Hospedagem & CI/CD:** [Vercel](https://vercel.com/) com deploy automático via GitHub

---

## 📦 Como Executar Localmente

### Pré-requisitos
* Node.js 18+ instalado
* NPM ou gerenciador de pacotes equivalente

### Instalação e Execução

```bash
# 1. Clonar o repositório
git clone https://github.com/niltonfjunior2/metricas-de-software.git
cd metricas-de-software

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento local
npm run dev
```

Acesse a aplicação no navegador em: `http://localhost:3000` (ou porta indicada no terminal).

### Scripts Disponíveis

```bash
npm run dev         # Inicia o servidor local com Hot Module Replacement (HMR)
npm run test        # Executa a suíte de 33 testes unitários com Vitest
npm run test:watch  # Executa os testes em modo observador contínuo
npm run lint        # Valida o código TypeScript e regras estáticas com ESLint 9
npm run format      # Formata todos os arquivos do repositório via Prettier
npm run build       # Checa tipos com tsc --noEmit e compila os assets otimizados em dist/
npm run preview     # Executa localmente o bundle de produção compilado
```

---

## 🧩 Como Adicionar Novos Conteúdos e Módulos

### 1. Adicionar Novo Tópico Teórico
Os conteúdos residem em `src/content/teoria/`:
1. Crie o arquivo `0X-nome-do-modulo.md`.
2. Adicione o frontmatter com `id`, `titulo`, `modulo`, `tempoLeitura`, `fonte` e `atividadeVinculadaId`.
3. Use títulos de segundo nível (`##`) para cada seção que se tornará uma lâmina do acordeão.
4. Registre o novo módulo no array `modules` em `src/views/TheoryView.ts` e na barra lateral `src/components/Sidebar.ts`.

### 2. Adicionar Nova Atividade Interativa
As atividades modulares residem em `src/activities/`:
1. Crie a pasta `src/activities/<nome-da-atividade>/`.
2. Estruture os dados e contratos em `data.ts` com tipagem explícita em TypeScript.
3. Crie a camada de visualização em `index.ts` retornando o elemento raiz e a função de `cleanup()`.
4. Registre a rota e o card correspondente em `src/views/ActivitiesView.ts`.

---

## 📄 Licença e Uso Acadêmico

Desenvolvido para fins estritamente educacionais no âmbito da **Engenharia de Software**.  
Projeto de autoria do **Prof. Nilton F. Junior**, mantido como recurso educacional aberto (REA).

Consulte os [Termos de Uso](https://metricas-de-software.vercel.app/#/termos) e a [Política de Privacidade](https://metricas-de-software.vercel.app/#/privacidade) para mais detalhes sobre os princípios de governança e uso institucional da plataforma.
