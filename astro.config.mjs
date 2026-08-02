// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Public URL the site is served from. Canonical links and sitemap.xml are built
// from this, so it must match the live domain. Set SITE_URL in the host's build
// environment (Netlify/Vercel/Cloudflare) or edit the fallback below.
const SITE = process.env.SITE_URL ?? 'https://www.kuijperskip.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,

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

  integrations: [
    react(),
    // One sitemap per language, cross-linked with hreflang so Google serves the
    // right locale. Regenerated on every build.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', nl: 'nl', de: 'de', fr: 'fr' },
      },
    }),
  ]
});