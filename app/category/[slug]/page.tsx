import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { articles, categories, getArticlesByCategory, getCategoryBySlug } from "@/lib/articles";

export async function generateStaticParams() {
  return categories.filter((category) => articles.some((article) => article.category === category.slug)).map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category not found" };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

const perPage = 6;

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string | string[] }>;
}) {
  const { slug } = await params;
  const paramsPage = searchParams ? await searchParams : {};
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const items = getArticlesByCategory(slug);
  const currentPage = Number(Array.isArray(paramsPage.page) ? paramsPage.page[0] : paramsPage.page ?? "1") || 1;
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * perPage;
  const visibleArticles = items.slice(start, start + perPage);

  return (
    <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Category</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">{category.name}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{category.description}</p>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-300">{items.length} articles</p>
        <Link href="/articles" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
          Browse all
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <Pagination currentPage={safePage} totalPages={totalPages} basePath={`/category/${slug}`} />
    </div>
  );
}
