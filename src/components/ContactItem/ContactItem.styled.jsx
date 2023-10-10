import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 24px) / 3);
  }
`;

export const Text = styled.p`
  display: inline-block;
  margin: 0;
`;
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

  &:hover,
  &:focus {
    color: #023047;
  }
`;
