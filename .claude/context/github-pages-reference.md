# GitHub Pages — Platform Reference

Source: https://docs.github.com/en/pages (comprehensive documentation)

## What Is GitHub Pages

- Free static site hosting directly from a GitHub repository
- Serves from `<username>.github.io` or a custom domain
- Available on Free, Pro, Team, and Enterprise plans
- Public repos: always free. Private repos: requires paid plan

## Site Types

| Type | Repo name | URL |
|------|-----------|-----|
| User / Org | `<user>.github.io` | `https://<user>.github.io` |
| Project | any name | `https://<user>.github.io/<repo>` |

## Publishing Sources (as of 2024+)

1. **GitHub Actions** (recommended): full build control, any static site
   generator
2. **Branch-based**: push to a specific branch, GitHub builds Jekyll
   automatically

## Platform Limits

- Repository size: 1 GB recommended (hard limit: ~5 GB)
- Published site size: 1 GB max
- Bandwidth: 100 GB/month soft limit
- Builds: 10 per hour
- Sites must be static - no server-side processing

## Jekyll on GitHub Pages (Branch-based)

- Runs in `safe` mode - custom plugins are disabled
- Only whitelisted gems at https://pages.github.com/versions/ are available
- Config overrides enforced: `lsi: false`, `safe: true`, `highlighter: rouge`
- Jekyll version pinned to the `github-pages` gem's dependency (currently 3.x)
- Kramdown is the only supported Markdown processor

## Jekyll on GitHub Pages (GitHub Actions)

- Full control: any Jekyll version, any gem, any plugin
- Must use `actions/upload-pages-artifact` + `actions/deploy-pages`
- Build happens in your workflow, not GitHub's internal builder
- Ruby version is your choice (3.x recommended)

## Whitelisted Plugins (branch-based deploy)

Default (always enabled, cannot disable):
- `jekyll-coffeescript`, `jekyll-default-layout`, `jekyll-gist`
- `jekyll-github-metadata`, `jekyll-optional-front-matter`
- `jekyll-paginate`, `jekyll-readme-index`, `jekyll-titles-from-headings`
- `jekyll-relative-links`

Optional (add to `_config.yml` plugins list):
- `jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`
- `jekyll-redirect-from`, `jemoji`, `jekyll-mentions`
- `jekyll-avatar`, `jekyll-remote-theme`
- `jekyll-include-cache`, `jekyll-octicons`

Full list: https://pages.github.com/versions/

## Custom Domains

- Supported: apex domains, subdomains, both simultaneously
- HTTPS: free via Let's Encrypt, auto-renewed
- Verify domain ownership in GitHub account settings
- `CNAME` file required in repo root

## 404 Pages

- Create `404.html` or `404.md` at repo root with front matter
- Automatically served for missing pages

## HTTPS

- Enforced by default for `*.github.io`
- Available and recommended for custom domains
- Can be toggled in Settings -> Pages -> "Enforce HTTPS"
