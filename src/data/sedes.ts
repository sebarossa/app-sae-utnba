export type Sede = {
  id: string;
  nombre: string;
  direccion: string;
  mapa: string;
};

const mapa = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + ', CABA, Argentina')}`;

export const SEDES: Record<string, Sede> = {
  medrano: {
    id: 'medrano',
    nombre: 'Sede Medrano',
    direccion: 'Av. Medrano 951',
    mapa: mapa('UTN FRBA Av. Medrano 951'),
  },
  campus: {
    id: 'campus',
    nombre: 'Sede Campus',
    direccion: 'Mozart 2300',
    mapa: mapa('UTN FRBA Campus Mozart 2300'),
  },
  galicia: {
    id: 'galicia',
    nombre: 'Club Centro Galicia',
    direccion: 'Bartolomé Mitre 2552',
    mapa: mapa('Club Centro Galicia Bartolomé Mitre 2552'),
  },
  sanjuandiego: {
    id: 'sanjuandiego',
    nombre: 'Parroquia San Juan Diego',
    direccion: 'Av. Escalada 2858',
    mapa: mapa('Parroquia San Juan Diego Av. Escalada 2858'),
  },
};
