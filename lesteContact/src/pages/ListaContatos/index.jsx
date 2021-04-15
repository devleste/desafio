import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

function ListaContatos() {
	const [contatos, setContatos] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		const response = localStorage.getItem("@lesteContatos");
		setContatos(JSON.parse(response));
		setSearch(JSON.parse(response));
	}, []);

	const handleSearch = (contatoSearch) => {
		const lista = contatos.filter((item) => {
			const nome = item.first_name + item.last_name;
			return nome.toLowerCase().includes(contatoSearch.toLowerCase());
		});
		setSearch(lista);
	};
	return (
		<Container>
			<h1>Lista de Pacientes</h1>
			<Search>
				<input
					type="text"
					placeholder="Busque pelo nome"
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<i class="fas fa-search"></i>
			</Search>
			<Contatos>
				{search &&
					search.map((contato) => (
						<Contato key={contato.id}>
							<Avatar>
								<img src={contato.avatar} alt="avatar" />
							</Avatar>
							<Link key={contato.id} to={`/contato/${contato.id}/show`}>
								<Info>
									<p>
										{contato.first_name} {contato.last_name}
									</p>
									<small>{contato.email}</small>
								</Info>
							</Link>
						</Contato>
					))}
			</Contatos>
		</Container>
	);
}
const Search = styled.div`
	display: flex;

	align-items: center;
	background-color: #ffffff;
	border-radius: 8px;
	padding: 10px;
	margin: 10px;
	input {
		padding: 5px;
		border: 0;
	}
`;
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
	background-color: #ffffff;
	border-radius: 8px;
	padding: 10px;
	margin: 10px;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
`;
const Avatar = styled.div`
	display: flex;
	height: 75px;
	width: 75px;
	background-color: #92d478;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	margin: 15px;
	img {
		justify-content: center;
		align-items: center;
		width: 75px;
		height: 75px;
		border-radius: 50px;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.37);
		-webkit-box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.37);
		-moz-box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.37);
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
