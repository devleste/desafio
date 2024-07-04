import styles from "./styles.module.scss";
import editSVG from "../../assets/edit.svg";
import deleteSVG from "../../assets/delete.svg";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ListContactProps } from "../../pages/ListContacts";
import { useContacts } from "../../context/Contact";
import { useNavigate } from "react-router-dom";

interface CardContactProps {
  data: ListContactProps;
}

export function CardContact({ data }: CardContactProps) {
  const { deleteContact } = useContacts();
  const navigate = useNavigate();

  function handleEditContact() {
    navigate(`/editform/${data.id}`);
  }

  return (
    <div className={styles.cardContainer}>
      <img src={data.photo} alt={data.firstname} className={styles.imageCard} />
      <strong className={styles.cardName}>
        {data.firstname} {data.lastname}
      </strong>
      <span className={styles.cardEmail}>{data.email}</span>
      <span className={styles.cardBirthday}>{data.birthday}</span>
      <span className={styles.cardGender}>{data.gender}</span>
      <span className={styles.cardLanguage}>{data.language}</span>
      <div className={styles.buttonCardContainer}>
        <ButtonSmall type="button" variant="edit">
          <img
            src={editSVG}
            alt="edit icon"
            className={styles.imageButton}
            onClick={handleEditContact}
          />
          Editar
        </ButtonSmall>
        <ButtonSmall
          type="button"
          variant="cancel"
          onClick={() => deleteContact(data.id)}
        >
          <img
            src={deleteSVG}
            alt="delete icon"
            className={styles.imageButton}
          />
          Remover
        </ButtonSmall>
      </div>
    </div>
  );
}
