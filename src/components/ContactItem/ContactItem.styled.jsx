import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 4px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`

export const Text = styled.p`
  display: inline-block;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  border-radius: 4px;
  font: inherit;
  font-size: 12px;
  color: #868784;
  background-color: transparent;
  margin-right: 8px;

  &:hover, &:focus {
    color: #023047;
  }
`