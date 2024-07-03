import { useRef, useState } from "react";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import MultiRangeSlider from "multi-range-slider-react";
import enumMonths from "../../scripts/enumMonths"
import languages from "../../scripts/languages";
import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./Filter.module.css";

const Filter = ({ visible, setFilterVisible, filter, setFilter }) => {
  // Oculta filtro quando o usuário clica fora
  const filterRef = useRef(null);
  useOutsideClick(filterRef, setFilterVisible);

  const selectLanguageRef = useRef(null);
  const selectMonthRef = useRef(null);
  const [minValue, set_minValue] = useState(filter.default.age.min);
  const [maxValue, set_maxValue] = useState(filter.default.age.max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleFilter = (type, data = null) => {
    switch (type) {
      case "masculine":
        setFilter(prevState => ({ ...prevState, masculine: !prevState.masculine }));
        break;
      case "feminine":
        setFilter(prevState => ({ ...prevState, feminine: !prevState.feminine }));
        break;
      case "addLanguage":
        const languageAlreadyExists = filter.language.filter(x => x === data) === undefined;
        if (!languageAlreadyExists) {
          setFilter(prevState => ({ ...prevState, language: prevState.language.concat([data]) }));
        }
        break;
      case "removeLanguage":
        setFilter(prevState => ({ ...prevState, language: prevState.language.filter(x => x !== data) }));
        break;
      case "age":
        setFilter(prevState => ({ ...prevState, age: { min: minValue, max: maxValue } }));
        break;
      case "addBirthMonth":
        const monthNumber = parseInt(data)
        const monthAlreadyExists = filter.birthMonth.filter(x => x === monthNumber).length > 0;
        if (!monthAlreadyExists) {
          setFilter(prevState => ({ ...prevState, birthMonth: prevState.birthMonth.concat([monthNumber]) }));
        }
        break;
      case "removeBirthMonth":
        setFilter(prevState => ({ ...prevState, birthMonth: prevState.birthMonth.filter(x => x !== data) }));
        break;
      case "clearFilter":
        const defaultFilter = {
          active: filter.default.active,
          masculine: filter.default.masculine,
          feminine: filter.default.feminine,
          language: filter.default.language,
          age: filter.default.age,
          birthMonth: filter.default.birthMonth,
        }
        selectLanguageRef.current.selectedIndex = 0;
        selectMonthRef.current.selectedIndex = 0;
        set_minValue(filter.default.age.min);
        set_maxValue(filter.default.age.max);
        setFilter(prevState => ({ ...prevState, ...defaultFilter }));
        break;
      default: break;
    }

    if (type !== "clearFilter") {
      setFilter(prevState => ({ ...prevState, active: true }));
    }
  }


  return (
    <div ref={filterRef} className={`${styles.filter} ${visible ? styles.visible : ""}`}>
      <div className={styles.header}>
        <h5>Filtrar contatos</h5>
      </div>
      <div className={styles.content}>
        <div className={styles.by_gender}>
          <h6>por gênero</h6>
          <div className={styles.options}>
            <input
              type="checkbox"
              name="filterGender"
              id="filterMasc"
              onChange={() => handleFilter("masculine")}
              checked={filter.masculine}
            />
            <label htmlFor="filterMasc">Masculino</label><br />
            <input
              type="checkbox"
              name="filterGender"
              id="filterFem"
              checked={filter.feminine}
              onChange={() => handleFilter("feminine")}
            />
            <label htmlFor="filterFem">Feminino</label>
          </div>
        </div>
        <div className={styles.by_language}>
          <h6>por idioma</h6>
          <select
            ref={selectLanguageRef}
            name="filterLanguages"
            id="filterLanguages"
            onChange={(e) => handleFilter("addLanguage", e.currentTarget.value)}
            defaultValue=""
          >
            <option value="" disabled>selecione um idioma</option>
            {languages.map((curElm) => {
              return (
                <option key={curElm.code} value={curElm.name}>
                  {curElm.name}
                </option>
              )
            })}
          </select>
          {(filter.active && filter.language.length > 0) && (
            <>
              <p>idiomas filtrados:</p>
              <div className={styles.filtered_languages}>
                {filter.language.map((curElm) => {
                  return (
                    <div className={styles.language} key={curElm}>
                      <p>{curElm}</p>
                      <button type="button" onClick={() => handleFilter("removeLanguage", curElm)}>
                        <IoCloseOutline className={styles.icon} />
                      </button>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
        <div className={styles.by_age}>
          <h6>por idade - de {minValue} a {maxValue} anos</h6>
          <div className={styles.range_input}
            onMouseUp={() => handleFilter("age")}
            onTouchEnd={() => handleFilter("age")}
          >
            <MultiRangeSlider
              min={0}
              max={100}
              step={5}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => handleInput(e)}
              label={false}
              ruler={false}
              baseClassName={`multi-range-slider`}
            />
          </div>
        </div>
        <div className={styles.by_birthmonth}>
          <h6>por mês de nascimento</h6>
          <select
            ref={selectMonthRef}
            name="filterBirthMonth"
            id="filterBirthMonth"
            onChange={(e) => handleFilter("addBirthMonth", e.currentTarget.value)}
            defaultValue=""
          >
            <option value="" disabled>escolha um mês</option>
            <option value={enumMonths["Janeiro"]}>Janeiro</option>
            <option value={enumMonths["Fevereiro"]}>Fevereiro</option>
            <option value={enumMonths["Março"]}>Março</option>
            <option value={enumMonths["Abril"]}>Abril</option>
            <option value={enumMonths["Maio"]}>Maio</option>
            <option value={enumMonths["Junho"]}>Junho</option>
            <option value={enumMonths["Julho"]}>Julho</option>
            <option value={enumMonths["Agosto"]}>Agosto</option>
            <option value={enumMonths["Setembro"]}>Setembro</option>
            <option value={enumMonths["Outubro"]}>Outubro</option>
            <option value={enumMonths["Novembro"]}>Novembro</option>
            <option value={enumMonths["Dezembro"]}>Dezembro</option>
          </select>
          {(filter.active && filter.birthMonth.length > 0) && (
            <>
              <p>meses filtrados:</p>
              <div className={styles.filtered_months}>
                {filter.birthMonth.map((curElm) => {
                  return (
                    <div className={styles.month} key={curElm}>
                      <p>{enumMonths[curElm]}</p>
                      <button type="button" onClick={() => handleFilter("removeBirthMonth", curElm)}>
                        <IoCloseOutline className={styles.icon} />
                      </button>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.clear} onClick={() => handleFilter("clearFilter")}>
          <FaFilterCircleXmark className={styles.icon} title="Limpar filtros" />
        </button>
      </div>
    </div>
  );
}

export default Filter;