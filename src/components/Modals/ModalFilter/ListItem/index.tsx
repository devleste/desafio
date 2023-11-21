
import style from "./index.module.css"

export default function ListItem({name}: {name:string}){

  return (
    <li className={style.item}>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>{name}</label>
    </li>
  )
}
