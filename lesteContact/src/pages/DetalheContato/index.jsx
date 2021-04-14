import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
				<div>
					<div>
						<img src={contato.avatar} alt="avatar" />
					</div>
					<h3>
						{contato.first_name} {contato.last_name}
					</h3>

					<label>Aniversario</label>
					<br />
					<span>{nascimento}</span>
				</div>
			)}
		</div>
	);
}

export default DetalheContato;
