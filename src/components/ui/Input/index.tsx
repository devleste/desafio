import React from "react"
import { InputHTMLAttributes } from "react"
import style from "./index.module.css"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlForName: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({htmlForName, ...props}){

    return(
      <div className={style.inputContainer}>
        <label htmlFor="">{htmlForName}</label>
        <input {...props} />
      </div>
    )
  }
)
