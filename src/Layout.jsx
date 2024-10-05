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
                <Navbar className="position"/>
            <About /> {/* Replace with Routes to dynamically render different pages */}
             </div>
        </div>
    );
};

export default Layout;
