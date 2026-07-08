// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Deploy target: Vercel. Pages are prerendered by default; the contact API
  // route (prerender = false) runs as a Vercel serverless function.
  adapter: vercel(),

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