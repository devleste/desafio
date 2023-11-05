import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styleBox, styleh1} from './EditStyles';

function Edit() {
  const { 
    editContato,
    setEditContato,
    formData,
    setFormData,
    idContatoEdit, 
    contatoEdit,
    setContatoEdit,
    listaContatos,
    setListaContatos,
  } = useContext(ContatosContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContatoEdit({
      ...contatoEdit,
      [name]: value,
    });
  };
  
  const saveEdits = (e) => {
    e.preventDefault();
    const removeContato = listaContatos.filter((item) => item.id !== idContatoEdit[0].id);
    const newContact = { id: idContatoEdit[0].id, ...formData };
    setListaContatos([...removeContato, newContact]);
    const updatedLocalStorageData = JSON.stringify([listaContatos]);
    localStorage.setItem('contatos', updatedLocalStorageData);
    setEditContato(false);
  };
  
  const closeModal = () => {
    setEditContato(false);
  };

  return (
  <div>
    <Modal
      open={editContato}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={styleBox}>
          <Typography sx={styleh1} component="h1">{`Editar contato`}</Typography>
          <Button onClick={closeModal}>Fechar</Button>
          <form onSubmit={saveEdits}>
            <div>
              <label htmlFor="first_name">First name:</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={idContatoEdit[0]?.first_name}
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
                value={idContatoEdit[0]?.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={idContatoEdit[0]?.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={idContatoEdit[0]?.gender}
                onChange={handleInputChange}
                required
              >
                <option value='F'>Feminino</option>
                <option value='M'>Masculino</option>
              </select>
            </div>
            <div>
              <label htmlFor="language">Language:</label>
              <select
                id="language"
                name="language"
                value={idContatoEdit[0]?.language}
                onChange={handleInputChange}
                required
              >
                <option value='Bengali'>Bengali</option>
                <option value='Dari'>Dari</option>
                <option value='Dutch'>Dutch</option>
                <option value='Estonian'>Estonian</option>
                <option value='Hungarian'>Hungarian</option>
                <option value='Indonesian'>Indonesian</option>
                <option value='Filipino'>Filipino</option>
                <option value='Finnish'>Finnish</option>
                <option value='Kannada'>Kannada</option>
                <option value='Kazakh'>Kazakh</option>
                <option value='Kurdish'>Kurdish</option>
                <option value='Latvian'>Latvian</option>
                <option value='Māori'>Māori</option>
                <option value='Moldovan'>Moldovan</option>
                <option value='Oriya'>Oriya</option>
                <option value='Polish'>Polish</option>
                <option value='Somali'>Somali</option>
                <option value='Spanish'>Spanish</option>
                <option value='Swati'>Swati</option>
                <option value='Tok Pisin'>Tok Pisin</option>
              </select>
            </div>
            <div>
              <label htmlFor="avatar">Avatar:</label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="birthday">Birthday:</label>
              <input
                type='date'
                id="birthday"
                name="birthday"
                value={idContatoEdit[0]?.birthday}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Salvar edição</Button>
          </form>
        </Box>
    </Modal>
  </div>
  );
}
    
export default Edit;