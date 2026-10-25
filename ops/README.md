# Academic origins

The same Hugo output is staged and SHA256-verified on both origins before either is published.
`index/` remains the 1Panel document root. Deployment uses resources first, HTML last, without live deletion; old fingerprint URLs remain available. The prior tree is retained at `.deploy/<run>-<attempt>/previous`. A caught publication failure restores every attempted origin; rollback failures are explicit in the Actions log. Hard runner interruption requires manual inspection of those backups. Cross-host publication is not atomic.

`academic-language-location.conf` is a reviewed template, not automatically deployed by CD. Replace DEFAULT_LANGUAGE with zh on CN or en on SF, insert inside only the academic server block, back up the configuration, and run nginx -t before reload. Only exact / redirects. Explicit language URLs are preserved. Query choice and menu clicks persist the existing one-year secure host-only cookie; automatic defaults do not. The generic static cache policy is unchanged.

CD uses existing PRIVATE_KEY and pinned host keys. CN variables retain their original names; SF variables use the SF_ prefix. SF uses existing ubuntu sudo privileges. Neither deployment nor this template changes SSH authorization or installs software. GitHub Pages is updated after both origins succeed. There is no Worker deployment.
