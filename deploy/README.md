# Academic performance deployment bundle

Status: prepared locally; not applied to Cloudflare or the production server.

This bundle implements the approved image-cache, English CV redirect, page-level
MathJax, and HTML-cache changes. It deliberately does not change root language
routing. It uses the existing server and Cloudflare Free features only.

## Findings and scope

The production Nginx configuration already returns a seven-day cache policy on
image **200** responses. However, its shared policy classifies resources using
`$sent_http_content_type`. Nginx removes Content-Type on **304**, causing that
policy to return `no-cache` during conditional revalidation. This was reproduced
with a direct origin request using If-Modified-Since on 2026-10-15.

The fix classifies Academic resources by URI and keeps 200/206/304 policies
consistent. It does not edit the shared cache maps used by other sites.

| Resource | Browser cache | Edge freshness |
| --- | --- | --- |
| Fingerprinted CSS/JS and Hugo processed images | One year, immutable | One year, subject to cache eviction |
| Other images and fonts | Seven days | Seven days, subject to cache eviction |
| Other CSS/JS | One hour | One hour |
| Academic HTML under language paths | Revalidate | Ten minutes |
| Root `/`, including query strings | Revalidate | No fresh shared copy |
| JSON and unclassified resources | Revalidate | No fresh shared copy |
| Error responses | No storage | No storage |

Hugo's native per-page `math: true` opt-in remains available. There are no current
formula opt-ins in the content tree. MathJax is disabled globally in
`config/_default/params.yaml`; no theme fork is needed.

## Files and destinations

| Local file | Production destination or Cloudflare phase |
| --- | --- |
| `nginx/00-academic-cache.conf` | `/docker/nginx/config/conf.d/00-academic-cache.conf` (http context) |
| `nginx/academic-cache-headers.inc` | `/docker/nginx/config/snippets/academic-cache-headers.inc` |
| `nginx/academic.davidz.cn.conf` | `/docker/nginx/config/conf.d/academic.davidz.cn.conf` |
| `cloudflare/cv-dns.json` | DNS create payload, scoped to `cv.davidz.cn` |
| `cloudflare/cv-redirect.json` | Rule payload for `http_request_dynamic_redirect` |
| `cloudflare/academic-html-cache.json` | Rule payload for `http_request_cache_settings` |

The observed server uses Nginx 1.30.5 in Docker and bind-mounts these paths. The
headers snippet requires Nginx >= 1.29.3 for `add_header_inherit merge`, matching
the existing production configuration. Re-read the live configuration before
applying this snapshot to avoid overwriting intervening changes.

Cloudflare JSON files contain **individual create/rule payloads**, not replacement
zone rulesets. Merge by stable `ref`, preserving all unrelated rules and their
order. Do not PUT one of these files over the entire existing ruleset.

The CV currently inherits an unproxied wildcard DNS record. Create a dedicated,
proxied CNAME for `cv.davidz.cn`, leaving `*.davidz.cn` unchanged. The target is
the existing apex hostname; the redirect terminates at the edge. The existing
origin CV redirect remains as a fallback. `cv_zh.davidz.cn` is outside this change.

## Later coordinated deployment

These are instructions for a separately authorized deployment, not an automatic
step of the existing GitHub Actions workflow.

1. Re-read the current Nginx files, Cloudflare DNS, and both ruleset entrypoints.
   Save backups outside the published web root and outside `conf.d/*.conf`.
2. Build with the pinned Hugo 0.123.3 extended binary:
   `hugo --gc --minify --destination /tmp/academic-release`.
3. Install the three Nginx files above. Run `docker exec nginx nginx -t` before
   reloading with `docker exec nginx nginx -s reload`. Restore the saved files
   immediately if validation fails; never reload an invalid configuration.
4. Publish the built site to the existing `/docker/academic/` destination through
   the established deployment process. Keep the previous release for rollback.
5. Merge the HTML-cache rule into the existing cache phase. It only establishes
   eligibility: origin `s-maxage=600` controls edge freshness, and the browser
   continues to revalidate. Existing query-string cache keys remain unchanged.
6. Create or merge the CV redirect rule, then create the dedicated proxied CV DNS
   record. Creating the rule first avoids routing visitors through an unfinished
   redirect configuration. Check the edge certificate before switching DNS.
7. Purge affected Academic URLs using explicit URL lists, in batches within the
   current API limit. Include `/en/`, `/zh/`, changed pages, and the old image URLs
   with stale `no-cache` metadata. Build the image URL list from the release HTML
   (`src`, `srcset`) or known public output paths. Do not purge the entire zone.
8. Verify both languages, search, CV redirect, formulas on an opt-in test page,
   and compression. Repeat public image/HTML requests until eligible assets show
   `HIT`/Age where the edge retains them. Check conditional **304** cache headers
   directly at the origin as well as normal **200** headers. Test missing image
   URLs: 404 responses must remain `no-store`.

## Updates and rollback

HTML can remain at the edge for up to ten minutes after an ordinary publish.
Purge changed HTML URLs after future deployments when immediate freshness is
required. No additional CI secret or automatic purge step is introduced here;
the coordinated deployment can use the existing Cloudflare connector. A later
CI integration should use a narrowly scoped token stored only in Actions secrets.

Do not replace an immutable asset in place. Changed Hugo assets get new URLs.
If rolling back, restore the saved Academic Nginx files and previous site
release, remove only the added Cloudflare rules (matching their refs), and remove
the dedicated CV DNS record if this deployment created it. The original wildcard
and origin redirect then provide the prior CV route. Purge affected HTML URLs.

## Local verification

```bash
hugo --gc --minify --destination /tmp/academic-release
python3 scripts/check_performance.py \
  --site /tmp/academic-release \
  --nginx /path/to/nginx
```

The check starts an isolated Nginx on a loopback-only ephemeral port and always
stops it. It checks 200/304 policy consistency, root query strings, both language
homepages, hashed and unhashed resources, HEAD, Range, missing images, and inherited
security headers. It never connects to or deploys production.

Local verification on 2026-10-15 passed with Hugo 0.123.3 extended and an isolated
Nginx 1.30.6 binary: 107 built HTML pages, 41 HTTP checks (both ETag and
Last-Modified conditional requests), and a temporary `math: true` page that loaded
MathJax while both homepages still omitted it. The temporary page was removed.
Cloudflare payloads were checked against the API reference; they have not been
submitted for live rule creation or DNS changes.

As verified on 2026-10-15, Cloudflare Free allows ten Cache Rules and ten Single
Redirects. One existing Cache Rule was present; no Single Redirect entrypoint was
present. This bundle adds one rule to each phase and needs no Workers, paid image
service, paid cache storage, or new server.

References: [Cache Rules](https://developers.cloudflare.com/cache/how-to/cache-rules/),
[redirect availability](https://developers.cloudflare.com/rules/url-forwarding/#availability),
[origin cache control](https://developers.cloudflare.com/cache/concepts/cache-control/).
