import React, { useState, useEffect } from 'react';
import Myavatar from "../assets/avatar-1.png";
import '../Style/Sidebar.css';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
import ChevronIcon from '@ltht-react/chevron-icon';

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
}

function Sidebar() {
    const contacts = [
        { icon: 'mail-outline', title: 'Email', value: 'richard@example.com' },
        { icon: 'phone-portrait-outline', title: 'Phone', value: '+1 (213) 352-2795' },
        { icon: 'calendar-outline', title: 'Birthday', value: 'June 23, 1982' },
        { icon: 'location-outline', title: 'Location', value: 'Sacramento, California, USA' },
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
        <aside className={`sidebar ${isSmallScreen ? 'small-screen' : ''}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={Myavatar} alt="Richard hanrick" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Richard hanrick</h1>
                    <p className="title">Web developer</p>
                </div>
                {isSmallScreen && (
                    <div className="info_more-btn" onClick={handleDropdownClick}>
                        {window.innerWidth <= 450 ? <ChevronIcon direction="down" /> : "Show Contacts"}
                    </div>
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
                    <ul className="social-list">
                        <SocialItem IconComponent={IoLogoFacebook} />
                        <SocialItem IconComponent={IoLogoTwitter} />
                        <SocialItem IconComponent={IoLogoInstagram} />
                    </ul>
                </div>
            )}
        </aside>
    );
}

export default Sidebar;


// Problems left are 
// 1st chevron icon
// 2nd transition
// 3rd name should come on right
// 4th background: var(--eerie-black-2); border: 1px solid var(--orange-yellow-crayola);border-radius: 20px; 
// these type of css is visible at screen <=580px and >=1250px even after usign dropdown menu but not when screen size is between 580px to 1250px.
