import type { IAuthLogin, IUser } from "../types/typesUsers.ts";
import { createContext, type ReactNode, useEffect, useState, useMemo } from "react";
import { login } from "../services/login.ts";

interface IAuthContextData {
    user: IUser | null;
    token: string | null;
    isAuthenticated: boolean;
    signIn: (dadosUser: IAuthLogin) => Promise<void>;
    // signOut: () => Promise<void>;
    // signUp: (dadosUser: IAuthRegister) => Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContextData = createContext<IAuthContextData>({} as IAuthContextData);


export function AuthProvider({ children }: Readonly<AuthProviderProps>) {

    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");


        if (storedToken && storedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        setIsLoading(false);
    },[]);

    async function signIn (dadosUser: IAuthLogin) {
        try{

            const response = await login(dadosUser);
            const user = response.data?.authUser
            const token = response.data?.authToken


            if(!token || !user) {
                console.log("Token ou usuário não encontrados");
                return;
            }

            setUser(user)
            setToken(token);

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user))


        } catch (error){
            console.log("Erro ao fazer login", error);
        }
    }

    //criar função signOut
    //limpa os estados e o localStorage   pode usar clear ou remover as chaves utilizando removeItem.


    const value = useMemo(() => ({
        user,
        token,
        isAuthenticated: !!token,
        signIn,
        isLoading
    }), [user, token, isLoading]);

    return (
        <AuthContextData.Provider value={value}>
            {children}
        </AuthContextData.Provider>
    );

}