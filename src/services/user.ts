import type { IFollowUser, IGetFollowers, IUser, IUserBasic, IUserId } from "../types/typesAuth.ts";
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
export async function userByid(): Promise<IUserId> {
    try {
        const storedUser = localStorage.getItem("user");
        const userId = storedUser ? JSON.parse(storedUser).id : null;

        if (!userId) {
            throw new Error("userId não encontrado no localStorage");
        }

        const userIdResponse = await api.get<{ success: boolean; data: IUserId }>(`/users/${userId}`);
        return userIdResponse.data.data;

    } catch (error) {
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
            const responseFollowers = await api.get<{
                success: boolean;
                data: { followers: IUserBasic[]; followings: IUserBasic[] };
            }>("/followers");

            return {
                followers: responseFollowers.data.data.followers,
                following: responseFollowers.data.data.followings,
            };

        } catch (error) {
            console.log("Erro ao listar seguidores", error);
            throw error;
        }

}