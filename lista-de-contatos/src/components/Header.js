import React, { useContext } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import styles from './Header.module.css';
import ContatosContext from '../context/ContatosContext';
import Button from '@mui/material/Button';

function Header() {
  const { setNewContato } = useContext(ContatosContext);

  const openModal = () => {
    setNewContato(true);
  };

  return (
    <div>
      <h1>Lista de contatos</h1>
      <Button onClick={openModal}><AddCircleIcon /></Button>
    </div>
  )
}

export default Header;