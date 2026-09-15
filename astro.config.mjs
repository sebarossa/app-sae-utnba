// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Si lo publicás en un subdirectorio (ej. GitHub Pages), completá `site` y `base`.
  // site: 'https://sae.frba.utn.edu.ar',
  build: { inlineStylesheets: 'auto' },
});
