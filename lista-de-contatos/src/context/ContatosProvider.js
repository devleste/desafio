import React, { useState, useMemo } from 'react';
import { node } from 'prop-types';
import ContatosContext from './ContatosContext';

function ContatosProvider({ children }) {
  const [newContato, setNewContato] = useState(false);
  const [editContato, setEditContato] = useState(false);
  const [idContatoEdit, setIdContatoEdit] = useState(0);
  const [contatoEdit, setContatoEdit] = useState();
  const [listaContatos, setListaContatos] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: 'F',
    language: 'Bengali',
    avatar: '',
    birthday: '',
  });

  const values = useMemo(() => ({
    newContato,
    setNewContato,
    editContato,
    setEditContato,
    idContatoEdit,
    setIdContatoEdit,
    contatoEdit,
    setContatoEdit,
    listaContatos,
    setListaContatos,
    formData,
    setFormData,
  }), [
    newContato,
    editContato,
    idContatoEdit,
    contatoEdit,
    formData,
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