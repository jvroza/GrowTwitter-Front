import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";

export function useTweet() {
    const context = useContext(TweetContext);

    if (!context) {
        throw new Error("useTweet deve ser usado dentro de um TweetProvider");
    }

    return context;
}