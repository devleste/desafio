import logo from "../../assets/leste-logo.webp";
import style from "./index.module.css";
import { MdQueryStats } from "react-icons/md";


export default function Header(){
  
  return (
    <section>
      <header className={style.headerContainer}>
        <img src={logo} alt="logo" />
        <button className={style.headerButton}>
          <MdQueryStats size={34} color="#009373" />
        </button>
      </header>
    </section>
  )
}
