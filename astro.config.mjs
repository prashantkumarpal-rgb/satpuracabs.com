import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://satpuracabs.com",
  output: "server",
  trailingSlash: "never",
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: { enabled: false },
  }),
});
