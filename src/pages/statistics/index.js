import React, {useState, useEffect} from "react"
import "./style.css"

function Statistics() {
    const [contacts, setContacts] = useState([])
    const [womans, setWomans] = useState([])
    const [mens, setMens] = useState([])
    const [languages, setLanguages] = useState([])
    useEffect(() => {
        async function getContacts() {
            const response = await localStorage.getItem("contacts")
            if (response) {
                let contactsArray = JSON.parse(response)
                setContacts(contactsArray)
                let femaleContacts = []
                let maleContacts = []
                let allLanguages = []
                contactsArray.map(contact => {
                    if (contact.gender === "F") femaleContacts.push(contact)
                    if (contact.gender === "M") maleContacts.push(contact)
                    if (!allLanguages.includes(contact.language)) allLanguages.push(contact.language)
                })
                setWomans(femaleContacts)
                setMens(maleContacts)
                setLanguages(allLanguages)
            }
            if (!response) return
        }
        getContacts()
    }, [])
    function countLanguageContacts(language) {
        const languageContacts = []
        contacts.map(contact => {
            if (contact.language == language) languageContacts.push(contact)
        })
        return languageContacts.length
    }
    return (
        <div className="statistics-page">
            <h1>Estatísticas</h1>
            <h2 className="counter">Você tem {contacts.length} contatos!</h2>
            <div className="by-section">
                <h3>Entre seus contatos temos:</h3>
                <h2>{womans.length} Mulheres <br/> {mens.length} Homens</h2>
            </div>
            <div className="by-section">
                <h3>Seus contatos falam os seguintes idiomas:</h3>
                <ul>
                    {languages.map(language => (
                        <li className="language" key={language}>
                            <h2>{language}</h2>
                            <p>{countLanguageContacts(language)} contatos</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Statistics