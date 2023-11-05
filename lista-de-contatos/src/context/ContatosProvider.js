import React, { useState, useMemo } from 'react';
import { node } from 'prop-types';
import ContatosContext from './ContatosContext';

function ContatosProvider({ children }) {
  const [listaContatos, setListaContatos] = useState([]); // carrega as informações da mock

  // New
  const [newContato, setNewContato] = useState(false); //abre modal new
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: 'F',
    language: 'Bengali',
    avatar: '',
    birthday: '',
  }); // salva as alterações do form new

  // Edit
  const [openEditContato, setOpenEditContato] = useState(false); // abre modal edit
  const [idContatoEdit, setIdContatoEdit] = useState(0); // seleciona contato para editar
  const [contatoEdited, setContatoEdited] = useState(); // salva as alterações do form de edição
  
  // Search
  const [searchTerm, setSearchTerm] = useState(''); // pesquisa digitada
  const [filtroContatos, setFiltroContatos] = useState(''); // listaContatos === searchTerm

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
  }), [
    newContato,
    openEditContato,
    idContatoEdit,
    contatoEdited,
    searchTerm,
    formData,
    filtroContatos,
    listaContatos,
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