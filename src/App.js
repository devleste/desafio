import React, { useState, useEffect } from "react";
import Filtro from "./components/Header/Filtro";
import "./App.css";
import "./App2.css";
import Adicionar from "./components/AddNewContact/Adicionar";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";


function App() {
  const [shut, setShut] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [formValues, setFormValues] = useState({
    first_name: "",
    email: "",
    gender: "",
    language: "",
    birthday: "",
  });

  const addContact = (novo) => {
    novo.id = generateUniqueId();
    setContacts([...contacts, novo]);
    // Salvar no Local Storage após adicionar um novo contato
    localStorage.setItem("contacts", JSON.stringify([...contacts, novo]));
    console.log(" textoo ", novo);
  }


  
  

  //função para gerar novos IDs para novos contatos
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }  

  useEffect(() => {
    /* fetch("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060") 
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Erro ao buscar dados da API:", error));   */
      
    // Carregar dados do Local Storage quando a aplicação é montada
    const storedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(storedContacts);
  }, []);

  const editContact = (contact) => {
    setSelectedContact(contact);
    setFormValues({
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      gender: contact.gender,
      language: contact.language,
      birthday: contact.birthday,
      avatar: contact.avatar,
    });
    setShut(true);
  };

  const handleSave = () => {
    if (selectedContact) {
      const updatedContacts = contacts.map((contact) => {
        if (contact.id === selectedContact.id) {
          setShut(false);
          // Atualizção do contato selecionado 
          return {
            ...contact,
            first_name: formValues.first_name,
            last_name: formValues.last_name,
            email: formValues.email,
            gender: formValues.gender,
            language: formValues.language,
            birthday: formValues.birthday,
          };
        }
        return contact;
      });
      // Atualização do estado com o novo array 
      setContacts(updatedContacts);
    }
  };

  const handleDelete = (contact) => {
    const updatedContacts = contacts.filter((c) => c.id !== contact.id);
    setContacts(updatedContacts);
  }

  return (
    <>
      <header>
        <Filtro contacts={contacts} />
      </header>
      
      <ul className="lista-completa">
        {contacts.map((contact) => (
          <li key={contact.id} >
            <img src={contact.avatar} alt="Foto de perfil" className="user" />
            <div className="nomeContato" onClick={() => editContact(contact)}>
              <h4>{contact.first_name + ' '} {contact.last_name}</h4>
            </div>
            <BsFillTrash3Fill onClick={() => handleDelete(contact)} className="lixeira"/>
          </li>
        ))}
      </ul>
      {selectedContact && ( shut &&
        <div className="container-editar">
          <BsXCircle onClick={() => setShut(false)} className="x"/>
          <form>
          <img src={formValues.avatar}  className="userEdit" />
            <label>First name:</label>
            <input
              id="nomeInput"
              value={formValues.first_name}
              onChange={(e) =>
                setFormValues({ ...formValues, first_name: e.target.value })
              }
            />
            <br />
            <label>Last name:</label>
            <input
              id="sobreNomeInput"
              value={formValues.last_name}
              onChange={(e) =>
                setFormValues({ ...formValues, last_name: e.target.value })
              }
            />
            <br />
            <label>E-mail:</label>
            <input
              id="emailInput"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <br />
            <label>Genero:</label>
            <input
              id="generoInput"
              value={formValues.gender}
              onChange={(e) =>
                setFormValues({ ...formValues, gender: e.target.value })
              }
            />
            <br />
            <label>Idioma:</label>
            <input
              id="idiomaInput"
              value={formValues.language}
              onChange={(e) =>
                setFormValues({ ...formValues, language: e.target.value })
              }
            />
            <br />
            <label>Nascimento:</label>
            <input
              id="nascimentoInput"
              value={formValues.birthday}
              onChange={(e) =>
                setFormValues({ ...formValues, birthday: e.target.value })
              }
            />
            <br />
            <button type="button" onClick={() => handleSave()}>Salvar</button>
          </form>
        </div>
      )}
      <Adicionar addContact={addContact} contacts={contacts}/>
    </>
  );
}

export default App;