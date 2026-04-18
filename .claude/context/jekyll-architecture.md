# Jekyll Architecture Reference

## Directory Convention

```text
. ├── _config.yml # Global configuration (YAML)
  ├── _posts/ # Blog posts: YYYY-MM-DD-slug.md
  ├── _drafts/ # Unpublished posts (no date prefix needed)
  ├── _pages/ # Static pages (about, contact, archive)
  ├── _layouts/ # HTML wrappers: default.html, post.html, page.html
  ├── _includes/ # Reusable HTML/Liquid snippets
  ├── _sass/ # SCSS partials (compiled by Jekyll)
  ├── _data/ # Structured data: YAML, JSON, CSV -> site.data.*
  ├── _plugins/ # Custom Ruby plugins (ignored in safe mode)
  ├── _site/ # Generated output - NEVER commit this
  ├── assets/ # Static assets: CSS, JS, images, fonts
  ├── Gemfile # Ruby gem dependencies
  ├── Gemfile.lock # Locked versions
  ├── .gitignore # Must include _site/, .jekyll-cache/, .sass-cache/
  └── index.html|md # Homepage
```

## Build Pipeline

1. Read `_config.yml`
2. Load plugins
3. Read `_data/` into `site.data`
4. Scan `_posts/`, `_drafts/`, pages, collections
5. Render Liquid templates (variables, tags, filters)
6. Convert Markdown -> HTML (Kramdown)
7. Apply layouts (innermost first: post -> default)
8. Compile SCSS -> CSS
9. Write everything to `_site/`

## Liquid Essentials

- **Objects**: `{{ page.title }}`, `{{ site.url }}`, `{{ content }}`
- **Tags**: `{% if %}`, `{% for %}`, `{% assign %}`, `{% include %}`
- **Filters**: `| date: "%B %d, %Y"`, `| relative_url`, `| markdownify`
- **Escaping**: wrap Liquid in `{% raw %}{% endraw %}` inside code blocks

## Front Matter

Every file processed by Jekyll must begin with `---` YAML front matter.

Predefined variables: `layout`, `permalink`, `published`, `date`,
`categories`, `tags`

Custom variables: any key-value pair, accessible via `page.custom_key`

## Collections

Define in `_config.yml`:

```yaml
collections:
  projects:
    output: true
    permalink: /projects/:name/
```

Files go in `_projects/` directory, accessible as `site.projects`.

## Data Files

`_data/navigation.yml` -> accessible as `site.data.navigation`

Supports YAML, JSON, CSV, TSV.

## Permalinks

Default: `/:categories/:year/:month/:day/:title/`

Common alternatives:
- `/:title/` - clean URLs
- `/:categories/:title/` - category-prefixed
- `/blog/:year/:month/:title/` - date-structured

## Environment

- `JEKYLL_ENV` variable: defaults to development
- Set to production for analytics, minification:
  `JEKYLL_ENV=production bundle exec jekyll build`
- Access in templates: `{% if jekyll.environment == "production" %}`

## Important `_config.yml` Keys

```yaml
title: "Blog Title"
description: "Site description for SEO"
url: "https://username.github.io"         # Protocol + domain
baseurl: ""                                # "" for user site, "/repo" for project
timezone: Asia/Jakarta                     # IANA timezone
permalink: /:title/                        # URL structure
markdown: kramdown
theme: minima                              # Gem-based theme
remote_theme: user/repo                    # GitHub-hosted theme
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
exclude:
  - Gemfile
  - Gemfile.lock
  - README.md
  - node_modules/
  - vendor/
```
