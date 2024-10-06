import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import About from './Components/About'; // Example page
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="page-content">
                <About className="Page"/> {/* Replace with Routes to dynamically render different pages */}
                <Navbar className="navbar"/>
            </div>
        </div>
    );
};

export default Layout;
