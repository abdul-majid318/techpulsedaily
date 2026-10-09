import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { CategoryBadge } from "@/components/CategoryBadge";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-3xl border border-violet-100/80 bg-white shadow-[0_12px_40px_-32px_rgba(76,29,149,0.35)] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_24px_55px_-35px_rgba(76,29,149,0.38)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-800 ${featured ? "lg:flex lg:flex-col" : ""}`}>
      <Link href={`/article/${article.slug}`} className="block overflow-hidden">
        <div className="relative h-52 w-full overflow-hidden bg-violet-100 dark:bg-slate-800">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-3">
          <CategoryBadge slug={article.category} name={article.category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())} />
        </div>
        <Link href={`/article/${article.slug}`} className="group-hover:text-slate-900 dark:group-hover:text-white">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">{article.title}</h3>
        </Link>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700 dark:text-slate-200">{article.author}</span>
            {article.publishedAt ? <><span>•</span><span>{new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></> : null}
          </div>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
}
