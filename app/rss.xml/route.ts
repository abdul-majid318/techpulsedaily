import { articles } from "@/lib/articles";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export async function GET() {
  const items = articles
    .map(
      (article) => `
      <item>
        <title><![CDATA[${article.title}]]></title>
        <link>${absoluteUrl(`/article/${article.slug}`)}</link>
        <guid>${absoluteUrl(`/article/${article.slug}`)}</guid>
        ${article.publishedAt ? `<pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>` : ""}
        <description><![CDATA[${article.excerpt}]]></description>
      </item>`,
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <link>${absoluteUrl("/")}</link>
        <description>Technology news, tools, and practical digital guidance.</description>
        ${items}
      </channel>
    </rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    },
  );
}
