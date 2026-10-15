# Automatic language routing

Implemented on 2026-10-15 using a small Cloudflare Worker and a first-party
preference script. No database, KV binding, external geolocation service, or paid
subscription is required. The Worker uses the existing account's available quota;
no billing-plan change is part of deployment.

## Selection order

Only the root `/` negotiates language:

1. An explicit `?lang=en` / `?lang=zh` choice, then a saved manual choice.
2. The highest-weight supported English or Chinese tag in `Accept-Language`.
3. If there is no supported browser preference: CN -> Chinese; elsewhere or
   unknown -> English. A language excluded with `q=0` is avoided when possible.
   If both available languages are excluded, use the English fallback.

Regional tags such as `zh-Hant-TW` map to Chinese. Header order breaks equal-weight
ties. Malformed language entries are ignored. All language redirects are **302**
with `Cache-Control: no-store`; query parameters other than the consumed `lang`
choice are retained. HEAD is supported; other methods at `/` return 405.

Explicit `/en/...` and `/zh/...` URLs never change because of cookie, browser
language, or country. Root choices redirect only to a fixed supported path on the
same hostname, so the choice cannot become an open redirect.

## Remembering manual choices

The existing navbar language links retain their original destinations and work
without JavaScript. A small capture-phase click listener records explicit
same-origin language selections before the theme navigates. It does not change
ordinary visits into saved preferences, so browser preference changes still work
until a visitor makes a manual selection.

The host-only `__Host-academic_language` cookie has `Path=/`, `Secure`, `SameSite=Lax`
and a one-year lifetime. It contains only `en` or `zh`. It is deliberately not
HttpOnly because the browser must read/write it for the static fallback and
navbar. The `__Host-` prefix prevents subdomains from setting it for this host.
Root `?lang=...` links also save the preference in an HTTP response, without
requiring JavaScript. No cookie is set for automatic browser/country decisions.

## Runtime and routes

`workers/language-router/src/index.js` contains the negotiator. It uses the trusted
`request.cf.country` value instead of accepting a client-supplied country header.
The source has no third-party runtime dependencies or storage bindings.

Worker routes match query strings as part of the URL and cannot include query
parameters in route patterns. Therefore `deploy/cloudflare/language-routes.json`
uses a hostname wildcard with more-specific **no-script** exclusions for `/en/`,
`/zh/`, CSS, JS, media, fonts, and common metadata files. Normal page and resource
requests bypass the Worker. Uncommon paths fall through to the origin; the Worker
only negotiates `/`. Preserve any unrelated routes when applying this list.

The current Free allowance is 100,000 requests/day across the account and 10 ms
CPU/invocation. Account billing subscriptions were not readable through the
connector; no subscription is purchased or upgraded by these changes. There were
no existing Worker scripts/routes at preflight. This is not an unlimited-service
guarantee: if the free quota is exhausted, Cloudflare's configured route failure
mode applies. Explicit language URLs remain outside this Worker's routes.

The static root template is a second fallback for origin/GitHub Pages access or
when the Worker is bypassed: saved choice -> navigator.languages -> English.
It cannot infer country without the edge. It includes visible English/Chinese
links for JavaScript-free visitors. This fallback does not by itself override a
Cloudflare quota error when the platform fails closed. The language homepages
and root include an `x-default` alternate link.

## Validation

From `workers/language-router`, run `npm ci`, `npm test`, `npm run check`, and
`npm run build` (the latter is an offline deployment dry run). The tests cover
weighted and malformed headers, regional tags, q=0 exclusions, manual preference,
query preservation, secure cookies, explicit URL bypass, HEAD, POST, and browser
fallback behavior. The real local workerd runtime is also checked over HTTP.
The complete site is built with Hugo 0.123.3 and tested with
`scripts/check_performance.py` before deployment.

## References

- [Accept-Language semantics](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Language)
- [Worker route matching and no-script exclusions](https://developers.cloudflare.com/workers/configuration/routing/routes/)
- [Workers pricing and free limits](https://developers.cloudflare.com/workers/platform/pricing/)
- [Country information on requests](https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties)
