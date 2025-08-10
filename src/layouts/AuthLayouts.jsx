import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';

const AuthLayouts = () => {
    return (
        <div>
            <header className="sticky top-0 z-50">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayouts;