'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { isObjectEmpty } from '@utils/isObjectEmpty';
import { useSystem } from './useSystem';
import axios from 'axios';

const contactsContext = createContext({});

export const useContact = () => useContext(contactsContext);

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [initialContacts, setInitialContacts] = useState([]);
  const {
    searchContext,
    firstLoad,
    setFirstLoad,
    setSearchSkeletonOverlayActive,
  } = useSystem();

  async function api(searchContext = null) {
    const url =
      'https://api-server-desafio-leste-telecom.vercel.app/api/contacts';
    try {
      if (searchContext) {
        setSearchSkeletonOverlayActive(true);
        const { data } = await axios.get(url, {
          params: searchContext,
        });
        const { contacts: filteredContacts } = data;
        setContacts(filteredContacts);
        setFirstLoad(false);
        setSearchSkeletonOverlayActive(false);
      } else {
        const res = await axios.get(url);
        const { contacts } = res.data;
        setContacts(contacts);
        setInitialContacts(contacts);
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
      throw error;
    } finally {
    }
  }

  useEffect(() => {
    if (!isObjectEmpty(searchContext)) {
      api(searchContext);
    } else {
      setContacts(initialContacts);
    }
  }, [searchContext]);

  useEffect(() => {
    api();
  }, []);

  return (
    <contactsContext.Provider
      value={{
        contacts,
        setContacts,
        initialContacts,
        setInitialContacts,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};
