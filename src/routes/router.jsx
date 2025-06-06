import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayouts from "../layouts/AuthLayouts";
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login";
import AddService from "../pages/AddServise/AddService";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            }

        ]
    },
    {
        path: '/auth',
        Component: AuthLayouts,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])