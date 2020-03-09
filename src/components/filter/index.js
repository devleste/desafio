import React, {useState, useEffect} from "react"
import "./style.css"

function Filter() {
    const [filter, setFilter] = useState("")
    const [languages, setLanguages] = useState([])
    useEffect(() => {
        async function getLanguages() {
            const response = await localStorage.getItem("contacts")
            if (response) {
                let contactsArray = JSON.parse(response)
                let allLanguages = []
                contactsArray.map(contact => {
                    if (!allLanguages.includes(contact.language)) allLanguages.push(contact.language)
                })
                setLanguages(allLanguages)
            }
            if (!response) return
        }
        getLanguages()
    }, [])
    function getFilter() {
        if (filter === "gender") {
            return (
                <select name="gender">
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                </select>
            )
        }
        if (filter === "language") {
            return (
                <select name="language">
                    {languages.map(language => <option value={language}>{language}</option>)}
                </select>
            )
        }
        if (filter === "age") {
            return (
                <input type="number" name="age" placeholder="digite a idade"/>
            )
        }
        if (filter === "month") {
            return (
                <select name="month">
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>
            )
        }
    }
    return (
        <div className="filter-component">
            <form action="/contacts">
                <label htmlFor="filter">Filtrar:</label>
                <select name="filter" onChange={e => setFilter(e.target.value)}>
                    <option value="all">Todos</option>
                    <option value="gender">Genero</option>
                    <option value="language">Linguagem</option>
                    <option value="age">Idade</option>
                    <option value="month">Nascido em</option>
                </select>
                {getFilter()}
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default Filter