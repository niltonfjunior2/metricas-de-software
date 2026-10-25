import { describe, it, expect, beforeEach } from 'vitest';
import { Router } from '../src/utils/router';

describe('Router SPA Client-Side', () => {
  let router: Router;

  beforeEach(() => {
    window.location.hash = '';
    router = new Router();
  });

  it('deve resolver a rota raiz quando o hash estiver vazio', () => {
    let visited = false;
    router.on('/', () => {
      visited = true;
    });

    router.resolve();
    expect(visited).toBe(true);
  });

  it('deve extrair parâmetros dinâmicos de rota corretamente', () => {
    let capturedId = '';
    router.on('/teoria/:id', (params) => {
      capturedId = params.id;
    });

    window.location.hash = '#/teoria/introducao';
    router.resolve();

    expect(capturedId).toBe('introducao');
  });

  it('deve invocar o notFoundHandler para rotas inexistentes', () => {
    let notFoundVisited = false;
    router.on('/', () => {});
    router.notFound(() => {
      notFoundVisited = true;
    });

    window.location.hash = '#/rota-inexistente';
    router.resolve();

    expect(notFoundVisited).toBe(true);
  });

  it('deve atualizar o window.location.hash via método navigate', () => {
    router.navigate('/atividades');
    expect(window.location.hash).toBe('#/atividades');
  });
});
