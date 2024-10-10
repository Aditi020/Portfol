import React from 'react';
import '../Style/Resume.css';
import { IoBookOutline } from 'react-icons/io5';

const educationData = [
    { title: 'Bachelor of Technology in Computer Science ', date: '2020 — 2024', description: 'Academy of Business and Engineering Sciences ', percent:"7.73 CGPA" },
    { title: 'ISC', date: '2006 — 2007', description: 'Fatima Convent Senior Secondary School', percent: "72.6 %" },
    { title: 'ICSE', date: '2002 — 2004', description: 'Fatima Convent Senior Secondary School', percent: "80 %" }
];

const experienceData = [
    {
        title: 'Full-Stack Development',
        description: [
            'Experienced in building full-stack applications using ',
            <u key="react" style={{color:"#ece4db"}} >React.js</u>, ', ',
            <u key="node" style={{color:"#ece4db"}} >Node.js</u>, ', ',
            <u key="express" style={{color:"#ece4db"}} >Express.js</u>, ', and ',
            <u key="mongodb" style={{color:"#ece4db"}} >MongoDB</u>, ', focusing on creating responsive, dynamic interfaces and robust backend services.'
        ]
    },
    {
        title: 'Backend Development',
        description: [
            'Developed backend services using ',
            <u key="springboot" style={{color:"#ece4db"}} >Spring Boot</u>, ', managing APIs, data storage, and handling backend logic to support frontend applications.'
        ]
    },
    {
        title: 'Authentication & Security',
        description: [
            'Implemented secure user authentication and authorization systems using ',
            <u key="jwt" style={{color:"#ece4db"}} >JSON Web Tokens (JWT)</u>, ' and ',
            <u key="bcrypt" style={{color:"#ece4db"}} >bcrypt</u>, ', ensuring strong data security practices.'
        ]
    },
    {
        title: 'Version Control',
        description: [
            'Proficient in using ',
            <u key="git" style={{color:"#ece4db"}} >Git</u>, ' and ',
            <u key="github" style={{color:"#ece4db"}} >GitHub</u>, ' for version control and team collaboration, contributing to open-source projects and managing repositories efficiently.'
        ]
    }
];


const skillsData = [
    { title: 'Frontend Development:', level: '80%' },
    { title: 'Backend Development', level: '70%' },
    { title: 'Database Management', level: '60%' },
    { title: 'Version Control ', level: '75%' },
    { title: 'Responsive Design & UI/UX ', level: '75%' }

];

const TimelineItem = ({ title, date, description , percent}) => (
    <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{title}</h4>
        <span>{date}</span>
        <p className="timeline-text" style={{fontWeight:"Bold"}}>{description}</p>
        <p className="timeline-text" style={{ color: "#d9a260" }}>{percent}</p>

    </li>
);

const SkillItem = ({ title, level }) => (
    <li className="skills-item">
        <div className="title-wrapper">
            <h5 className="h5">{title}</h5>
            <data value={level}>{level}</data>
        </div>
        <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: level }}></div>
        </div>
    </li>
);

const Resume = () => {
    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </ol>
            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {skillsData.map((item, index) => (
                        <SkillItem key={index} {...item} />
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Resume;
