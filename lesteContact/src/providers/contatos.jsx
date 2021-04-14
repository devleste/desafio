import React, { useState } from "react";
import api from "../services";

export const ContatosContext = React.createContext({});

export const ContatosProvider = (props) => {
	const [contatos, setContatos] = useState([]);

	const carregaContatosDaApi = async () => {
		if (!localStorage.getItem("@lesteContatos")) {
			await api
				.get()
				.then((response) => {
					console.log(response.data);
					setContatos(response.data);
				})
				.catch((err) => {
					console.error(err);
				});
			localStorage.setItem("@lesteContatos", JSON.stringify(contatos));
		}
	};
	carregaContatosDaApi();

	return (
		<ContatosContext.Provider value={{ contatos }}>
			{props.children}
		</ContatosContext.Provider>
	);
};
