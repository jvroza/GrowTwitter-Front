import styled from "styled-components";

export const Container = styled.aside`
  width: 300px;
  padding: 16px;
`;

export const Panel = styled.div`
  background: #f7f7f7;
  border-radius: 12px;
  padding: 16px;
`;

export const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
`;

export const TrendItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const TrendCategory = styled.span`
  display: block;
  font-size: 12px;
  color: #888;
`;

export const TrendTitle = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  margin-top: 2px;
`;

export const ShowMore = styled.button`
  background: none;
  border: none;
  color: #1da1f2;
  cursor: pointer;
  font-size: 14px;
  margin-top: 12px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;