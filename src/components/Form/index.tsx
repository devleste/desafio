// Style
import style from "./index.module.css";

// Components
import Button from "../ui/Button";
import { Input } from "../ui/Input";


export default function Form(){


  return (
    <section className={style.formSection}>
      <h2>Contate o desenvolvedor</h2>
      <form action="https://formsubmit.co/2b2c8fbaa26d5ce86bfd7bf3efe4f2d3" method="POST" className={style.form}>
        <Input htmlForName="Name"placeholder="Escreva seu nome" name="name" title="Preencha este arquivo" required />
        <Input htmlForName="Email" placeholder="Escreva seu email" title="Preencha este arquivo" name="email" required />
        <div className={style.textareaContainer}>
          <label htmlFor="Message">Message</label>
          <textarea id="Message" placeholder="Escreva sua mensagem" title="Preencha este arquivo" name="message" required ></textarea>
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
