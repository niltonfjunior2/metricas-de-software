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
      <p style="color: var(--text-secondary); max-width: 750px; font-size: 0.95rem;">
        Condições gerais de utilização da plataforma educacional de Métricas de Software.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 850px;">
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">1. Aceitação dos Termos</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Ao acessar e utilizar esta plataforma, você concorda expressamente em cumprir estes Termos de Uso. O propósito deste projeto é estritamente <strong>acadêmico, instrucional e de pesquisa</strong> no contexto da disciplina de Engenharia de Software.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">2. Uso Permitido e Finalidade Educacional</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O ambiente é disponibilizado gratuitamente para estudantes, professores, pesquisadores e profissionais de tecnologia para fins de auto-aprendizagem, consulta rápida e capacitação técnica. É vedado o uso deste sistema para práticas ilícitas, engenharia reversa maliciosa ou qualquer tentativa de sobrecarga dos serviços de distribuição.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">3. Propriedade Intelectual e Créditos</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          Os textos explicativos, cenários práticos, códigos de simulação, layout e marcas são de autoria e propriedade intelectual de seus respectivos criadores, sob coordenação do <strong>Prof. Nilton F. Junior</strong>, resguardados pela legislação de direitos autorais. O uso de trechos para fins de citação e estudo acadêmico é livre, desde que citada a fonte original.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title" style="margin-bottom: 0.75rem;">4. Isenção de Garantias</h3>
        <p style="color: var(--text-desc); line-height: 1.7; font-size: 0.95rem;">
          O sistema é fornecido no estado em que se encontra (<em>"as is"</em>), sem garantias implícitas de adequação a fins comerciais ou disponibilidade ininterrupta. As simulações e indicadores de métricas refletem cenários didáticos elaborados para treinamento conceitual.
        </p>
      </div>

      <div style="margin-top: 1rem;">
        <a href="#/" class="btn btn-primary">&larr; Voltar ao Início</a>
      </div>
    </div>
  `;

  return container;
}
