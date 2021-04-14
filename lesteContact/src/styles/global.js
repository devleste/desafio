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
	height: 100vh;
`;
export const Content = styled.div`
	width: 100vw;
	height: 85h;
	margin-top: 15vh;
	padding: 20px 0 20px 20px;
`;
export const Header = styled.div`
	width: 100vw;
	height: 15vh;
	background: #fff;
	display: flex;
	position: fixed;
	justify-content: center;
	align-items: center;
	top: 0px;
	flex-direction: row;

	img {
		display: flex;
		padding: 10px;
		height: 95%;
	}
	ul {
		list-style: none;
		li {
			font-size: 1.5rem;
		}
	}
`;

export default GlobalStyled;
