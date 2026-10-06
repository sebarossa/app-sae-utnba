// Actividades puntuales de las áreas: charlas, jornadas, talleres.
// Para sumar una, agregá un objeto acá: su ficha y el destacado del inicio
// salen solos. Cuando pasa la fecha, poné estado: 'cerrada'.

export type Actividad = {
  slug: string;
  nombre: string;
  /** Área que la organiza, tal como se muestra en la etiqueta. */
  area: string;
  subtitulo: string;
  resumen: string;
  cuando: string;
  donde: string;
  estado: 'abierta' | 'cerrada';
  destacadaEnHome?: boolean;

  hero: { kicker: string; titulo: string; texto: string; pills: string[] };
  intro: string[];
  datos: { clave: string; valor: string }[];
  disertante?: { nombre: string; texto: string };
  temario?: { titulo: string; texto: string }[];
  inscripcion: { texto: string; cta: string; url: string };
};

export const ACTIVIDADES: Actividad[] = [
  {
    slug: 'fotoeducacion',
    nombre: 'Fotoeducación y prevención del cáncer de piel',
    area: 'Salud',
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
export const actividadDestacada = () =>
  ACTIVIDADES.find((a) => a.destacadaEnHome && a.estado === 'abierta');
