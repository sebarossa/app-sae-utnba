# App SAE · UTN.BA

Web app mobile-first con los servicios de la **Secretaría de Asuntos Estudiantiles** de la UTN,
Facultad Regional Buenos Aires. Pensada para que los aspirantes la abran desde el celular durante
la Expo Carreras.

Hecha con [Astro](https://astro.build) · sitio 100 % estático, sin base de datos ni backend.

## Poner en marcha

```bash
npm install
npm run dev      # http://localhost:4321 (también accesible desde el celular en la misma red)
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build final
```

`npm run dev` levanta con `--host`, así que podés abrirlo desde el teléfono usando la IP que
imprime la consola. Útil para probarlo tal como lo van a ver los chicos.

## Cómo está organizado

```
src/
  data/
    areas.ts       ← las 8 áreas de la SAE: descripción, servicios, mails, teléfonos
    deportes.ts    ← oferta deportiva 2026: días, horarios, sede de cada entrenamiento
    sedes.ts       ← direcciones y links a Google Maps
  lib/icons.ts     ← set de íconos SVG (trazo 1.6, 24×24)
  components/      ← Icon, AreaCard, Contacto
  layouts/Base.astro
  pages/
    index.astro          → /
    areas/[slug].astro   → /areas/salud, /areas/becas, …
    deportes.astro       → /deportes
    contacto.astro       → /contacto
```

**Para actualizar contenido no hace falta tocar HTML**: todo vive en `src/data/`. Agregar un
deporte es sumar un objeto a `DEPORTES`; agregar un área, uno a `AREAS` (su página se genera sola).

### Campos de un deporte

`dias` usa los identificadores `lun | mar | mie | jue | vie | sab` y es lo que alimenta el filtro
por día. `horario` es el texto que se muestra tal cual, así que puede describir combinaciones
(por ejemplo, martes y jueves con horarios distintos).

## Sección temporal: Ingreso 2027

`/ingreso` existe solo mientras duren las fechas de inscripción. Está hecha para borrarse sin
dejar rastro: todo su contenido vive dentro de `src/pages/ingreso.astro`, no en `src/data/`.

Incluye la subpágina `/ingreso/carreras`, con las nueve ingenierías: un gancho, la charla en video
del director de cada departamento y el link al plan de estudios. Los videos no cargan el iframe de
YouTube hasta que el usuario toca play — solo la miniatura — así la página abre rápido aunque la
red del predio esté saturada.

Para darla de baja:

1. Borrá `src/pages/ingreso.astro`, `src/pages/ingreso/carreras.astro` y `src/data/carreras.ts`.
2. Sacá la entrada `Ingreso` del array `nav` en `src/layouts/Base.astro` (está comentada).

La barra inferior se adapta sola a la cantidad de pestañas, así que no hay que tocar CSS.

## Identidad

Colores y tipografías tomados del mailing institucional de la UTN.BA:

| Token | Valor | Uso |
|---|---|---|
| `--rojo` | `#C8102E` | color institucional, acentos y CTA |
| `--dorado` | `#B8933E` | acento secundario, pregrado y deportes selectivos |
| `--tinta` | `#111827` | fondos oscuros de hero |
| `--panel` | `#F8F9FC` | bloques secundarios |

Tipografías: **Montserrat** (títulos) y **Open Sans** (texto), cargadas desde Google Fonts.

El favicon en `public/favicon.svg` es un placeholder tipográfico. Si tenés el isologo oficial de
UTN.BA en SVG o PNG, reemplazalo ahí y en `public/manifest.webmanifest`.

## Publicar

El build es estático, así que anda en cualquier hosting. En **Vercel** se importa el repo desde
`vercel.com/new` y no hay nada que configurar: detecta Astro solo y usa estos valores.

| Ajuste | Valor |
|---|---|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Queda con deploy automático: cada push a `main` republica el sitio.

Si en cambio va a vivir en un subdirectorio (por ejemplo GitHub Pages o un servidor de la
facultad), completá `site` y `base` en `astro.config.mjs` antes de buildear.

Para la expo conviene generar un QR apuntando a la URL final y pegarlo en el stand de la SAE.

## Correcciones sobre el material de origen

`areas_sae.md` traía dos mails repetidos de otras áreas, marcados ahí mismo como dudosos:

- **Biblioteca** figuraba con `becas@frba.utn.edu.ar`. Corregido a **`biblioteca@frba.utn.edu.ar`**,
  verificado en [frba.utn.edu.ar/estudiantes/biblioteca](https://frba.utn.edu.ar/estudiantes/biblioteca/).
- **Deportes** figuraba con `salud@frba.utn.edu.ar`. El área no tiene casilla propia publicada, así
  que se usa **`sae@frba.utn.edu.ar`** (la fuente ya deriva ahí: *"consultas en la SAE ambas
  sedes"*) y se suma el Instagram **@deportes.utnba**, que sí es oficial. Si Deportes tiene mail
  propio, cambialo en `src/data/areas.ts`.

También se unificó el conteo: la SAE lista **9 disciplinas**, y la oferta 2026 tiene **10
entrenamientos semanales** repartidos en 6 grupos. El botón de la home ya no da un número que
choque con el de la tarjeta de Deportes.

## Pendiente de confirmar

- **Tenis de mesa** y **Running + Funcional** aparecen en el listado de deportes de la SAE pero no
  tienen horario en la oferta 2026; se muestran aparte, como "a confirmar".
