import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ErrorMessageProps {
  children: ReactNode;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className={styles.container}>
      <span className={styles.error}>{children}</span>
    </div>
  );
}
