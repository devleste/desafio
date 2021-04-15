import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
function DetalheContato() {
	const { id } = useParams();
	const [contato, setContato] = useState();
	useEffect(() => {
		const response = JSON.parse(localStorage.getItem("@lesteContatos"));
		let preCont = response.filter((c) => c.id === Number(id));
		setContato(preCont[0]);
	}, [id]);
	const nascimento = new Date(contato?.birthday).toLocaleString("pt-BR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return (
		<div>
			<h1>Detalhes {`de ${contato?.first_name}`}</h1>
			{contato && (
				<ContactCard>
					<Perfil>
						<img src={contato.avatar} alt="avatar" />
					</Perfil>
					<Data>
						<div>
							<h2>
								{contato.first_name} {contato.last_name}
							</h2>
							<small>
								<a href={`mailto:${contato.email}`}>{contato.email}</a>
							</small>
						</div>
						<Info>
							<div>
								<label>Nascimento: </label>
								<span>{nascimento}</span>
							</div>
							<div>
								<label>Gênero: </label>
								<span>
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
								</span>
							</div>
							<div>
								<label>Idioma: </label>
								<span>{contato.language}</span>
							</div>
						</Info>
					</Data>
				</ContactCard>
			)}
		</div>
	);
}
const ContactCard = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px;
	width: 500px;
	border: 1px;
	border-style: solid;
	border-radius: 7px;
`;
const Data = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 25px;
	div {
		width: 100%;
	}
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	div {
		padding-top: 10px;
	}
`;
const Perfil = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 150px;
	height: 200px;
	background-color: #fff;
	border: 1px;
	border-style: solid;
	border-radius: 7px;
`;

export default DetalheContato;
