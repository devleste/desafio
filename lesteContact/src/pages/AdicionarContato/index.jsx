import React, { useState } from "react";
import {
	Header,
	Form,
	PerfilImage,
	Alerta,
	Input,
} from "../../styles/formStyle";
import { useHistory } from "react-router-dom";

export default function AdicionarContato() {
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("O");
	const [language, setLanguage] = useState("");
	const [birthday, setBirthday] = useState("");
	const [erro, setErro] = useState(false);
	const [erroEmail, setErroEmail] = useState(false);
	let history = useHistory();

	const adiciona = (e) => {
		if (
			first_name === "" ||
			last_name === "" ||
			email === "" ||
			gender === "" ||
			language === "" ||
			birthday === ""
		) {
			setErro(true);
			return;
		}
		if (!email.includes("@")) {
			setErroEmail(true);
			return;
		}

		const exist = JSON.parse(localStorage.getItem("@lesteContatos"));
		let lastContact = exist[exist.length - 1];
		let lastId = lastContact.id + 1;
		exist.push({
			id: lastId,
			first_name: first_name,
			last_name: last_name,
			email: email,
			gender: gender,
			language: language,
			birthday: birthday,
			avatar: `https://robohash.org/${first_name ? first_name : "avatar"}`,
		});
		localStorage.setItem("@lesteContatos", JSON.stringify(exist));
		history.push("/contatos");
	};

	return (
		<div>
			<Header>
				<span onClick={() => history.push("/contatos")}>
					<i className="fas fa-chevron-left"></i> Voltar
				</span>
				<h1> Adicionar Contato</h1>
			</Header>
			<Form>
				<PerfilImage>
					<img
						src={`https://robohash.org/${first_name ? first_name : "avatar"}`}
						alt="Avatar"
					/>
				</PerfilImage>
				{erro && <Alerta>Todos os campos devem ser preenchidos</Alerta>}
				<Input>
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
					<label htmlFor="email">E-mail</label>
					<input
						placeholder="Primeiro nome"
						type="e-mail"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					{erroEmail && <Alerta>verifique o e-mail</Alerta>}
				</Input>
				<Input>
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
					<label htmlFor="language">Idioma</label>
					<input
						placeholder="Primeiro nome"
						type="text"
						name="language"
						id="language"
						onChange={(e) => setLanguage(e.target.value)}
					/>
				</Input>
				<Input>
					<label htmlFor="birthday">Aniversario</label>
					<input
						placeholder="Primeiro nome"
						type="date"
						name="birthday"
						id="birthday"
						onChange={(e) => setBirthday(e.target.value)}
					/>
				</Input>
				<button
					onClick={(e) => {
						e.preventDefault();
						adiciona();
					}}
				>
					Cadastrar
				</button>
			</Form>
		</div>
	);
}
