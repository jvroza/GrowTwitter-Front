import type { IUser } from "../types/typesUsers.ts";
import { api } from "./api";


// BUSCA LISTA DE USUARIOS

export async function user (): Promise<IUser[]> {
    try {

        const responseLista = await api.get<IUser[]>("/users");
        return responseLista.data;

    } catch (error){
        console.log("Erro ao listar usuários", error);
        throw error;
    }
}

// BUSCA USUARIO POR ID

export async function userByid () : Promise<IUser> {
    try {

        const userId = localStorage.getItem("userId");

        if (userId!) {
            console.log("Usuario não encontrado");
        }

        const userIdResponse = await api.get("/users/${userId}");

        return userIdResponse.data;

    } catch (error){
        console.log("Erro ao buscar usuário por id", error);
        throw error;
    }
}