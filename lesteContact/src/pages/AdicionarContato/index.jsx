import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function AdicionarContato() {
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("O");
	const [languages, setLanguages] = useState("");
	const [birthday, setBirthday] = useState("");
	let history = useHistory();
	const adiciona = () => {
		if (
			first_name === "" ||
			last_name === "" ||
			email === "" ||
			gender === "" ||
			languages === "" ||
			birthday === ""
		) {
			alert("Todos os campos devem ser preenchidos");
			return;
		}
		const exist = JSON.parse(localStorage.getItem("@lesteContatos"));
		exist.push({
			id: Number(exist.length) + 1,
			first_name: first_name,
			last_name: last_name,
			email: email,
			gender: gender,
			languages: languages,
			birthday: birthday,
			avatar: `https://robohash.org/${first_name ? first_name : "avatar"}`,
		});
		localStorage.setItem("@lesteContatos", JSON.stringify(exist));
		history.push("/contatos");
	};

	return (
		<div>
			<h1>Adicionar Contato</h1>
			<Form>
				<PerfilImage>
					<img
						src={`https://robohash.org/${first_name ? first_name : "avatar"}`}
						alt="Avatar"
					/>
				</PerfilImage>
				<Input>
					{first_name}
					<label htmlFor="first_name">Primeiro nome</label>
					<input
						placeholder="Primeiro nome"
						type="text"
						name="first_name"
						id="first_name"
						onChange={(e) => setFirst_name(e.target.value)}
					/>
				</Input>
				<Input>
					{last_name}
					<label htmlFor="last_name">Ultimo nome</label>
					<input
						placeholder="Primeiro nome"
						type="text"
						name="last_name"
						id="last_name"
						onChange={(e) => setLast_name(e.target.value)}
					/>
				</Input>
				<Input>
					{email}
					<label htmlFor="email">E-mail</label>
					<input
						placeholder="Primeiro nome"
						type="e-mail"
						name="email"
						id="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Input>
				<Input>
					{gender}
					<label htmlFor="gender">Gênero</label>
					<select
						value={gender}
						name="gender"
						id="gender"
						onChange={(e) => setGender(e.target.value)}
					>
						<option value="M">Masculino</option>
						<option value="F">Feminino</option>
						<option value="O">Outros</option>
					</select>
				</Input>
				<Input>
					{languages}
					<label htmlFor="languages">Idioma</label>
					<input
						placeholder="Primeiro nome"
						type="text"
						name="languages"
						id="languages"
						onChange={(e) => setLanguages(e.target.value)}
					/>
				</Input>
				<Input>
					{birthday}
					<label htmlFor="birthday">Aniversario</label>
					<input
						placeholder="Primeiro nome"
						type="date"
						name="birthday"
						id="birthday"
						onChange={(e) => setBirthday(e.target.value)}
					/>
				</Input>
				<button onClick={() => adiciona()}>Cadastrar</button>
			</Form>
		</div>
	);
}
const PerfilImage = styled.div`
	display: flex;
	width: 150px;
	height: 150px;
	padding: 10px;
	justify-content: center;
	margin: 5px;
	background-color: #fff;
	border-radius: 75px;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	img {
		border-radius: 75px;
		background-color: #eee;
	}
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 10px;
	button {
		border-radius: 8px;
		display: flex;
		border: 0;
		width: 300px;
		height: 50px;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
		background-color: green;
		box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
		-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
		-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
		&:hover {
			transition: 0.5s;
			background: #16b416;
		}
	}
`;
const Input = styled.div`
	display: flex;
	background-color: #fff;
	margin: 5px;

	justify-content: center;
	width: 300px;
	padding: 10px;
	border-radius: 10px;
	justify-content: center;
	background-color: #eee;
	flex-direction: column;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	label {
		font-weight: bold;
		margin-bottom: 5px;
	}
	input,
	select,
	option {
		height: 40px;
		padding: 5px;
		border-radius: 5px;
		border: 0;
		font-size: 0.8rem;
	}
`;
