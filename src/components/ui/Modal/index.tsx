import { ReactNode } from "react";
import style from "./index.module.css"
import { IoMdClose } from "react-icons/io";

type IProps = {
  isOpen: boolean,
  toogleModal: () => void,
  children: ReactNode
}

export default function Modal(props:IProps){

  return (
    <dialog open={props.isOpen} className={style.overlay}>
      <section className={style.modal}>
        <div className={style.closeContainer}>
          <button onClick={props.toogleModal}>
            <IoMdClose size={32} color={"#000000"} />
          </button>
        </div>
        <div>
          {
            props.children
          }
        </div>
      </section>
    </dialog>
  )
}
