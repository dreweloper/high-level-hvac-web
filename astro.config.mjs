// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph, sitemap and robots.txt.
  site: 'https://highlevelhvac.com',
  // Cloudflare serves /path/index.html at /path/, so every URL ends with a slash.
  trailingSlash: 'always',
  build: { format: 'directory' }
});
