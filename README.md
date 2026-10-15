# [DavidZ-Academic](https://academic.davidz.cn/)

- [Hugo](https://gohugo.io/)
- [Theme](https://github.com/HugoBlox/hugo-blox-builder)
- [Template](https://github.com/HugoBlox/theme-academic-cv)

## Requirements

| Tool            | Version     | Notes                                                                           |
| --------------- | ----------- | ------------------------------------------------------------------------------- |
| Hugo (extended) | **0.123.3** | Pinned — matches `blox-bootstrap@v5.9.7` module min, last version with `getCSV` |
| Go              | 1.15+       | Required for Hugo Modules                                                       |
| Git             | any         | For module fetch                                                                |

Version pinned in:

- `.github/workflows/cd.yml` — CI build
- `.devcontainer/devcontainer.json` — Codespaces / dev container
- Local: manual binary at `/opt/homebrew/bin/hugo` (not brew-managed)

### Local install (macOS arm64)

```bash
curl -sL https://github.com/gohugoio/hugo/releases/download/v0.123.3/hugo_extended_0.123.3_darwin-universal.tar.gz \
  | tar -xz -C /tmp && mv /tmp/hugo /opt/homebrew/bin/hugo
hugo version  # should print 0.123.3+extended
```

> **Do not upgrade Hugo past 0.123.x.** `blox-bootstrap@v5.9.7` uses `getCSV` (removed 0.124), `site.GoogleAnalytics` (removed later), and other APIs deprecated in 0.156+. Upstream abandoned the Bootstrap track at commit `915d9bd` (2024-05-19, migrated to Tailwind).

## Develop

```bash
hugo server          # http://localhost:1313/
hugo --gc --minify   # production build → public/
```

## Performance configuration

MathJax is disabled globally. Add `math: true` to a page's front matter when it
needs formulas; the theme then loads MathJax on that page only.

The [performance deployment bundle](deploy/README.md) contains the staged Nginx
and Cloudflare configuration, local checks, rollout order, and rollback steps.
It is not applied automatically by the existing deployment workflow.
The [language-routing guide](docs/language-routing.md) describes the root URL
router: manual preference, then browser language, then country fallback.
