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
import BookingForm from "../pages/BookingForm/BookingForm";
import MyPostedService from "../pages/MyPostedService/MyPostedService";
import UpdatedService from "../pages/MyPostedService/UpdatedService";
import BookedServices from "../pages/BookedServices/BookedServices";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";
import ViewBooking from "../pages/ServiceToDo/ViewBooking";
import Loading from "../pages/Loading/Loading";
import AboutUs from "../pages/AboutUS/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome/DashboardHome";

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
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('https://a11-service-web-application-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`https://a11-service-web-application-server.vercel.app/services/${params.id}`),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/bookingServices/:id',
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`https://a11-service-web-application-server.vercel.app/services/${params.id}`),
                element: <PrivateRoute><BookingForm></BookingForm></PrivateRoute>
            },
            {
                path: '/myPostedServices',
                element: <PrivateRoute><MyPostedService></MyPostedService></PrivateRoute>
            },
            {
                path: "/updateService/:id",
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`https://a11-service-web-application-server.vercel.app/services/${params.id}`),
                element: <PrivateRoute><UpdatedService></UpdatedService></PrivateRoute>
            },
            {
                path: '/bookedServices',
                element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
            },
            {
                path: '/serviceToDo',

                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            },
            {
                path: '/bookings/:id',
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`https://a11-service-web-application-server.vercel.app/bookings/service/${params.id}`),
                element: <PrivateRoute><ViewBooking></ViewBooking></PrivateRoute>
            },
            {
                path: '/about',
                element: <AboutUs />
            }


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
       
         
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