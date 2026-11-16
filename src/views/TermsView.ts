export function renderTermsView(): HTMLElement {
  const container = document.createElement('div');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Termos de Uso</span>
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
        Termos de Uso
      </h1>
      <p style="color: var(--text-secondary); max-width: 780px; font-size: 0.95rem;">
        Condições gerais de utilização do ecossistema educacional de Métricas de Software, Precificação e Segurança Contratual.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 850px;">
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">1. Aceitação dos Termos e Finalidade Acadêmica</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Ao acessar e utilizar esta plataforma, você concorda expressamente com estes Termos de Uso. O propósito deste projeto — integrando o <strong>MétricaLab</strong>, a <strong>Calculadora de Precificação</strong> e o <strong>Assistente de Construção de Contratos de Software</strong> — é estritamente <strong>acadêmico, instrucional e de pesquisa</strong> no âmbito da Engenharia de Software e da Análise e Desenvolvimento de Sistemas.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">2. Uso Permitido</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O ambiente é disponibilizado gratuitamente para estudantes, professores, pesquisadores e profissionais de tecnologia para fins de estudo autônomo, atividades em sala de aula, simulação de orçamentos e compreensão de boas práticas contratuais. É vedado o uso deste sistema para práticas ilícitas, violação de direitos de terceiros ou qualquer tentativa de comprometer a disponibilidade da aplicação.
        </p>
      </div>

      <div class="card" style="border-left: 4px solid #f59e0b;">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">3. Caráter Informativo e Isenção de Consultoria Contábil ou Jurídica</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem; margin-bottom: 0.75rem;">
          Os cálculos financeiros e alíquotas tributárias de referência (como MEI, Simples Nacional e Lucro Presumido) disponíveis na <strong>Calculadora de Precificação</strong> possuem finalidade exclusivamente didática e simulatória, <strong>não substituindo a assessoria de um profissional de Contabilidade habilitado</strong> para apuração fiscal real de uma empresa.
        </p>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Da mesma forma, os diagnósticos de risco, explicações e minutas referenciais geradas pelo <strong>Assistente de Construção de Contratos de Software</strong> têm natureza estritamente informativa e pedagógica. Eles <strong>não constituem parecer ou consultoria jurídica e não eximem o usuário de buscar a orientação e revisão de um(a) advogado(a) devidamente inscrito(a) na OAB</strong> antes de firmar qualquer contrato real com clientes ou fornecedores.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">4. Propriedade Intelectual e Créditos</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Os textos explicativos, estudos de caso, códigos de simulação, estrutura visual e marcas da plataforma são de autoria e propriedade intelectual de seus respectivos criadores, sob coordenação acadêmica do <strong>Prof. Nilton F. Junior</strong>, protegidos pela legislação brasileira de direitos autorais e de programas de computador. O uso de trechos para citação e atividades docentes é livre, desde que citada a fonte original. As minutas e propostas geradas pelo próprio usuário a partir de seus insumos nas ferramentas podem ser livremente utilizadas por ele, observadas as ressalvas da cláusula 3.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">5. Limitação de Garantias</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O sistema é fornecido no estado técnico em que se encontra, sem garantias implícitas de adequação a finalidades comerciais específicas ou operação ininterrupta. Os autores e mantenedores não se responsabilizam por decisões comerciais, financeiras, tributárias ou jurídicas tomadas com base exclusiva nas simulações educacionais realizadas na plataforma.
        </p>
      </div>

      <div style="margin-top: 1rem;">
        <a href="#/" class="btn btn-primary">&larr; Voltar ao Início</a>
      </div>
    </div>
  `;

  return container;
}
