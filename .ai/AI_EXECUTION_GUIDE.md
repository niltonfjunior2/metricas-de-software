# AI EXECUTION GUIDE — PLATAFORMA DE MÉTRICAS DE SOFTWARE

Este guia estabelece os padrões e restrições obrigatórios para qualquer agente de IA ou desenvolvedor atuando neste repositório. O objetivo é garantir integridade arquitetural, consistência visual e código sustentável.

---

## 1. Regras Arquiteturais Invioláveis

1. **Zero Backend & Zero Servidor Stateful:** A aplicação é 100% estática (JAMstack). Nunca adicione chamadas para endpoints inexistentes, servidores Node/Express ou bancos de dados relacionais.
2. **Zero Coleta de Dados Pessoais:** Não implemente cookies de rastreamento, formulários de coleta de e-mail ou envio de dados telemétricos invasivos.
3. **Vanilla CSS com Tokens Centralizados:** Não instale bibliotecas de utilitários como TailwindCSS a menos que explicitamente solicitado. Todas as cores, sombras e espaçamentos devem derivar estritamente dos tokens CSS definidos no Design System (`variables.css`).
4. **Respeito aos Dados Originais das Atividades:** As regras, cenários e feedbacks das atividades `classificacao_metricas.html` e `auditoria_metricas_cenarios.html` devem ser preservados integralmente em sua lógica de negócios e explicações técnicas.
5. **Acessibilidade por Teclado:** Todas as atividades interativas devem manter atalhos de teclado (números ou letras) além da interação via clique/touch.
6. **Desacoplamento de Conteúdo:** O conteúdo teórico deve permanecer em arquivos `.md` na pasta designada, e não hardcoded em strings dentro de componentes TypeScript.

---

## 2. Processo de Implementação de Novas Funcionalidades

Para cada nova funcionalidade ou refatoração:

1. **Leitura Prévia:** Antes de tocar no código, leia obrigatoriamente `PROJECT_DNA.md` e a tarefa correspondente no `PRODUCT_BACKLOG.md`.
2. **Adição de Novos Conteúdos Teóricos:**
   * Crie um novo arquivo `.md` na pasta `conteudos/teoria/` ou `src/content/teoria/`.
   * Inclua o cabeçalho frontmatter com `id`, `titulo`, `ordem` e `atividadeVinculadaId` (se houver).
   * Utilize cabeçalhos de segundo nível (`##`) para delimitar cada seção do acordeão.
   * Evite parágrafos longos: utilize listas com marcadores, destaques em negrito e caixas semânticas (`> [!NOTE]` ou equivalentes estilizados).
3. **Adição de Novas Atividades Interativas:**
   * Crie a definição de dados em `src/activities/<nome-da-atividade>/data.ts` com tipagem explícita.
   * Crie o componente de tela em `src/activities/<nome-da-atividade>/index.ts` reutilizando os componentes e estilos base.
   * Registre a nova atividade no catálogo central (`src/activities/registry.ts`).

---

## 3. Processo de Testes e Validação

Antes de considerar uma implementação finalizada, execute:

1. **Build Sanitization:**
   ```bash
   npm run build
   ```
   O build deve ser concluído com zero erros de compilação TypeScript e zero avisos de assets quebrados.
2. **Validação de Responsividade:**
   * Testar a interface em 3 resoluções: Mobile (375px), Tablet (768px) e Desktop (1440px).
   * Garantir que o Accordion e as opções de atividades não transbordem horizontalmente (overflow-x invisível indesejado).
3. **Validação de Teclado e Foco:**
   * Navegar usando apenas a tecla `Tab` e `Enter`/`Space`.
   * Verificar se os atalhos rápidos das atividades (ex: 1, 2, 3) funcionam sem interferir com campos de digitação.

---

## 4. Processo de Revisão de Código

Ao revisar código escrito por si mesmo ou por outros agentes:
* Verifique se foram criadas variáveis CSS duplicadas em vez de usar as já existentes.
* Confirme se o código não contém dependências desnecessárias adicionadas ao `package.json`.
* Certifique-se de que nenhum texto teórico dos PDFs foi descartado ou resumido a ponto de perder o rigor conceitual da Engenharia de Software.

---

## 5. Processo de Atualização de Documentação

* Se uma decisão arquitetural for alterada ou um novo driver surgir, atualize a seção "Decisões por Dimensão" no `PROJECT_DNA.md`.
* Se uma história de usuário for concluída, marque-a como finalizada no `PRODUCT_BACKLOG.md`.
* Mantenha o `README.md` atualizado com comandos claros para rodar o projeto localmente (`npm install`, `npm run dev`, `npm run build`).

---

## 6. Checklist de Conclusão Obrigatório

Qualquer tarefa só poderá ser declarada pronta se satisfizer 100% dos itens abaixo:

- [ ] Código compila limpo sem erros de linter ou TypeScript (`tsc --noEmit`).
- [ ] O tema escuro segue os tokens do design system com contraste adequado (WCAG AA).
- [ ] O componente de acordeão abre e fecha suavemente sem saltos bruscos de layout.
- [ ] A atividade interativa permite reiniciar, mostra pontuação final e exibe explicações conceituais claras.
- [ ] O site carrega em menos de 1 segundo em conexão simulada padrão.
- [ ] O repositório está pronto para ser enviado para a Vercel com build estático bem-sucedido.
