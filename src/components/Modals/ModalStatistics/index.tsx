// Style
import style from "./index.module.css";

// Charts
import { Chart } from "react-google-charts";

// Components
import Modal from "../../ui/Modal"

// Zustand
import { useStatistics } from '../../../store/useStatistics';

// Type
import storageType from "../../../type/storageType";
import { useEffect, useState } from "react";

export default function ModalStatistics({data}:{data: storageType[]}){
  const [show, setShow] = useStatistics((state) => [state.statistics, state.toggleStatistics]);
  const [pieChartStatistics, setPieChartStatistics] = useState([
    ["Task", "Gender"],
    ["Woman", 0],
    ["Man", 0]
  ]);

  const [columnChart, setColumnChart] = useState<object[]>([]);
  
  useEffect(() => {
    function countLanguages(languages: storageType[]) {
      const languageCounts = new Map();
    
      for (const language of languages) {
        if (!languageCounts.has(language)) {
          languageCounts.set(language, 0);
        }
        languageCounts.set(language, languageCounts.get(language) + 1);
      }
    
      const results = [];
    
      for (const [language, count] of languageCounts) {
        results.push([language, count]);
      }
    
      return results.map((item) => [item[0].language, item[1]]);
    }

    function getCountGender(data: storageType[], gender: string): number{
  
      const genderData = data.filter((item) => item.gender === gender);
      return genderData.length;
    }

    setColumnChart(countLanguages(data));
    setPieChartStatistics([
      ["Task", "Gender"],
      ["Woman", getCountGender(data, "F")],
      ["Man", getCountGender(data, "M")]
    ])
  }, [data])


  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Statitics</h1>
      <section className={style.chartContainer}>
        <Chart
          chartType="PieChart"
          data={pieChartStatistics}
          width={"100%"}
          height={"400px"}
        />
        <Chart
          chartType="ColumnChart"
          data={[["", ""], ...columnChart]}
          width="100%"
          height="400px"
          legendToggle
        />
      </section>
    </Modal>
  )
}
