# Command: /new-post

Create a new blog post from a topic, outline, or source material.

## Execution Flow

1. **Gather input**: Accept topic, title, or reference material from the user
2. **Analyze existing content**:
   - Read 2-3 recent posts from `_posts/` to match voice and style
   - Check existing categories and tags for consistency
   - Identify the active front matter schema from existing posts
3. **Generate the post**:
   - Create filename: `YYYY-MM-DD-kebab-case-title.md` using today's date
   - Write complete YAML front matter matching the site's schema
   - Structure content with clear headings (H2, H3)
   - Include code blocks with language identifiers where relevant
   - Add excerpt separator `<!--more-->` at a natural break
   - Suggest placeholder image path in front matter
4. **Validate**:
   - Confirm YAML is valid (no tabs, correct indentation)
   - Ensure no duplicate slug exists in `_posts/`
   - Check internal links use correct Jekyll link syntax
   - Verify description is under 160 characters
5. **Save**: Write file to `_posts/` directory
6. **Advise**: Suggest running `bundle exec jekyll serve` to preview
