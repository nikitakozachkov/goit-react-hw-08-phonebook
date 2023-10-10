import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  &.is-hidden {
    display: none;
  }
`

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: calc(100% - 16px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
`