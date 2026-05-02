// Tipagem base para  tweets

export type TweetType = "NORMAL" | "REPLY";

export interface ITweet {
    id: string,
    content: string,
    authorId: string,
    type: TweetType,
    createdAt: string,
}

export interface ITweetById extends ITweet {
    author: {
        id: string,
        name: string,
        username: string,
    };
    likes: number;
    replies: ITweet[];
}


// Tipagem para inserir e atualizar um tweet

export interface INewTweet {
    content: string;
}


// Tipagem para replice

export interface ICreateReply {
    content: string;
    replyTo: string;
}

