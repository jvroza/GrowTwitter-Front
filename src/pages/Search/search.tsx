import * as S from "./styleSearch";
import { useSearch } from "../../hooks/useSearch";

export function Search() {
    const { users, isLoading, follow, unfollow, isFollowing } = useSearch();

    if (isLoading) return <p>Carregando...</p>;

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
                        onClick={() =>
                            isFollowing(user.id)
                                ? unfollow(user.id)
                                : follow(user.id)
                        }
                        $following={isFollowing(user.id)}
                    >
                        {isFollowing(user.id) ? "Unfollow" : "Follow"}
                    </S.FollowButton>
                </S.UserCard>
            ))}
        </S.Container>
    );
}