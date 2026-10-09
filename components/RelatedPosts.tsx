import Link from "next/link";
import type { Article } from "@/lib/articles";

export function RelatedPosts({ articles }: { articles: Article[] }) {
  return (
    <section>
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Related Articles</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => (
          <Link key={article.slug} href={`/article/${article.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{article.category.replace(/-/g, " ")}</p>
            <h4 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{article.title}</h4>
            <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              {article.readingTime} min read
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
