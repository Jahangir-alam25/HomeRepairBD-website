import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link, NavLink } from 'react-router';
import ThemeToggleBTN from './ThemeToggleBTN';
import { RiArrowDropDownLine } from 'react-icons/ri';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        console.log("user trying to LogOut");
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logout Successfully",
                    text: "You clicked the button!",
                    icon: "success"
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/services"
                >
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                >
                    Dashboard
                </NavLink>
            </li>



            <li>
                <NavLink
                    to="/about"
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );
    return (
        <nav className=" border-b  py-3 bg-purple-400 dark:bg-gray-800  dark:text-white ">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 ">
                    <Link to='/'>
                        <img src="https://i.ibb.co/GvH5Nmzf/mortgage.png" alt="logo" className="h-12 w-12" />
                    </Link>
                    <Link to='/'>   <motion.h1
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
                    >
                        HomeRepairBD
                    </motion.h1></Link>

                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex space-x-3">
                    <ul className="flex items-center gap-3">
                        {links}
                    </ul>
                </div>
                <div className="hidden lg:flex items-center gap-6">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <img
                                    src={`${user.photoURL ? user.photoURL : "https://i.ibb.co/spxk8Q2n/5464588.jpg"}`}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                                <span className="absolute z-50 top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                    {user.displayName}
                                </span>
                            </div>
                            <button onClick={handleLogOut} className="text-sm btn rounded px-10 bg-linear-65 from-[#911ae3] to-pink-500 text-white hover:underline">Logout</button>
                        </div>
                    ) : (
                        <div className="space-x-3">
                            <Link to="/auth/register" className="bg-linear-65 from-[#911ae3] to-pink-500  text-white px-10 py-2 rounded  text-sm">
                                Sign Up
                            </Link>
                            <Link to="/auth/login" className="bg-linear-65 from-[#911ae3] to-pink-500  text-white px-10 py-2 rounded  text-sm">
                                Login
                            </Link>
                        </div>
                    )}
                    <ThemeToggleBTN></ThemeToggleBTN>

                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute right-0 dropdown-content menu bg-base-100 rounded-box z-50 w-60 p-2 shadow-sm dark:bg-gray-700 dark:text-white'>
                    <div className="lg:hidden mt-4 space-y-2">
                        <div className="flex gap-3 justify-between">
                            <div>
                                <ThemeToggleBTN></ThemeToggleBTN>
                            </div>
                            <div className="flex items-start gap-3">

                                <ul>
                                    {links}
                                </ul>
                            </div>
                        </div>

                        {user ? (
                            <div className="flex items-center gap-3 px-3">
                                <img
                                    src={`${user.photoURL ? user.photoURL : ''}`}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-sm">{user.username}</span>
                                <button onClick={handleLogOut} className="btn px-10 bg-linear-65 from-[#911ae3] to-pink-500 text-white hover:underline ml-auto">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className=" gap-3 flex justify-between ">
                                <Link to="/auth/register" className="bg-linear-65 from-[#911ae3] to-pink-500 btn-block text-white text-center py-2 rounded  text-sm">
                                    Sign Up
                                </Link>
                                <Link to="/auth/login" className="bg-linear-65 from-[#911ae3] to-pink-500 btn-block text-white text-center py-2 rounded  text-sm">
                                    Login
                                </Link>
                            </div>

                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;