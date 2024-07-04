import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { ButtonLarge } from "../../components/ButtonLarge";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function Home() {
  const navigation = useNavigate();

  function goListContact() {
    navigation("/listcontact");
  }

  function goAddNewContact() {
    navigation("/addnewcontact");
  }

  return (
    <div className={styles.container}>
      <Header />
      <img src={logoImage} className={styles.image} alt="logo" />
      <div className={styles.buttonContainer}>
        <ButtonLarge
          onClick={goListContact}
          title="Listar os contatos"
          variant="confirm"
        />
        <ButtonLarge
          onClick={goAddNewContact}
          title="Adicionar um novo contato"
          variant="confirm"
        />
      </div>
      <Footer />
    </div>
  );
}
