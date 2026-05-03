import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-bottom: 1px solid #e6e6e6;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  padding: 4px 8px;
  border-radius: 50%;

  &:hover {
    background: #f0f0f0;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopName = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: #333;
`;

export const TweetCount = styled.span`
  font-size: 13px;
  color: #888;
`;

export const Banner = styled.div`
  width: 100%;
  height: 120px;
  background: #1da1f2;
`;

export const ProfileSection = styled.div`
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AvatarWrapper = styled.div`
  margin-top: -40px;
  margin-bottom: 8px;
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 4px solid #fff;
  object-fit: cover;
  background: #eee;
`;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

export const UserHandle = styled.span`
  font-size: 14px;
  color: #888;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e6e6e6;
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