# TechLedger final launch checklist

**Audit date:** 8 October 2026  
**Scope:** current repository and local production build. This checklist is not a legal opinion, production test, or RevBid approval.

## A. Completed and verified in code

- [x] The site builds successfully with Next.js 16.3.8, TypeScript, and ESLint.
- [x] The configured site URL is centralized in `lib/site-config.ts`; public SEO URLs are composed with `absoluteUrl()` rather than hard-coded production domains.
- [x] Articles use the rendered `/article/{slug}` URL consistently for canonical, sharing, RSS, sitemap, and JSON-LD URLs.
- [x] Unknown article, category, tag, and author slugs use Next's 404 behavior rather than rendering an empty page.
- [x] Search and tag archive pages are marked `noindex`; sitemap output excludes those filtered/thin destinations.
- [x] Sitemap includes intended core pages, article pages, and category pages; RSS links and item dates are generated from article data.
- [x] Contact and newsletter controls do not collect or claim to send data without a configured delivery service.
- [x] Optional-consent UI and ad-placement primitives are disabled by default. No advertiser, analytics, or tracking tag is loaded by this repository.
- [x] The site has baseline content-type, frame, referrer, permissions, and transport-security headers.
- [x] Article sources and an editorial-review-required state are rendered from the content model.
- [x] Unsupported generic-author `Person` schema was removed. Publisher organization schema is emitted only when a genuine publisher name is configured.

## B. Requires owner information

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before production indexing. Do not use the documented placeholder origin for a live launch.
- [ ] Provide the legal publisher/operator name, contact channel, address where required, and verified publisher/author information.
- [ ] Configure a real contact delivery mechanism before enabling a contact form or publishing an address that receives mail.
- [ ] Decide whether to offer a newsletter; provide its processor, retention, unsubscribe flow, and privacy disclosures before enabling collection.
- [ ] Confirm actual data processing, regions, legal basis, vendors, and rights contacts for privacy/cookie/legal pages.
- [ ] Obtain and retain article ownership, image-licence, author-approval, and source-note records.

## C. Requires manual editorial verification

- [ ] An accountable editor must approve each of the 12 articles for accuracy, product/version currency, source relevance, originality, tone, and byline.
- [ ] Verify every external source URL and any practical guidance against current official documentation before publication.
- [ ] Confirm image alternative text is accurate in its rendered context.
- [ ] Review the editorial-review-required labels and only change a review state when the supporting evidence exists.
- [ ] Decide whether any article should remain unpublished until its claims and sources are approved.

## D. Requires domain and production hosting

- [ ] Configure DNS, TLS, redirects, CDN/cache behavior, monitoring, backups, and the final environment variables.
- [ ] Crawl the deployed HTTPS origin: canonical response headers/HTML, sitemap, robots, RSS, JSON-LD, redirects, 404s, images, and all internal links.
- [ ] Test mobile layouts, keyboard navigation, screen readers, colour contrast, touch targets, Core Web Vitals, and layout shift in real browsers.
- [ ] Validate security headers on the final host and adjust the CSP strategy only after the exact consent/ad vendors are known.
- [ ] Register and verify Search Console (and any other owner-selected measurement service) after privacy planning.

## E. Requires RevBid technical approval

- [ ] Review the current RevBid terms and technical instructions immediately before applying; they can change.
- [ ] Submit accurate publisher enrollment information and evidence of content/media rights.
- [ ] Obtain legal review of the privacy notice and consent implementation for the actual jurisdictions and vendors.
- [ ] Integrate only RevBid-approved tags after consent/data decisions; reserve labelled placements and test them on desktop and mobile.
- [ ] Verify no excessive, hidden, overlapping, auto-refreshing, or deceptive placements, including after responsive layout changes.
- [ ] Document traffic sources, invalid-traffic controls, monitoring, and incident handling. Do not use incentivized, bot, exchange, or artificial traffic.

## Current disposition

**CODE READY** for the verified local configuration. **CONTENT REVIEW PENDING**, **OWNER INFORMATION PENDING**, **DEPLOYMENT PENDING**, and **REVBID APPROVAL PENDING** remain. The repository alone should not be submitted as a claim of full publisher readiness.
