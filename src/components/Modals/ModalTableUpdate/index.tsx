// React
import { useEffect, useState } from "react";

// Style
import style from "./index.module.css"

// Components
import Modal from "../../ui/Modal";
import SearchInput from "../../SearchInput";

// Zustand
import { useUpdate } from "../../../store/useUpdate";
import { useUpdateUser } from "../../../store/useUpdateUser";

// Icons
import { MdUpgrade } from "react-icons/md";

// Type
import storageType from "../../../type/storageType";

// Helpers
import { filterTableByInput } from "../../../helpers/filtering";

export default function ModalTableUpdate({data,}:{data:storageType[]}){
  const [show, setShow] = useUpdate((state) => [state.update, state.toggleUpdate])
  const [setUpdateUser, setId] = useUpdateUser((state) => [state.toggleUpdateUser, state.setId]);

  const [seachInpuValue, setSeachInpuValue] = useState<string>("");
  const [dataValues, setDataValues] = useState(data);
  function handleClick(id:number){
    setShow();
    setUpdateUser();
    setId(id)
  }


  useEffect(() => {

    setDataValues(filterTableByInput(data, seachInpuValue))

  }, [seachInpuValue, data])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Upgrade</h1>
      <SearchInput value={seachInpuValue} setValue={setSeachInpuValue} />
      <section className={style.listContainer}>
        <ul>
          { 
            dataValues ?
              dataValues.map((item) => (
                <li key={item.id}>
                  <div className={style.informations}>
                    <img src={item.avatar} alt="Avatar" />
                    <h4>{item.first_name} {item.last_name}</h4>
                  </div>
                  <button onClick={() => handleClick(item.id)}>
                    Update <MdUpgrade size={16} color="#ffffff" />
                  </button>
                </li>
              )):
            <p>Error</p>
          }
        </ul>
      </section>
    </Modal>
  )
}
