import { ReactNode } from "react"
import style from "./index.module.css"

export default function Button({children}:{children:ReactNode}){

  return (
    <button className={style.buttonBase}>
      {
        children
      }
    </button>
  )
}
