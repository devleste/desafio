// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal";
import { Input } from "../../ui/Input";
import Button from "../../ui/Button";

// Zustand
import { useAddUser } from "../../../store/useAddUser";
import { useFlashMessage } from "../../../store/useFlashMessage";

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
  const setMessage = useFlashMessage((state) => state.setMessage);

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
    setShow();
    setMessage("Contact saved successfully!")
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Add User</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Input htmlForName="Nome" {...register("first_name")} placeholder="Escreva seu nome" error={errors.first_name?.message} />
        <Input htmlForName="Sobrenome" {...register("last_name")} placeholder="Escreva seu sobrenome" error={errors.last_name?.message} />
        <Input htmlForName="Email" {...register("email")} type="email" placeholder="Escreva seu email" error={errors.email?.message} />
        <div className={style.genderContainer}>
          <label htmlFor="gender">Gênero</label>
          <select {...register("gender")} id="gender">
            <option value="" >Selecione seu genero</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>
        <Input htmlForName="Idioma" {...register("language")} placeholder="Escreva sua linguagem" error={errors.language?.message} />
        <Input htmlForName="Avatar" {...register("avatar")} placeholder="Escreva a url do seu avatar" error={errors.avatar?.message} />
        <Input htmlForName="Data de nascimento" {...register("birthday")} type="date" placeholder="XX/XX/XXXX" error={errors.birthday?.message} />

        <Button type="submit">Send</Button>
      </form>
    </Modal>
  )
}
