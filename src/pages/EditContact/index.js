import React, { useState } from 'react';
import "./editContact.css";

export default function({ contact, onSave, onCancel }){
  
  const [editedContact, setEditedContact] = useState(contact);

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditedContact((prevContact) => ({ ...prevContact, [name]: value }));
  
  };

  function handleSave(){
    onSave(editedContact);
  };

  return (
    <div className='container-edit'>

      <h2>Edit Contact</h2>

      <div className='container-inputEdit'>
        <label>
          First Name:
          <input type="text" name="firstName" value={editedContact.firstName} onChange={handleInputChange} className='input-edit' />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={editedContact.lastName} onChange={handleInputChange} className='input-edit' />
        </label>
        <br />
        <label>
          Language:
          <input type="text" name="language" value={editedContact.language} onChange={handleInputChange} className='input-edit'/>
        </label>
        <br />
        <label>
          Age:
          <input type="date" name="age" value={editedContact.age} onChange={handleInputChange} className='input-edit'/>
        </label>
        <br />
        <label>
          Genre:
          <input type="text" name="genre" value={editedContact.genre} onChange={handleInputChange} className='input-edit'/>
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={editedContact.email} onChange={handleInputChange} className='input-edit'/>
        </label>
        <br />
      </div>

      <div className='container-btn'>
        <button
        onClick={handleSave}
        className='btn-save'
        >Save
        </button>

        <button
        onClick={onCancel}
        className='btn-edit'
        >Cancel</button>
      </div>
    </div>
  );
};

