/// This file contains the manifest of all blogs. Each blog is represented as an object with the following properties:
/// - title: The title of the blog post.
/// - date: The publication date of the blog post in YYYY-MM-DD format.
/// - slug: A URL-friendly identifier for the blog post, typically derived from the title.
/// - excerpt: A short summary or teaser of the blog post content.
/// - file: The path to the markdown file containing the full content of the blog post.

// ALWAYS ADD NEW BLOGS (BASED ON DATE) TO THE TOP OF THE LIST

const blogManifest = [
  {
    title: "Building NanoClaw a multi-agent AI system that goes from Discord message to GitHub PR — autonomously",
    date: "2026-04-19",
    slug: "building-nanoclaw",
    excerpt: "Part 1 - Why I Built a Discord Bot That Writes Code.",
    file: "/blogs/2026-04-19-nanoclaw-pt-1.md"
  },
  {
    slug: "hello-world",
    title: "Hello, World.",
    date: "2026-04-18",
    excerpt: "No grand plan, no content calendar — just a commitment to show up and write.",
    file: "/blogs/2026-04-18-hello-world.md"
  }, 
];

export default blogManifest;
