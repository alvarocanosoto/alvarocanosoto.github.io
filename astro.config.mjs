import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  // Set to your GitHub Pages URL.
  // - User/org site (repo named <username>.github.io): "https://alvarocanosoto.github.io"
  // - Project site (any other repo name): "https://alvarocanosoto.github.io/<repo-name>"
  //   and add:  base: "/<repo-name>",
  site: "https://alvarocanosoto.github.io",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
