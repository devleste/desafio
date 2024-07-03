import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import styles from "./Statistics.module.css";

const Statistics = ({ contacts }) => {
  const [genderData, setGenderData] = useState([]);
  const genderOptions = {
    chart: {
      title: "Contatos por gênero",
      subtitle: "Masculino e feminino"
    }
  };

  const languageOptions = {
    chart: {
      title: "Contatos por idioma",
      subtitle: "Idiomas"
    }
  }
  const [languageData, setLanguageData] = useState([]);

  const generateGenderChart = (data) => {
    const masculineCount = data.reduce((acc, cur) => {
      if (cur.gender === "M") {
        return acc + 1;
      }
      return acc;
    }, 0);
    const feminineCount = data.reduce((acc, cur) => {
      if (cur.gender === "F") {
        return acc + 1;
      }
      return acc;
    }, 0);

    setGenderData([
      [" ", "Masculino", "Feminino"],
      [" ", masculineCount, feminineCount]
    ]);
  }

  const generateLanguageChart = (data) => {
    const languagesList = data.reduce((acc, cur) => {
      if (acc.find(x => x === cur.language) !== undefined) {
        return acc;
      }
      return acc.concat([cur.language]);
    }, []);

    const languagesCount = data.reduce((acc, cur) => {
      const index = languagesList.findIndex(x => x === cur.language);
      let temp = acc;
      if (temp[index] === undefined) {
        temp[index] = 1;
      } else {
        temp[index] += 1;
      }
      return temp;
    }, []);

    setLanguageData([
      [" "].concat(languagesList),
      [" "].concat(languagesCount)
    ]);
  }

  useEffect(() => {
    const data = contacts.flat(Infinity);
    generateGenderChart(data);
    generateLanguageChart(data);
  }, [contacts]);

  return (
    <div className={styles.statistics}>
      <div className={styles.gender}>
        <Chart
          className={styles.chart}
          chartType="Bar"
          width="100%"
          height="400px"
          options={genderOptions}
          data={genderData}
        />
      </div>
      <div className={styles.language}>
        <Chart
          className={styles.chart}
          chartType="Bar"
          width="100%"
          height="400px"
          options={languageOptions}
          data={languageData}
        />

      </div>
    </div>
  )
}

export default Statistics;