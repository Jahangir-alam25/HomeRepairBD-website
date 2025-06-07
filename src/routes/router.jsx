import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayouts from "../layouts/AuthLayouts";
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login";
import AddService from "../pages/AddServise/AddService";
import PrivateRoute from "./PrivateRoute";
import AllService from "../pages/AllService/AllService";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

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
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services',
                Component: AllService,
                loader: () => fetch('http://localhost:3000/services')
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
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