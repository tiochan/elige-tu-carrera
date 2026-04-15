'use client';

import { createContext, useContext } from 'react';
import type { Locale, BachilleratoTrack } from '@/types';

interface ModalArea {
  area: string;
  examples: string;
}

interface ModalTrack {
  label: string;
  description: string;
}

export interface Strings {
  meta: { title: string; description: string };
  helpButtonAriaLabel: string;
  welcome: {
    heading1: string;
    heading2: string;
    subtitle: string;
    howItWorks: string;
    step1: string;
    step2: string;
    step3: string;
    start: string;
    footer: string;
  };
  breadcrumb: { back: string };
  result: {
    heading: string;
    subtitle: string;
    bachilleratoPrefix: string;
    dayInLife: string;
    back: string;
    reset: string;
  };
  helpModal: {
    title: string;
    closeAriaLabel: string;
    intro: string;
    treeTitle: string;
    step1Label: string;
    step1Desc: string;
    step2Label: string;
    step2Desc: string;
    step3Label: string;
    step3Desc: string;
    treeResult: string;
    treeFootnote: string;
    careersTitle: string;
    careersSummary: string;
    bachilleratoTitle: string;
    areas: ModalArea[];
    tracks: ModalTrack[];
  };
  bachillerato: Record<BachilleratoTrack, string>;
  language: Record<Locale, string>;
}

export const strings: Record<Locale, Strings> = {
  es: {
    meta: {
      title: '¿Qué quieres ser de mayor?',
      description: 'Descubre qué carrera encaja contigo y qué bachillerato es tu mejor punto de partida',
    },
    helpButtonAriaLabel: 'Ayuda',
    welcome: {
      heading1: '¿Qué quieres ser',
      heading2: 'de mayor?',
      subtitle: 'Descubre qué carreras encajan con lo que te apasiona y qué bachillerato es tu mejor punto de partida.',
      howItWorks: '¿Cómo funciona?',
      step1: 'Te mostramos situaciones representadas con imágenes reales.',
      step2: 'Elige la que más te llame la atención sin pensarlo demasiado.',
      step3: 'Al final verás qué carreras te encajan y qué bachillerato las activa.',
      start: 'Empezar →',
      footer: 'Puedes volver atrás en cualquier momento y explorar otras opciones.',
    },
    breadcrumb: { back: '← Volver' },
    result: {
      heading: '¡Estas carreras encajan contigo!',
      subtitle: 'Basándonos en tus elecciones, aquí tienes las opciones profesionales que mejor se alinean con lo que te apasiona.',
      bachilleratoPrefix: 'Bachillerato de',
      dayInLife: 'Tu día a día',
      back: '← Volver al paso anterior',
      reset: 'Empezar de nuevo',
    },
    helpModal: {
      title: 'Cómo funciona',
      closeAriaLabel: 'Cerrar',
      intro: 'Exploras tus intereses eligiendo imágenes en 2 o 3 pasos. Al final descubres qué carreras universitarias encajan con lo que te apasiona y qué Bachillerato es el mejor punto de partida.',
      treeTitle: 'El árbol de decisiones',
      step1Label: 'Área vocacional',
      step1Desc: '¿En qué ámbito te imaginas tu futuro? — 6 opciones',
      step2Label: 'Aspecto concreto',
      step2Desc: '¿Qué parte de ese ámbito te atrae más? — 2-3 opciones',
      step3Label: 'Tipo de actividad',
      step3Desc: '¿Qué tipo de trabajo te imaginas haciendo? — 2-3 opciones',
      treeResult: 'Resultado: entre 3 y 6 carreras con su descripción y día a día.',
      treeFootnote: 'Las preguntas exploran motivaciones (qué te imaginas haciendo), no habilidades. En 4º de ESO aún hay tiempo de desarrollar lo que cada carrera requiere.',
      careersTitle: 'Qué carreras cubre',
      careersSummary: '78 carreras universitarias del sistema español en 6 áreas:',
      bachilleratoTitle: 'Modalidades de Bachillerato',
      areas: [
        { area: 'Cuidar y ayudar', examples: 'Medicina, Odontología, Enfermería, Psicología, CAFYD, Magisterio' },
        { area: 'Crear y diseñar', examples: 'Bellas Artes, Diseño UX/UI, Animación 3D, Comunicación Audiovisual' },
        { area: 'Mundo natural', examples: 'Biología, Biotecnología, Física, Ciencias del Mar, Química' },
        { area: 'Construir y hacer', examples: 'Ingeniería Informática, Robótica, Arquitectura, Aeroespacial, IA' },
        { area: 'Sociedad y cultura', examples: 'Derecho, Criminología, Historia, Filología, Relaciones Internacionales' },
        { area: 'Liderar y emprender', examples: 'ADE, Economía, Finanzas, Turismo, Dirección Hotelera' },
      ],
      tracks: [
        { label: 'Ciencias', description: 'Salud, ciencias puras y deporte' },
        { label: 'Tecnológico', description: 'Ingenierías, informática y arquitectura' },
        { label: 'Humanidades y CC. Sociales', description: 'Derecho, economía, comunicación, turismo' },
        { label: 'Artes', description: 'Diseño, bellas artes, música y teatro' },
      ],
    },
    bachillerato: {
      ciencias: 'Ciencias',
      tecnologico: 'Tecnológico',
      sociales: 'Humanidades y Sociales',
      artes: 'Artes',
    },
    language: { es: 'Español', ca: 'Català', gl: 'Galego', eu: 'Euskara' },
  },

  ca: {
    meta: {
      title: 'Què vols ser de gran?',
      description: 'Descobreix quina carrera encaixa amb tu i quin batxillerat és el teu millor punt de partida',
    },
    helpButtonAriaLabel: 'Ajuda',
    welcome: {
      heading1: 'Què vols ser',
      heading2: 'de gran?',
      subtitle: 'Descobreix quines carreres encaixen amb el que t\'apassiona i quin batxillerat és el teu millor punt de partida.',
      howItWorks: 'Com funciona?',
      step1: 'Et mostrem situacions representades amb imatges reals.',
      step2: 'Tria la que més t\'atragui sense pensar-ho massa.',
      step3: 'Al final veuràs quines carreres t\'encaixen i quin batxillerat les activa.',
      start: 'Començar →',
      footer: 'Pots tornar enrere en qualsevol moment i explorar altres opcions.',
    },
    breadcrumb: { back: '← Tornar' },
    result: {
      heading: 'Aquestes carreres encaixen amb tu!',
      subtitle: 'Basant-nos en les teves eleccions, aquí tens les opcions professionals que millor s\'alineen amb el que t\'apassiona.',
      bachilleratoPrefix: 'Batxillerat de',
      dayInLife: 'El teu dia a dia',
      back: '← Tornar al pas anterior',
      reset: 'Tornar a començar',
    },
    helpModal: {
      title: 'Com funciona',
      closeAriaLabel: 'Tancar',
      intro: 'Explores els teus interessos triant imatges en 2 o 3 passos. Al final descobreixes quines carreres universitàries encaixen amb el que t\'apassiona i quin Batxillerat és el millor punt de partida.',
      treeTitle: 'L\'arbre de decisions',
      step1Label: 'Àrea vocacional',
      step1Desc: 'En quin àmbit t\'imagines el teu futur? — 6 opcions',
      step2Label: 'Aspecte concret',
      step2Desc: 'Quina part d\'aquell àmbit t\'atrau més? — 2-3 opcions',
      step3Label: 'Tipus d\'activitat',
      step3Desc: 'Quin tipus de treball t\'imagines fent? — 2-3 opcions',
      treeResult: 'Resultat: entre 3 i 6 carreres amb la seva descripció i dia a dia.',
      treeFootnote: 'Les preguntes exploren motivacions (què t\'imagines fent), no habilitats. A 4t d\'ESO encara hi ha temps de desenvolupar el que cada carrera requereix.',
      careersTitle: 'Quines carreres cobreix',
      careersSummary: '78 carreres universitàries del sistema espanyol en 6 àrees:',
      bachilleratoTitle: 'Modalitats de Batxillerat',
      areas: [
        { area: 'Cuidar i ajudar', examples: 'Medicina, Odontologia, Infermeria, Psicologia, CAFYD, Magisteri' },
        { area: 'Crear i dissenyar', examples: 'Belles Arts, Disseny UX/UI, Animació 3D, Comunicació Audiovisual' },
        { area: 'Món natural', examples: 'Biologia, Biotecnologia, Física, Ciències del Mar, Química' },
        { area: 'Construir i fer', examples: 'Enginyeria Informàtica, Robòtica, Arquitectura, Aeroespacial, IA' },
        { area: 'Societat i cultura', examples: 'Dret, Criminologia, Història, Filologia, Relacions Internacionals' },
        { area: 'Liderar i emprendre', examples: 'ADE, Economia, Finances, Turisme, Direcció Hotelera' },
      ],
      tracks: [
        { label: 'Ciències', description: 'Salut, ciències pures i esport' },
        { label: 'Tecnològic', description: 'Enginyeries, informàtica i arquitectura' },
        { label: 'Humanitats i CC. Socials', description: 'Dret, economia, comunicació, turisme' },
        { label: 'Arts', description: 'Disseny, belles arts, música i teatre' },
      ],
    },
    bachillerato: {
      ciencias: 'Ciències',
      tecnologico: 'Tecnològic',
      sociales: 'Humanitats i Socials',
      artes: 'Arts',
    },
    language: { es: 'Español', ca: 'Català', gl: 'Galego', eu: 'Euskara' },
  },

  gl: {
    meta: {
      title: 'Que queres ser de maior?',
      description: 'Descubre que carreira encaixa contigo e que bacharelato é o teu mellor punto de partida',
    },
    helpButtonAriaLabel: 'Axuda',
    welcome: {
      heading1: 'Que queres ser',
      heading2: 'de maior?',
      subtitle: 'Descubre que carreiras encaixan co que che apaixona e que bacharelato é o teu mellor punto de partida.',
      howItWorks: 'Como funciona?',
      step1: 'Amosámosche situacións representadas con imaxes reais.',
      step2: 'Escolle a que máis che chame a atención sen pensalo demasiado.',
      step3: 'Ao final verás que carreiras che encaixan e que bacharelato as activa.',
      start: 'Comezar →',
      footer: 'Podes volver atrás en calquera momento e explorar outras opcións.',
    },
    breadcrumb: { back: '← Volver' },
    result: {
      heading: 'Estas carreiras encaixan contigo!',
      subtitle: 'Baseándonos nas túas eleccións, aquí tes as opcións profesionais que mellor se aliñan co que che apaixona.',
      bachilleratoPrefix: 'Bacharelato de',
      dayInLife: 'O teu día a día',
      back: '← Volver ao paso anterior',
      reset: 'Comezar de novo',
    },
    helpModal: {
      title: 'Como funciona',
      closeAriaLabel: 'Pechar',
      intro: 'Exploras os teus intereses escollendo imaxes en 2 ou 3 pasos. Ao final descubres que carreiras universitarias encaixan co que che apaixona e que Bacharelato é o mellor punto de partida.',
      treeTitle: 'A árbore de decisións',
      step1Label: 'Área vocacional',
      step1Desc: 'En que ámbito te imaxinas o teu futuro? — 6 opcións',
      step2Label: 'Aspecto concreto',
      step2Desc: 'Que parte dese ámbito che atrae máis? — 2-3 opcións',
      step3Label: 'Tipo de actividade',
      step3Desc: 'Que tipo de traballo te imaxinas facendo? — 2-3 opcións',
      treeResult: 'Resultado: entre 3 e 6 carreiras coa súa descrición e día a día.',
      treeFootnote: 'As preguntas exploran motivacións (que te imaxinas facendo), non habilidades. En 4º da ESO aínda hai tempo de desenvolver o que cada carreira require.',
      careersTitle: 'Que carreiras cobre',
      careersSummary: '78 carreiras universitarias do sistema español en 6 áreas:',
      bachilleratoTitle: 'Modalidades de Bacharelato',
      areas: [
        { area: 'Coidar e axudar', examples: 'Medicina, Odontoloxía, Enfermaría, Psicoloxía, CAFYD, Maxisterio' },
        { area: 'Crear e deseñar', examples: 'Belas Artes, Deseño UX/UI, Animación 3D, Comunicación Audiovisual' },
        { area: 'Mundo natural', examples: 'Bioloxía, Biotecnoloxía, Física, Ciencias do Mar, Química' },
        { area: 'Construír e facer', examples: 'Enxeñería Informática, Robótica, Arquitectura, Aeroespacial, IA' },
        { area: 'Sociedade e cultura', examples: 'Dereito, Criminoloxía, Historia, Filoloxía, Relacións Internacionais' },
        { area: 'Liderar e emprender', examples: 'ADE, Economía, Finanzas, Turismo, Dirección Hoteleira' },
      ],
      tracks: [
        { label: 'Ciencias', description: 'Saúde, ciencias puras e deporte' },
        { label: 'Tecnolóxico', description: 'Enxeñerías, informática e arquitectura' },
        { label: 'Humanidades e CC. Sociais', description: 'Dereito, economía, comunicación, turismo' },
        { label: 'Artes', description: 'Deseño, belas artes, música e teatro' },
      ],
    },
    bachillerato: {
      ciencias: 'Ciencias',
      tecnologico: 'Tecnolóxico',
      sociales: 'Humanidades e CC. Sociais',
      artes: 'Artes',
    },
    language: { es: 'Español', ca: 'Català', gl: 'Galego', eu: 'Euskara' },
  },

  eu: {
    meta: {
      title: 'Zer izan nahi duzu handi zarenean?',
      description: 'Aurkitu zure pasioekin bat datozen karrerak eta batxilergoa',
    },
    helpButtonAriaLabel: 'Laguntza',
    welcome: {
      heading1: 'Zer izan nahi duzu',
      heading2: 'handi zarenean?',
      subtitle: 'Aurkitu zure pasioekin bat datozen karrerak eta batxilergoa horretarako abiapuntu onena.',
      howItWorks: 'Nola funtzionatzen du?',
      step1: 'Irudi bidezko egoerak erakutsiko dizkizugu.',
      step2: 'Gehien deitzen zaizuna hautatu, gehiegi pentsatu gabe.',
      step3: 'Amaieran zure karrerak eta batxilergoa ikusi ahal izango dituzu.',
      start: 'Hasi →',
      footer: 'Edozein momentutan atzera egin eta beste aukerak aztertu ditzakezu.',
    },
    breadcrumb: { back: '← Atzera' },
    result: {
      heading: 'Karrera hauek zurekin bat datoz!',
      subtitle: 'Zure aukerak kontuan hartuta, hona hemen zure pasioetan hobeto lerrokatzen diren aukera profesionalak.',
      bachilleratoPrefix: 'Batxilergoa:',
      dayInLife: 'Zure egunerokoa',
      back: '← Aurreko urratsera itzuli',
      reset: 'Berriz hasi',
    },
    helpModal: {
      title: 'Nola funtzionatzen du',
      closeAriaLabel: 'Itxi',
      intro: 'Zure interesak irudiak aukeratuta aztertzen dituzu 2 edo 3 urratsetan. Amaieran zure pasioekin bat datozen unibertsitateko karrerak eta Batxilergoa horretarako abiapuntu onena aurkitzen dituzu.',
      treeTitle: 'Erabaki-arbola',
      step1Label: 'Lanbide-arloa',
      step1Desc: 'Zein esparrutan ikusten duzu zure etorkizuna? — 6 aukera',
      step2Label: 'Alderdi zehatza',
      step2Desc: 'Zein zati erakartzen zaitu gehiago? — 2-3 aukera',
      step3Label: 'Jarduera mota',
      step3Desc: 'Zein lan mota ikusten duzu zure burua egiten? — 2-3 aukera',
      treeResult: 'Emaitza: 3 eta 6 karrera artean, deskribapena eta egunerokoarekin.',
      treeFootnote: 'Galderak motibazioak aztertzen dituzte (zer ikusten duzun zure burua egiten), ez trebetasunak. DBH 4. mailan badago denbora karrerak eskatzen duena garatzeko.',
      careersTitle: 'Zer karrera biltzen ditu',
      careersSummary: '78 unibertsitateko karrera Espainiako sisteman 6 arlotan:',
      bachilleratoTitle: 'Batxilergo modalitatea',
      areas: [
        { area: 'Zaindu eta lagundu', examples: 'Medikuntza, Odontologia, Erizaintza, Psikologia, KAFYD, Irakasletza' },
        { area: 'Sortu eta diseinatu', examples: 'Arte Ederrak, UX/UI Diseinua, 3D Animazioa, Ikus-entzunezko Komunikazioa' },
        { area: 'Natura mundua', examples: 'Biologia, Bioteknologia, Fisika, Itsas Zientziak, Kimika' },
        { area: 'Eraiki eta egin', examples: 'Informatika Ingeniaritza, Robotika, Arkitektura, Aeroespaciala, AA' },
        { area: 'Gizartea eta kultura', examples: 'Zuzenbidea, Kriminologia, Historia, Filologia, Nazioarteko Harremanak' },
        { area: 'Liderar eta ekintzaileak', examples: 'EAZ, Ekonomia, Finantza, Turismoa, Hotel Zuzendaritza' },
      ],
      tracks: [
        { label: 'Zientziak', description: 'Osasuna, zientzia hutsak eta kirola' },
        { label: 'Teknologikoa', description: 'Ingeniaritzak, informatika eta arkitektura' },
        { label: 'Giza eta Gizarte Zientziak', description: 'Zuzenbidea, ekonomia, komunikazioa, turismoa' },
        { label: 'Arteak', description: 'Diseinua, arte ederrak, musika eta antzerkia' },
      ],
    },
    bachillerato: {
      ciencias: 'Zientziak',
      tecnologico: 'Teknologikoa',
      sociales: 'Giza eta Gizarte Zientziak',
      artes: 'Arteak',
    },
    language: { es: 'Español', ca: 'Català', gl: 'Galego', eu: 'Euskara' },
  },
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'es',
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function useStrings(): Strings {
  const { locale } = useLocale();
  return strings[locale];
}
