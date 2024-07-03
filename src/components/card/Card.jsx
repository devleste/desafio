import { useRef, useState } from "react";
import { FaBirthdayCake, FaUserEdit, FaUserSlash } from "react-icons/fa";
import { IoFemale, IoLanguage, IoMale } from "react-icons/io5";
import { HiDotsVertical, HiMail } from "react-icons/hi";
import setParam from "../../scripts/setParam";
import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./Card.module.css";

const Card = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  language,
  avatar,
  birthday,
  setEditContactVisible,
  removeContact
}) => {
  const [contextVisible, setContextVisible] = useState(false);

  // Oculta menu de contexto quando o usuário clica fora
  const contextRef = useRef(null);
  useOutsideClick(contextRef, setContextVisible);

  const handleBirthDay = (date) => {
    const regex = (/\b(\d{4}-\d{2}-\d{2})/g); // matches yyyy-mm-dd date format
    if (regex.test(date)) {
      date = date.split("-");
      const day = date[2];
      const month = date[1];
      const year = date[0];
      return `${day}/${month}/${year}`;
    }
    return date;
  }

  const editContact = (id) => {
    setContextVisible(false);
    setEditContactVisible(true);
    setParam("edit", id);
  }

  return (
    <>
      <div className={styles.card} id={id}>
        <div ref={contextRef} className={styles.context}>
          <button type="button" onClick={() => setContextVisible(prev => !prev)}>
            <HiDotsVertical className={styles.icon} />
          </button>
          <div className={`${styles.container} ${contextVisible ? styles.visible : ""}`}>
            <button type="button" onClick={() => editContact(id)}>
              <FaUserEdit className={styles.icon} />
              Editar contato
            </button>
            <button type="button" className={styles.remove} onClick={() => removeContact(id)}>
              <FaUserSlash className={styles.icon} />
              Excluir contato
            </button>
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} alt={`Avatar de perfil de ${firstName} ${lastName}`} />
        </div>
        <div className={styles.gender}>
          {gender === "F" ? <IoFemale className={styles.icon_female} title="Gênero feminino" /> : ""}
          {gender === "M" ? <IoMale className={styles.icon_male} title="Gênero masculino" /> : ""}
        </div>
        <div className={styles.name}>
          <h6>{`${firstName} ${lastName}`}</h6>
        </div>
        <div className={styles.email}>
          <HiMail className={styles.icon} title="Email" />
          <p>{email}</p>
        </div>
        <div className={styles.language}>
          <IoLanguage className={styles.icon} title="Idioma" />
          <p>{language}</p>
        </div>
        <div className={styles.birthday}>
          <FaBirthdayCake className={styles.icon} title="Data de nascimento" />
          <p>{handleBirthDay(birthday)}</p>
        </div>
      </div>
    </>
  );
}

export default Card;