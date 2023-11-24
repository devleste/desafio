import { ReactNode } from "react";
import style from "./index.module.css"

type IProps = {
  children: ReactNode,
  href: string,
}

export default function MidiaLink(props:IProps){

  return (
    <a href={props.href} target="_blank" className={style.midiaLink}>
      {props.children}
    </a>
  )
}
