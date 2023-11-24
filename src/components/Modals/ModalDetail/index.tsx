// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal"

// Zustand
import { useDetail } from "../../../store/useDetail"

export default function ModalDetail(){
  const [show, setShow, user] = useDetail((state) => [state.detail, state.toggleDetail, state.userData])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Details</h1>
      <section className={style.informationsContainer}>
        <img src={user?.avatar} alt="Avatar" />
        <h3>{user?.first_name} {user?.last_name}</h3>
        <div className={style.userInformations}>
          <p>
            <strong>Email: </strong>
            <span>{user?.email}</span>
          </p>
          <p>
            <strong>Language: </strong>
            <span>{user?.language}</span>
          </p>
          <p>
            <strong>Gender: </strong>
            <span>{user?.gender}</span>
          </p>
          <p>
            <strong>Birthday: </strong>
            <span>{user?.birthday}</span>
          </p>
        </div>
      </section>
    </Modal>
  )
}
