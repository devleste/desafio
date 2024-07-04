import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export const InputSmall = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, ...rest }, ref) => {
    return (
      <input
        className={styles.inputSmall}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    );
  }
);
