import React, { useState, useCallback } from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

import FormattedContact from '../../types/FormattedContact';

import Filters from '../../components/Filters';
import ContactList from '../../components/ContactList';
import ContactDetailModal from '../../components/Modals/ContactDetailModal';
import ContactDeleteModal from '../../components/Modals/ContactDeleteModal';

import { Container, Divider, ArrowButton } from './styles';
import ContactEditModal from '../../components/Modals/ContactEditModal';

const ContactsPage: React.FC = () => {
  const [filteredContacts, setFilteredContacts] = useState<FormattedContact[]>([]);
  const [allFilters, setAllFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  
  const [contactDetail, setContactDetail] = useState<FormattedContact | null>(null);
  const [contactEdit, setContactEdit] = useState<FormattedContact | null>(null);
  const [contactDelete, setContactDelete] = useState<FormattedContact | null>(null);

  const handleShowFilters = useCallback(() => {
    showFilters ? setShowFilters(false) : setShowFilters(true);
  }, [showFilters]);

  return (
    <Container>
      <div className="title">
        <h1>Filtros</h1>
        <ArrowButton onClick={handleShowFilters}>
          {showFilters ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ArrowButton>
      </div>
      <Divider />
      <Filters setFilteredContacts={setFilteredContacts} showFilters={showFilters} setAllFilters={setAllFilters} allFilters={allFilters} />
      {allFilters.length > 0 ? (
        <h1>Contatos Filtrados ({filteredContacts.length})</h1>
      ) : (
        <h1>Contatos ({filteredContacts.length})</h1>
      )}
      <Divider />
      <ContactList contacts={filteredContacts} setContactDetail={setContactDetail} setContactEdit={setContactEdit} setContactDelete={setContactDelete} />
      {contactDetail && (
        <ContactDetailModal contact={contactDetail} setContactDetail={setContactDetail} setContactEdit={setContactEdit} setContactDelete={setContactDelete} />
      )}
      {contactEdit && (
        <ContactEditModal contact={contactEdit} setContactDetail={setContactDetail} setContactEdit={setContactEdit} setContactDelete={setContactDelete} />
      )}
      {contactDelete && (
        <ContactDeleteModal contact={contactDelete} setContactDetail={setContactDetail} setContactDelete={setContactDelete} />
      )}
    </Container>
  );
}

export default ContactsPage;