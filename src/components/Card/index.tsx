import { ReactNode } from "react"
import style from "./index.module.css"

export default function Card({title, paragraph, icon}:{title:string, paragraph: string, icon: ReactNode}){

  return (
    <article className={style.cardContainer}>
      <div>
        {icon}
      </div>
      <h3>
        {title}
      </h3>
      <p>
        {paragraph}
      </p>
    </article>
  )
}
