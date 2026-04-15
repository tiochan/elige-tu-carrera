'use client';

import type { HistoryEntry } from '@/types';
import LanguageSwitcher from './LanguageSwitcher';
import { useStrings } from '@/i18n';

interface Props {
  onHelpClick: () => void;
  history?: HistoryEntry[];
  onBack?: () => void;
}

export default function AppHeader({ onHelpClick, history, onBack }: Props) {
  const t = useStrings();
  const hasNav = onBack !== undefined;

  return (
    <header className="flex items-center gap-2 px-4 py-3">
      {hasNav && (
        <button
          onClick={onBack}
          className="shrink-0 flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors bg-white border border-violet-200 rounded-full px-3 py-1 shadow-sm hover:shadow"
        >
          {t.breadcrumb.back}
        </button>
      )}

      {hasNav && history && history.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap flex-1 min-w-0 text-sm">
          {history.map((entry, i) => (
            <span key={i} className="flex items-center gap-1.5 min-w-0">
              <span className="bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-full text-xs font-medium truncate max-w-[120px]">
                {entry.chosenOptionLabel}
              </span>
              {i < history.length - 1 && (
                <span className="text-gray-300 text-xs shrink-0">›</span>
              )}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1.5 ml-auto shrink-0">
        <LanguageSwitcher />
        <button
          onClick={onHelpClick}
          className="w-7 h-7 rounded-full bg-white border border-violet-200 text-violet-500 font-bold text-xs shadow-sm hover:bg-violet-50 hover:text-violet-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label={t.helpButtonAriaLabel}
        >
          ?
        </button>
      </div>
    </header>
  );
}
