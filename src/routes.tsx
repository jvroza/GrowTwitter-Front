import { createBrowserRouter, Navigate } from "react-router";
import { LayoutOutlet } from "./Layout/LayoutOutlet.tsx";
import { ProtectedRoutes } from "./components/Protected/ProtectedRoutes.tsx";
import { Login } from "./pages/Login/login.tsx";
import { Feed } from "./pages/Feed/feed.tsx";
import { Explore } from "./pages/Explore/explore.tsx";
import { Profile } from "./pages/Profile/Profile.tsx";
import { Register } from "./pages/Register/registerUser.tsx";
import { ProfileProvider } from "./context/ProfileContext.tsx";
import {TweetProvider} from "./context/TweetContext.tsx";

export const routes = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register />},

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
                element: <Navigate to= "/login" replace />
            },
            {
                path: "/feed",
                element: (
                    <TweetProvider>
                        <Feed />
                    </TweetProvider>
                )
            },
            {
                path: "/explore",
                element: <Explore />
            },
            {
                path: "/profile",
                element: (
                    <ProfileProvider >
                        <Profile />
                    </ProfileProvider>
                )
            },
        ]
    }
])