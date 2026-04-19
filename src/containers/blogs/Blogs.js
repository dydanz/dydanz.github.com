import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "./Blog.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import blogManifest from "../../blogs/manifest";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);

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
            <Link key={i} to={`/blog/${post.slug}`} className="blog-card-link">
              <div className={isDark ? "blog-card dark-mode" : "blog-card"}>
                <p className="blog-card-date">{post.date}</p>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-card-read">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fade>
  );
}
