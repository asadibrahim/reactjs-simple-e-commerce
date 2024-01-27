import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../homePage";
import Blogs from "../blogs";
import Navbar from "./nav-bar";
import NotFound from "../NotFound/NotFound";
import AllProducts from "../components/AllProjucts";
import ProductDetails from "../components/ProductDetails";
import ShoppingCart from "../components/shoppingcart/ShoppingCart";

function Routes() {
    const LayOuts = () => {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        )
    }

    const BrowserRoutes = createBrowserRouter([
        {
            path: "/",
            element: <LayOuts />,
            errorElement: <NotFound />,
            children: [

                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/blogs",
                    element: <Blogs />
                },
                {
                    path: "/products",
                    element: <AllProducts />
                },
                {
                    path:"/product/:id",
                    element:<ProductDetails />
                },
                {
                    path:"/shopping-cart",
                    element:<ShoppingCart />
                },
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoutes} />
    )
}
export default Routes;