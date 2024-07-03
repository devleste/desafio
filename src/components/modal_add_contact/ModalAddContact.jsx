import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import validateEmail from "../../scripts/validateEmail"
import validateUrl from "../../scripts/validateUrl";
import languages from "../../scripts/languages";
import { enableScroll } from "../../scripts/enableDisableScroll";
import { disableScroll } from "../../scripts/enableDisableScroll";
import { IoCloseOutline } from "react-icons/io5";
import DateSelect from "../date_select/DateSelect";
import styles from "./ModalAddContact.module.css";

const ModalAddContact = ({ visible, setVisible, addContact }) => {
  const [firstName, setFirstName] = useState({
    label: "Nome",
    errorLabel: "Nome*",
    value: "",
    valid: true
  });
  const [lastName, setLastName] = useState({
    label: "Sobrenome",
    errorLabel: "Sobrenome*",
    value: "",
    valid: true
  });
  const [avatar, setAvatar] = useState({
    label: "URL do avatar",
    errorLabel: "Avatar - url inválida*",
    value: "",
    valid: true
  });
  const [email, setEmail] = useState({
    label: "Email",
    errorLabel: "Email - email inválido*",
    value: "",
    valid: true
  });
  const [gender, setGender] = useState({
    label: "Gênero",
    errorLabel: "Gênero*",
    value: "",
    valid: true
  });
  const [language, setLanguage] = useState({
    label: "Idioma",
    errorLabel: "Idioma*",
    value: languages[0].name,
    valid: true,
  });
  const [birthDay, setBirthday] = useState({
    label: "Data de nascimento",
    errorLabel: "Data de nascimento - data inválida*",
    value: new Date(),
    valid: true,
  });

  const resetForm = () => {
    setFirstName(prevState => ({ ...prevState, value: "", valid: true }));
    setLastName(prevState => ({ ...prevState, value: "", valid: true }));
    setEmail(prevState => ({ ...prevState, value: "", valid: true }));
    setGender(prevState => ({ ...prevState, value: "", valid: true }));
    setLanguage(prevState => ({ ...prevState, value: languages[0].name, valid: true }));
    setBirthday(prevState => ({ ...prevState, value: new Date(), valid: true }));
    const genderInputs = document.querySelectorAll("#addContact input[name='gender']");
    genderInputs.forEach((curElm) => curElm.checked = false);
  }

  const submitForm = (e) => {
    e.preventDefault();
    let valid = true;

    // Valida nome 
    const validFirstName = firstName.value !== "";
    if (!validFirstName) valid = false;
    setFirstName(prevState => ({ ...prevState, valid: validFirstName }));

    // Valida sobrenome
    const validLastName = lastName.value !== "";
    if (!validLastName) valid = false;
    setLastName(prevState => ({ ...prevState, valid: validLastName }));

    // Valida email
    const validEmail = validateEmail(email.value);
    if (!validEmail) valid = false;
    setEmail(prevState => ({ ...prevState, valid: validEmail }));

    // Valida url do avatar
    const validAvatar = validateUrl(avatar.value);
    if (!validAvatar) valid = false;
    setAvatar(prevState => ({ ...prevState, valid: validAvatar }));

    // Valida gênero
    const validGender = gender.value === "F" || gender.value === "M";
    if (!validGender) valid = false;
    setGender(prevState => ({ ...prevState, valid: validGender }));

    // Valida idioma
    const validLanguage = language.value !== "";
    if (!validLanguage) valid = false;
    setLanguage(prevState => ({ ...prevState, valid: validLanguage }));

    // Valida data de aniversário
    const validBirthDay =
      birthDay.value.getFullYear() <= 2008 &&
      birthDay.value.getFullYear() >= 1940
    if (!validBirthDay) valid = false;
    setBirthday(prevState => ({ ...prevState, valid: validBirthDay }));


    if (valid) {
      addContact({
        id: uuidv4(),
        avatar: avatar.value.trim() === "" ? "img/avatar.jpg" : avatar.value,
        first_name: firstName.value.trim(),
        last_name: lastName.value.trim(),
        email: email.value,
        gender: gender.value,
        language: language.value,
        birthday: birthDay.value.toISOString().substring(0, 10)
      });
      resetForm();
    }
  }

  useEffect(() => {
    if (visible) {
      return disableScroll();
    }
    enableScroll();
  }, [visible]);

  return (
    <div className={`${styles.modal} ${visible ? styles.visible : ""}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5>Adicionar contato</h5>
          <button type="button" className={styles.close} onClick={() => { setVisible(false); resetForm() }}>
            <IoCloseOutline />
          </button>
        </div>
        <div className={styles.body}>
          <form id="addContact" action="" method="post" autoComplete="off" role="presentation">
            <div className={styles.name}>
              <div className={styles.first_name}>
                <label
                  className={firstName.valid ? "" : styles.error}
                  htmlFor="firstName">{firstName.valid ? firstName.label : firstName.errorLabel}
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Nome do contato"
                  value={firstName.value}
                  onChange={(e) => setFirstName({ ...firstName, value: e.currentTarget.value })}
                  required
                />
              </div>
              <div className={styles.last_name}>
                <label
                  className={lastName.valid ? "" : styles.error}
                  htmlFor="lastName">{lastName.valid ? lastName.label : lastName.errorLabel}
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Sobrenome do contato"
                  value={lastName.value}
                  onChange={(e) => setLastName({ ...lastName, value: e.currentTarget.value })}
                  required
                />
              </div>
            </div>
            <div className={styles.avatar}>
              <label
                className={avatar.valid ? "" : styles.error}
                htmlFor="avatar">{avatar.valid ? avatar.label : avatar.errorLabel}
              </label>
              <input
                type="url"
                name="avatar"
                id="avatar"
                placeholder="URL do avatar"
                value={avatar.value}
                onChange={(e) => setAvatar({ ...avatar, value: e.currentTarget.value })}
                required />
            </div>
            <div className={styles.email}>
              <label
                className={email.valid ? "" : styles.error}
                htmlFor="email">{email.valid ? email.label : email.errorLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email do contato"
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.currentTarget.value })}
                required />
            </div>
            <div className={styles.gender}>
              <p className={gender.valid ? "" : styles.error}>
                {gender.valid ? gender.label : gender.errorLabel}
              </p>
              <div className={styles.fem}>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="F"
                  onChange={() => setGender({ ...gender, value: "F" })}
                  required
                />
                <label htmlFor="female">Feminino</label>
              </div>
              <div className={styles.masc}>
                <input
                  type="radio"
                  name="gender"
                  id="masculine"
                  value="M"
                  onChange={() => setGender({ ...gender, value: "M" })}
                  required
                />
                <label htmlFor="masculine">Masculino</label>
              </div>
            </div>
            <div className={styles.languages}>
              <label
                className={language.valid ? "" : styles.error}
                htmlFor="languages">
                {language.valid ? language.label : language.errorLabel}
              </label>
              <select
                name="languages"
                id="languages"
                onChange={(e) => setLanguage({ ...language, value: e.currentTarget.value })}
              >
                {languages.map((curElm) => {
                  return (
                    <option key={curElm.code} value={curElm.name}>
                      {curElm.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className={styles.birthday}>
              <p className={birthDay.valid ? "" : styles.error}>
                {birthDay.valid ? birthDay.label : birthDay.errorLabel}
              </p>
              <DateSelect
                date={birthDay}
                setDate={setBirthday}
              />
            </div>
            <button className={styles.submit} type="submit" onClick={(e) => submitForm(e)}>
              Criar contato
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalAddContact;