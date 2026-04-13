'use client';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-5">
          <div className="text-7xl select-none">🔭</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            ¿Qué quieres ser<br />
            <span className="text-violet-600">de mayor?</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-sm mx-auto leading-relaxed">
            Descubre qué carreras encajan con lo que te apasiona y qué bachillerato es tu mejor punto de partida.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100 text-left space-y-3">
          <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">¿Cómo funciona?</p>
          <ol className="space-y-2.5">
            {[
              'Te mostramos situaciones representadas con imágenes reales.',
              'Elige la que más te llame la atención sin pensarlo demasiado.',
              'Al final verás qué carreras te encajan y qué bachillerato las activa.',
            ].map((step, i) => (
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
          Empezar →
        </button>

        <p className="text-xs text-gray-400">
          Puedes volver atrás en cualquier momento y explorar otras opciones.
        </p>
      </div>
    </div>
  );
}
