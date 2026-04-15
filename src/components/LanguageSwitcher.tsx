'use client';

import type { Locale } from '@/types';
import { useLocale, useStrings } from '@/i18n';

const LOCALES: Locale[] = ['es', 'ca', 'gl', 'eu'];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const t = useStrings();

  return (
    <div className="flex gap-0.5">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-2 py-1 rounded text-xs font-bold uppercase transition-colors ${
            l === locale
              ? 'bg-violet-600 text-white'
              : 'text-gray-400 hover:text-violet-600'
          }`}
          aria-label={t.language[l]}
          aria-current={l === locale ? 'true' : undefined}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
