// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://akabenjaboi.github.io',
  base: '/nuestro-bar/',
  vite: {
    plugins: [tailwindcss()]
  }
});