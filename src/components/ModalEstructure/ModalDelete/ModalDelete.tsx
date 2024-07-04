import { DialogContent, DialogActions, Button } from '@mui/material';

import { useContextModal } from '../../../contexts/context';

const ModalDelete = ({ id }: { id: number }) => {
  const { modal, setModal, contacts, setContacts } = useContextModal();

  const handleDelete = () => {
    const index = contacts.findIndex((item) => item.id === id);
    contacts.splice(index, 1);
    setContacts(contacts);

    localStorage.setItem('contacts', JSON.stringify(contacts));
    setModal({ ...modal, isOpen: false });
  };

  return (
    <>
      <DialogContent dividers>
        <p>Tem certeza que deseja deletar?</p>
      </DialogContent>

      <DialogActions style={{ padding: '16px' }}>
        <Button
          variant='outlined'
          onClick={() => setModal({ ...modal, isOpen: false })}
        >
          Cancel
        </Button>
        <Button variant='contained' color='error' onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </>
  );
};

export default ModalDelete;
