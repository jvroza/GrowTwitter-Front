
import { Outlet } from "react-router";

export function LayoutOutlet() {
    return (
        <>
            <h1>Menu</h1>
            <Outlet />
            <h1>Interests</h1>
        </>

    )
}