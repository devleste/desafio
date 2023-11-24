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
      const newData = languages.map((item) => item.language);
      
      for(const language of newData){
        if (!languageCounts.has(language)) {
          languageCounts.set(language, 1);
        } else {
          languageCounts.set(language, languageCounts.get(language) + 1);
        }
      }

      return Array.from(languageCounts);
    }

    function getCountGender(data: storageType[], gender: string): number{
  
      const genderData = data.filter((item) => item.gender === gender);
      return genderData.length;
    }

    setColumnChart(countLanguages(data));
    setPieChartStatistics([
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
