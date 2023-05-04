// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "http://stallone.dev",
  integrations: [tailwind()],
  base: "/12",
});
