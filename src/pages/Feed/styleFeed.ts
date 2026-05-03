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

  &:hover {
    color: #1da1f2;
  }
`;