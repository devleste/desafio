import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1,
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 32px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  animation: ${appearFromBottom} 500ms ease-out;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around ;
    margin-top: 32px;
    button {
      background: none;
      font-size: 16px;
      font-weight: 600;
      color: #999;
    }
    button.delete {
      color: red;
    }
  }
`;