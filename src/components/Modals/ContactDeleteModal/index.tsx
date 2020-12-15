import React, { Dispatch, SetStateAction, useCallback } from 'react';

import { useContacts } from '../../../contexts/ContactsContext';
import FormattedContact from '../../../types/FormattedContact';

import { Container, Modal } from './styles';

interface DetailProps {
  contact: FormattedContact;
  setContactDetail: Dispatch<SetStateAction<FormattedContact | null>>;
  setContactDelete: Dispatch<SetStateAction<FormattedContact | null>>;
}

const ContactDeleteModal: React.FC<DetailProps> = ({ contact, setContactDetail, setContactDelete }) => {
  const { deleteContact } = useContacts();

  const handleDelete = useCallback((contact) => {
    deleteContact(contact.id)
    setContactDelete(null);
    setContactDetail(null);
  }, [setContactDetail, setContactDelete, deleteContact]);

  return (
    <Container>
      <Modal>
        <h1>Deseja realmente deletar o contato?</h1>
        <div>
          <button onClick={() => setContactDelete(null)} >Cancelar</button>
          <button className="delete" onClick={() => handleDelete(contact)}>Deletar</button>
        </div>
      </Modal>
    </Container>
  );
}

export default ContactDeleteModal;