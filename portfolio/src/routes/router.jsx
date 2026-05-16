import Main from "@/layouts/main";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                lazy: async () => {
                    const module = await import('@/pages/Products');
                    return {
                        Component: module.default,
                    };
                },
            },
            {
                path: "/cart",
                lazy: async () => {
                    const module = await import('@/pages/Cart');
                    return {
                        Component: module.default,
                    };
                },
            },
            {
                path: "/product/:id",
                lazy: async () => {
                    const module = await import('@/pages/ProductDetails');
                    return {
                        Component: module.default,
                    };
                },
            },
            {
                path: "/*",
                lazy: async () => {
                    const module = await import('@/pages/NotFound');
                    return {
                        Component: module.default,
                    };
                },
            },
        ]
    },
    {
        path: "/login",
        lazy: async () => {
            const module = await import('@/pages/Login');
            return {
                Component: module.Login,
            };
        },
    },
    {
        path: "/signup",
        lazy: async () => {
            const module = await import('@/pages/Signup');
            return {
                Component: module.Signup,
            };
        },
    },
]);