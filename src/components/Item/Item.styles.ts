import styled from "styled-components";

export const ItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fill;
  border-radius: 8px;
`;
export const Title = styled.h2`
  font-size: 18px;
  margin: 0 auto;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export const Stats = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Stat = styled.span`
  font-size: 14px;
`;
