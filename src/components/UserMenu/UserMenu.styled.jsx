import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;

  & p {
    display: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    & p {
      display: block;
    }
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