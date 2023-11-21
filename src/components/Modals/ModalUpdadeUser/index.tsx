// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal";
import { Input } from "../../ui/Input";
import Button from "../../ui/Button";

// Zustand
import { useUpdateUser } from "../../../store/useUpdateUser";

export default function ModalUpdateUser(){
  const [show, setShow] = useUpdateUser((state) => [state.updateUser, state.toggleUpdateUser])

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
