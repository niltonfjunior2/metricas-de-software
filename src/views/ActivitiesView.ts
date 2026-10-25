import { createClassificationActivity } from '../activities/classification';
import { createAuditActivity } from '../activities/audit';

export interface ViewResult {
  element: HTMLElement;
  cleanup?: () => void;
}

export function renderActivitiesView(activityId?: string): ViewResult {
  if (activityId === 'classificacao') {
    const activity = createClassificationActivity(10);
    return {
      element: activity.element,
      cleanup: activity.cleanup,
    };
  }

  if (activityId === 'auditoria') {
    const activity = createAuditActivity(0);
    return {
      element: activity.element,
      cleanup: activity.cleanup,
    };
  }

  const container = document.createElement('div');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <a href="#/" style="font-size: 0.85rem; color: var(--text-muted);">Início</a>
        <span style="color: var(--text-muted); font-size: 0.85rem;">/</span>
        <span style="font-size: 0.85rem; color: var(--accent-blue);">Atividades Práticas</span>
      </div>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-title); margin-bottom: 0.5rem;">
        Catálogo de Atividades Práticas
      </h1>
      <p style="color: var(--text-secondary); max-width: 750px; font-size: 0.95rem;">
        Simuladores interativos para exercitar o raciocínio crítico sobre medição e auditoria de métricas em Engenharia de Software. Pratique de forma livre e independente.
      </p>
    </div>

    <div class="grid-cards" style="margin-bottom: 2.5rem;">
      <!-- Atividade 1 Card -->
      <a href="#/atividades/classificacao" class="card card-interactive" style="border-top: 4px solid var(--color-recursos);">
        <div class="card-header">
          <span class="badge badge-recursos">Atividade 01</span>
          <span class="badge badge-processo" style="font-size: 0.7rem;">Disponível</span>
        </div>
        <h3 class="card-title">Classificação de Métricas</h3>
        <p class="card-description">
          Classifique 30 métricas reais em <strong>Recursos</strong>, <strong>Processo</strong> ou <strong>Produto</strong> com suporte a teclado (<kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>), recebendo feedback e desambiguação conceitual imediata.
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <span style="font-size: 0.82rem; color: var(--text-muted);">Mecânica: Cartões Interativos</span>
          <span class="btn btn-primary" style="font-size: 0.82rem; padding: 0.4rem 0.85rem;">Iniciar Classificação &rarr;</span>
        </div>
      </a>

      <!-- Atividade 2 Card -->
      <a href="#/atividades/auditoria" class="card card-interactive" style="border-top: 4px solid var(--accent-cyan);">
        <div class="card-header">
          <span class="badge badge-processo">Atividade 02</span>
          <span class="badge badge-processo" style="font-size: 0.7rem;">Disponível</span>
        </div>
        <h3 class="card-title">Auditoria e Identificação em Cenários</h3>
        <p class="card-description">
          Avalie 20 cenários corporativos complexos, identifique a tríade de métricas SMART que respondem ao objetivo e audite armadilhas e ruídos de vaidade do projeto.
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <span style="font-size: 0.82rem; color: var(--text-muted);">Mecânica: Auditoria Crítica</span>
          <span class="btn btn-primary" style="font-size: 0.82rem; padding: 0.4rem 0.85rem;">Iniciar Auditoria &rarr;</span>
        </div>
      </a>
    </div>

    <!-- Practical guide card -->
    <div class="card" style="background-color: var(--bg-card-inner); border: 1px solid var(--border-inner); padding: 1.75rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span style="font-size: 1.35rem;">🎯</span>
        <h4 style="font-size: 1.15rem; color: var(--text-title); font-weight: 700;">Como aproveitar ao máximo as atividades?</h4>
      </div>
      <div class="grid-cards" style="margin-top: 1rem;">
        <div style="background-color: var(--bg-neutral-box); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
          <div style="font-weight: 700; color: var(--color-recursos-tag); margin-bottom: 0.35rem;">Classificação Rápida</div>
          <p style="font-size: 0.88rem; color: var(--text-desc); line-height: 1.6;">
            Treine sua agilidade mental e reflexos conceituais classificando métricas isoladas em Recursos, Processo ou Produto.
          </p>
        </div>
        <div style="background-color: var(--bg-neutral-box); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-inner);">
          <div style="font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.35rem;">Auditoria Crítica</div>
          <p style="font-size: 0.88rem; color: var(--text-desc); line-height: 1.6;">
            Desenvolva a visão sênior de engenheiro, descobrindo quais dados realmente ajudam a gerenciar e quais devem ser descartados como ruído.
          </p>
        </div>
      </div>
    </div>
  `;

  return { element: container };
}
