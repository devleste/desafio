// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal"
import ListItem from "./ListItem";

// Zustand
import { useFilter } from "../../../store/useFilter"

export default function ModalFilter(){
  const [show, setShow] = useFilter((state) => [state.filter, state.toggleFilter])

  return (
    <Modal isOpen={show} toogleModal={setShow}>
      <h1 className={style.title}>Filter</h1>
      <section className={style.listContainer}>
        <section className={style.listContent}>
          <h4>Language</h4>
          <ul>
            <ListItem name="Language" />
          </ul>
        </section>
        <section className={style.listContent}>
          <h4>Gender</h4>
          <ul>
            <ListItem name="Gender" />
          </ul>
        </section>
        <section className={style.listContent}>
          <h4>Birthday</h4>
          <ul>
            <ListItem name="Birthday" />
          </ul>
        </section>
      </section>
    </Modal>
  )
}
