import type {
  ResourceTierInput,
  ProcessTierInput,
  ProductTierInput
} from './pricingEngine';

export interface SavedPricingDraft {
  id: string;
  nome: string;
  dataCriacao: string;
  aliquotaImposto: number;
  recursos: ResourceTierInput;
  processo: ProcessTierInput;
  produto: ProductTierInput;
}

const STORAGE_KEY = 'pricing_lab_simulations_v1';

export function getSavedDrafts(): SavedPricingDraft[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePricingDraft(
  nome: string,
  aliquotaImposto: number,
  recursos: ResourceTierInput,
  processo: ProcessTierInput,
  produto: ProductTierInput
): SavedPricingDraft {
  const drafts = getSavedDrafts();
  const safeName = (nome || '').trim() || `Simulação ${new Date().toLocaleDateString('pt-BR')}`;

  const newDraft: SavedPricingDraft = {
    id: `draft-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    nome: safeName,
    dataCriacao: new Date().toLocaleString('pt-BR'),
    aliquotaImposto: Number(aliquotaImposto) || 15.5,
    recursos: JSON.parse(JSON.stringify(recursos)),
    processo: JSON.parse(JSON.stringify(processo)),
    produto: JSON.parse(JSON.stringify(produto))
  };

  drafts.unshift(newDraft);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  return newDraft;
}

export function deletePricingDraft(id: string): void {
  const drafts = getSavedDrafts().filter((d) => d.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
}

export function getPricingDraftById(id: string): SavedPricingDraft | null {
  const drafts = getSavedDrafts();
  return drafts.find((d) => d.id === id) || null;
}
