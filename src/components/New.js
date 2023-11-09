import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styleBox, styleh1} from './NewStyles';
import styles from './New.module.css';
import CloseIcon from '@mui/icons-material/Close';

function New() {
  const { 
    newContato,
    setNewContato,
    formData,
    setFormData,
    listaContatos,
    setListaContatos,
  } = useContext(ContatosContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = listaContatos ? listaContatos.length + 1 : 1; 
    const novoContato = { ...formData, id: newId }; 
    const novaListaContatos = listaContatos ? [...listaContatos, novoContato] : [novoContato]; 
  
    setListaContatos(novaListaContatos);
  
    const updatedLocalStorageData = JSON.stringify(novaListaContatos);
    localStorage.setItem('contatos', updatedLocalStorageData);
  
    setNewContato(false);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      gender: 'F',
      language: '',
      avatar: '',
      birthday: '',
    })
  };
  
  const closeModal = () => {
    setNewContato(false);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      gender: 'F',
      language: '',
      avatar: '',
      birthday: '',
    })
  };

  return (
  <div>
    <Modal
      open={newContato}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.newContainer}
      >
        <Box sx={styleBox}>
          <Typography sx={styleh1} component="h1">{`New contact`}
            <Button onClick={closeModal}><CloseIcon style={{ color: 'white' }} /></Button>
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.newInput}>
              <div>
                <label htmlFor="first_name">First name:</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
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
                  value={formData.last_name}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="language">Language:</label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={styles.newInput}>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value={'F'}>Female</option>
                  <option value={'M'}>Male</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthday">Birthday:</label>
                <input
                  type='date'
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
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
                  value={formData.avatar}
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
            <Button className={styles.buttonSubmit} type="submit">Save new contact</Button>
          </form>
        </Box>
    </Modal>
  </div>
  );
}
    
export default New;