import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { InputLarge } from "../../components/InputLarge";
import { InputSmall } from "../../components/InputSmall";
import { SelectMedium } from "../../components/SelectMedium";
import { LANGUAGES } from "../../utils/languages";
import { ButtonLarge } from "../../components/ButtonLarge";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useContacts } from "../../context/Contact";
import { Contact } from "../../types/types";

const languagesValues = LANGUAGES.map((language) => language.language);

const EditFormSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "O nome deve conter no mínimo 3 caracteres" }),
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
    message: "O idioma é obrigatório.",
  }),
});

type EditFormData = z.infer<typeof EditFormSchema>;

export function EditForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthday, setBirthday] = useState("");

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { contacts, updateContact } = useContacts();
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    navigate("/");
    return null;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<EditFormData>({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      photo: contact.photo,
      birthday: contact.birthday,
      gender: contact.gender,
      language: contact.language,
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setFirstName(contact.firstname || "");
    setLastName(contact.lastname || "");
    setEmail(contact.email || "");
    setPhoto(contact.photo || "");
    setBirthday(contact.birthday || "");
  }, [contact]);

  function handleSaveEditContact(data: EditFormData) {
    const updatedContact: Contact = {
      ...contact,
      ...data,
      id: contact?.id !== undefined ? contact.id : "",
    };

    updateContact(updatedContact);

    navigate("/listcontact");
  }

  function handleCancelEditContact() {
    navigate("/listcontact");
  }

  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img
          src={logoImage}
          alt="Logo Leste Telecom"
          className={styles.image}
        />
      </Link>
      <h1 className={styles.title}>Editar o contato</h1>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(handleSaveEditContact)}
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
            <SelectMedium defaultValue="">
              <option value="" disabled defaultChecked>
                Selecionar o gênero
              </option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </SelectMedium>
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Idioma:</label>
            <SelectMedium defaultValue="">
              <option value="" disabled defaultChecked>
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
          </div>
        </div>
        <div className={styles.buttonFormContainer}>
          <ButtonLarge type="submit" title="Salvar" variant="confirm" />
          <ButtonLarge
            onClick={handleCancelEditContact}
            type="button"
            title="Cancelar"
            variant="cancel"
          />
        </div>
      </form>
    </div>
  );
}
