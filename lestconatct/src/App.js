import React, { Fragment } from "react";
import Routes from "./routes";
import GlobalStyled, { Container } from "./styles/global";
import styled from "styled-components";
import logo from "./assets/logo.png";

export default function App() {
	return (
		<Fragment>
			<Header>
				<img src={logo} alt="logo" />
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
				</ul>
			</Header>
			<Container>
				<Routes />
			</Container>
			<GlobalStyled />
		</Fragment>
	);
}
const Header = styled.div`
	width: 100vw;
	height: 15vh;
	background: #fff;
	display: flex;
	position: fixed;
	justify-content: space-evenly;
	align-items: center;
	top: 0px;
	flex-direction: row;

	img {
		padding: 10px;
		height: 100px;
		margin: 10px 0 40px;
	}
	ul {
		list-style: none;
		li {
			font-size: 1.5rem;
		}
	}
`;
