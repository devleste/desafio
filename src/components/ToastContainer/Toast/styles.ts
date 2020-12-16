import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  type: 'success' | 'error';
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1,
    transform: translateX(0);
  }
`;

export const Container = styled.div<ContainerProps>`
  margin-top: 8px;
  width: 280px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 16px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  animation: ${appearFromLeft} 500ms ease-out;
  background: #999;
  ${props => props.type === 'success' && css`
    background: #00ad4f;
  `}
  ${props => props.type === 'error' && css`
    background: crimson;
  `}
  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
  }
`;