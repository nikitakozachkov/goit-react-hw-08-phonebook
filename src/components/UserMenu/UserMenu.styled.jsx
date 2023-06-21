import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;

  & p {
    margin: 0;
  }
`

export const Button = styled.button`
  height: 24px;
  padding: 0 8px;
  border: 0;
  border-radius: 4px;
  font: inherit;
  font-size: inherit;
  color: #868784;
  background-color: #023047;

  &:hover, &:focus {
    color: #ffffff;
  }
`