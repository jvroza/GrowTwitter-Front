import { useState } from "react";
import * as S from "../../pages/Feed/styleFeed";
import { useTweet } from "../../hooks/useTweet";
import type { IGetTweetResponse } from "../../types/typesTeweets";

interface TweetCardProps {
    tweet: IGetTweetResponse;
}

export function TweetCard({ tweet }: Readonly<TweetCardProps>) {
    const { like, removeLike, removeTweet } = useTweet();
    const [liked, setLiked] = useState(false);

    async function handleLike() {
        if (liked) {
            await removeLike({ tweetId: tweet.id });
        } else {
            await like({ tweetId: tweet.id });
        }
        setLiked(!liked);
    }

    return (
        <S.TweetCard key={tweet.id}>
            <S.TweetAvatar
                src={tweet.author.imageUrl ?? "/assets/avatar.png"}
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
                    <S.ActionBtn onClick={handleLike}>
                        {liked ? "❤️" : "🤍"} {tweet.likes}
                    </S.ActionBtn>
                    <S.ActionBtn onClick={() => removeTweet({ tweetId: tweet.id })}>
                        🗑️
                    </S.ActionBtn>
                </S.TweetActions>
            </S.TweetContent>
        </S.TweetCard>
    );
}