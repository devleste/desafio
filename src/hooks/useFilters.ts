/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import { ListContactProps } from "../pages/ListContacts";
import { calculateAge } from "../utils/calculateAge";
import { AGES } from "../utils/ages";

interface GenderStatisticsProps {
  gender: string;
  genderCount: number;
}

interface LanguageStatisticsProps {
  language: string;
  count: number;
}

interface UseFiltersReturn {
  genderFilter: string;
  setGenderFilter: (value: string) => void;
  languageFilter: string;
  setLanguageFilter: (value: string) => void;
  ageFilter: string;
  setAgeFilter: (value: string) => void;
  birthdayMonthFilter: string;
  setBirthdayMonthFilter: (value: string) => void;
  filteredContacts: ListContactProps[];
  filteredGenderStatistics: GenderStatisticsProps[];
  filteredLanguageStatistics: LanguageStatisticsProps[];
  clearFilters: () => void;
}

export function useFilters(contacts: ListContactProps[]): UseFiltersReturn {
  const [genderFilter, setGenderFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [birthdayMonthFilter, setBirthdayMonthFilter] = useState("");

  function getAgeRange(ageValue: string) {
    const ageRange = AGES.find((age) => age.value === ageValue)?.age;

    if (ageRange) {
      const [minAge, maxAge] = ageRange.split(" à ").map(Number);
      return { minAge, maxAge: maxAge || 200 };
    }

    return { minAge: 0, maxAge: 200 };
  }

  const filterByGender = (contact: ListContactProps) => {
    return genderFilter === "" || contact.gender === genderFilter;
  };

  const filterByLanguage = (contact: ListContactProps) => {
    return languageFilter === "" || contact.language === languageFilter;
  };

  const filterByAge = (contact: ListContactProps) => {
    const age = calculateAge(contact.birthday);
    const { minAge, maxAge } = getAgeRange(ageFilter);
    return ageFilter === "" || (age >= minAge && age <= maxAge);
  };

  const filterByBirthdayMonth = (contact: ListContactProps) => {
    const birthdayMonth = new Date(contact.birthday).toLocaleString("en-us", {
      month: "long",
    });

    return (
      birthdayMonthFilter === "" ||
      birthdayMonth.toLowerCase() === birthdayMonthFilter.toLowerCase()
    );
  };

  const filteredContacts = useMemo(() => {
    return contacts
      .filter(filterByGender)
      .filter(filterByLanguage)
      .filter(filterByAge)
      .filter(filterByBirthdayMonth);
  }, [contacts, genderFilter, languageFilter, ageFilter, birthdayMonthFilter]);

  const filteredGenderStatistics = useMemo(() => {
    let maleCount = 0;
    let femaleCount = 0;

    filteredContacts.forEach((contact) => {
      if (contact.gender === "Masculino") {
        maleCount++;
      } else if (contact.gender === "Feminino") {
        femaleCount++;
      }
    });

    return [
      { gender: "Masculino", genderCount: maleCount },
      { gender: "Feminino", genderCount: femaleCount },
    ];
  }, [filteredContacts]);

  const filteredLanguageStatistics = useMemo(() => {
    const languageStats: { [language: string]: number } = {};

    filteredContacts.forEach((contact) => {
      if (!languageStats[contact.language]) {
        languageStats[contact.language] = 0;
      }
      languageStats[contact.language]++;
    });

    return Object.keys(languageStats).map((language) => ({
      language,
      count: languageStats[language],
    }));
  }, [filteredContacts]);

  const clearFilters = () => {
    setGenderFilter("");
    setLanguageFilter("");
    setAgeFilter("");
    setBirthdayMonthFilter("");
  };

  return {
    genderFilter,
    setGenderFilter,
    languageFilter,
    setLanguageFilter,
    ageFilter,
    setAgeFilter,
    birthdayMonthFilter,
    setBirthdayMonthFilter,
    filteredGenderStatistics,
    filteredLanguageStatistics,
    filteredContacts,
    clearFilters,
  };
}
