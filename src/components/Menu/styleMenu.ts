import styled from "styled-components";

export const Container = styled.aside`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  position: sticky;
  top: 0;
  height: 100vh;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Logo = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  padding: 8px 0;
`;

export const LogoGrow = styled.span`
  color: #1da1f2;
`;

export const LogoTweet = styled.span`
  color: #f4a623;
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 24px;
  font-size: 16px;
  color: #333;
  text-align: left;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

export const TweetButton = styled.button`
  background: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background: #1a91da;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #333;
`;

export const UserHandle = styled.span`
  font-size: 13px;
  color: #888;
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: #333;
  width: fit-content;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;