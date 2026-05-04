import { createContext, useEffect, useState, useMemo, useCallback, type ReactNode } from "react";
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
    refreshFeed: () => Promise<void>;
}

interface TweetProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TweetContext = createContext<ITweetContextData>({} as ITweetContextData);

export function TweetProvider({ children }: Readonly<TweetProviderProps>) {

    const [tweets, setTweets] = useState<IGetTweetResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchFeed = useCallback(async () => {
        const storedUser = localStorage.getItem("user");
        const userId = storedUser ? JSON.parse(storedUser).id : null;

        const [feedResponse, userTweetsResponse] = await Promise.all([
            listTweetsFollowed(),
            userId ? listTweetsId({ id: userId }) : Promise.resolve({ data: [] as IGetTweetResponse[] }),
        ]);

        const feedTweets = feedResponse.data ?? [];
        const userTweets = userTweetsResponse.data ?? [];

        const combined = [...feedTweets, ...userTweets];
        const unique = combined.filter(
            (tweet, index, self) => self.findIndex((t) => t.id === tweet.id) === index
        );

        unique.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return unique;
    }, []);

    useEffect(() => {
        async function loadFeed() {
            try {
                const combined = await fetchFeed();
                setTweets(combined);
            } catch (error) {
                console.log("Erro ao carregar feed", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadFeed();
    }, [fetchFeed]);

    useEffect(() => {
        async function handleFocus() {
            try {
                const combined = await fetchFeed();
                setTweets(combined);
            } catch (error) {
                console.log("Erro ao recarregar feed", error);
            }
        }

        window.addEventListener("focus", handleFocus);
        return () => window.removeEventListener("focus", handleFocus);
    }, [fetchFeed]);

    const refreshFeed = useCallback(async () => {
        try {
            const combined = await fetchFeed();
            setTweets(combined);
        } catch (error) {
            console.log("Erro ao recarregar feed", error);
        }
    }, [fetchFeed]);

    const createTweet = useCallback(async (data: INewTweet) => {
        try {
            setIsLoading(true);
            await tweet(data);
            const combined = await fetchFeed();
            setTweets(combined);
        } catch (error) {
            console.log("Erro ao criar tweet", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, [fetchFeed]);

    const removeTweet = useCallback(async (data: ITweetId) => {
        try {
            await delTweet(data);
            setTweets((prev) => prev.filter((t) => t.id !== data.tweetId));
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
            throw error;
        }
    }, []);

    const editTweet = useCallback(async (tweetId: string, data: INewTweet) => {
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
    }, []);

    const getTweetById = useCallback(async (data: ITweetId) => {
        try {
            return await listTweets(data);
        } catch (error) {
            console.log("Erro ao buscar tweet por id", error);
            throw error;
        }
    }, []);

    const getUserTweets = useCallback(async (userId: string): Promise<IGetTweetResponse[]> => {
        try {
            const response = await listTweetsId({ id: userId });
            return response.data;
        } catch (error) {
            console.log("Erro ao buscar tweets do usuário", error);
            throw error;
        }
    }, []);

    const reply = useCallback(async (data: ICreateReply) => {
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
    }, []);

    const like = useCallback(async (data: ITweetId) => {
        try {
            await likeTweet(data);
        } catch (error) {
            console.log("Erro ao dar like", error);
            throw error;
        }
    }, []);

    const removeLike = useCallback(async (data: ITweetId) => {
        try {
            await deleteLikeTweet(data);
        } catch (error) {
            console.log("Erro ao remover like", error);
            throw error;
        }
    }, []);

    const value = useMemo<ITweetContextData>(() => ({
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
        refreshFeed,
    }), [tweets, isLoading, createTweet, removeTweet, editTweet, getTweetById, getUserTweets, reply, like, removeLike, refreshFeed]);

    return (
        <TweetContext.Provider value={value}>
            {children}
        </TweetContext.Provider>
    );
}