import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import {formatContact} from "../../lib/utils"
import "./style.css"

function SearchResults() {
    const [contacts, setContacts] = useState([])
    let query = new URLSearchParams(useLocation().search)
    useEffect(() => {
        async function getContacts() {
            let f1 = query.get("filter")
            let f2 = query.get(`${f1}`)
            const response = await localStorage.getItem("contacts")
            if (response) {
                let contactsArray = JSON.parse(response)
                let filteredContacts = []
                contactsArray.map(contact => {
                    contact = formatContact(contact)
                    if (!f1 || f1 == "all") {
                        filteredContacts.push(contact)
                    }
                    if (f1 == "gender") {
                        if (contact.gender == f2) filteredContacts.push(contact)
                    }
                    if (f1 == "language") {
                        if (contact.language == f2) filteredContacts.push(contact)
                    }
                    if (f1 == "age") {
                        if (contact.age == f2) filteredContacts.push(contact)
                    }
                    if (f1 == "month") {
                        if (contact.month == f2) filteredContacts.push(contact)
                    }
                })
                setContacts(filteredContacts)
            }
            if (!response) {
                return
            }
        }
        getContacts()
    }, [])
    return (
        <div className="search-results">
            <h1>Contatos ({contacts.length})</h1>
                <ul>
                    <li>
                        <strong>Nome</strong>
                        <strong></strong>
                        <strong>Gênero</strong>
                        <strong>Linguagem</strong>
                        <strong>Idade</strong>
                        <strong>Nascimento</strong>
                    </li>
                {contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <img src={contact.avatar} alt={`Foto de ${contact.name}`}/>
                            <a href={`/contacts/${contact.id}`}>{contact.first_name} {contact.last_name}</a>
                            <p>{contact.gender}</p>
                            <p>{contact.language}</p>
                            <p>{contact.age}</p>
                            <p>{contact.formattedBirthday}</p>
                        </li>
                    )
                })}
                </ul>
        </div>
    )
}

export default SearchResults