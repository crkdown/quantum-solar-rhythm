import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://solarisnutri-com.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/method", changefreq: "monthly", priority: "0.9" },
  { path: "/programs", changefreq: "weekly", priority: "0.9" },
  { path: "/masterclasses", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/rhythm-calculator", changefreq: "monthly", priority: "0.6" },
  { path: "/food-rhythm-tool", changefreq: "monthly", priority: "0.6" },
  { path: "/resources", changefreq: "monthly", priority: "0.5" },
  { path: "/shop", changefreq: "weekly", priority: "0.6" },
  { path: "/landing/masterclass", changefreq: "weekly", priority: "0.8" },
  { path: "/landing/program", changefreq: "weekly", priority: "0.8" },
];

function extractBlogSlugs(): string[] {
  const blogPostsPath = resolve("src/data/blogPosts.ts");
  const content = readFileSync(blogPostsPath, "utf-8");
  const slugMatches = content.matchAll(/slug:\s*"([^"]+)"/g);
  return Array.from(slugMatches).map((match) => match[1]);
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

const blogSlugs = extractBlogSlugs();
const blogEntries: SitemapEntry[] = blogSlugs.map((slug) => ({
  path: `/blog/${slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const allEntries = [...staticEntries, ...blogEntries];

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(allEntries));
console.log(`sitemap.xml written with ${allEntries.length} entries (${blogEntries.length} blog posts)`);
