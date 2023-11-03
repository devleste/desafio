import React from 'react';
import styles from './Lista.module.css';
import useFetch from '../../src/hooks/useFetch';
import { contatosData } from '../mocks/contatosData';

function Lista() {
  const useRealData = process.env.REACT_APP_USE_REAL_DATA === 'true';
  const { lista } = useRealData ? useFetch : { lista: contatosData };
  console.log(lista)

  return (
    <div>
    {Array.isArray(lista) &&
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
          {lista.map((item) => (
          <tr key={item.id}>
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