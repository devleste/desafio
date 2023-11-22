// React
import { useEffect, useState } from "react";

// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal"
import SearchInput from "../../SearchInput"

// Zustand
import { useDelete } from "../../../store/useDelete";

// Icons
import { MdDelete } from "react-icons/md";

// Type
import storageType from "../../../type/storageType";
import { HandleSave } from "../../../services/storage";

type IProps = {
  data: storageType[],
  updateTable: (data:storageType[]) => void
}

export default function ModalTableDelete({data, updateTable}:IProps){
  const [show, setShow] = useDelete((state) => [state.delete, state.toggleDelete]);

  const [seachInpuValue, setSeachInpuValue] = useState<string>("");
  const [dataValues, setDataValues] = useState(data);

  function handleClick(id: number){
    const dataValues = data;

    const newDataValues = dataValues.filter((item) => item.id !== id)
    HandleSave(newDataValues);
    updateTable(newDataValues);
  }

  useEffect(() => {

    function filterTable(){
      setDataValues(data.filter(item => (item.first_name).includes(seachInpuValue)))

      if(seachInpuValue === ""){
        setDataValues(data);
      }

    }

    filterTable();

  }, [seachInpuValue, data])

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Delete</h1>
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
                    Delete <MdDelete size={16} color="#ffffff" />
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
