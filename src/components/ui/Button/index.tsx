import React from "react";
import { ButtonHTMLAttributes, ReactNode } from "react"
import style from "./index.module.css"



type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, InputProps>(
  function Button({children, ...props}, ref){

    return(
        <button {...props} ref={ref} className={style.buttonBase}>
          {children}
        </button>
    )
  }
)

export default Button
