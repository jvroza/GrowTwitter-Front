import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PageTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #333;
    padding: 16px;
    border-bottom: 1px solid #e6e6e6;
`;

export const TweetCard = styled.div`
    display: flex;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #e6e6e6;

    &:hover {
        background: #fafafa;
    }
`;

export const TweetAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;

export const TweetContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const TweetHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TweetUser = styled.span`
    font-weight: 700;
    font-size: 15px;
    color: #333;
`;

export const TweetHandle = styled.span`
    font-size: 14px;
    color: #888;
`;

export const TweetText = styled.p`
    font-size: 15px;
    color: #333;
    line-height: 1.5;
    margin: 0;
`;

export const TweetActions = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 8px;
`;

export const ActionBtn = styled.button`
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0;
    transition: color 0.2s;
    font-family: inherit;

    &:hover {
        color: #1da1f2;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const ReplyBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
    padding: 12px;
    background: #f9f9f9;
    border-radius: 12px;
    border: 1px solid #e6e6e6;
`;

export const ReplyInput = styled.textarea`
    width: 100%;
    min-height: 80px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    resize: none;
    font-family: inherit;
    color: #333;

    &::placeholder {
        color: #aaa;
    }

    &:disabled {
        opacity: 0.6;
    }
`;

export const ReplyActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
`;

export const ReplyCount = styled.span`
    font-size: 13px;
    color: #aaa;
`;

export const ReplyButton = styled.button`
    background: #1da1f2;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        background: #1a91da;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const RepliesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
    padding-left: 8px;
    border-left: 2px solid #e6e6e6;
`;

export const ReplyItem = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px 0;
`;

export const ReplyAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;

export const ReplyContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ReplyHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;