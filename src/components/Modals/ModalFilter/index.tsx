// Style
import style from "./index.module.css";

// Components
import Modal from "../../ui/Modal"
import SelectOptions from "./SelectOptions";
import Button from "../../ui/Button";

// Zustand
import { useFilter } from "../../../store/useFilter";

// Type
import storageType from "../../../type/storageType";

// Helpers
import { getOptionsValue } from '../../../helpers/getValueForOptions';

export default function ModalFilter({data}:{data: storageType[]}){
  const [
    show, 
    setShow, 
    currentLanguage, 
    setCurrentLanguage,
    currentGender,
    setCurrentGender,
    currentFilterDate,
    setCurrentFilterDate,
  ] = useFilter((state) => [
    state.filter, 
    state.toggleFilter,
    state.languageFilter,
    state.setLanguageFilter,
    state.genderFilter,
    state.setGenderFilter,
    state.dateFilter,
    state.setDateFilter
  ]);

  const dateFilter = [
    "Age < 20",
    "20 <= Age && Age < 35",
    "35 <= Age && Age < 45",
    "Age >= 45"
  ]

  function handleClick(){

    setCurrentFilterDate("");
    setCurrentGender("");
    setCurrentLanguage("");
  }

  return (
    <Modal isOpen={show} toogleModal={setShow}>
      <h1 className={style.title}>Filter</h1>
      <section className={style.selectContainer}>
        <SelectOptions 
          htmlForName="language" 
          label="Language" 
          options={getOptionsValue("language", data)} 
          show={currentLanguage}
          setShow={setCurrentLanguage}
        />
        <SelectOptions 
          htmlForName="gender" 
          label="Gender" 
          options={getOptionsValue("gender", data)}
          show={currentGender}
          setShow={setCurrentGender}
        />
        <SelectOptions 
          htmlForName="birthday" 
          label="Birthday" 
          options={dateFilter}
          show={currentFilterDate}
          setShow={setCurrentFilterDate}
        />

        <div className={style.buttonContainer}>
          <Button onClick={handleClick}>
            To clean
          </Button>
        </div>
      </section>
    </Modal>
  )
}
