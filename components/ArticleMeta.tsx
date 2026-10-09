import type { Article } from "@/lib/articles";

export function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
      <span className="font-medium text-slate-700 dark:text-slate-200">{article.author}</span>
      <span>•</span>
      <time dateTime={article.publishedAt}>
        {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </time>
      <span>•</span>
      <span>{article.readingTime} min read</span>
      <span>•</span>
      <time dateTime={article.updatedAt}>
        Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </time>
    </div>
  );
}
