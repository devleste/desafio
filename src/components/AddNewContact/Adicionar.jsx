import React, { useState } from "react";
import { HiMiniUserPlus } from "react-icons/hi2";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsXCircle } from "react-icons/bs";

function Adicionar({ addContact, contacts }) {
const [newcontact, setNewContact] = useState(false);
const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "M",
    language: "",
    birthday: "",
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

//função para salvar contato e mudança de stado
const saveContact = () => {
    addContact({ ...formData });
    setNewContact(false);
};

//função para uso da imagem do novo contato
const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setFormData({ ...formData, avatar: event.target.result });
        };
        reader.readAsDataURL(file);
    }
};


return (
    <>
    <div className="add">
        <div className="new">
        <HiMiniUserPlus data-testid="add-contact-icon" onClick={() => setNewContact(true)} />
        </div>
        {newcontact && (
        <div className="newContact">
            <BsXCircle
            className="fechar-adicionar-contato"
            onClick={() => setNewContact(false)}
            />
            <AiOutlineUserAdd className="iconAddUser" />
            <form id="formAdd" className="form-add-new-contact">

                <label htmlFor="avatar">Profile picture:</label>
                <input
                    type="file"
                    accept="image/*"
                    name="avatar"
                    onChange={(e) => handleAvatarChange(e)}
                />

                <label htmlFor="first_name">First name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                />
                <label htmlFor="last_name">Last name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="gender">Gênero</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                >
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
                <label htmlFor="language">Language:</label>
                <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                />
                <label htmlFor="birthday">Date of birth:</label>
                <input
                    type="text"
                    placeholder="00-00-0000"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={saveContact}>
                    Save
                </button>
            </form>
        </div>
        )}
    </div>
    </>
);
}

export default Adicionar;
