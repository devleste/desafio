import { SelectHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";

interface SelectMediumProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const SelectMedium = forwardRef<HTMLSelectElement, SelectMediumProps>(
  ({ ...props }, ref) => {
    return (
      <select ref={ref} className={styles.selectMedium} {...props}></select>
    );
  }
);

SelectMedium.displayName = "SelectMedium";

export { SelectMedium };
