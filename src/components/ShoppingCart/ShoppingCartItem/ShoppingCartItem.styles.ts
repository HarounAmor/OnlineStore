import { styled } from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  margin-right: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  margin: 0 8px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
