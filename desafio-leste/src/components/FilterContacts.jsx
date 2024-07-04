import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import { getData } from '.././app/api/contacts';
import { Clear } from '@mui/icons-material';

const FilterContacts = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const data = await getData();
      const dataLanguages = [
        ...new Set(data.map((contact) => contact.language)),
      ];
      setLanguages(dataLanguages);
    };

    fetchLanguages();
  }, []);

  const handleChange = (field, value) => {
    if (field === 'age' && value < 0) {
      value = 0;
    }
    setLocalFilters((prev) => ({ ...prev, [field]: value }));
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      gender: '',
      language: '',
      age: '',
      birthdayMonth: '',
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 mb-4'>
      <FormControl variant='outlined' size='small' className='sm:w-1/6'>
        <InputLabel>Gênero</InputLabel>
        <Select
          id='gender'
          value={localFilters.gender}
          onChange={(e) => handleChange('gender', e.target.value)}
          label='Gênero'
        >
          <MenuItem value=''>Todos</MenuItem>
          <MenuItem value='M'>Masculino</MenuItem>
          <MenuItem value='F'>Feminino</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='outlined' size='small' className='sm:w-1/6'>
        <InputLabel>Idioma</InputLabel>
        <Select
          id='language'
          value={localFilters.language}
          onChange={(e) => handleChange('language', e.target.value)}
          label='Idioma'
        >
          <MenuItem value=''>Todos</MenuItem>
          {languages.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id='idade'
        label='Idade'
        type='number'
        variant='outlined'
        size='small'
        value={localFilters.age}
        className='sm:w-1/6'
        onChange={(e) =>
          handleChange('age', e.target.value < 0 ? 0 : e.target.value)
        }
        InputProps={{ inputProps: { min: 0 } }}
      />
      <FormControl variant='outlined' size='small' className='sm:w-1/6'>
        <InputLabel>Mês de Aniversário</InputLabel>
        <Select
          id='aniversario'
          value={localFilters.birthdayMonth}
          onChange={(e) => handleChange('birthdayMonth', e.target.value)}
          label='Mês de Aniversário'
        >
          <MenuItem value=''>Todos</MenuItem>
          {[...Array(12).keys()].map((month) => (
            <MenuItem key={month + 1} value={month + 1}>
              {new Date(0, month).toLocaleString('default', { month: 'long' })}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className='flex gap-4'>
        <Button
          variant='contained'
          className='bg-gray-500 text-red-400 hover:bg-gray-700 hover:text-red-700'
          title='Limpar filtros'
          onClick={clearFilters}
        >
          <Clear />
        </Button>
        <Button
          variant='contained'
          className='bg-font-first hover:bg-bg-gray hover:text-font-first'
          onClick={applyFilters}
        >
          Aplicar Filtros
        </Button>
      </div>
    </div>
  );
};

export default FilterContacts;
