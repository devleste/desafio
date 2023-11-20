import logo from "../../assets/leste-logo-white.png";
import style from "./index.module.css";
import { MdQueryStats, MdFormatListBulletedAdd } from "react-icons/md";


export default function Header(){
  
  return (
    <section className={style.container}>
      <header className={style.headerContainer}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.buttonContainer}>
          <button title="Statistics" className={style.headerButton}>
            <MdQueryStats size={34} color="#ffffff" />
          </button>
          <button className={style.headerButton}>
            <MdFormatListBulletedAdd size={34} color="#ffffff" />
          </button>
        </div>
      </header>
    </section>
  )
}
