import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { CategoryBadge } from "@/components/CategoryBadge";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="overflow-hidden rounded-[32px] border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50/80 shadow-[0_24px_80px_-48px_rgba(109,40,217,0.38)] dark:border-violet-900/70 dark:from-slate-900 dark:via-slate-900 dark:to-violet-950/40">
      <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
        <Link href={`/article/${article.slug}`} className="group relative block min-h-[340px] overflow-hidden sm:min-h-[400px]">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-slate-950/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            Editor&apos;s pick
          </span>
        </Link>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <div className="mb-4">
            <CategoryBadge slug={article.category} name={article.category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())} />
          </div>
          <Link href={`/article/${article.slug}`}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 transition hover:text-violet-700 dark:text-white dark:hover:text-violet-300 md:text-4xl">
              {article.title}
            </h2>
          </Link>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
          <div className="mt-5 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-200">{article.author}</span>
            {article.publishedAt ? <><span>•</span><span>{new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></> : null}
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}
