# TechLedger

TechLedger is a premium technology publication built with Next.js, TypeScript, and Tailwind CSS. It is designed for long-form editorial storytelling, search visibility, and future monetization while keeping the content model simple enough to replace with a CMS later.

## What is included

- Editorial homepage with hero, featured stories, trending stories, latest articles, and category highlights
- Article detail pages with metadata generation, breadcrumbs, related content, and table of contents
- Category, tag, and author pages
- Search experience powered by client-side filtering
- SEO infrastructure including metadata, sitemap, robots.txt, and RSS feed
- Editorial legal and brand pages such as about, privacy, editorial policy, disclaimer, and terms
- Dark mode and responsive navigation

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- React 19

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in a browser.

## Production checks

```bash
npm run lint
npm run build
```

For local production preview:

```bash
npm run start
```

## Project structure

```text
app/
  about/page.tsx
  article/[slug]/page.tsx
  category/[slug]/page.tsx
  tag/[slug]/page.tsx
  author/[slug]/page.tsx
  search/page.tsx
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  rss.xml/route.ts
components/
  ArticleCard.tsx
  Breadcrumbs.tsx
  FeaturedArticle.tsx
  Footer.tsx
  Header.tsx
  Newsletter.tsx
  Pagination.tsx
  PopularPosts.tsx
  RelatedPosts.tsx
  SearchPageClient.tsx
  TableOfContents.tsx
  ThemeToggle.tsx
lib/
  articles.ts
```

## Content model and authoring workflow

The site uses a centralized content layer in `lib/articles.ts` as the source of truth for:

- categories
- authors
- tags
- articles
- related-content helper logic
- metadata and search indexing fields

To add a new article, define the object in `lib/articles.ts` and keep the following values aligned:

- `slug` must match the route path
- `category` must correspond to a valid category slug
- `authorSlug` must match an author entry
- `tags` should align with the tag collection
- `publishedAt` and `updatedAt` should be valid ISO dates

This structure makes it straightforward to swap the mock data layer for a CMS or database in the future without redesigning page templates.

## SEO and publishing notes

The project includes:

- page metadata and canonical metadata in route files
- Open Graph and social metadata support
- sitemap generation at `/sitemap.xml`
- robots rules at `/robots.txt`
- RSS feed at `/rss.xml`
- structured article metadata with schema.org JSON-LD placeholders

If you expand the site, add analytics and ad integrations in the existing placeholders rather than hardcoding them into article templates.

## Deployment

This app is ready for deployment on platforms such as Vercel.

Typical deployment flow:

```bash
npm run build
npm run start
```

For Vercel, connect the repository and use the default Next.js build settings.

## Future upgrades

Recommended next steps for a production launch:

- replace mock article data with a CMS or headless source
- add Google Analytics or Plausible tracking
- add newsletter integration and conversion hooks
- expand article coverage, author profiles, and newsletter CTAs
- introduce ad placements and programmatic revenue modules behind the placeholder components

## License

This project is provided as a demo editorial blog foundation for learning and customization.
