// import React from 'react';
// import { Link, NavLink, Outlet } from 'react-router';
// // import ProFastLogo from '../pages/shared/ProFastLogo/ProFastLogo';
// import {
//     FaClipboardList,
//     FaHome,
//     FaPlus,
//     FaTasks,
//     FaTools,

// } from 'react-icons/fa';


// const DashboardLayout = () => {



//     return (
//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">
//                 {/* Topbar for Mobile */}
//                 <div className="navbar bg-base-300 w-full lg:hidden">
//                     <div className="flex-none">
//                         <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                     d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         </label>
//                     </div>
//                     <div className="mx-2 text-xl font-semibold">Dashboard</div>
//                 </div>

//                 {/* Outlet content */}
//                 <Outlet />
//             </div>

//             <div className="drawer-side ">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                 <ul className="menu border-purple-500 bg-purple-200 border-r-4 rounded-md text-base-content min-h-full w-70 p-4">
//                     <div className="flex items-center gap-2 ">
//                         <Link to='/'>
//                             <img src="https://i.ibb.co/GvH5Nmzf/mortgage.png" alt="logo" className="h-12 w-12" />
//                         </Link>
//                         <Link to='/'> 
//                           <h1
//                             animate={{
//                                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                             }}
//                             transition={{
//                                 duration: 5,
//                                 repeat: Infinity,
//                                 ease: "linear",
//                             }}
//                             className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
//                         >
//                             HomeRepairBD
//                         </h1></Link>

//                     </div>

//                     {/* Common link */}
//                     <li>
//                         <NavLink to="/dashboard">
//                             <FaHome className="mr-2" />
//                             Dashboard Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/addService">
//                             <FaPlus className="mr-2" />
//                             Add Service
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/myPostedServices">
//                             <FaTools className="mr-2" />
//                             Manage Service
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/bookedServices">
//                             <FaClipboardList className="mr-2" />
//                             Booked Services
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/serviceToDo">
//                             <FaTasks className="mr-2" />
//                             Service To Do
//                         </NavLink>
//                     </li>


//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;

import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
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
      
      <div className="drawer-content flex flex-col bg-purple-50 dark:bg-gray-900 min-h-screen">
        {/* Topbar for Mobile */}
        <div className="navbar bg-base-300 dark:bg-gray-800 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Dashboard
          </div>
        </div>

        {/* Outlet content */}
        <Outlet />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu border-purple-500 bg-purple-200 dark:bg-gray-800 dark:border-purple-700 border-r-4 rounded-md text-base-content dark:text-gray-300 min-h-full w-70 p-4">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/">
              <img
                src="https://i.ibb.co/GvH5Nmzf/mortgage.png"
                alt="logo"
                className="h-12 w-12"
              />
            </Link>
            <Link to="/">
              <h1
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
                style={{
                  animation: "gradientShift 5s linear infinite",
                }}
              >
                HomeRepairBD
              </h1>
            </Link>
          </div>

          {/* Common link */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-200" : "hover:bg-purple-300 dark:hover:bg-purple-700"} rounded-md px-2 py-2`
              }
            >
              <FaHome className="mr-2" />
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addService"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-200" : "hover:bg-purple-300 dark:hover:bg-purple-700"} rounded-md px-2 py-2`
              }
            >
              <FaPlus className="mr-2" />
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myPostedServices"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-200" : "hover:bg-purple-300 dark:hover:bg-purple-700"} rounded-md px-2 py-2`
              }
            >
              <FaTools className="mr-2" />
              Manage Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookedServices"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-200" : "hover:bg-purple-300 dark:hover:bg-purple-700"} rounded-md px-2 py-2`
              }
            >
              <FaClipboardList className="mr-2" />
              Booked Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/serviceToDo"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-200" : "hover:bg-purple-300 dark:hover:bg-purple-700"} rounded-md px-2 py-2`
              }
            >
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

