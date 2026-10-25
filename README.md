# Métricas de Software • Plataforma Educacional Interativa

Plataforma web moderna, aberta e auto-instrucional voltada para o ensino prático de **Métricas de Software** em Engenharia de Software. O projeto substitui textos longos por **conteúdos teóricos sintetizados em acordeões dinâmicos** integrados a **simuladores interativos de classificação e auditoria de cenários reais**.

---

## 🚀 Tecnologias Utilizadas

* **Bundler & Build Tool:** [Vite](https://vitejs.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Estilização:** Vanilla CSS estruturado em Design Tokens (Dark Theme, CSS Variables)
* **Parser de Markdown:** [Marked](https://marked.js.org/) com sanitização de segurança via [DOMPurify](https://github.com/cure53/DOMPurify)
* **Testes:** [Vitest](https://vitest.dev/) com ambiente JSDOM
* **Qualidade de Código:** [ESLint 9](https://eslint.org/) (Flat Config) e [Prettier](https://prettier.io/)
* **Hospedagem & Deploy:** [Vercel](https://vercel.com/) com Edge CDN e integração contínua ao GitHub

---

## 📦 Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js 18+ instalado
* NPM ou gerenciador de pacotes equivalente

### Instalação e Execução

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/metricas-de-software.git
cd metricas-de-software

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento local
npm run dev
```
Acesse a aplicação no navegador em: `http://localhost:3000`

### Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR).
* `npm run test`: Executa todos os testes unitários via Vitest.
* `npm run test:watch`: Executa os testes unitários em modo observador.
* `npm run lint`: Valida o código TypeScript e estilos estáticos com ESLint 9.
* `npm run format`: Formata o código do projeto segundo as regras do Prettier.
* `npm run build`: Valida os tipos estritos com `tsc --noEmit` e compila o pacote otimizado para produção na pasta `dist/`.
* `npm run preview`: Executa localmente o bundle final gerado na pasta `dist/`.

---

## 📚 Como Adicionar Novos Conteúdos Teóricos (Markdown)

Os conteúdos teóricos são mantidos de forma declarativa e desacoplada em arquivos Markdown no diretório `src/content/teoria/`.

Para adicionar um novo módulo:

1. Crie um arquivo no padrão `src/content/teoria/0X-nome-do-modulo.md`.
2. Inclua o cabeçalho frontmatter com os metadados:
   ```markdown
   ---
   id: "nome-identificador"
   titulo: "Título do Novo Módulo"
   modulo: 3
   tempoLeitura: "6 min"
   fonte: "Referência do Material Curricular"
   atividadeVinculadaId: "classificacao"
   ---
   ```
3. Estruture o conteúdo utilizando cabeçalhos de segundo nível (`##`):
   * Cada cabeçalho `##` torna-se automaticamente uma lâmina retrátil do Acordeão.
   * Evite parágrafos longos; utilize listas com marcadores, tabelas comparativas e caixas de destaque (`callouts`).
4. O parser de Markdown lerá, converterá e sanitizará o conteúdo automaticamente para a visualização teórica.

---

## 🎮 Como Cadastrar Novas Atividades Interativas

As atividades interativas são componentes modulares localizados em `src/activities/`.

Para adicionar uma nova atividade:

1. Crie uma pasta `src/activities/<nome-da-atividade>/`.
2. Crie o arquivo `data.ts` com a estrutura de dados e tipagem estrita do exercício (perguntas, cenários, categorias e justificativas).
3. Crie o controlador e componente visual `index.ts` que retorna `{ element: HTMLElement, cleanup?: () => void }`.
4. Registre a nova rota no `src/views/ActivitiesView.ts` e no menu lateral (`src/components/Sidebar.ts`).

---

## 🌐 Deploy na Vercel

O projeto possui configuração nativa no [`vercel.json`](vercel.json), incluindo:
* Roteamento SPA com fallback automático para `index.html`.
* Regras de cache imutável de 1 ano para assets estáticos em `/assets/`.
* Cabeçalhos de segurança de borda (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`).

Basta conectar o repositório GitHub ao painel da Vercel; o build e deploy serão acionados automaticamente a cada `git push` na branch principal.

---

## 📄 Licença e Uso Acadêmico

Material desenvolvido para fins educacionais no âmbito da Engenharia de Software.
