// Style
import style from "./index.module.css"

export default function ErrorMessage({message}: {message?: string}){

  return (
    <p className={style.errorMessage}>
      {message}
    </p>
  )
}
