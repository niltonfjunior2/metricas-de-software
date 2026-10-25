export type MetricCategory = 'recursos' | 'processo' | 'produto';

export interface TopicMetadata {
  id: string;
  titulo: string;
  ordem: number;
  descricao?: string;
  atividadeVinculadaId?: string;
}

export interface ActivityMetadata {
  id: string;
  titulo: string;
  descricao: string;
  tipo: 'classificacao' | 'auditoria' | 'quiz';
  dificuldade: 'facil' | 'medio' | 'avancado';
  tempoEstimadoMinutos: number;
}
