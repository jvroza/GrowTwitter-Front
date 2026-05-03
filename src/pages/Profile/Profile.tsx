import { useNavigate } from "react-router-dom";
import * as S from "./styleProfile";
import { useProfile } from "../../hooks/useProfile";
import { delTweet } from "../../services/tweet";

export function Profile() {
    const navigate = useNavigate();
    const { profileUser, tweets, isLoading } = useProfile();

    if (isLoading) return <p>Carregando...</p>;

    async function handleDelete(tweetId: string) {
        try {
            await delTweet({ tweetId });
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
        }
    }

    return (
        <S.Container>
            <S.TopBar>
                <S.BackButton onClick={() => navigate(-1)}>←</S.BackButton>
                <S.TopInfo>
                    <S.TopName>Perfil de @{profileUser?.username}</S.TopName>
                    <S.TweetCount>{tweets.length} tweets</S.TweetCount>
                </S.TopInfo>
            </S.TopBar>

            <S.Banner />

            <S.ProfileSection>
                <S.AvatarWrapper>
                    <S.Avatar
                        src={profileUser?.imageUrl ?? "/assets/avatar.png"}
                        alt="avatar"
                    />
                </S.AvatarWrapper>
                <S.UserName>{profileUser?.name}</S.UserName>
                <S.UserHandle>@{profileUser?.username}</S.UserHandle>
            </S.ProfileSection>

            <S.Divider />

            {tweets.map((tweet) => (
                <S.TweetCard key={tweet.id}>
                    <S.TweetAvatar
                        src={profileUser?.imageUrl ?? "/assets/avatar.png"}
                        alt="avatar"
                    />
                    <S.TweetContent>
                        <S.TweetHeader>
                            <S.TweetUser>{tweet.author.name}</S.TweetUser>
                            <S.TweetHandle>@{tweet.author.username}</S.TweetHandle>
                        </S.TweetHeader>
                        <S.TweetText>{tweet.content}</S.TweetText>
                        <S.TweetActions>
                            <S.ActionBtn>💬 {tweet.replies.length}</S.ActionBtn>
                            <S.ActionBtn>🤍 {tweet.likes}</S.ActionBtn>
                            <S.ActionBtn onClick={() => handleDelete(tweet.id)}>🗑️</S.ActionBtn>
                        </S.TweetActions>
                    </S.TweetContent>
                </S.TweetCard>
            ))}
        </S.Container>
    );
}