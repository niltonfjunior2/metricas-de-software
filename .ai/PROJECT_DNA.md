# PROJECT DNA — PLATAFORMA DE MÉTRICAS DE SOFTWARE

## 1. Visão do Projeto
Prover uma plataforma web moderna, aberta, auto-instrucional e de alto impacto visual para aprendizado de Métricas de Software em Engenharia de Software. O projeto combina teoria concisa em formato de acordeões dinâmicos com atividades práticas e imersivas de classificação e auditoria de métricas, permitindo tanto um fluxo de estudo guiado e modular quanto a exploração livre de exercícios.

## 2. Objetivos
* **Objetivo Pedagógico Primário:** Permitir que estudantes universitários, desenvolvedores em capacitação e profissionais de TI assimilem fundamentos de métricas de software de forma rápida, visual e prática, sem atrito de textos longos.
* **Objetivo de Conteúdo:** Consolidar os conceitos de introdução, identificação e classificação de métricas (Recursos, Processo, Produto; Diretas e Indiretas), com suporte a expansão contínua.
* **Objetivo de Interatividade:** Reconstruir e incorporar nativamente no design system da aplicação atividades ricas (classificação e auditoria de cenários com mecânicas de gamificação e feedback imediato).
* **Objetivo Operacional:** Custo zero de infraestrutura e dependência backend, versionamento 100% via Git e entrega contínua na Vercel.

## 3. Drivers Arquiteturais
Definição de prioridade relativa acordada:
1. **Experiência Visual / Interatividade (Peso 1 - Prioridade Máxima):** Design moderno, Dark Theme sofisticado, micro-animações, acordeões responsivos com progressão cognitiva clara e componentes interativos fluidos.
2. **Manutenibilidade e Extensibilidade (Peso 2):** Conteúdo desacoplado em Markdown com metadados para que novos módulos de teoria e novas atividades sejam adicionados de forma declarativa e previsível no repositório.
3. **Performance (Peso 3):** Aplicação estática servida em Edge CDN (Vercel), tempo de carregamento < 1s, First Contentful Paint < 0.6s, zero overhead de runtime de banco de dados ou requisições lentas.
4. **Custo e Simplicidade Operacional (Peso 4):** $0/mês de hospedagem, sem servidor de aplicação, sem backend stateful, CI/CD automatizado via GitHub/Vercel.

## 4. Restrições Invioláveis
* **Hospedagem & Deploy:** GitHub como repositório de código e Vercel como plataforma de build e deploy contínuo.
* **Formato de Manutenção de Conteúdo:** Conteúdos teóricos devem ser criados e atualizados diretamente em arquivos Markdown (`.md`) no repositório.
* **Ausência de Backend/Auth:** Não haverá autenticação de usuário, banco de dados ou rastreamento de dados pessoais (zero compliance LGPD/GDPR para dados de usuário, zero vulnerabilidades de injeção de dados).
* **Design Unificado das Atividades:** As atividades interativas não podem rodar como iframes desajustados; devem ser incorporadas ao design system central do site.
* **Navegação Dupla:** O usuário deve conseguir consumir Teoria $\rightarrow$ Atividade no mesmo módulo de tópicos ou navegar diretamente para o catálogo de atividades independentes.

## 5. Decisões por Dimensão

| Dimensão | Decisão Arquitetural | Justificativa |
|---|---|---|
| **D1: Escopo e Propósito** | Web App estático educacional aberto, focado em retenção conceitual ágil | Elimina barreiras de entrada para alunos e instrutores; aprendizado auto-guiado. |
| **D2: Domínio de Negócio** | Módulos temáticos de métricas (Recursos, Processo, Produto, Métricas Diretas/Indiretas, Auditoria e GQM) | Domínio clássico de Engenharia de Software estruturado em trilha modular. |
| **D3: Restrições** | JAMstack estático na Vercel integrado ao GitHub | Alinhado à simplicidade de custo zero e deploy automatizado por git push. |
| **D4: Atores e Segurança** | Acesso 100% anônimo e público. Sem cookies, sem dados sensíveis, Content Security Policy rígida | Reduz a superfície de ataque a zero e dispensa infraestrutura de segurança complexa. |
| **D5: Experiência de Uso** | Dark Mode imersivo, tipografia limpa (Inter/JetBrains Mono), Acordeões para tópicos teóricos, cartões visuais | Resolve o requisito de não apresentar textos longos, permitindo leitura sob demanda. |
| **D6: Dados** | Conteúdos em Markdown local estruturado com frontmatter; estado de atividades volátil em memória (ou LocalStorage para progresso local opcional da sessão) | Garante manutenibilidade direta no repositório sem necessidade de banco de dados. |
| **D7: Processamento** | Compilação estática em tempo de build (SSG / Client-side Router estático) | Todo o processamento pesado ocorre no build; entrega para o usuário é instantânea. |
| **D8: Resiliência** | 100% Edge CDN (Vercel) com funcionamento offline suportável via Service Worker (PWA-ready) | Zero ponto único de falha de servidor central de aplicação. |
| **D9: Ecossistema Externo** | Zero dependência de APIs de terceiros em tempo de execução | Garante que o site continue funcionando ininterruptamente sem risco de quebra de APIs externas. |
| **D10: Cultura Técnica** | Stack moderna, legível e padrão da web (TypeScript + Vite + Vanilla CSS tokens) | Curva de aprendizado mínima, sustentabilidade a longo prazo sem dependência de frameworks efêmeros. |
| **D11: Observabilidade** | Vercel Analytics básico e logs de build no CI | Suficiente para monitorar disponibilidade e acessos sem violar privacidade. |
| **D12: Atributos de Qualidade** | Foco primário em UI/UX Premium, Manutenibilidade e Velocidade de Resposta | Conforme os drivers prioritários estabelecidos. |

## 6. Arquitetura Lógica
A arquitetura é dividida em quatro camadas lógicas desacopladas:

```
+--------------------------------------------------------------------------+
|                        CAMADA DE APRESENTAÇÃO (UI/UX)                   |
|  - Layout Shell (Navbar, Sidebar de Navegação, Breadcrumbs, Footer)     |
|  - Componente de Accordion Teórico (com sintaxe enriquecida)            |
|  - Player de Atividades Interativas (Classificação, Auditoria, Quiz)     |
|  - Design System / Tokens CSS (Cores semânticas, Tipografia, Espaçamento)|
+--------------------------------------------------------------------------+
                                    |
+--------------------------------------------------------------------------+
|                     CAMADA DE GESTÃO DE ESTADO & ROTAS                   |
|  - Client-Side Router (Hash / History API sem recarga)                   |
|  - Gerenciador de Sessão de Atividades (Pontuação, Cenários, Feedback)  |
|  - Local Storage Adapter (Persistência opcional do progresso local)      |
+--------------------------------------------------------------------------+
                                    |
+--------------------------------------------------------------------------+
|                     CAMADA DE CONTEÚDO & PARSING                         |
|  - Leitor / Parser de Markdown com Frontmatter                           |
|  - Transformador de Módulos (Agrupa Seções em Accordions)                |
|  - Registry de Atividades (Mapeamento ID -> Componente de Atividade)     |
+--------------------------------------------------------------------------+
                                    |
+--------------------------------------------------------------------------+
|                     CAMADA DE DADOS ESTRUTURADOS                         |
|  - /conteudos/teoria/*.md (Arquivos Markdown dos tópicos)                |
|  - /conteudos/atividades/*.ts (Definições de cenários e regras)          |
+--------------------------------------------------------------------------+
```

## 7. Arquitetura Física
* **Cliente (Navegador):** Baixa o pacote estático otimizado (HTML, CSS compilado, JS empacotado, fontes e assets SVG).
* **Borda (Vercel Edge Network / CDN):** Cache global dos artefatos estáticos com compressão Gzip/Brotli e terminação TLS automática.
* **Repositório (GitHub):** Armazena o código-fonte, os arquivos `.md` de conteúdo e os scripts das atividades. Um push na branch `main` dispara o pipeline de build da Vercel.

## 8. Stack Tecnológica
* **Bundler & Build Tool:** **Vite**
  * *Justificativa:* Velocidade instantânea de build e Hot Module Replacement (HMR), geração de assets ultraleves e ecossistema moderno.
* **Linguagem:** **TypeScript**
  * *Justificativa:* Tipagem estática para contratos de dados (estrutura de tópicos, cenários de atividades, regras de negócio das métricas), eliminando erros em tempo de execução.
* **Estilização:** **Vanilla CSS com Design System baseado em CSS Variables**
  * *Justificativa:* Atende perfeitamente à regra de UI de alto nível sem introduzir overhead de Tailwind ou runtime de CSS-in-JS. Permite reutilizar as variáveis de cores das atividades existentes (`--color-recursos`, `--color-processo`, `--color-produto`).
* **Parser de Markdown:** **Marked** (ou leitor nativo leve de markdown com sanitização)
  * *Justificativa:* Converte markdown em HTML seguro em tempo de build/execução para alimentar os accordions dinamicamente.
* **Ícones & Micro-animações:** Lucide Icons (SVG inline) + CSS transitions nativas.

## 9. Estratégia de Segurança
* **Zero Trust de Entrada:** Conteúdos em Markdown passam por sanitização contra XSS caso contenham HTML embutido.
* **Headers HTTP na Vercel:** Configuração de `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` no `vercel.json`.
* **Zero Coleta de Dados:** Sem formulários externos, sem envio de credenciais, sem banco de dados exposto.

## 10. Estratégia de Dados
* **Formato dos Conteúdos:**
  Cada arquivo Markdown em `src/content/teoria/` possui frontmatter estruturado:
  ```markdown
  ---
  id: "identificacao-classificacao"
  titulo: "Identificação e Classificação de Métricas"
  ordem: 2
  atividadeVinculadaId: "classificacao"
  ---
  ## O que são Métricas de Processo?
  Conteúdo resumido do tópico...
  ## O que são Métricas de Produto?
  Conteúdo resumido do tópico...
  ```
* Cada cabeçalho `##` vira automaticamente uma lâmina retrátil do Accordion.

## 11. Estratégia Operacional
* **Pipeline:** GitHub Actions / Vercel Deploy Hook automático.
* **Ambientes:** Preview Deploys em Pull Requests e Produção na branch principal.
* **Rollback:** Instantâneo via painel Vercel com 1 clique para builds anteriores.

## 12. Observabilidade
* Monitoramento de falhas de build via GitHub/Vercel.
* Vercel Web Analytics para contagem de acessos sem cookies (respeitando privacidade).

## 13. Riscos & Mitigações
* **Risco 1: Quebra de layout ao adicionar novos Markdowns.**
  * *Mitigação:* Esquema de validação de Frontmatter em tempo de build; se faltar campo obrigatório, o build falha e avisa o autor.
* **Risco 2: Dificuldade de manter a complexidade das atividades interativas.**
  * *Mitigação:* Motor de atividades modularizado; dados de cenários e perguntas separados da lógica visual de renderização.
* **Risco 3: Falta de consistência visual entre teoria e atividades.**
  * *Mitigação:* Tokens de design compartilhados (paleta dark slate, acentos ciano/âmbar/esmeralda).

## 14. Trade-offs Aceitos
* **Aceito:** Não haver sincronização de progresso entre múltiplos dispositivos do usuário (priorizou-se privacidade e ausência de backend/login).
* **Aceito:** Reconstruir as atividades em vez de apenas usar iframe (exige maior esforço inicial de implementação, mas garante a experiência visual de primeiro nível e design unificado solicitados).
