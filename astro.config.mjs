import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://leesuhyun.com",
  // Categories renamed in Nov 2026 (Class -> Trade, Read -> Language).
  // /class/class-principles was a teaching post, now archived (archive/teaching/).
  redirects: {
    "/class": "/trade",
    "/read": "/language",
    "/class/class-principles": "/",
  },
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
