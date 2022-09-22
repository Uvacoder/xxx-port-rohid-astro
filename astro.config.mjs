import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import readingTime from "reading-time";
import { toString } from "mdast-util-to-string";

import sitemap from "@astrojs/sitemap";

function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = toString(tree);
    file.data.astro.frontmatter.readingTime = readingTime(textOnPage).text;
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
