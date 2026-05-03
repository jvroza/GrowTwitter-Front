import { api } from "./api";
import type {
    IApiResponse,
    ICreateReply,
    IGetTweetResponse, ILikeResponse,
    INewTweet,
    INewTweetResponse,
    ITweetId
} from "../types/typesTeweets.ts";


// CRIA UM NOVO TWEET.
export async function tweet (data: INewTweet): Promise<INewTweetResponse>  {

    try {

        const response = await api.post<INewTweetResponse>("/tweets", data);
        return response.data;

    } catch (error){
        console.log("Erro ao criar tweet", error);
        throw error;
    }

}

// CRIA UMA RESPOSTA A UM TWEET (REPLACE).
export async function createReply (data:ICreateReply): Promise<INewTweetResponse> {

    try {

        const response = await api.post<INewTweetResponse>("/replies", data);
        return response.data;

    } catch (error){
        console.log("Erro ao criar resposta a um tweet", error);
        throw error;
    }

}

// LISTA TWEETS POR ID DO TWEET.
export async function listTweets (data: ITweetId): Promise<IGetTweetResponse> {

    try {

        const response = await api.get<IGetTweetResponse>(`/tweets/${data.tweetId}`);
        return response.data;

    } catch (error){
        console.log("Erro ao listar tweets por id", error);
        throw error;
    }

}

// ATUALIZA UM TWEET POR ID.
export async function updateTweet (tweetId: string, data: INewTweet): Promise<INewTweetResponse> {

    try {

        const response = await api.put<INewTweetResponse>(`/tweets/${tweetId}`, data);

        return response.data;

    } catch (error){
        console.log("Erro ao atualizar um tweet por id", error);
        throw error;
    }

}

//DELETA UM TWEET POR ID.
export async function delTweet (data: ITweetId): Promise<void> {

    try {

        await api.delete(`/tweets/${data.tweetId}`);

    } catch (error){
        console.log("Erro ao deletar um tweet por id", error);
        throw error;
    }

}

// LISTA TWEETS DE UM USUÁRIO
export async function listTweetsId (data: { id: string }): Promise<IGetTweetResponse[]> {

    try {

        const response = await api.get<IGetTweetResponse[]>(`/users/${data.id}/tweets`);
        return response.data;

    } catch (error){
        console.log("Erro ao listar tweets de um usuário", error);
        throw error;
    }

}

// LISTA TWEETS DOS USUÁRIOS SEGUIDOS
export async function listTweetsFollowed (): Promise<IApiResponse<IGetTweetResponse[]>> {

    try {

        const response = await api.get<IApiResponse<IGetTweetResponse[]>>(`/feed`);
        return response.data;

    } catch (error){
        console.log("Erro ao listar tweets dos usuários seguidos", error);
        throw error;
    }

}

// LIKE NO TWEET
export async function likeTweet (data: ITweetId): Promise<ILikeResponse> {

    try {

        const response = await api.post<ILikeResponse>(`/likes`, data);
        return response.data;

    } catch (error){
        console.log("Erro ao dar like no tweet", error);
        throw error;
    }

}

// DELETE LIKE
export async function deleteLikeTweet (data: ITweetId): Promise<void> {

    try {

        await api.delete(`/likes`, {data});

    } catch (error){
        console.log("Erro ao deletar like no tweet", error);
        throw error;
    }

}
