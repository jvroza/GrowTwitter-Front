import { useState } from "react";
import * as S from "../../pages/Feed/styleFeed";
import { useTweet } from "../../hooks/useTweet";
import type { IGetTweetResponse } from "../../types/typesTeweets";

interface TweetCardProps {
    tweet: IGetTweetResponse;
}

export function TweetCard({ tweet }: Readonly<TweetCardProps>) {
    const { like, removeLike, removeTweet, reply, refreshFeed } = useTweet();
    const [liked, setLiked] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showReply, setShowReply] = useState(false);
    const [replyContent, setReplyContent] = useState("");
    const [isSendingReply, setIsSendingReply] = useState(false);

    async function handleLike() {
        if (liked) {
            await removeLike({ tweetId: tweet.id });
        } else {
            await like({ tweetId: tweet.id });
        }
        setLiked(!liked);
    }

    async function handleDelete() {
        if (isDeleting) return;
        try {
            setIsDeleting(true);
            await removeTweet({ tweetId: tweet.id });
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
        } finally {
            setIsDeleting(false);
        }
    }

    async function handleReply() {
        if (!replyContent.trim() || isSendingReply) return;
        try {
            setIsSendingReply(true);
            await reply({ content: replyContent, replyTo: tweet.id });
            await refreshFeed();
            setReplyContent("");
            setShowReply(false);
        } catch (error) {
            console.log("Erro ao comentar", error);
        } finally {
            setIsSendingReply(false);
        }
    }

    return (
        <S.TweetCard>
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
                    <S.ActionBtn onClick={() => setShowReply(!showReply)}>
                        💬 {tweet.replies.length}
                    </S.ActionBtn>
                    <S.ActionBtn onClick={handleLike}>
                        {liked ? "❤️" : "🤍"} {tweet.likes}
                    </S.ActionBtn>
                    <S.ActionBtn onClick={handleDelete} disabled={isDeleting}>
                        {isDeleting ? "⏳" : "🗑️"}
                    </S.ActionBtn>
                </S.TweetActions>

                {showReply && (
                    <S.ReplyBox>
                        <S.ReplyInput
                            placeholder="Escreva sua resposta..."
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            maxLength={300}
                            disabled={isSendingReply}
                        />
                        <S.ReplyActions>
                            <S.ReplyCount>{300 - replyContent.length}</S.ReplyCount>
                            <S.ReplyButton
                                onClick={handleReply}
                                disabled={!replyContent.trim() || isSendingReply}
                            >
                                {isSendingReply ? "Enviando..." : "Responder"}
                            </S.ReplyButton>
                        </S.ReplyActions>
                    </S.ReplyBox>
                )}

                {tweet.replies.length > 0 && (
                    <S.RepliesList>
                        {tweet.replies.map((r) => (
                            <S.ReplyItem key={r.id}>
                                <S.ReplyAvatar
                                    src={r.author?.imageUrl ?? "/assets/avatar.png"}
                                    alt="avatar"
                                />
                                <S.ReplyContent>
                                    <S.ReplyHeader>
                                        <S.TweetUser>{r.author?.name}</S.TweetUser>
                                        <S.TweetHandle>@{r.author?.username}</S.TweetHandle>
                                    </S.ReplyHeader>
                                    <S.TweetText>{r.content}</S.TweetText>
                                </S.ReplyContent>
                            </S.ReplyItem>
                        ))}
                    </S.RepliesList>
                )}
            </S.TweetContent>
        </S.TweetCard>
    );
}