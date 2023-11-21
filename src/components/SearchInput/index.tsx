import style from "./index.module.css"
import { BiSearchAlt } from "react-icons/bi";

export default function SearchInput(){


  return (
    <section className={style.SearchInputContainer}>
      <span>
        <BiSearchAlt size={24} color="#000000" />
      </span>
      <input type="text" placeholder="Search" />
    </section>
  )
}
