import axios from "axios";
import React, { useEffect, useState } from "react";
import { useIndexedDB } from "react-indexed-db";

export const ContatosContext = React.createContext({});

export const ContatosProvider = (props) => {
	const [contatos, setContatos] = useState([]);
	const { getAll } = useIndexedDB("people");

	useEffect(() => {
		getAll().then((personsFromDB) => {
			setPersons(personsFromDB);
		});

		/*axios
				.get("https://my.api.mockaroo.com/lestecontatos.json?key=93841180")
				.then((response) => {
					setContatos(response.data);
				})
				.catch((err) => setErro(true));
				*/
	}, []);
	const { add } = useIndexedDB("contatos");
	if (erro) {
		return (
			<ContatosContext.Provider>
				<p>Erro</p>
			</ContatosContext.Provider>
		);
	} else {
		contatos.map((contato) => {
			add({
				first_name: contato.first_name,
				last_name: contato.last_name,
				email: contato.email,
				gender: contato.gender,
				languages: contato.languages,
				birthday: contato.birthday,
				avatar: contato.avatar,
			});
		});
		return (
			<ContatosContext.Provider value={{ contatos }}>
				{props.children}
			</ContatosContext.Provider>
		);
	}
};
