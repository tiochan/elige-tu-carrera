'use client';

import type { QuestionNode } from '@/types';
import ImageOptionCard from './ImageOptionCard';

interface Props {
  node: QuestionNode;
  onSelect: (optionIndex: number) => void;
}

export default function QuestionScreen({ node, onSelect }: Props) {
  const count = node.options.length;
  const gridClass =
    count === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="px-4 py-6">
      <div className="max-w-5xl mx-auto space-y-6">
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
