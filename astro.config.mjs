// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "http://stallone.dev",
  integrations: [tailwind()],
  // base 12 for adding the contents of /dist/ to the current sites root /12 folder
  // base: "/12",
});
