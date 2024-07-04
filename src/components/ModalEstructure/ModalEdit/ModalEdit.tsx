import {
  Box,
  TextField,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
} from '@mui/material';

import { ContactsProps, useContextModal } from '../../../contexts/context';

import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';

const ModalEdit = (props: ContactsProps) => {
  const { modal, setModal, setContacts } = useContextModal();
  const { register, handleSubmit, setValue, control } = useForm();

  const handleSubmitForm = (data: any, id: number) => {
    const localStorageContacts = localStorage.getItem('contacts') ?? '';
    const jsonLocalStorage: Array<ContactsProps> =
      JSON.parse(localStorageContacts);

    const index = jsonLocalStorage.findIndex((item) => item.id === id);

    jsonLocalStorage[index] = {
      ...jsonLocalStorage[index],
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      gender: data.gender,
      language: data.language,
      birthday: data.birthday,
    };

    setContacts(jsonLocalStorage);

    localStorage.setItem('contacts', JSON.stringify(jsonLocalStorage));

    setModal({ ...modal, isOpen: false });
  };

  useEffect(() => {
    setValue('first_name', props.first_name);
    setValue('last_name', props.last_name);
    setValue('email', props.email);
    setValue('gender', props.gender);
    setValue('language', props.language);
    setValue('birthday', props.birthday);
  }, []);

  return (
    <>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '200px' },
        }}
        onSubmit={handleSubmit((data) => handleSubmitForm(data, props.id))}
      >
        <DialogContent dividers>
          <Box>
            <TextField
              id='firstName-input'
              label='First name'
              {...register('first_name')}
            />
            <TextField
              id='lastName-input'
              label='Last name'
              {...register('last_name')}
            />
          </Box>

          <Box>
            <TextField id='email-input' label='Email' {...register('email')} />

            <TextField
              id='language-input'
              label='Language'
              {...register('language')}
            />
          </Box>

          <Box>
            <Controller
              name='gender'
              control={control}
              defaultValue={props.gender}
              render={({ field }) => (
                <TextField {...field} select label='Select'>
                  <MenuItem value='M'>Masculino</MenuItem>

                  <MenuItem value='F'>Feminino</MenuItem>
                </TextField>
              )}
            ></Controller>

            <TextField
              required
              id='birthday-input'
              type='date'
              {...register('birthday')}
            />
          </Box>
        </DialogContent>

        <DialogActions style={{ padding: '16px' }}>
          <Button
            variant='outlined'
            onClick={() => setModal({ ...modal, isOpen: false })}
          >
            Cancel
          </Button>
          <Button variant='contained' color='success' type='submit'>
            Edit
          </Button>
        </DialogActions>
      </Box>
    </>
  );
};

export default ModalEdit;
