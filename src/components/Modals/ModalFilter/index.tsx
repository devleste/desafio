
// Components
import Modal from "../../ui/Modal"

// Zustand
import { useFilter } from "../../../store/useFilter"

export default function ModalFilter(){
  const [show, setShow] = useFilter((state) => [state.filter, state.toggleFilter])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1>Delete</h1>
    </Modal>
  )
}
