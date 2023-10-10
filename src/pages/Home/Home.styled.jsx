import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;

  font-size: 32px;
  font-weight: 200;
  text-align: center;

  transform: translate(-50%, -50%);
`;
