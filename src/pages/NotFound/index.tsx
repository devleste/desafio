import styles from "./styles.module.scss";
import notFoundImage from "../../assets/error404.png";
import { Header } from "../../components/Header";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Footer } from "../../components/Footer";
import logoImage from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img src={logoImage} className={styles.logo} alt="Logo" />
      </Link>
      <div className={styles.main}>
        <img
          src={notFoundImage}
          className={styles.image}
          alt="Not Found Image"
        />
        <strong className={styles.notFoundText}>
          Essa página não existe. Volte para uma página existente
        </strong>
        <ButtonLarge title="voltar" variant="confirm" onClick={handleGoBack} />
      </div>
      <Footer />
    </div>
  );
}
