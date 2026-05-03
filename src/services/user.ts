import type {IFollowUser, IGetFollowers, IUser, IUserId} from "../types/typesAuth.ts";
import { api } from "./api";


// BUSCA LISTA DE USUARIOS.

export async function user (): Promise<IUser[]> {

    try {

        const responseLista = await api.get<IUser[]>("/users");
        return responseLista.data;

    } catch (error){
        console.log("Erro ao listar usuários", error);
        throw error;
    }

}

// BUSCA USUARIO POR ID.

export async function userByid () : Promise<IUserId> {

    try {

        const userId = localStorage.getItem("userId");

        if (!userId) {
            throw new Error("userId não encontrado no localStorage")
        }

        const userIdResponse = await api.get<IUserId>(`/users/${userId}`);

        return userIdResponse.data;

    } catch (error){
        console.log("Erro ao buscar usuário por id", error);
        throw error;
    }

}

// SEGUE UM NOVO USUARIO
export async function newFollowe (data:IFollowUser) : Promise<void> {

    try {

        await api.post("/followers",data);

    } catch (error){
        console.log("Erro ao newFollowe", error);
        throw error;
    }

}

// DELETA UM USUARIO SEGUIDO
export async function delFollowe (data: IFollowUser) : Promise<void> {

    try {

        await api.delete("/followers", {data});

    } catch (error){
        console.log("Erro ao del Followe", error);
        throw error;
    }

}


// LISTAR SEGUIDORES
    export async function followers () : Promise<IGetFollowers> {

    try {

        const responseFollowers = await api.get<IGetFollowers>("/followers");
        return responseFollowers.data;

    } catch (error) {
        console.log("Erro ao listar seguidores", error);
        throw error;
    }

}