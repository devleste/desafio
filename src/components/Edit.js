import React, { useState, useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styleBox, styleh1} from './EditStyles';
import styles from './Edit.module.css';
import CloseIcon from '@mui/icons-material/Close';

function Edit() {
  const { 
    openEditContato,
    setOpenEditContato,
    idContatoEdit, 
    listaContatos,
    setListaContatos,
    language,
  } = useContext(ContatosContext);
  const [editedContact, setEditedContact] = useState({});
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevEditedContact) => ({
      ...prevEditedContact,
      [name]: value,
    }));
  };
  
  const saveEdits = (e) => {
    e.preventDefault();
    if (idContatoEdit[0]) {
      const index = listaContatos.findIndex((contact) => contact.id === idContatoEdit[0].id);

      if (index !== -1) {
        const updatedContacts = [...listaContatos];
        updatedContacts[index] = {
          ...updatedContacts[index],
          ...editedContact,
        };
      setListaContatos(updatedContacts);

      const updatedLocalStorageData = JSON.stringify(updatedContacts);
      localStorage.setItem('contatos', updatedLocalStorageData);

      setOpenEditContato(false);
      }
    }
  };
  
  const closeModal = () => {
    setOpenEditContato(false);
  };

  const idContato = idContatoEdit[0];

  return (
  <div>
    {idContatoEdit[0] &&
    <Modal
      open={openEditContato}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={styleBox}>
          <Typography sx={styleh1} component="h1">{`Edit contact`}
            <Button onClick={closeModal}><CloseIcon style={{ color: 'white' }} /></Button>
          </Typography>

          <form onSubmit={saveEdits}>
            <div className={styles.newInput}>
              <div>
                <label htmlFor="first_name">First name:</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={editedContact.first_name || idContato.first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name">Last name:</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={editedContact.last_name || idContato.last_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={styles.newInput}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editedContact.email || idContato.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="language">Language:</label>
                <select
                  id="language"
                  name="language"
                  value={editedContact.language || idContato.language}
                  onChange={handleInputChange}
                  required
                >
                  {language?.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.newInput}>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={editedContact.gender || idContato.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value='F'>Feminino</option>
                  <option value='M'>Masculino</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthday">Birthday:</label>
                <input
                  type='date'
                  id="birthday"
                  name="birthday"
                  value={editedContact.birthday || idContato.birthday}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={styles.newInput}>
              <div>
                <label htmlFor="avatar">Avatar:</label>
                <input
                  type="text"
                  id="avatar"
                  name="avatar"
                  placeholder='Digite aqui a url da imagem.'
                  value={editedContact.avatar || idContato.avatar}
                  onChange={handleInputChange}
                  required
                />
                {/* <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={handleInputChange}
                  required
                /> */}
              </div>
            </div>            
            <Button className={styles.buttonSubmit} type="submit">Save edit</Button>
          </form>
        </Box>
    </Modal>
    }
  </div>
  );
}
    
export default Edit;