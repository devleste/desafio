import React, { useContext } from "react";
import { useParams } from "react-router";
import { ContatosContext } from "../../providers/contatos";

// import { Container } from './styles';

function DetalheContato() {
	const { id } = useParams();
	console.log(id);
	const { getById } = useContext(ContatosContext);
	const contato = getById(id);
	console.log(contato);
	return (
		<div>
			<h1>Detalhes</h1>
			{contato.first_name} {contato.last_name}
		</div>
	);
}

export default DetalheContato;
