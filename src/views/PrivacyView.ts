export function renderPrivacyView(): HTMLElement {
  const container = document.createElement('div');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Política de Privacidade</span>
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
        Política de Privacidade
      </h1>
      <p style="color: var(--text-secondary); max-width: 780px; font-size: 0.95rem;">
        Compromisso de transparência, execução 100% local e privacidade desde a concepção do sistema.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 850px;">
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">1. Processamento Exclusivamente Local e Ausência de Coleta</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 0.75rem;">
          Esta plataforma é uma aplicação estática executada <strong>inteiramente no navegador do seu dispositivo</strong>. Não solicitamos cadastro, conta de acesso, endereço de e-mail ou credenciais pessoais para utilização de nenhum módulo.
        </p>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Todas as informações digitadas durante o uso — incluindo respostas nos simuladores do <strong>MétricaLab</strong>, planilhas de custos e margens na <strong>Calculadora de Precificação</strong>, bem como nomes, documentos (CPF/CNPJ), valores e cláusulas preenchidos no <strong>Assistente de Contratos de Software</strong> — são processadas exclusivamente na memória temporária do seu próprio computador ou celular, <strong>jamais sendo transmitidas para servidores externos ou bancos de dados na internet</strong>.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">2. Ausência de Rastreamento e Uso do Armazenamento Local</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 0.75rem;">
          <strong>Não utilizamos cookies de rastreamento, perfilamento comportamental ou publicidade.</strong> O único recurso técnico de persistência empregado é o armazenamento local do próprio navegador (<code>localStorage</code>), restrito ao seu dispositivo, para as seguintes finalidades funcionais:
        </p>
        <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.8; font-size: 0.92rem;">
          <li><code>metrics_theme</code>: memoriza sua preferência visual entre o Modo Claro e o Modo Escuro;</li>
          <li><code>metrics_sidebar_collapsed</code>: preserva sua escolha de manter o menu lateral expandido ou recolhido;</li>
          <li><code>pricing_lab_simulations_v1</code>: armazena localmente no seu navegador os rascunhos de simulação financeira quando você aciona voluntariamente o botão <em>"Salvar Simulação"</em> na Calculadora de Precificação (podendo ser excluídos a qualquer momento na própria tela).</li>
        </ul>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">3. Compartilhamento de Informações com Terceiros</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Como não coletamos, recebemos nem armazenamos informações de usuários em servidores remotos, inexiste qualquer compartilhamento, cessão, transferência ou comercialização de dados com terceiros, parceiros ou instituições externas. A cópia de propostas comerciais ou a geração de PDFs de minutas contratuais ocorre diretamente entre o seu navegador e a área de transferência ou impressora do seu sistema operacional.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">4. Conformidade com a Lei Geral de Proteção de Dados (LGPD)</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O projeto atende integralmente aos princípios da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD), em especial os princípios da <strong>finalidade</strong>, <strong>adequação</strong>, <strong>necessidade (minimização máxima de dados)</strong>, <strong>transparência</strong> e <strong>segurança</strong>, assegurando um ambiente acadêmico aberto, anônimo e livre de exposição de dados pessoais.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">5. Atualizações desta Política</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Reservamo-nos o direito de atualizar este documento periodicamente para refletir novos recursos educacionais, simuladores ou aprimoramentos técnicos incorporados à plataforma.
        </p>
      </div>

      <div style="margin-top: 1rem;">
        <a href="#/" class="btn btn-primary">&larr; Voltar ao Início</a>
      </div>
    </div>
  `;

  return container;
}
