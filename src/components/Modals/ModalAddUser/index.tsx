// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal";
import { Input } from "../../ui/Input";
import Button from "../../ui/Button";

// Zustand
import { useAddUser } from "../../../store/useAddUser";

// Validation
import { useForm } from "react-hook-form";
import { schema, schemaProps } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

// Storage
import { HandleSave, HandleFetch } from "../../../services/storage";

// Type
import storageType from "../../../type/storageType";

export default function ModalAddUser({updateTable}:{updateTable: (data:storageType[]) => void}){
  const [show, setShow] = useAddUser((state) => [state.addUser, state.toggleAddUser]);

  const {handleSubmit, register, formState:{errors}} = useForm<schemaProps>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      language: "",
      avatar: "",
      birthday: "",
    }
  })

  function getRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  function onSubmit(data: schemaProps){
    const dataValues = {id: getRandomId(), ...data};

    const localData = HandleFetch();
    HandleSave([...localData, dataValues]);
    updateTable([...localData, dataValues])
  }

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Add User</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Input htmlForName="Name" {...register("first_name")} placeholder="Type your name" error={errors.first_name?.message} />
        <Input htmlForName="Lastname" {...register("last_name")} placeholder="Type your lastname" error={errors.last_name?.message} />
        <Input htmlForName="Email" {...register("email")} type="email" placeholder="Type your email" error={errors.email?.message} />
        <div>
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")} id="gender">
            <option value="" ></option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <Input htmlForName="Language" {...register("language")} placeholder="Type your language" error={errors.language?.message} />
        <Input htmlForName="Avatar" {...register("avatar")} placeholder="Type url your avatar" error={errors.avatar?.message} />
        <Input htmlForName="Birthday" {...register("birthday")} type="date" placeholder="Type your birthday" error={errors.birthday?.message} />

        <Button type="submit">Send</Button>
      </form>
    </Modal>
  )
}
