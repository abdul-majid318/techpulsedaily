"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { articles } from "@/lib/articles";

export function SearchPageClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return articles.slice(0, 12);
    }

    return articles.filter((article) => {
      const haystack = [
        article.title,
        article.excerpt,
        article.category,
        ...article.tags,
        ...article.author.split(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <label htmlFor="search" className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Search
        </label>
        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles, topics, tags, and categories"
          className="h-12 w-full rounded-full border border-slate-300 bg-slate-50 px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      <div className="mt-8">
        <p className="mb-5 text-sm text-slate-600 dark:text-slate-300">
          {query ? `${filteredArticles.length} results for “${query}”` : "Showing latest stories"}
        </p>

        {filteredArticles.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link key={article.slug} href={`/article/${article.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{article.category.replace(/-/g, " ")}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{article.author}</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            No results match your search. Try another keyword, topic, or author.
          </div>
        )}
      </div>
    </div>
  );
}
