import React, { useState } from "react";
import api from "../services";

export const ContatosContext = React.createContext({});

export const ContatosProvider = (props) => {
	const [contatos, setContatos] = useState([]);

	const carregaContatosDaApi = async () => {
		if (!localStorage.getItem("@lesteContatos")) {
			const response = await api.get();
			setContatos(response.data);
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
