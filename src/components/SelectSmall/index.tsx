import { SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface SelectSmall extends SelectHTMLAttributes<HTMLSelectElement> {}

export function SelectSmall({ ...props }: SelectSmall) {
  return <select className={styles.selectSmall} {...props}></select>;
}
