# CV origin publication

`public/cv.pdf` and `public/cv_zh.pdf` live in `/opt/1panel/www/cv-assets/` on both CN (101.132.243.87) and SF (43.153.17.172). This directory is outside every academic deployment and rollback tree. The OpenResty `/www` bind mount exposes it at `/www/cv-assets/`.

Each CV repository owns only its language file. The workflow builds once, stages and SHA256-verifies the PDF on both machines, retains each prior PDF, atomically replaces each live file, and downloads through normal verified origin HTTPS to compare SHA256. Both origins are restored if caught publication or verification fails. Cross-host publication is not atomic. Workflow cancellation is disabled; hard termination requires inspecting retained `releases/<filename>/<run>-<attempt>/previous.pdf` on both origins. No automatic retention deletion is performed.

Required in each CV repository:
- `CN_SSH_PRIVATE_KEY` secret: an explicitly authorized existing deployment credential for root at the CN host.
- `SF_SSH_PRIVATE_KEY` secret: an explicitly authorized existing deployment credential for ubuntu at the SF host, using existing sudo access.
- `CN_SSH_KNOWN_HOSTS` and `SF_SSH_KNOWN_HOSTS` variables: pinned host public keys verified through the existing trusted SSH connections.

Do not copy workstation keys or retrieve another repository's secret. Provisioning new credentials or expanding SSH authorization requires separate approval. The workflow fails before building if credentials are missing.

R2 publication is removed. Existing R2 objects are left untouched for clients with old cached 301 redirects; they will no longer receive new versions. Existing R2 secrets are not removed.

Academic links directly to `/cv/cv.pdf` and `/cv/cv_zh.pdf`. The two dedicated short domains serve the appropriate PDF directly at `/` (also at their filename). Unknown paths return 404. Fixed PDF responses use application/pdf, inline filename, no-cache, ETag, Last-Modified, and byte ranges. Both vhosts use their 1Panel-managed certificate paths. Registration selected each host's existing wildcard certificate; 1Panel manages certificate deployment to each site.

`academic-cv-locations.inc` is included only inside the existing academic server. The two CV sites are formally registered through the existing logged-in 1Panel UI. The repository's minimal `.conf` examples are initial bootstrap references only: do not overwrite managed site configurations with them. Existing academic language Lua and shared cache files are unchanged. Initial config backup: `/opt/1panel/www/cv-assets/config-backups/initial-20261025/academic.davidz.cn.conf`.

Cloudflare DNS and redirect changes are managed separately. Do not deploy historic `deploy/cloudflare/cv-*` payloads from the older performance bundle to restore the obsolete R2 redirect.

## Formal 1Panel ownership (2026-10-25)

| Host | English site ID | Chinese site ID |
| --- | --- | --- |
| CN | 15 | 16 |
| SF | 7 | 8 |

Managed site directories: `/opt/1panel/www/sites/cv.davidz.cn/` and `/opt/1panel/www/sites/cv_zh.davidz.cn/`. These contain the site log, certificate and default index directories. Actual PDFs remain in `/opt/1panel/www/cv-assets/public/`, served through exact alias locations. The workflows never write the 1Panel site directory.

Managed configurations: `/opt/1panel/www/conf.d/<domain>.conf`. Preserve the 1Panel-generated certificate, root, log and security directives when updating PDF locations. Registration backups are under `/opt/1panel/www/cv-assets/config-backups/panel-registration-20261025/`; `.panel-generated` snapshots retain initial managed configurations before PDF locations were added. No direct 1Panel database edits were made.

After configuration changes, run nginx -t and reload; verify normal TLS, full PDF SHA256, Range 206, ETag 304, no-cache, and real 404 responses through both short domains and academic /cv/ on both hosts. The initial public PDFs were mirrored from the retained R2 objects; subsequent versions are published by the two CV workflows exclusively to CN/SF.
