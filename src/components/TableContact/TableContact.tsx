import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { ContactsProps, useContextModal } from '../../contexts/context';

import ModalDelete from '../ModalEstructure/ModalDelete/ModalDelete';
import ModalEdit from '../ModalEstructure/ModalEdit/ModalEdit';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableContact = () => {
  const { setModal, contacts } = useContextModal();

  return (
    <Paper square={false} elevation={1}>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: 'lightgray' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contacts.length > 0 &&
              contacts.map((contact: ContactsProps, index) => {
                return (
                  <StyledTableRow key={contact.id}>
                    <TableCell>{contact.id}</TableCell>
                    <TableCell>
                      <Avatar alt={`avatar + ${index}`} src={contact.avatar} />
                    </TableCell>
                    <TableCell>
                      {contact.first_name} {contact.last_name}
                    </TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.gender}</TableCell>
                    <TableCell>{contact.language}</TableCell>
                    <TableCell>{contact.birthday}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label='Edit'
                        color='success'
                        onClick={() =>
                          setModal({
                            isOpen: true,
                            body: <ModalEdit {...contact} />,
                            title: 'Add',
                          })
                        }
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        aria-label='delete'
                        color='error'
                        onClick={() =>
                          setModal({
                            isOpen: true,
                            body: <ModalDelete id={contact.id} />,
                            title: 'Delete',
                          })
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableContact;
