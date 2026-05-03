import { useContext } from "react";
import { AuthContextData } from "../context/AuthContextData.tsx";

export function useAuth() {

    const context = useContext(AuthContextData);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider")
    }

    return context;

}