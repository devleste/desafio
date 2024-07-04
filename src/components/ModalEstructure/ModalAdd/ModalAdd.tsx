import {
  Box,
  TextField,
  MenuItem,
  DialogActions,
  Button,
  DialogContent,
} from '@mui/material';

import { ContactsProps, useContextModal } from '../../../contexts/context';

import { useForm } from 'react-hook-form';

const ModalAdd = () => {
  const { modal, setModal, setContacts } = useContextModal();
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (data: any) => {
    const localStorageContacts = localStorage.getItem('contacts') ?? '';
    const jsonLocalStorage: Array<ContactsProps> =
      JSON.parse(localStorageContacts);
    const id = jsonLocalStorage[jsonLocalStorage?.length - 1].id;

    jsonLocalStorage.push({
      id: id + 1,
      ...data,
    });

    setContacts(jsonLocalStorage);

    localStorage.setItem('contacts', JSON.stringify(jsonLocalStorage));

    setModal({ ...modal, isOpen: false });
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '200px' },
        }}
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      >
        <DialogContent dividers>
          <Box>
            <TextField id='' label='First name' {...register('first_name')} />
            <TextField id='' label='Last name' {...register('last_name')} />
          </Box>

          <Box>
            <TextField id='' label='Email' {...register('email')} />

            <TextField id='' label='Language' {...register('language')} />
          </Box>

          <Box>
            <TextField
              id='gender-select'
              select
              label='Gender'
              {...register('gender')}
            >
              <MenuItem value='M'>Masculino</MenuItem>

              <MenuItem value='F'>Feminino</MenuItem>
            </TextField>

            <TextField id='' type='date' {...register('birthday')} />
          </Box>
        </DialogContent>

        <DialogActions style={{ padding: '16px' }}>
          <Button
            variant='outlined'
            onClick={() => setModal({ ...modal, isOpen: false })}
          >
            Cancel
          </Button>
          <Button variant='contained' type='submit'>
            Add
          </Button>
        </DialogActions>
      </Box>
    </>
  );
};

export default ModalAdd;
