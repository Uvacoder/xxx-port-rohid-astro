import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/config";

const postImportResult = import.meta.glob("./posts/**/*.{md,mdx}", {
  eager: true,
});
const posts = Object.values(postImportResult).filter(
  (post) => !post.frontmatter.draft
);

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
    })),
    stylesheet: "/rss/styles.xsl",
  });
