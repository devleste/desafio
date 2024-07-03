import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoFilter, IoPersonAddSharp } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import Filter from "../filter/Filter";
import styles from "./Navbar.module.css";

const Navbar = ({ setAddContactVisible, filter, setFilter }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
  }, [location]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Link to="/">
            <h1>Leste Contacts</h1>
            <p>Lista de contatos</p>
          </Link>
        </div>
        <div className={styles.side}>
          <div className={styles.filter}>
            {isHomePage && (
              <button className={styles.filter_btn} type="button" onClick={() => setFilterVisible(prev => !prev)}>
                <IoFilter className={styles.icon} title="Filtrar contatos" />
              </button>
            )}
            {isHomePage ? (
              <button type="button" className={styles.statistics_btn}>
                <Link to="/statistics">
                  <MdOutlineBarChart className={styles.icon} title="Estatísticas" />
                </Link>
              </button>
            ) : (
              <button type="button" className={styles.return_btn}>
                <Link to="/">
                  <IoMdArrowRoundBack className={styles.icon} title="Voltar ao início" />
                  <p>Voltar</p>
                </Link>
              </button>
            )}
            <Filter
              visible={filterVisible}
              setFilterVisible={setFilterVisible}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          {isHomePage && (
            <div className={styles.new_contact}>
              <button type="button" className={styles.new_contact_btn} onClick={() => setAddContactVisible(true)}>
                <IoPersonAddSharp className={styles.icon} title="Criar novo contato" />
                <p>Novo Contato</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;