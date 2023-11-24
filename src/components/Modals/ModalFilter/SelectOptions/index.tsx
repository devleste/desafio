// React
import { FormEvent } from "react";

// Zustand
import { useFlashMessage } from "../../../../store/useFlashMessage";

// Style
import style from "./index.module.css";

type IProps = {
  htmlForName: string,
  label: string,
  options: (string|number)[],
  show: string,
  setShow: (show: string) => void

}

export default function SelectOptions({htmlForName, label, options, show, setShow}:IProps){

  const setMessage = useFlashMessage((state) => state.setMessage);

  function handleChange(e: FormEvent<HTMLSelectElement>){
    const selectedOption = e.target as HTMLSelectElement;
    const selectedValue = selectedOption.value;

    setShow(selectedValue);
    setMessage("Filter successfully applied")
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  return (
    <section className={style.selectContainer}>
      <label htmlFor={htmlForName}>{label}:</label>
      <select name={htmlForName} id={htmlForName} value={show} onChange={(e) =>  handleChange(e)} >
        <option value="">selecione uma opção</option>
        {
          options.map(option => <option key={option} value={option}>{option}</option>)
        }
        
      </select>
    </section>
  )
}
