import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './new-contact.css';
import { Link } from 'react-router-dom';

export default function NewContact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [language, setLanguage] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');

  function handleSubmit(e){

    const newContact = {
      firstName,
      lastName,
      email,
      language,
      age,
      genre,
    };

    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const updatedContacts = [...existingContacts, newContact];

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    setFirstName('');
    setLastName('');
    setLanguage('');
    setAge('');
    setGenre('');
    setEmail('');

    toast.success('Contato adicionado com sucesso!')
    e.preventDefault();
  };

  

  return (

    <div className='container'>

      <form onSubmit={handleSubmit}>
      <h1 className='form-title'>Crie um novo contato:</h1>

        <div className='container-info'>  

          <div className='profile-info'>

            <label>
              First Name:
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='' className='input-newContact'required />
            </label>

            <label>
              Last Name:
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='input-newContact' required/>
            </label>

            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='' className='input-newContact' required/>
            </label>

          </div>


          <div className='extra-info'>

            <label>
              Age:
              <input type="date" value={age} onChange={(e) => setAge(e.target.value)} className='input-newContact' required/>
            </label>

            <label>
              Language:
              <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} className='input-newContact' required/>
            </label>
          
            <label>
              Genre:
              <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}className='input-newContact' required/>
            </label>

          </div>

        </div>

        <div className='container-button'>

          <button type="submit" className='btn-submit'>Submit</button>

          <Link to="/meus-contatos"
          className='btn-goBack'
          >Voltar</Link>
          
        </div>

      </form>

    </div>
  );
};


