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

export const TrendList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrendItem = styled.div`
  padding: 14px 16px;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;

  &:hover {
    background: #fafafa;
  }
`;

export const TrendCategory = styled.span`
  display: block;
  font-size: 12px;
  color: #888;
  margin-bottom: 2px;
`;

export const TrendTitle = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #333;
`;