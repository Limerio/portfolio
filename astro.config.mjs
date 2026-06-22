// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
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
