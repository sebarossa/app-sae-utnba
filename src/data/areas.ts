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
  telefonos?: { label: string; numero: string }[];
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
      telefonos: [{ label: 'Salud', numero: '011 4867 7550' }],
      ubicacion: 'Sede Medrano y Campus',
      sedes: ['medrano', 'campus'],
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
      'Orientación Vocacional',
    ],
    contacto: {
      emails: ['becas@frba.utn.edu.ar'],
      ubicacion: 'Sede Medrano y Campus',
      sedes: ['medrano', 'campus'],
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
      '¿Te interesa un destino que no está en la lista? Se puede gestionar el convenio',
    ],
    contacto: {
      emails: ['intercambios@frba.utn.edu.ar'],
      ubicacion: 'Sede Medrano',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'oradis',
    nombre: 'ORADIS',
    icono: 'oradis',
    acento: 'rojo',
    resumen: 'Inclusión, accesibilidad y autonomía en la vida universitaria.',
    descripcion:
      'Promueve la inclusión y la autonomía de los estudiantes, y capacita en accesibilidad a toda la comunidad universitaria.',
    listaTitulo: 'Acciones y proyectos',
    lista: [
      'Eliminar barreras arquitectónicas',
      'Adecuar la enseñanza',
      'Capacitar en inclusión y Braille',
      'Certificación ISO 9001',
      'Proyecto de accesibilidad académica',
    ],
    contacto: {
      emails: ['oradis@frba.utn.edu.ar'],
      telefonos: [{ label: 'ORADIS', numero: '011 4867 7585' }],
      ubicacion: 'Sede Medrano y Campus',
      sedes: ['medrano', 'campus'],
    },
  },
  {
    slug: 'desarrollo-profesional',
    nombre: 'Desarrollo Profesional',
    icono: 'trabajo',
    acento: 'dorado',
    resumen: 'CV, oportunidades laborales y contacto directo con empresas.',
    descripcion:
      'Ayuda a los estudiantes a adquirir habilidades adicionales, asegurando su crecimiento y facilitando su inserción laboral.',
    listaTitulo: 'Qué hacemos',
    lista: [
      'Ayudarte a encontrar empleo',
      'Mejorar tu CV',
      'Ofrecerte oportunidades',
      'Conectarte con empresas',
    ],
    contacto: {
      emails: ['adp@frba.utn.edu.ar'],
      telefonos: [
        { label: 'Desarrollo Profesional', numero: '011 4867 7581' },
        { label: 'Línea alternativa', numero: '011 4867 7600' },
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
      'Salas de lectura, préstamo de material y espacios de estudio en Medrano y en el Campus.',
    listaTitulo: 'Horarios',
    lista: [
      'Atención al público: lunes a viernes de 9:00 a 21:00 h',
      'Salas de lectura: lunes a viernes de 9:00 a 20:30 h',
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
    lista: ['Atención prioritaria a personas vulnerables', 'Promoción de la solidaridad'],
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
