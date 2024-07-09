import React from 'react';
import Myavatar from "../assets/avatar-1.png";
import '../Style/Sidebar.css';
// import '../App.css';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';

function SocialItem({ IconComponent }) {
    return (
        <li className="social-item">
            <a href="#" className="social-link">
                <IconComponent />
            </a>
        </li>
    );
}

function ContactItem({ icon, title, value }) {
    return (
        <li className="contact-item">
            <div className="icon-box">
                <i className={`icon-${icon}`} />
            </div>
            <div className="contact-info">
                <p className="contact-title">{title}</p>
                <div className="contact-value">{value}</div>
            </div>
        </li>
    );
}


function Sidebar() {
    const contacts = [
        { icon: 'mail-outline', title: 'Email', value: 'richard@example.com' },
        { icon: 'phone-portrait-outline', title: 'Phone', value: '+1 (213) 352-2795' },
        { icon: 'calendar-outline', title: 'Birthday', value: 'June 23, 1982' },
        { icon: 'location-outline', title: 'Location', value: 'Sacramento, California, USA' },
    ];


    return (
        <aside className="sidebar" data-sidebar>

            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={Myavatar} alt="Richard hanrick" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Richard hanrick</h1>
                    <p className="title">Web developer</p>
                </div>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    {contacts.map(({ icon, title, value }) => (
                        <ContactItem key={title} icon={icon} title={title} value={value} />
                    ))}
                </ul>
                {/* <div className="separator"></div> */}
                <ul className="social-list">
                    <SocialItem IconComponent={IoLogoFacebook} />
                    <SocialItem IconComponent={IoLogoTwitter} />
                    <SocialItem IconComponent={IoLogoInstagram} />
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
