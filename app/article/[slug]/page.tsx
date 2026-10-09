import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleMeta } from "@/components/ArticleMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Newsletter } from "@/components/Newsletter";
import { PopularPosts } from "@/components/PopularPosts";
import { RelatedPosts } from "@/components/RelatedPosts";
import { TableOfContents } from "@/components/TableOfContents";
import { articles, authors, getArticleBySlug, getCategoryBySlug, getRelatedArticles, getMostPopularArticles } from "@/lib/articles";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

function slugifyHeading(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: article.canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      images: [{ url: article.featuredImage, alt: article.featuredImageAlt }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = authors.find((entry) => entry.slug === article.authorSlug) ?? authors[0];
  const category = getCategoryBySlug(article.category);
  const relatedArticles = getRelatedArticles(article);
  const articleIndex = articles.findIndex((entry) => entry.slug === article.slug);
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;
  const toc = article.body
    .filter((section) => section.heading)
    .map((section) => ({
      id: slugifyHeading(section.heading ?? ""),
      title: section.heading ?? "",
      level: 2,
    }));

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category?.name ?? "Category", href: `/category/${article.category}` },
    { label: article.title },
  ];

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: absoluteUrl(article.featuredImage),
    ...(siteConfig.publisherName
      ? {
          publisher: {
            "@type": "Organization",
            name: siteConfig.publisherName,
          },
        }
      : {}),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? absoluteUrl(item.href) : undefined,
    })),
  };

  return (
    <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumbs items={breadcrumbs} />

      <article className="mx-auto container">
        <header className="mb-8">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Link href={`/category/${article.category}`} className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:bg-amber-950/60 dark:text-amber-200">
              {category?.name ?? article.category}
            </Link>
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-violet-100 text-xs font-semibold text-violet-700 dark:border-slate-700 dark:bg-violet-950/50 dark:text-violet-200" aria-hidden="true">TL</div>
              <div>
                <Link href={`/author/${author.slug}`} className="text-sm font-semibold text-slate-900 dark:text-white">{author.name}</Link>
                <div className="text-xs text-slate-500 dark:text-slate-400">{author.title}</div>
              </div>
            </div>
            <ArticleMeta article={article} />
          </div>
        </header>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            width={1400}
            height={780}
            priority
            className="h-[380px] w-full object-cover md:h-[560px]"
          />
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)_290px]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <TableOfContents items={toc} />
          </div>

          <div className="max-w-[48rem] justify-self-center">
            <div className="article-body rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              {article.body.map((section, index) => (
                <section key={`${article.slug}-${index}`} id={section.heading ? slugifyHeading(section.heading) : `section-${index}`} className="scroll-mt-24">
                  {section.heading ? <h2>{section.heading}</h2> : null}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.blockquote ? <blockquote>{section.blockquote}</blockquote> : null}
                  {section.code ? <pre><code>{section.code}</code></pre> : null}
                  {section.links?.length ? <p className="text-sm"><span className="font-semibold">Related reading: </span>{section.links.map((link, linkIndex) => <span key={link.href}>{linkIndex ? ", " : null}<Link href={link.href} className="text-violet-700 underline underline-offset-4 dark:text-violet-300">{link.label}</Link></span>)}</p> : null}
                </section>
              ))}
            </div>

            <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-labelledby="sources-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Editorial status</p>
              <h2 id="sources-heading" className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Sources and review</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Substantially revised {new Date(article.substantialUpdatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}. This article is marked for editorial review; readers should verify time-sensitive product and policy details with the linked primary sources.</p>
              {article.sources.length ? <ul className="mt-4 space-y-2 text-sm">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300">{source.title}</a><span className="text-slate-500 dark:text-slate-400"> — {source.publisher}</span></li>)}</ul> : <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">No external source has been added for this decision framework. It requires editorial source review before any product-specific recommendations are added.</p>}
            </section>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Share</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl(article.canonicalUrl))}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-200">LinkedIn</a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(absoluteUrl(article.canonicalUrl))}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-200">X</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl(article.canonicalUrl))}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-200">Facebook</a>
                <a href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${absoluteUrl(article.canonicalUrl)}`)}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-200">WhatsApp</a>
              </div>
            </div>

            <section className="mt-12 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-violet-100 text-lg font-semibold text-violet-700 dark:border-slate-700 dark:bg-violet-950/50 dark:text-violet-200" aria-hidden="true">TL</div>
                <div>
                  <Link href={`/author/${author.slug}`} className="text-xl font-semibold text-slate-900 dark:text-white">{author.name}</Link>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{author.title}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{author.bio}</p>
              {author.social?.length ? <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate-200">{author.social.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div> : null}
            </section>

            <div className="mt-12">
              <RelatedPosts articles={relatedArticles} />
            </div>

            <div className="mt-12 flex items-center justify-between gap-4 border-t border-slate-200 pt-5 text-sm dark:border-slate-800">
              {prevArticle ? (
                <Link href={`/article/${prevArticle.slug}`} className="font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">← {prevArticle.title}</Link>
              ) : (
                <span className="text-slate-400 dark:text-slate-500">← Previous</span>
              )}
              {nextArticle ? (
                <Link href={`/article/${nextArticle.slug}`} className="font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">{nextArticle.title} →</Link>
              ) : (
                <span className="text-slate-400 dark:text-slate-500">Next →</span>
              )}
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <PopularPosts articles={getMostPopularArticles()} />
            <Newsletter />
          </aside>
        </div>
      </article>
    </div>
  );
}
