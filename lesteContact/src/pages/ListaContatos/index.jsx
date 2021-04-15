import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

function ListaContatos() {
	const [contatos, setContatos] = useState([]);
	const [search, setSearch] = useState("");
	const [searchName, setSearchName] = useState("");
	const [searchLanguages, setSearchLanguages] = useState("");
	useEffect(() => {
		const response = localStorage.getItem("@lesteContatos");
		setContatos(JSON.parse(response));
		setSearch(JSON.parse(response));
	}, []);

	const handleSearchByName = (contatoSearch) => {
		setSearchName(contatoSearch);
		setSearchLanguages("");
		const lista = contatos.filter((item) => {
			const nome = item.first_name + item.last_name;
			return nome.toLowerCase().includes(searchName.toLowerCase());
		});
		setSearch(lista);
	};
	const handleSearchByLanguages = (contatoSearch) => {
		setSearchName("");
		setSearchLanguages(contatoSearch);
		const lista = contatos.filter((item) => {
			return item.languages.toLowerCase().includes(contatoSearch.toLowerCase());
		});
		setSearch(lista);
	};
	const handleSearchByGender = (gender) => {
		const lista = contatos.filter((item) => gender.includes(item.gender));
		setSearch(lista);
	};

	return (
		<Container>
			<h1>Lista de Pacientes</h1>
			<Search>
				<div>
					<input
						type="text"
						value={searchName}
						placeholder="Busque pelo nome"
						onChange={(e) => handleSearchByName(e.target.value)}
					/>
					<i className="fas fa-search"></i>
				</div>
				<div>
					<input
						value={searchLanguages}
						type="text"
						placeholder="Idioma"
						onChange={(e) => handleSearchByLanguages(e.target.value)}
					/>
					<i className="fas fa-search"></i>
				</div>
				<div>
					<select onChange={(e) => handleSearchByGender(e.target.value)}>
						<option value={["M", "F", "O"]}>Todos</option>
						<option value="M">Masculino</option>
						<option value="F">Feminino</option>
						<option value="O">Outros</option>
					</select>
				</div>
			</Search>
			<Contatos>
				{search &&
					search.map((contato) => {
						var hoje = new Date();
						var nascimento = new Date(contato.birthday);
						var idade = hoje.getFullYear() - nascimento.getFullYear();

						return (
							<Contato key={contato.id}>
								<Avatar>
									<img src={contato.avatar} alt="avatar" />
								</Avatar>
								<div>
									<Info>
										<Link key={contato.id} to={`/contato/${contato.id}/show`}>
											<p>
												{contato.first_name} {contato.last_name}
											</p>
											<small>
												{contato.email.substr(0, 20)}
												{contato.email.length > 20 ? "..." : ""}
											</small>
											<br />
											<small>
												Gênero:{" "}
												{contato.gender === "F" ? (
													<span>
														<i className="fas fa-venus"></i>
														Feminino
													</span>
												) : contato.gender === "M" ? (
													<span>
														<i className="fas fa-mars"></i>
														Masculino
													</span>
												) : (
													"Outro"
												)}
											</small>
											<br />
											<small>Idade: {idade} anos</small>
											<br />

											<small>
												Idioma: {contato.language.substr(0, 15)}
												{contato.language.length > 15 ? "..." : ""}
											</small>
											<br />
										</Link>
									</Info>
								</div>
								<ButtonList>
									<button>
										<i className="fas fa-user-edit"></i> <span>Editar</span>
									</button>
									<a href={"!#"}>
										<button>
											<i className="fas fa-user-minus"></i> <span>Excluir</span>
										</button>
									</a>
								</ButtonList>
							</Contato>
						);
					})}
			</Contatos>
		</Container>
	);
}
const Search = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 8px;
	padding: 10px;
	margin: 10px;
	div {
		background-color: #ffffff;
		margin: 5px;
		padding: 5px;
		border: 1px;
		border-radius: 5px;
		border-style: solid;
		border-color: #000;
	}
	input,
	select {
		margin: 0;
		padding: 10px;
		width: 300px;
		height: 35px;
		background: white;
		font-size: 14px;
		border: none;
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
	flex-direction: row;

	justify-content: space-evenly;
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
	justify-content: space-evenly;
	align-items: center;

	div {
		display: flex;
		flex-direction: column;
	}
	p {
		font-weight: 900;
		font-size: 1.2em;
	}
	small {
		font-weight: light;
		color: #999;
	}
`;
const ButtonList = styled.button`
	display: flex;
	border: 0;
	margin: 5px;
	flex-direction: column;
	background: #fff;
	button {
		cursor: pointer;
		display: flex;
		flex-direction: row;

		align-items: center;
		justify-content: space-evenly;
		margin: 5px;
		width: 100px;
		height: 50px;

		background-color: #fff;
		border: 0;
		border-radius: 5px;
		box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.37);
		&:hover {
			transition: 0.2s;
			box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0);
		}
	}
`;
export default ListaContatos;
