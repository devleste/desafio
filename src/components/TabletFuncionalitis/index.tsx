// Style
import style from "./index.module.css"

// React Icons
import { AiFillFilter } from "react-icons/ai";
import { MdQueryStats, MdFormatListBulletedAdd, MdUpgrade, MdDelete } from "react-icons/md";

// Zustand
import { useStatistics } from "../../store/useStatistics";
import { useDelete } from "../../store/useDelete";
import { useUpdate } from "../../store/useUpdate";
import { useFilter } from "../../store/useFilter";
import { useAddUser } from "../../store/useAddUser";

export default function TableFuncionalitis(){

  const setStatistics = useStatistics((state) => state.toggleStatistics);
  const setDelete = useDelete((state) => state.toggleDelete);
  const setUpdate = useUpdate((state) => state.toggleUpdate);
  const setAddUser = useAddUser((state) => state.toggleAddUser);
  const setFilter = useFilter((state) => state.toggleFilter)

  return(
    <section className={style.funcionalitisContainer}>
      <button onClick={ () => setFilter()} title="Filter">
        <AiFillFilter size={34} color="#019272" />
      </button>
      <div className={style.buttonGroup}>
        <button onClick={ () => setStatistics()} title="Statistics">
          <MdQueryStats size={34} color="#019272" />
        </button>
        <button onClick={ () => setAddUser()} title="Add">
          <MdFormatListBulletedAdd size={34} color="#019272" />
        </button>
        <button onClick={ () => setUpdate()} title="Update">
          <MdUpgrade size={34} color="#019272" />
        </button>
        <button onClick={ () => setDelete()} title="Delete">
          <MdDelete size={34} color="#019272" />
        </button>
      </div>
    </section>
  )
}
