import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

export const Modal = styled.div`
    background: white;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const CloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #555;
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 120px;
    border: none;
    outline: none;
    font-size: 16px;
    resize: none;
    font-family: inherit;
    color: #333;

    &::placeholder {
        color: #aaa;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
`;

export const CharCount = styled.span`
    font-size: 14px;
    color: #aaa;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
    background: #1d9bf0;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 15px;
    font-weight: bold;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;