import { IconBadge, IconCake, IconMail } from "@tabler/icons-react";
import dayjs from "dayjs";
import { random } from "lodash";
import { FieldValues, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { contactService } from "../../services/contactService";
import { Contact } from "../../types/Contact";
import Input from "../UI/Input";
import { IconWorld } from "@tabler/icons-react";
import { getBase64 } from "../../utils";

function NewContactForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function confirmEdit(data: FieldValues) {
    const avatarData = await getBase64(new Blob(data.avatar));
    const contact: Contact = {
      id: `${random(21, 9999)}`,
      avatar: avatarData as string,
      birthday: dayjs(data.birthday).format("YYYY-MM-DD"),
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      gender: data.gender,
      language: data.language,
    };
    contactService.saveContact(contact);
    queryClient.refetchQueries("getContacts");
    return navigate("/contacts/");
  }

  return (
    <>
      <form
        className="w-full text-gray-800 flex flex-col items-center gap-2 md:items-start px-6"
        id="new-contact-form"
        onSubmit={handleSubmit(confirmEdit)}
      >
        <div className="w-full flex items-center h-10 gap-6">
          <h1 className="text-lg md:text-xl font-bold text-primary">
            Novo Contato
          </h1>
        </div>
        <div className="w-full flex flex-col items-start">
          <label htmlFor="avatar_input" className="block mb-0.5 text-sm">
            Imagem de perfil
          </label>
          <input
            className="block w-full text-sm rounded-sm text-black ring-2 ring-primary-darker focus-visible:ring-primary cursor-pointer focus:outline-none"
            id="avatar_input"
            type="file"
            {...register("avatar")}
          ></input>
        </div>
        <Input
          required
          placeholder="Primeiro Nome"
          label="Primeiro Nome"
          register={register("firstname")}
          icon={IconBadge}
        />

        <Input
          required
          placeholder="Último Nome"
          label="Último Nome"
          register={register("lastname")}
          icon={IconBadge}
        />
        <Input
          required
          placeholder="E-mail"
          label="E-mail"
          icon={IconMail}
          register={register("email")}
        />
        <Input
          required
          label="Idioma"
          placeholder="Idioma"
          register={register("language")}
          icon={IconWorld}
        />
        <Input
          required
          type="date"
          placeholder="Data de Nascimento"
          label="Data de Nascimento"
          register={register("birthday")}
          icon={IconCake}
        />
        <div className="input-wrapper w-full">
          <label htmlFor="gender" className="block mb-0.5 text-sm">
            Gênero
          </label>
          <select
            {...register("gender")}
            defaultValue={"default"}
            id="gender"
            className="w-full py-1 bg-none ring-2 ring-primary-darker focus-visible:ring-primary rounded-sm text-sm"
          >
            <option
              value="default"
              disabled
              hidden
              selected
              className="text-sm"
            >
              Selecione uma opção
            </option>
            <option value="M" className="text-sm">
              Masculino
            </option>
            <option value="F" className="text-sm">
              Feminino
            </option>
          </select>
        </div>
      </form>
    </>
  );
}
export default NewContactForm;
