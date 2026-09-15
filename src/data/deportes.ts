import { SEDES, type Sede } from './sedes';

export type Deporte = {
  id: string;
  nombre: string;
  grupo: string;
  emoji: string;
  /** Días normalizados para el filtro: lun | mar | mie | jue | vie | sab */
  dias: string[];
  /** Texto de días y horarios tal como se publica */
  horario: string;
  sede: Sede;
  detalleSede?: string;
};

export const DIAS = [
  { id: 'lun', corto: 'Lun', largo: 'Lunes' },
  { id: 'mar', corto: 'Mar', largo: 'Martes' },
  { id: 'mie', corto: 'Mié', largo: 'Miércoles' },
  { id: 'jue', corto: 'Jue', largo: 'Jueves' },
  { id: 'vie', corto: 'Vie', largo: 'Viernes' },
  { id: 'sab', corto: 'Sáb', largo: 'Sábado' },
];

export const DEPORTES: Deporte[] = [
  {
    id: 'voley-femenino',
    nombre: 'Vóley Femenino',
    grupo: 'Vóley',
    emoji: '🏐',
    dias: ['mar', 'jue'],
    horario: 'Martes y jueves, 20:00 a 21:30 h',
    sede: SEDES.galicia,
  },
  {
    id: 'voley-masculino',
    nombre: 'Vóley Masculino',
    grupo: 'Vóley',
    emoji: '🏐',
    dias: ['mar', 'jue'],
    horario: 'Martes 21:00 a 22:30 h · Jueves 21:30 a 23:00 h',
    sede: SEDES.galicia,
  },
  {
    id: 'voley-recreativo',
    nombre: 'Vóley Recreativo',
    grupo: 'Vóley',
    emoji: '🏐',
    dias: ['mar'],
    horario: 'Martes, 21:30 a 22:30 h',
    sede: SEDES.galicia,
  },
  {
    id: 'handball',
    nombre: 'Handball Femenino y Masculino',
    grupo: 'Handball',
    emoji: '🤾',
    dias: ['lun', 'mie'],
    horario: 'Lunes y miércoles, 19:00 a 20:30 h',
    sede: SEDES.sanjuandiego,
  },
  {
    id: 'ajedrez',
    nombre: 'Ajedrez',
    grupo: 'Ajedrez',
    emoji: '♟️',
    dias: ['sab'],
    horario: 'Sábados, 15:00 a 18:00 h',
    sede: SEDES.campus,
    detalleSede: 'Hall de la Memoria',
  },
  {
    id: 'rugby-masculino',
    nombre: 'Rugby Masculino',
    grupo: 'Rugby',
    emoji: '🏉',
    dias: ['mar', 'jue'],
    horario: 'Martes y jueves, 21:00 a 23:00 h',
    sede: SEDES.campus,
    detalleSede: 'Cancha 4',
  },
  {
    id: 'basquet-masculino',
    nombre: 'Básquet Masculino',
    grupo: 'Básquet',
    emoji: '🏀',
    dias: ['mie', 'vie'],
    horario: 'Miércoles y viernes, 21:00 a 22:30 h',
    sede: SEDES.galicia,
  },
  {
    id: 'futbol-11-masculino',
    nombre: 'Fútbol 11 Masculino',
    grupo: 'Fútbol y Futsal',
    emoji: '⚽',
    dias: ['mar', 'jue'],
    horario: 'Martes y jueves, 20:00 a 22:00 h',
    sede: SEDES.campus,
    detalleSede: 'Cancha 1',
  },
  {
    id: 'futbol-femenino',
    nombre: 'Fútbol Femenino',
    grupo: 'Fútbol y Futsal',
    emoji: '⚽',
    dias: ['mar', 'jue'],
    horario: 'Martes y jueves, 18:00 a 19:30 h',
    sede: SEDES.campus,
    detalleSede: 'Cancha 1',
  },
  {
    id: 'futsal-masculino',
    nombre: 'Futsal Masculino',
    grupo: 'Fútbol y Futsal',
    emoji: '⚽',
    dias: ['lun', 'mie'],
    horario: 'Lunes y miércoles, 20:30 a 22:00 h',
    sede: SEDES.sanjuandiego,
  },
];

/** Disciplinas sin horario publicado en la oferta 2026: se consultan en la SAE. */
export const SELECTIVOS = [
  'Atletismo',
  'Básquet Femenino',
  'Hockey Femenino',
  'Natación',
  'Tenis Masculino y Femenino',
];

export const OTRAS_DISCIPLINAS = ['Tenis de mesa', 'Running + Funcional'];

export const SEDES_DEPORTIVAS = [SEDES.campus, SEDES.galicia, SEDES.sanjuandiego];
