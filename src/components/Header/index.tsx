// Logo
import logo from "../../assets/leste-logo-white.png";

// Style
import style from "./index.module.css";

// Icons
import { MdQueryStats, MdFormatListBulletedAdd } from "react-icons/md";

// Zustand
import { useStatistics } from "../../store/useStatistics";

export default function Header(){
  
  const setStatistics = useStatistics((state) => state.toggleStatistics);

  return (
    <section className={style.container}>
      <header className={style.headerContainer}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.buttonContainer}>
          <button onClick={ () => setStatistics()} title="Statistics" className={style.headerButton}>
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
