import styles from "./styles.module.scss";
import emptyImage from "../../assets/empty.png";

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={emptyImage} alt="Empty Image" className={styles.image} />
      <strong className={styles.emptyText}>Nenhum contato encontrado</strong>
    </div>
  );
}
