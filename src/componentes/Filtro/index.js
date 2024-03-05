import './Filtro.css'
import { useState } from "react";
import languages from "../../helpers/languages"
import months from "../../helpers/months"

function Filtro(props){
    const filtro = {...(props.filtro || {})}

    const [gender, setGender] = useState(filtro.gender)
    const [language, setLanguage] = useState(filtro.language)
    const [age, setAge] = useState(filtro.age)
    const [month, setMonth] = useState(filtro.mont)

    function filtrar(e){
        e.preventDefault()
        props.filtrar({
            gender,
            language,
            age,
            month,
        })
    }

    function limpar(e){
        e.preventDefault()
        props.limpar()
    }

    function cancelar(e) {
        e.preventDefault()
        props.cancelar()
    }

    return(
        <div id='form'>
            <form onSubmit={filtrar} className="textoFormulario">
                <div>
                    <label htmlFor="gender">Gênero:</label>
                    <select className='gender' id='gender' name='gender' defaultValue={filtro.gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Nenhum</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="language">Idioma:</label>
                    <select className='language' id='language' name='language' defaultValue={filtro.language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="">Nenhum</option>
                        {languages.map(language => <option  key={language} value={language}>{language}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="age">Idade:</label>
                    <input type="number" id='age' name='age' defaultValue={filtro.age} onChange={(e) => setAge(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="month">Mês:</label>
                    <select className='month' id='month' name='month' defaultValue={filtro.month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Nenhum</option>
                        {months.map(month => <option  key={month} value={month}>{month}</option>)}
                    </select>
                </div>

                <div className='filtrar'><button onClick={filtrar}>Filtrar</button></div>
                <div className='limpar'><button onClick={limpar}>Limpar filtros</button></div>
                <div className='cancelar'><button onClick={cancelar}>Cancelar</button></div>
            </form>
        </div>
    )
}

export default Filtro