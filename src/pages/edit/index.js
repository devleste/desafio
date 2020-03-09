import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
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

function Edit() {
    let [first_name, setFirstName] = useState("")
    let [last_name, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [gender, setGender] = useState("")
    let [language, setLanguage] = useState("")
    let [avatar, setAvatar] = useState("")
    let [birthday, setBirthday] = useState("")
    let {id} = useParams()
    useEffect(() => {
        async function getContact() {
            const response = await localStorage.getItem("contacts")
            let contactsArray = JSON.parse(response)
            let myContact = contactsArray.find(contact => contact.id == id)
            myContact = formatContact(myContact)
            setFirstName(myContact.first_name)
            setLastName(myContact.last_name)
            setEmail(myContact.email)
            setGender(myContact.gender)
            setLanguage(myContact.language)
            setAvatar(myContact.avatar)
            setBirthday(myContact.birthday)
        }
        getContact()
    }, [])
    async function updateContact() {
        const response = await localStorage.getItem("contacts")
        let contactsArray = JSON.parse(response)
        let newContact = {id, first_name, last_name, email, gender, language, avatar, birthday}
        let myContactIndex = contactsArray.indexOf(contactsArray.find(contact => contact.id == id))
        contactsArray.splice(myContactIndex, 1, newContact)
        setAvatar("")
        await localStorage.setItem("contacts", JSON.stringify(contactsArray))
    }
    function mGender(gender) {
        if (gender == "M") {
            return (<span><input type="radio" name="gender" value="M" onChange={e => setGender(e.target.value)} checked/>Masculino</span>)
        }
        return (<span><input type="radio" name="gender" value="M" onChange={e => setGender(e.target.value)}/>Masculino</span>)
    }
    function fGender(gender) {
        if (gender == "F") {
            return (<span><input type="radio" name="gender" value="F" onChange={e => setGender(e.target.value)} checked/>Feminino</span>)
        }
        return (<span><input type="radio" name="gender" value="F" onChange={e => setGender(e.target.value)}/>Feminino</span>)
    }
    return (
        <div className="edit-page">
        <h1>Editar Contato</h1>
        <form onSubmit={updateContact} action={`/contacts/${id}`}>
                <ul>
                    <li>
                        <label>Nome:</label>
                        <input 
                            name="first_name"
                            type="text"
                            required
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </li>
                    <li>
                        <label>Sobrenome:</label>
                        <input
                            name="last_name"
                            type="text"
                            required
                            value={last_name}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </li>
                    <li>
                        <label>Email:</label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </li>
                    <li>
                        <label>Gênero:</label>
                        <div className="radio-box">
                            {fGender(gender)}
                            {mGender(gender)}
                        </div>
                    </li>
                    <li>
                        <label>Linguagem:</label>
                        <input
                            name="language"
                            type="text"
                            required
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        />
                    </li>
                    <li>
                        <label>Url do Avatar:</label>
                        <input
                            name="avatar"
                            type="url"
                            required
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />
                    </li>
                    <li>
                        <label>Data de Nascimento:</label>
                        <input
                            name="birthday"
                            type="date"
                            required
                            value={birthday}
                            onChange={e => setBirthday(e.target.value)}/>
                    </li>
                </ul>
                <div className="action">
                    <button type="submit" className="button">Salvar</button>
                </div>
            </form>
    </div>
    )
}

export default Edit