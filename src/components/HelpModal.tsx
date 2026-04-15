'use client';

import { useStrings } from '@/i18n';

interface Props {
  onClose: () => void;
}

const TRACK_COLORS = [
  'bg-teal-100 text-teal-800',
  'bg-violet-100 text-violet-800',
  'bg-amber-100 text-amber-800',
  'bg-rose-100 text-rose-800',
];

export default function HelpModal({ onClose }: Props) {
  const t = useStrings();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white rounded-t-3xl flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900">{t.helpModal.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label={t.helpModal.closeAriaLabel}
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5 space-y-7">

          {/* Intro */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {t.helpModal.intro}
          </p>

          {/* Decision tree */}
          <section className="space-y-3">
            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">{t.helpModal.treeTitle}</p>
            <div className="space-y-2">
              {[
                { step: '1', label: t.helpModal.step1Label, desc: t.helpModal.step1Desc },
                { step: '2', label: t.helpModal.step2Label, desc: t.helpModal.step2Desc },
                { step: '3', label: t.helpModal.step3Label, desc: t.helpModal.step3Desc },
              ].map(({ step, label, desc }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 font-bold text-xs flex items-center justify-center mt-0.5">
                    {step}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                    <span className="text-sm text-gray-500"> — {desc}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3 pt-1">
                <span className="shrink-0 w-6 h-6 rounded-full bg-violet-600 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                  →
                </span>
                <p className="text-sm text-gray-600">{t.helpModal.treeResult}</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t.helpModal.treeFootnote}
            </p>
          </section>

          {/* Career coverage */}
          <section className="space-y-3">
            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">{t.helpModal.careersTitle}</p>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-800">{t.helpModal.careersSummary}</strong>
            </p>
            <div className="divide-y divide-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
              {t.helpModal.areas.map(({ area, examples }) => (
                <div key={area} className="flex flex-col sm:flex-row sm:items-start gap-0.5 sm:gap-3 px-4 py-3">
                  <span className="text-sm font-semibold text-gray-800 shrink-0 sm:w-44">{area}</span>
                  <span className="text-sm text-gray-500">{examples}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bachillerato tracks */}
          <section className="space-y-3">
            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">{t.helpModal.bachilleratoTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t.helpModal.tracks.map(({ label, description }, i) => (
                <div key={label} className="flex items-start gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-0.5 ${TRACK_COLORS[i]}`}>{label}</span>
                  <span className="text-sm text-gray-500 pt-0.5">{description}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
