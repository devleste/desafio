import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styleBox, styleh1} from './NewStyles';
import { genderData, languageData } from '../mocks/optionsData';

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
    const newId = listaContatos ? listaContatos.length + 1 : 1; // Gere um novo ID
    const novoContato = { ...formData, id: newId }; // Crie o novo contato com o novo ID
    const novaListaContatos = listaContatos ? [...listaContatos, novoContato] : [novoContato]; // Adicione o novo contato à lista
  
    setListaContatos(novaListaContatos);
  
    const updatedLocalStorageData = JSON.stringify(novaListaContatos);
    localStorage.setItem('contatos', updatedLocalStorageData);
  
    setNewContato(false);
  };
  
  const closeModal = () => {
    setNewContato(false);
  };

  return (
  <div>
    <Modal
      open={newContato}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={styleBox}>
          <Typography sx={styleh1} component="h1">{`Novo Contato`}</Typography>
          <Button onClick={closeModal}>Fechar</Button>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                {genderData.map((gender, index) => (
                  <option key={index} value={gender.value}>
                    {gender.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="language">Language:</label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                required
              >
                {languageData.map((language, index) => (
                  <option key={index} value={language}>
                    {language}
                  </option>
                ))}
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
                value={formData.birthday}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Salvar novo contato</Button>
          </form>
        </Box>
    </Modal>
  </div>
  );
}
    
export default New;