import type { IconName } from '../lib/icons';

export type Red = { tipo: 'instagram' | 'facebook'; handle: string; url: string };

/** Una franja de atención concreta: dónde, cuándo y con quién. */
export type AgendaItem = {
  sede: string;
  lugar: string;
  cuando: string;
  quien: string;
};

export type Servicio = {
  nombre: string;
  resumen: string;
  proximamente?: boolean;
  agenda?: AgendaItem[];
  nota?: string;
  turno?: { texto: string; telefono?: string; email?: string };
};

export type Contacto = {
  emails?: string[];
  telefonos?: { label: string; numero: string; nota?: string }[];
  redes?: Red[];
  ubicacion: string;
  sedes?: string[];
};

export type Area = {
  slug: string;
  nombre: string;
  icono: IconName;
  acento: 'rojo' | 'dorado';
  resumen: string;
  descripcion: string;
  listaTitulo?: string;
  lista?: string[];
  serviciosTitulo?: string;
  servicios?: Servicio[];
  desplegables?: { titulo: string; items: string[] }[];
  /** Bloque destacado que lleva a un sistema externo (catálogo, formulario, etc.). */
  enlace?: { kicker: string; titulo: string; texto: string; cta: string; url: string };
  contacto: Contacto;
  extra?: { titulo: string; filas: { clave: string; valor: string }[] }[];
  destacado?: boolean;
  enlaceInterno?: string;
};

export const AREAS: Area[] = [
  {
    slug: 'salud',
    nombre: 'Salud',
    icono: 'salud',
    acento: 'rojo',
    resumen: 'Consultorio médico, nutrición y consultoría psicológica.',
    descripcion:
      'Ofrece a la comunidad universitaria servicios médicos promoviendo el cuidado de la salud y el bienestar.',
    serviciosTitulo: 'Servicios',
    servicios: [
      {
        nombre: 'Consultorio Médico',
        resumen: 'Medrano y Campus',
        agenda: [
          {
            sede: 'Sede Medrano',
            lugar: 'Medrano 951, 4° piso',
            cuando: 'Lunes de 16:00 a 18:00 h',
            quien: 'Dr. Juan Villani',
          },
          {
            sede: 'Sede Medrano',
            lugar: 'Medrano 951, 4° piso',
            cuando: 'Martes de 18:00 a 21:00 h',
            quien: 'Dr. Fernando Postare',
          },
          {
            sede: 'Sede Campus',
            lugar: 'Mozart 2300, 1° piso — junto a la Biblioteca',
            cuando: 'Lunes a viernes de 8:00 a 14:00 h',
            quien: 'Enfermera María Verónica Barraza',
          },
        ],
        turno: {
          texto:
            'Acercate al Consultorio Médico de la Sede Medrano o llamá, dentro del horario de atención.',
          telefono: '011 4867 7500 int. 7688',
        },
      },
      {
        nombre: 'Consultorio de Nutrición',
        resumen: 'Viernes en Medrano',
        agenda: [
          {
            sede: 'Sede Medrano',
            lugar: 'Medrano 951, 4° piso',
            cuando: 'Viernes de 13:30 a 15:30 h',
            quien: 'Lic. Valeria Ronga',
          },
        ],
        turno: {
          texto:
            'Acercate al Consultorio Médico de la Sede Medrano, llamá o escribile directamente.',
          telefono: '011 4867 7500 int. 7688',
          email: 'vronga@frba.utn.edu.ar',
        },
      },
      {
        nombre: 'Consultoría Psicológica',
        resumen: 'Lunes en Medrano · virtual o presencial',
        agenda: [
          {
            sede: 'Sede Medrano',
            lugar: 'Medrano 951, 4° piso',
            cuando: 'Lunes de 9:30 a 14:00 h',
            quien: 'Lic. Viviana Acosta',
          },
        ],
        nota: 'Se atiende de forma virtual y presencial.',
        turno: {
          texto:
            'Acercate al Consultorio Médico de la Sede Medrano, llamá o escribile directamente.',
          telefono: '011 4867 7500 int. 7688',
          email: 'vacosta@frba.utn.edu.ar',
        },
      },
      {
        nombre: 'Odontología',
        resumen: 'Horarios a confirmar',
        proximamente: true,
        nota: 'Próximamente informamos los nuevos horarios de atención.',
      },
      {
        nombre: 'Orientación Vocacional',
        resumen: 'A coordinar',
        nota: 'Consultá por disponibilidad y turnos escribiendo a salud@frba.utn.edu.ar.',
      },
    ],
    contacto: {
      emails: ['salud@frba.utn.edu.ar'],
      // El número con interno ya es el completo: una sola fila alcanza.
      telefonos: [{ label: 'Teléfono', numero: '011 4867 7500 int. 7713' }],
      ubicacion: 'Sede Medrano',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'becas',
    nombre: 'Becas',
    icono: 'becas',
    acento: 'dorado',
    resumen: 'Ayuda económica, becas de servicio, investigación, Progresar y más.',
    descripcion:
      'Busca promover la igualdad de oportunidades, facilitando el acceso y la permanencia en la universidad.',
    listaTitulo: 'Tipos de becas',
    lista: [
      'Beca de Ayuda Social',
      'Beca de Servicio',
      'Beca de Investigación',
      'Beca Manuel Belgrano',
      'Beca Progresar',
    ],
    contacto: {
      emails: ['becas@frba.utn.edu.ar'],
      // La atención es siempre personalizada y se concentra en Medrano.
      ubicacion: 'Atención personalizada en Sede Medrano',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'deportes',
    nombre: 'Deportes',
    icono: 'deportes',
    acento: 'rojo',
    resumen: 'Nueve disciplinas, torneos y competencias universitarias.',
    descripcion:
      'Ofrece actividades deportivas variadas, incluyendo torneos y participación en eventos universitarios.',
    listaTitulo: 'Disciplinas',
    lista: [
      'Ajedrez',
      'Futsal',
      'Handball',
      'Rugby',
      'Tenis de mesa',
      'Vóley',
      'Básquet',
      'Fútbol',
      'Running + Funcional',
    ],
    contacto: {
      emails: ['sae@frba.utn.edu.ar'],
      redes: [
        {
          tipo: 'instagram',
          handle: '@deportes.utnba',
          url: 'https://instagram.com/deportes.utnba',
        },
      ],
      ubicacion: 'Oficina en Sede Campus · Consultas en la SAE de ambas sedes',
      sedes: ['campus', 'medrano'],
    },
    destacado: true,
    enlaceInterno: '/deportes',
  },
  {
    slug: 'intercambios',
    nombre: 'Intercambios',
    icono: 'intercambios',
    acento: 'dorado',
    resumen: 'Becas y convenios con universidades de todo el mundo.',
    descripcion:
      'Amplía programas de intercambios y becas, consolida convenios globales, fomenta la participación estudiantil en actividades internacionales y promueve el retorno de los conocimientos adquiridos.',
    listaTitulo: 'Programas y destinos',
    lista: [
      'Becas PILA — intercambio con universidades de América Latina',
      'Becas IAESTE — pasantías técnicas en el exterior',
      'Convenios vigentes con universidades de todo el mundo',
    ],
    contacto: {
      emails: ['intercambios@frba.utn.edu.ar'],
      ubicacion: 'Sede Medrano',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'oradis',
    nombre: 'Inclusión y Accesibilidad — ORADIS',
    icono: 'oradis',
    acento: 'rojo',
    resumen: 'Acceso, permanencia y egreso en condiciones de equidad.',
    descripcion:
      'Promover políticas y acciones que garanticen la inclusión y la accesibilidad en el ámbito universitario, asegurando el acceso, la permanencia y el egreso en condiciones de equidad para las personas con discapacidad.',
    listaTitulo: 'Qué hacemos',
    lista: [
      'Acompañamiento integral a estudiantes',
      'Asesoramiento a docentes y equipos de cátedra',
      'Articulación con áreas institucionales',
      'Identificación y eliminación de barreras de accesibilidad',
      'Promoción del diseño universal',
      'Formación y sensibilización de la comunidad universitaria',
    ],
    desplegables: [
      {
        titulo: '¿Qué gestiones podés solicitar?',
        items: [
          'Acompañamiento en el ingreso a la universidad',
          'Apoyo en gestiones académicas (inscripciones, cursada, etc.)',
          'Implementación de ajustes razonables',
          'Acceso a materiales adaptados (por ejemplo, en Braille)',
          'Información sobre becas y recursos disponibles',
          'Identificación de barreras de accesibilidad',
        ],
      },
      {
        titulo: 'Recursos disponibles',
        items: [
          'Libro del Módulo B (Ingreso Universitario) en sistema Braille',
          'Becas de apuntes y fotocopias',
          'Pupitres adaptados',
          'Acompañamiento personalizado',
        ],
      },
    ],
    contacto: {
      emails: ['oradis@frba.utn.edu.ar'],
      telefonos: [{ label: 'ORADIS', numero: '011 4867 7500 int. 7823' }],
      ubicacion: 'Sede Medrano',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'desarrollo-profesional',
    nombre: 'Desarrollo Profesional',
    icono: 'trabajo',
    acento: 'dorado',
    resumen: 'Tu CV, tu primera pasantía y la bolsa de trabajo de la facultad.',
    descripcion:
      'Te acompaña para que la carrera se traduzca en trabajo: habilidades que complementan lo académico, y el puente directo con las empresas que buscan perfiles de la UTN.',
    enlace: {
      kicker: 'Bolsa de trabajo',
      titulo: 'Talentia, nuestro portal de empleo',
      texto:
        'Sea tu primera experiencia laboral o un nuevo desafío, acá empieza. Te registrás con unos pocos datos y en minutos ya estás viendo todas las búsquedas activas.',
      cta: 'Entrar a Talentia',
      url: 'https://utnba.talentia.com/portal/home',
    },
    listaTitulo: 'En qué te podemos ayudar',
    lista: [
      'Acompañarte en tus búsquedas laborales',
      'Armar tu CV desde cero, o mejorar el que ya tenés',
      'Asesorarte entre una pasantía y un tiempo completo',
      'Acercarte las mejores oportunidades del mercado',
      'Traer empresas líderes a la Facultad para que las conozcas de cerca',
      'Escuchar cómo te fue: las tutorías nos sirven para mejorar las pasantías',
    ],
    desplegables: [
      {
        titulo: 'Cómo trabajamos',
        items: [
          'Los estudiantes son nuestra razón de ser: todo lo que hacemos se orienta a su satisfacción.',
          'Mejoramos de forma continua bajo el Sistema de Gestión de Calidad ISO 9001.',
          'Buscamos generar el hábito del trabajo en equipo, la participación, la adaptación al cambio, la honestidad, la confianza y la creatividad.',
        ],
      },
    ],
    contacto: {
      emails: ['bolsa@frba.utn.edu.ar', 'adp@frba.utn.edu.ar'],
      telefonos: [
        {
          label: 'Bolsa de trabajo',
          numero: '011 4867 7600',
          nota: 'Lunes a viernes de 9:30 a 15:30 h',
        },
        { label: 'Desarrollo Profesional', numero: '011 4867 7581' },
      ],
      ubicacion: 'Sede Medrano',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'biblioteca',
    nombre: 'Biblioteca',
    icono: 'biblioteca',
    acento: 'rojo',
    resumen: 'De lunes a viernes, de 9 a 21 h, en las dos sedes.',
    descripcion:
      'Salas de lectura, préstamo de material y espacios de estudio en Medrano y en el Campus. Abierta a toda la comunidad universitaria y al público en general.',
    enlace: {
      kicker: 'Catálogo en línea',
      titulo: 'Buscá, reservá y renová',
      texto:
        'Desde el catálogo podés ver qué ejemplares hay en cada sede, reservarlos y renovar tus préstamos. Se entra con el usuario institucional.',
      cta: 'Entrar al catálogo',
      url: 'https://biblioteca.frba.utn.edu.ar/opac_login.php',
    },
    listaTitulo: 'Horarios · ambas sedes',
    lista: [
      'Atención al público: lunes a viernes de 9:00 a 21:00 h',
      'Sala de lectura: lunes a viernes de 9:00 a 20:30 h',
    ],
    desplegables: [
      {
        titulo: 'Consulta en sala',
        items: [
          'Público en general: dejando en depósito una identificación válida, cualquier persona puede pedir libros para leerlos en la Sala de Lectura. El documento se reintegra al devolver el libro.',
          'Comunidad universitaria: se accede con el usuario institucional.',
          'Hasta 4 libros a la vez por usuario.',
          'La consulta es en el día.',
        ],
      },
      {
        titulo: 'Préstamo a domicilio',
        items: [
          'Solo para la comunidad universitaria, con usuario institucional.',
          'Hasta 2 libros por usuario a la vez.',
          'Cada préstamo dura 10 días hábiles.',
          'Se renueva desde la web o en persona, en la misma sede donde retiraste el ejemplar.',
        ],
      },
      {
        titulo: 'Reservas y renovaciones',
        items: [
          'Las reservas se hacen desde el catálogo, con el usuario institucional.',
          'Cuando la reserva entra en vigencia tenés 3 días hábiles para retirar el ejemplar en la sede donde está. Pasado ese plazo, se cae.',
          'Las renovaciones se hacen dentro de las 48 h previas al vencimiento, por la web o presencialmente con el libro.',
          'Hasta 2 renovaciones de 10 días hábiles por libro. Para una tercera hay que acercarse con el ejemplar a la sede.',
        ],
      },
      {
        titulo: 'Devoluciones, demoras y extravíos',
        items: [
          'La devolución no es personal: puede hacerla otra persona, siempre que el ejemplar esté en el mismo estado en que se retiró.',
          'Devolver tarde suspende 3 días por cada día de retraso, y se acumula por cada obra demorada.',
          'Aun estando sancionado, podés seguir haciendo consultas en sala en las mismas condiciones que el resto.',
          'Los libros extraviados se reponen de inmediato; hasta hacerlo no se pueden pedir nuevos préstamos. Si la obra no se consigue, la Dirección de la Biblioteca indica cuál puede reemplazarla.',
        ],
      },
    ],
    extra: [
      {
        titulo: 'Dónde está',
        filas: [
          { clave: 'Medrano', valor: 'Medrano 951, planta baja' },
          { clave: 'Campus', valor: 'Mozart 2300, 1° piso — Edificio Rojo' },
        ],
      },
    ],
    contacto: {
      emails: ['biblioteca@frba.utn.edu.ar'],
      telefonos: [
        { label: 'Biblioteca Medrano', numero: '011 4867 7572' },
        { label: 'Biblioteca Campus', numero: '011 4867 7500 int. 7235' },
      ],
      ubicacion: 'Sede Medrano y Campus',
      sedes: ['medrano', 'campus'],
    },
  },
  {
    slug: 'utn-solidaria',
    nombre: 'UTN Solidaria',
    icono: 'solidaria',
    acento: 'dorado',
    resumen: 'Donaciones, voluntariado y trabajo con organizaciones sociales.',
    descripcion:
      'Recolecta y gestiona donaciones para destinarlas a organizaciones, fortaleciendo la organización comunitaria y la participación ciudadana.',
    listaTitulo: 'Acciones',
    lista: ['Trabajo en proyectos sociales', 'Promoción de la solidaridad'],
    contacto: {
      emails: ['utnsolidaria@frba.utn.edu.ar', 'vinculacionsocial@frba.utn.edu.ar'],
      ubicacion: 'Sede Medrano y Campus',
      sedes: ['medrano', 'campus'],
    },
  },
];

export const SAE = {
  email: 'sae@frba.utn.edu.ar',
  instagram: { handle: '@sae.utn.ba', url: 'https://www.instagram.com/sae.utn.ba' },
  facebook: { handle: '@saeutnba', url: 'https://facebook.com/saeutnba' },
};

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
