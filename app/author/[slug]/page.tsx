import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { authors, getArticlesByAuthor, getAuthorBySlug } from "@/lib/articles";

export async function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  return {
    title: author ? `${author.name} | Author` : "Author",
    description: author ? author.bio : "Author profile",
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = getArticlesByAuthor(slug);

  return (
    <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-violet-100 text-2xl font-semibold text-violet-700 dark:border-slate-700 dark:bg-violet-950/50 dark:text-violet-200" aria-hidden="true">TP</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Author</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">{author.name}</h1>
            <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">{author.title}</p>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{author.bio}</p>
            {author.social?.length ? <div className="mt-4 flex gap-4 text-sm text-slate-700 dark:text-slate-200">{author.social.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div> : null}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Published articles</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
