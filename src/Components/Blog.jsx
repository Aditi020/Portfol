import React from "react";
import "../Style/Blog.css";
import BlogCard from "./BlogCard";
import Blogposts from "./BlogPosts";

const Blog = () => {
    return (
        <article className="blog active" data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {Blogposts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Blog;
