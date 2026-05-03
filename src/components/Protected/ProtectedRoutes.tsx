import { useAuth } from "../../hooks/useAuth.ts";
import { useNavigate } from "react-router";
import {type ReactNode, useEffect} from "react";

interface ProtectedRoutesProps {
    children: ReactNode;
}

export function ProtectedRoutes ({ children }: Readonly<ProtectedRoutesProps> ) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login")
        }
    }, [ isAuthenticated ,navigate])

    if (!isAuthenticated) {
        return null
    }

    return (
        <>
            {children}
        </>
    )

}