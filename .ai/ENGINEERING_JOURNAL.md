# ENGINEERING JOURNAL — PLATAFORMA DE MÉTRICAS DE SOFTWARE

Este diário consolida os desafios de engenharia enfrentados, soluções aplicadas, decisões arquiteturais emergentes e lições aprendidas durante o ciclo de implementação.

---

## 1. Problemas Encontrados

### Problema 1: TypeScript TS6133 em Propriedades Privadas do Router
* **Descrição:** A compilação estrita com `tsc --noEmit` falhou com erro `TS6133: 'currentPath' is declared but its value is never read`.
* **Causa:** O compilador está configurado com regras estritas (`noUnusedLocals: true`, `noUnusedParameters: true`). A propriedade interna guardava o estado da rota ativa mas não era lida externamente.
* **Solução:** Implementação do método público `getActivePath(): string` no `Router`, expondo o estado para componentes consumidores e satisfazendo o compilador estrito.

### Problema 2: Colisão e Vazamento de Atalhos Globais de Teclado
* **Descrição:** Atalhos de teclado registrados em `window.addEventListener('keydown', ...)` na Atividade de Classificação permaneciam ativos após o usuário navegar para a Trilha Teórica ou para a Atividade de Auditoria.
* **Causa:** Ausência de controle de ciclo de vida e desmontagem de componentes no roteador client-side SPA.
* **Solução:** Padronização do contrato `ViewResult { element: HTMLElement; cleanup?: () => void }`. A função `setView` no `main.ts` agora executa o callback `cleanup` da visão anterior antes de montar a nova tela.

### Problema 3: Importação de Arquivos Markdown como Texto Bruto no Vite
* **Descrição:** O TypeScript não reconhecia nativamente a sintaxe de importação `import content from './file.md?raw'`.
* **Causa:** Ausência de declaração de módulo de tipos para arquivos `.md` com query `?raw` no compilador.
* **Solução:** Criação do arquivo de declaração de ambiente `src/vite-env.d.ts` definindo `declare module '*.md?raw' { const content: string; export default content; }`.

---

## 2. Restrições Descobertas

* **Restrição 1: Roteamento em Servidores Estáticos sem Rewrite Nativo (Fallback 404):**
  * *Descrição:* Em hospedagens estáticas simples ou previews locais, rotas baseadas em HTML5 History API geram erro 404 caso o usuário recarregue a página em uma sub-rota.
  * *Impacto:* Adoção de roteamento baseado em Hash (`#/`), garantindo imunidade a erros 404 em qualquer servidor ou provedor CDN, complementada com reescrita no `vercel.json` para maior robustez.

---

## 3. Lições Aprendidas

* **Lição 1: Transições CSS Grid para Accordions com Altura Dinâmica:**
  * *Contexto:* Tradicionalmente, animações de acordeão utilizam gambiarras com `max-height: 1000px`, que causam atraso perceptível de fechamento e saltos visuais.
  * *Aprendizado:* O uso de CSS Grid com transição entre `grid-template-rows: 0fr` e `1fr` proporciona abertura e fechamento instantâneos e matematicamente perfeitos, independentemente da quantidade de texto da seção.
  * *Aplicação Futura:* Adotar este padrão em todos os novos componentes retráteis da plataforma.

* **Lição 2: Separação de Dados Estruturados e Lógica de Renderização:**
  * *Contexto:* As 30 métricas de classificação e os 20 cenários de auditoria continham explicações longas e detalhadas.
  * *Aprendizado:* Manter dados puramente declarativos em `data.ts` com tipagem explícita permitiu criar testes unitários exaustivos (24 testes) sem acoplamento com o DOM.

---

## 4. Débitos Técnicos Identificados

* **Débito 1: Persistência Opcional de Histórico de Acertos em LocalStorage:**
  * *Descrição:* Atualmente, a pontuação e as métricas respondidas ficam apenas na memória da sessão atual; recarregar a página reinicia o score.
  * *Motivo:* Priorizou-se o princípio da privacidade absoluta (zero cookies/dados) e simplicidade de entrega.
  * *Prioridade:* Baixa.
  * *Plano de Tratamento:* Adicionar um adaptador de `LocalStorage` opcional na próxima fase caso os usuários desejem acompanhar seu progresso histórico entre sessões.

---

## 5. Registro de Mudanças Recentes — Ciclo 6 (Acessibilidade & Governança)
* **ADR 4: Alternância de Tema Claro/Escuro (CSS Custom Properties Tokens):**
  * *Decisão:* Adotar `data-theme="light"` na raiz `<html>` com transições suaves em CSS e sincronização com `localStorage` (`metrics_theme`).
  * *Motivo:* Preservar as regras de acessibilidade e o trabalho de cores já consolidado nas atividades legadas, sem bibliotecas pesadas de terceiros.
* **ADR 5: Zero-Tracking e Conformidade LGPD por Design:**
  * *Decisão:* Plataforma opera estritamente client-side, sem coleta de telemetria, sem cookies analíticos e com links institucionais claros de Termos de Uso e Política de Privacidade.

