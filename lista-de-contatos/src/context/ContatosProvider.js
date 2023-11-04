import React, { useState, useMemo } from 'react';
import { node } from 'prop-types';
import ContatosContext from './ContatosContext';

function ContatosProvider({ children }) {
  const [OpenModal, setOpenModal] = useState(false);
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
    OpenModal,
    setOpenModal,
    listaContatos,
    setListaContatos,
    formData,
    setFormData,
  }), [
    OpenModal,
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