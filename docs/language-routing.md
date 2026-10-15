# Root language routing investigation

Status: research only, 2026-10-15. No automatic routing has been implemented.

## Current behavior

Hugo has `defaultContentLanguage: en` and
`defaultContentLanguageInSubdir: true`. It generates a root `index.html` containing
a meta refresh to `/en/`. There is no root preference cookie, browser-language
selection, or country-dependent selection in the project or the inspected
Academic Nginx server. Cloudflare currently has no Single Redirect entrypoint.
Visitors can manually use the existing language switcher and explicit `/en/`
and `/zh/` URLs. The prepared cache changes keep `/` uncached for future routing.

## Recommended selection policy

Apply automatic selection only to `/`; never override an explicit `/en/...` or
`/zh/...` URL. A useful priority is:

1. A previously explicit language choice, stored as a first-party preference.
2. Browser preference: select the highest-weight supported `zh` or `en` language
   from Accept-Language, skipping `q=0` entries and handling regional variants.
3. If neither supported language is present, optionally use country as a fallback
   (CN -> zh, elsewhere or unknown -> en). Alternatively default to English and
   avoid country-based behavior entirely.

For example, an English browser in China should still receive English if browser
preference takes priority; a Chinese browser abroad should receive Chinese.
If the desired product rule is strictly "China -> Chinese, elsewhere -> English",
country must instead precede browser preference. That is a different policy.

Use temporary **302** redirects for language negotiation, preserve query strings,
return `Cache-Control: no-store`, and keep explicit language choices accessible.
Do not cache one visitor's root redirect for other visitors. Do not use permanent
301 redirects for a preference that can change. Add an `x-default` alternate when
implementing the root selection page/endpoint and retain both language links.

## Implementation choices

| Option | Where | Strengths | Limitations / cost |
| --- | --- | --- | --- |
| Browser-language script on the root page | Hugo alias/root template plus a small script | No new service; navigator.languages naturally exposes browser preference order; can remember explicit choices | Downloads a root page before redirecting; JavaScript-free visitors need visible language links and a fallback; no country information without another source |
| Country-based edge redirects | Cloudflare Single Redirects | No origin round trip for the redirect; Free rules suffice for CN and fallback | Country is an imperfect proxy for language, especially with VPNs/travel; preference override needs additional cookie logic |
| Raw-header edge rules | Cloudflare Single Redirects | No new runtime; can handle simple common browser headers | `contains(..., "zh")` is incorrect for weighted preferences; first-token checks are only an approximation and can ignore q=0 or noncanonical ordering |
| Full preference negotiation at the edge | Small Cloudflare Worker, root-only behavior | Can correctly combine an explicit preference cookie, weighted Accept-Language, and optional request.cf.country without an origin round trip for the redirect | New runtime with an account-wide quota to inspect; requires implementation, tests, and a manual-choice cookie hook |
| Full negotiation at the origin | Nginx with an appropriate parser/module or an existing backend | No new Cloudflare service | Adds an origin round trip; plain Nginx regex maps do not provide a general weighted-language parser |

For minimum maintenance and no new service, choose the root browser-language
script. For both fast edge selection and complete preference/country handling,
choose the small Worker after reviewing the account's existing Workers usage.
Use the country-only rules only if location is the intended primary criterion.

An important API constraint: Cloudflare's convenient
`http.request.accepted_languages` field sorts tags by quality weight, but the
official reference says it is **only available in Transform Rules**. It cannot
be assumed usable in Single Redirects. Request transforms also run after Single
Redirects, so a transform is not a simple way to prepare a header for an earlier
redirect rule.

Cloudflare Workers Free currently includes 100,000 requests per day and 10 ms CPU
per invocation. The allowance is shared with other account workloads; the zone's
Free Website plan does not establish unused Workers quota. A small root router
does not require KV, a database, or a paid subscription within the free limits.
If quota is exhausted, the configured route failure behavior matters; evaluate
that before deployment rather than assuming unlimited free service.

## Acceptance cases for a later implementation

- Explicit `/en/` and `/zh/` URLs never redirect based on language or country.
- A saved manual choice wins on the next root visit.
- `zh-CN,zh;q=0.9,en;q=0.8` selects Chinese.
- `en-US,en;q=0.9,zh;q=0.8` selects English.
- `fr;q=1,zh;q=0.9,en;q=0.8` selects Chinese (first supported preference).
- `en;q=0.4,zh;q=0.9` selects Chinese even though English appears first.
- `zh;q=0,en;q=1` selects English; empty/malformed headers use the chosen fallback.
- Missing/unknown country information has a deterministic fallback.
- Both language links work without JavaScript; no redirect loops occur.
- Root redirects never become shared cached responses or permanent browser choices.

## Sources

- [MDN Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Language)
- [Cloudflare accepted_languages field and its Transform Rules restriction](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.accepted_languages/)
- [Cloudflare country field](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.country/)
- [Rules execution order and free redirect limits](https://developers.cloudflare.com/rules/url-forwarding/)
- [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
