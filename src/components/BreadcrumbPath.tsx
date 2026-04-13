'use client';

import type { HistoryEntry } from '@/types';

interface Props {
  history: HistoryEntry[];
  onBack: () => void;
}

export default function BreadcrumbPath({ history, onBack }: Props) {
  return (
    <div className="flex items-start gap-3 flex-wrap">
      <button
        onClick={onBack}
        className="shrink-0 flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors bg-white border border-violet-200 rounded-full px-3 py-1 shadow-sm hover:shadow"
      >
        ← Volver
      </button>
      {history.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap text-sm">
          {history.map((entry, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="bg-violet-100 text-violet-700 px-3 py-0.5 rounded-full text-xs font-medium">
                {entry.chosenOptionLabel}
              </span>
              {i < history.length - 1 && (
                <span className="text-gray-300 text-xs">›</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
