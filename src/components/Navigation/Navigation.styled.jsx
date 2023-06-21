import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 24px;
  height: 50px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  & a {
    display: inline-block;
    padding: 14px 0;
    font-size: 18px;
    color: #023047;
    text-decoration: none;
    transition: color 250ms;
  }

  & a.active {
    color: #ffffff;
  }

  & a:hover, & a:focus {
    color: #ffffff;
  }
`;
