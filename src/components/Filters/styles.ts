import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
}

const appearFromTop = keyframes`
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
  margin-bottom: 40px;
  animation: ${appearFromTop} 500ms ease-out;
  strong {
    font-weight: 500;
  }
  div {
    margin-top: 8px;
    margin-bottom: 12px;
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 7px 14px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 32px;
  font-family: 'Roboto', sans-serif;
  margin-right: 4px;
  margin-bottom: 4px;
  ${props => props.isActive && css`
    border-color: #00ad4f;
    color: #00ad4f;
    font-weight: 500;
    }
  `}
  :hover {
    border-color: #00ad4f;
    color: #00ad4f;
    font-weight: 500;
  }
`;

export const ClearButton = styled.button`
  padding: 7px 14px;
  background: #ffffff;
  border: 1px solid firebrick;
  color: firebrick;
  border-radius: 32px;
  font-family: 'Roboto', sans-serif;
  margin-top: 8px;
  :hover {
    font-weight: 500;
  }
`;

export const EmptyDiv = styled.div`
  height: 24px;
`;