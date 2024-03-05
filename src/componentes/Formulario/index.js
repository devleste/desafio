import './Formulario.css'
import { useState } from "react";
import languages from "../../helpers/languages"

function Formulario(props){
    const cadastro = {...(props.cadastro || {})}

    const [name, setName] = useState(cadastro.first_name)
    const [last, setLast] = useState(cadastro.last_name)
    const [email, setEmail] = useState(cadastro.email)
    const [birthday, setBirthday] = useState(cadastro.birthday)
    const [gender, setGender] = useState(cadastro.gender)
    const [language, setLanguage] = useState(cadastro.language)
    const [avatarUrl, setAvatarUrl] = useState(cadastro.avatarurl)

    function cadastrar(e){
        e.preventDefault()
        props.cadastrar({
            first_name: name,
            last_name: last,
            email,
            birthday,
            gender,
            language,
            avatarurl: avatarUrl
        })
    }

    function editarCard(e) {
        e.preventDefault()
        props.editarCard({
            id: cadastro.id,
            first_name: name,
            last_name: last,
            email,
            birthday,
            gender,
            language,
            avatarurl: avatarUrl
        })
    }

    function cancelar(e) {
        e.preventDefault()
        props.cancelar()
    }

    return(
        <div id='form'>
            <form onSubmit={cadastrar} className="textoFormulario">
                <div>
                    <label htmlFor="first_name">Nome:</label>
                    <input type="text" id='first_name' name='first_name' defaultValue={cadastro.first_name} onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="last_name">Sobrenome:</label>
                    <input type="text" id='last_name' name='last_name' defaultValue={cadastro.last_name} onChange={(e) => setLast(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' defaultValue={cadastro.email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="birthday">Aniversário:</label>
                    <input type="date" id='birthday' name='birthday' defaultValue={cadastro.birthday} onChange={(e) => setBirthday(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="gender">Gênero:</label>
                    <select className='gender' id='gender' name='gender' defaultValue={cadastro.gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Nenhum</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="language">Idioma:</label>
                    <select className='language' id='language' name='language' defaultValue={cadastro.language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="">Nenhum</option>
                        {languages.map(language => <option key={language} value={language}>{language}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="avatarurl">Foto:</label>
                    <input type="text" id='avatarurl' name='avatarurl' defaultValue={cadastro.avatarurl} onChange={(e) => setAvatarUrl(e.target.value)}></input>
                </div>

                {!props.mostrarEdicao && <button onClick={cadastrar}>Enviar</button>}
                {props.mostrarEdicao && <button onClick={editarCard}>Editar</button>}
                <div className='cancelar'><button onClick={cancelar}>Cancelar</button></div>
            </form>
        </div>
    )
}

export default Formulario