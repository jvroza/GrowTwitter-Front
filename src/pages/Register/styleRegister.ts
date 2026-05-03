import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 820px;
`;

export const LeftPanel = styled.div`
  background: #1da1f2;
  padding: 48px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

export const BrandTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

export const BrandSubtitle = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
`;

export const BrandDescription = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

export const RightPanel = styled.div`
  background: #fff;
  padding: 40px;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

export const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 4px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #888;
`;

export const Input = styled.input`
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #1da1f2;
  }
`;

export const RegisterButton = styled.button`
  background: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s;

  &:hover {
    background: #1a91da;
  }
`;

export const LoginLink = styled.p`
  font-size: 13px;
  color: #888;
  text-align: center;
  margin-top: 4px;
`;

export const LoginAnchor = styled.span`
  color: #1da1f2;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
export const AvatarPreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

export const AvatarPreview = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1da1f2;
`;
export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #e0245e;
  text-align: center;
  margin-bottom: 4px;
`;