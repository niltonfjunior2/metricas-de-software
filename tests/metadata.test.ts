import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Metadados e Configurações de Produção', () => {
  const indexPath = path.resolve(__dirname, '../index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf-8');

  it('deve possuir meta tags essenciais de SEO e Open Graph no index.html', () => {
    expect(indexHtml).toContain('<title>Métricas de Software • Engenharia de Software</title>');
    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('property="og:description"');
    expect(indexHtml).toContain('rel="icon" type="image/svg+xml" href="/favicon.svg"');
    expect(indexHtml).toContain('<noscript>');
  });

  it('deve possuir favicon.svg válido no diretório public', () => {
    const faviconPath = path.resolve(__dirname, '../public/favicon.svg');
    expect(fs.existsSync(faviconPath)).toBe(true);

    const svgContent = fs.readFileSync(faviconPath, 'utf-8');
    expect(svgContent).toContain('<svg');
    expect(svgContent).toContain('</svg>');
  });

  it('deve possuir vercel.json configurado com regras de segurança e cache', () => {
    const vercelPath = path.resolve(__dirname, '../vercel.json');
    expect(fs.existsSync(vercelPath)).toBe(true);

    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
    expect(vercelConfig.framework).toBe('vite');
    expect(vercelConfig.rewrites).toBeDefined();
    expect(vercelConfig.headers.length).toBeGreaterThanOrEqual(2);
  });
});
