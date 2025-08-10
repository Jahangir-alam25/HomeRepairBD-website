import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <header className="sticky top-0 z-50">
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default RootLayout;