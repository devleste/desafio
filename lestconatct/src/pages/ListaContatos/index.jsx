import React, { useContext } from "react";
import { ContatosContext } from "../../providers/contatos";

import styled from "styled-components";
import { Link } from "react-router-dom";
function ListaContatos() {
	const { contatos } = useContext(ContatosContext);

	return (
		<Container>
			<h1>Lista de Pacientes</h1>

			<Contatos>
				{contatos.map((contato) => (
					<Link key={contato.id} to={`/contato/${contato.id}/show`}>
						<Contato key={contato.id}>
							<Avatar>
								<img src={contato.avatar} alt="avatar" />
							</Avatar>
							<Info>
								<p>
									{contato.first_name} {contato.last_name}
								</p>
								<small>{contato.email}</small>
							</Info>
						</Contato>
					</Link>
				))}
			</Contatos>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Contatos = styled.section`
	display: flex;
	flex-direction: column;
`;
const Contato = styled.div`
	display: flex;

	align-items: center;
	background-color: #eee;
	border-radius: 8px;
	padding: 10px;
	margin: 10px;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
`;
const Avatar = styled.div`
	display: flex;
	height: 55px;
	width: 55px;
	background-color: #fff;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	img {
		justify-content: center;
		align-items: center;
		width: 55px;
		height: 55px;
		border-radius: 25px;
	}
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	p {
		font-weight: 900;
		font-size: 1.2em;
	}
	small {
		font-weight: light;
		color: #999;
	}
`;
export default ListaContatos;
