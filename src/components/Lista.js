import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import styles from './Lista.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Lista() {
  const { listaContatos, setListaContatos, setOpenEditContato, setIdContatoEdit, searchTerm } = useContext(ContatosContext);
  
  const filtroContatos = Array.isArray(listaContatos)
  ? listaContatos.filter((item) => {
    const { gender, language, birthday, age } = searchTerm;
  
    if (gender && !item.gender.toLowerCase().includes(gender.toLowerCase())) {
      return false;
    }
  
    if (language && !item.language.toLowerCase().includes(language.toLowerCase())) {
      return false;
    }
  
    if (age) {
      const ageInMilliseconds = Date.now() - new Date(item.birthday);
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInYears = ageInSeconds / (365 * 24 * 60 * 60);
      const ageValue = Math.floor(ageInYears).toString();
      if (ageValue !== age) {
        return false;
      }
    }
  
    if (birthday) {
      const selectedMonth = parseInt(birthday, 10);
      const itemMonth = new Date(item.birthday).getMonth() + 1;
      if (itemMonth !== selectedMonth) {
        return false;
      }
    }
  
    return true;
  })
  : [];
  
  const editContato = (contato) => {
    const contatoSelecionado = listaContatos.filter((item) => item.id === contato.id);
    setIdContatoEdit(contatoSelecionado) 
    setOpenEditContato(true); 
  }

  const deleteContato = (contato) => {
    const updatedListaContatos = listaContatos.filter((item) => item.id !== contato.id);
    setListaContatos(updatedListaContatos);
    localStorage.setItem('contatos', JSON.stringify(updatedListaContatos));
  }

  return (
    <div className={styles.tableContainer}>
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
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {filtroContatos.map((item) => (
          <tr key={item.id}>
            <td key={`first_name_${item.id}`} className={styles.td}>{ item.first_name }</td>
            <td key={`last_name_${item.id}`} className={styles.td}>{ item.last_name }</td>
            <td key={`email_${item.id}`} className={styles.td}>{ item.email }</td>
            <td key={`gender_${item.id}`} className={styles.td}>{ item.gender }</td>
            <td key={`language_${item.id}`} className={styles.td}>{ item.language }</td>
            <td key={`avatar_${item.id}`} className={styles.td}>
              <img src={item.avatar} width='100' height='100' alt="Avatar" />
            </td>
            <td key={`birthday_${item.id}`} className={styles.td}>{ item.birthday }</td>
            <td key={`edit_delete_${item.id}`}  className={styles.td}>
              <button onClick={() => editContato(item)}>
                <EditIcon className={styles.icon} />
              </button>
              <button onClick={() => deleteContato(item)}>
                <DeleteIcon className={styles.icon} />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      }
    </div>
  )
}
    
export default Lista;