import Link from "next/link";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { latestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Latest Articles",
  description: "Browse the latest technology news, practical guides, reviews, and AI insights from TechPulseDaily.",
};

const perPage = 6;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string | string[] }>;
}) {
  const params = searchParams ? await searchParams : {};
  const currentPage = Number(Array.isArray(params.page) ? params.page[0] : params.page ?? "1") || 1;
  const totalPages = Math.max(1, Math.ceil(latestArticles.length / perPage));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * perPage;
  const visibleArticles = latestArticles.slice(start, start + perPage);

  return (
    <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Latest Articles</h1>
        </div>
        <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
          Back to home
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {!visibleArticles.length ? <p className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">No reviewed articles are published yet.</p> : null}

      <Pagination currentPage={safePage} totalPages={totalPages} basePath="/articles" />
    </div>
  );
}
