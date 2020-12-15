import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  input {
    margin-top: 4px;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border: 1px solid #ccc;
    border-radius: 16px;
    font-size: 16px;
    color: #333;
    ${props => props.isFilled && css`
      border-color: #00ad4f;
    `}
    ${props => props.isErrored && css`
      border-color: red;
    `}
    ${props => props.isFocused && css`
      border-color: #00ad4f;
    `}
    ::placeholder {
      color: #ccc;
    }
  }
  span {
    margin-top: 2px;
    text-align: right;
    color: red;
  }
`;