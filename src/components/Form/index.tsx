// Style
import style from "./index.module.css";

// Components
import Button from "../ui/Button";
import { Input } from "../ui/Input";

// FormValidation
import { useForm } from "react-hook-form";
import { schema, schemaProps } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";

export default function Form(){

  const {handleSubmit, register, formState:{errors}} = useForm<schemaProps>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  function onSubmit(data: schemaProps){
    console.log(data)
  }

  return (
    <section className={style.formSection}>
      <h2>Contact the developer</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Input htmlForName="Name" {...register("name")} placeholder="Type your name" error={errors.name?.message} />
        <Input htmlForName="Email" {...register("email")} placeholder="Type your email" error={errors.email?.message} />
        <div className={style.textareaContainer}>
          <label htmlFor="Message">Message</label>
          <textarea id="Message" {...register("message")} placeholder="Type your message"></textarea>
          {
            errors.message && (<ErrorMessage message={errors.message.message} />)
          }
        </div>
        <div>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </section>
  )
}
