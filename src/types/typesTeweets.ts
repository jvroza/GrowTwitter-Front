import type { IUserBasic } from "./typesAuth.ts";

// TIPAGEM PARA CRIAR UM TWEET.
export interface INewTweet {
    content: string;
}

export interface INewTweetResponse {
    id: string;
    content: string;
    authorId: string;
    type: TweetType;
    createdAt: string;
}

export type TweetType = "NORMAL" | "REPLY";


// TIPAGEM PARA CRIAR UMA RESPOSTA A UM TWEET (REPLY).
export interface ICreateReply {
    content: string;
    replyTo: string;
}


// TIPAGEM PARA LISTAR TWEETS
export interface IGetTweetResponse {
    id: string,
    content: string,
    authorId: string,
    type: TweetType,
    createdAt: string,
    author: IUserBasic,
    likes: number;
    replies: IGetTweetResponse[];
}

// TIPAGEM DE LIKES
export interface ITweetId {
    tweetId: string;
}

export interface ILikeResponse {
    success?: boolean;
}

// TIPAGEM PADRÃO DE RESPOSTA DA API
export interface IApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}