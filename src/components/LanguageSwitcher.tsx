'use client';

import type { Locale } from '@/types';
import { useLocale, useStrings } from '@/i18n';

const LOCALES: Locale[] = ['es', 'ca', 'gl', 'eu'];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const t = useStrings();

  return (
    <div className="flex gap-1">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
            l === locale
              ? 'bg-violet-600 text-white'
              : 'text-gray-500 hover:text-violet-600'
          }`}
          aria-current={l === locale ? 'true' : undefined}
        >
          {t.language[l]}
        </button>
      ))}
    </div>
  );
}
