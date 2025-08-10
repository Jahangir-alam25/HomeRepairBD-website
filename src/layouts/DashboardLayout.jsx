import React from 'react';
import { NavLink, Outlet } from 'react-router';
// import ProFastLogo from '../pages/shared/ProFastLogo/ProFastLogo';
import {
    FaClipboardList,
    FaHome,
    FaPlus,
    FaTasks,
    FaTools,

} from 'react-icons/fa';


const DashboardLayout = () => {



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Topbar for Mobile */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 text-xl font-semibold">Dashboard</div>
                </div>

                {/* Outlet content */}
                <Outlet />
            </div>

            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu border-primary bg-white border-r-4 rounded-md text-base-content min-h-full w-70 p-4">
                    {/* <WorkSyncProLogo></WorkSyncProLogo> */}

                    {/* Common link */}
                    <li>
                        <NavLink to="/dashboard">
                            <FaHome className="mr-2" />
                            Dashboard Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/addService">
                            <FaPlus className="mr-2" />
                            Add Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myPostedServices">
                            <FaTools className="mr-2" />
                            Manage Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookedServices">
                            <FaClipboardList className="mr-2" />
                            Booked Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/serviceToDo">
                            <FaTasks className="mr-2" />
                            Service To Do
                        </NavLink>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
