import { vigente } from '../lib/fechas';

// Convenios y beneficios con comercios e instituciones.
// Para sumar uno, agregá un objeto acá: la categoría, su ficha y el
// destacado del inicio salen solos.

const CLOUD = 'https://res.cloudinary.com/pu6xe6eg/image/upload';

export type Beneficio = {
  slug: string;
  nombre: string;
  rubro: string;
  /** Lo que se lleva, en pocas palabras. Va grande en las tarjetas. */
  gancho: string;
  resumen: string;
  /** Quiénes pueden usarlo. */
  paraQuien: string[];
  donde: string;
  /** Último día del beneficio. Sin esto, no vence. */
  venceISO?: string;
  destacadoEnHome?: boolean;

  logo?: { url: string; sobreOscuro?: boolean };
  foto?: string;

  hero: { kicker: string; titulo: string; texto: string };

  precio?: {
    monto: string;
    periodo: string;
    deLista?: string;
    nota?: string;
  };

  incluye?: { titulo: string; texto: string }[];
  pasos?: { texto: string }[];
  cta: { texto: string; url: string; nota?: string };

  grilla?: { titulo: string; horarios: string[] }[];
  grillaNota?: string;

  extra?: {
    kicker: string;
    titulo: string;
    texto: string;
    enlaces: { texto: string; url: string }[];
  };

  enlaces?: { texto: string; url: string }[];
};

export const BENEFICIOS: Beneficio[] = [
  {
    slug: 'beast-club',
    nombre: 'BEAST Club',
    rubro: 'Gimnasio · Almagro',
    gancho: '15% off',
    resumen:
      'Descuento permanente en el pase libre de un gimnasio abierto las 24 horas, con clases incluidas y sin matrícula.',
    paraQuien: ['Estudiantes', 'Docentes', 'Graduados', 'Nodocentes'],
    donde: 'Guardia Vieja 3851, Almagro · abierto 24/7',
    destacadoEnHome: true,

    logo: { url: `${CLOUD}/q_auto,f_auto,h_120/v1794339997/logo-claro.png`, sobreOscuro: true },
    foto: `${CLOUD}/c_fill,g_auto,w_1040,h_620,q_auto,f_auto/v1794339469/sec-salon-2.jpg`,

    hero: {
      kicker: 'Beneficio para la comunidad UTN.BA',
      titulo: 'Entrená a cualquier hora, con 15% off',
      texto:
        'La UTN.BA firmó un convenio con BEAST Club: descuento permanente en el pase libre para toda la comunidad.',
    },

    precio: {
      monto: '$67.999',
      periodo: 'por mes, con el convenio',
      deLista: '$79.999',
      nota: 'El 15% es sobre el precio de lista y se mantiene siempre, aunque la tarifa aumente. El importe de arriba es el valor de hoy.',
    },

    incluye: [
      {
        titulo: 'Abierto 24 horas',
        texto:
          'Todos los días del año y a todas las áreas. Entrenás entre cursadas, de madrugada o cuando puedas.',
      },
      {
        titulo: 'Clases incluidas',
        texto: 'Seis disciplinas grupales sin costo extra. La grilla está más abajo.',
      },
      {
        titulo: 'Equipamiento',
        texto:
          '115 máquinas Gorilla, más de 7.800 kg de peso libre y 20 barras olímpicas en 832 m², repartidos en dos plantas.',
      },
      {
        titulo: 'Sin matrícula ni permanencia',
        texto: 'No hay cargo de inscripción, y te das de baja cuando quieras.',
      },
    ],

    pasos: [
      { texto: 'Tocá el botón: se abre el WhatsApp de BEAST con el mensaje ya escrito.' },
      {
        texto:
          'Completá tu número de documento o legajo al final del mensaje y envialo. Así acreditás que sos de la comunidad UTN.BA.',
      },
      { texto: 'BEAST te confirma el alta con el precio del convenio.' },
    ],

    cta: {
      texto: 'Pedir el beneficio por WhatsApp',
      url: 'https://wa.me/5491127705344?text=%C2%A1Hola%21%20Soy%20parte%20de%20la%20comunidad%20UTN.BA%20y%20quiero%20sumarme%20a%20BEAST%20con%20el%20beneficio%20del%20convenio%20%2815%25%20off%29.%20Mi%20DNI%20/%20legajo%20es%3A%20',
      nota: 'El beneficio es personal e intransferible.',
    },

    grilla: [
      { titulo: 'Stretching', horarios: ['Lun · Mié · Vie, 10:00'] },
      { titulo: 'GRIT, funcional', horarios: ['Lun · Mié · Sáb, 11:00', 'Lun · Mié · Vie, 20:00'] },
      { titulo: 'Pilates mat', horarios: ['Lun · Mié · Vie, 12:00'] },
      { titulo: 'BodyCombat', horarios: ['Lun · Mié · Vie, 18:00', 'Sáb, 10:00'] },
      { titulo: 'RPM, spinning', horarios: ['Lun · Mié · Vie, 19:00'] },
      { titulo: 'Yoga', horarios: ['Mar · Jue, 09:00 y 17:00'] },
    ],
    grillaNota: 'Cupos limitados. Se reserva desde la app del club.',

    extra: {
      kicker: 'La app del club',
      titulo: 'Kaizer',
      texto: 'BEAST usa Kaizer, una app de entrenador personal, para reservar clases y seguir tus entrenamientos.',
      enlaces: [
        { texto: 'App para iOS', url: 'https://apps.apple.com/ar/app/kaizer-entrenador-personal/id6748926600' },
        { texto: 'App para Android', url: 'https://play.google.com/store/apps/details?id=app.kaizer.kaizer&hl=es_AR' },
      ],
    },

    enlaces: [
      { texto: 'Cómo llegar', url: 'https://share.google/Pn58Pee5abzE82J8S' },
      { texto: 'beastclub.com.ar', url: 'https://beastclub.com.ar' },
      { texto: '@beastclub_ar', url: 'https://www.instagram.com/beastclub_ar/' },
    ],
  },
];

export const getBeneficio = (slug: string) => BENEFICIOS.find((b) => b.slug === slug);

export const beneficiosVigentes = () => BENEFICIOS.filter((b) => vigente(b.venceISO));

export const beneficiosDestacados = () =>
  beneficiosVigentes().filter((b) => b.destacadoEnHome);
