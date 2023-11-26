import style from "./index.module.css"
import { BiSearchAlt } from "react-icons/bi";

type IProps = {
  value: string,
  setValue: (value: string) => void
}

export default function SearchInput(props: IProps){

  return (
    <section className={style.SearchInputContainer}>
      <span>
        <BiSearchAlt size={24} color="#000000" />
      </span>
      <input type="text" value={props.value} onChange={(e) => props.setValue(e.target.value)} placeholder="Pesquisar" />
    </section>
  )
}
