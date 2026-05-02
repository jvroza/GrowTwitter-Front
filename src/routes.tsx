import {createBrowserRouter, Navigate} from "react-router";
import { LayoutOutlet } from "./Layout/LayoutOutlet.tsx";
import {ProtectedRoutes} from "./components/ProtectedRoutes.tsx";

export const routes = createBrowserRouter([
    { path: "/login", element: <h1>Login</h1> },
    { path: "/register", element: <h1>Register</h1> },

    {
        path: "/",
        element: (
            <ProtectedRoutes>
                <LayoutOutlet />
            </ProtectedRoutes>
        ),
        children: [
            {
                index: true,
                element: <Navigate to= "/feed" replace />
            },
            {
                path: "/feed",
                element: <h1>Feed</h1>
            },
            {
                path: "/explore",
                element: <h1>Explore</h1>
            },
            {
                path: "/profile",
                element: <h1>Profile</h1>
            },
        ]
    }
])