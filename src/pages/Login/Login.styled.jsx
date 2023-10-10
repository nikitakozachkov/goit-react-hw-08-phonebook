import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;

    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.h2`
  margin-top: 0;
  text-align: center;
`;
