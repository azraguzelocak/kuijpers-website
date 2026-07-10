// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Fully static output — `npm run build` writes plain HTML/CSS/JS to ./dist,
  // which can be hosted on ANY web host (Bluehost/shared Apache, Netlify,
  // Vercel-static, GitHub Pages, etc.). No server/adapter needed: the contact
  // form posts directly to Web3Forms from the browser.
  output: 'static',

  // Multi-language: English (default, unprefixed), Dutch at /nl/, German at /de/,
  // French at /fr/. Each translated page lives under its locale folder; strings
  // come from src/i18n/ui.ts via the useTranslations() helper.
  i18n: {
    locales: ['en', 'nl', 'de', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },

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