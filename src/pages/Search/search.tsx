import { useState } from "react";
import * as S from "./styleSearch";
import { useSearch } from "../../hooks/useSearch";

export function Search() {
    const { users, isLoading, follow, unfollow, isFollowing } = useSearch();
    const [loadingId, setLoadingId] = useState<string | null>(null);

    if (isLoading) return <p>Carregando...</p>;

    async function handleFollowToggle(userId: string) {
        if (loadingId) return;
        try {
            setLoadingId(userId);
            if (isFollowing(userId)) {
                await unfollow(userId);
            } else {
                await follow(userId);
            }
        } catch (error) {
            console.log("Erro ao seguir/deixar de seguir", error);
        } finally {
            setLoadingId(null);
        }
    }

    return (
        <S.Container>
            <S.PageTitle>Quem seguir</S.PageTitle>
            {users.map((user) => (
                <S.UserCard key={user.id}>
                    <S.UserAvatar
                        src={user.imageUrl ?? "/assets/avatar.png"}
                        alt="avatar"
                    />
                    <S.UserInfo>
                        <S.UserName>{user.name}</S.UserName>
                        <S.UserHandle>@{user.username}</S.UserHandle>
                    </S.UserInfo>
                    <S.FollowButton
                        onClick={() => handleFollowToggle(user.id)}
                        $following={isFollowing(user.id)}
                        disabled={loadingId === user.id}
                    >
                        {loadingId === user.id
                            ? "..."
                            : isFollowing(user.id)
                                ? "Deixar de seguir"
                                : "Seguir"}
                    </S.FollowButton>
                </S.UserCard>
            ))}
        </S.Container>
    );
}