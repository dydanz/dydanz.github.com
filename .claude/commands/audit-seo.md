# Command: /audit-seo

Run an SEO audit on the site.

## Execution Flow

1. **Check `_config.yml`**:
   - `title`, `description`, `url`, `baseurl` are set correctly
   - `jekyll-seo-tag` and `jekyll-sitemap` are in plugins list
   - `jekyll-feed` is configured for RSS
2. **Scan posts**:
   - Every post has `title`, `description`, `date`, `categories`, `tags`
   - Descriptions are 150-160 characters
   - Titles are under 60 characters
   - No duplicate titles or slugs
3. **Check layouts**:
   - `{% seo %}` tag is in the `<head>` of the default layout
   - `{% feed_meta %}` tag is present for RSS discovery
   - Canonical URL is being generated
   - OpenGraph and Twitter Card meta tags render correctly
4. **Verify technical SEO**:
   - `sitemap.xml` is generated and accessible
   - `robots.txt` exists (if needed)
   - All images have alt text
   - Internal links are not broken
   - Heading hierarchy is sequential in each post
5. **Report**: output a markdown checklist with pass/fail for each item
