import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import "./style.css"

function formatContact(contact) {
    function setAge(day, month, year) {
        const today = new Date()
        let age = today.getFullYear() - year
        const countMonth = (today.getMonth() + 1) - month
        if (countMonth < 0 || countMonth == 0 && today.getDate() < day) {
            age = age - 1
        }
        return age
    }
    let {gender, birthday} = contact
    let formattedGender = ""
    if (gender === "M") formattedGender = "Masculino"
    if (gender === "F") formattedGender = "Feminino"
    const birthdayArray = birthday.split("-")
    const month = birthdayArray[1]
    const formattedBirthday = `${birthdayArray[2]}/${birthdayArray[1]}/${birthdayArray[0]}`
    const age = setAge(birthdayArray[2], birthdayArray[1], birthdayArray[0])
    const newContact = {...contact, month, formattedBirthday, formattedGender, age}
    return newContact
}

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