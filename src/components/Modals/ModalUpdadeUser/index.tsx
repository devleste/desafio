// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal";
import { Input } from "../../ui/Input";
import Button from "../../ui/Button";

// Zustand
import { useUpdateUser } from "../../../store/useUpdateUser";

// Validation
import { useForm } from "react-hook-form";
import { schema, schemaProps } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../ErrorMessage";

export default function ModalUpdateUser(){
  const [show, setShow] = useUpdateUser((state) => [state.updateUser, state.toggleUpdateUser])

  const {handleSubmit, register, formState:{errors}} = useForm<schemaProps>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      language: "",
      avatar: "",
      birthday: "",
    }
  })

  function onSubmit(data: schemaProps){
    console.log(data)
  }

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Update</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Input htmlForName="Name" {...register("name")} placeholder="Type your name" />
        {
          errors.name && (
            <ErrorMessage message={errors.name.message} />
          )
        }
        <Input htmlForName="Lastname" {...register("lastname")} placeholder="Type your lastname" />
        {
          errors.lastname && (
            <ErrorMessage message={errors.lastname.message} />
          )
        }
        <Input htmlForName="Email" {...register("email")} type="email" placeholder="Type your email" />
        {
          errors.email && (
            <ErrorMessage message={errors.email.message} />
          )
        }
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
        <Input htmlForName="Language" {...register("language")} placeholder="Type your language" />
        {
          errors.language && (
            <ErrorMessage message={errors.language.message} />
          )
        }
        <Input htmlForName="Avatar" {...register("avatar")} placeholder="Type url your avatar" />
        {
          errors.avatar && (
            <ErrorMessage message={errors.avatar.message} />
          )
        }
        <Input htmlForName="Birthday" {...register("birthday")} type="date" placeholder="Type your birthday" />
        {
          errors.birthday && (
            <ErrorMessage message={errors.birthday.message} />
          )
        }

        <Button>Send</Button>
      </form>
    </Modal>
  )
}
