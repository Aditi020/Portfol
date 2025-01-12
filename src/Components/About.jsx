import React from 'react';
import '../Style/About.css';

import iconBlog from '../assets/icon-design.svg';
import iconDev from '../assets/icon-dev.svg';
import iconDesign from '../assets/Design.png';
// import iconApp from '../assets/icon-app.svg';
// import iconPhoto from '../assets/icon-photo.svg';
import iconLearn from '../assets/Devlearn.png';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
// import quoteIcon from '../assets/icon-quote.svg';
import ReactGithubCalendar from 'react-github-calendar';

function About() {
    const testimonialsData = [
        { name: 'Daniel lewis', avatar: avatar1, text: 'Richard was hired to create a corporate identity...' },
        { name: 'Jessica miller', avatar: avatar2, text: 'Richard was hired to create a corporate identity...' },
        { name: 'Emily evans', avatar: avatar3, text: 'Richard was hired to create a corporate identity...' },
        { name: 'Henry william', avatar: avatar4, text: 'Richard was hired to create a corporate identity...' }
    ];

    const servicesData = [
        { icon: iconDesign, title: 'Software Design', text: 'Creating scalable and robust software solutions seamlessly.' },
        { icon: iconDev, title: 'Web development', text: 'Building modern and responsive web applications efficiently.' },
        { icon: iconLearn, title: 'Learning & Experimentation', text: 'Exploring new tools and technologies to stay updated.' },
        { icon: iconBlog, title: 'Blogging', text: 'Sharing knowledge and experiences about tech and development.' }
    ];

    const Testimonial = ({ name, avatar, text }) => (
        <li className="testimonials-item" style={{ listStyle: 'none' }}>
            <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                    <img src={avatar} alt={name} width="60" data-testimonials-avatar />
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                    <p>{text}</p>
                </div>
            </div>
        </li>
    );

    const ServiceItem = ({ icon, title, text }) => (
        <li className="service-item">
            <div className="service-icon-box">
                <img src={icon} alt={title} width="40" />
            </div>
            <div className="service-content-box">
                <h4 className="h4 service-item-title">{title}</h4>
                <p className="service-item-text">{text}</p>
            </div>
        </li>
    );

    const calendarTheme = {
        light: [
            'hsla(45, 100%, 72%, 0.05)',  // level0 (light shade)
            'hsla(45, 100%, 72%, 0.2)',   // level1
            'hsla(45, 100%, 72%, 0.4)',   // level2
            'hsla(45, 100%, 72%, 0.6)',   // level3
            'hsla(45, 100%, 72%, 0.8)',   // level4
        ],
        dark: [
            'hsla(45, 100%, 72%, 0.05)',  // level0 (light shade)
            'hsla(45, 100%, 72%, 0.2)',   // level1
            'hsla(45, 100%, 72%, 0.4)',   // level2
            'hsla(45, 100%, 72%, 0.6)',   // level3
            'hsla(45, 100%, 72%, 0.8)',   // level4
        ]
    };

    // Replace `yourGitHubUsername` with your actual GitHub username
    const githubUsername = 'Aditi020';

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>
                    👋 I'm Full Stack Developer hailing from the Indian state of Uttar Pradesh. working in Web Development and Backend technologies.
                    My interest in technology has been fuelled by curiosity and a love for solving complex problems.
                </p>
                <p>
                    I specialize in developing smooth and accessible web experiences, focusing on creating modern UIs with React, powerful backends with Node.js and Spring Boot, and efficient data management with MongoDB. My objective is to deliver seamless and user-friendly solutions that are also effective and reliable.
                </p>
                <p>
                    When I’m not coding, you’ll find me exploring new tech tools, diving into cloud computing, or brainstorming the next project idea. I believe in continuous learning and love collaborating with like-minded individuals to bring innovative ideas to life.
                </p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>
                <ul className="service-list">
                    {servicesData.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </ul>
            </section>

            <section className="github-calendar">
                <h3 className="h3">GitHub Contributions</h3>
                <ReactGithubCalendar
                    className="calendar-container"
                    username={githubUsername}
                    theme={calendarTheme}
                    blockSize={15}
                    // blockMargin={5}
                    fontSize={14}
                    fontColor="hsl(0, 0%, 100%)" 
                />
            </section>

            {/* <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    {testimonialsData.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}
                </ul>
            </section>
            <div className="modal-container" data-modal-container>
                <div className="testimonials-modal">
                    <h3 className="modal-title">Testimonial Details</h3>
                    <div className="modal-content">
                        <div className="testimonial-details">
                            <img src={testimonialsData.avatar} alt={testimonialsData.name} className="testimonial-avatar" />
                            <h4 className="modal-name">{testimonialsData.name}</h4>
                            <p className="modal-text">{testimonialsData.text}</p>
                        </div>
                        <button className="close-modal-button">Close</button>
                    </div>
                </div> 
            </div>*/}
        </article>
    );
}

export default About;
