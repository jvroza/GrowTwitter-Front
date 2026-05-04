import { useState } from "react";
import * as S from "./styleTweetModal";
import { useTweet } from "../../hooks/useTweet";

interface TweetModalProps {
    onClose: () => void;
}

export function TweetModal({ onClose }: Readonly<TweetModalProps>) {
    const { createTweet } = useTweet();
    const [content, setContent] = useState("");
    const [isSending, setIsSending] = useState(false);
    const maxChars = 300;

    async function handleSubmit() {
        if (!content.trim() || isSending) return;

        try {
            setIsSending(true);
            await createTweet({ content });
            setContent("");
            onClose();
        } catch (error) {
            console.log("Erro ao criar tweet", error);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <S.Overlay onClick={onClose}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.CloseButton onClick={onClose}>✕</S.CloseButton>
                <S.TextArea
                    placeholder="O que está acontecendo?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    maxLength={maxChars}
                    disabled={isSending}
                />
                <S.Footer>
                    <S.CharCount>{maxChars - content.length}</S.CharCount>
                    <S.SubmitButton onClick={handleSubmit} disabled={!content.trim() || isSending}>
                        {isSending ? "Enviando..." : "Tweetar"}
                    </S.SubmitButton>
                </S.Footer>
            </S.Modal>
        </S.Overlay>
    );
}