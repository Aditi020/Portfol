import React from "react";
import "../Style/Blog.css";

const BlogCard = ({ post }) => {
    const { title, category, date, description, image, link } = post;

    return (
        <li className="blog-post-item">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                    <img src={image} alt={title} loading="lazy" />
                </figure>
                <div className="blog-content">
                    <div className="blog-meta">
                        <p className="blog-category">{category}</p>
                        <span className="dot"></span>
                        <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                    <h3 className="h3 blog-item-title">{title}</h3>
                    <p className="blog-text">{description}</p>
                </div>
            </a>
        </li>
    );
};

export default BlogCard;
