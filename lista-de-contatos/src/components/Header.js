import React, { useContext } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import styles from './Header.module.css';
import ContatosContext from '../context/ContatosContext';
import Button from '@mui/material/Button';

function Header() {
  const { setNewContato, searchTerm, setSearchTerm } = useContext(ContatosContext);

  const openModal = () => {
    setNewContato(true);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h1>Lista de contatos</h1>
      <Button onClick={openModal}><AddCircleIcon /></Button>
      <input
        type="text"
        placeholder="Digite sua pesquisa"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Header;