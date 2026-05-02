import type {
    IAuthLogin,
    IAuthLoginResponse,
    IAuthRegister,
    IAuthRegisterResponse,
} from "../types/typesUsers.ts";
import { api } from "./api";


// FAZ LOGIN

export async function login (dadosUser: IAuthLogin): Promise<IAuthLoginResponse> {
    try {

        const responseDados = await api.post("/auth/login", dadosUser);
        return responseDados.data;

    } catch (error){
        console.log("Erro ao fazer login", error);
        throw error;
    }
}

// REGISTRA UM NOVO USUARIO

export async function register (dadosUser: IAuthRegister): Promise<IAuthRegisterResponse> {
    try {
        const response = await api.post<IAuthRegisterResponse>("/auth/register", dadosUser );

        return response.data;

    } catch (error) {
        console.log("Erro ao registrar usuário", error);
        throw error;
    }
}