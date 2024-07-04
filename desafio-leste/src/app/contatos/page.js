'use client';

import React, { useState, useEffect } from 'react';
import { CircularProgress, Button, IconButton } from '@mui/material';
import HandleContacts from '../../components/HandleContacts';
import FilterContacts from '../../components/FilterContacts';
import ConfirmDialog from '../../components/ConfirmDialog';
import ContactsData from '../../components/ContactsData';
import { getData } from '../api/contacts';

const ContatosPage = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [filters, setFilters] = useState({
    gender: '',
    language: '',
    age: '',
    birthdayMonth: '',
  });

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      setRows(parsedContacts);
      setLoading(false);
    } else {
      const fetchData = async () => {
        const data = await getData();
        const contactList = data.map((contact) => ({
          id: contact.id,
          avatar: contact.avatar,
          firstName: contact.first_name,
          lastName: contact.last_name,
          email: contact.email,
          gender: contact.gender,
          language: contact.language,
          birthday: contact.birthday,
          age: calculateAge(contact.birthday),
          birthdayMonth: new Date(contact.birthday).getMonth() + 1,
        }));
        setRows(contactList);
        localStorage.setItem('contacts', JSON.stringify(contactList));
        setLoading(false);
      };

      fetchData();
    }
  }, []);

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setSelectedContact(null);
    setOpenModal(false);
  };

  const handleAddContact = (newContact) => {
    const newContactWithAge = {
      ...newContact,
      age: calculateAge(newContact.birthday),
      birthdayMonth: new Date(newContact.birthday).getMonth() + 1,
    };
    setRows((prevRows) => {
      const newId = prevRows.length ? prevRows[prevRows.length - 1].id + 1 : 1;
      const updatedRows = [...prevRows, { id: newId, ...newContactWithAge }];
      localStorage.setItem('contacts', JSON.stringify(updatedRows));
      return updatedRows;
    });
    handleCloseModal();
  };

  const handleEditContact = (contact) => {
    setSelectedContact(contact);
    handleOpenModal();
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedContactWithAge = {
      ...updatedContact,
      age: calculateAge(updatedContact.birthday),
      birthdayMonth: new Date(updatedContact.birthday).getMonth() + 1,
    };
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) =>
        row.id === updatedContactWithAge.id ? updatedContactWithAge : row,
      );
      localStorage.setItem('contacts', JSON.stringify(updatedRows));
      return updatedRows;
    });
    handleCloseModal();
  };

  const handleRemoveContact = (id) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.filter((row) => row.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedRows));
      return updatedRows;
    });
    handleCloseDialog();
  };

  const handleOpenDialog = (contact) => {
    setContactToDelete(contact);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setContactToDelete(null);
    setOpenDialog(false);
  };

  const confirmDelete = () => {
    handleRemoveContact(contactToDelete.id);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredRows = rows.filter((row) => {
    const { gender, language, age, birthdayMonth } = filters;
    return (
      (!gender || row.gender === gender) &&
      (!language || row.language === language) &&
      (!age || row.age === Number(age)) &&
      (!birthdayMonth || row.birthdayMonth === Number(birthdayMonth))
    );
  });

  if (loading) {
    return (
      <CircularProgress
        className='m-auto text-font-first'
        size={50}
        thickness={2}
      />
    );
  }

  return (
    <div className='animate-animeLeft'>
      <div className='flex justify-end mb-3'>
        <Button
          variant='contained'
          onClick={handleOpenModal}
          className='bg-font-first hover:bg-bg-gray hover:text-font-first'
        >
          Adicionar Contato
        </Button>
      </div>
      <HandleContacts
        open={openModal}
        handleClose={handleCloseModal}
        addContact={handleAddContact}
        updateContact={handleUpdateContact}
        selectedContact={selectedContact}
      />
      <ConfirmDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={confirmDelete}
      />
      <FilterContacts filters={filters} onFilterChange={handleFilterChange} />
      <section>
        <ContactsData
          rows={filteredRows}
          onEdit={handleEditContact}
          onDelete={handleOpenDialog}
        />
      </section>
    </div>
  );
};

export default ContatosPage;
