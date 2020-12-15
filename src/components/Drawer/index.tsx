import React, { useCallback, useState } from 'react';
import { Add, People, InsertChart } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

import ContactCreateModal from '../Modals/ContactCreateModal';

import { AddButton, Container, Separator } from './styles';

const Drawer: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateContact = useCallback(() => {
    setShowCreateModal(true);
  }, [setShowCreateModal]);

  return (
    <Container>
      <AddButton onClick={handleCreateContact}>
        <Add />
        <>Novo Contato</>
      </AddButton>
      <Separator />
      <NavLink to="/" exact activeStyle={{ color: '#ffffff', background: '#00ad4f' }}>
        <People />
        <>Contatos</>
      </NavLink>
      <NavLink to="/statistics" exact activeStyle={{ color: '#ffffff', background: '#00ad4f' }}>
        <InsertChart />
        <>Estatísticas</>
      </NavLink>
      {showCreateModal && (
        <ContactCreateModal setShow={setShowCreateModal} />
      )}
    </Container>
  );
}

export default Drawer;