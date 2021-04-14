import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function HomePage() {
	return (
		<Container>
			<h1>Home Page</h1>

			<ul>
				<li>
					<Link to="/contatos">Lista de contatos</Link>
				</li>
				<li>
					<Link to="/contatos/adicionar">Adicionar contatos</Link>
				</li>
			</ul>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export default HomePage;
