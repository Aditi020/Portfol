import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import Github from "../assets/icon-git.svg";
import Site from "../assets/icon-site.svg";
import "../Style/Portfolio.css";

function PortfolioCard({ title, category, imgSrc, link, github }) {
    return (
        <li className="project-item">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                    <div className="project-item-icon-box">
                        <IoEyeOutline />
                    </div>
                    <img src={imgSrc} alt={title} loading="lazy" />
                </figure>
                <h3 className="project-title" style={{ display: 'flex', alignItems: 'center' }}>
                    {title}
                   
                    <a href={github} target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="GitHub" className="project-icon" style={{ width: '20px', marginLeft: '10px' }} />
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={Site} alt="Site" className="project-icon" style={{ width: '20px', marginLeft: '10px' }} />
                    </a>
                </h3>
                <p className="project-category" style={{ display: 'flex', alignItems: 'center' }}>
                    {category}
                  
                </p>
            </a>
        </li>
    );
}

export default PortfolioCard;
