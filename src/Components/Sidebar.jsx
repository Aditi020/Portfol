
import React, { useState, useEffect } from 'react';
import Myavatar from "../assets/avatar1.png";
import '../Style/Sidebar.css';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoChevronDown } from 'react-icons/io5';


function SocialItem({ IconComponent }) {
    return (
        <li className="social-item">
            <a href="#" className="social-link">
                <IconComponent />
            </a>
        </li>
    );
};

function ContactItem({ icon, title, value }) {
    let IconComponent;
    switch (icon) {
        case 'mail-outline':
            IconComponent = IoMailOutline;
            break;
        case 'phone-portrait-outline':
            IconComponent = IoPhonePortraitOutline;
            break;
        case 'calendar-outline':
            IconComponent = IoCalendarOutline;
            break;
        case 'location-outline':
            IconComponent = IoLocationOutline;
            break;
        default:
            IconComponent = IoMailOutline; // Default icon
    }

    return (
        <li className="contact-item">
            <div className="icon-box">
                <IconComponent />
            </div>
            <div className="contact-info">
                <p className="contact-title">{title}</p>
                <div className="contact-value">{value}</div>
            </div>
        </li>
    );
};

function Sidebar() {
    const contacts = [
        { icon: 'mail-outline', title: 'Email', value: 'AK24er@gmail.com' },
        { icon: 'phone-portrait-outline', title: 'Phone', value: '+91 9910158592' },
        { icon: 'calendar-outline', title: 'Birthday', value: 'Febr 24, 2002' },
        { icon: 'location-outline', title: 'Location', value: 'Ghaziabad, Uttar Pradesh, India' },
    ];

    const [showDropdown, setShowDropdown] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1250) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
                setShowDropdown(false); // Ensure dropdown is closed on larger screens
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <sidebar className="sidebar-container" >
        <aside className={`sidebar ${isSmallScreen ? 'small-screen' : ''}`} >
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={Myavatar} alt="Richard hanrick" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Aditi Kumar</h1>
                    <p className="title">Full-Stack Developer</p>
                </div>
                {isSmallScreen && (
                    <button className="info_more-btn" onClick={handleDropdownClick}>
                        <span>Show Contacts</span>
                        <IoChevronDown />
                    </button>
                )}
            </div>

            {(!isSmallScreen || showDropdown) && (
                <div className="sidebar-info_more">
                    <div className="separator"></div>
                    <ul className="contacts-list">
                        {contacts.map(({ icon, title, value }) => (
                            <ContactItem key={title} icon={icon} title={title} value={value} />
                        ))}
                    </ul>
                    <div className="separator"></div>
                    <ul className="social-list" style={{ listStyle: 'none' }}>
                        <SocialItem IconComponent={IoLogoFacebook} />
                        <SocialItem IconComponent={IoLogoTwitter} />
                        <SocialItem IconComponent={IoLogoInstagram} />
                    </ul>
                </div>
            )}
        </aside>
        </sidebar>
    );
}

export default Sidebar;


// Problems left are 
// 1st transition
// 2nd console show errors