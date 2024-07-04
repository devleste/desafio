import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "edit" | "cancel";
}

export function ButtonSmall({ variant, ...props }: ButtonSmallProps) {
  function getButtonClass() {
    switch (variant) {
      case "edit":
        return styles.editButton;
      case "cancel":
        return styles.cancelButton;
    }
  }

  return <button className={getButtonClass()} {...props}></button>;
}
