// Logo
import logo from "../../assets/leste-logo-white.png";

// Style
import style from "./index.module.css";

export default function Header(){
  
  return (
    <section className={style.container}>
      <header className={style.headerContainer}>
        <img className={style.logo} src={logo} alt="logo" />
      </header>
    </section>
  )
}
