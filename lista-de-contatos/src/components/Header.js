import React, { useContext } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import styles from './Header.module.css';
import ContatosContext from '../context/ContatosContext';

function Header() {
  const { setOpenModal } = useContext(ContatosContext);

  const openModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <h1>Lista de contatos</h1>
      <button onClick={openModal}>
        <AddCircleIcon />
      </button>
    </div>
  )
}

export default Header;