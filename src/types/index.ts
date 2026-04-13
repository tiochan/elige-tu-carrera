export type BachilleratoTrack = 'ciencias' | 'tecnologico' | 'sociales' | 'artes';

export interface Career {
  name: string;
  description: string;
  dayInLife: string[];
  bachillerato: BachilleratoTrack[];
}

export interface LeafNode {
  type: 'leaf';
  careers: Career[];
}

export interface TreeOption {
  label: string;
  imageUrl: string;
  imageAlt: string;
  next: QuestionNode | LeafNode;
}

export interface QuestionNode {
  type: 'question';
  question: string;
  subtitle?: string;
  options: TreeOption[];
}

export type TreeNode = QuestionNode | LeafNode;

export interface HistoryEntry {
  node: QuestionNode;
  chosenOptionLabel: string;
}

export const BACHILLERATO_LABELS: Record<BachilleratoTrack, string> = {
  ciencias: 'Ciencias',
  tecnologico: 'Tecnológico',
  sociales: 'Humanidades y Sociales',
  artes: 'Artes',
};

export const BACHILLERATO_COLORS: Record<BachilleratoTrack, string> = {
  ciencias: 'bg-teal-100 text-teal-800 border-teal-200',
  tecnologico: 'bg-violet-100 text-violet-800 border-violet-200',
  sociales: 'bg-amber-100 text-amber-800 border-amber-200',
  artes: 'bg-rose-100 text-rose-800 border-rose-200',
};
