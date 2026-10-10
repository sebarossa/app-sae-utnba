// Viajes y eventos de la SAE. Para sumar uno nuevo, agregá un objeto acá:
// la categoría, su ficha y el destacado del inicio salen solos de estos datos.

export type Viaje = {
  slug: string;
  nombre: string;
  subtitulo: string;
  resumen: string;
  cuando: string;
  donde: string;
  /** 'abierta' lo muestra destacado en el inicio con su fecha de cierre. */
  estado: 'abierta' | 'cerrada' | 'proximamente';
  cierre?: string;
  destacadoEnHome?: boolean;

  hero: { kicker: string; titulo: string; texto: string; pills: string[] };
  intro: string[];
  costo?: {
    monto: string;
    detalle: string;
    incluye: { titulo: string; texto: string }[];
    nota?: string;
  };
  requisitos?: { titulo: string; items: string[] };
  seleccion?: {
    titulo: string;
    bajada: string;
    pasos: { titulo: string; texto: string; puntajes?: { que: string; detalle?: string; pts: string }[] }[];
  };
  cronograma?: { cuando: string; que: string; final?: boolean }[];
  documentos?: { titulo: string; texto: string; url: string }[];
  inscripcion?: { texto: string; cta: string; url: string; nota?: string };
};

export const VIAJES: Viaje[] = [
  {
    slug: 'reyunos',
    nombre: 'Los Reyunos 2026',
    subtitulo: 'Módulo acreditable · Ingeniería y Desarrollo',
    resumen:
      'Una semana de ingeniería a escala real en San Rafael, Mendoza. Presas, centrales hidroeléctricas e industrias regionales, por dentro.',
    cuando: '18 al 24 de octubre de 2026',
    donde: 'CTDR Los Reyunos · San Rafael, Mendoza',
    estado: 'cerrada',
    cierre: 'La inscripción cerró el viernes 9 de octubre',
    destacadoEnHome: true,

    hero: {
      kicker: 'Convocatoria 2026',
      titulo: 'Una semana de ingeniería a escala real.',
      texto:
        'Presas, centrales hidroeléctricas, sistemas de riego e industrias regionales, recorridas por dentro con los ingenieros que las operan. Son 38 vacantes para estudiantes de la UTN.BA.',
      pills: ['18 al 24 de octubre · San Rafael', 'Inscripción hasta el viernes 9/10'],
    },

    intro: [
      'El Módulo Académico Acreditable “Ingeniería y Desarrollo” se cursa de forma intensiva en el Centro Tecnológico de Desarrollo Regional de la UTN en Los Reyunos, San Rafael, Mendoza. Son 58 horas de clases, trabajos prácticos y visitas técnicas a complejos hidroeléctricos, bodegas, aceiteras y secaderos de la región.',
      'Se aprueba con un trabajo práctico individual y se computa como una materia electiva de 3 horas en todas las carreras de la UTN.BA.',
      'La convocatoria está abierta a todas las especialidades. Por el lugar que ocupan en el programa las presas, las centrales hidroeléctricas y las líneas de alta tensión, quienes cursan Civil, Mecánica y Eléctrica van a encontrar un vínculo especialmente directo con su formación.',
    ],

    costo: {
      monto: '$420.000',
      detalle:
        'por participante, en un solo pago por transferencia, hasta el viernes 16 de octubre. Los datos de la cuenta llegan solo a quienes resulten seleccionados, y el comprobante se manda por mail: no hace falta que vengas a la Facultad.',
      incluye: [
        {
          titulo: 'Incluye',
          texto:
            'Alojamiento por cinco noches, pensión completa sin bebidas, coffee breaks, toda la actividad académica, las visitas técnicas y los traslados internos en la región.',
        },
        {
          titulo: 'El micro lo pone la Facultad',
          texto: 'El traslado Buenos Aires – San Rafael y el regreso no tienen costo adicional.',
        },
      ],
      nota: 'El valor lo fija el CTDR y puede actualizarse por IPC. Si cambia antes del pago, te avisan por escrito.',
    },

    requisitos: {
      titulo: '¿Quién puede postularse?',
      items: [
        'Ser alumno o alumna regular de una carrera de grado de la UTN.BA.',
        'Tener aprobadas todas las asignaturas de 1° y 2° año de tu plan.',
        'Poder estar presente durante toda la estadía, del 18 al 24 de octubre.',
      ],
    },

    seleccion: {
      titulo: 'Cómo se eligen las 38 vacantes',
      bajada:
        'Cada postulación se evalúa con una matriz de puntaje pública, con criterios y fórmulas definidos de antemano.',
      pasos: [
        {
          titulo: 'Evalúa la Comisión de Becas',
          texto:
            'La misma comisión que el Consejo Directivo aprobó por Resolución N° 567/26, con representantes de los cuatro claustros: estudiantes, docentes, graduados y nodocentes. Quien tenga un vínculo con un postulante se excusa de puntuarlo.',
        },
        {
          titulo: 'Un puntaje de 0 a 100',
          texto:
            'Promedio y avance se toman del SIU-Guaraní; el resto lo declarás en el formulario y subís los respaldos ahí mismo.',
          puntajes: [
            { que: 'Trayectoria académica', detalle: 'promedio y avance', pts: '40' },
            {
              que: 'Participación e involucramiento',
              detalle: 'proyectos, comunidad, charlas, concursos',
              pts: '20',
            },
            {
              que: 'Experiencia y formación',
              detalle: 'ayudantías, trabajo afín, cursos',
              pts: '15',
            },
            { que: 'Carta de motivación', detalle: 'hasta 300 palabras', pts: '25' },
          ],
        },
        {
          titulo: 'Un orden de mérito',
          texto:
            'Las 38 vacantes son para los mejores puntajes, con un tope de 8 por carrera para que la delegación sea diversa. Si hay empate, define el avance en la carrera.',
        },
      ],
    },

    cronograma: [
      { cuando: 'Vie 9/10 · 23:59', que: 'Cierre de inscripción' },
      { cuando: 'Dom 11/10 · 21 h', que: 'Orden de mérito provisorio, con puntajes' },
      { cuando: 'Lun 12/10 · 15 h', que: 'Cierre de observaciones' },
      { cuando: 'Lun 12/10 · 22 h', que: 'Orden de mérito definitivo: titulares y suplentes' },
      {
        cuando: 'Vie 16/10',
        que: 'Último día de pago por transferencia, con envío del comprobante. Si alguien se baja, avisa hasta el miércoles 14 a las 12 h y la vacante pasa al primer suplente.',
      },
      { cuando: '18 al 24/10', que: 'Estadía en el CTDR Los Reyunos', final: true },
    ],

    documentos: [
      {
        titulo: 'Bases y condiciones de selección',
        texto: 'Requisitos, matriz completa con fórmulas, comisión, orden de mérito, plazos y pago.',
        url: 'https://drive.google.com/file/d/1K1jkZuc3TA3S44ZJ4UV2FeZld_6sg5IB/view?usp=sharing',
      },
      {
        titulo: 'Información relevante 2026',
        texto: 'Cronograma diario de la semana, visitas y condiciones del CTDR.',
        url: 'https://drive.google.com/file/d/1ulei4ZU4Q55u4hPOGpJNIvbdtKRh5yTX/view?usp=sharing',
      },
      {
        titulo: 'Anexo I · Programa analítico',
        texto:
          'Las 12 unidades del módulo, metodología y evaluación. Leelo antes de escribir tu carta de motivación.',
        url: 'https://drive.google.com/file/d/1SRAdD-XydVAK-pJAgkcYtSz2WqbEYQFm/view?usp=sharing',
      },
    ],

    inscripcion: {
      texto:
        'Completá el formulario con tus antecedentes y tu carta de motivación. Para inscribirte tenés que ingresar con tu cuenta institucional @frba.utn.edu.ar: todas las novedades llegan a ese correo.',
      cta: 'Postularme',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfLhVe2FGn5MgGcbpSr3TPOjH4h7LgDABCLBR2XbJa6pL5NPg/viewform',
      nota: 'Revisá también la carpeta de spam: a veces estos avisos terminan ahí.',
    },
  },
];

export const getViaje = (slug: string) => VIAJES.find((v) => v.slug === slug);
export const viajeDestacado = () =>
  VIAJES.find((v) => v.destacadoEnHome && v.estado === 'abierta');
