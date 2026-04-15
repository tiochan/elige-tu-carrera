import type { QuestionNode, LeafNode } from '@/types';

// ─── LEAF NODES ─────────────────────────────────────────────────────────────

const leafMedicinaCuidados: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Medicina',
      description: 'Diagnòstiques i tractes malalties per millorar la salut de les persones.',
      dayInLife: ['Explorar i examinar pacients', 'Diagnosticar i prescriure tractaments', 'Seguir l\'evolució de cada cas'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Infermeria',
      description: 'Cuides directament els pacients i coordines les seves cures dia a dia.',
      dayInLife: ['Administrar medicació i monitoritzar constants', 'Donar suport emocional a pacients i famílies', 'Col·laborar amb l\'equip mèdic'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Odontologia',
      description: 'Cuides la salut bucodental diagnosticant i tractant malalties de dents, genives i boca.',
      dayInLife: ['Fer revisions i diagnosticar problemes bucodentals', 'Tractar càries, fer extraccions i ortodòncia', 'Assessorar sobre higiene oral i prevenció'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Fisioteràpia',
      description: 'Recuperes la mobilitat i el benestar físic mitjançant exercici i tècniques manuals.',
      dayInLife: ['Avaluar la lesió o limitació del pacient', 'Dissenyar un pla de rehabilitació personalitzat', 'Fer seguiment de l\'evolució'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Teràpia Ocupacional',
      description: 'Ajudes persones amb discapacitat a recuperar la seva autonomia en la vida quotidiana.',
      dayInLife: ['Avaluar les capacitats funcionals del pacient', 'Ensenyar tècniques adaptades per a activitats diàries', 'Treballar amb famílies i cuidadors'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafInvestigacionBiomedica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Farmàcia',
      description: 'Desenvolupes, analitzes i dispenses medicaments assegurant la seva seguretat i eficàcia.',
      dayInLife: ['Investigar nous compostos actius al laboratori', 'Assessorar sobre interaccions i dosificació', 'Controlar la qualitat dels medicaments'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Biomedicina',
      description: 'Investigues els mecanismes de les malalties per trobar noves teràpies.',
      dayInLife: ['Dissenyar i dur a terme experiments', 'Analitzar dades i publicar descobriments', 'Col·laborar amb equips mèdics en projectes clínics'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Salut Pública',
      description: 'Protegeixes i millores la salut de tota una comunitat o població.',
      dayInLife: ['Analitzar dades epidemiològiques', 'Dissenyar campanyes de prevenció', 'Assessorar organismes sobre polítiques sanitàries'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafSaludFisicaPreventiva: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Ciències de l\'Esport (CAFYD)',
      description: 'Apliques el coneixement científic del moviment humà per millorar el rendiment esportiu i la salut.',
      dayInLife: ['Dissenyar programes d\'entrenament personalitzats', 'Analitzar el rendiment físic amb tecnologia', 'Treballar amb esportistes o en programes de salut comunitària'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Nutrició i Dietètica',
      description: 'Dissenyes plans d\'alimentació per prevenir malalties i millorar la salut de les persones.',
      dayInLife: ['Avaluar l\'estat nutricional del pacient', 'Elaborar dietes adaptades a cada cas clínic', 'Educar sobre hàbits alimentaris saludables'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Òptica i Optometria',
      description: 'Avalues la salut visual i corriges els defectes de visió amb lents i tractaments òptics.',
      dayInLife: ['Realitzar exàmens visuals complets', 'Prescriure i adaptar ulleres i lentilles', 'Detectar i derivar patologies oculars'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafSaludMental: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Psicologia',
      description: 'Avalues i acompanyes persones per millorar el seu benestar emocional i mental.',
      dayInLife: ['Realitzar sessions terapèutiques individuals o en grup', 'Aplicar tests i avaluacions psicològiques', 'Dissenyar plans d\'intervenció'],
      bachillerato: ['ciencias', 'sociales'],
    },
    {
      name: 'Treball Social',
      description: 'Ajudes persones i famílies en situació de vulnerabilitat a accedir a recursos i suport.',
      dayInLife: ['Entrevistar i valorar situacions familiars o socials', 'Connectar les persones amb serveis de suport', 'Coordinar amb serveis socials i ONG'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Logopèdia',
      description: 'Diagnòstiques i tractes els trastorns del llenguatge, la veu i la comunicació.',
      dayInLife: ['Avaluar la parla i el llenguatge dels pacients', 'Dissenyar exercicis de rehabilitació comunicativa', 'Treballar amb nens amb dificultats d\'aprenentatge'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafEducacion: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Magisteri (Educació Infantil / Primària)',
      description: 'Ensenyes i acompanyes el desenvolupament integral de nens en els seus primers anys de formació.',
      dayInLife: ['Preparar i impartir classes adaptades a cada edat', 'Observar i estimular el desenvolupament de cada alumne/a', 'Comunicar-se amb les famílies i l\'equip docent'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Pedagogia',
      description: 'Dissenyes i avalues processos educatius per millorar com aprenen les persones.',
      dayInLife: ['Analitzar necessitats educatives d\'un grup o institució', 'Dissenyar programes i materials de formació', 'Avaluar l\'impacte de les intervencions educatives'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Psicopedagogia',
      description: 'Orientes estudiants amb dificultats d\'aprenentatge i dónes suport als equips docents.',
      dayInLife: ['Avaluar les dificultats d\'aprenentatge', 'Dissenyar plans de suport individualitzats', 'Assessorar docents i famílies'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Educació Social',
      description: 'Acompanyes persones en risc d\'exclusió per afavorir la seva integració i desenvolupament social.',
      dayInLife: ['Dissenyar programes socioeducatius en barris o institucions', 'Treballar amb joves, persones grans o col·lectius vulnerables', 'Coordinar amb serveis socials i entitats del tercer sector'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafBellasArtes: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Belles Arts',
      description: 'Crees obres artístiques amb pintura, escultura, gravat i altres mitjans expressius.',
      dayInLife: ['Desenvolupar projectes artístics propis', 'Investigar tècniques i materials', 'Exposar obres en galeries o museus'],
      bachillerato: ['artes'],
    },
    {
      name: 'Disseny de Moda',
      description: 'Crees peces i col·leccions unint estètica, tendències i funcionalitat.',
      dayInLife: ['Dissenyar esbossos i patrons de peces', 'Seleccionar teixits i materials', 'Presentar col·leccions a clients o en passarel·les'],
      bachillerato: ['artes'],
    },
    {
      name: 'Conservació i Restauració',
      description: 'Recuperes i preserves obres d\'art i patrimoni històric per a les generacions futures.',
      dayInLife: ['Analitzar l\'estat de deteriorament d\'una obra', 'Aplicar tècniques de neteja i consolidació', 'Documentar cada intervenció per al registre històric'],
      bachillerato: ['artes'],
    },
  ],
};

const leafDisenoDigital: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Disseny Gràfic',
      description: 'Comuniques missatges visualment mitjançant imatges, tipografia i composició.',
      dayInLife: ['Crear identitats visuals i logotips', 'Dissenyar peces per a campanyes o publicacions', 'Treballar amb equips de màrqueting o agències'],
      bachillerato: ['artes', 'tecnologico'],
    },
    {
      name: 'Disseny UX/UI',
      description: 'Dissenyes experiències digitals intuïtives i atractives per a apps i webs.',
      dayInLife: ['Estudiar el comportament dels usuaris', 'Crear prototips i interfícies interactives', 'Iterar el disseny amb base en proves reals'],
      bachillerato: ['tecnologico', 'artes'],
    },
    {
      name: 'Animació 3D i Efectes Visuals',
      description: 'Crees personatges, mons i efectes visuals per a cinema, videojocs o publicitat.',
      dayInLife: ['Modelar i animar objectes en programari 3D', 'Crear seqüències d\'efectes visuals', 'Col·laborar en produccions audiovisuals'],
      bachillerato: ['artes', 'tecnologico'],
    },
  ],
};

const leafArtesEscenicas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Interpretació Musical (Conservatori)',
      description: 'Domines un instrument o la veu per actuar en formacions musicals.',
      dayInLife: ['Practicar i perfeccionar el teu instrument', 'Assajar amb orquestres, grups o de forma solista', 'Actuar en concerts i festivals'],
      bachillerato: ['artes'],
    },
    {
      name: 'Art Dramàtic / Teatre',
      description: 'Interpretes personatges en obres de teatre, cinema o televisió.',
      dayInLife: ['Estudiar i preparar personatges', 'Assajar amb el director i l\'elenc', 'Actuar davant el públic o la càmera'],
      bachillerato: ['artes'],
    },
    {
      name: 'Dansa',
      description: 'T\'expresses i comuniques a través del moviment corporal en escenaris.',
      dayInLife: ['Entrenar tècnica de dansa diàriament', 'Aprendre coreografies i desenvolupar les pròpies', 'Actuar en companyies o produccions'],
      bachillerato: ['artes'],
    },
  ],
};

const leafComunicacion: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Periodisme',
      description: 'Investigues i expliques la realitat a través de notícies, reportatges i entrevistes.',
      dayInLife: ['Investigar temes d\'actualitat i contrastar fonts', 'Redactar, gravar o editar peces informatives', 'Publicar en mitjans digitals, ràdio o televisió'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Comunicació Audiovisual',
      description: 'Produeixes i dirigeixes continguts per a cinema, televisió, streaming i xarxes socials.',
      dayInLife: ['Escriure guions i planificar rodatges', 'Dirigir o editar vídeos i podcasts', 'Gestionar canals i analitzar audiències'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Publicitat i Relacions Públiques',
      description: 'Construeixes la imatge de marques i connectes amb el públic a través de campanyes.',
      dayInLife: ['Dissenyar estratègies de comunicació per a clients', 'Crear missatges i peces creatives', 'Gestionar la reputació i la presència als mitjans'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafCienciasVida: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Biologia',
      description: 'Estudies els éssers vius: el seu origen, funcionament i relacions en els ecosistemes.',
      dayInLife: ['Realitzar mostrejos al camp o experiments al laboratori', 'Analitzar dades i publicar investigacions', 'Assessorar sobre conservació o medi ambient'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Veterinària',
      description: 'Cuides la salut d\'animals domèstics, de producció i en perill d\'extinció.',
      dayInLife: ['Examinar i tractar animals malalts', 'Realitzar cirurgies i controls de salut', 'Assessorar ramaders o treballar en parcs naturals'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ciències Ambientals',
      description: 'Analitzes i proposes solucions als problemes mediambientals.',
      dayInLife: ['Realitzar estudis d\'impacte ambiental', 'Proposar plans de gestió de residus o conservació', 'Assessorar empreses i administracions públiques'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Ciències del Mar',
      description: 'Investigues els oceans, la seva biodiversitat i els processos que regulen el clima i els ecosistemes marins.',
      dayInLife: ['Prendre mostres i dades en expedicions marines', 'Analitzar l\'impacte humà en els ecosistemes costers', 'Assessorar sobre gestió sostenible dels recursos pesquers'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafBiotecnologia: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Biotecnologia',
      description: 'Uses organismes vius i eines moleculars per crear productes i solucions.',
      dayInLife: ['Dissenyar i executar experiments amb cultius cel·lulars', 'Desenvolupar medicaments o cultius millorats', 'Analitzar dades genètiques amb bioinformàtica'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Genètica',
      description: 'Estudies l\'herència i la variació genètica per entendre malalties i evolució.',
      dayInLife: ['Seqüenciar i analitzar genomes', 'Investigar mutacions lligades a malalties', 'Desenvolupar teràpies gèniques o proves diagnòstiques'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Bioquímica',
      description: 'Investigues els processos químics que ocorren en els éssers vius a escala molecular.',
      dayInLife: ['Purificar i analitzar proteïnes o enzims', 'Dissenyar fàrmacs basats en estructures moleculars', 'Publicar investigacions en revistes científiques'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafFisicaMatematicas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Física',
      description: 'Investigues les lleis fonamentals que regeixen l\'univers, des de partícules fins a galàxies.',
      dayInLife: ['Dissenyar experiments i analitzar resultats', 'Modelar fenòmens amb equacions matemàtiques', 'Col·laborar en grans projectes científics internacionals'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Astrofísica / Astronomia',
      description: 'Estudies estrelles, galàxies i l\'origen de l\'univers.',
      dayInLife: ['Observar el cel amb telescopis o satèl·lits', 'Analitzar dades de missions espacials', 'Publicar descobriments sobre el cosmos'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Matemàtiques',
      description: 'Desenvolups teories, models i algorismes per resoldre problemes abstractes i reals.',
      dayInLife: ['Demostrar teoremes i desenvolupar nova teoria', 'Modelar fenòmens en física, economia o biologia', 'Col·laborar amb la indústria o centres de recerca'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafQuimica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Química',
      description: 'Estudies la composició i transformació de la matèria per crear nous materials i processos.',
      dayInLife: ['Sintetitzar i caracteritzar compostos al laboratori', 'Analitzar mostres amb tècniques instrumentals', 'Investigar per a la indústria o l\'acadèmia'],
      bachillerato: ['ciencias'],
    },
    {
      name: 'Enginyeria Química',
      description: 'Dissenyes processos industrials per transformar matèries primeres en productes útils.',
      dayInLife: ['Dissenyar reactors i plantes de producció', 'Optimitzar processos per reduir costos i emissions', 'Supervisar la seguretat en instal·lacions industrials'],
      bachillerato: ['ciencias', 'tecnologico'],
    },
    {
      name: 'Ciència de Materials',
      description: 'Desenvolups nous materials amb propietats específiques per a aplicacions tecnològiques.',
      dayInLife: ['Sintetitzar i provar nous polímers, aliatges o nanomaterials', 'Caracteritzar propietats mecàniques i tèrmiques', 'Col·laborar amb indústries aeroespacial, mèdica o energètica'],
      bachillerato: ['ciencias', 'tecnologico'],
    },
  ],
};

const leafSoftware: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Enginyeria Informàtica',
      description: 'Dissenyes i construeixes sistemes de programari que resolen problemes reals.',
      dayInLife: ['Programar i revisar codi en equip', 'Dissenyar arquitectures d\'aplicacions', 'Resoldre bugs i llançar noves funcionalitats'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Desenvolupament de Videojocs',
      description: 'Crees mons interactius combinant programació, art i narrativa.',
      dayInLife: ['Programar mecàniques i sistemes de joc', 'Integrar art, música i narrativa en el motor gràfic', 'Testejar i polir l\'experiència del jugador'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Ciberseguretat',
      description: 'Protegeixes sistemes i dades d\'amenaces digitals i atacs informàtics.',
      dayInLife: ['Analitzar vulnerabilitats en sistemes i xarxes', 'Dissenyar defenses i protocols de seguretat', 'Respondre a incidents i bretxes de seguretat'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafIADatos: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Data Science / Ciència de Dades',
      description: 'Extreus coneixement útil de grans volums de dades per prendre millors decisions.',
      dayInLife: ['Recopilar, netejar i explorar conjunts de dades', 'Aplicar models estadístics i de machine learning', 'Presentar insights en visualitzacions i dashboards'],
      bachillerato: ['tecnologico', 'ciencias'],
    },
    {
      name: 'Intel·ligència Artificial',
      description: 'Desenvolups sistemes capaços d\'aprendre i prendre decisions de forma autònoma.',
      dayInLife: ['Dissenyar i entrenar models de deep learning', 'Investigar noves arquitectures de xarxes neuronals', 'Aplicar IA a problemes reals en salut, indústria o ciència'],
      bachillerato: ['tecnologico', 'ciencias'],
    },
    {
      name: 'Estadística',
      description: 'Dissenyes estudis i analitzes dades per extreure conclusions vàlides en qualsevol camp.',
      dayInLife: ['Dissenyar experiments i enquestes', 'Aplicar models estadístics complexos', 'Assessorar investigadors i empreses sobre les seves dades'],
      bachillerato: ['ciencias'],
    },
  ],
};

const leafIngenieriaEstructuras: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Enginyeria Civil',
      description: 'Dissenyes i construeixes infraestructures: ponts, carreteres, preses i edificis.',
      dayInLife: ['Calcular estructures i materials necessaris', 'Supervisar obres al camp', 'Col·laborar amb arquitectes i administracions públiques'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Arquitectura',
      description: 'Dissenyes espais habitables que combinen funcionalitat, estètica i sostenibilitat.',
      dayInLife: ['Dissenyar plànols i maquetes d\'edificis', 'Supervisar la construcció a l\'obra', 'Reunir-se amb clients per entendre les seves necessitats'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Enginyeria de Camins',
      description: 'Planifiques i executes grans projectes d\'infraestructura per connectar ciutats i territoris.',
      dayInLife: ['Projectar carreteres, ferrocarrils o ports', 'Gestionar contractes i pressupostos d\'obra', 'Analitzar l\'impacte ambiental dels projectes'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafIngenieriaAplicada: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Enginyeria Mecànica',
      description: 'Dissenyes i fabriques màquines, motors i sistemes mecànics.',
      dayInLife: ['Dissenyar peces amb programari CAD', 'Simular i provar el comportament de sistemes', 'Supervisar la fabricació i el control de qualitat'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Enginyeria Electrònica',
      description: 'Dissenyes circuits, dispositius i sistemes electrònics.',
      dayInLife: ['Dissenyar i prototipar plaques de circuit', 'Programar microcontroladors i sistemes embeguts', 'Integrar electrònica en productes de consum o indústria'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Robòtica i Enginyeria de Telecomunicacions',
      description: 'Desenvolups robots autònoms i sistemes de comunicació que connecten el món.',
      dayInLife: ['Dissenyar robots industrials o de servei', 'Planificar xarxes de comunicació 5G o satelital', 'Integrar sensors i intel·ligència artificial en sistemes físics'],
      bachillerato: ['tecnologico'],
    },
    {
      name: 'Enginyeria Aeroespacial',
      description: 'Dissenyes aeronaus, satèl·lits i sistemes de propulsió per a l\'aviació i l\'exploració espacial.',
      dayInLife: ['Calcular estructures i sistemes de vol', 'Dissenyar i provar components en simuladors o túnels de vent', 'Col·laborar en projectes aeroespacials internacionals'],
      bachillerato: ['tecnologico'],
    },
  ],
};

const leafHistoriaFilosofia: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Història',
      description: 'Investigues el passat per comprendre el present i orientar el futur.',
      dayInLife: ['Estudiar fonts primàries i arxius històrics', 'Redactar articles, llibres o informes', 'Ensenyar o assessorar museus i institucions culturals'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Filosofia',
      description: 'Reflexiones sobre el coneixement, l\'ètica, l\'existència i les grans preguntes humanes.',
      dayInLife: ['Llegir, analitzar i escriure sobre idees filosòfiques', 'Debatre en seminaris i congressos', 'Ensenyar o assessorar en ètica empresarial o bioètica'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Arqueologia / Història de l\'Art',
      description: 'Descubres i analitzes el patrimoni material i artístic de les civilitzacions.',
      dayInLife: ['Participar en excavacions arqueològiques', 'Analitzar i catalogar peces en museus', 'Redactar informes i publicar descobriments'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafLenguas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Filologia',
      description: 'Estudies el llenguatge, la literatura i l\'evolució de les llengües en profunditat.',
      dayInLife: ['Analitzar textos literaris i lingüístics', 'Investigar l\'evolució del llenguatge', 'Ensenyar en universitats o instituts d\'idiomes'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Traducció i Interpretació',
      description: 'Transmets coneixements, idees i cultures entre idiomes diferents.',
      dayInLife: ['Traduir documents, llibres o contingut web', 'Interpretar en conferències internacionals', 'Gestionar projectes de localització per a empreses globals'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Lingüística',
      description: 'Estudies científicament l\'estructura, l\'ús i l\'evolució dels llenguatges humans.',
      dayInLife: ['Analitzar patrons fonètics, gramaticals o semàntics', 'Treballar en tecnologies de processament del llenguatge natural', 'Investigar llengües en perill d\'extinció'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafDerechoPolitica: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Dret',
      description: 'Interpretes i apliques les lleis per defensar drets i resoldre conflictes.',
      dayInLife: ['Assessorar clients sobre els seus drets', 'Preparar i defensar casos davant tribunals', 'Redactar contractes, demandes i recursos legals'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Ciències Polítiques',
      description: 'Analitzes sistemes polítics, partits, eleccions i polítiques públiques.',
      dayInLife: ['Investigar el comportament electoral i els sistemes de govern', 'Assessorar partits, governs o organitzacions internacionals', 'Dissenyar i implementar polítiques públiques'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Relacions Internacionals',
      description: 'Treballes en diplomàcia, cooperació i anàlisi dels afers globals.',
      dayInLife: ['Negociar acords entre països o organismes internacionals', 'Analitzar conflictes i situacions geopolítiques', 'Treballar en ONG, ambaixades o organismes com l\'ONU'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Criminologia',
      description: 'Estudies el crim, les seves causes i conseqüències per dissenyar polítiques de prevenció i seguretat.',
      dayInLife: ['Analitzar patrons delictius i perfils criminals', 'Col·laborar amb forces de seguretat i jutjats', 'Proposar polítiques de reinserció i prevenció del delicte'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafCienciasSociales: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Sociologia',
      description: 'Estudies l\'estructura i els canvis de les societats per entendre el comportament col·lectiu.',
      dayInLife: ['Dissenyar enquestes i analitzar dades socials', 'Investigar fenòmens com la desigualtat, la migració o la identitat', 'Publicar estudis o assessorar governs i ONG'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Antropologia',
      description: 'Investigues la diversitat cultural i el comportament humà al llarg del temps.',
      dayInLife: ['Realitzar treball de camp en comunitats', 'Analitzar rituals, costums i estructures socials', 'Publicar etnografies i assessorar sobre diversitat cultural'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Geografia Humana',
      description: 'Estudies com l\'espai i el territori influeixen en les societats i l\'economia.',
      dayInLife: ['Analitzar dades de població i territori amb SIG', 'Investigar planificació urbana o migracions', 'Assessorar administracions en desenvolupament regional'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafEmpresa: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Administració i Direcció d\'Empreses (ADE)',
      description: 'Gestiones i dirigeixes organitzacions per maximitzar el seu rendiment i sostenibilitat.',
      dayInLife: ['Analitzar resultats i prendre decisions estratègiques', 'Liderar equips i coordinar departaments', 'Desenvolupar plans de negoci i negociar amb socis'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Màrqueting i Comunicació',
      description: 'Connectes marques amb els seus públics a través d\'estratègies creatives i dades.',
      dayInLife: ['Dissenyar i llançar campanyes de màrqueting digital', 'Analitzar mètriques de rendiment', 'Gestionar la presència de la marca a les xarxes socials'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Recursos Humans',
      description: 'Gestiones el talent d\'una organització i cuides el benestar de les persones.',
      dayInLife: ['Seleccionar i incorporar nous perfils', 'Dissenyar plans de formació i desenvolupament', 'Gestionar conflictes i el clima organitzacional'],
      bachillerato: ['sociales'],
    },
  ],
};

const leafEconomiaFinanzas: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Economia',
      description: 'Analitzes el comportament de mercats, països i agents econòmics per prendre millors decisions.',
      dayInLife: ['Modelar l\'economia amb dades i equacions', 'Assessorar governs o empreses sobre polítiques econòmiques', 'Publicar estudis sobre inflació, ocupació o comerç'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Finances i Inversió',
      description: 'Gestiones carteres d\'inversió i avalues la viabilitat financera de projectes.',
      dayInLife: ['Analitzar estats financers i mercats borsaris', 'Dissenyar estratègies d\'inversió', 'Assessorar empreses en fusions, adquisicions o finançament'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Actuaria i Matemàtiques Financeres',
      description: 'Calcules i gestiones riscos econòmics per a asseguradores, bancs i fons.',
      dayInLife: ['Modelar probabilitats de risc amb matemàtiques avançades', 'Dissenyar productes d\'assegurances o pensions', 'Assessorar sobre solvència i regulació financera'],
      bachillerato: ['ciencias', 'sociales'],
    },
  ],
};

const leafTurismo: LeafNode = {
  type: 'leaf',
  careers: [
    {
      name: 'Turisme',
      description: 'Planifiques, gestiones i promociones destinacions i productes turístics a nivell nacional i internacional.',
      dayInLife: ['Dissenyar paquets turístics i gestionar agències de viatge', 'Analitzar tendències del mercat turístic', 'Treballar en destinacions turístiques, aeroports o organismes de promoció'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Direcció Hotelera',
      description: 'Gestiones establiments d\'allotjament i hostaleria assegurant l\'excel·lència en l\'experiència del hoste.',
      dayInLife: ['Supervisar els departaments de l\'hotel (recepció, restauració, pisos)', 'Gestionar el revenue i les reserves', 'Liderar equips i garantir la satisfacció del client'],
      bachillerato: ['sociales'],
    },
    {
      name: 'Gastronomia i Arts Culinàries',
      description: 'Crees i gestiones experiències gastronòmiques combinant tècnica culinària, creativitat i cultura.',
      dayInLife: ['Dissenyar menús i desenvolupar noves receptes', 'Gestionar cuines de restaurants o empreses de càtering', 'Investigar tècniques culinàries innovadores i tendències gastronòmiques'],
      bachillerato: ['sociales', 'artes'],
    },
  ],
};

// ─── LEVEL 3 QUESTION NODES ──────────────────────────────────────────────────

const nodeSaludFisicaDetalle: QuestionNode = {
  type: 'question',
  question: 'Quin aspecte de la salut física t\'imagines treballant?',
  options: [
    {
      label: 'Tractar directament els pacients',
      imageUrl: '/images/sanitaria-paciente.jpg',
      imageAlt: 'Metgessa revisant un pacient amb amabilitat',
      next: leafMedicinaCuidados,
    },
    {
      label: 'Investigar malalties i desenvolupar tractaments',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Científica investigant en un laboratori biomèdic',
      next: leafInvestigacionBiomedica,
    },
    {
      label: 'Esport, nutrició i benestar físic preventiu',
      imageUrl: '/images/entrenadora-deporte.jpg',
      imageAlt: 'Preparadora física entrenant amb esportistes en instal·lació esportiva',
      next: leafSaludFisicaPreventiva,
    },
  ],
};

const nodeArteVisualDetalle: QuestionNode = {
  type: 'question',
  question: 'Quin tipus de creació visual t\'atrau més?',
  options: [
    {
      label: 'Art clàssic: pintura, escultura, patrimoni',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista pintant al seu estudi amb colors vibrants',
      next: leafBellasArtes,
    },
    {
      label: 'Disseny digital: gràfic, UX, animació',
      imageUrl: '/images/disenadora-digital.jpg',
      imageAlt: 'Dissenyadora creant una interfície digital en pantalla',
      next: leafDisenoDigital,
    },
  ],
};

const nodeSoftwareDetalle: QuestionNode = {
  type: 'question',
  question: 'Quin tipus de món digital t\'apassiona més?',
  options: [
    {
      label: 'Crear apps, webs, videojocs i sistemes segurs',
      imageUrl: '/images/desarrolladora-codigo.jpg',
      imageAlt: 'Desenvolupadora programant amb múltiples pantalles de codi',
      next: leafSoftware,
    },
    {
      label: 'Intel·ligència artificial, dades i algorismes',
      imageUrl: '/images/visualizacion-ia.jpg',
      imageAlt: 'Pantalles amb visualitzacions de dades i models d\'IA',
      next: leafIADatos,
    },
  ],
};

const nodeIngFisicaDetalle: QuestionNode = {
  type: 'question',
  question: 'Quin tipus de construcció t\'imagines fent?',
  options: [
    {
      label: 'Edificis, ponts, infraestructures i ciutats',
      imageUrl: '/images/arquitecta-planos.jpg',
      imageAlt: 'Arquitecta revisant plànols d\'una gran estructura',
      next: leafIngenieriaEstructuras,
    },
    {
      label: 'Màquines, robots, electrònica i telecomunicacions',
      imageUrl: '/images/ingeniera-robot.jpg',
      imageAlt: 'Enginyera treballant amb un robot i components electrònics',
      next: leafIngenieriaAplicada,
    },
  ],
};

const nodeNaturalezaViviente: QuestionNode = {
  type: 'question',
  question: 'Quin món viu t\'interessa més explorar?',
  options: [
    {
      label: 'Ecosistemes, animals i medi ambient',
      imageUrl: '/images/biologa-bosque.jpg',
      imageAlt: 'Biòloga prenent mostres en un bosc exuberant',
      next: leafCienciasVida,
    },
    {
      label: 'Genètica, biotecnologia i vida a escala molecular',
      imageUrl: '/images/cientifica-genetica.jpg',
      imageAlt: 'Científica treballant amb mostres genètiques al laboratori',
      next: leafBiotecnologia,
    },
  ],
};

const nodeNaturalezaFisica: QuestionNode = {
  type: 'question',
  question: 'Quins fenòmens de l\'univers inorgànic et fascinen?',
  options: [
    {
      label: 'Física, matemàtiques i el cosmos',
      imageUrl: '/images/observatorio-telescopio.jpg',
      imageAlt: 'Observatori amb telescopi apuntant al cel estrellat',
      next: leafFisicaMatematicas,
    },
    {
      label: 'Química, materials i transformació de la matèria',
      imageUrl: '/images/quimica-laboratorio.jpg',
      imageAlt: 'Química experimentant amb compostos al laboratori',
      next: leafQuimica,
    },
  ],
};

const nodeHistoriaOLenguas: QuestionNode = {
  type: 'question',
  question: 'Quina dimensió de la cultura humana t\'atrau més?',
  options: [
    {
      label: 'El passat: història, filosofia i patrimoni',
      imageUrl: '/images/investigadora-libros.jpg',
      imageAlt: 'Investigadora envoltada de llibres històrics en una biblioteca',
      next: leafHistoriaFilosofia,
    },
    {
      label: 'Les llengües, els idiomes i la comunicació intercultural',
      imageUrl: '/images/traductora-idiomas.jpg',
      imageAlt: 'Traductora treballant amb textos de diferents idiomes',
      next: leafLenguas,
    },
  ],
};

// ─── LEVEL 2 QUESTION NODES ──────────────────────────────────────────────────

const nodeCuidar: QuestionNode = {
  type: 'question',
  question: 'Com t\'imagines ajudant les persones?',
  options: [
    {
      label: 'Cuidant la seva salut i benestar físic',
      imageUrl: '/images/medica-paciente.jpg',
      imageAlt: 'Metgessa amb bata blanca acompanyant una pacient',
      next: nodeSaludFisicaDetalle,
    },
    {
      label: 'Donant suport al seu benestar emocional i mental',
      imageUrl: '/images/psicologa-consulta.jpg',
      imageAlt: 'Psicòloga escoltant atentament una persona a consulta',
      next: leafSaludMental,
    },
    {
      label: 'Ensenyant i educant',
      imageUrl: '/images/profesora-clase.jpg',
      imageAlt: 'Professora entusiasta explicant als estudiants a classe',
      next: leafEducacion,
    },
  ],
};

const nodeCrear: QuestionNode = {
  type: 'question',
  question: 'Quin tipus de creació t\'emociona més?',
  options: [
    {
      label: 'Art visual i disseny',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista creant una obra al seu estudi ple de color',
      next: nodeArteVisualDetalle,
    },
    {
      label: 'Música, teatre o dansa',
      imageUrl: '/images/actuacion-escenario.jpg',
      imageAlt: 'Actuació a l\'escenari amb llums dramàtiques',
      next: leafArtesEscenicas,
    },
    {
      label: 'Explicar històries i comunicar al món',
      imageUrl: '/images/periodista-camara.jpg',
      imageAlt: 'Periodista gravant un reportatge amb càmera professional',
      next: leafComunicacion,
    },
  ],
};

const nodeNaturaleza: QuestionNode = {
  type: 'question',
  question: 'Quina part del món natural et fascina més?',
  options: [
    {
      label: 'Els éssers vius: animals, plantes i cèl·lules',
      imageUrl: '/images/biologa-bosque.jpg',
      imageAlt: 'Biòloga prenent mostres en un bosc exuberant',
      next: nodeNaturalezaViviente,
    },
    {
      label: 'La matèria, l\'energia i el cosmos',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Investigadora al laboratori amb equip científic de precisió',
      next: nodeNaturalezaFisica,
    },
  ],
};

const nodeConstruir: QuestionNode = {
  type: 'question',
  question: 'Quin tipus de construcció t\'atrau més?',
  options: [
    {
      label: 'Programari, apps i intel·ligència artificial',
      imageUrl: '/images/desarrolladora-codigo.jpg',
      imageAlt: 'Desenvolupadora programant amb múltiples pantalles de codi',
      next: nodeSoftwareDetalle,
    },
    {
      label: 'Màquines, estructures i infraestructures físiques',
      imageUrl: '/images/ingeniera-industrial.jpg',
      imageAlt: 'Enginyera supervisant una gran instal·lació industrial',
      next: nodeIngFisicaDetalle,
    },
  ],
};

const nodeSociedad: QuestionNode = {
  type: 'question',
  question: 'Quin aspecte de la societat i la cultura t\'interessa més?',
  options: [
    {
      label: 'La història, la filosofia i les llengües',
      imageUrl: '/images/personas-debate.jpg',
      imageAlt: 'Persones diverses debatent idees en un espai acadèmic',
      next: nodeHistoriaOLenguas,
    },
    {
      label: 'La justícia, els drets i la política',
      imageUrl: '/images/abogada-documentos.jpg',
      imageAlt: 'Advocada llegint documents legals en un despatx',
      next: leafDerechoPolitica,
    },
    {
      label: 'Entendre i millorar la societat',
      imageUrl: '/images/investigadora-social.jpg',
      imageAlt: 'Investigadora social entrevistant persones en comunitat',
      next: leafCienciasSociales,
    },
  ],
};

const nodeNegocios: QuestionNode = {
  type: 'question',
  question: 'Quin tipus de treball amb dades i organitzacions t\'atrau?',
  options: [
    {
      label: 'Crear i dirigir empreses o projectes',
      imageUrl: '/images/emprendedora-startup.jpg',
      imageAlt: 'Emprenedora presentant el seu projecte a inversors en una startup',
      next: leafEmpresa,
    },
    {
      label: 'Anàlisi econòmica, finances i inversió',
      imageUrl: '/images/analista-financiera.jpg',
      imageAlt: 'Analista financera revisant gràfics i dades econòmiques',
      next: leafEconomiaFinanzas,
    },
    {
      label: 'Turisme, hostaleria i experiències',
      imageUrl: '/images/turismo-viajeros.jpg',
      imageAlt: 'Professional de turisme atenent viatgers en una destinació internacional',
      next: leafTurismo,
    },
  ],
};

// ─── ROOT NODE ───────────────────────────────────────────────────────────────

export const careerTree: QuestionNode = {
  type: 'question',
  question: 'Quina d\'aquestes situacions t\'imagines en el teu futur?',
  subtitle: 'Tria la imatge que més t\'atregui',
  options: [
    {
      label: 'Cuidar i ajudar les persones',
      imageUrl: '/images/sanitaria-paciente.jpg',
      imageAlt: 'Professional sanitària somrient amb una pacient gran',
      next: nodeCuidar,
    },
    {
      label: 'Crear i dissenyar coses noves',
      imageUrl: '/images/artista-estudio.jpg',
      imageAlt: 'Artista creant una obra original al seu estudi',
      next: nodeCrear,
    },
    {
      label: 'Entendre com funciona el món natural',
      imageUrl: '/images/cientifica-laboratorio.jpg',
      imageAlt: 'Científica investigant amb microscopi al laboratori',
      next: nodeNaturaleza,
    },
    {
      label: 'Construir i fer funcionar les coses',
      imageUrl: '/images/tecnologia-componentes.jpg',
      imageAlt: 'Enginyera analitzant components de tecnologia avançada',
      next: nodeConstruir,
    },
    {
      label: 'Comprendre la societat i la cultura',
      imageUrl: '/images/personas-debate.jpg',
      imageAlt: 'Persones diverses col·laborant i debatent idees',
      next: nodeSociedad,
    },
    {
      label: 'Liderar, emprendre i treballar amb dades',
      imageUrl: '/images/profesional-negocios.jpg',
      imageAlt: 'Professional de negocis presentant dades i resultats',
      next: nodeNegocios,
    },
  ],
};
