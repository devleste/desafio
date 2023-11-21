import Button from "../ui/Button"
import { Input } from "../ui/Input"
import style from "./index.module.css"

export default function Form(){

  return (
    <section className={style.formSection}>
      <h2>Contact us</h2>
      <form className={style.form}>
        <Input htmlForName="Name" placeholder="Type your name" />
        <Input htmlForName="Email" placeholder="Type your email" />
        <div className={style.textareaContainer}>
          <label htmlFor="Message">Message</label>
          <textarea id="Message" placeholder="Type your message"></textarea>
        </div>
        <div>
          <Button>
            Submit
          </Button>
        </div>
      </form>
    </section>
  )
}
