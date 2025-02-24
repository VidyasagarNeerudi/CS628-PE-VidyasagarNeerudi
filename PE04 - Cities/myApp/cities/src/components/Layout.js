// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
    <div>
        <header>
            <h1>Cities</h1>
            <nav>
                <Link to="/">Cities List</Link>
                <Link to="/add-city">Add City</Link>
            </nav>
        </header>
        <main>{children}</main>
    </div>
);

export default Layout;