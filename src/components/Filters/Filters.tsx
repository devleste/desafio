import { useState } from 'react';

import {
  Box,
  Menu,
  MenuItem,
  Button,
  TextField,
  Typography,
} from '@mui/material';

import moment from 'moment';

import { ContactsProps, useContextModal } from '../../contexts/context';
import { mesesFiltro } from '../../utils/meses';

const Filters = () => {
  const { setContacts } = useContextModal();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [gender, setGender] = useState<string>('');
  const [mes, setMes] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const open = Boolean(anchorEl);

  const handleOpenFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const localStorageContacts = localStorage.getItem('contacts');

    if (e.target.value === '') {
      setContacts(JSON.parse(localStorageContacts ?? ''));
    } else {
      const filteredContacts = JSON.parse(localStorageContacts ?? '').filter(
        (contact: ContactsProps) => contact.gender === e.target.value
      );

      setContacts(filteredContacts);
    }

    setAnchorEl(null);
    setGender(e.target.value);
  };

  const handleFilterMes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const localStorageContacts = localStorage.getItem('contacts');

    if (e.target.value === '') {
      setContacts(JSON.parse(localStorageContacts ?? ''));
    } else {
      const filteredContacts = JSON.parse(localStorageContacts ?? '').filter(
        (contact: ContactsProps) => {
          const splitBirthday = contact.birthday.split('-');
          if (splitBirthday[1] === e.target.value) {
            return contact;
          }
        }
      );
      setContacts(filteredContacts);
    }

    setAnchorEl(null);

    setMes(e.target.value);
  };

  const handleFilterLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const localStorageContacts = localStorage.getItem('contacts');

    if (e.target.value === '') {
      setContacts(JSON.parse(localStorageContacts ?? ''));
    } else {
      const filteredContacts = JSON.parse(localStorageContacts ?? '').filter(
        (contact: ContactsProps) =>
          contact.language.toLowerCase() === e.target.value.toLowerCase()
      );

      setContacts(filteredContacts);
    }

    setLanguage(e.target.value);
  };

  const handleFilterAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const localStorageContacts = localStorage.getItem('contacts');

    if (e.target.value === '') {
      setContacts(JSON.parse(localStorageContacts ?? ''));
    } else {
      const filteredContacts = JSON.parse(localStorageContacts ?? '').filter(
        (contact: ContactsProps) => {
          const ageSplit = moment(contact.birthday, 'YYYYMMDD')
            .fromNow()
            .split(' ');

          if (ageSplit[0] === e.target.value) return contact;
        }
      );

      setContacts(filteredContacts);
    }

    setAge(e.target.value);
  };

  return (
    <Box mr='16px'>
      <Button
        variant='contained'
        id='filters-button'
        onClick={handleOpenFilter}
        aria-controls={open ? 'filters-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        Filters
      </Button>

      <Menu
        id='filters-menu'
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'filters-button',
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          component='form'
          padding={2}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '200px' },
          }}
        >
          <Typography mb={2} variant='h6'>
            Filtros
          </Typography>

          <Box>
            <TextField
              id='gender-select'
              select
              label='Gender'
              value={gender}
              onChange={handleFilterGender}
            >
              <MenuItem value=''>Selecione</MenuItem>
              <MenuItem value='M'>Masculino</MenuItem>

              <MenuItem value='F'>Feminino</MenuItem>
            </TextField>

            <TextField
              id='language'
              label='Language'
              variant='outlined'
              value={language}
              onChange={handleFilterLanguage}
            />
          </Box>

          <Box>
            <TextField
              id='mes-select'
              select
              label='Mes'
              value={mes}
              onChange={handleFilterMes}
            >
              <MenuItem value=''>Selecione</MenuItem>
              {mesesFiltro.map((mes) => {
                return (
                  <MenuItem key={mes.value} value={mes.value}>
                    {mes.descricao}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              id='age'
              label='Age'
              variant='outlined'
              onChange={handleFilterAge}
              value={age}
            />
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default Filters;
