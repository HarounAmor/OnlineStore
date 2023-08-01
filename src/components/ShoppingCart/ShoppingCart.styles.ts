import styled from "styled-components";

export const ShoppingCartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-30%")};
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: right 0.3s ease-out;
`;

export const ShoppingCartContent = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: scroll;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const PurchaseButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
`;

export const ItemsContainer = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;
