import type { IconName } from '../lib/icons';

// Actividades puntuales de las áreas: charlas, jornadas, talleres, encuestas.
// Para sumar una, agregá un objeto acá: su ficha y el destacado del inicio
// salen solos. Cuando pasa la fecha, poné estado: 'cerrada'.

export type Actividad = {
  slug: string;
  nombre: string;
  /** Área que la organiza, tal como se muestra en la etiqueta. */
  area: string;
  /** Slug del área, para listarla en su página. */
  areaSlug: string;
  /** Fecha en formato ISO, solo para ordenar. */
  fechaISO: string;
  subtitulo: string;
  resumen: string;
  /** Una encuesta online no tiene fecha ni lugar: usa `resaltados`. */
  cuando?: string;
  donde?: string;
  /** Reemplaza al par fecha + lugar en las tarjetas. */
  resaltados?: { icono: IconName; texto: string }[];
  estado: 'abierta' | 'cerrada';
  destacadaEnHome?: boolean;

  hero: { kicker: string; titulo: string; texto: string; pills: string[] };
  intro: string[];
  datosKicker?: string;
  datosTitulo?: string;
  datos: { clave: string; valor: string }[];
  disertante?: { nombre: string; texto: string; enlace?: { texto: string; url: string } };
  temarioKicker?: string;
  temarioTitulo?: string;
  temario?: { titulo: string; texto: string }[];
  inscripcion: { texto: string; cta: string; url: string };
  cierreKicker?: string;
  cierreTitulo?: string;
};

export const ACTIVIDADES: Actividad[] = [
  {
    slug: 'encuesta-salud-mental',
    nombre: 'Encuesta de Salud Mental',
    area: 'Salud',
    areaSlug: 'salud',
    fechaISO: '2026-10-10',
    subtitulo: 'Bienestar · Encuesta anónima',
    resumen:
      'Cinco minutos, sin dar tu nombre. Lo que respondas nos sirve para entender cómo está la comunidad y acompañar mejor.',
    resaltados: [
      { icono: 'reloj', texto: '5 minutos' },
      { icono: 'candado', texto: '100% anónima' },
    ],
    estado: 'abierta',
    destacadaEnHome: true,

    hero: {
      kicker: '10 de octubre · Día Mundial de la Salud Mental',
      titulo: 'Queremos escucharte',
      texto:
        'Ayudanos a mejorar la comunidad tecnológica respondiendo una encuesta breve sobre cómo estás hoy.',
      pills: ['100% anónima', 'Solo 5 minutos'],
    },

    intro: [
      'En el marco del Día Mundial de la Salud Mental, desde la Secretaría de Asuntos Estudiantiles te invitamos a responder nuestra Encuesta sobre Salud Mental.',
      'Queremos conocer y comprender el bienestar de toda la comunidad tecnológica para seguir fortaleciendo el acompañamiento institucional.',
      'Porque tu salud mental y tu bienestar son prioridad en la UTN.BA.',
    ],

    datosKicker: 'La encuesta',
    datosTitulo: 'En pocas palabras',
    datos: [
      { clave: 'Duración', valor: '5 minutos' },
      { clave: 'Formato', valor: '100% anónima' },
      { clave: 'Para', valor: 'Estudiantes de todas las especialidades' },
    ],

    temarioKicker: 'Por qué tu respuesta importa',
    temarioTitulo: 'Tu aporte, en concreto',
    temario: [
      {
        titulo: 'Detectar necesidades',
        texto: 'Entender qué está pasando hoy en la comunidad estudiantil.',
      },
      {
        titulo: 'Crear mejores estrategias',
        texto: 'Diseñar acciones de acompañamiento a partir de lo que nos cuentes.',
      },
      {
        titulo: 'Con total confidencialidad',
        texto: 'No se pide nombre, legajo ni mail. Nadie puede saber quién respondió qué.',
      },
    ],

    inscripcion: {
      texto: 'Te invitamos a completarla. Gracias por acompañarnos y sumar tu aporte.',
      cta: 'Completar la encuesta',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScfGTrsfpApzmU5D_RZNT4aabjItS8xnyzXDDZ69c7MlJam0Q/viewform',
    },
    cierreKicker: '5 minutos · 100% anónima',
    cierreTitulo: 'Tu respuesta suma.',
  },
  {
    slug: 'donacion-sangre',
    nombre: 'La ingeniería detrás de una donación de sangre',
    area: 'Salud',
    areaSlug: 'salud',
    fechaISO: '2026-10-30',
    subtitulo: 'Salud · Charla abierta',
    resumen:
      'El recorrido completo de la sangre, desde que sale del donante hasta que llega al paciente. No hace falta saber nada del tema.',
    cuando: 'Viernes 30 de octubre · 14 h',
    donde: 'Sede Medrano',
    estado: 'abierta',
    destacadaEnHome: true,

    hero: {
      kicker: 'Fundación Hemocentro Buenos Aires',
      titulo: '¿Qué ingeniería hay detrás de una donación de sangre?',
      texto:
        'Una charla sobre donación de sangre, tecnología y seguridad transfusional, abierta a toda la comunidad de la UTN.BA.',
      pills: ['Viernes 30/10 · 14 h', 'Sede Medrano'],
    },

    intro: [
      'La Fundación Hemocentro Buenos Aires invita a toda la comunidad de la UTN.BA a una charla abierta para conocer el recorrido completo de la sangre, desde que sale del donante hasta que llega al paciente.',
      'Donar es un acto solidario, pero también es parte de un sistema científico, tecnológico y humano que tiene que funcionar con seguridad en cada paso.',
      'No se requieren conocimientos previos.',
    ],

    datos: [
      { clave: 'Fecha', valor: 'Viernes 30 de octubre' },
      { clave: 'Horario', valor: '14 h' },
      { clave: 'Lugar', valor: 'Sede Medrano' },
    ],

    disertante: {
      nombre: 'Tec. Fernando M. Couto',
      texto:
        'Técnico Superior en Hemoterapia (M.N. 535), de la Fundación Hemocentro Buenos Aires.',
      enlace: { texto: 'Conocé más sobre Hemocentro', url: 'https://www.hemocentro.org/informacion' },
    },

    temarioTitulo: 'Del donante al paciente',
    temario: [
      { titulo: 'La extracción', texto: 'Diseño de agujas y bolsas.' },
      { titulo: 'El procesamiento', texto: 'Separación de hemocomponentes.' },
      { titulo: 'El análisis', texto: 'Biología molecular y período de ventana.' },
      {
        titulo: 'Conservación y distribución',
        texto: 'Cadena de frío, trazabilidad y logística.',
      },
      {
        titulo: 'Las personas',
        texto: 'Factores humanos en un sistema que no admite errores.',
      },
    ],

    inscripcion: {
      texto:
        'Detrás de cada donación hay un sistema entero. Vení a conocerlo por dentro: completá el formulario para reservar tu lugar.',
      cta: 'Inscribirme',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScVAmlNbaMW1e6pPCpsks4EuDcqk0APdkDhwVbkYQB4dGmo9w/viewform',
    },
  },
  {
    slug: 'fotoeducacion',
    nombre: 'Fotoeducación y prevención del cáncer de piel',
    area: 'Salud',
    areaSlug: 'salud',
    fechaISO: '2026-10-22',
    subtitulo: 'Salud · Charla abierta',
    resumen:
      'Cómo revisar tus lunares, cómo elegir un protector solar que de verdad te cubra, y qué puede —y qué no— la inteligencia artificial en dermatología.',
    cuando: 'Jueves 22 de octubre · 18 h',
    donde: 'Sede Medrano · Aula 506',
    estado: 'abierta',
    destacadaEnHome: true,

    hero: {
      kicker: 'Jornada de Fotoeducación',
      titulo: 'Cuidar la piel del sol, con datos y con tecnología.',
      texto:
        'Una charla sobre prevención y detección temprana del cáncer de piel, a cargo de la dermatóloga María Pía Pedalino. También vamos a ver qué puede hacer hoy la inteligencia artificial en dermatología y cuáles son sus límites.',
      pills: ['Jueves 22/10 · 18 h', 'Sede Medrano · Aula 506'],
    },

    intro: [
      'Desde la Secretaría de Asuntos Estudiantiles te invitamos a la Jornada de Fotoeducación, Innovación Tecnológica y Prevención del Cáncer de Piel, una actividad de salud pensada para toda la comunidad de la UTN.BA.',
      'Pasamos muchas horas al sol entre la cursada, el viaje y el fin de semana, y casi nunca nos fijamos en lo que eso le hace a la piel. En la charla vas a aprender a revisar tus lunares con la regla del ABCDE, a elegir un protector solar que realmente te cubra y a reconocer cuándo conviene hacer una consulta.',
      'Para quienes estudian ingeniería hay un bloque especialmente interesante: cómo se entrenan los algoritmos de visión por computadora que analizan imágenes de la piel, qué sensores y wearables miden la radiación UV en tiempo real, y por qué ninguno de esos sistemas reemplaza el ojo de un especialista.',
    ],

    datos: [
      { clave: 'Fecha', valor: 'Jueves 22 de octubre' },
      { clave: 'Horario', valor: '18 h' },
      { clave: 'Lugar', valor: 'Sede Medrano, Aula 506' },
      { clave: 'Inscripción', valor: 'Previa, con el formulario de esta página' },
    ],

    disertante: {
      nombre: 'Dra. María Pía Pedalino',
      texto:
        'Médica pediatra, especialista en dermatología infantil y estética (M.N. 137.677). La jornada cuenta con el apoyo de los laboratorios Andrómaco y La Roche-Posay.',
    },

    temario: [
      {
        titulo: 'Prevención y detección temprana',
        texto:
          'Qué dicen los datos epidemiológicos, cómo aparecen los melanomas, la regla del ABCDE para el autoexamen de lunares y los factores de riesgo que sí podemos modificar.',
      },
      {
        titulo: 'Radiación solar y fotoprotección',
        texto:
          'El espectro electromagnético y cómo daña a las células de la piel, cómo elegir un protector solar y qué cuidados especiales necesitan los chicos.',
      },
      {
        titulo: 'Inteligencia artificial en dermatología',
        texto:
          'Entrenamiento de algoritmos, visión por computadora y aplicaciones reales, junto con sus límites: falsos positivos y negativos, sesgos de entrenamiento y la piel como órgano integral.',
      },
      {
        titulo: 'Gadgets y tratamientos no invasivos',
        texto:
          'Parches, sensores UV portátiles, anillos y smartwatches que miden la exposición solar, y tratamientos como luz LED, radiofrecuencia y terapia fotodinámica. Al final hay un espacio para preguntas.',
      },
    ],

    inscripcion: {
      texto:
        'Completá el formulario para que podamos organizar el aula. Si conocés a alguien a quien le pueda servir, pasale el dato.',
      cta: 'Inscribirme',
      url: 'https://forms.gle/F1DhEicTcM7EWaEs5',
    },
  },
];

export const getActividad = (slug: string) => ACTIVIDADES.find((a) => a.slug === slug);

/** Par de datos para las tarjetas: los propios, o fecha y lugar. */
export const resaltadosDe = (a: Actividad) =>
  a.resaltados ??
  [
    { icono: 'reloj' as IconName, texto: a.cuando },
    { icono: 'pin' as IconName, texto: a.donde },
  ].filter((r): r is { icono: IconName; texto: string } => Boolean(r.texto));

const porFecha = (a: Actividad, b: Actividad) => a.fechaISO.localeCompare(b.fechaISO);

/** Abiertas y marcadas para el inicio, la más próxima primero. */
export const actividadesDestacadas = () =>
  ACTIVIDADES.filter((a) => a.destacadaEnHome && a.estado === 'abierta').sort(porFecha);

/** Abiertas de un área, para listarlas en su página. */
export const actividadesDeArea = (areaSlug: string) =>
  ACTIVIDADES.filter((a) => a.areaSlug === areaSlug && a.estado === 'abierta').sort(porFecha);
