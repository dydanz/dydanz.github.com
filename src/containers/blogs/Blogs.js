import React, {useState, useEffect, useContext} from "react";
import ReactMarkdown from "react-markdown";
import "./Blog.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import blogManifest from "../../blogs/manifest";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedPost) return;
    setLoading(true);
    fetch(selectedPost.file)
      .then(res => res.text())
      .then(text => {
        // Strip YAML frontmatter before rendering
        const stripped = text.replace(/^---[\s\S]*?---\n/, "");
        setMarkdownContent(stripped);
        setLoading(false);
      })
      .catch(() => {
        setMarkdownContent("Failed to load post.");
        setLoading(false);
      });
  }, [selectedPost]);

  if (selectedPost) {
    return (
      <Fade bottom duration={600} distance="20px">
        <div className="main" id="blogs">
          <button
            className={isDark ? "blog-back-btn dark-mode" : "blog-back-btn"}
            onClick={() => setSelectedPost(null)}
          >
            ← Back
          </button>
          <div className={isDark ? "blog-post-content dark-mode" : "blog-post-content"}>
            <p className="blog-post-meta">{selectedPost.date}</p>
            <h1 className="blog-post-title">{selectedPost.title}</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            )}
          </div>
        </div>
      </Fade>
    );
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">Writing</h1>
          <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
            Notes from the trenches
          </p>
        </div>
        <div className="blog-text-div">
          {blogManifest.map((post, i) => (
            <div
              key={i}
              className={isDark ? "blog-card dark-mode" : "blog-card"}
              onClick={() => setSelectedPost(post)}
            >
              <p className="blog-card-date">{post.date}</p>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <span className="blog-card-read">Read →</span>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
