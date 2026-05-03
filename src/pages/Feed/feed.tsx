import { TweetCard } from "../../components/Tweets/TweetCards";
import { useTweet } from "../../hooks/useTweet";
import * as S from "./styleFeed";

export function Feed() {
    const { tweets, isLoading } = useTweet();

    if (isLoading) return <p>Carregando...</p>;

    return (
        <S.Container>
            <S.PageTitle>Página Inicial</S.PageTitle>
            {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </S.Container>
    );
}
