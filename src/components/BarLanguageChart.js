import React, { useEffect, useContext } from "react";
import ContatosContext from '../context/ContatosContext';
import styles from './BarLanguageChart.module.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

const BarLanguageChart = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement);
  const { listaContatos, languageTotals, setLanguageTotals } = useContext(ContatosContext);
  
  useEffect(() => {
    if (Array.isArray(listaContatos)) {
    const totals = listaContatos?.reduce((acc, person) => {
      const language = person.language;
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});
    setLanguageTotals(totals);
  }}, [listaContatos, setLanguageTotals]);

  const languageLabels = Object.keys(languageTotals);
  const languageCounts = Object.values(languageTotals);
 
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  }

  const backgroundColors = languageLabels.map(() => getRandomColor());

  const chartData = {
    labels: languageLabels,
    datasets: [
      {
        label: "Language",
        data: languageCounts,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      scales: {
        y: {
          beginAtZero: true,
          // max: 100,
          ticks: {
            callback: (value) => `${value}%`,
          },
        },
      },
    }
  }

  

  return (
    <div className={styles.barContainer}>
      <fieldset className={styles.statistical}>
        <legend>Language</legend>
        <Bar className={styles.bar} data={chartData} options={chartOptions} />
      </fieldset>
    </div>
  );
}

export default BarLanguageChart;