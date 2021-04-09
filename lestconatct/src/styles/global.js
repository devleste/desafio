import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #f4f3ef;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100vh;
  width: 100vw;
  font-family: 'Montserrat', sans-serif;
  a{
    color:#111;
    text-decoration:none;
  }
}
`;
export const Container = styled.div`
	display: flex;
	margin-top: 15vh;
	flex-direction: row;

	height: 100vh;
`;

export default GlobalStyled;
