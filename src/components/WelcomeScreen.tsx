'use client';

import { useStrings } from '@/i18n';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  const t = useStrings();

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-12">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-5">
          <div className="text-7xl select-none">🔭</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {t.welcome.heading1}<br />
            <span className="text-violet-600">{t.welcome.heading2}</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-sm mx-auto leading-relaxed">
            {t.welcome.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100 text-left space-y-3">
          <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">{t.welcome.howItWorks}</p>
          <ol className="space-y-2.5">
            {[t.welcome.step1, t.welcome.step2, t.welcome.step3].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full bg-violet-100 text-violet-600 font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <button
          onClick={onStart}
          className="w-full sm:w-auto px-12 py-4 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400"
        >
          {t.welcome.start}
        </button>

        <p className="text-xs text-gray-400">
          {t.welcome.footer}
        </p>
      </div>
    </div>
  );
}
