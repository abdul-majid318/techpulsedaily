import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { getArticlesByTag, getTagData } from "@/lib/articles";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `#${slug}`,
    description: `Explore articles tagged ${slug} on TechLedger.`,
    robots: { index: false, follow: true },
  };
}

const perPage = 6;

export default async function TagPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string | string[] }>;
}) {
  const { slug } = await params;
  const tag = getTagData(slug);
  const items = getArticlesByTag(slug);
  const pageParams = searchParams ? await searchParams : {};
  const currentPage = Number(Array.isArray(pageParams.page) ? pageParams.page[0] : pageParams.page ?? "1") || 1;
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * perPage;
  const visibleArticles = items.slice(start, start + perPage);

  if (!items.length) {
    notFound();
  }

  return (
    <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Tag</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">#{tag.name}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{tag.count} articles discussing {slug}.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <Pagination currentPage={safePage} totalPages={totalPages} basePath={`/tag/${slug}`} />
    </div>
  );
}
