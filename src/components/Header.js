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
    setBirthday(listaContatos.map((contato) => contato.birthday));
    setLanguage(listaContatos.map((contato) => contato.language));
  }, [listaContatos, setBirthday, setLanguage]);

  return (
    <div className={styles.headerContainer}>
      <h1>Lista de contatos</h1>
      <div className={styles.sidenav}>
        <div className={styles.secao}>
          <Button className={styles.button} onClick={openModal}><AddCircleIcon />Adicionar contato</Button>
          <Search />
        </div>
        <fieldset className={styles.statistical}> 
          <legend>Resumo Estatístico:</legend>
          <PieChartGender />
          <BarLanguageChart />
        </fieldset>
      </div>
    </div>
  )
}

export default Header;