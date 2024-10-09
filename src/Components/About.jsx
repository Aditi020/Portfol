import React from 'react';
import '../Style/About.css';

import iconDesign from '../assets/icon-design.svg';
import iconDev from '../assets/icon-dev.svg';
import iconApp from '../assets/icon-app.svg';
import iconPhoto from '../assets/icon-photo.svg';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import quoteIcon from '../assets/icon-quote.svg';

function About() {
    const testimonialsData = [
        { name: 'Daniel lewis', avatar: avatar1, text: 'Richard was hired to create a corporate identity...' },
        { name: 'Jessica miller', avatar: avatar2, text: 'Richard was hired to create a corporate identity...' },
        { name: 'Emily evans', avatar: avatar3, text: 'Richard was hired to create a corporate identity...' },
        { name: 'Henry william', avatar: avatar4, text: 'Richard was hired to create a corporate identity...' }
    ];

    const servicesData = [
        { icon: iconDesign, title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
        { icon: iconDev, title: 'Web development', text: 'High-quality development of sites at the professional level.' },
        { icon: iconApp, title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
        { icon: iconPhoto, title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' }
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

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I have created web designs for many famous brand companies.
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
