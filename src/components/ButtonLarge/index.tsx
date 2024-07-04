import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "confirm" | "cancel" | "edit";
  title: string;
}

export function ButtonLarge({ variant, title, ...props }: ButtonProps) {
  function getButtonClass() {
    switch (variant) {
      case "confirm":
        return styles.buttonConfirm;
      case "cancel":
        return styles.buttonCancel;
      case "edit":
        return styles.buttonEdit;
      default:
        return "";
    }
  }

  return (
    <button className={getButtonClass()} {...props}>
      {title}
    </button>
  );
}
