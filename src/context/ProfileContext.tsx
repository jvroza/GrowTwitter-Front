import { createContext, useEffect, useState, useMemo, type ReactNode } from "react";
import { userByid, followers } from "../services/user";
import { listTweetsId } from "../services/tweet";
import type { IUserId, IGetFollowers } from "../types/typesAuth";
import type { IGetTweetResponse } from "../types/typesTeweets";

interface IProfileContextData {
    profileUser: IUserId | null;
    tweets: IGetTweetResponse[];
    followersData: IGetFollowers | null;
    isLoading: boolean;
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

    useEffect(() => {
        async function loadProfile() {
            try {
                const userData = await userByid();
                const tweetsData = await listTweetsId({ id: userData.id });
                const followersResult = await followers();

                setProfileUser(userData);
                setTweets(tweetsData);
                setFollowersData(followersResult);

            } catch (error) {
                console.log("Erro ao carregar perfil", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadProfile();
    }, []);

    const value = useMemo(() => ({
        profileUser,
        tweets,
        followersData,
        isLoading,
    }), [profileUser, tweets, followersData, isLoading]);

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}

