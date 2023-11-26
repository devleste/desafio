// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal";
import { Input } from "../../ui/Input";
import Button from "../../ui/Button";

// Zustand
import { useUpdateUser } from "../../../store/useUpdateUser";
import { useFlashMessage } from "../../../store/useFlashMessage";

// Validation
import { useForm } from "react-hook-form";
import { schema, schemaProps } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

// Storage
import { HandleFetch, HandleSave } from "../../../services/storage";

// Type
import storageType from "../../../type/storageType";
import { useEffect, useState } from "react";

export default function ModalUpdateUser({updateTable}: {updateTable: (data:storageType[]) => void}){
  const [show, setShow, id] = useUpdateUser((state) => [state.updateUser, state.toggleUpdateUser, state.id]);
  const [user, setUser] = useState<storageType|null>();
  const setMessage = useFlashMessage((state) => state.setMessage);

  
  useEffect(()=>{
    function getUser():storageType|null{
      if(!id){
        return null
      }
  
      const data = HandleFetch();
      const user = data.filter((item:storageType) => item.id === id)
      // console.log(user[0])
      return user[0]
    }

    setUser(getUser())

  }, [id])

  const {handleSubmit, register, formState:{errors}} = useForm<schemaProps>({
    mode: "onSubmit",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      language: user?.language,
      avatar: user?.avatar,
      birthday: user?.birthday,
    }
  })

  function onSubmit(data: schemaProps){
    const storageData = HandleFetch();

    const newData = storageData.filter((item:storageType) => item.id != id);
    newData.push({...data, id: id});
    
    HandleSave(newData);
    updateTable(newData);
    setShow();
    setMessage("Contact updated successfully");
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Update</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Input 
          htmlForName="Nome" 
          {...register("first_name")} 
          defaultValue={user?.first_name} 
          error={errors.first_name?.message} 
          placeholder="Escreva seu nome" 
        />
        <Input 
          htmlForName="Sobrenome" 
          {...register("last_name")} 
          defaultValue={user?.last_name} 
          error={errors.last_name?.message}  
          placeholder="Escreva sobrenome" 
        />
        <Input 
          htmlForName="Email" 
          {...register("email")} 
          defaultValue={user?.email} 
          error={errors.email?.message}
          type="email" 
          placeholder="Escreva seu email" 
        />
        <div className={style.genderContainer}>
          <label htmlFor="Gênero">Gender</label>
          <select {...register("gender")} id="gender">
            <option value="" >Select your genre</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>
        <Input 
          htmlForName="Idioma" 
          {...register("language")} 
          defaultValue={user?.language} 
          error={errors.language?.message}
          placeholder="Escreva sua linguagem" 
        />
        <Input 
          htmlForName="Avatar" 
          {...register("avatar")} 
          defaultValue={user?.avatar} 
          error={errors.avatar?.message}
          placeholder="Escreva a url do seu avatar" 
        />
        <Input 
          htmlForName="Data de nascimento" 
          {...register("birthday")} 
          defaultValue={user?.birthday} 
          error={errors.birthday?.message}
          type="date" 
          placeholder="XX/XX/XXXX" 
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Modal>
  )
}
