import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './Layout.css';

const Layout = ({ children }) => { // Accept children props
    return (
        <div className="layout">
            <Sidebar />
            <div  className="page-content">
                {children}{/* Render the children, which will be the routed components */}
                <Navbar className="navbar" />
            </div>
        </div>
    );
};

export default Layout;
