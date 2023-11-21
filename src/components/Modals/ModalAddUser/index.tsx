// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal";

// Zustand
import { useAddUser } from "../../../store/useAddUser";
import { Input } from "../../ui/Input";
import Button from "../../ui/Button";

export default function ModalAddUser(){
  const [show, setShow] = useAddUser((state) => [state.addUser, state.toggleAddUser])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Add User</h1>
      <form className={style.form}>
        <Input htmlForName="Name" placeholder="Type your name" />
        <Input htmlForName="Lastname" placeholder="Type your lastname" />
        <Input htmlForName="Email" type="email" placeholder="Type your email" />
        <fieldset className={style.checkboxContainer}>
          <legend>Gender</legend>
          <div>
            <label htmlFor="male">Male</label>
            <input type="checkbox" name="male" id="male" />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input type="checkbox" name="female" id="female" />
          </div>
        </fieldset>
        <Input htmlForName="Language" placeholder="Type your language" />
        <Input htmlForName="Avatar" placeholder="Type url your avatar" />
        <Input htmlForName="Birthday" type="date" placeholder="Type your birthday" />

        <Button>Send</Button>
      </form>
    </Modal>
  )
}
