# RevBid Submission Checklist

## Completed in code

- [x] No RevBid/ad/analytics scripts, refresh behavior, click simulation, hidden units, or impression generation exists.
- [x] Consent UI is dormant unless optional technology is explicitly enabled.
- [x] Optional preferences support accept, reject, save, reopen, and withdrawal/update; necessary site features remain available.
- [x] Ad boundary renders nothing without both an enable flag and vendor-provided children.
- [x] Privacy page identifies the current no-vendor state and unresolved facts.

## Owner confirmation required

- [ ] Publisher identity, contact, jurisdiction, legal basis, rights process, retention, and vendor list.
- [ ] Content/media ownership, author permissions, and accurate RevBid enrolment information.
- [ ] Traffic acquisition sources, bot mitigation, monitoring, and incident process.

## Live-domain verification required

- [ ] Final HTTPS domain, policy links, consent presentation by geography, headers, and accessibility.
- [ ] No optional script request before affirmative consent; withdrawal stops future optional loading.
- [ ] Canonical/robots/sitemap/RSS verification on the final domain.

## RevBid-provided details required

- [ ] Written technical approval, tag/script URLs, publisher and ad-unit IDs, allowed placements, and consent requirements.
- [ ] Approved advertiser category/domain controls and production validation.

## Terms mapping

| Terms | Status |
|---|---|
| 2.2 content/IP/privacy/malware restrictions | OWNER CONFIRMATION REQUIRED |
| 2.3 visible, approved placements | NOT YET APPLICABLE |
| 2.5 privacy policy and third-party compliance | PARTIALLY PREPARED; OWNER CONFIRMATION REQUIRED |
| 2.6 notice and legally sufficient consent | PARTIALLY PREPARED; PRODUCTION VERIFICATION REQUIRED |
| 2.7 placement quality and invalid traffic | CODE VERIFIED PASS for no active ads; production controls required |
| 5.3 rights, accurate information, legal compliance | OWNER CONFIRMATION REQUIRED |
