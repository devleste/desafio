import style from "./index.module.css";

type IProps = {
  htmlForName: string,
  label: string,
  options: (string|number)[],
  show: string,
  setShow: (show: string) => void

}

export default function SelectOptions({htmlForName, label, options, show, setShow}:IProps){

  return (
    <section className={style.selectContainer}>
      <label htmlFor={htmlForName}>{label}:</label>
      <select name={htmlForName} id={htmlForName} value={show} onChange={(e) => setShow(e.target.value)} >
        <option value="">selecione uma opção</option>
        {
          options.map(option => <option key={option} value={option}>{option}</option>)
        }
        
      </select>
    </section>
  )
}
