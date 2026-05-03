import { createContext, useEffect, useState, useMemo, type ReactNode } from "react";
import {
    tweet,
    listTweetsFollowed,
    delTweet,
    likeTweet,
    deleteLikeTweet,
    createReply,
    listTweets,
    updateTweet,
    listTweetsId
} from "../services/tweet";
import type {
    IGetTweetResponse,
    INewTweet,
    ITweetId,
    ICreateReply
} from "../types/typesTeweets";

interface ITweetContextData {
    tweets: IGetTweetResponse[];
    isLoading: boolean;
    createTweet: (data: INewTweet) => Promise<void>;
    removeTweet: (data: ITweetId) => Promise<void>;
    editTweet: (tweetId: string, data: INewTweet) => Promise<void>;
    getTweetById: (data: ITweetId) => Promise<IGetTweetResponse>;
    getUserTweets: (userId: string) => Promise<IGetTweetResponse[]>;
    reply: (data: ICreateReply) => Promise<void>;
    like: (data: ITweetId) => Promise<void>;
    removeLike: (data: ITweetId) => Promise<void>;
}

interface TweetProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TweetContext = createContext<ITweetContextData>({} as ITweetContextData);

export function TweetProvider({ children }: Readonly<TweetProviderProps>) {

    const [tweets, setTweets] = useState<IGetTweetResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadFeed() {
            try {
                const response = await listTweetsFollowed();
                setTweets(response.data);
            } catch (error) {
                console.log("Erro ao carregar feed", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadFeed();
    }, []);

    async function createTweet(data: INewTweet) {
        try {
            const newTweet = await tweet(data);
            setTweets((prev) => [newTweet as unknown as IGetTweetResponse, ...prev]);
        } catch (error) {
            console.log("Erro ao criar tweet", error);
            throw error;
        }
    }

    async function removeTweet(data: ITweetId) {
        try {
            await delTweet(data);
            setTweets((prev) => prev.filter((t) => t.id !== data.tweetId));
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
            throw error;
        }
    }

    async function editTweet(tweetId: string, data: INewTweet) {
        try {
            const updated = await updateTweet(tweetId, data);
            setTweets((prev) =>
                prev.map((t) =>
                    t.id === tweetId
                        ? { ...t, content: updated.content }
                        : t
                )
            );
        } catch (error) {
            console.log("Erro ao editar tweet", error);
            throw error;
        }
    }

    async function getTweetById(data: ITweetId) {
        try {
            return await listTweets(data);
        } catch (error) {
            console.log("Erro ao buscar tweet por id", error);
            throw error;
        }
    }

    async function getUserTweets(userId: string) {
        try {
            return await listTweetsId({ id: userId });
        } catch (error) {
            console.log("Erro ao buscar tweets do usuário", error);
            throw error;
        }
    }

    async function reply(data: ICreateReply) {
        try {
            const newReply = await createReply(data);
            setTweets((prev) =>
                prev.map((t) =>
                    t.id === data.replyTo
                        ? { ...t, replies: [...t.replies, newReply as unknown as IGetTweetResponse] }
                        : t
                )
            );
        } catch (error) {
            console.log("Erro ao criar resposta", error);
            throw error;
        }
    }

    async function like(data: ITweetId) {
        try {
            await likeTweet(data);
        } catch (error) {
            console.log("Erro ao dar like", error);
            throw error;
        }
    }

    async function removeLike(data: ITweetId) {
        try {
            await deleteLikeTweet(data);
        } catch (error) {
            console.log("Erro ao remover like", error);
            throw error;
        }
    }

    const value = useMemo(() => ({
        tweets,
        isLoading,
        createTweet,
        removeTweet,
        editTweet,
        getTweetById,
        getUserTweets,
        reply,
        like,
        removeLike,
    }), [tweets, isLoading]);

    return (
        <TweetContext.Provider value={value}>
            {children}
        </TweetContext.Provider>
    );
}