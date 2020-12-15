import React, { Dispatch, SetStateAction } from 'react';
import { Edit, DeleteForever } from '@material-ui/icons';

import { Container, ListHeader, ListedContact, NoContact } from './styles';
import FormattedContact from '../../types/FormattedContact';

interface ContactListProps {
  contacts: FormattedContact[],
  setContactDetail: Dispatch<SetStateAction<FormattedContact | null>>,
  setContactEdit: Dispatch<SetStateAction<FormattedContact | null>>,
  setContactDelete: Dispatch<SetStateAction<FormattedContact | null>>
}

const ContactList: React.FC<ContactListProps> = ({ contacts, setContactDetail, setContactDelete, setContactEdit }) => {
  return (
    <Container>
      <ListHeader>
        <strong>Avatar</strong>
        <strong>Nome e Sobrenome</strong>
        <strong>Email</strong>
        <strong>Gênero</strong>
        <strong>Linguagem</strong>
        <strong>Nascimento</strong>
        <strong>Idade</strong>
        <strong>Ações</strong>
      </ListHeader>
      {contacts.length > 0 ? contacts.map(contact => (
        <ListedContact key={contact.id} onClick={() => setContactDetail(contact)}>
          <img src={contact.avatar} alt={contact.full_name} />
          <span>{contact.full_name}</span>
          <span>{contact.email}</span>
          <span>{contact.translated_gender}</span>
          <span>{contact.language}</span>
          <span>{contact.translated_birthday}</span>
          <span>{contact.age}</span>
          <div onClick={() => {}}>
            <button className="edit" onClick={() => setContactEdit(contact)}>
              <Edit />
            </button>
            <button className="delete" onClick={() => setContactDelete(contact)}>
              <DeleteForever />
            </button>
          </div>
        </ListedContact>
      )) : (
        <NoContact>
          <p>Não há contatos para exibir.</p>
        </NoContact>
      )}
    </Container>
  );
}

export default ContactList;