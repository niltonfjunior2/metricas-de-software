export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div>
      <strong>Métricas de Software</strong> • Engenharia de Software
      <div style="font-size: 0.8rem; margin-top: 0.25rem;">
        Conteúdos fundamentados nos materiais curriculares e atividades práticas de fixação.
      </div>
    </div>
    <div style="display: flex; gap: 1.25rem; align-items: center; flex-wrap: wrap;">
      <a href="#/sobre">Sobre o Projeto</a>
      <a href="#/teoria">Trilha Teórica</a>
      <a href="#/atividades">Atividades</a>
      <a href="#/termos">Termos de Uso</a>
      <a href="#/privacidade">Política de Privacidade</a>
    </div>
  `;

  return footer;
}
