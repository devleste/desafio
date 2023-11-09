import React, { useState, useMemo, useEffect } from 'react';
import { node } from 'prop-types';
import ContatosContext from './ContatosContext';
import { contatosData } from '../mocks/contatosData';
import { act } from 'react-dom/test-utils';

function ContatosProvider({ children }) {
  // API
  const [loading, setLoading] = useState(true);
  const [listaContatos, setListaContatos] = useState([]);

  // New
  const [newContato, setNewContato] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: 'F',
    language: '',
    avatar: '',
    birthday: '',
  });

  // Edit
  const [openEditContato, setOpenEditContato] = useState(false); 
  const [idContatoEdit, setIdContatoEdit] = useState(0);
  const [contatoEdited, setContatoEdited] = useState();
  
  // Search
  const [searchTerm, setSearchTerm] = useState({
    gender: '',
    language: '',
    age: '',
    birthday: '',
  });
  const [filtroContatos, setFiltroContatos] = useState('');
  const [birthday, setBirthday] = useState('')
  const [language, setLanguage] = useState('');

  //Gráficos
  const [languageTotals, setLanguageTotals] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataFromLocalStorage = localStorage.getItem('contatos');
      if (dataFromLocalStorage) {
        const parsedData = JSON.parse(dataFromLocalStorage);
        return setListaContatos(parsedData);
      } else {
        const response = await fetch('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060');
        if (!response.ok) {
          act(() => { setLoading(false); });
          return setListaContatos(contatosData);
        }
        const data = await response.json();
        return setListaContatos(data);
      }  
    };
    
    fetchData();
  }, [listaContatos]);
    
  
  const values = useMemo(() => ({
    newContato,
    setNewContato,
    openEditContato,
    setOpenEditContato,
    idContatoEdit,
    setIdContatoEdit,
    contatoEdited,
    setContatoEdited,
    listaContatos,
    setListaContatos,
    searchTerm,
    setSearchTerm,
    filtroContatos,
    setFiltroContatos,
    formData,
    setFormData,
    birthday,
    setBirthday,
    language,
    setLanguage,
    languageTotals, 
    setLanguageTotals,
    loading, 
    setLoading,
  }), [
    newContato,
    openEditContato,
    idContatoEdit,
    contatoEdited,
    searchTerm,
    formData,
    filtroContatos,
    listaContatos,
    birthday,
    language,
    languageTotals, 
    loading,
  ]);

  return (
    <ContatosContext.Provider value={ values }>
      {children}
    </ContatosContext.Provider>
  );
}
ContatosProvider.propTypes = {
  children: node.isRequired,
};

export default ContatosProvider;