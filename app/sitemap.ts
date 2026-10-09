import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = articles.map((article) => ({
    url: absoluteUrl(`/article/${article.slug}`),
    lastModified: new Date(article.updatedAt),
  }));
  const categoryUrls = categories
    .filter((category) => articles.some((article) => article.category === category.slug))
    .map((category) => ({ url: absoluteUrl(`/category/${category.slug}`) }));

  return [
    { url: absoluteUrl("/") },
    { url: absoluteUrl("/articles") },
    { url: absoluteUrl("/about") },
    { url: absoluteUrl("/contact") },
    { url: absoluteUrl("/privacy-policy") },
    { url: absoluteUrl("/terms") },
    { url: absoluteUrl("/disclaimer") },
    { url: absoluteUrl("/editorial-policy") },
    ...articleUrls,
    ...categoryUrls,
  ];
}
