// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal"
import SelectOptions from "./SelectOptions";

// Zustand
import { useFilter } from "../../../store/useFilter";

// Type
import storageType from "../../../type/storageType";

export default function ModalFilter({data}:{data: storageType[]}){
  const [show, setShow] = useFilter((state) => [state.filter, state.toggleFilter]);

  console.log(data);

  function filterRepeatedOptions(data: (string|number)[]){
    const uniqueOptions = new Set(data);
    return [...uniqueOptions];
  }

  function getOptionsValue(key: keyof storageType):(string|number)[]{
    const optionsValue = data.map((item) => item[key])
    return filterRepeatedOptions(optionsValue);
  }

  console.log(getOptionsValue("gender"));

  return (
    <Modal isOpen={show} toogleModal={setShow}>
      <h1 className={style.title}>Filter</h1>
      <section className={style.selectContainer}>
        <SelectOptions htmlForName="language" label="Language" options={getOptionsValue("language")} />
        <SelectOptions htmlForName="gender" label="Gender" options={getOptionsValue("gender")} />
        <SelectOptions htmlForName="birthday" label="Birthday" options={getOptionsValue("birthday")} />
      </section>
    </Modal>
  )
}
