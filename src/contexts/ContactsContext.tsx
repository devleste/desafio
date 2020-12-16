import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

import Contact from '../types/Contact';

import api from '../services/api';

import { useToast } from '../contexts/ToastContext';

interface ContactsContextData {
  contacts: Contact[],
  createContact(data: CreateContactData): void;
  editContact(data: Contact): void;
  deleteContact(id: number): void;
}

interface CreateContactData {
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  language: string,
  avatar: string,
  birthday: string
}

const ContactsContext = createContext<ContactsContextData>({} as ContactsContextData);

const ContactsProvider: React.FC = ({ children }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    async function getContacts() {
      const localContactsJSON = localStorage.getItem('@LesteContact:contacts');
      if (localContactsJSON) {
        const localContacts = JSON.parse(localContactsJSON);
        setContacts(localContacts);
      } else {
        try {
          const response = await api.get("");
          localStorage.setItem('@LesteContact:contacts', JSON.stringify(response.data));
          setContacts(response.data);
          addToast({
            type: 'success',
            description: 'Contatos da API carregados com sucesso.'
          });
        } catch (error) {
          addToast({
            type: 'error',
            description: 'Não foi possível carregar os contatos da API. Limpe o localStorage e tente novamente mais tarde.'
          });
        }
      }
    }
    getContacts();
  }, [addToast]);

  const createContact = useCallback((data: CreateContactData) => {
    const id = contacts.length > 0 ? (contacts[contacts.length - 1].id + 1) : (1);
    const newContact = { ...data, id };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    localStorage.setItem('@LesteContact:contacts', JSON.stringify(newContacts));
  }, [contacts]);

  const editContact = useCallback((data: Contact) => {
    let newContacts = contacts.filter(contact => contact.id !== data.id);
    newContacts.push(data);
    setContacts(newContacts);
    localStorage.setItem('@LesteContact:contacts', JSON.stringify(newContacts));
  }, [contacts]);

  const deleteContact = useCallback((id: number) => {
    const newContacts = contacts.filter(contact=> contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem('@LesteContact:contacts', JSON.stringify(newContacts));
  }, [contacts]);

  return (
    <ContactsContext.Provider value={{ contacts, createContact, editContact, deleteContact }} >
      {children}
    </ContactsContext.Provider>
  );
}

function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) throw new Error('useContacts must be used within as ContextProvider');
  return context;
}

export { ContactsProvider, useContacts };