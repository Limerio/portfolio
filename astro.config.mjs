// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://limerio.dev',
  integrations: [sitemap()],
  compressHTML: true,
  security: {
    csp: {
      algorithm: 'SHA-256',
      scriptDirective: {
        resources: ["'self'", 'https://static.cloudflareinsights.com'],
      },
      directives: [
        "default-src 'none'",
        "img-src 'self' https://avatars.githubusercontent.com data:",
        "font-src 'self'",
        "connect-src https://cloudflareinsights.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'esbuild',
    },
  },
});
