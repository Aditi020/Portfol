import React from "react";
import "../Style/Blog.css";

const BlogCard = ({ post }) => {
    return (
        <li className="blog-post-item">
            <a href="#">
                <figure className="blog-banner-box">
                    <img src={post.imgSrc} alt={post.imgAlt} loading="lazy" />
                </figure>
                <div className="blog-content">
                    <div className="blog-meta">
                        <p className="blog-category">{post.category}</p>
                        <span className="dot"></span>
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                    <h3 className="h3 blog-item-title">{post.title}</h3>
                    <p className="blog-text">{post.description}</p>
                </div>
            </a>
        </li>
    );
};

export default BlogCard;
