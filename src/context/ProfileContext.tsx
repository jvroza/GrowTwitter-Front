import { createContext, useEffect, useState, useMemo, type ReactNode } from "react";
import { userByid, followers } from "../services/user";
import { listTweetsId, delTweet } from "../services/tweet";
import type { IUserId, IGetFollowers } from "../types/typesAuth";
import type { IGetTweetResponse } from "../types/typesTeweets";

interface IProfileContextData {
    profileUser: IUserId | null;
    tweets: IGetTweetResponse[];
    followersData: IGetFollowers | null;
    isLoading: boolean;
    deleteTweet: (tweetId: string) => Promise<void>;
}

interface ProfileProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProfileContext = createContext<IProfileContextData>({} as IProfileContextData);

export function ProfileProvider({ children }: Readonly<ProfileProviderProps>) {

    const [profileUser, setProfileUser] = useState<IUserId | null>(null);
    const [tweets, setTweets] = useState<IGetTweetResponse[]>([]);
    const [followersData, setFollowersData] = useState<IGetFollowers | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    async function loadProfile() {
        try {
            const userData = await userByid();
            const tweetsData = await listTweetsId({ id: userData.id });
            const followersResult = await followers();

            setProfileUser(userData);
            setTweets(tweetsData.data ?? []);
            setFollowersData(followersResult);
        } catch (error) {
            console.log("Erro ao carregar perfil", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadProfile();
    }, []);

    async function deleteTweet(tweetId: string) {
        try {
            await delTweet({ tweetId });
            setTweets((prev) => prev.filter((t) => t.id !== tweetId));
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
            throw error;
        }
    }

    const value = useMemo(() => ({
        profileUser,
        tweets,
        followersData,
        isLoading,
        deleteTweet,
    }), [profileUser, tweets, followersData, isLoading]);

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}