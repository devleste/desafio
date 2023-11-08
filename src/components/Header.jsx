import React, { useContext, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './Header.module.css';
import ContatosContext from '../context/ContatosContext';
import Button from '@mui/material/Button';
import Search from './Search';
import BarLanguageChart from './BarLanguageChart';
import PieChartGender from './PieChartGender';

function Header() {
  const { setNewContato, setBirthday, listaContatos, setLanguage } = useContext(ContatosContext);

  const openModal = () => {
    setNewContato(true);
  };

  useEffect(() => {
    if (Array.isArray(listaContatos)) {
      setBirthday(listaContatos.map((contact) => contact.birthday));
      setLanguage(listaContatos.map((contact) => contact.language));
    }}, [listaContatos, setBirthday, setLanguage]);

  return (
    <div className={styles.headerContainer}>
      <h1>Contact List</h1>
      <div className={styles.sidenav}>
        <div className={styles.secao}>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} onClick={openModal}><AddCircleIcon />Add Contact</Button>
          </div>
          <Search className={styles.search}/>
        </div>
        <fieldset className={styles.statistical}> 
          <legend>Statistical Summary:</legend>
          <PieChartGender />
          <BarLanguageChart />
        </fieldset>
      </div>
    </div>
  )
}

export default Header;