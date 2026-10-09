import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import { Newsletter } from "@/components/Newsletter";
import { PopularPosts } from "@/components/PopularPosts";
import { articles, categories, featuredArticles, getMostPopularArticles, latestArticles, trendingArticles } from "@/lib/articles";

export default function HomePage() {
  if (!articles.length) {
    return (
      <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-violet-100 bg-gradient-to-br from-white via-sky-50/60 to-violet-50/70 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-violet-950/30 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-200">Editorial desk</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">TechLedger is preparing its first reviewed stories.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">Articles are kept out of the public library until an accountable editor has completed factual and source review. Please check back after publication.</p>
        </section>
      </div>
    );
  }

  const topArticle = featuredArticles[0] ?? articles[0];
  const secondaryArticles = featuredArticles.slice(1, 4);
  const sectionGroups = [
    { category: "artificial-intelligence", title: "AI & Machine Learning", description: "Practical perspectives on AI tools, workflows, products, and the future of work." },
    { category: "programming", title: "Programming & Development", description: "Code, tooling, and engineering systems for fast-moving teams." },
    { category: "software", title: "Software & Apps", description: "Reviews and product guidance that help readers choose better tools." },
    { category: "cybersecurity", title: "Cybersecurity", description: "Clear security guidance for stronger digital habits and safer systems." },
    { category: "how-to", title: "How-To Guides", description: "Actionable tutorials that cut through complexity and help readers fix problems quickly." },
    { category: "reviews", title: "Reviews & Comparisons", description: "Independent evaluations to help you decide with confidence." },
  ];

  return (
    <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 sm:py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 shadow-sm dark:border-violet-800 dark:bg-slate-900 dark:text-violet-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Fresh ideas for curious minds
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Tech that makes <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">life brighter.</span>
          </h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Fresh perspectives, practical guides, and the stories behind the technology shaping tomorrow.
          </p>
        </div>
        <Link href="/articles" className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700">
          Explore all stories <span aria-hidden="true">→</span>
        </Link>
      </div>

      <section className="mb-12">
        <FeaturedArticle article={topArticle} />
      </section>

      <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {secondaryArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <section className="mb-12 rounded-[28px] border border-sky-100 bg-gradient-to-br from-white via-sky-50/60 to-violet-50/70 p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-violet-950/30">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Trending Now</h2>
          <Link href="/articles" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            View all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {trendingArticles.map((article, index) => (
            <div key={article.slug} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 dark:border-slate-700 dark:bg-slate-950/70">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white ${index === 0 ? "bg-gradient-to-br from-orange-400 to-rose-500" : index === 1 ? "bg-gradient-to-br from-violet-500 to-fuchsia-500" : "bg-gradient-to-br from-sky-500 to-cyan-500"}`}>
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  <span>{article.category.replace(/-/g, " ")}</span>
                  <span>•</span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                </div>
                <Link href={`/article/${article.slug}`} className="block text-base font-medium text-slate-800 transition hover:text-slate-950 dark:text-slate-100 dark:hover:text-white">
                  {article.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Latest Articles</h2>
          <Link href="/articles" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Read all
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {latestArticles.slice(0, 6).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <div className="mb-14 grid gap-8 lg:grid-cols-2">

        <aside className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Most Popular</h2>
            <PopularPosts articles={getMostPopularArticles()} />
          </div>
        </aside>
        <Newsletter />
      </div>
      <div className="mb-14">
        <div className="grid lg:grid-cols-2 gap-8">
          {sectionGroups.map((group) => {
            const categoryArticles = articles.filter((article) => article.category === group.category);
            const featured = categoryArticles[0];
            const supporting = categoryArticles.slice(1, 4);

            if (!featured) {
              return null;
            }

            return (
              <section key={group.category} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Section</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{group.title}</h2>
                  </div>
                  <Link href={`/category/${group.category}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                    Explore
                  </Link>
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-300">{group.description}</p>
                <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                  <ArticleCard article={featured} featured />
                  <div className="space-y-4">
                    {supporting.map((article) => (
                      <article key={article.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/70">
                        <div className="mb-2"><CategoryBadge slug={article.category} name={article.category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())} /></div>
                        <Link href={`/article/${article.slug}`} className="block text-lg font-semibold leading-6 text-slate-900 transition hover:text-slate-700 dark:text-white dark:hover:text-slate-200">
                          {article.title}
                        </Link>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>


      </div>

      <section className="mb-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Browse by Category</h2>
          <Link href="/articles" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            All stories
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{category.shortName}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
