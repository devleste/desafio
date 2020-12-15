import React, { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';

import { Container, Button, ClearButton, EmptyDiv } from './styles';
import FormattedContact from '../../types/FormattedContact';
import { useContacts } from '../../contexts/ContactsContext';
import FormatContact from '../../utils/FormatContact';

interface FiltersProps {
  setFilteredContacts: Dispatch<SetStateAction<FormattedContact[]>>
  showFilters: boolean;
  setAllFilters: Dispatch<SetStateAction<string[]>>
  allFilters: string[];
}

interface Month {
  label: string;
  value: number;
}

const Filters: React.FC<FiltersProps> = ({ setFilteredContacts, showFilters, setAllFilters, allFilters }) => {
  const [formattedContacts, setformattedContacts] = useState<FormattedContact[]>([]);
  const { contacts } = useContacts();

  const [genders, setGenders] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([]);
  const [ages, setAges] = useState<number[]>([]);
  const [months, setMonths] = useState<Month[]>([]);

  const [activeGenders, setActiveGenders] = useState<string[]>([]);
  const [activeAges, setActiveAges] = useState<number[]>([]);
  const [activeMonths, setActiveMonths] = useState<Month[]>([]);
  const [activeLanguages, setActiveLanguages] = useState<string[]>([]);

  useEffect(() => {
    const formatted = contacts.map(contact => FormatContact(contact));
    setformattedContacts(formatted.sort((a, b) => a.first_name > b.first_name ? 1 : a.first_name < b.first_name ? -1 : 0));
  }, [contacts]);

  useEffect(() => {
    let agesCount: number[] = [];
    let languagesCount: string[] = [];
    formattedContacts.forEach(contact => {
      const findAge = agesCount.find(age => age === contact.age);
      if (!findAge) agesCount.push(contact.age);
      const findLanguage = languagesCount.find(language => language === contact.language);
      if (!findLanguage) languagesCount.push(contact.language);
    })
    setGenders(['Masculino', 'Feminino']);
    setMonths([
      {label: 'JAN', value: 1},
      {label: 'FEV', value: 2},
      {label: 'MAR', value: 3},
      {label: 'ABR', value: 4},
      {label: 'MAI', value: 5},
      {label: 'JUN', value: 6},
      {label: 'JUL', value: 7},
      {label: 'AGO', value: 8},
      {label: 'SET', value: 9},
      {label: 'OUT', value: 10},
      {label: 'NOV', value: 11},
      {label: 'DEZ', value: 12}
    ]);
    setAges(agesCount.sort((a, b) =>  a - b));
    setLanguages(languagesCount.sort());
  }, [formattedContacts]);

  useEffect(() => {
    let filterContacts = formattedContacts;
    if (activeGenders.length > 0) {
      let gendersContacts: FormattedContact[] = [];
      activeGenders.forEach(gender => {
        filterContacts.forEach(contact => {
          if (contact.translated_gender === gender) gendersContacts.push(contact);
        });
      });
      filterContacts = gendersContacts;
    }
    if (activeAges.length > 0) {
      let agesContacts: FormattedContact[] = [];
      activeAges.forEach(age => {
        filterContacts.forEach(contact => {
          if (contact.age === age) agesContacts.push(contact);
        });
      });
      filterContacts = agesContacts;
    }
    if (activeMonths.length > 0) {
      let monthsContacts: FormattedContact[] = [];
      activeMonths.forEach(month => {
        filterContacts.forEach(contact => {
          if (contact.month === month.value) monthsContacts.push(contact);
        });
      });
      filterContacts = monthsContacts;
    }
    if (activeLanguages.length > 0) {
      let languageContacts: FormattedContact[] = [];
      activeLanguages.forEach(language => {
        filterContacts.forEach(contact => {
          if (contact.language === language) languageContacts.push(contact);
        });
      });
      filterContacts = languageContacts;
    }
    setFilteredContacts(filterContacts);
  }, [activeGenders, activeAges, activeMonths, activeLanguages, formattedContacts, setFilteredContacts]);

  const addToAllFilters = useCallback((filter: string) => {
    const alreadySelected = allFilters.find(already => already === filter);
    if (alreadySelected) {
      const filters = allFilters.filter(already => already !== filter);
      setAllFilters(filters);
    } else {
      setAllFilters([...allFilters, filter]);
    }
  }, [allFilters, setAllFilters]);

  const handleAddGenderFilter = useCallback((filter: string) => {
    const alreadySelected = activeGenders.find(gender => gender === filter);
    if (alreadySelected) {
      const filteredGenders = activeGenders.filter(gender => gender !== filter);
      setActiveGenders(filteredGenders);
    } else {
      setActiveGenders([...activeGenders, filter]);
    }
    addToAllFilters(filter);
  }, [activeGenders, addToAllFilters]);

  const handleAddAgeFilter = useCallback((filter: number) => {
    const alreadySelected = activeAges.find(age => age === filter);
    if (alreadySelected) {
      const filteredAges = activeAges.filter(age => age !== filter);
      setActiveAges(filteredAges);
    } else {
      setActiveAges([...activeAges, filter]);
    }
    addToAllFilters(filter.toString());
  }, [activeAges, addToAllFilters]);

  const handleAddLanguageFilter = useCallback((filter: string) => {
    const alreadySelected = activeLanguages.find(language => language === filter)
    if (alreadySelected) {
      const filteredLanguages = activeLanguages.filter(language => language !== filter);
      setActiveLanguages(filteredLanguages);
    } else {
      setActiveLanguages([...activeLanguages, filter]);
    }
    addToAllFilters(filter);
  }, [activeLanguages, addToAllFilters]);

  const handleAddMonthFilter = useCallback((filter: Month) => {
    const alreadySelected = activeMonths.find(month => month.label === filter.label)
    if (alreadySelected) {
      const filteredMonths = activeMonths.filter(month => month.label !== filter.label);
      setActiveMonths(filteredMonths);
    } else {
      setActiveMonths([...activeMonths, filter]);
    }
    addToAllFilters(filter.label);
  }, [activeMonths, addToAllFilters]);

  const handleClearFilters = useCallback(() => {
    setActiveGenders([]);
    setActiveAges([]);
    setActiveMonths([]);
    setActiveLanguages([]);
    setAllFilters([]);
  }, [setAllFilters]);

  return (
    <>
      {showFilters ? (
        <Container>
          <strong>Gênero</strong>
          <div>
            {genders.map(gender => (
              <Button key={gender} onClick={() => handleAddGenderFilter(gender)} isActive={!!activeGenders.find(filter => filter === gender)}>{gender}</Button>
            ))} 
          </div>
          <strong>Idade</strong>
            <div>
              {ages.map(age => (
                <Button key={age} onClick={() => handleAddAgeFilter(age)} isActive={!!activeAges.find(filter => filter === age)}>{age}</Button>
              ))}
            </div>
          <strong>Mês de Nascimento</strong>
            <div>
              {months.map(month => (
                <Button key={month.label} onClick={() => handleAddMonthFilter(month)} isActive={!!activeMonths.find(filter => filter.value === month.value)}>{month.label}</Button>
              ))}
            </div>
          <strong>Linguagem</strong>
            <div>
              {languages.map(language => (
                <Button key={language} onClick={() => handleAddLanguageFilter(language)} isActive={!!activeLanguages.find(filter => filter === language)}>{language}</Button>
              ))}
            </div>
            {allFilters.length > 0 ? (
              <ClearButton onClick={handleClearFilters}>Limpar Filtros</ClearButton>
            ) : (
              <div />
            )}
        </Container>
      ) : (
        <EmptyDiv />
      )}
    </>
  );
}

export default Filters