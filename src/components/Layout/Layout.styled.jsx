import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 18px 12px;
`;

export const Container = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;

    font-size: 32px;
    font-weight: 200;
    text-align: center;

    transform: translate(-50%, -50%);
  }
`;
