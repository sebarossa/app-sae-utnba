// Las nueve carreras de grado de la UTN.BA.
// Cada una tiene la charla en video de su director de departamento.
// Forma parte de la sección temporal de Ingreso 2027.

export type Carrera = {
  slug: string;
  nombre: string;
  gancho: string;
  charla: string;
  video: string;
  sitio: string;
  plan: string;
  extra?: { texto: string; url: string };
};

export const CARRERAS: Carrera[] = [
  {
    slug: 'civil',
    nombre: 'Ingeniería Civil',
    gancho:
      'Lo que queda en pie: puentes, edificios, rutas, presas. Es la ingeniería que se ve desde la ventanilla del colectivo.',
    charla:
      'El Ing. Marcelo Masckauchán, director del Departamento, cuenta qué actividades puede desarrollar un Ingeniero Civil, las incumbencias del título y el campo laboral.',
    video: 'jd-wCCAFOiQ',
    sitio: 'https://frba.utn.edu.ar/civil/',
    plan: 'https://frba.utn.edu.ar/civil/plan-de-estudios/',
    extra: {
      texto: 'Conocé los laboratorios',
      url: 'https://frba.utn.edu.ar/civil/organigrama-de-laboratorios/',
    },
  },
  {
    slug: 'electronica',
    nombre: 'Ingeniería Electrónica',
    gancho:
      'Lo que hay adentro de todo lo que tiene un chip: circuitos, sensores y los sistemas embebidos que controlan una planta entera.',
    charla:
      'El Ing. Mariano González, docente de tres asignaturas del Departamento, cuenta el campo en el que se desarrolla un Ingeniero Electrónico, las características de la carrera y cómo funcionan los laboratorios.',
    video: 'zBd7N0x_iGI',
    sitio: 'https://frba.utn.edu.ar/electronica/',
    plan: 'https://frba.utn.edu.ar/electronica/plan-de-estudios/',
  },
  {
    slug: 'sistemas',
    nombre: 'Ingeniería en Sistemas de Información',
    gancho:
      'No es solo programar: es entender cómo funciona una organización y diseñar el sistema que la sostiene.',
    charla:
      'El Ing. Andrés Bursztyn, Director del Departamento, detalla el campo de acción, el desempeño en desarrollo, los perfiles gerencial y emprendedor, la diferencia con Informática y la estructura de la carrera.',
    video: 'nCtOS2iDKxY',
    sitio: 'https://frba.utn.edu.ar/sistemas/',
    plan: 'https://www.frba.utn.edu.ar/sistemas/plan-de-estudios-2023',
  },
  {
    slug: 'industrial',
    nombre: 'Ingeniería Industrial',
    gancho:
      'Cómo funciona una empresa por dentro: producción, logística, costos, calidad y las decisiones que hacen que todo eso cierre.',
    charla:
      'El Ing. Guillermo Valvano, Director del Departamento, explica las incumbencias del título, la gestión en una compañía, la toma de decisiones, la logística y el diseño de producto.',
    video: 'foBMMLrr3SY',
    sitio: 'https://frba.utn.edu.ar/industrial/',
    plan: 'https://frba.utn.edu.ar/industrial/plan-07/',
  },
  {
    slug: 'mecanica',
    nombre: 'Ingeniería Mecánica',
    gancho:
      'Todo lo que se mueve y todo lo que genera energía: máquinas, motores, plantas industriales y las renovables.',
    charla:
      'El Ing. Néstor Ferré, Director del Departamento, explica los alcances del título, su incumbencia sobre la generación de energías convencionales y renovables, y el aspecto interdisciplinario de la profesión.',
    video: '3hMcwPSfjMA',
    sitio: 'https://frba.utn.edu.ar/mecanica/',
    plan: 'https://frba.utn.edu.ar/mecanica/plan-de-estudios/',
  },
  {
    slug: 'quimica',
    nombre: 'Ingeniería Química',
    gancho:
      'Transformar materia prima en producto a escala industrial. Alimentos, medicamentos, combustibles, plásticos: casi todo pasó por un proceso que alguien diseñó.',
    charla:
      'La Ing. Susana Santana, Directora del Departamento, describe el amplio campo de acción, las características de la carrera y la posibilidad de cursarla en paralelo a una experiencia laboral.',
    video: 'sFFos-Laoag',
    sitio: 'https://frba.utn.edu.ar/quimica/',
    plan: 'https://frba.utn.edu.ar/quimica/plan-de-estudios-2023-implementados-1o-2o-nivel/',
  },
  {
    slug: 'electrica',
    nombre: 'Ingeniería en Energía Eléctrica',
    gancho:
      'Generar, transportar y distribuir la energía que mueve todo lo demás: centrales, redes de alta tensión y las renovables que se están instalando ahora.',
    charla:
      'El Ing. Marcelo Hodes, director del Departamento de Ingeniería Eléctrica, cuenta qué actividades puede desarrollar un Ingeniero Electricista, las incumbencias del título y cómo es la formación en la UTN.BA.',
    video: 'ryT3pjI85-A',
    sitio: 'https://frba.utn.edu.ar/electrica/',
    plan: 'https://frba.utn.edu.ar/electrica/plan-de-estudios/',
  },
  {
    slug: 'naval',
    nombre: 'Ingeniería Naval',
    gancho:
      'Diseñar y construir lo que flota, en un país con miles de kilómetros de costa y una red fluvial enorme.',
    charla:
      'El Ing. Oscar Álvarez, Director del Departamento, detalla el campo de acción: el diseño de un buque, el trabajo en un astillero desde la planificación de reparaciones hasta el control de calidad, y el desempeño en empresas de navegación.',
    video: 'Z2cSuzX-nHI',
    sitio: 'https://frba.utn.edu.ar/naval/',
    plan: 'https://frba.utn.edu.ar/naval/plan-de-estudios/',
  },
  {
    slug: 'textil',
    nombre: 'Ingeniería Textil',
    gancho:
      'Mucho más que ropa: tejidos para la industria automotriz, geotextiles que sostienen rutas y telas técnicas para deporte de alta competencia.',
    charla:
      'El Ing. Marcelo Olivero, Director del Departamento, describe el campo profesional: el desarrollo de tejidos para la industria automotriz, el transporte público, los geotextiles y la investigación.',
    video: 'zp2GapiQ5So',
    sitio: 'https://frba.utn.edu.ar/textil/',
    plan: 'https://frba.utn.edu.ar/textil/plan-estudios-2016/',
  },
];
