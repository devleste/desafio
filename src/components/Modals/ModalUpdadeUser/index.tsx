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
          htmlForName="Name" 
          {...register("first_name")} 
          defaultValue={user?.first_name} 
          error={errors.first_name?.message} 
          placeholder="Type your name" 
        />
        <Input 
          htmlForName="Lastname" 
          {...register("last_name")} 
          defaultValue={user?.last_name} 
          error={errors.last_name?.message}  
          placeholder="Type your lastname" 
        />
        <Input 
          htmlForName="Email" 
          {...register("email")} 
          defaultValue={user?.email} 
          error={errors.email?.message}
          type="email" 
          placeholder="Type your email" 
        />
        <div className={style.genderContainer}>
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")} id="gender">
            <option value="" >Select your genre</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <Input 
          htmlForName="Language" 
          {...register("language")} 
          defaultValue={user?.language} 
          error={errors.language?.message}
          placeholder="Type your language" 
        />
        <Input 
          htmlForName="Avatar" 
          {...register("avatar")} 
          defaultValue={user?.avatar} 
          error={errors.avatar?.message}
          placeholder="Type url your avatar" 
        />
        <Input 
          htmlForName="Birthday" 
          {...register("birthday")} 
          defaultValue={user?.birthday} 
          error={errors.birthday?.message}
          type="date" 
          placeholder="Type your birthday" 
        />

        <Button type="submit">Send</Button>
      </form>
    </Modal>
  )
}
