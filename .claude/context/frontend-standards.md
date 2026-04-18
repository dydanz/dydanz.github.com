# Modern Frontend Standards for Jekyll Blogs

## Semantic HTML5

- Use `<article>` for blog posts, `<nav>` for navigation, `<aside>` for
  sidebars
- Use `<header>` and `<footer>` within `<article>` for post meta
- Use `<main>` for primary content (one per page)
- Use `<section>` with headings for thematic grouping
- Use `<figure>` + `<figcaption>` for images with captions
- Use `<time datetime="YYYY-MM-DD">` for dates
- Heading hierarchy must be sequential: H1 -> H2 -> H3 (no skips)

## CSS Architecture

- **Custom Properties** for theming: `--color-primary`, `--font-body`,
  `--space-md`
- **Mobile-first** media queries: write base styles for mobile, layer up
- **Grid + Flexbox**: Grid for page layout, Flexbox for component alignment
- **Logical properties**: prefer `margin-inline`, `padding-block` for i18n
  support
- **Container queries** (`@container`): for component-level responsiveness

## Performance

- **Core Web Vitals targets**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image optimization**:
  - Use `<img>` with `width`/`height` attributes to prevent CLS
  - `loading="lazy"` on below-fold images
  - `decoding="async"` for non-critical images
  - Serve WebP with `<picture>` fallback where possible
- **Font loading**:
  - `font-display: swap` in `@font-face`
  - Preload critical fonts: `<link rel="preload" as="font">`
  - Subset fonts to needed character ranges
- **CSS**: avoid `@import` in CSS (use SCSS `@import` which compiles to single
  file)
- **JS**: minimize; use `defer` attribute; avoid render-blocking scripts

## Accessibility (WCAG 2.1 AA)

- Color contrast: 4.5:1 for normal text, 3:1 for large text
- Focus indicators: visible on all interactive elements
- Skip link: first element in `<body>`, visible on focus
- ARIA landmarks: `role="navigation"`, `role="main"`, etc.
- Alt text: descriptive for content images, empty for decorative (`alt=""`)
- Reduced motion: `@media (prefers-reduced-motion: reduce)` - disable
  animations
- Screen reader considerations: `aria-label`, `aria-hidden`, `.sr-only` class

## Progressive Enhancement

- Content readable with CSS disabled
- Core functionality works without JavaScript
- Enhance with JS for interactivity (search, theme toggle, ToC scrollspy)
- Use `<noscript>` fallbacks where appropriate

## Typography

- Body: 16px minimum, 1.5-1.75 line-height for readability
- Headings: clear visual hierarchy with consistent scale ratio (1.25-1.333)
- Measure: 60-80 characters per line for optimal reading
- Code blocks: monospace font, horizontal scroll for overflow, adequate padding

## Dark Mode

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --accent: #0066cc;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d1117;
    --text: #e6edf3;
    --accent: #58a6ff;
  }
}
```

## SEO Fundamentals

- Unique `<title>` per page (via front matter + layout)
- `<meta name="description">` from front matter description field
- OpenGraph + Twitter Card meta tags (handled by `jekyll-seo-tag` plugin)
- Canonical URLs: `<link rel="canonical" href="...">`
- Structured data (JSON-LD) for articles where possible
- XML sitemap via `jekyll-sitemap` plugin
- RSS feed via `jekyll-feed` plugin
