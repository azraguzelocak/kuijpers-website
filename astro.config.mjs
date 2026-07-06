// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Old standalone Advantages page is now merged into /services.
  // Publications was renamed to Innovations — keep old links working.
  redirects: {
    '/advantages': '/services',
    '/publications': '/innovations',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});