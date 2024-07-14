import React from 'react';
import '../Style/Resume.css';
import { IoBookOutline } from 'react-icons/io5';

const educationData = [
    { title: 'University school of the arts', date: '2007 — 2008', description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.' },
    { title: 'New york academy of art', date: '2006 — 2007', description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
    { title: 'High school of art and design', date: '2002 — 2004', description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.' }
];

const experienceData = [
    { title: 'Creative director', date: '2015 — Present', description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.' },
    { title: 'Art director', date: '2013 — 2015', description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.' },
    { title: 'Web designer', date: '2010 — 2013', description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.' }
];

const skillsData = [
    { title: 'Web design', level: '80%' },
    { title: 'Graphic design', level: '70%' },
    { title: 'Branding', level: '90%' },
    { title: 'WordPress', level: '50%' }
];

const TimelineItem = ({ title, date, description }) => (
    <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{title}</h4>
        <span>{date}</span>
        <p className="timeline-text">{description}</p>
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
