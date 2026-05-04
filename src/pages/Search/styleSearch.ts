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

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 1px solid #e6e6e6;

    &:hover {
        background: #fafafa;
    }
`;

export const UserAvatar = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const UserName = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: #333;
`;

export const UserHandle = styled.span`
    font-size: 14px;
    color: #888;
`;

export const FollowButton = styled.button<{ $following: boolean }>`
    background: ${({ $following }) => ($following ? "white" : "#1d9bf0")};
    color: ${({ $following }) => ($following ? "#333" : "white")};
    border: ${({ $following }) => ($following ? "1px solid #ccc" : "none")};
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: ${({ $following }) => ($following ? "#f5f5f5" : "#1a8cd8")};
    }
`;