import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './PieChartGender.module.css';

const PieChartGender = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { listaContatos } = useContext(ContatosContext);
  
  let feminino = 0;
  let masculino = 0;
  listaContatos.forEach((contato) => {
    if (contato.gender === 'M') {
      masculino += 1;
    } else {
      feminino += 1;
    }
  });

  const total = masculino + feminino;
  // const percentMasculino = ((masculino / total) * 100).toFixed(2);
  // const percentFeminino = ((feminino / total) * 100).toFixed(2);

  const data = {
    labels: ['Masculino', 'Feminino'],
    datasets: [
      {
        data: [masculino, feminino],
        backgroundColor: [
          '#6495ED',
          '#FF69B4',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = data.labels[context.dataIndex];
            const value = data.datasets[0].data[context.dataIndex];
            return `${label}: ${value} (${((value / total) * 100).toFixed(2)}%)`;
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartPie}>
      <fieldset className={styles.statistical}>
        <legend>Gender</legend>
        <Pie data={data} options={options} className={styles.pie}/>
      </fieldset>
    </div>
  );
};

export default PieChartGender;