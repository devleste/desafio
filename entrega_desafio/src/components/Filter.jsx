import { useState } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Filter = ({ onFilter }) => {
  const [genderFilter, setGenderFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const contatosFromLocalStorage = localStorage.getItem('contatos');
  const contatos = contatosFromLocalStorage ? JSON.parse(contatosFromLocalStorage) : [];

  const extractUniqueLanguages = (contatos) => {
    const uniqueLanguages = new Set();
    contatos.forEach((contato) => {
      uniqueLanguages.add(contato.language);
    });
    return Array.from(uniqueLanguages);
  };
  const extractUniqueMonths = (contatos) => {
    const uniqueMonths = new Set();
    contatos.forEach((contato) => {
      const contactMonth = new Date(contato.birthday).getMonth() + 1;
      uniqueMonths.add(contactMonth);
    });
    return Array.from(uniqueMonths).sort((a, b) => a - b);
  };

  const handleFilter = () => {
    onFilter({
      gender: genderFilter,
      language: languageFilter,
      month: monthFilter,
      age: ageFilter,
    });
    if (genderFilter === 'all') {
      setGenderFilter('');
    }

    if (languageFilter === 'all') {
      setLanguageFilter('');
    }

    if (monthFilter === 'all') {
      setMonthFilter('');
    }

    if (ageFilter === 'all') {
      setAgeFilter('');
    }
  };

  const uniqueLanguages = extractUniqueLanguages(contatos);
  const uniqueMonths = extractUniqueMonths(contatos);

  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filters-data">
        <div className='filters margin-inline10'>
          <label className='mobile-label'>Gênero:</label>
          <Select onValueChange={(value) => setGenderFilter(value)} className="custom-select">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="M">Masculino</SelectItem>
              <SelectItem value="F">Feminino</SelectItem>
            </SelectContent>
          </Select>

        </div>
        <div className='filters margin-inline10'>
          <label className='mobile-label'>Idioma:</label>
          <Select onValueChange={(value) => setLanguageFilter(value)} className="custom-select">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {uniqueLanguages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        </div>
        <div className="filters margin-inline10">
          <label className='mobile-label'>Mês de aniversário:</label>
          <Select onValueChange={(value) => setMonthFilter(value)} className="custom-select">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {uniqueMonths.map((month) => (
                <SelectItem key={month} value={month}>
                  {new Date(0, month - 1).toLocaleString('pt-BR', { month: 'long' })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='filters margin-inline10'>
          <label className='mobile-label'>Idade:</label>
          <Select onValueChange={(value) => setAgeFilter(value)} className="custom-select">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="18-25">18-25</SelectItem>
              <SelectItem value="26-40">26-40</SelectItem>
              <SelectItem value="41-55">41-55</SelectItem>
              <SelectItem value="56+">56+</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </div>
      <Button onClick={handleFilter} className='btn'>Aplicar Filtros</Button>
    </div>
  );
};
Filter.propTypes = {
  onFilter: PropTypes.object.isRequired,
};

export default Filter;
