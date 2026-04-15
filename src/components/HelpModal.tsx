'use client';

interface Props {
  onClose: () => void;
}

const AREAS = [
  { area: 'Cuidar y ayudar', examples: 'Medicina, Odontología, Enfermería, Psicología, CAFYD, Magisterio' },
  { area: 'Crear y diseñar', examples: 'Bellas Artes, Diseño UX/UI, Animación 3D, Comunicación Audiovisual' },
  { area: 'Mundo natural', examples: 'Biología, Biotecnología, Física, Ciencias del Mar, Química' },
  { area: 'Construir y hacer', examples: 'Ingeniería Informática, Robótica, Arquitectura, Aeroespacial, IA' },
  { area: 'Sociedad y cultura', examples: 'Derecho, Criminología, Historia, Filología, Relaciones Internacionales' },
  { area: 'Liderar y emprender', examples: 'ADE, Economía, Finanzas, Turismo, Dirección Hotelera' },
];

const TRACKS = [
  { label: 'Ciencias', color: 'bg-teal-100 text-teal-800', description: 'Salud, ciencias puras y deporte' },
  { label: 'Tecnológico', color: 'bg-violet-100 text-violet-800', description: 'Ingenierías, informática y arquitectura' },
  { label: 'Humanidades y CC. Sociales', color: 'bg-amber-100 text-amber-800', description: 'Derecho, economía, comunicación, turismo' },
  { label: 'Artes', color: 'bg-rose-100 text-rose-800', description: 'Diseño, bellas artes, música y teatro' },
];

export default function HelpModal({ onClose }: Props) {
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
          <h2 className="text-xl font-extrabold text-gray-900">Cómo funciona</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5 space-y-7">

          {/* Intro */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Exploras tus intereses eligiendo imágenes en <strong>2 o 3 pasos</strong>. Al final descubres qué carreras universitarias encajan con lo que te apasiona y qué Bachillerato es el mejor punto de partida.
          </p>

          {/* Árbol de decisiones */}
          <section className="space-y-3">
            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">El árbol de decisiones</p>
            <div className="space-y-2">
              {[
                { step: '1', label: 'Área vocacional', desc: '¿En qué ámbito te imaginas tu futuro? — 6 opciones' },
                { step: '2', label: 'Aspecto concreto', desc: '¿Qué parte de ese ámbito te atrae más? — 2-3 opciones' },
                { step: '3', label: 'Tipo de actividad', desc: '¿Qué tipo de trabajo te imaginas haciendo? — 2-3 opciones' },
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
                <p className="text-sm text-gray-600">Resultado: entre 3 y 6 carreras con su descripción y día a día.</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Las preguntas exploran <em>motivaciones</em> (qué te imaginas haciendo), no habilidades. En 4º de ESO aún hay tiempo de desarrollar lo que cada carrera requiere.
            </p>
          </section>

          {/* Cobertura */}
          <section className="space-y-3">
            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">Qué carreras cubre</p>
            <p className="text-sm text-gray-500"><strong className="text-gray-800">78 carreras universitarias</strong> del sistema español en 6 áreas:</p>
            <div className="divide-y divide-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
              {AREAS.map(({ area, examples }) => (
                <div key={area} className="flex flex-col sm:flex-row sm:items-start gap-0.5 sm:gap-3 px-4 py-3">
                  <span className="text-sm font-semibold text-gray-800 shrink-0 sm:w-44">{area}</span>
                  <span className="text-sm text-gray-500">{examples}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bachillerato */}
          <section className="space-y-3">
            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">Modalidades de Bachillerato</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TRACKS.map(({ label, color, description }) => (
                <div key={label} className="flex items-start gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-0.5 ${color}`}>{label}</span>
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
