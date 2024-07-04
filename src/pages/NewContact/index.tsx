import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonLarge } from "../../components/ButtonLarge";
import { SelectMedium } from "../../components/SelectMedium";
import { Link, useNavigate } from "react-router-dom";
import { LANGUAGES } from "../../utils/languages";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../components/ErrorMessage";
import { InputLarge } from "../../components/InputLarge";
import { InputSmall } from "../../components/InputSmall";
import { useContacts } from "../../context/Contact";

const languagesValues = LANGUAGES.map((language) => language.language);

const NewContactSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "O nome deve conter no mínimo 3 caracteres." }),
  lastname: z
    .string()
    .min(3, { message: "O sobrenome deve conter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "O email é obrigatório." }),
  photo: z.string().url({ message: "A imagem deve ser uma url do navegador." }),
  birthday: z
    .string()
    .min(1, { message: "A data de aniversário é obrigatória." }),
  gender: z.enum(["Masculino", "Feminino"], {
    message: "O gênero é obrigatório.",
  }),
  language: z.enum(languagesValues as [string, ...string[]], {
    message: "O idioma é obrigatório",
  }),
});

type NewContactFormData = z.infer<typeof NewContactSchema>;

export function NewContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthday, setBirthday] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewContactFormData>({
    resolver: zodResolver(NewContactSchema),
  });
  const navigate = useNavigate();
  const { addContact } = useContacts();

  function handleSubmitAddNewContact(data: NewContactFormData) {
    const newContact = { id: String(Date.now()), ...data };
    addContact(newContact);
    navigate("/");
  }

  function handleCancelAddNewContact() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img
          src={logoImage}
          className={styles.image}
          alt="Logo Leste Telecom"
        />
      </Link>
      <h1 className={styles.title}>Adicionar um novo contato</h1>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(handleSubmitAddNewContact)}
      >
        <div className={styles.formFirstLine}>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Nome:</label>
            <InputLarge
              type="text"
              placeholder="John"
              value={firstName}
              {...register("firstname")}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {errors.firstname && (
              <ErrorMessage>{errors.firstname.message}</ErrorMessage>
            )}
          </div>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Sobrenome:</label>
            <InputLarge
              type="text"
              placeholder="Doe"
              value={lastName}
              {...register("lastname")}
              onChange={(event) => setLastName(event.target.value)}
            />
            {errors.lastname && (
              <ErrorMessage>{errors.lastname.message}</ErrorMessage>
            )}
          </div>
        </div>
        <div className={styles.formSecondLine}>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Email:</label>
            <InputLarge
              type="text"
              placeholder="johndoe@example.com"
              value={email}
              {...register("email")}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Foto:</label>
            <InputLarge
              type="text"
              placeholder="https://github.com/RayanneRamos.png"
              value={photo}
              {...register("photo")}
              onChange={(event) => setPhoto(event.target.value)}
            />
            {errors.photo && (
              <ErrorMessage>{errors.photo.message}</ErrorMessage>
            )}
          </div>
        </div>
        <div className={styles.formThirdLine}>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Aniversário:</label>
            <InputSmall
              type="date"
              placeholder="21/09/1997"
              value={birthday}
              {...register("birthday")}
              onChange={(event) => setBirthday(event.target.value)}
            />
            {errors.birthday && (
              <ErrorMessage>{errors.birthday.message}</ErrorMessage>
            )}
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Gênero:</label>
            <SelectMedium defaultValue="" {...register("gender")}>
              <option value="" disabled selected>
                Selecionar o gênero
              </option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </SelectMedium>
            {errors.gender && (
              <ErrorMessage>{errors.gender.message}</ErrorMessage>
            )}
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Idioma:</label>
            <SelectMedium defaultValue="" {...register("language")}>
              <option value="" disabled selected>
                Selecionar o idioma
              </option>
              {LANGUAGES.map((language) => {
                return (
                  <option id={language.id} value={language.language}>
                    {language.language}
                  </option>
                );
              })}
            </SelectMedium>
            {errors.language && (
              <ErrorMessage>{errors.language.message}</ErrorMessage>
            )}
          </div>
        </div>
        <div className={styles.buttonFormContainer}>
          <ButtonLarge type="submit" title="Adicionar" variant="confirm" />
          <ButtonLarge
            onClick={handleCancelAddNewContact}
            type="button"
            title="Cancelar"
            variant="cancel"
          />
        </div>
      </form>
      <Footer />
    </div>
  );
}
