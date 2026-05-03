import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext.tsx";


export function useProfile() {
    
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfile deve ser usado dentro de um ProfileProvider")
    }

    return context;
}