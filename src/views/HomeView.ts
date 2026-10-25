export function renderHomeView(): HTMLElement {
  const container = document.createElement('div');

  container.innerHTML = `
    <section class="hero">
      <div class="hero-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        Engenharia de Software • Medição Prática
      </div>
      <h1 class="hero-title">
        Aprenda <span class="hero-title-gradient">Métricas de Software</span> sem textos longos
      </h1>
      <p class="hero-subtitle">
        Plataforma interativa com conteúdos conceituais sintetizados em acordeões dinâmicos e simuladores práticos de classificação e auditoria de métricas reais.
      </p>
      <div class="hero-actions">
        <a href="#/teoria" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          Explorar Trilha Teórica
        </a>
        <a href="#/atividades" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Praticar Atividades
        </a>
      </div>
    </section>

    <section style="margin-bottom: 3.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: var(--text-title);">Tríade Central de Métricas</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">As três grandes dimensões de medição em projetos de software.</p>
        </div>
      </div>

      <div class="grid-cards">
        <div class="card">
          <div class="card-header">
            <span class="badge badge-recursos">Dimensão 01</span>
            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: var(--color-recursos); box-shadow: 0 0 8px var(--color-recursos);"></div>
          </div>
          <h3 class="card-title" style="margin-bottom: 0.75rem;">Métricas de Recursos</h3>
          <p class="card-description">
            Quantificam os insumos utilizados no desenvolvimento: esforço humano (horas/mês), custos financeiros, hardware, licenças e infraestrutura alocada.
          </p>
          <div style="font-size: 0.85rem; color: var(--color-recursos-tag); font-family: var(--font-mono);">
            Exemplos: Custo/Sprint, Horas-Homem, Uso de Nuvem
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="badge badge-processo">Dimensão 02</span>
            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: var(--color-processo); box-shadow: 0 0 8px var(--color-processo);"></div>
          </div>
          <h3 class="card-title" style="margin-bottom: 0.75rem;">Métricas de Processo</h3>
          <p class="card-description">
            Avaliam a eficiência e o fluxo das atividades de engenharia: velocidade de entrega, tempo de ciclo, taxa de retrabalho e eficiência na detecção de falhas.
          </p>
          <div style="font-size: 0.85rem; color: var(--color-processo-tag); font-family: var(--font-mono);">
            Exemplos: Lead Time, Cycle Time, Throughput
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="badge badge-produto">Dimensão 03</span>
            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: var(--color-produto); box-shadow: 0 0 8px var(--color-produto);"></div>
          </div>
          <h3 class="card-title" style="margin-bottom: 0.75rem;">Métricas de Produto</h3>
          <p class="card-description">
            Mapeiam as características do artefato gerado: tamanho (LOC), complexidade ciclomática, acoplamento, coesão, defeitos por mil linhas e conformidade.
          </p>
          <div style="font-size: 0.85rem; color: var(--color-produto-tag); font-family: var(--font-mono);">
            Exemplos: LOC, Complexidade Ciclomática, Cobertura
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="card" style="background: linear-gradient(135deg, rgba(21, 29, 47, 0.9), rgba(15, 23, 42, 0.9)); border-color: var(--border-inner); padding: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;">
          <div style="max-width: 600px;">
            <span class="badge badge-processo" style="margin-bottom: 0.75rem;">Auto-Instrucional</span>
            <h3 style="font-size: 1.3rem; color: var(--text-title); margin-bottom: 0.5rem;">Pronto para testar seus conhecimentos?</h3>
            <p style="color: var(--text-secondary); font-size: 0.92rem;">
              Classifique métricas em tempo real com atalhos de teclado ou assuma o papel de auditor em cenários corporativos complexos.
            </p>
          </div>
          <a href="#/atividades" class="btn btn-primary">
            Ir para Atividades Interativas
          </a>
        </div>
      </div>
    </section>
  `;

  return container;
}
