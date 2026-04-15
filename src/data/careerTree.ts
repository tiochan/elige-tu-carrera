import type { QuestionNode, LeafNode } from '@/types';

// ─── LEAF NODES ─────────────────────────────────────────────────────────────

const leafMedicinaCuidados: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Medicina',
      description: 'Diagnosticas y tratas enfermedades para mejorar la salud de las personas.',
      dayInLife: ['Explorar y examinar pacientes', 'Diagnosticar y prescribir tratamientos', 'Seguir la evolución de cada caso'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Enfermería',
      description: 'Cuidas directamente a los pacientes y coordinas sus cuidados día a día.',
      dayInLife: ['Administrar medicación y monitorizar constantes', 'Apoyar emocionalmente a pacientes y familias', 'Colaborar con el equipo médico'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Odontología',
      description: 'Cuidas la salud bucodental diagnosticando y tratando enfermedades de dientes, encías y boca.',
      dayInLife: ['Realizar revisiones y diagnosticar problemas bucodentales', 'Tratar caries, realizar extracciones y ortodoncia', 'Asesorar sobre higiene oral y prevención'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Fisioterapia',
      description: 'Recuperas la movilidad y el bienestar físico mediante ejercicio y técnicas manuales.',
      dayInLife: ['Evaluar la lesión o limitación del paciente', 'Diseñar un plan de rehabilitación personalizado', 'Hacer seguimiento de la evolución'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Terapia Ocupacional',
      description: 'Ayudas a personas con discapacidad a recuperar su autonomía en la vida cotidiana.',
      dayInLife: ['Evaluar las capacidades funcionales del paciente', 'Enseñar técnicas adaptadas para actividades diarias', 'Trabajar con familias y cuidadores'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafInvestigacionBiomedica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Farmacia',
      description: 'Desarrollas, analizas y dispensas medicamentos asegurando su seguridad y eficacia.',
      dayInLife: ['Investigar nuevos compuestos activos en laboratorio', 'Asesorar sobre interacciones y dosificación', 'Controlar la calidad de medicamentos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Biomedicina',
      description: 'Investigas los mecanismos de las enfermedades para encontrar nuevas terapias.',
      dayInLife: ['Diseñar y llevar a cabo experimentos', 'Analizar datos y publicar hallazgos', 'Colaborar con equipos médicos en proyectos clínicos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Salud Pública',
      description: 'Proteges y mejoras la salud de toda una comunidad o población.',
      dayInLife: ['Analizar datos epidemiológicos', 'Diseñar campañas de prevención', 'Asesorar a organismos sobre políticas sanitarias'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafSaludFisicaPreventiva: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Ciencias del Deporte (CAFYD)',
      description: 'Aplicas el conocimiento científico del movimiento humano para mejorar el rendimiento deportivo y la salud.',
      dayInLife: ['Diseñar programas de entrenamiento personalizados', 'Analizar el rendimiento físico con tecnología', 'Trabajar con deportistas o en programas de salud comunitaria'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Nutrición y Dietética',
      description: 'Diseñas planes de alimentación para prevenir enfermedades y mejorar la salud de las personas.',
      dayInLife: ['Evaluar el estado nutricional del paciente', 'Elaborar dietas adaptadas a cada caso clínico', 'Educar sobre hábitos alimentarios saludables'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Óptica y Optometría',
      description: 'Evalúas la salud visual y corriges los defectos de visión con lentes y tratamientos ópticos.',
      dayInLife: ['Realizar exámenes visuales completos', 'Prescribir y adaptar gafas y lentillas', 'Detectar y derivar patologías oculares'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafSaludMental: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Psicología',
      description: 'Evalúas y acompañas a personas para mejorar su bienestar emocional y mental.',
      dayInLife: ['Realizar sesiones terapéuticas individuales o en grupo', 'Aplicar test y evaluaciones psicológicas', 'Diseñar planes de intervención'],
      bachillerato: ['ciencias', 'sociales'],
    },
    {
      name: 'Trabajo Social',
      description: 'Ayudas a personas y familias en situación de vulnerabilidad a acceder a recursos y apoyo.',
      dayInLife: ['Entrevistar y valorar situaciones familiares o sociales', 'Conectar a las personas con servicios de apoyo', 'Coordinar con servicios sociales y ONG'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Logopedia',
      description: 'Diagnosticas y tratas los trastornos del lenguaje, la voz y la comunicación.',
      dayInLife: ['Evaluar el habla y el lenguaje de pacientes', 'Diseñar ejercicios de rehabilitación comunicativa', 'Trabajar con niños con dificultades del aprendizaje'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafEducacion: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Magisterio (Educación Infantil / Primaria)',
      description: 'Enseñas y acompañas el desarrollo integral de niños en sus primeros años de formación.',
      dayInLife: ['Preparar y dar clases adaptadas a cada edad', 'Observar y estimular el desarrollo de cada alumno/a', 'Comunicarse con familias y equipo docente'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Pedagogía',
      description: 'Diseñas y evalúas procesos educativos para mejorar cómo aprenden las personas.',
      dayInLife: ['Analizar necesidades educativas de un grupo o institución', 'Diseñar programas y materiales de formación', 'Evaluar el impacto de las intervenciones educativas'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Psicopedagogía',
      description: 'Orientas a estudiantes con dificultades de aprendizaje y apoyas a equipos docentes.',
      dayInLife: ['Evaluar las dificultades de aprendizaje', 'Diseñar planes de apoyo individualizados', 'Asesorar a docentes y familias'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Educación Social',
      description: 'Acompañas a personas en riesgo de exclusión para favorecer su integración y desarrollo social.',
      dayInLife: ['Diseñar programas socioeducativos en barrios o instituciones', 'Trabajar con jóvenes, personas mayores o colectivos vulnerables', 'Coordinar con servicios sociales y entidades del tercer sector'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafBellasArtes: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Bellas Artes',
      description: 'Creas obras artísticas con pintura, escultura, grabado y otros medios expresivos.',
      dayInLife: ['Desarrollar proyectos artísticos propios', 'Investigar técnicas y materiales', 'Exponer obras en galerías o museos'],
      bachillerato: ['artes'],
    },
    {
      name: 'Diseño de Moda',
      description: 'Creas prendas y colecciones uniendo estética, tendencias y funcionalidad.',
      dayInLife: ['Diseñar bocetos y patrones de prendas', 'Seleccionar tejidos y materiales', 'Presentar colecciones a clientes o en pasarelas'],
      bachillerato: ['artes'],
    },
    {
      name: 'Conservación y Restauración',
      description: 'Recuperas y preservas obras de arte y patrimonio histórico para las generaciones futuras.',
      dayInLife: ['Analizar el estado de deterioro de una obra', 'Aplicar técnicas de limpieza y consolidación', 'Documentar cada intervención para el registro histórico'],
      bachillerato: ['artes'],
    },
  ],
};

const leafDisenoDigital: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Diseño Gráfico',
      description: 'Comunicas mensajes visualmente mediante imágenes, tipografía y composición.',
      dayInLife: ['Crear identidades visuales y logotipos', 'Diseñar piezas para campañas o publicaciones', 'Trabajar con equipos de marketing o agencias'],
      bachillerato: ['artes', 'tecnologico'],
    },
    {
      name: 'Diseño UX/UI',
      description: 'Diseñas experiencias digitales intuitivas y atractivas para apps y webs.',
      dayInLife: ['Estudiar el comportamiento de los usuarios', 'Crear prototipos e interfaces interactivas', 'Iterar el diseño con base en pruebas reales'],
      bachillerato: ['tecnologico', 'artes'],
    },
    {
      name: 'Animación 3D y Efectos Visuales',
      description: 'Creas personajes, mundos y efectos visuales para cine, videojuegos o publicidad.',
      dayInLife: ['Modelar y animar objetos en software 3D', 'Crear secuencias de efectos visuales', 'Colaborar en producciones audiovisuales'],
      bachillerato: ['artes', 'tecnologico'],
    },
  ],
};

const leafArtesEscenicas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Interpretación Musical (Conservatorio)',
      description: 'Dominas un instrumento o la voz para actuar en formaciones musicales.',
      dayInLife: ['Practicar y perfeccionar tu instrumento', 'Ensayar con orquestas, grupos o de forma solista', 'Actuar en conciertos y festivales'],
      bachillerato: ['artes'],
    },
    {
      name: 'Arte Dramático / Teatro',
      description: 'Interpretas personajes en obras de teatro, cine o televisión.',
      dayInLife: ['Estudiar y preparar personajes', 'Ensayar con el director y el elenco', 'Actuar ante el público o la cámara'],
      bachillerato: ['artes'],
    },
    {
      name: 'Danza',
      description: 'Te expresas y comunicas a través del movimiento corporal en escenarios.',
      dayInLife: ['Entrenar técnica de danza diariamente', 'Aprender coreografías y desarrollar las propias', 'Actuar en compañías o producciones'],
      bachillerato: ['artes'],
    },
  ],
};

const leafComunicacion: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Periodismo',
      description: 'Investigas y cuentas la realidad a través de noticias, reportajes y entrevistas.',
      dayInLife: ['Investigar temas de actualidad y contrastar fuentes', 'Redactar, grabar o editar piezas informativas', 'Publicar en medios digitales, radio o televisión'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Comunicación Audiovisual',
      description: 'Produces y diriges contenidos para cine, televisión, streaming y redes sociales.',
      dayInLife: ['Escribir guiones y planificar rodajes', 'Dirigir o editar vídeos y podcasts', 'Gestionar canales y analizar audiencias'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Publicidad y Relaciones Públicas',
      description: 'Construyes la imagen de marcas y conectas con el público a través de campañas.',
      dayInLife: ['Diseñar estrategias de comunicación para clientes', 'Crear mensajes y piezas creativas', 'Gestionar la reputación y la presencia en medios'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafCienciasVida: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Biología',
      description: 'Estudias los seres vivos: su origen, funcionamiento y relaciones en los ecosistemas.',
      dayInLife: ['Realizar muestreos en campo o experimentos en laboratorio', 'Analizar datos y publicar investigaciones', 'Asesorar sobre conservación o medio ambiente'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Veterinaria',
      description: 'Cuidas la salud de animales domésticos, de producción y en peligro de extinción.',
      dayInLife: ['Examinar y tratar animales enfermos', 'Realizar cirugías y controles de salud', 'Asesorar a ganaderos o trabajar en parques naturales'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ciencias Ambientales',
      description: 'Analizas y propones soluciones a los problemas medioambientales.',
      dayInLife: ['Realizar estudios de impacto ambiental', 'Proponer planes de gestión de residuos o conservación', 'Asesorar a empresas y administraciones públicas'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ciencias del Mar',
      description: 'Investigas los océanos, su biodiversidad y los procesos que regulan el clima y los ecosistemas marinos.',
      dayInLife: ['Tomar muestras y datos en expediciones marinas', 'Analizar el impacto humano en los ecosistemas costeros', 'Asesorar sobre gestión sostenible de recursos pesqueros'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafBiotecnologia: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Biotecnología',
      description: 'Usas organismos vivos y herramientas moleculares para crear productos y soluciones.',
      dayInLife: ['Diseñar y ejecutar experimentos con cultivos celulares', 'Desarrollar medicamentos o cultivos mejorados', 'Analizar datos genéticos con bioinformática'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Genética',
      description: 'Estudias la herencia y la variación genética para entender enfermedades y evolución.',
      dayInLife: ['Secuenciar y analizar genomas', 'Investigar mutaciones ligadas a enfermedades', 'Desarrollar terapias génicas o pruebas diagnósticas'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Bioquímica',
      description: 'Investigas los procesos químicos que ocurren en los seres vivos a escala molecular.',
      dayInLife: ['Purificar y analizar proteínas o enzimas', 'Diseñar fármacos basados en estructuras moleculares', 'Publicar investigaciones en revistas científicas'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafFisicaMatematicas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Física',
      description: 'Investigas las leyes fundamentales que rigen el universo, desde partículas hasta galaxias.',
      dayInLife: ['Diseñar experimentos y analizar resultados', 'Modelar fenómenos con ecuaciones matemáticas', 'Colaborar en grandes proyectos científicos internacionales'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Astrofísica / Astronomía',
      description: 'Estudias estrellas, galaxias y el origen del universo.',
      dayInLife: ['Observar el cielo con telescopios o satélites', 'Analizar datos de misiones espaciales', 'Publicar descubrimientos sobre el cosmos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Matemáticas',
      description: 'Desarrollas teorías, modelos y algoritmos para resolver problemas abstractos y reales.',
      dayInLife: ['Demostrar teoremas y desarrollar nueva teoría', 'Modelar fenómenos en física, economía o biología', 'Colaborar con industria o centros de investigación'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafQuimica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Química',
      description: 'Estudias la composición y transformación de la materia para crear nuevos materiales y procesos.',
      dayInLife: ['Sintetizar y caracterizar compuestos en laboratorio', 'Analizar muestras con técnicas instrumentales', 'Investigar para la industria o la academia'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ingeniería Química',
      description: 'Diseñas procesos industriales para transformar materias primas en productos útiles.',
      dayInLife: ['Diseñar reactores y plantas de producción', 'Optimizar procesos para reducir costes y emisiones', 'Supervisar la seguridad en instalaciones industriales'],
      bachillerato: ['ciencias', 'tecnologico'],
    },
    {
      name: 'Ciencia de Materiales',
      description: 'Desarrollas nuevos materiales con propiedades específicas para aplicaciones tecnológicas.',
      dayInLife: ['Sintetizar y probar nuevos polímeros, aleaciones o nanomateriales', 'Caracterizar propiedades mecánicas y térmicas', 'Colaborar con industrias aeroespacial, médica o energética'],
      bachillerato: ['ciencias', 'tecnologico'],
    },
  ],
};

const leafSoftware: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Ingeniería Informática',
      description: 'Diseñas y construyes sistemas de software que resuelven problemas reales.',
      dayInLife: ['Programar y revisar código en equipo', 'Diseñar arquitecturas de aplicaciones', 'Resolver bugs y lanzar nuevas funcionalidades'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Desarrollo de Videojuegos',
      description: 'Creas mundos interactivos combinando programación, arte y narrativa.',
      dayInLife: ['Programar mecánicas y sistemas de juego', 'Integrar arte, música y narrativa en el motor gráfico', 'Testear y pulir la experiencia del jugador'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Ciberseguridad',
      description: 'Proteges sistemas y datos de amenazas digitales y ataques informáticos.',
      dayInLife: ['Analizar vulnerabilidades en sistemas y redes', 'Diseñar defensas y protocolos de seguridad', 'Responder a incidentes y brechas de seguridad'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafIADatos: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Data Science / Ciencia de Datos',
      description: 'Extraes conocimiento útil de grandes volúmenes de datos para tomar mejores decisiones.',
      dayInLife: ['Recopilar, limpiar y explorar conjuntos de datos', 'Aplicar modelos estadísticos y de machine learning', 'Presentar insights en visualizaciones y dashboards'],
      bachillerato: ['tecnologico', 'ciencias'],
    },
    {
      name: 'Inteligencia Artificial',
      description: 'Desarrollas sistemas capaces de aprender y tomar decisiones de forma autónoma.',
      dayInLife: ['Diseñar y entrenar modelos de deep learning', 'Investigar nuevas arquitecturas de redes neuronales', 'Aplicar IA a problemas reales en salud, industria o ciencia'],
      bachillerato: ['tecnologico', 'ciencias'],
    },
    {
      name: 'Estadística',
      description: 'Diseñas estudios y analizas datos para extraer conclusiones válidas en cualquier campo.',
      dayInLife: ['Diseñar experimentos y encuestas', 'Aplicar modelos estadísticos complejos', 'Asesorar a investigadores y empresas sobre sus datos'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafIngenieriaEstructuras: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Ingeniería Civil',
      description: 'Diseñas y construyes infraestructuras: puentes, carreteras, presas y edificios.',
      dayInLife: ['Calcular estructuras y materiales necesarios', 'Supervisar obras en campo', 'Colaborar con arquitectos y administraciones públicas'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Arquitectura',
      description: 'Diseñas espacios habitables que combinan funcionalidad, estética y sostenibilidad.',
      dayInLife: ['Diseñar planos y maquetas de edificios', 'Supervisar la construcción en obra', 'Reunirse con clientes para entender sus necesidades'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Ingeniería de Caminos',
      description: 'Planificas y ejecutas grandes proyectos de infraestructura para conectar ciudades y territorios.',
      dayInLife: ['Proyectar carreteras, ferrocarriles o puertos', 'Gestionar contratos y presupuestos de obra', 'Analizar el impacto ambiental de los proyectos'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafIngenieriaAplicada: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Ingeniería Mecánica',
      description: 'Diseñas y fabricas máquinas, motores y sistemas mecánicos.',
      dayInLife: ['Diseñar piezas con software CAD', 'Simular y probar el comportamiento de sistemas', 'Supervisar la fabricación y el control de calidad'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Ingeniería Electrónica',
      description: 'Diseñas circuitos, dispositivos y sistemas electrónicos.',
      dayInLife: ['Diseñar y prototipar placas de circuito', 'Programar microcontroladores y sistemas embebidos', 'Integrar electrónica en productos de consumo o industria'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Robótica e Ingeniería de Telecomunicaciones',
      description: 'Desarrollas robots autónomos y sistemas de comunicación que conectan el mundo.',
      dayInLife: ['Diseñar robots industriales o de servicio', 'Planificar redes de comunicación 5G o satelital', 'Integrar sensores e inteligencia artificial en sistemas físicos'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Ingeniería Aeroespacial',
      description: 'Diseñas aeronaves, satélites y sistemas de propulsión para la aviación y la exploración espacial.',
      dayInLife: ['Calcular estructuras y sistemas de vuelo', 'Diseñar y probar componentes en simuladores o túneles de viento', 'Colaborar en proyectos aeroespaciales internacionales'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafHistoriaFilosofia: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Historia',
      description: 'Investigas el pasado para comprender el presente y orientar el futuro.',
      dayInLife: ['Estudiar fuentes primarias y archivos históricos', 'Redactar artículos, libros o informes', 'Enseñar o asesorar a museos e instituciones culturales'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Filosofía',
      description: 'Reflexionas sobre el conocimiento, la ética, la existencia y las grandes preguntas humanas.',
      dayInLife: ['Leer, analizar y escribir sobre ideas filosóficas', 'Debatir en seminarios y congresos', 'Enseñar o asesorar en ética empresarial o bioética'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Arqueología / Historia del Arte',
      description: 'Descubres y analizas el patrimonio material y artístico de las civilizaciones.',
      dayInLife: ['Participar en excavaciones arqueológicas', 'Analizar y catalogar piezas en museos', 'Redactar informes y publicar descubrimientos'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafLenguas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Filología',
      description: 'Estudias el lenguaje, la literatura y la evolución de las lenguas en profundidad.',
      dayInLife: ['Analizar textos literarios y lingüísticos', 'Investigar la evolución del lenguaje', 'Enseñar en universidades o institutos de idiomas'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Traducción e Interpretación',
      description: 'Transmites conocimientos, ideas y culturas entre idiomas distintos.',
      dayInLife: ['Traducir documentos, libros o contenido web', 'Interpretar en conferencias internacionales', 'Gestionar proyectos de localización para empresas globales'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Lingüística',
      description: 'Estudias científicamente la estructura, el uso y la evolución de los lenguajes humanos.',
      dayInLife: ['Analizar patrones fonéticos, gramaticales o semánticos', 'Trabajar en tecnologías de procesamiento del lenguaje natural', 'Investigar lenguas en peligro de extinción'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafDerechoPolitica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Derecho',
      description: 'Interpretas y aplicas las leyes para defender derechos y resolver conflictos.',
      dayInLife: ['Asesorar a clientes sobre sus derechos', 'Preparar y defender casos ante tribunales', 'Redactar contratos, demandas y recursos legales'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Ciencias Políticas',
      description: 'Analizas sistemas políticos, partidos, elecciones y políticas públicas.',
      dayInLife: ['Investigar el comportamiento electoral y los sistemas de gobierno', 'Asesorar a partidos, gobiernos u organizaciones internacionales', 'Diseñar e implementar políticas públicas'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Relaciones Internacionales',
      description: 'Trabajas en diplomacia, cooperación y análisis de los asuntos globales.',
      dayInLife: ['Negociar acuerdos entre países u organismos internacionales', 'Analizar conflictos y situaciones geopolíticas', 'Trabajar en ONG, embajadas u organismos como la ONU'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Criminología',
      description: 'Estudias el crimen, sus causas y consecuencias para diseñar políticas de prevención y seguridad.',
      dayInLife: ['Analizar patrones delictivos y perfiles criminales', 'Colaborar con fuerzas de seguridad y juzgados', 'Proponer políticas de reinserción y prevención del delito'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafCienciasSociales: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Sociología',
      description: 'Estudias la estructura y los cambios de las sociedades para entender el comportamiento colectivo.',
      dayInLife: ['Diseñar encuestas y analizar datos sociales', 'Investigar fenómenos como desigualdad, migración o identidad', 'Publicar estudios o asesorar a gobiernos y ONG'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Antropología',
      description: 'Investigas la diversidad cultural y el comportamiento humano a lo largo del tiempo.',
      dayInLife: ['Realizar trabajo de campo en comunidades', 'Analizar rituales, costumbres y estructuras sociales', 'Publicar etnografías y asesorar sobre diversidad cultural'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Geografía Humana',
      description: 'Estudias cómo el espacio y el territorio influyen en las sociedades y la economía.',
      dayInLife: ['Analizar datos de población y territorio con SIG', 'Investigar planificación urbana o migraciones', 'Asesorar a administraciones en desarrollo regional'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafEmpresa: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Administración y Dirección de Empresas (ADE)',
      description: 'Gestionas y diriges organizaciones para maximizar su rendimiento y sostenibilidad.',
      dayInLife: ['Analizar resultados y tomar decisiones estratégicas', 'Liderar equipos y coordinar departamentos', 'Desarrollar planes de negocio y negociar con socios'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Marketing y Comunicación',
      description: 'Conectas marcas con sus públicos a través de estrategias creativas y datos.',
      dayInLife: ['Diseñar y lanzar campañas de marketing digital', 'Analizar métricas de rendimiento', 'Gestionar la presencia de la marca en redes sociales'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Recursos Humanos',
      description: 'Gestionas el talento de una organización y cuidas el bienestar de las personas.',
      dayInLife: ['Seleccionar y incorporar nuevos perfiles', 'Diseñar planes de formación y desarrollo', 'Gestionar conflictos y el clima organizacional'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafEconomiaFinanzas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Economía',
      description: 'Analizas el comportamiento de mercados, países y agentes económicos para tomar mejores decisiones.',
      dayInLife: ['Modelar la economía con datos y ecuaciones', 'Asesorar a gobiernos o empresas sobre políticas económicas', 'Publicar estudios sobre inflación, empleo o comercio'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Finanzas e Inversión',
      description: 'Gestionas carteras de inversión y evalúas la viabilidad financiera de proyectos.',
      dayInLife: ['Analizar estados financieros y mercados bursátiles', 'Diseñar estrategias de inversión', 'Asesorar a empresas en fusiones, adquisiciones o financiación'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Actuaría y Matemáticas Financieras',
      description: 'Calculas y gestionas riesgos económicos para aseguradoras, bancos y fondos.',
      dayInLife: ['Modelar probabilidades de riesgo con matemáticas avanzadas', 'Diseñar productos de seguros o pensiones', 'Asesorar sobre solvencia y regulación financiera'],
      bachillerato: ['ciencias', 'sociales'],
    },
  ],
};

const leafTurismo: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Turismo',
      description: 'Planificas, gestionas y promocionas destinos y productos turísticos a nivel nacional e internacional.',
      dayInLife: ['Diseñar paquetes turísticos y gestionar agencias de viaje', 'Analizar tendencias del mercado turístico', 'Trabajar en destinos turísticos, aeropuertos u organismos de promoción'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Dirección Hotelera',
      description: 'Gestionas establecimientos de alojamiento y hostelería asegurando la excelencia en la experiencia del huésped.',
      dayInLife: ['Supervisar los departamentos del hotel (recepción, restauración, pisos)', 'Gestionar el revenue y las reservas', 'Liderar equipos y garantizar la satisfacción del cliente'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Gastronomía y Artes Culinarias',
      description: 'Creas y gestionas experiencias gastronómicas combinando técnica culinaria, creatividad y cultura.',
      dayInLife: ['Diseñar menús y desarrollar nuevas recetas', 'Gestionar cocinas de restaurantes o empresas de catering', 'Investigar técnicas culinarias innovadoras y tendencias gastronómicas'],
      bachillerato: ['sociales', 'artes'],
    },
  ],
};

// ─── LEVEL 3 QUESTION NODES ──────────────────────────────────────────────────

const nodeSaludFisicaDetalle: QuestionNode = {
  type: 'question',
  question: '¿Qué aspecto de la salud física te imaginas trabajando?',
  options: [
    {
      label: 'Tratar directamente a pacientes',
      imageUrl: '/images/sanitaria-paciente.jpg',
      imageAlt: 'Médica revisando a un paciente con amabilidad',
      next: leafMedicinaCuidados,
    },
    {
      label: 'Investigar enfermedades y desarrollar tratamientos',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Científica investigando en un laboratorio biomédico',
      next: leafInvestigacionBiomedica,
    },
    {
      label: 'Deporte, nutrición y bienestar físico preventivo',
      imageUrl: '/images/entrenadora-deporte.jpg',
      imageAlt: 'Preparadora física entrenando con deportistas en instalación deportiva',
      next: leafSaludFisicaPreventiva,
    },
  ],
};

const nodeArteVisualDetalle: QuestionNode = {
  type: 'question',
  question: '¿Qué tipo de creación visual te atrae más?',
  options: [
    {
      label: 'Arte clásico: pintura, escultura, patrimonio',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista pintando en su estudio con colores vibrantes',
      next: leafBellasArtes,
    },
    {
      label: 'Diseño digital: gráfico, UX, animación',
      imageUrl: '/images/disenadora-digital.jpg',
      imageAlt: 'Diseñadora creando una interfaz digital en pantalla',
      next: leafDisenoDigital,
    },
  ],
};

const nodeSoftwareDetalle: QuestionNode = {
  type: 'question',
  question: '¿Qué tipo de mundo digital te apasiona más?',
  options: [
    {
      label: 'Crear apps, webs, videojuegos y sistemas seguros',
      imageUrl: '/images/desarrolladora-codigo.jpg',
      imageAlt: 'Desarrolladora programando con múltiples pantallas de código',
      next: leafSoftware,
    },
    {
      label: 'Inteligencia artificial, datos y algoritmos',
      imageUrl: '/images/visualizacion-ia.jpg',
      imageAlt: 'Pantallas con visualizaciones de datos y modelos de IA',
      next: leafIADatos,
    },
  ],
};

const nodeIngFisicaDetalle: QuestionNode = {
  type: 'question',
  question: '¿Qué tipo de construcción te imaginas haciendo?',
  options: [
    {
      label: 'Edificios, puentes, infraestructuras y ciudades',
      imageUrl: '/images/arquitecta-planos.jpg',
      imageAlt: 'Arquitecta revisando planos de una gran estructura',
      next: leafIngenieriaEstructuras,
    },
    {
      label: 'Máquinas, robots, electrónica y telecomunicaciones',
      imageUrl: '/images/ingeniera-robot.jpg',
      imageAlt: 'Ingeniera trabajando con un robot y componentes electrónicos',
      next: leafIngenieriaAplicada,
    },
  ],
};

const nodeNaturalezaViviente: QuestionNode = {
  type: 'question',
  question: '¿Qué mundo vivo te interesa más explorar?',
  options: [
    {
      label: 'Ecosistemas, animales y medio ambiente',
      imageUrl: '/images/biologa-bosque.jpg',
      imageAlt: 'Bióloga tomando muestras en un bosque exuberante',
      next: leafCienciasVida,
    },
    {
      label: 'Genética, biotecnología y vida a escala molecular',
      imageUrl: '/images/cientifica-genetica.jpg',
      imageAlt: 'Científica trabajando con muestras genéticas en laboratorio',
      next: leafBiotecnologia,
    },
  ],
};

const nodeNaturalezaFisica: QuestionNode = {
  type: 'question',
  question: '¿Qué fenómenos del universo inorgánico te fascinan?',
  options: [
    {
      label: 'Física, matemáticas y el cosmos',
      imageUrl: '/images/observatorio-telescopio.jpg',
      imageAlt: 'Observatorio con telescopio apuntando al cielo estrellado',
      next: leafFisicaMatematicas,
    },
    {
      label: 'Química, materiales y transformación de la materia',
      imageUrl: '/images/quimica-laboratorio.jpg',
      imageAlt: 'Química experimentando con compuestos en laboratorio',
      next: leafQuimica,
    },
  ],
};

const nodeHistoriaOLenguas: QuestionNode = {
  type: 'question',
  question: '¿Qué dimensión de la cultura humana te atrae más?',
  options: [
    {
      label: 'El pasado: historia, filosofía y patrimonio',
      imageUrl: '/images/investigadora-libros.jpg',
      imageAlt: 'Investigadora rodeada de libros históricos en una biblioteca',
      next: leafHistoriaFilosofia,
    },
    {
      label: 'Las lenguas, los idiomas y la comunicación intercultural',
      imageUrl: '/images/traductora-idiomas.jpg',
      imageAlt: 'Traductora trabajando con textos de diferentes idiomas',
      next: leafLenguas,
    },
  ],
};

// ─── LEVEL 2 QUESTION NODES ──────────────────────────────────────────────────

const nodeCuidar: QuestionNode = {
  type: 'question',
  question: '¿Cómo te imaginas ayudando a las personas?',
  options: [
    {
      label: 'Cuidando su salud y bienestar físico',
      imageUrl: '/images/medica-paciente.jpg',
      imageAlt: 'Médica con bata blanca acompañando a una paciente',
      next: nodeSaludFisicaDetalle,
    },
    {
      label: 'Apoyando su bienestar emocional y mental',
      imageUrl: '/images/psicologa-consulta.jpg',
      imageAlt: 'Psicóloga escuchando atentamente a una persona en consulta',
      next: leafSaludMental,
    },
    {
      label: 'Enseñando y educando',
      imageUrl: '/images/profesora-clase.jpg',
      imageAlt: 'Profesora entusiasta explicando a estudiantes en clase',
      next: leafEducacion,
    },
  ],
};

const nodeCrear: QuestionNode = {
  type: 'question',
  question: '¿Qué tipo de creación te emociona más?',
  options: [
    {
      label: 'Arte visual y diseño',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista creando una obra en su estudio lleno de color',
      next: nodeArteVisualDetalle,
    },
    {
      label: 'Música, teatro o danza',
      imageUrl: '/images/actuacion-escenario.jpg',
      imageAlt: 'Actuación en escenario con luces dramáticas',
      next: leafArtesEscenicas,
    },
    {
      label: 'Contar historias y comunicar al mundo',
      imageUrl: '/images/periodista-camara.jpg',
      imageAlt: 'Periodista grabando un reportaje con cámara profesional',
      next: leafComunicacion,
    },
  ],
};

const nodeNaturaleza: QuestionNode = {
  type: 'question',
  question: '¿Qué parte del mundo natural te fascina más?',
  options: [
    {
      label: 'Los seres vivos: animales, plantas y células',
      imageUrl: '/images/biologa-bosque.jpg',
      imageAlt: 'Bióloga tomando muestras en un bosque exuberante',
      next: nodeNaturalezaViviente,
    },
    {
      label: 'La materia, la energía y el cosmos',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Investigadora en laboratorio con equipo científico de precisión',
      next: nodeNaturalezaFisica,
    },
  ],
};

const nodeConstruir: QuestionNode = {
  type: 'question',
  question: '¿Qué tipo de construcción te atrae más?',
  options: [
    {
      label: 'Software, apps e inteligencia artificial',
      imageUrl: '/images/desarrolladora-codigo.jpg',
      imageAlt: 'Desarrolladora programando con múltiples pantallas de código',
      next: nodeSoftwareDetalle,
    },
    {
      label: 'Máquinas, estructuras e infraestructuras físicas',
      imageUrl: '/images/ingeniera-industrial.jpg',
      imageAlt: 'Ingeniera supervisando una gran instalación industrial',
      next: nodeIngFisicaDetalle,
    },
  ],
};

const nodeSociedad: QuestionNode = {
  type: 'question',
  question: '¿Qué aspecto de la sociedad y la cultura te interesa más?',
  options: [
    {
      label: 'La historia, la filosofía y las lenguas',
      imageUrl: '/images/personas-debate.jpg',
      imageAlt: 'Personas diversas debatiendo ideas en un espacio académico',
      next: nodeHistoriaOLenguas,
    },
    {
      label: 'La justicia, los derechos y la política',
      imageUrl: '/images/abogada-documentos.jpg',
      imageAlt: 'Abogada leyendo documentos legales en un despacho',
      next: leafDerechoPolitica,
    },
    {
      label: 'Entender y mejorar la sociedad',
      imageUrl: '/images/investigadora-social.jpg',
      imageAlt: 'Investigadora social entrevistando a personas en comunidad',
      next: leafCienciasSociales,
    },
  ],
};

const nodeNegocios: QuestionNode = {
  type: 'question',
  question: '¿Qué tipo de trabajo con datos y organizaciones te atrae?',
  options: [
    {
      label: 'Crear y dirigir empresas o proyectos',
      imageUrl: '/images/emprendedora-startup.jpg',
      imageAlt: 'Emprendedora presentando su proyecto a inversores en una startup',
      next: leafEmpresa,
    },
    {
      label: 'Análisis económico, finanzas e inversión',
      imageUrl: '/images/analista-financiera.jpg',
      imageAlt: 'Analista financiera revisando gráficos y datos económicos',
      next: leafEconomiaFinanzas,
    },
    {
      label: 'Turismo, hostelería y experiencias',
      imageUrl: '/images/turismo-viajeros.jpg',
      imageAlt: 'Profesional de turismo atendiendo viajeros en un destino internacional',
      next: leafTurismo,
    },
  ],
};

// ─── ROOT NODE ───────────────────────────────────────────────────────────────

export const careerTree: QuestionNode = {
  type: 'question',
  question: '¿Cuál de estas situaciones te imaginas en tu futuro?',
  subtitle: 'Elige la imagen que más te llame la atención',
  options: [
    {
      label: 'Cuidar y ayudar a las personas',
      imageUrl: '/images/sanitaria-paciente.jpg',
      imageAlt: 'Profesional sanitaria sonriendo con una paciente mayor',
      next: nodeCuidar,
    },
    {
      label: 'Crear y diseñar cosas nuevas',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista creando una obra original en su estudio',
      next: nodeCrear,
    },
    {
      label: 'Entender cómo funciona el mundo natural',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Científica investigando con microscopio en laboratorio',
      next: nodeNaturaleza,
    },
    {
      label: 'Construir y hacer funcionar las cosas',
      imageUrl: '/images/tecnologia-componentes.jpg',
      imageAlt: 'Ingeniera analizando componentes de tecnología avanzada',
      next: nodeConstruir,
    },
    {
      label: 'Comprender la sociedad y la cultura',
      imageUrl: '/images/personas-debate.jpg',
      imageAlt: 'Personas diversas colaborando y debatiendo ideas',
      next: nodeSociedad,
    },
    {
      label: 'Liderar, emprender y trabajar con datos',
      imageUrl: '/images/profesional-negocios.jpg',
      imageAlt: 'Profesional de negocios presentando datos y resultados',
      next: nodeNegocios,
    },
  ],
};
