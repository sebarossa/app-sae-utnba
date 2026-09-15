/**
 * Íconos de línea, 24x24, trazo 1.6. El `stroke` y el `fill` se heredan
 * del contenedor para que cada área pueda pintarlos con su acento.
 */
export const ICONS = {
  salud: '<path d="M12 21s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 8.2 4.5 4.5 0 0 1 19.5 11c0 5.4-7.5 10-7.5 10Z"/><path d="M8.2 13.4h2l1.1-2.2 1.6 3.4 1.1-1.9h2"/>',
  becas: '<path d="M12 3.5 2.5 8.4 12 13.3l9.5-4.9L12 3.5Z"/><path d="M6.4 10.6v4.9c0 1.6 2.5 3 5.6 3s5.6-1.4 5.6-3v-4.9"/><path d="M21.5 8.4v5.4"/>',
  deportes: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5 9 7l1.2 3.7h3.6L15 7l-3-3.5Z"/><path d="M3.9 9.6 6.7 12l-1.1 3.6M20.1 9.6 17.3 12l1.1 3.6M8.2 20.2l2-3.6h3.6l2 3.6"/>',
  intercambios: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.3 2.4 3.5 5.4 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.4-3.5-8.5S9.7 5.9 12 3.5Z"/>',
  oradis: '<circle cx="12.6" cy="4.8" r="1.8"/><path d="M8.2 9.1 12.6 8l4.4 1.1"/><path d="M12.6 8v5.1h3.6l2.4 5.4"/><path d="M12.9 13.1a4.9 4.9 0 1 1-4.3 2.1"/>',
  trabajo: '<rect x="2.9" y="7.1" width="18.2" height="13" rx="2.2"/><path d="M8.5 7.1V5.6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"/><path d="M2.9 12.4c2.9 1.4 5.9 2.1 9.1 2.1s6.2-.7 9.1-2.1"/>',
  biblioteca: '<path d="M3.4 5.3c2.6-.9 5.2-.9 7.8 0v13.9c-2.6-.9-5.2-.9-7.8 0V5.3Z"/><path d="M20.6 5.3c-2.6-.9-5.2-.9-7.8 0v13.9c2.6-.9 5.2-.9 7.8 0V5.3Z"/><path d="M11.9 5.6v13.4"/>',
  solidaria: '<path d="M12 20.5s-7.3-4.2-7.3-9.4a4.2 4.2 0 0 1 7.3-2.8 4.2 4.2 0 0 1 7.3 2.8c0 5.2-7.3 9.4-7.3 9.4Z"/>',
  mail: '<rect x="2.8" y="4.9" width="18.4" height="14.2" rx="2.2"/><path d="m3.6 6.6 8.4 6 8.4-6"/>',
  tel: '<path d="M6.3 3.6h3l1.5 3.8-2 1.3a11.4 11.4 0 0 0 5.5 5.5l1.3-2 3.8 1.5v3a1.8 1.8 0 0 1-2 1.8C10.2 18 6 13.8 4.5 5.6a1.8 1.8 0 0 1 1.8-2Z"/>',
  pin: '<path d="M12 21.2s6.6-5.9 6.6-10.6a6.6 6.6 0 1 0-13.2 0C5.4 15.3 12 21.2 12 21.2Z"/><circle cx="12" cy="10.4" r="2.5"/>',
  reloj: '<circle cx="12" cy="12" r="8.6"/><path d="M12 6.9V12l3.3 2"/>',
  flecha: '<path d="M8.6 4.8 15.8 12l-7.2 7.2"/>',
  instagram:
    '<rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none"/>',
  facebook:
    '<path d="M14.6 21.4v-8h2.7l.5-3.4h-3.2V7.8c0-1 .3-1.7 1.7-1.7h1.6V3.1c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H8.1v3.4h2.8v8h3.7Z"/>',
  documento:
    '<path d="M14 3.2H6.9a2 2 0 0 0-2 2v13.6a2 2 0 0 0 2 2h10.2a2 2 0 0 0 2-2V8.2Z"/><path d="M14 3.2V8.2h5.1"/><path d="M8.6 13h6.8M8.6 16.6h4.5"/>',
  buscar: '<circle cx="11" cy="11" r="6.6"/><path d="m16 16 4.4 4.4"/>',
  casa: '<path d="M3.6 10.6 12 3.9l8.4 6.7v8.2a1.6 1.6 0 0 1-1.6 1.6H5.2a1.6 1.6 0 0 1-1.6-1.6v-8.2Z"/><path d="M9.5 20.4v-6.6h5v6.6"/>',
} as const;

export type IconName = keyof typeof ICONS;
