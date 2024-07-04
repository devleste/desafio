'use client';

import React, { useState, useEffect } from 'react';
import { PieChart, BarChart } from '@mui/x-charts';
import { CircularProgress } from '@mui/material';
import { getData } from '../api/contacts';

const Dashboard = () => {
  const [genderStats, setGenderStats] = useState([]);
  const [languageStats, setLanguageStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      calculateGenderStats(parsedContacts);
      calculateLanguageStats(parsedContacts);
      setLoading(false);
    } else {
      const fetchData = async () => {
        const data = await getData();
        calculateGenderStats(data);
        calculateLanguageStats(data);
        localStorage.setItem('contacts', JSON.stringify(data));
        setLoading(false);
      };

      fetchData();
    }
  }, []);

  const calculateGenderStats = (contacts) => {
    const genderCount = contacts.reduce((acc, contact) => {
      const gender = contact.gender;
      acc[gender] = (acc[gender] || 0) + 1;
      return acc;
    }, {});

    setGenderStats([
      { id: 0, value: genderCount['M'] || 0, label: 'Masculino' },
      { id: 1, value: genderCount['F'] || 0, label: 'Feminino' },
    ]);
  };

  const calculateLanguageStats = (contacts) => {
    const languageCount = contacts.reduce((acc, contact) => {
      const language = contact.language;
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});

    setLanguageStats(
      Object.entries(languageCount).map(([key, value]) => ({
        language: key,
        count: value,
      })),
    );
  };

  if (loading) {
    return (
      <CircularProgress
        className='m-auto text-font-first'
        size={50}
        thickness={2}
      />
    );
  }

  return (
    <div className='animate-animeLeft'>
      <h1 className='text-2xl text-center mb-10'>Contatos por gênero:</h1>
      <div className=' flex mb-10'>
        <PieChart
          series={[
            {
              data: genderStats,
            },
          ]}
          width={500}
          height={250}
        />
      </div>

      <h1 className='text-2xl text-center mb-4'>Contatos por idioma:</h1>
      <div className=' flex'>
        <BarChart
          yAxis={[
            {
              tickInterval: 1,
              tickFormatter: (value) => Math.floor(value),
            },
          ]}
          xAxis={[
            {
              scaleType: 'band',
              data: languageStats.map((stat) => stat.language),
              categoryGapRatio: 0.3,
            },
          ]}
          series={[{ data: languageStats.map((stat) => stat.count) }]}
          width={800}
          height={380}
        />
      </div>
    </div>
  );
};

export default Dashboard;
