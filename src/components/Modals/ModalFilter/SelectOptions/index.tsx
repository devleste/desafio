import style from "./index.module.css"

type IProps = {
  htmlForName: string,
  label: string,
  options: (string|number)[]

}

export default function SelectOptions({htmlForName, label, options}:IProps){

  return (
    <section className={style.selectContainer}>
      <label htmlFor={htmlForName}>{label}:</label>
      <select name={htmlForName} id={htmlForName}>
        <option value="">selecione uma opção</option>
        {
          options.map(option => <option key={option} value={option}>{option}</option>)
        }
        
      </select>
    </section>
  )
}
