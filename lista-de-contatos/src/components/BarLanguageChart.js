import React, { useEffect, useContext } from "react";
import ContatosContext from '../context/ContatosContext';
import styles from './BarLanguageChart.module.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

const BarLanguageChart = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement);
  const { listaContatos, languageTotals, setLanguageTotals } = useContext(ContatosContext);
  
  useEffect(() => {
    const totals = listaContatos?.reduce((acc, person) => {
      const language = person.language;
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});

    setLanguageTotals(totals);
  }, [listaContatos]);

  const languageLabels = Object.keys(languageTotals);
  const languageCounts = Object.values(languageTotals);
 
  const chartData = {
    labels: languageLabels,
    datasets: [
      {
        label: "Language",
        data: languageCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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
    <div>
      <h2>Language</h2>
      <Bar className={styles.bar} data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarLanguageChart;