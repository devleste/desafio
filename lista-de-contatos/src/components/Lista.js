import React, { useContext, useEffect } from 'react';
import { contatosData } from '../mocks/contatosData';
import ContatosContext from '../context/ContatosContext';
import styles from './Lista.module.css';
import { v4 as uuidv4 } from 'uuid';

function Lista() {
  const { listaContatos, setListaContatos } = useContext(ContatosContext);

  useEffect(() => {
    setListaContatos(contatosData);
  }, []); 

  return (
    <div>
      
    {Array.isArray(listaContatos) &&
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>First name</th>
            <th className={styles.th}>Last name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Language</th>
            <th className={styles.th}>Avatar</th>
            <th className={styles.th}>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {listaContatos.map((item) => (
          <tr key={uuidv4()}>
            <td className={styles.td}>{ item.first_name }</td>
            <td className={styles.td}>{ item.last_name }</td>
            <td className={styles.td}>{ item.email }</td>
            <td className={styles.td}>{ item.gender }</td>
            <td className={styles.td}>{ item.language }</td>
            <td className={styles.td}>
              <img src={item.avatar} alt="Avatar" />
            </td>
            <td className={styles.td}>{ item.birthday }</td>
          </tr>
          ))}
        </tbody>
      </table>
      }
    </div>
  )
}
    
export default Lista;