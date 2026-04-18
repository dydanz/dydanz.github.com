# Post Front Matter Template

```yaml
---
layout: post
title: ""
date: YYYY-MM-DD HH:MM:SS +0700
categories: []
tags: []
description: ""
image:
  path: /assets/img/posts/
  alt: ""
toc: true
math: false
mermaid: false
pin: false
published: true
---
```

Field Rules

- title: Title Case, descriptive, under 60 characters
- date: must match filename date, include timezone offset
- categories: 1-2 broad categories, lowercase, hyphenated
- tags: 3-5 specific tags, lowercase, hyphenated
- description: 150-160 characters, compelling for search results
- image.path: relative to site root, WebP preferred
- image.alt: descriptive, not "image of..." - just describe the content
- toc: true for posts with 3+ headings
- math: true only if post contains LaTeX equations
- mermaid: true only if post contains Mermaid diagrams
- pin: true to sticky on homepage (use sparingly)
- published: set false for WIP posts that shouldn't build
