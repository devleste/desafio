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
  width: 480px;
  background: #ffffff;
  padding: 24px;
  border-radius: 32px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  animation: ${appearFromBottom} 500ms ease-out;
  h1 {
    color: #999;
    font-weight: 600;
  }
  div {
    label {
      font-weight: 500;
    }
    div.gender {
      
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #ccc;
  margin: 8px 0 16px;;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 16px;
`;

export const CancelButton = styled.button`
  background: none;
  height: 32px;
  width: 104px;
  font-size: 16px;
  color: #999;
  font-weight: 600;
`;

export const SaveButton = styled.button`
  background: #00ad4f;
  height: 32px;
  width: 104px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-radius: 16px;
`;


