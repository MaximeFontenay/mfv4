import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.maximefontenay.fr",
  integrations: [vue(), tailwind(), sitemap()],
  build: {
    trailingSlash: "always",
    inlineStylesheets: `never`,
  },
});
