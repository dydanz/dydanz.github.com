# Command: /import-content

Transform external content (articles, docs, notes) into Jekyll blog posts.

## Execution Flow

1. **Read the source**: accept file path, URL, or pasted content
2. **Analyze the content**:
   - Identify the main topic and key points
   - Determine appropriate categories and tags
   - Extract or generate a title and description
3. **Transform to Jekyll post**:
   - Convert to Kramdown-compatible Markdown
   - Restructure headings (ensure H2/H3 hierarchy, no H1)
   - Format code blocks with language identifiers
   - Convert inline images to Jekyll asset references
   - Add front matter with all required fields
4. **Adapt the voice**:
   - Read existing posts to match the blog's style
   - Rewrite sections that don't match the blog's tone
   - Add context or transitions for the blog audience
5. **Handle media**:
   - List images that need to be downloaded/moved to `/assets/img/posts/`
   - Generate descriptive alt text for each image
   - Suggest optimized filenames
6. **Output**: complete `_posts/YYYY-MM-DD-slug.md` file
