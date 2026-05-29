// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Old standalone Advantages page is now merged into /services.
  redirects: {
    '/advantages': '/services',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});