import React, { useEffect, useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  ThemeProvider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import logoLeste from "./images/logoLeste.png";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import ContactFilter from "./components/ContactFilter";
import ContactSum from "./components/ContactSum";

import { saveContacts, loadContacts, fetchContacts } from "./api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
    },
    secondary: {
      main: "#009688",
    },
  },
});

function App() {
  const [contacts, setContacts] = useState(loadContacts() || []);
  const [newContact, setNewContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "M",
    birthday: "",
    language: "",
    age: "",
  });
  const [editingContact, setEditingContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [filterGender, setFilterGender] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  // Defina as funções de manipulação de filtro
  const handleGenderFilterChange = (value) => {
    setFilterGender(value);
  };

  const handleLanguageFilterChange = (value) => {
    setFilterLanguage(value);
  };

  const handleAgeFilterChange = (value) => {
    setFilterAge(value);
  };

  const handleMonthFilterChange = (value) => {
    setFilterMonth(value);
  };

  // Função para aplicar os filtros e obter os contatos filtrados
  const applyFilters = () => {
    let filteredContacts = [...contacts];

    // Aplicar filtro de gênero
    if (filterGender) {
      filteredContacts = filteredContacts.filter(
        (contact) => contact.gender === filterGender,
      );
    }

    // Aplicar filtro de idioma
    if (filterLanguage) {
      filteredContacts = filteredContacts.filter(
        (contact) => contact.language === filterLanguage,
      );
    }

    // Aplicar filtro de idade
    if (filterAge) {
      filteredContacts = filteredContacts.filter(
        (contact) => contact.age === filterAge,
      );
    }

    // Aplicar filtro de mês de aniversário
    if (filterMonth) {
      filteredContacts = filteredContacts.filter((contact) => {
        const birthdayMonth = new Date(contact.birthday).getMonth() + 1;
        return birthdayMonth === parseInt(filterMonth);
      });
    }

    return filteredContacts;
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsFromAPI = await fetchContacts();
        setContacts(contactsFromAPI);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    getContacts();
  }, []);

  const addContact = (newContact) => {
    const newContactWithId = { ...newContact, id: contacts.length + 1 };
    setContacts([newContactWithId, ...contacts]); // Adicione o novo contato no início
    setNewContact({
      first_name: "",
      last_name: "",
      email: "",
      gender: "M",
      birthday: "",
      language: "",
      age: "",
    });
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setIsEditing(true);
  };

  const editContact = (editedContact) => {
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === editedContact.id,
    );

    if (contactIndex !== -1) {
      const updatedContacts = [...contacts];
      updatedContacts[contactIndex] = editedContact;
      setContacts(updatedContacts);
      setIsEditing(false);
      setEditingContact(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={logoLeste}
            alt="Leste Telecom"
            style={{ width: "110px", marginRight: "20px" }}
          />
          <Typography variant="h6" style={{ flex: 1, textAlign: "center" }}>
            Leste Contacts
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Adicionar Contato
                </Typography>
                <ContactForm
                  newContact={newContact}
                  onAddContact={addContact}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </CardContent>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Filtros
                </Typography>
                <ContactFilter
                  filterGender={filterGender}
                  filterLanguage={filterLanguage}
                  filterAge={filterAge}
                  filterMonth={filterMonth}
                  onGenderFilterChange={handleGenderFilterChange}
                  onLanguageFilterChange={handleLanguageFilterChange}
                  onAgeFilterChange={handleAgeFilterChange}
                  onMonthFilterChange={handleMonthFilterChange}
                  contacts={applyFilters()}
                />
              </CardContent>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <CardContent>
                <Typography variant="h8" gutterBottom></Typography>
                {/* Adicione aqui o componente que exibe o resumo de gênero */}
                <ContactSum contacts={applyFilters()} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom></Typography>
            <ContactList
              contacts={applyFilters()} // Usar os contatos filtrados
              onDeleteContact={deleteContact}
              onEditContact={handleEditContact}
              editingContact={editingContact}
              isEditing={isEditing}
              onSaveContact={editContact}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
