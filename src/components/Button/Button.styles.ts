import styled from "styled-components";

export const ButtonComponent = styled.button.attrs({ type: "submit" })`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgb(101, 160, 241);
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid rgb(101, 160, 241);
  padding: 15px;
  height: 10px;

  &:not(:disabled):hover {
    background-color: rgb(73, 144, 243);
  }

  &:disabled {
    background-color: rgb(246, 246, 246);
    border-color: rgb(224, 226, 229);
    cursor: not-allowed;
  }
`;
