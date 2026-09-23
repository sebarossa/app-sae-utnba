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
  /** Oficina concreta del área. Se muestra junto a la primera sede. */
  oficina?: string;
  /** Aclaración adicional sobre la atención. */
  nota?: string;
  /** Resumen de ubicación, usado en el directorio de /contacto. */
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
  desplegablesTitulo?: string;
  desplegables?: {
    titulo: string;
    texto?: string;
    items?: string[];
    enlaces?: { texto: string; url: string }[];
  }[];
  /** Bloque destacado que lleva a un sistema externo (catálogo, formulario, etc.). */
  enlace?: { kicker: string; titulo: string; texto: string; cta: string; url: string };
  /** Convocatoria vigente. Se destaca en la home mientras esté abierta. */
  convocatoria?: {
    etiqueta: string;
    titulo: string;
    texto: string;
    cierre: string;
    nota?: string;
    cta: { texto: string; url: string };
    detalles: { titulo: string; texto?: string; items?: string[] }[];
  };
  /** Camino de varios pasos, cada uno con su enlace. */
  pasos?: {
    kicker: string;
    titulo: string;
    nota?: string;
    items: { titulo: string; texto: string; cta: string; url: string }[];
  };
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
      oficina: 'Of. 323',
      ubicacion: 'Sede Medrano · Of. 323',
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
    desplegablesTitulo: 'Tipos de becas',
    desplegables: [
      {
        titulo: 'Beca de Ayuda Social',
        texto:
          'Un apoyo económico que busca cubrir los gastos que demanda una carrera universitaria. La otorga la UTN.BA a través de la Secretaría de Asuntos Estudiantiles.',
      },
      {
        titulo: 'Beca de Servicio',
        texto:
          'Para estudiantes de la UTN.BA que quieran desarrollar actividades técnicas, no administrativas, dentro de la Facultad. En la SAE están los requerimientos y las propuestas abiertas.',
      },
      {
        titulo: 'Beca de Investigación',
        texto:
          'Para sumarte a actividades de investigación y desarrollo tecnológico dentro de un Proyecto de Investigación y Desarrollo, en Centros y Grupos de la UTN.BA o en la UIDI.',
      },
      {
        titulo: 'Beca Manuel Belgrano',
        texto:
          'Beca nacional para promover el acceso, la permanencia y la finalización de estudios de grado y pregrado en ocho áreas consideradas clave para el desarrollo económico del país y la igualdad social.',
        enlaces: [
          {
            texto: 'Ver requisitos e inscripción',
            url: 'https://www.argentina.gob.ar/educacion/becas/becas-manuel-belgrano',
          },
        ],
      },
      {
        titulo: 'Beca Progresar',
        texto:
          'Programa nacional de becas para estudiantes de nivel superior. Los requisitos y las fechas de inscripción se publican en el sitio oficial.',
        enlaces: [
          { texto: 'Ver requisitos e inscripción', url: 'https://www.argentina.gob.ar/educacion/progresar' },
        ],
      },
    ],
    contacto: {
      emails: ['becas@frba.utn.edu.ar'],
      // La atención es siempre personalizada y se concentra en Medrano.
      oficina: 'Of. 323',
      nota: 'La atención es siempre personalizada.',
      ubicacion: 'Sede Medrano · Of. 323',
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
      oficina: 'SAE, pasillo principal',
      nota: 'Consultas en la SAE de ambas sedes.',
      ubicacion: 'Sede Campus · SAE, pasillo principal',
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
    convocatoria: {
      etiqueta: 'Convocatoria abierta',
      titulo: 'Programa PILA Presencial 2027-1',
      texto:
        'Cursá parte de tu carrera de grado en una universidad de América Latina, con reconocimiento académico pleno de las materias al volver.',
      cierre: 'Postulaciones hasta el 23 de octubre',
      nota: 'La documentación y las consultas se envían a intercambios@frba.utn.edu.ar.',
      cta: {
        texto: 'Descargar el formulario',
        url: 'https://docs.google.com/document/d/1cih7Wh02jJztBgIJbUWV0c-yo4IeDIrv/edit?usp=sharing&rtpof=true&sd=true',
      },
      detalles: [
        {
          titulo: 'Requisitos y qué cubre la beca',
          items: [
            'Ser estudiante regular de grado.',
            'Tener al menos el 40 % de la carrera aprobada.',
            'La universidad de destino cubre hospedaje y alimentación.',
            'El pasaje aéreo no está financiado: corre por tu cuenta.',
          ],
        },
        {
          titulo: 'Destinos y cupos',
          texto: 'Hay 2 cupos en total, uno por institución.',
          items: [
            'Universidad Pedagógica y Tecnológica de Colombia (UPTC).',
            'Universidad Nacional de Asunción, Paraguay (UNA).',
          ],
        },
        {
          titulo: 'Documentación a presentar',
          texto: 'Para las dos instituciones:',
          items: [
            'Formulario PILA.',
            'Certificado analítico con promedio.',
            'CV.',
            'Copia del DNI.',
            'Solo para UPTC (Colombia): carta de presentación dirigida a Claudia Milena Díaz Ulloa, Directora de Relaciones Internacionales, y carta de motivos del estudiante.',
            'Si quedás seleccionado, te van a pedir documentación adicional específica.',
          ],
        },
        {
          titulo: 'Cómo completar el Formulario PILA',
          items: [
            'Coordinador Institucional: el referente de Relaciones Internacionales de la Facultad.',
            'Responsable Académico: el secretario académico o el director de tu carrera, que es quien garantiza el reconocimiento de las materias.',
          ],
        },
      ],
    },
    listaTitulo: 'Programas y destinos',
    lista: [
      'Becas PILA — intercambio con universidades de América Latina',
      'Becas IAESTE — pasantías técnicas en el exterior',
      'Convenios vigentes con universidades de todo el mundo',
    ],
    contacto: {
      emails: ['intercambios@frba.utn.edu.ar'],
      oficina: 'Of. 323',
      ubicacion: 'Sede Medrano · Of. 323',
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
      'ORADIS, Orientación y Apoyo para Personas con Discapacidad, coordina, asesora y difunde las acciones que hacen posible un acceso equitativo a la educación para personas con movilidad o comunicación reducida.',
    pasos: {
      kicker: 'Cómo acceder',
      titulo: 'Son dos pasos',
      nota: 'Informar tu discapacidad no es obligatorio, y tampoco hace falta presentar el CUD. Lo que compartas es confidencial y solo se usa para poder acompañarte mejor.',
      items: [
        {
          titulo: 'Registrate',
          texto:
            'Un formulario breve con tus datos. Queda como registro para que, cuando pidas algo, ya sepamos cómo acompañarte.',
          cta: 'Completar el registro',
          url: 'https://bit.ly/REGISTROPCD',
        },
        {
          titulo: 'Pedí lo que necesites',
          texto:
            'Una reunión, información, un cambio de curso, ayuda con la inscripción a materias o ajustes sobre la cursada.',
          cta: 'Hacer una solicitud',
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSf-S7RbxRKQbWEBjRw_ZrMIzv4Su5p3t0W3OUo72zFr5m-Npw/viewform',
        },
      ],
    },
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
        titulo: 'Recursos disponibles',
        items: [
          'Acompañamiento en la etapa del ingreso.',
          'Libro del Módulo B, Ingreso Universitario, en sistema Braille.',
          'Becas de apuntes y fotocopias para estudiantes con discapacidad.',
          'Pupitres adaptados para personas con movilidad reducida.',
          'Acompañamiento en gestiones académicas.',
          'Detección de puntos inaccesibles y barreras arquitectónicas.',
        ],
      },
      {
        titulo: 'Nuestra misión',
        items: [
          'Gestionar acciones que promuevan la inclusión de personas en situación de discapacidad, asegurando un acceso equitativo a la educación.',
          'Potenciar la autonomía de los estudiantes con discapacidad.',
          'Capacitar a la comunidad universitaria en accesibilidad, inclusión y diseño universal.',
          'Garantizar la participación y la formación profesional de las personas con discapacidad en el ámbito académico.',
          'Si conocés a alguien de la comunidad universitaria en situación de discapacidad, contale que el área existe.',
        ],
      },
    ],
    contacto: {
      emails: ['oradis@frba.utn.edu.ar'],
      telefonos: [{ label: 'Teléfono', numero: '011 4867 7750 int. 7823' }],
      oficina: 'Of. 320, 3° piso',
      nota: 'Funciona dentro de la SAE. Responsable del área: Lic. Cecilia M. A. Salas.',
      ubicacion: 'Sede Medrano · Of. 320, 3° piso',
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
      emails: ['adp@frba.utn.edu.ar'],
      telefonos: [
        {
          label: 'Bolsa de trabajo',
          numero: '011 4867 7600',
          nota: 'Lunes a viernes de 9:30 a 15:30 h',
        },
        { label: 'Desarrollo Profesional', numero: '011 4867 7581' },
      ],
      oficina: 'Of. 320',
      ubicacion: 'Sede Medrano · Of. 320',
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
      emails: ['utnsolidaria@frba.utn.edu.ar'],
      oficina: 'Of. 323',
      ubicacion: 'Sede Medrano · Of. 323',
      sedes: ['medrano'],
    },
  },
  {
    slug: 'licencia-estudiantil',
    nombre: 'Licencia Estudiantil',
    icono: 'documento',
    acento: 'rojo',
    resumen: 'Frená los plazos académicos sin perder lo que ya cursaste.',
    descripcion:
      'Es un derecho estudiantil aprobado por el Consejo Superior. Si algo te impide seguir el ritmo de la cursada, podés pedir una licencia: los plazos se suspenden y conservás lo que ya lograste.',
    listaTitulo: 'Qué te permite',
    lista: [
      'Suspender los plazos académicos: durante la licencia no corren los vencimientos de regularidad ni la presentación de tesis.',
      'Reprogramar instancias: parciales, trabajos prácticos y otras evaluaciones se pueden mover, siempre que su naturaleza lo permita.',
      'Congelar tu situación académica: conservás los derechos alcanzados. Si ya aprobaste la mitad de los parciales de una materia, al volver rendís solo los que faltan.',
    ],
    desplegablesTitulo: 'Más información',
    desplegables: [
      {
        titulo: 'Por qué motivos podés pedirla',
        items: [
          'Trabajo',
          'Matrimonio',
          'Embarazo, maternidad y posparto',
          'Paternidad',
          'Adopción o guarda preadoptiva con fines de adopción',
          'Atención del grupo familiar',
          'Fallecimiento',
          'Instancias o eventos deportivos, académicos, científicos o culturales',
          'Representación del claustro',
          'Actividades de intercambio en universidades o instituciones, en el país o en el exterior',
          'Accidentes, afecciones o lesiones de corto tratamiento',
          'Accidentes, enfermedades, afecciones o lesiones de largo tratamiento',
          'Donación de órganos',
        ],
      },
      {
        titulo: 'Cómo se solicita',
        texto:
          'Primero asesorate en la SAE de cualquiera de las dos sedes. Después presentás la documentación por Mesa de Entradas.',
        items: [
          'Formulario de solicitud completo.',
          'Fotocopia de tu DNI.',
          'Documentación respaldatoria, que depende del motivo que invoques según la Ordenanza 1705/2019.',
        ],
        enlaces: [
          {
            texto: 'Descargar el formulario',
            url: 'https://www.frba.utn.edu.ar/wp-content/uploads/2019/10/FORMULARIO-LICENCIA-ESTUDIANTIL-vd.doc',
          },
          {
            texto: 'Leer la Ordenanza 1705/2019',
            url: 'http://csu.rec.utn.edu.ar/docs/php/salida_nuevo_sitio_rectorado.php3?tipo=ORD&numero=1705&anio=0&facultad=CSU',
          },
        ],
      },
    ],
    contacto: {
      emails: ['sae@frba.utn.edu.ar'],
      nota: 'Podés asesorarte en la SAE de cualquiera de las dos sedes antes de presentar la solicitud.',
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
