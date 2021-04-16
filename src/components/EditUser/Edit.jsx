import { useContext } from "react";
import { ContactsContext } from "../../context/context";
import EditStyles from "./EditStyles"


const Edit = ({ func,close }) => {

    const {
        setnewAvatar,
        setnewName,
        setnewLastName,
        setnewEmail,
        setnewGenderValue,
        setnewLanguageValue,
        setnewBirthDayValue,
        newavatar,
        newname,
        newlastname,
        newemail, 
        newgenderValue, 
        newlanguageValue, 
        newbirthDayValue,
        newcontacts
    } = useContext(ContactsContext);

    console.log(newcontacts);

    return (
        <EditStyles>
            <div>
                <div className="closeContainer">
                <button 
                onClick={close}
                className="close"
                ><img alt="close" src="close.png"/></button>
                </div>
                <input
                    value={newavatar}
                    onChange={e => setnewAvatar(e.target.value)}
                    placeholder="Nova URL de Avatar"
                    type="text" />
                <input
                    value={newname}
                    onChange={e => setnewName(e.target.value)}
                    placeholder="Novo Nome"
                    type="text" />
                <input
                    value={newlastname}
                    onChange={e => setnewLastName(e.target.value)}
                    placeholder="Novo Sobrenome"
                    type="text" />
                <input
                    value={newemail}
                    onChange={e => setnewEmail(e.target.value)}
                    placeholder="Novo Email"
                    type="text" />
                <div className="gender">
                    <label>Novo Gênero</label>
                    <select
                        value={newgenderValue}
                        onChange={e => setnewGenderValue(e.target.value)}
                    >
                        <option>M</option>
                        <option>F</option>
                    </select>
                </div>
                <input
                    value={newlanguageValue}
                    onChange={e => setnewLanguageValue(e.target.value)}
                    placeholder="Novo Idioma"
                    type="text" />
                <input
                    value={newbirthDayValue}
                    onChange={e => setnewBirthDayValue(e.target.value)}
                    placeholder="Nova data de Nascimento"
                    type="text" />
                    <button
                    className="updateContact"
                    onClick={func}
                    >Atualizar Contato</button>
            </div>
        </EditStyles>
    )
}

export default Edit;