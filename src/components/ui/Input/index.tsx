import React from "react"
import { InputHTMLAttributes } from "react"
import style from "./index.module.css"
import ErrorMessage from "../../ErrorMessage"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlForName: string,
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({htmlForName, error, ...props}, ref){

    return(
      <div className={style.inputContainer}>
        <label htmlFor={htmlForName}>{htmlForName}</label>
        <input {...props} ref={ref} id={htmlForName} />
        {
          error && (<ErrorMessage message={error} />)
        }
      </div>
    )
  }
)
