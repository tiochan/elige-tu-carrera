import type { Locale, QuestionNode } from '@/types';
import { careerTree as treeEs } from './careerTree';
import { careerTree as treeCa } from './careerTree.ca';
import { careerTree as treeGl } from './careerTree.gl';

const trees: Record<Locale, QuestionNode> = {
  es: treeEs,
  ca: treeCa,
  gl: treeGl,
};

export function getCareerTree(locale: Locale): QuestionNode {
  return trees[locale];
}
