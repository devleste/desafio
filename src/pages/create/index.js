import React, {useState} from "react"
import "./style.css"

function Create() {
    let [first_name, setFirstName] = useState("")
    let [last_name, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [gender, setGender] = useState("")
    let [language, setLanguage] = useState("")
    let [avatar, setAvatar] = useState("")
    let [birthday, setBirthday] = useState("")
    async function createContact() {
        const response = await localStorage.getItem("contacts")
        let globalId = await localStorage.getItem("globalId")
        if (response && globalId) {
            let contactsArray = JSON.parse(response)
            let id = parseInt(globalId) + 1
            const newContact = {id, first_name, last_name, email, gender, language, avatar, birthday}
            contactsArray.push(newContact)
            await localStorage.setItem("contacts", JSON.stringify(contactsArray))
            await localStorage.setItem("globalId", id)
        }
        if (!response && !globalId) {
            globalId = 1
            let contactsArray = []
            let id = globalId
            const newContact = {id, first_name, last_name, email, gender, language, avatar, birthday}
            contactsArray.push(newContact)
            await localStorage.setItem("contacts", JSON.stringify(contactsArray))
            await localStorage.setItem("globalId", id)
        }
    }
    return (
        <div className="create-page">
            <h1>Adicionar Contato</h1>
            <form onSubmit={createContact} action="/contacts">
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
                            <span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="F"
                                    required
                                    onChange={e => setGender(e.target.value)}
                                />
                                Feminino
                            </span>
                            <span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="M"
                                    required
                                    onChange={e => setGender(e.target.value)}
                                />
                                Masculino
                            </span>
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

export default Create