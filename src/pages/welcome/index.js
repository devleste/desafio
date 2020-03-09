import React from "react"
import axios from "axios"
import "./style.css"

function Index() {
	async function getBaseContacts() {
		if (localStorage.length === 0) {
			let contacts = []
			const Hudson = {
				id: 0,
				first_name: "Hudson",
				last_name: "Dias",
				email: "hudson.oliveira.dias@gmail.com",
				gender: "M",
				language: "Portuguese",
				avatar: "https://avatars1.githubusercontent.com/u/55948533?s=460&v=4",
				birthday: "1995-03-29"
			}
			const apiContacts = await axios.get("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060")
			contacts = [Hudson, ...apiContacts.data]
			localStorage.setItem("globalId", contacts.length - 1)
			localStorage.setItem("contacts", JSON.stringify(contacts))
		}
	}
	getBaseContacts()
	return (
		<div className="loading">
			<h1>Bem Vindo ao Leste Contact!</h1>
		</div>
	)
}

export default Index