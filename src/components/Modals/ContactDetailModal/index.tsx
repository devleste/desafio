import React, { Dispatch, SetStateAction } from 'react';
import { Edit, DeleteForever, Close, PersonOutline, EmailOutlined, PeopleOutline, Map, AccessTime, CalendarToday } from '@material-ui/icons';

import { Container, Modal, Header, Button, EditButton, Details } from './styles';
import FormattedContact from '../../../types/FormattedContact';

interface DetailProps {
  contact: FormattedContact;
  setContactDetail: Dispatch<SetStateAction<FormattedContact | null>>;
  setContactEdit: Dispatch<SetStateAction<FormattedContact | null>>;
  setContactDelete: Dispatch<SetStateAction<FormattedContact | null>>;
}

const ContactDetailModal: React.FC<DetailProps> = ({ contact, setContactDetail, setContactEdit, setContactDelete }) => {
  return (
    <Container>
      <Modal>
        <Header>
          <img src={contact.avatar} alt={contact.full_name} />
          <h1>{contact.full_name}</h1>
          <div>
            <EditButton onClick={() => setContactEdit(contact)}>
              <Edit />
            </EditButton>
            <Button onClick={() => setContactDelete(contact)}>
              <DeleteForever />
            </Button>
            <Button onClick={() => setContactDetail(null)}>
              <Close />
            </Button>
          </div>
        </Header>
        <Details>
          <p>Detalhes do Contato</p>
          <div>
            <PersonOutline />
            <strong>Nome:</strong>
            <span>{contact.full_name}</span>
          </div>
          <div>
            <EmailOutlined />
            <strong>Email:</strong>
            <span>{contact.email}</span>
          </div>
          <div>
            <PeopleOutline />
            <strong>Gênero:</strong>
            <span>{contact.translated_gender}</span>
          </div>
          <div>
            <Map />
            <strong>Linguagem:</strong>
            <span>{contact.language}</span>
          </div>
          <div>
            <AccessTime />
            <strong>Idade:</strong>
            <span>{contact.age}</span>
          </div>
          <div>
            <CalendarToday />
            <strong>Nascimento:</strong>
            <span>{contact.translated_birthday}</span>
          </div>
        </Details>
      </Modal>
    </Container>
  );
}

export default ContactDetailModal;