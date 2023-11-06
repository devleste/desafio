import React, { useState, useEffect } from 'react';
import Close from '../../svg/Close';
import './Edit.css';

const EditComponent = ({ open, onClose, userId, data, setData }) => {
  const isEditing = userId !== null;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('M');
  const [avatar, setAvatar] = useState('');
  const [language, setLanguage] = useState('');
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    if (!isEditing) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setGender('M');
      setAvatar('');
      setLanguage('');
      setBirthday('');
    } else {
      data.forEach((user) => {
        if (user.id === userId) {
          setFirstName(user.first_name);
          setLastName(user.last_name);
          setEmail(user.email);
          setGender(user.gender);
          setAvatar(user.avatar);
          setLanguage(user.language);
          setBirthday(user.birthday);
        }
      });
    }
  }, [isEditing, userId, data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        avatar: avatar,
        language: language,
        birthday: birthday,
      };

      const updatedData = data.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user,
      );
      setData(updatedData);
    } else {
      const newUser = {
        id: Date.now(),
        first_name: firstName,
        last_name: lastName,
        email,
        gender,
        avatar,
        language,
        birthday,
      };

      setData([newUser,...data]);
    }
    onClose(false);
  };

  return (
    <>
      {open && (
        <div className="overlay-edit">
          <div className="modal-style-edit">
            <button className="modal-close-edit" onClick={onClose}>
              <Close />
            </button>
            <form className="form-edit" onSubmit={handleSubmit}>
              <h2>{isEditing ? 'Edit User' : 'Create User'}</h2>
              <h5>Url: </h5>
              <input
                type="text"
                name="avatar"
                placeholder="Paste image url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
              <h5>First Name:</h5>
              <input
                type="text"
                name="first_name"
                placeholder="José"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <h5 className="no-appear">Last Name:</h5>
              <input
                className="no-appear"
                type="text"
                name="last_name"
                placeholder="Oliveira"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <h5>Gender</h5>
              <select
                className="select-gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <h5>Email:</h5>
              <input
                type="email"
                name="email"
                placeholder="jose.oliveira@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <h5>Language:</h5>
              <input
                type="text"
                name="language"
                placeholder="English"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
              />
              <h5 className="no-appear">Birth Date:</h5>
              <input
                className="no-appear"
                type="date"
                name="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required={!isEditing}
              />
              <button type="submit" className="enviar">
                {isEditing ? 'Update' : 'Create'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditComponent;
