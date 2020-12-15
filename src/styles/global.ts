import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    color: #333333;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }
  input {
    font-family: 'Roboto', sans-serif;
  }
  button {
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border: none;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`;

