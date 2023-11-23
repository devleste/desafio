import React from "react";
import { ButtonHTMLAttributes, ReactNode } from "react"
import style from "./index.module.css"



type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const TransparentButton = React.forwardRef<HTMLButtonElement, InputProps>(
  function TransparentButton({children, ...props}, ref){

    return(
      <button {...props} ref={ref} className={style.buttonStyle}>
        {children}
      </button>
    )
  }
)

export default TransparentButton
