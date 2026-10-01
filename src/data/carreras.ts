// Las nueve carreras de grado de la UTN.BA.
// Forma parte de la sección temporal de Ingreso 2027.

export type Carrera = {
  slug: string;
  nombre: string;
  texto: string;
  sitio: string;
  plan: string;
};

export const CARRERAS: Carrera[] = [
  {
    slug: 'civil',
    nombre: 'Ingeniería Civil',
    texto:
      'Lo que queda en pie: puentes, edificios, rutas, presas. Es la ingeniería que se ve desde la ventanilla del colectivo, y va desde el proyecto y el cálculo estructural hasta la dirección de obra y el control de los materiales.',
    sitio: 'https://frba.utn.edu.ar/civil/',
    plan: 'https://frba.utn.edu.ar/civil/plan-de-estudios/',
  },
  {
    slug: 'electronica',
    nombre: 'Ingeniería Electrónica',
    texto:
      'Lo que hay adentro de todo lo que tiene un chip: circuitos, sensores, control automático y los sistemas embebidos que gobiernan desde un electrodoméstico hasta una planta entera. Es una carrera que se apoya fuerte en el trabajo de laboratorio.',
    sitio: 'https://frba.utn.edu.ar/electronica/',
    plan: 'https://frba.utn.edu.ar/electronica/plan-de-estudios/',
  },
  {
    slug: 'sistemas',
    nombre: 'Ingeniería en Sistemas de Información',
    texto:
      'No es solo programar: es entender cómo funciona una organización y diseñar el sistema que la sostiene. El campo es amplio y se adapta rápido al mercado, con salidas en desarrollo, gestión y un perfil emprendedor que la carrera empuja bastante.',
    sitio: 'https://frba.utn.edu.ar/sistemas/',
    plan: 'https://www.frba.utn.edu.ar/sistemas/plan-de-estudios-2023',
  },
  {
    slug: 'industrial',
    nombre: 'Ingeniería Industrial',
    texto:
      'Cómo funciona una empresa por dentro: producción, logística, costos, calidad y las decisiones que hacen que todo eso cierre. Es la ingeniería de la gestión, el diseño de producto y la mejora de la productividad.',
    sitio: 'https://frba.utn.edu.ar/industrial/',
    plan: 'https://frba.utn.edu.ar/industrial/plan-07/',
  },
  {
    slug: 'mecanica',
    nombre: 'Ingeniería Mecánica',
    texto:
      'Todo lo que se mueve y todo lo que genera energía: máquinas, motores, plantas industriales y generación tanto convencional como renovable. Es de las más interdisciplinarias, porque se cruza con la eléctrica, la industrial y los materiales.',
    sitio: 'https://frba.utn.edu.ar/mecanica/',
    plan: 'https://frba.utn.edu.ar/mecanica/plan-de-estudios/',
  },
  {
    slug: 'quimica',
    nombre: 'Ingeniería Química',
    texto:
      'Transformar materia prima en producto a escala industrial. Alimentos, medicamentos, combustibles, plásticos: casi todo lo que usás pasó por un proceso que alguien diseñó. El campo de acción es amplio y permite cursar en paralelo a una experiencia laboral.',
    sitio: 'https://frba.utn.edu.ar/quimica/',
    plan: 'https://frba.utn.edu.ar/quimica/plan-de-estudios-2023-implementados-1o-2o-nivel/',
  },
  {
    slug: 'electrica',
    nombre: 'Ingeniería en Energía Eléctrica',
    texto:
      'Generar, transportar y distribuir la energía que mueve todo lo demás: centrales, redes de alta tensión, distribución y las renovables que se están instalando ahora.',
    sitio: 'https://frba.utn.edu.ar/electrica/',
    plan: 'https://frba.utn.edu.ar/electrica/plan-de-estudios/',
  },
  {
    slug: 'naval',
    nombre: 'Ingeniería Naval',
    texto:
      'Diseñar y construir lo que flota, en un país con miles de kilómetros de costa y una red fluvial enorme. Incluye el proyecto de un buque, el trabajo en astillero —desde planificar reparaciones hasta el control de calidad— y el desempeño en empresas de navegación.',
    sitio: 'https://frba.utn.edu.ar/naval/',
    plan: 'https://frba.utn.edu.ar/naval/plan-de-estudios/',
  },
  {
    slug: 'textil',
    nombre: 'Ingeniería Textil',
    texto:
      'Mucho más que ropa: tejidos para la industria automotriz y el transporte público, geotextiles que sostienen rutas y terraplenes, y telas técnicas para deporte de alta competencia.',
    sitio: 'https://frba.utn.edu.ar/textil/',
    plan: 'https://frba.utn.edu.ar/textil/plan-estudios-2016/',
  },
];
