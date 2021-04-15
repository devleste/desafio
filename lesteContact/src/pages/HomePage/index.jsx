import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function HomePage() {
	return (
		<Container>
			<h1>Home Page</h1>

			<ul>
				<li>
					<Link to="/contatos">
						<div>
							<i className="far fa-address-book"></i>{" "}
						</div>
						<strong>Lista de contatos</strong>
					</Link>
				</li>
				<li>
					<Link to="/contatos/adicionar">
						<div>
							<i className="fas fa-user-plus"></i>
						</div>
						<strong>Adicionar contatos</strong>
					</Link>
				</li>
			</ul>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		padding: 10px;
		list-style: none;
		justify-content: flex-start;
		li {
			margin: 10px;
			padding: 10px;
			width: 90%;
			justify-content: flex-start;
			a {
				display: flex;
				width: 15em;
				align-items: center;
				&:hover {
					transition: 0.2s;
					color: #444;
				}
			}
			div {
				display: flex;
				height: 2em;
				width: 2em;
				background-color: #fff;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				border-radius: 1em;
				font-size: 1.5em;
				margin-right: 10px;
			}
		}
	}
`;
export default HomePage;
