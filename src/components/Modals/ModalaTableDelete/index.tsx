// React
import { useEffect, useState } from "react";

// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal"
import SearchInput from "../../SearchInput"

// Zustand
import { useDelete } from "../../../store/useDelete";
import { useFlashMessage } from "../../../store/useFlashMessage";

// Icons
import { MdDelete } from "react-icons/md";

// Type
import storageType from "../../../type/storageType";

// Storage
import { HandleSave } from "../../../services/storage";

// Helpers
import { filterTableByInput } from "../../../helpers/filtering";

type IProps = {
  data: storageType[],
  updateTable: (data:storageType[]) => void
}

export default function ModalTableDelete({data, updateTable}:IProps){
  const [show, setShow] = useDelete((state) => [state.delete, state.toggleDelete]);
  const setMessage = useFlashMessage((state) => state.setMessage);

  const [seachInpuValue, setSeachInpuValue] = useState<string>("");
  const [dataValues, setDataValues] = useState(data);

  function handleClick(id: number){
    const dataValues = data;

    const newDataValues = dataValues.filter((item) => item.id !== id)
    HandleSave(newDataValues);
    updateTable(newDataValues);
    setMessage("Contact deleted successfully")
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  useEffect(() => {

    setDataValues(filterTableByInput(data, seachInpuValue))
  
  }, [seachInpuValue, data])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Deletar usuario</h1>
      <SearchInput value={seachInpuValue} setValue={setSeachInpuValue} />
      <section className={style.listContainer}>
        <ul>
          {
            dataValues ?
              dataValues.map((item) => (
                <li key={item.id}>
                  <div className={style.informations}>
                    <img src={item.avatar} alt="Avatar" />
                    <h4>{item.first_name} {item.first_name}</h4>
                  </div>
                  <button onClick={() => handleClick(item.id)}>
                    Deletar <MdDelete size={16} color="#ffffff" />
                  </button>
                </li>
              )) :
              <p>
                Error
              </p>
          }
        </ul>
      </section>
    </Modal>
  )
}
