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
import { useFlashMessage } from "../../../store/useFlashMessage";

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

  const setMessage = useFlashMessage((state) => state.setMessage);

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
    setMessage("Filter successfully cleaned")
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  return (
    <Modal isOpen={show} toogleModal={setShow}>
      <h1 className={style.title}>Filtro</h1>
      <section className={style.selectContainer}>
        <SelectOptions 
          htmlForName="language" 
          label="Idioma" 
          options={getOptionsValue("language", data)} 
          show={currentLanguage}
          setShow={setCurrentLanguage}
        />
        <SelectOptions 
          htmlForName="gender" 
          label="Gênero" 
          options={getOptionsValue("gender", data)}
          show={currentGender}
          setShow={setCurrentGender}
        />
        <SelectOptions 
          htmlForName="birthday" 
          label="Data de nascimento" 
          options={dateFilter}
          show={currentFilterDate}
          setShow={setCurrentFilterDate}
        />

        <div className={style.buttonContainer}>
          <Button onClick={handleClick}>
            Limpar filtro
          </Button>
        </div>
      </section>
    </Modal>
  )
}
