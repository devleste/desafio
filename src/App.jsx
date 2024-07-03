import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Routing from "./router/Route";
import paginate from "./scripts/paginate";
import getContacts from "./apis/getContacts";

const App = () => {
  const dataPerPage = useRef(8);
  const [contacts, setContacts] = useState([]);
  const [addContactVisible, setAddContactVisible] = useState(false);
  const [editContactVisible, setEditContactVisible] = useState(false);
  const [filter, setFilter] = useState({
    active: false,
    masculine: true,
    feminine: true,
    language: [],
    age: { min: 0, max: 100 },
    birthMonth: [],
    default: {
      active: false,
      masculine: true,
      feminine: true,
      language: [],
      age: { min: 0, max: 100 },
      birthMonth: []
    }
  });
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Adiciona contato à lista de contatos
  const addContact = (contact) => {
    // Verifica se foi atingido o limite de contatos dessa página
    // Se tiver atingido, cria uma nova página com o contato
    // Caso contrário, adiciona contato a página atual
    if (contacts[contacts.length - 1].length === dataPerPage.current) {
      setContacts(prev => [...prev, [contact]]);
    } else {
      setContacts(prev => prev.map((curElm, index) => {
        if (index === prev.length - 1) {
          if (Array.isArray(curElm)) {
            curElm.push(contact);
          }
        }
        return curElm;
      }));
    }
    setAddContactVisible(false);
  }

  // Remove contato da lista de contatos, e atualiza paginação
  const removeContact = (id) => {
    setContacts(prev => prev.map((curElm) => {
      if (Array.isArray(curElm)) {
        const temp = curElm.filter((elm) => {
          if (elm.id !== id) {
            return elm;
          }
        });
        return temp;
      }
    }));
    updatePagination(id);
  }

  // Editar contato
  const editContact = (contact) => {
    setContacts(prev => prev.map((curElm) => {
      if (Array.isArray(curElm)) {
        const temp = curElm.map((elm) => {
          if (elm.id == contact.id) {
            return contact;
          }
          return elm;
        });
        return temp;
      }
    }));
  }

  // Atualiza paginação dos contatos
  const updatePagination = (id) => {
    const flatContacts = contacts.flat(Infinity).filter(x => x.id !== id);
    const paginatedData = paginate(flatContacts, dataPerPage.current);
    setContacts(paginatedData);
  }

  // Atualiza local storage
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts.flat(Infinity)));
    }
  }, [addContact, removeContact, editContact]);

  // Fetch request da lista de contatos
  useEffect(() => {
    // Se houver contatos armazenados em local storage, utiliza esses contatos
    const contactsLocalStorage = JSON.parse(localStorage.getItem("contacts"));
    if (Array.isArray(contactsLocalStorage)) {
      const paginatedData = paginate(contactsLocalStorage, dataPerPage.current);
      setContacts(paginatedData)
    } else {
      // Caso contrário, consome a API para popular os contatos
      getContacts()
        .then((data) => {
          const paginatedData = paginate(data, dataPerPage.current);
          setContacts(paginatedData);
        });
    }
  }, []);

  return (
    <>
      <Navbar
        filter={filter}
        setFilter={setFilter}
        setAddContactVisible={setAddContactVisible}
      />
      <Routing
        contacts={contacts}
        addContactVisible={addContactVisible}
        setAddContactVisible={setAddContactVisible}
        editContactVisible={editContactVisible}
        setEditContactVisible={setEditContactVisible}
        addContact={addContact}
        removeContact={removeContact}
        editContact={editContact}
        filter={filter}
        filteredContacts={filteredContacts}
        setFilteredContacts={setFilteredContacts}
      />
    </>
  );
}

export default App;
