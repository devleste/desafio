// Style
import style from "./index.module.css";

// Components
import Button from "../ui/Button";
import { Input } from "../ui/Input";


export default function Form(){


  return (
    <section className={style.formSection}>
      <h2>Contact the developer</h2>
      <form action="https://formsubmit.co/2b2c8fbaa26d5ce86bfd7bf3efe4f2d3" method="POST" className={style.form}>
        <Input htmlForName="Name"placeholder="Type your name" name="name" title="Fill in this field" required />
        <Input htmlForName="Email" placeholder="Type your email" title="Fill in this field" name="email" required />
        <div className={style.textareaContainer}>
          <label htmlFor="Message">Message</label>
          <textarea id="Message" placeholder="Type your message" title="Fill in this field" name="message" required ></textarea>
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
