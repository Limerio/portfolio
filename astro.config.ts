import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "en",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
