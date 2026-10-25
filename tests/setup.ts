// Configuração de ambiente para testes com Vitest e JSDOM
import { beforeEach } from 'vitest';

beforeEach(() => {
  document.body.innerHTML = '';
});
