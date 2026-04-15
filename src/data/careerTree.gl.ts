import type { QuestionNode, LeafNode } from '@/types';

// ─── LEAF NODES ─────────────────────────────────────────────────────────────

const leafMedicinaCuidados: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Medicina',
      description: 'Diagnosticas e tratas enfermidades para mellorar a saúde das persoas.',
      dayInLife: ['Explorar e examinar pacientes', 'Diagnosticar e prescribir tratamentos', 'Seguir a evolución de cada caso'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Enfermaría',
      description: 'Coidas directamente aos pacientes e coordinas os seus coidados día a día.',
      dayInLife: ['Administrar medicación e monitorizar constantes', 'Apoiar emocionalmente a pacientes e familias', 'Colaborar co equipo médico'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Odontoloxía',
      description: 'Coidas a saúde bucodental diagnosticando e tratando enfermidades de dentes, enxivas e boca.',
      dayInLife: ['Realizar revisións e diagnosticar problemas bucodentais', 'Tratar caries, realizar extraccións e ortodontia', 'Asesorar sobre hixiene oral e prevención'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Fisioterapia',
      description: 'Recuperas a mobilidade e o benestar físico mediante exercicio e técnicas manuais.',
      dayInLife: ['Avaliar a lesión ou limitación do paciente', 'Deseñar un plan de rehabilitación personalizado', 'Facer seguimento da evolución'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Terapia Ocupacional',
      description: 'Axudas a persoas con discapacidade a recuperar a súa autonomía na vida cotiá.',
      dayInLife: ['Avaliar as capacidades funcionais do paciente', 'Ensinar técnicas adaptadas para actividades diarias', 'Traballar con familias e coidadores'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafInvestigacionBiomedica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Farmacia',
      description: 'Desenvolves, analizas e dispenses medicamentos asegurando a súa seguridade e eficacia.',
      dayInLife: ['Investigar novos compostos activos no laboratorio', 'Asesorar sobre interaccións e dosificación', 'Controlar a calidade dos medicamentos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Biomedicina',
      description: 'Investigas os mecanismos das enfermidades para encontrar novas terapias.',
      dayInLife: ['Deseñar e levar a cabo experimentos', 'Analizar datos e publicar achados', 'Colaborar con equipos médicos en proxectos clínicos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Saúde Pública',
      description: 'Proteges e melloras a saúde de toda unha comunidade ou poboación.',
      dayInLife: ['Analizar datos epidemiolóxicos', 'Deseñar campañas de prevención', 'Asesorar a organismos sobre políticas sanitarias'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafSaludFisicaPreventiva: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Ciencias do Deporte (CAFYD)',
      description: 'Aplicas o coñecemento científico do movemento humano para mellorar o rendemento deportivo e a saúde.',
      dayInLife: ['Deseñar programas de adestramento personalizados', 'Analizar o rendemento físico con tecnoloxía', 'Traballar con deportistas ou en programas de saúde comunitaria'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Nutrición e Dietética',
      description: 'Deseñas plans de alimentación para previr enfermidades e mellorar a saúde das persoas.',
      dayInLife: ['Avaliar o estado nutricional do paciente', 'Elaborar dietas adaptadas a cada caso clínico', 'Educar sobre hábitos alimentarios saudables'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Óptica e Optometría',
      description: 'Avalías a saúde visual e corrixes os defectos de visión con lentes e tratamentos ópticos.',
      dayInLife: ['Realizar exames visuais completos', 'Prescribir e adaptar gafas e lentillas', 'Detectar e derivar patoloxías oculares'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafSaludMental: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Psicoloxía',
      description: 'Avalías e acompañas a persoas para mellorar o seu benestar emocional e mental.',
      dayInLife: ['Realizar sesións terapéuticas individuais ou en grupo', 'Aplicar test e avaliacións psicolóxicas', 'Deseñar plans de intervención'],
      bachillerato: ['ciencias', 'sociales'],
    },
    {
      name: 'Traballo Social',
      description: 'Axudas a persoas e familias en situación de vulnerabilidade a acceder a recursos e apoio.',
      dayInLife: ['Entrevistar e valorar situacións familiares ou sociais', 'Conectar as persoas con servizos de apoio', 'Coordinar con servizos sociais e ONG'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Loxopedia',
      description: 'Diagnosticas e tratas os trastornos da linguaxe, a voz e a comunicación.',
      dayInLife: ['Avaliar a fala e a linguaxe dos pacientes', 'Deseñar exercicios de rehabilitación comunicativa', 'Traballar con nenos con dificultades de aprendizaxe'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafEducacion: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Maxisterio (Educación Infantil / Primaria)',
      description: 'Ensinas e acompañas o desenvolvemento integral de nenos nos seus primeiros anos de formación.',
      dayInLife: ['Preparar e impartir clases adaptadas a cada idade', 'Observar e estimular o desenvolvemento de cada alumno/a', 'Comunicarse con familias e equipo docente'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Pedagoxía',
      description: 'Deseñas e avalías procesos educativos para mellorar como aprenden as persoas.',
      dayInLife: ['Analizar necesidades educativas dun grupo ou institución', 'Deseñar programas e materiais de formación', 'Avaliar o impacto das intervencións educativas'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Psicopedagoxía',
      description: 'Orientas a estudantes con dificultades de aprendizaxe e apoias a equipos docentes.',
      dayInLife: ['Avaliar as dificultades de aprendizaxe', 'Deseñar plans de apoio individualizados', 'Asesorar a docentes e familias'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Educación Social',
      description: 'Acompañas a persoas en risco de exclusión para favorecer a súa integración e desenvolvemento social.',
      dayInLife: ['Deseñar programas socioeducativos en barrios ou institucións', 'Traballar con mozos, persoas maiores ou colectivos vulnerables', 'Coordinar con servizos sociais e entidades do terceiro sector'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafBellasArtes: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Belas Artes',
      description: 'Creas obras artísticas con pintura, escultura, gravado e outros medios expresivos.',
      dayInLife: ['Desenvolver proxectos artísticos propios', 'Investigar técnicas e materiais', 'Expor obras en galerías ou museos'],
      bachillerato: ['artes'],
    },
    {
      name: 'Deseño de Moda',
      description: 'Creas prendas e coleccións unindo estética, tendencias e funcionalidade.',
      dayInLife: ['Deseñar bosquexos e patróns de prendas', 'Seleccionar tecidos e materiais', 'Presentar coleccións a clientes ou en pasarelas'],
      bachillerato: ['artes'],
    },
    {
      name: 'Conservación e Restauración',
      description: 'Recuperas e preservas obras de arte e patrimonio histórico para as xeracións futuras.',
      dayInLife: ['Analizar o estado de deterioración dunha obra', 'Aplicar técnicas de limpeza e consolidación', 'Documentar cada intervención para o rexistro histórico'],
      bachillerato: ['artes'],
    },
  ],
};

const leafDisenoDigital: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Deseño Gráfico',
      description: 'Comunicas mensaxes visualmente mediante imaxes, tipografía e composición.',
      dayInLife: ['Crear identidades visuais e logotipos', 'Deseñar pezas para campañas ou publicacións', 'Traballar con equipos de márketing ou axencias'],
      bachillerato: ['artes', 'tecnologico'],
    },
    {
      name: 'Deseño UX/UI',
      description: 'Deseñas experiencias dixitais intuitivas e atractivas para apps e webs.',
      dayInLife: ['Estudar o comportamento dos usuarios', 'Crear prototipos e interfaces interactivas', 'Iterar o deseño con base en probas reais'],
      bachillerato: ['tecnologico', 'artes'],
    },
    {
      name: 'Animación 3D e Efectos Visuais',
      description: 'Creas personaxes, mundos e efectos visuais para cinema, videoxogos ou publicidade.',
      dayInLife: ['Modelar e animar obxectos en software 3D', 'Crear secuencias de efectos visuais', 'Colaborar en producións audiovisuais'],
      bachillerato: ['artes', 'tecnologico'],
    },
  ],
};

const leafArtesEscenicas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Interpretación Musical (Conservatorio)',
      description: 'Dominas un instrumento ou a voz para actuar en formacións musicais.',
      dayInLife: ['Practicar e perfeccionar o teu instrumento', 'Ensaiar con orquestras, grupos ou de forma solista', 'Actuar en concertos e festivais'],
      bachillerato: ['artes'],
    },
    {
      name: 'Arte Dramático / Teatro',
      description: 'Interpretas personaxes en obras de teatro, cinema ou televisión.',
      dayInLife: ['Estudar e preparar personaxes', 'Ensaiar co director e o elenco', 'Actuar ante o público ou a cámara'],
      bachillerato: ['artes'],
    },
    {
      name: 'Danza',
      description: 'Exprésaste e comunícas a través do movemento corporal en escenarios.',
      dayInLife: ['Adestrar técnica de danza diariamente', 'Aprender coreografías e desenvolver as propias', 'Actuar en compañías ou producións'],
      bachillerato: ['artes'],
    },
  ],
};

const leafComunicacion: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Xornalismo',
      description: 'Investigas e contas a realidade a través de novas, reportaxes e entrevistas.',
      dayInLife: ['Investigar temas de actualidade e contrastar fontes', 'Redactar, gravar ou editar pezas informativas', 'Publicar en medios dixitais, radio ou televisión'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Comunicación Audiovisual',
      description: 'Produces e dirixes contidos para cinema, televisión, streaming e redes sociais.',
      dayInLife: ['Escribir guións e planificar rodaxes', 'Dirixir ou editar vídeos e podcasts', 'Xestionar canles e analizar audiencias'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Publicidade e Relacións Públicas',
      description: 'Constrúes a imaxe de marcas e conectas co público a través de campañas.',
      dayInLife: ['Deseñar estratexias de comunicación para clientes', 'Crear mensaxes e pezas creativas', 'Xestionar a reputación e a presenza nos medios'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafCienciasVida: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Bioloxía',
      description: 'Estudas os seres vivos: a súa orixe, funcionamento e relacións nos ecosistemas.',
      dayInLife: ['Realizar mostraxes no campo ou experimentos no laboratorio', 'Analizar datos e publicar investigacións', 'Asesorar sobre conservación ou medio ambiente'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Veterinaria',
      description: 'Coidas a saúde de animais domésticos, de produción e en perigo de extinción.',
      dayInLife: ['Examinar e tratar animais enfermos', 'Realizar cirurxías e controis de saúde', 'Asesorar a gandeiros ou traballar en parques naturais'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ciencias Ambientais',
      description: 'Analizas e propós solucións aos problemas medioambientais.',
      dayInLife: ['Realizar estudos de impacto ambiental', 'Propor plans de xestión de residuos ou conservación', 'Asesorar a empresas e administracións públicas'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ciencias do Mar',
      description: 'Investigas os océanos, a súa biodiversidade e os procesos que regulan o clima e os ecosistemas mariños.',
      dayInLife: ['Tomar mostras e datos en expedicións mariñas', 'Analizar o impacto humano nos ecosistemas costeiros', 'Asesorar sobre xestión sostible dos recursos pesqueiros'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafBiotecnologia: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Biotecnoloxía',
      description: 'Usas organismos vivos e ferramentas moleculares para crear produtos e solucións.',
      dayInLife: ['Deseñar e executar experimentos con cultivos celulares', 'Desenvolver medicamentos ou cultivos mellorados', 'Analizar datos xenéticos con bioinformática'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Xenética',
      description: 'Estudas a herdanza e a variación xenética para entender enfermidades e evolución.',
      dayInLife: ['Secuenciar e analizar xenomas', 'Investigar mutacións ligadas a enfermidades', 'Desenvolver terapias xénicas ou probas diagnósticas'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Bioquímica',
      description: 'Investigas os procesos químicos que ocorren nos seres vivos a escala molecular.',
      dayInLife: ['Purificar e analizar proteínas ou encimas', 'Deseñar fármacos baseados en estruturas moleculares', 'Publicar investigacións en revistas científicas'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafFisicaMatematicas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Física',
      description: 'Investigas as leis fundamentais que rexen o universo, dende partículas ata galaxias.',
      dayInLife: ['Deseñar experimentos e analizar resultados', 'Modelar fenómenos con ecuacións matemáticas', 'Colaborar en grandes proxectos científicos internacionais'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Astrofísica / Astronomía',
      description: 'Estudas estrelas, galaxias e a orixe do universo.',
      dayInLife: ['Observar o ceo con telescopios ou satélites', 'Analizar datos de misións espaciais', 'Publicar descubrimentos sobre o cosmos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Matemáticas',
      description: 'Desenvolves teorías, modelos e algoritmos para resolver problemas abstractos e reais.',
      dayInLife: ['Demostrar teoremas e desenvolver nova teoría', 'Modelar fenómenos en física, economía ou bioloxía', 'Colaborar con industria ou centros de investigación'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafQuimica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Química',
      description: 'Estudas a composición e transformación da materia para crear novos materiais e procesos.',
      dayInLife: ['Sintetizar e caracterizar compostos no laboratorio', 'Analizar mostras con técnicas instrumentais', 'Investigar para a industria ou a academia'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Enxeñería Química',
      description: 'Deseñas procesos industriais para transformar materias primas en produtos útiles.',
      dayInLife: ['Deseñar reactores e plantas de produción', 'Optimizar procesos para reducir custos e emisións', 'Supervisar a seguridade en instalacións industriais'],
      bachillerato: ['ciencias', 'tecnologico'],
    },
    {
      name: 'Ciencia dos Materiais',
      description: 'Desenvolves novos materiais con propiedades específicas para aplicacións tecnolóxicas.',
      dayInLife: ['Sintetizar e probar novos polímeros, aliaxes ou nanomateriais', 'Caracterizar propiedades mecánicas e térmicas', 'Colaborar con industrias aeroespacial, médica ou enerxética'],
      bachillerato: ['ciencias', 'tecnologico'],
    },
  ],
};

const leafSoftware: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Enxeñería Informática',
      description: 'Deseñas e constrúes sistemas de software que resolven problemas reais.',
      dayInLife: ['Programar e revisar código en equipo', 'Deseñar arquitecturas de aplicacións', 'Resolver bugs e lanzar novas funcionalidades'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Desenvolvemento de Videoxogos',
      description: 'Creas mundos interactivos combinando programación, arte e narrativa.',
      dayInLife: ['Programar mecánicas e sistemas de xogo', 'Integrar arte, música e narrativa no motor gráfico', 'Testar e pulir a experiencia do xogador'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Ciberseguridade',
      description: 'Proteges sistemas e datos de ameazas dixitais e ataques informáticos.',
      dayInLife: ['Analizar vulnerabilidades en sistemas e redes', 'Deseñar defensas e protocolos de seguridade', 'Responder a incidentes e brechas de seguridade'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafIADatos: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Data Science / Ciencia de Datos',
      description: 'Extraes coñecemento útil de grandes volumes de datos para tomar mellores decisións.',
      dayInLife: ['Recompilar, limpar e explorar conxuntos de datos', 'Aplicar modelos estatísticos e de machine learning', 'Presentar insights en visualizacións e dashboards'],
      bachillerato: ['tecnologico', 'ciencias'],
    },
    {
      name: 'Intelixencia Artificial',
      description: 'Desenvolves sistemas capaces de aprender e tomar decisións de forma autónoma.',
      dayInLife: ['Deseñar e adestrar modelos de deep learning', 'Investigar novas arquitecturas de redes neuronais', 'Aplicar IA a problemas reais en saúde, industria ou ciencia'],
      bachillerato: ['tecnologico', 'ciencias'],
    },
    {
      name: 'Estatística',
      description: 'Deseñas estudos e analizas datos para extraer conclusións válidas en calquera campo.',
      dayInLife: ['Deseñar experimentos e enquisas', 'Aplicar modelos estatísticos complexos', 'Asesorar a investigadores e empresas sobre os seus datos'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafIngenieriaEstructuras: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Enxeñería Civil',
      description: 'Deseñas e constrúes infraestruturas: pontes, estradas, presas e edificios.',
      dayInLife: ['Calcular estruturas e materiais necesarios', 'Supervisar obras no campo', 'Colaborar con arquitectos e administracións públicas'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Arquitectura',
      description: 'Deseñas espazos habitables que combinan funcionalidade, estética e sostibilidade.',
      dayInLife: ['Deseñar planos e maquetas de edificios', 'Supervisar a construción na obra', 'Reunirse con clientes para entender as súas necesidades'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Enxeñería de Camiños',
      description: 'Planificas e executa grandes proxectos de infraestrutura para conectar cidades e territorios.',
      dayInLife: ['Proxectar estradas, ferrocarrís ou portos', 'Xestionar contratos e orzamentos de obra', 'Analizar o impacto ambiental dos proxectos'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafIngenieriaAplicada: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Enxeñería Mecánica',
      description: 'Deseñas e fabricas máquinas, motores e sistemas mecánicos.',
      dayInLife: ['Deseñar pezas con software CAD', 'Simular e probar o comportamento de sistemas', 'Supervisar a fabricación e o control de calidade'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Enxeñería Electrónica',
      description: 'Deseñas circuítos, dispositivos e sistemas electrónicos.',
      dayInLife: ['Deseñar e prototipizar placas de circuíto', 'Programar microcontroladores e sistemas embebidos', 'Integrar electrónica en produtos de consumo ou industria'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Robótica e Enxeñería de Telecomunicacións',
      description: 'Desenvolves robots autónomos e sistemas de comunicación que conectan o mundo.',
      dayInLife: ['Deseñar robots industriais ou de servizo', 'Planificar redes de comunicación 5G ou satelital', 'Integrar sensores e intelixencia artificial en sistemas físicos'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Enxeñería Aeroespacial',
      description: 'Deseñas aeronaves, satélites e sistemas de propulsión para a aviación e a exploración espacial.',
      dayInLife: ['Calcular estruturas e sistemas de voo', 'Deseñar e probar compoñentes en simuladores ou túneles de vento', 'Colaborar en proxectos aeroespaciais internacionais'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafHistoriaFilosofia: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Historia',
      description: 'Investigas o pasado para comprender o presente e orientar o futuro.',
      dayInLife: ['Estudar fontes primarias e arquivos históricos', 'Redactar artigos, libros ou informes', 'Ensinar ou asesorar a museos e institucións culturais'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Filosofía',
      description: 'Reflexionas sobre o coñecemento, a ética, a existencia e as grandes preguntas humanas.',
      dayInLife: ['Ler, analizar e escribir sobre ideas filosóficas', 'Debater en seminarios e congresos', 'Ensinar ou asesorar en ética empresarial ou bioética'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Arqueoloxía / Historia da Arte',
      description: 'Descubres e analizas o patrimonio material e artístico das civilizacións.',
      dayInLife: ['Participar en escavacións arqueolóxicas', 'Analizar e catalogar pezas en museos', 'Redactar informes e publicar descubrimentos'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafLenguas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Filoloxía',
      description: 'Estudas a linguaxe, a literatura e a evolución das linguas en profundidade.',
      dayInLife: ['Analizar textos literarios e lingüísticos', 'Investigar a evolución da linguaxe', 'Ensinar en universidades ou institutos de idiomas'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Tradución e Interpretación',
      description: 'Transmites coñecementos, ideas e culturas entre idiomas distintos.',
      dayInLife: ['Traducir documentos, libros ou contido web', 'Interpretar en conferencias internacionais', 'Xestionar proxectos de localización para empresas globais'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Lingüística',
      description: 'Estudas cientificamente a estrutura, o uso e a evolución das linguaxes humanas.',
      dayInLife: ['Analizar patróns fonéticos, gramaticais ou semánticos', 'Traballar en tecnoloxías de procesamento da linguaxe natural', 'Investigar linguas en perigo de extinción'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafDerechoPolitica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Dereito',
      description: 'Interpretas e aplicas as leis para defender dereitos e resolver conflitos.',
      dayInLife: ['Asesorar a clientes sobre os seus dereitos', 'Preparar e defender casos ante tribunais', 'Redactar contratos, demandas e recursos legais'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Ciencias Políticas',
      description: 'Analizas sistemas políticos, partidos, eleccións e políticas públicas.',
      dayInLife: ['Investigar o comportamento electoral e os sistemas de goberno', 'Asesorar a partidos, gobernos ou organizacións internacionais', 'Deseñar e implementar políticas públicas'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Relacións Internacionais',
      description: 'Traballas en diplomacia, cooperación e análise dos asuntos globais.',
      dayInLife: ['Negociar acordos entre países ou organismos internacionais', 'Analizar conflitos e situacións xeopolíticas', 'Traballar en ONG, embaixadas ou organismos como a ONU'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Criminoloxía',
      description: 'Estudas o crime, as súas causas e consecuencias para deseñar políticas de prevención e seguridade.',
      dayInLife: ['Analizar patróns delituosos e perfís criminais', 'Colaborar con forzas de seguridade e xulgados', 'Propor políticas de reinserción e prevención do delito'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafCienciasSociales: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Socioloxía',
      description: 'Estudas a estrutura e os cambios das sociedades para entender o comportamento colectivo.',
      dayInLife: ['Deseñar enquisas e analizar datos sociais', 'Investigar fenómenos como a desigualdade, a migración ou a identidade', 'Publicar estudos ou asesorar a gobernos e ONG'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Antropoloxía',
      description: 'Investigas a diversidade cultural e o comportamento humano ao longo do tempo.',
      dayInLife: ['Realizar traballo de campo en comunidades', 'Analizar rituais, costumes e estruturas sociais', 'Publicar etnografías e asesorar sobre diversidade cultural'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Xeografía Humana',
      description: 'Estudas como o espazo e o territorio inflúen nas sociedades e a economía.',
      dayInLife: ['Analizar datos de poboación e territorio con SIX', 'Investigar planificación urbana ou migracións', 'Asesorar a administracións en desenvolvemento rexional'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafEmpresa: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Administración e Dirección de Empresas (ADE)',
      description: 'Xestionas e dirixes organizacións para maximizar o seu rendemento e sostibilidade.',
      dayInLife: ['Analizar resultados e tomar decisións estratéxicas', 'Liderar equipos e coordinar departamentos', 'Desenvolver plans de negocio e negociar con socios'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Márketing e Comunicación',
      description: 'Conectas marcas cos seus públicos a través de estratexias creativas e datos.',
      dayInLife: ['Deseñar e lanzar campañas de márketing dixital', 'Analizar métricas de rendemento', 'Xestionar a presenza da marca nas redes sociais'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Recursos Humanos',
      description: 'Xestionas o talento dunha organización e coidas o benestar das persoas.',
      dayInLife: ['Seleccionar e incorporar novos perfís', 'Deseñar plans de formación e desenvolvemento', 'Xestionar conflitos e o clima organizacional'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafEconomiaFinanzas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Economía',
      description: 'Analizas o comportamento de mercados, países e axentes económicos para tomar mellores decisións.',
      dayInLife: ['Modelar a economía con datos e ecuacións', 'Asesorar a gobernos ou empresas sobre políticas económicas', 'Publicar estudos sobre inflación, emprego ou comercio'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Finanzas e Investimento',
      description: 'Xestionas carteiras de investimento e avalías a viabilidade financeira de proxectos.',
      dayInLife: ['Analizar estados financeiros e mercados bursátiles', 'Deseñar estratexias de investimento', 'Asesorar a empresas en fusións, adquisicións ou financiamento'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Actuaria e Matemáticas Financeiras',
      description: 'Calculas e xestionas riscos económicos para aseguradoras, bancos e fondos.',
      dayInLife: ['Modelar probabilidades de risco con matemáticas avanzadas', 'Deseñar produtos de seguros ou pensións', 'Asesorar sobre solvencia e regulación financeira'],
      bachillerato: ['ciencias', 'sociales'],
    },
  ],
};

const leafTurismo: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Turismo',
      description: 'Planificas, xestionas e promocionas destinos e produtos turísticos a nivel nacional e internacional.',
      dayInLife: ['Deseñar paquetes turísticos e xestionar axencias de viaxe', 'Analizar tendencias do mercado turístico', 'Traballar en destinos turísticos, aeroportos ou organismos de promoción'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Dirección Hoteleira',
      description: 'Xestionas establecementos de aloxamento e hostalería asegurando a excelencia na experiencia do hóspede.',
      dayInLife: ['Supervisar os departamentos do hotel (recepción, restauración, andares)', 'Xestionar o revenue e as reservas', 'Liderar equipos e garantir a satisfacción do cliente'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Gastronomía e Artes Culinarias',
      description: 'Creas e xestionas experiencias gastronómicas combinando técnica culinaria, creatividade e cultura.',
      dayInLife: ['Deseñar menús e desenvolver novas receitas', 'Xestionar cociñas de restaurantes ou empresas de catering', 'Investigar técnicas culinarias innovadoras e tendencias gastronómicas'],
      bachillerato: ['sociales', 'artes'],
    },
  ],
};

// ─── LEVEL 3 QUESTION NODES ──────────────────────────────────────────────────

const nodeSaludFisicaDetalle: QuestionNode = {
  type: 'question',
  question: 'Que aspecto da saúde física te imaxinas traballando?',
  options: [
    {
      label: 'Tratar directamente aos pacientes',
      imageUrl: '/images/sanitaria-paciente.jpg',
      imageAlt: 'Médica revisando a un paciente con amabilidade',
      next: leafMedicinaCuidados,
    },
    {
      label: 'Investigar enfermidades e desenvolver tratamentos',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Científica investigando nun laboratorio biomédico',
      next: leafInvestigacionBiomedica,
    },
    {
      label: 'Deporte, nutrición e benestar físico preventivo',
      imageUrl: '/images/entrenadora-deporte.jpg',
      imageAlt: 'Preparadora física adestrando con deportistas en instalación deportiva',
      next: leafSaludFisicaPreventiva,
    },
  ],
};

const nodeArteVisualDetalle: QuestionNode = {
  type: 'question',
  question: 'Que tipo de creación visual che atrae máis?',
  options: [
    {
      label: 'Arte clásica: pintura, escultura, patrimonio',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista pintando no seu estudio con cores vibrantes',
      next: leafBellasArtes,
    },
    {
      label: 'Deseño dixital: gráfico, UX, animación',
      imageUrl: '/images/disenadora-digital.jpg',
      imageAlt: 'Deseñadora creando unha interface dixital en pantalla',
      next: leafDisenoDigital,
    },
  ],
};

const nodeSoftwareDetalle: QuestionNode = {
  type: 'question',
  question: 'Que tipo de mundo dixital che apaixona máis?',
  options: [
    {
      label: 'Crear apps, webs, videoxogos e sistemas seguros',
      imageUrl: '/images/desarrolladora-codigo.jpg',
      imageAlt: 'Desenvolvedora programando con múltiples pantallas de código',
      next: leafSoftware,
    },
    {
      label: 'Intelixencia artificial, datos e algoritmos',
      imageUrl: '/images/visualizacion-ia.jpg',
      imageAlt: 'Pantallas con visualizacións de datos e modelos de IA',
      next: leafIADatos,
    },
  ],
};

const nodeIngFisicaDetalle: QuestionNode = {
  type: 'question',
  question: 'Que tipo de construción te imaxinas facendo?',
  options: [
    {
      label: 'Edificios, pontes, infraestruturas e cidades',
      imageUrl: '/images/arquitecta-planos.jpg',
      imageAlt: 'Arquitecta revisando planos dunha gran estrutura',
      next: leafIngenieriaEstructuras,
    },
    {
      label: 'Máquinas, robots, electrónica e telecomunicacións',
      imageUrl: '/images/ingeniera-robot.jpg',
      imageAlt: 'Enxeñeira traballando cun robot e compoñentes electrónicos',
      next: leafIngenieriaAplicada,
    },
  ],
};

const nodeNaturalezaViviente: QuestionNode = {
  type: 'question',
  question: 'Que mundo vivo che interesa máis explorar?',
  options: [
    {
      label: 'Ecosistemas, animais e medio ambiente',
      imageUrl: '/images/biologa-bosque.jpg',
      imageAlt: 'Biolóxica tomando mostras nun bosque exuberante',
      next: leafCienciasVida,
    },
    {
      label: 'Xenética, biotecnoloxía e vida a escala molecular',
      imageUrl: '/images/cientifica-genetica.jpg',
      imageAlt: 'Científica traballando con mostras xenéticas no laboratorio',
      next: leafBiotecnologia,
    },
  ],
};

const nodeNaturalezaFisica: QuestionNode = {
  type: 'question',
  question: 'Que fenómenos do universo inorgánico che fascinan?',
  options: [
    {
      label: 'Física, matemáticas e o cosmos',
      imageUrl: '/images/observatorio-telescopio.jpg',
      imageAlt: 'Observatorio con telescopio apuntando ao ceo estrelado',
      next: leafFisicaMatematicas,
    },
    {
      label: 'Química, materiais e transformación da materia',
      imageUrl: '/images/quimica-laboratorio.jpg',
      imageAlt: 'Química experimentando con compostos no laboratorio',
      next: leafQuimica,
    },
  ],
};

const nodeHistoriaOLenguas: QuestionNode = {
  type: 'question',
  question: 'Que dimensión da cultura humana che atrae máis?',
  options: [
    {
      label: 'O pasado: historia, filosofía e patrimonio',
      imageUrl: '/images/investigadora-libros.jpg',
      imageAlt: 'Investigadora rodeada de libros históricos nunha biblioteca',
      next: leafHistoriaFilosofia,
    },
    {
      label: 'As linguas, os idiomas e a comunicación intercultural',
      imageUrl: '/images/traductora-idiomas.jpg',
      imageAlt: 'Traductora traballando con textos de diferentes idiomas',
      next: leafLenguas,
    },
  ],
};

// ─── LEVEL 2 QUESTION NODES ──────────────────────────────────────────────────

const nodeCuidar: QuestionNode = {
  type: 'question',
  question: 'Como te imaxinas axudando ás persoas?',
  options: [
    {
      label: 'Coidando a súa saúde e benestar físico',
      imageUrl: '/images/medica-paciente.jpg',
      imageAlt: 'Médica con bata branca acompañando a unha paciente',
      next: nodeSaludFisicaDetalle,
    },
    {
      label: 'Apoiando o seu benestar emocional e mental',
      imageUrl: '/images/psicologa-consulta.jpg',
      imageAlt: 'Psicóloga escoitando atentamente a unha persoa en consulta',
      next: leafSaludMental,
    },
    {
      label: 'Ensinando e educando',
      imageUrl: '/images/profesora-clase.jpg',
      imageAlt: 'Profesora entusiasta explicando a estudantes na clase',
      next: leafEducacion,
    },
  ],
};

const nodeCrear: QuestionNode = {
  type: 'question',
  question: 'Que tipo de creación che emociona máis?',
  options: [
    {
      label: 'Arte visual e deseño',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista creando unha obra no seu estudio cheo de cor',
      next: nodeArteVisualDetalle,
    },
    {
      label: 'Música, teatro ou danza',
      imageUrl: '/images/actuacion-escenario.jpg',
      imageAlt: 'Actuación no escenario con luces dramáticas',
      next: leafArtesEscenicas,
    },
    {
      label: 'Contar historias e comunicar ao mundo',
      imageUrl: '/images/periodista-camara.jpg',
      imageAlt: 'Xornalista gravando unha reportaxe cunha cámara profesional',
      next: leafComunicacion,
    },
  ],
};

const nodeNaturaleza: QuestionNode = {
  type: 'question',
  question: 'Que parte do mundo natural che fascina máis?',
  options: [
    {
      label: 'Os seres vivos: animais, plantas e células',
      imageUrl: '/images/biologa-bosque.jpg',
      imageAlt: 'Biolóxica tomando mostras nun bosque exuberante',
      next: nodeNaturalezaViviente,
    },
    {
      label: 'A materia, a enerxía e o cosmos',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Investigadora no laboratorio con equipo científico de precisión',
      next: nodeNaturalezaFisica,
    },
  ],
};

const nodeConstruir: QuestionNode = {
  type: 'question',
  question: 'Que tipo de construción che atrae máis?',
  options: [
    {
      label: 'Software, apps e intelixencia artificial',
      imageUrl: '/images/desarrolladora-codigo.jpg',
      imageAlt: 'Desenvolvedora programando con múltiples pantallas de código',
      next: nodeSoftwareDetalle,
    },
    {
      label: 'Máquinas, estruturas e infraestruturas físicas',
      imageUrl: '/images/ingeniera-industrial.jpg',
      imageAlt: 'Enxeñeira supervisando unha gran instalación industrial',
      next: nodeIngFisicaDetalle,
    },
  ],
};

const nodeSociedad: QuestionNode = {
  type: 'question',
  question: 'Que aspecto da sociedade e a cultura che interesa máis?',
  options: [
    {
      label: 'A historia, a filosofía e as linguas',
      imageUrl: '/images/personas-debate.jpg',
      imageAlt: 'Persoas diversas debatendo ideas nun espazo académico',
      next: nodeHistoriaOLenguas,
    },
    {
      label: 'A xustiza, os dereitos e a política',
      imageUrl: '/images/abogada-documentos.jpg',
      imageAlt: 'Avogada lendo documentos legais nun despacho',
      next: leafDerechoPolitica,
    },
    {
      label: 'Entender e mellorar a sociedade',
      imageUrl: '/images/investigadora-social.jpg',
      imageAlt: 'Investigadora social entrevistando a persoas na comunidade',
      next: leafCienciasSociales,
    },
  ],
};

const nodeNegocios: QuestionNode = {
  type: 'question',
  question: 'Que tipo de traballo con datos e organizacións che atrae?',
  options: [
    {
      label: 'Crear e dirixir empresas ou proxectos',
      imageUrl: '/images/emprendedora-startup.jpg',
      imageAlt: 'Emprendedora presentando o seu proxecto a investidores nunha startup',
      next: leafEmpresa,
    },
    {
      label: 'Análise económica, finanzas e investimento',
      imageUrl: '/images/analista-financiera.jpg',
      imageAlt: 'Analista financeira revisando gráficos e datos económicos',
      next: leafEconomiaFinanzas,
    },
    {
      label: 'Turismo, hostalería e experiencias',
      imageUrl: '/images/turismo-viajeros.jpg',
      imageAlt: 'Profesional de turismo atendendo viaxeiros nun destino internacional',
      next: leafTurismo,
    },
  ],
};

// ─── ROOT NODE ───────────────────────────────────────────────────────────────

export const careerTree: QuestionNode = {
  type: 'question',
  question: 'Cal destas situacións te imaxinas no teu futuro?',
  subtitle: 'Escolle a imaxe que máis che chame a atención',
  options: [
    {
      label: 'Coidar e axudar ás persoas',
      imageUrl: '/images/sanitaria-paciente.jpg',
      imageAlt: 'Profesional sanitaria sorrindo cunha paciente maior',
      next: nodeCuidar,
    },
    {
      label: 'Crear e deseñar cousas novas',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista creando unha obra orixinal no seu estudio',
      next: nodeCrear,
    },
    {
      label: 'Entender como funciona o mundo natural',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Científica investigando cun microscopio no laboratorio',
      next: nodeNaturaleza,
    },
    {
      label: 'Construír e facer funcionar as cousas',
      imageUrl: '/images/tecnologia-componentes.jpg',
      imageAlt: 'Enxeñeira analizando compoñentes de tecnoloxía avanzada',
      next: nodeConstruir,
    },
    {
      label: 'Comprender a sociedade e a cultura',
      imageUrl: '/images/personas-debate.jpg',
      imageAlt: 'Persoas diversas colaborando e debatendo ideas',
      next: nodeSociedad,
    },
    {
      label: 'Liderar, emprender e traballar con datos',
      imageUrl: '/images/profesional-negocios.jpg',
      imageAlt: 'Profesional de negocios presentando datos e resultados',
      next: nodeNegocios,
    },
  ],
};
