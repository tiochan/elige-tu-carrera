'use client';

import type { QuestionNode, HistoryEntry } from '@/types';
import ImageOptionCard from './ImageOptionCard';
import BreadcrumbPath from './BreadcrumbPath';

interface Props {
  node: QuestionNode;
  history: HistoryEntry[];
  onSelect: (optionIndex: number) => void;
  onBack: () => void;
}

export default function QuestionScreen({ node, history, onSelect, onBack }: Props) {
  const count = node.options.length;
  const gridClass =
    count === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : count === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="max-w-5xl">
          <BreadcrumbPath history={history} onBack={onBack} />
        </div>

        <div className="text-center space-y-2 py-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug tracking-tight">
            {node.question}
          </h2>
          {node.subtitle && (
            <p className="text-gray-400 text-sm">{node.subtitle}</p>
          )}
        </div>

        <div className={`grid ${gridClass} gap-4 md:gap-5`}>
          {node.options.map((option, index) => (
            <ImageOptionCard
              key={index}
              option={option}
              onSelect={() => onSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
