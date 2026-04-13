'use client';

import type { LeafNode } from '@/types';
import { BACHILLERATO_LABELS, BACHILLERATO_COLORS } from '@/types';

interface Props {
  node: LeafNode;
  onReset: () => void;
  onBack: () => void;
}

export default function ResultScreen({ node, onReset, onBack }: Props) {
  const allTracks = [...new Set(node.careers.flatMap((c) => c.bachillerato))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl select-none">🎉</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            ¡Estas carreras encajan contigo!
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Basándonos en tus elecciones, aquí tienes las opciones profesionales que mejor se alinean con lo que te apasiona.
          </p>
          <div className="flex flex-wrap gap-2 justify-center pt-1">
            {allTracks.map((track) => (
              <span
                key={track}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${BACHILLERATO_COLORS[track]}`}
              >
                Bachillerato de {BACHILLERATO_LABELS[track]}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {node.careers.map((career, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">{career.name}</h3>
                <p className="text-gray-500 mt-1 text-sm leading-relaxed">{career.description}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">
                  Tu día a día
                </p>
                <ul className="space-y-1.5">
                  {career.dayInLife.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-violet-400 mt-0.5 shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-gray-50 pt-3">
                {career.bachillerato.map((track) => (
                  <span
                    key={track}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${BACHILLERATO_COLORS[track]}`}
                  >
                    {BACHILLERATO_LABELS[track]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-violet-200 text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
          >
            ← Volver al paso anterior
          </button>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400"
          >
            Empezar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
}
