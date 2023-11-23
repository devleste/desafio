// Style
import style from "./index.module.css";

// Components
import Button from "../ui/Button";
import { Input } from "../ui/Input";


export default function Form(){


  return (
    <section className={style.formSection}>
      <h2>Contact the developer</h2>
      <form action="https://formsubmit.co/pcsilvamaster@gmail.com" method="POST" className={style.form}>
        <Input htmlForName="Name"placeholder="Type your name" name="name" required />
        <Input htmlForName="Email" placeholder="Type your email" name="email" required />
        <div className={style.textareaContainer}>
          <label htmlFor="Message">Message</label>
          <textarea id="Message" placeholder="Type your message" name="message" required ></textarea>
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
