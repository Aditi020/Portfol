import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import "../Style/Portfolio.css";

function PortfolioCard({ title, category, imgSrc, link }) {
    return (
        <li className="project-item">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                    <div className="project-item-icon-box">
                        <IoEyeOutline />
                    </div>
                    <img src={imgSrc} alt={title} loading="lazy" />
                </figure>
                <h3 className="project-title">{title}</h3>
                <p className="project-category">{category}</p>
            </a>
        </li>
    );
}
 
export default PortfolioCard;
