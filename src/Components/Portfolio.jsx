import React, { useState } from "react";
import "../Style/Portfolio.css";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioCard from "./PortfolioCard";
import { IoChevronDownOutline } from "react-icons/io5";

// Component to render the category filters
// The FilterList component renders a list of categories with corresponding buttons for filtering projects based on category.
function FilterList({ categories, selectedCategory, onSelectCategory }) {
    return (
        <ul className="filter-list">
            {categories.map(category => (
                <li className="filter-item" key={category}>
                    <button
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    );
}

// Component to render the dropdown for category selection
// The FilterSelectBox component displays a dropdown interface for selecting categories.
function FilterSelectBox({ categories, onSelectCategory }) {
    return (
        <div className="filter-select-box">
            <button className="filter-select">
                <div className="select-value">Select category</div>
                <div className="select-icon">
                    <IoChevronDownOutline />
                </div>
            </button>
            <ul className="select-list">
                {categories.map(category => (
                    <li className="select-item" key={category}>
                        <button onClick={() => onSelectCategory(category)}>{category}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Main Portfolio component
function Portfolio() {
    const projects = PortfolioProjects();
    const categories = ["All", "Web design", "Applications", "Web development"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = category => {
        setSelectedCategory(category);
    };

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <article className="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
                {/* Render filter components */}
                <FilterList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategorySelect}
                />
                <FilterSelectBox
                    categories={categories}
                    onSelectCategory={handleCategorySelect}
                />
                {/* Render project cards */}
                <ul className="project-list">
                    {filteredProjects.map(project => (
                        <PortfolioCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            imgSrc={project.imgSrc}
                            link={project.link}
                        />
                    ))}
                </ul>
            </section>
        </article>
    );
}

export default Portfolio;
