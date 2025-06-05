import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
       Component: RootLayout,
       children: [
        {
            path: '/',
            Component: Home
        },
       
       ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])