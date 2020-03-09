import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {formatContact} from "../../lib/utils"
import "./style.css"

function Contact() {
    const [contact, setContact] = useState({})
    const {id} = useParams()
    useEffect(() => {
        async function getContact() {
            const response = await localStorage.getItem("contacts")
            if (response) {
                let contactsArray = JSON.parse(response)
                let myContact = contactsArray.find(contact => contact.id == id)
                myContact = formatContact(myContact)
                setContact(myContact)
            }
            return
        }
        getContact()
    }, [])
    async function deleteContact() {
        const response = await localStorage.getItem("contacts")
        let contactsArray = JSON.parse(response)
        let myContactIndex = contactsArray.indexOf(contactsArray.find(contact => contact.id == id))
        contactsArray.splice(myContactIndex, 1)
        await localStorage.setItem("contacts", JSON.stringify(contactsArray))
    }
    return (
        <div className="contact-page">
            <a href="/contacts">{"< Voltar"}</a>
            <div className="contact-header">
                <img src={contact.avatar} alt={`Foto de ${contact.first_name}`}/>
                <h1>{contact.first_name} {contact.last_name}</h1>
            </div>
            <div className="contact-details">
                <h3>Detalhes do Contato</h3>
                <ul>
                    <li>
                        <p>Email:</p>
                        <span>{contact.email}</span>
                    </li>
                    <li>
                        <p>Gênero:</p>
                        <span>{contact.formattedGender}</span>
                    </li>
                    <li>
                        <p>Linguagem:</p>
                        <span>{contact.language}</span>
                    </li>
                    <li>
                        <p>Idade:</p>
                        <span>{contact.age}</span>
                    </li>
                    <li>
                        <p>Data de Nascimento:</p>
                        <span>{contact.formattedBirthday}</span>
                    </li>
                </ul>
            </div>
            <div className="actions">
                <a href={`/contacts/${contact.id}/edit`} className="button">Editar</a>
                <form onSubmit={deleteContact} action="/contacts">
                    <button className="button-delete" type="submit">Deletar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact