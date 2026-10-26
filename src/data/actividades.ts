import type { IconName } from '../lib/icons';

// Actividades puntuales de las áreas: charlas, jornadas, talleres, encuestas.
// Para sumar una, agregá un objeto acá: su ficha y el destacado del inicio
// salen solos. Cuando pasa la fecha, poné estado: 'cerrada'.

export type Actividad = {
  slug: string;
  nombre: string;
  /** Área que la organiza, tal como se muestra en la etiqueta. */
  area: string;
  /** Slug del área, para listarla en su página. Vacío si es de la SAE en general. */
  areaSlug?: string;
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

  hero: { kicker: string; titulo: string; texto: string; pills: string[]; imagen?: string };
  intro: string[];
  datosKicker?: string;
  datosTitulo?: string;
  datos?: { clave: string; valor: string }[];
  disertante?: {
    nombre: string;
    texto: string;
    foto?: string;
    enlace?: { texto: string; url: string };
  };
  /** Varias fechas, cada una con su inscripción. Reemplaza a `datos`. */
  jornadas?: {
    etiqueta: string;
    sede: string;
    datos: { clave: string; valor: string }[];
    cta: { texto: string; url: string };
  }[];
  temarioKicker?: string;
  temarioTitulo?: string;
  temario?: { titulo: string; texto: string }[];
  temarioNota?: string;
  /** Contenido plegable, como las recomendaciones de una campaña. */
  desplegables?: { titulo: string; texto?: string; items?: string[] }[];
  /** Enlace a otra pieza relacionada. */
  enlace?: { kicker: string; titulo: string; texto: string; cta: string; url: string };
  inscripcion?: { texto: string; cta: string; url: string };
  cierreKicker?: string;
  cierreTitulo?: string;
};

export const ACTIVIDADES: Actividad[] = [
  {
    slug: 'chernobil',
    nombre: 'Accidente de Chernóbil',
    area: 'SAE',
    fechaISO: '2026-11-05',
    subtitulo: 'Clase abierta · Reactores Nucleares',
    resumen:
      'A 40 años del accidente de 1986: qué pasó en el reactor 4 y qué cambió en la seguridad nuclear. No hace falta saber de física nuclear para seguirla.',
    cuando: 'Jueves 5 de noviembre · 19 a 21 h',
    donde: 'Aula Magna · Sede Medrano',
    estado: 'abierta',
    destacadaEnHome: true,

    hero: {
      kicker: 'A 40 años del accidente de 1986',
      titulo: 'Accidente de Chernóbil',
      texto:
        'El Ing. Facundo Fraguas, docente de Reactores Nucleares en la UTN.BA y trabajador de Nucleoeléctrica Argentina, repasa qué pasó en el reactor 4 y qué cambió en la seguridad nuclear después de aquella madrugada.',
      pills: ['Jueves 05/11 · 19 a 21 h', 'Abierta a la comunidad'],
      imagen: 'https://res.cloudinary.com/pu6xe6eg/image/upload/q_auto,f_auto,w_1200/v1792706652/portada.jpg',
    },

    intro: [
      'El jueves 5 de noviembre, de 19 a 21 h, abrimos una clase de la cátedra de Reactores Nucleares para toda la comunidad de la UTN.BA: un análisis del accidente nuclear de 1986, a 40 años.',
      'La clase arranca con preguntas y respuestas para poner en común lo que ya sabemos del tema, y desde ahí avanza sobre las causas del accidente y los aprendizajes que dejó para el diseño y la operación de centrales nucleares en todo el mundo, incluida la Argentina.',
      'No hace falta ser estudiante de Química ni saber de física nuclear para seguirla. Si te interesa la energía, la ingeniería de seguridad, o simplemente siempre quisiste entender qué pasó, es para vos.',
    ],

    datos: [
      { clave: 'Fecha', valor: 'Jueves 5 de noviembre' },
      { clave: 'Horario', valor: 'De 19 a 21 h' },
      { clave: 'Lugar', valor: 'Aula Magna de la UTN.BA' },
      { clave: 'Cupo', valor: 'Abierta a toda la comunidad, hasta agotar la sala' },
    ],

    disertante: {
      nombre: 'Ing. Facundo Fraguas',
      texto:
        'Ingeniero Químico por la UTN.BA, especialista en Reactores Nucleares (UNSAM) y magíster en Energía (UBA). Trabaja desde 2015 en Nucleoeléctrica Argentina. En la UTN.BA es profesor adjunto de Reactores Nucleares, y dirige el posgrado en Energía Nuclear de la FIUBA.',
      foto: 'https://res.cloudinary.com/pu6xe6eg/image/upload/c_fill,g_face,w_240,h_240,q_auto,f_auto/v1792707901/FACUNDO.jpg',
    },

    temarioTitulo: 'Lo que vamos a ver',
    temario: [
      {
        titulo: 'Qué pasó el 26 de abril de 1986',
        texto: 'La secuencia de hechos en el reactor 4 de la central.',
      },
      {
        titulo: 'Las causas',
        texto: 'Diseño del reactor, decisiones de operación y cultura de seguridad.',
      },
      {
        titulo: 'Los aprendizajes',
        texto:
          'Qué cambió en la seguridad nuclear y cómo se aplica hoy en las centrales argentinas.',
      },
    ],

    inscripcion: {
      texto:
        'Los lugares son limitados a la capacidad del Aula Magna. Completá el formulario y te confirmamos por mail.',
      cta: 'Inscribirme',
      url: 'https://forms.gle/3Ex1CVq1peRtSobd6',
    },
  },
  {
    slug: 'campana-donacion-sangre',
    nombre: 'Campaña de donación de sangre',
    area: 'Salud',
    areaSlug: 'salud',
    fechaISO: '2026-11-02',
    subtitulo: 'Salud · Campaña',
    resumen:
      'Tres jornadas en noviembre, una en Medrano y dos en Campus, con la Fundación Hemocentro y el Hospital Gutiérrez. Cada una tiene su propia inscripción.',
    resaltados: [
      { icono: 'reloj', texto: '2, 5 y 24 de noviembre' },
      { icono: 'pin', texto: 'Sede Medrano y Sede Campus' },
    ],
    estado: 'abierta',
    destacadaEnHome: true,

    hero: {
      kicker: 'Donación de sangre',
      titulo: 'Tres jornadas para donar sin salir de la facu',
      texto:
        'En noviembre los equipos de la Fundación Hemocentro Buenos Aires y del Hospital de Niños Ricardo Gutiérrez vienen a nuestras dos sedes. Elegí la fecha que te quede más cómoda y anotate.',
      pills: ['Lunes 2/11 · Medrano', 'Jueves 5/11 · Campus', 'Martes 24/11 · Campus'],
    },

    intro: [
      'Una donación lleva menos de una hora entre la entrevista, el chequeo y la extracción, y con ese medio litro de sangre se puede ayudar a más de un paciente.',
      'Son tres jornadas, una en Medrano y dos en Campus, cada una con su propia inscripción. Abajo están los datos de cada una, los requisitos para donar y qué hacer antes y después.',
    ],

    jornadas: [
      {
        etiqueta: 'Jornada 1 · Fundación Hemocentro Buenos Aires',
        sede: 'Sede Medrano',
        datos: [
          { clave: 'Fecha', valor: 'Lunes 2 de noviembre' },
          { clave: 'Horario', valor: 'Elegís tu turno al inscribirte' },
          { clave: 'Lugar', valor: 'Sede Medrano. El aula se confirma antes de la jornada' },
        ],
        cta: { texto: 'Sacar turno en Medrano', url: 'https://v2.soloturnos.com/agenda/utn--sede-medrano' },
      },
      {
        etiqueta: 'Jornada 2 · Hospital de Niños Ricardo Gutiérrez',
        sede: 'Sede Campus',
        datos: [
          { clave: 'Fecha', valor: 'Jueves 5 de noviembre' },
          { clave: 'Horario', valor: 'De 8 a 12 h' },
          { clave: 'Lugar', valor: 'Sede Campus, Auditorio' },
        ],
        cta: { texto: 'Inscribirme para el 5/11', url: 'https://forms.gle/sPgjDaxsYcTkspMc9' },
      },
      {
        etiqueta: 'Jornada 3 · Fundación Hemocentro Buenos Aires',
        sede: 'Sede Campus',
        datos: [
          { clave: 'Fecha', valor: 'Martes 24 de noviembre' },
          { clave: 'Horario', valor: 'De 9 a 12:30 h. Elegís tu turno al inscribirte' },
          { clave: 'Lugar', valor: 'Sede Campus, Auditorio' },
        ],
        cta: { texto: 'Inscribirme para el 24/11', url: 'https://v2.soloturnos.com/agenda/utn--campus' },
      },
    ],

    temarioKicker: 'Requisitos',
    temarioTitulo: '¿Podés donar?',
    temario: [
      {
        titulo: 'Edad, peso y salud',
        texto: 'Tener entre 18 y 65 años, pesar 50 kg o más y estar con buena salud.',
      },
      {
        titulo: 'Última donación',
        texto: 'Que hayan pasado 4 meses si sos varón, o 6 meses si sos mujer.',
      },
      {
        titulo: 'Tatuajes, piercings y estudios',
        texto:
          'Esperar 6 meses después de un tatuaje, piercing, acupuntura, transfusión, endoscopía o colonoscopía.',
      },
      {
        titulo: 'Embarazo',
        texto: 'No estar embarazada y, si tuviste un parto, que hayan pasado 6 meses.',
      },
      {
        titulo: 'Medicación y viajes',
        texto:
          'No te impiden donar, pero contalo en la entrevista. Si viajaste fuera del país en el último año, avisá a dónde.',
      },
    ],
    temarioNota:
      'Antes de la extracción vas a tener una entrevista confidencial con un profesional. Respondé con sinceridad: es lo que garantiza que la sangre llegue segura a quien la recibe.',

    desplegables: [
      {
        titulo: 'Antes de donar',
        items: [
          'Llevá tu DNI o registro de conducir.',
          'No vengas en ayunas: desayuná algo liviano.',
          'Calculá alrededor de una hora entre el ingreso, la entrevista, el chequeo y la extracción.',
        ],
      },
      {
        titulo: 'Después de donar',
        items: [
          'Quedate hasta que el equipo te diga que podés irte, y aprovechá el refrigerio.',
          'Durante el resto del día tomá mucho líquido, no fumes ni tomes alcohol enseguida, y esperá unas horas para sacarte la gasa.',
          'Si te mareás, avisá: sentate con la cabeza entre las rodillas o acostate con las piernas levantadas.',
          'Si el pinchazo sangra, levantá el brazo y hacé presión durante 15 minutos. Si se forma un moretón, poné una compresa fría.',
        ],
      },
      {
        titulo: 'Para reponer hierro',
        texto:
          'En los días siguientes sumá carnes rojas magras, pollo, pescado, huevos, legumbres o verduras de hoja oscura, y acompañalas con cítricos, que ayudan a absorber el hierro.',
        items: [
          'Evitá el mate, el té, el café y las gaseosas junto con esas comidas, porque dificultan la absorción.',
        ],
      },
    ],

    enlace: {
      kicker: 'Antes de las jornadas',
      titulo: '¿Qué ingeniería hay detrás de una donación?',
      texto:
        'El viernes 30 de octubre, a las 14 h en Medrano, el Tec. Fernando M. Couto cuenta el recorrido de la sangre desde el donante hasta el paciente. No hace falta saber nada del tema.',
      cta: 'Ver la charla',
      url: '/actividades/donacion-sangre',
    },
  },
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
    fechaISO: '2026-11-05',
    subtitulo: 'Salud · Charla abierta',
    resumen:
      'Cómo revisar tus lunares, cómo elegir un protector solar que de verdad te cubra, y qué puede —y qué no— la inteligencia artificial en dermatología.',
    cuando: 'Jueves 5 de noviembre · 18 h',
    donde: 'Sede Campus · Auditorio',
    estado: 'abierta',
    destacadaEnHome: true,

    hero: {
      kicker: 'Jornada de Fotoeducación',
      titulo: 'Cuidar la piel del sol, con datos y con tecnología.',
      texto:
        'Una charla sobre prevención y detección temprana del cáncer de piel, a cargo de la dermatóloga María Pía Pedalino. También vamos a ver qué puede hacer hoy la inteligencia artificial en dermatología y cuáles son sus límites.',
      pills: ['Jueves 5/11 · 18 h', 'Sede Campus · Auditorio'],
    },

    intro: [
      'Desde la Secretaría de Asuntos Estudiantiles te invitamos a la Jornada de Fotoeducación, Innovación Tecnológica y Prevención del Cáncer de Piel, una actividad de salud pensada para toda la comunidad de la UTN.BA. Esta vez se hace en la Sede Campus, así pueden aprovecharla quienes cursan allá.',
      'Pasamos muchas horas al sol entre la cursada, el viaje y el fin de semana, y casi nunca nos fijamos en lo que eso le hace a la piel. En la charla vas a aprender a revisar tus lunares con la regla del ABCDE, a elegir un protector solar que realmente te cubra y a reconocer cuándo conviene hacer una consulta.',
      'Para quienes estudian ingeniería hay un bloque especialmente interesante: cómo se entrenan los algoritmos de visión por computadora que analizan imágenes de la piel, qué sensores y wearables miden la radiación UV en tiempo real, y por qué ninguno de esos sistemas reemplaza el ojo de un especialista.',
    ],

    datosTitulo: 'Te esperamos en Campus',
    datos: [
      { clave: 'Fecha', valor: 'Jueves 5 de noviembre' },
      { clave: 'Horario', valor: '18 h' },
      { clave: 'Lugar', valor: 'Sede Campus, Auditorio' },
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
      url: 'https://forms.gle/sYUuQEXgi1fqHRiV7',
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
