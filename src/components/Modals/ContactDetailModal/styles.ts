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
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 16px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 24px;
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
  div {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  background: none;
  margin-left: 16px;
  svg {
    color: #333;
  }
  :hover {
    svg {
      color: red;
    }
  }
  #edit {
    :hover {
      svg {
        color: #00ad4f;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  :hover {
    svg {
      color: #00ad4f;
    }
  }
`;

export const Details = styled.div`
  p {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    color: #999;
    margin-top: 16px;
    margin-bottom: 24px;
  }
  div {
    display: grid;
    grid-template-columns: 24px 88px auto;
    gap: 8px;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px;
    strong {
      font-weight: 500px;
      font-size: 14px;
    }
    span {
      border-bottom: 1px solid #ccc;
      padding-left: 8px;
      padding-bottom: 4px;
      color: #666;
    }
  }
`;