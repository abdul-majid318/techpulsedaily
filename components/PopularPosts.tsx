import Link from "next/link";
import type { Article } from "@/lib/articles";

export function PopularPosts({ articles }: { articles: Article[] }) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Popular</p>
      <ul className="mt-4 space-y-3">
        {articles.map((article, index) => (
          <li key={article.slug} className="flex gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {index + 1}
            </span>
            <div>
              <Link href={`/article/${article.slug}`} className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                {article.title}
              </Link>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{article.category.replace(/-/g, " ")} · {article.readingTime} min</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
