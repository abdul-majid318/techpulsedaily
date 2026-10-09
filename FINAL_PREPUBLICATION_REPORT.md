# Final pre-publication report — October 9, 2026

## Result

**TECHNICAL PASS — the site is ready for an owner-authorized publication action.** No publication status, commit, push, or deployment was changed.

## PASS

- The library contains 12 articles; 2 are `published` and 10 are `editorial-review-required`.
- Public data flows consistently to the home page, article/category/author/tag pages, RSS, and sitemap through the `articles` collection. The 10 review-required articles are excluded when editorial preview is off.
- The client search interface now receives a server-filtered, public-only article summary. A production-bundle inspection confirms that unpublished article titles/bodies are no longer shipped to browsers.
- Production now ignores `EDITORIAL_PREVIEW` even if it is accidentally set: only a non-production environment can enable local editorial preview.
- Published article pages no longer describe themselves as awaiting editorial review.
- Replaced all 12 article-image references with original project-native SVG illustrations. The older JPGs and prior SVGs remain untouched for owner review.
- Parsed all 12 new SVGs successfully as XML; each has a responsive `viewBox`, an accessible title/description, and no external artwork, links, logos, or embedded raster images.
- Typecheck, lint, and the production Vite/Vinext build pass. Build output contains non-failing Vinext chunking/classification warnings only.
- Git history supports Article 1's `2026-10-09` date: commit `8a6ae99` ("Publish small business AI tools guide") was authored that day. Article 2's `2025-01-16` date existed before its manual published-status change but has no provenance establishing it as a historical publication event.
- `npm.cmd run typecheck`, `npm.cmd run lint`, and `npm.cmd run build` pass after the image replacement. Vinext reports only its existing non-failing static-analysis/chunking warnings.

## New illustration map

| Article | New SVG |
| --- | --- |
| Best AI Tools for Small Businesses | `editorial-ai-tools.svg` |
| ChatGPT vs Claude | `editorial-ai-assistants.svg` |
| How to Speed Up a Slow Windows PC | `editorial-windows-performance.svg` |
| Best Free Coding Tools for Developers | `editorial-coding-tools.svg` |
| What Is Retrieval-Augmented Generation? | `editorial-rag.svg` |
| How to Protect Your Online Accounts | `editorial-account-security.svg` |
| Best VS Code Extensions for Developers | `editorial-editor-extensions.svg` |
| How to Choose a Web Hosting Provider | `editorial-hosting.svg` |
| Best Productivity Apps | `editorial-productivity.svg` |
| Beginner's Guide to APIs | `editorial-api.svg` |
| Common WordPress Errors and Fixes | `editorial-wordpress.svg` |
| How AI Is Changing Software Development | `editorial-ai-development.svg` |

## Source verification

- Extracted **72 unique real external URLs** from `lib/articles.ts`, `lib/article-content.ts`, and `lib/remaining-article-bodies.ts`. The additional literal `https://api.example.test/articles/42` is a deliberately non-routable code sample and is not a citation.
- Browser retrieval succeeded for 70/72 URLs. The available browser verifier does not expose HTTP status codes or full redirect chains; direct HTTP checks were unavailable from this environment. Do not interpret successful retrieval as a recorded `200` response.
- Recheck result: GitHub API Zen remains unavailable to the browser verifier; CISA Secure Our World returns a `403 Forbidden` response to it. Both references are retained and marked unverified rather than treated as successful checks.
- Confirmed redirects/current destinations include Anthropic pricing → `https://claude.com/pricing`; OpenAI Codex docs → `https://learn.chatgpt.com/docs`; Anthropic platform docs → `https://platform.claude.com/docs/en/intro`; Claude Code docs → `https://code.claude.com/docs/en/overview`; Obsidian help → `https://obsidian.md/help/`; OWASP Top 10 → `https://owasp.org/projects/top-ten`; and the Microsoft Startup/Defragment support pages to their current paths.
- Updated the public Claude pricing and Microsoft Windows source links to their confirmed canonical destinations. The remaining observed redirects are still legitimate official destinations; no unsupported replacement was made.

## Time-sensitive claims checked

- OpenAI Business currently lists Standard at $20/user/month annually or $25 monthly, a two-user minimum, and no training on business data by default. The article’s corresponding claims remain supported.
- OpenAI’s Business privacy article confirms workspace data is excluded from training by default; it also contains current feature/seat caveats, so readers should continue to check the linked source.
- Windows 10 support-end source is available and states October 14, 2025; the Windows article appropriately links this lifecycle information.
- Docker Desktop licensing source is available. Eligibility remains contractual and time-sensitive; the article correctly directs readers to check the current agreement rather than asserting a universal entitlement.
- ChatGPT/Claude plans, Notion/Canva AI allowances, Zapier’s free tier, GitHub pricing, Postman pricing, and product features are time-sensitive. Their sources are live except as noted above, but publication still requires an accountable editor to verify each current claim against the source immediately before approval.

## FAIL / owner-required

- **Illustration record:** the 12 new SVGs are newly created project illustrations, not third-party assets. The owner should retain this report and project history as the authorship/provenance record. The original JPGs remain unapproved and unused.
- **Publication date:** Article 2's `2025-01-16` date requires owner confirmation before it is represented as a verified historical publication date.
- **Production configuration:** this workspace has no verifiable deployment environment. Owner must confirm `EDITORIAL_PREVIEW` is absent/false in production and set a real `NEXT_PUBLIC_SITE_URL`; otherwise canonicals, sitemap, RSS, and robots use the reserved `https://techledger.example` fallback.
- **Editorial accountability:** source availability does not establish factual accuracy, original authorship, approvals, commercial terms, or image rights. The 10 review-required articles must remain unpublished until an accountable editor completes those checks.
- **Current public exposure:** Articles 1–2 remain intentionally published, as directed. Articles 3–12 remain `editorial-review-required` and are excluded from public rendering, sitemap, RSS, client bundles, and normal article routes.

## Publication set

**Publication authorized and applied:** Articles 3–12 are now `published` with `publishedAt: "2026-10-09"`; Articles 1–2 remain published. The release is committed and pushed to GitHub. Cloudflare deployment remains pending because this non-interactive environment has no `CLOUDFLARE_API_TOKEN`; no live URL or live-route verification is claimed.

After owner evidence resolves the listed blockers and an editor changes only the approved articles’ `publicationStatus` to `published`, keep `EDITORIAL_PREVIEW=false` and run the single deployment instruction:

```powershell
npm.cmd run build; npm.cmd run deploy
```
