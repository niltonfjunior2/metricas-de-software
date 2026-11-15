import { describe, it, expect } from 'vitest';
import { renderContractsView } from '../src/views/contracts/ContractsView';

describe('Visão Assistente de Contratos de Software (ContractsView)', () => {
  it('deve renderizar o aviso legal obrigatório (disclaimer), os 6 pilares didáticos e a minuta gerada', () => {
    const view = renderContractsView();

    const disclaimer = view.querySelector('#legal-disclaimer-banner');
    expect(disclaimer).not.toBeNull();
    expect(disclaimer?.textContent).toContain('Não Substitui Assessoria Jurídica');
    expect(disclaimer?.textContent).toContain('NÃO exime as partes de buscarem a orientação');

    expect(view.textContent).toContain('Os 6 Pilares de um Contrato Justo de Desenvolvimento de Software');
    expect(view.textContent).toContain('Lei nº 9.609/1998');
    expect(view.textContent).toContain('Lei nº 13.709/2018');

    const docOutput = view.querySelector('#contract-document-output');
    expect(docOutput).not.toBeNull();
    expect(docOutput?.textContent).toContain('CONTRATO DE PRESTAÇÃO DE SERVIÇOS');
  });

  it('deve limpar os campos ao selecionar o template "Iniciar em Branco"', () => {
    const view = renderContractsView();

    const blankBtn = view.querySelector<HTMLButtonElement>('.contract-tpl-btn[data-id="template-blank"]');
    expect(blankBtn).not.toBeNull();
    blankBtn?.click();

    const contratanteInput = view.querySelector<HTMLInputElement>('#ct-contratante-nome');
    const escopoTextarea = view.querySelector<HTMLTextAreaElement>('#ct-escopo');
    const valorInput = view.querySelector<HTMLInputElement>('#ct-valor');

    expect(contratanteInput?.value).toBe('');
    expect(escopoTextarea?.value).toBe('');
    expect(valorInput?.value).toBe('');
  });

  it('deve recalcular o termômetro de segurança jurídica e atualizar a minuta ao alterar inputs', () => {
    const view = renderContractsView();

    const chkChangeRequest = view.querySelector<HTMLInputElement>('#ct-change-request');
    expect(chkChangeRequest).not.toBeNull();

    if (chkChangeRequest) {
      chkChangeRequest.checked = false;
      chkChangeRequest.dispatchEvent(new Event('change'));
    }

    const safetyPanel = view.querySelector('#contract-safety-panel');
    expect(safetyPanel?.textContent).toContain('80%');
    expect(safetyPanel?.textContent).toContain('Risco Crítico de "Escopo Infinito"');
  });
});
