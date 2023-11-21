// Style
import style from "./index.module.css";

// Charts
import { Chart } from "react-google-charts";

// Components
import Modal from "../../ui/Modal"

// Zustand
import { useStatistics } from '../../../store/useStatistics';

const data = [
  ["Task", "Hours per Day"],
  ["Woman", 11],
  ["Man", 2]
];

export default function ModalStatistics(){
  const [show, setShow] = useStatistics((state) => [state.statistics, state.toggleStatistics])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Statitics</h1>
      <section className={style.chartContainer}>
        <Chart
          chartType="PieChart"
          data={data}
          width={"100%"}
          height={"400px"}
        />
        <Chart
          chartType="ColumnChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />
      </section>
    </Modal>
  )
}
