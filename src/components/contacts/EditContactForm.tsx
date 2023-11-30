import Input from "../UI/Input";
import { IconBadge, IconCake, IconMail, IconWorld } from "@tabler/icons-react";
import { FieldValues, useForm } from "react-hook-form";
import { Contact } from "../../types/Contact";
import { contactService } from "../../services/contactService";
import dayjs from "dayjs";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getBase64 } from "../../utils";

interface EditContactFormProps {
  contact: Contact;
}

function EditContactForm({ contact }: EditContactFormProps) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  async function confirmEdit(data: FieldValues) {
    const blob = new Blob(data.avatar);
    const avatarData = await getBase64(blob);

    const edited: Contact = {
      id: contact.id,
      birthday: dayjs(data.birthday).format("YYYY-MM-DD"),
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      gender: data.gender,
      language: data.language,
      ...(blob.size > 0 && { avatar: avatarData as string }),
    };
    contactService.updateContact(edited);
    queryClient.refetchQueries("getContacts");
    return navigate("/contacts/");
  }

  return (
    <>
      <form
        className="w-full text-gray-800 flex flex-col items-center gap-2 md:items-start px-6"
        id="edit-contact-form"
        onSubmit={handleSubmit(confirmEdit)}
      >
        <div className="w-full flex items-center h-20 gap-6">
          <img
            src={contact.avatar}
            className="h-14 w-14 object-cover rounded-full ring-2 ring-primary"
          />
          <h1 className="text-lg md:text-xl font-bold text-primary">
            Editando contato:
            <br />
            {contact.first_name} {contact.last_name}
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
          label="Primeiro Nome"
          placeholder="Primeiro Nome"
          register={register("firstname", {
            value: contact.first_name,
          })}
          icon={IconBadge}
        />

        <Input
          required
          label="Último Nome"
          placeholder="Último Nome"
          register={register("lastname", {
            value: contact.last_name,
          })}
          icon={IconBadge}
        />
        <Input
          required
          label="E-mail"
          placeholder="E-mail"
          register={register("email", {
            value: contact.email,
          })}
          icon={IconMail}
        />
        <Input
          required
          label="Idioma"
          placeholder="Idioma"
          register={register("language", {
            value: contact.language,
          })}
          icon={IconWorld}
        />
        <Input
          required
          type="date"
          label="Data de Nascimento"
          register={register("birthday", {
            value: contact.birthday,
          })}
          icon={IconCake}
        />
        <div className="input-wrapper w-full">
          <label htmlFor="gender" className="block mb-0.5 text-sm">
            Gênero
          </label>
          <select
            defaultValue={contact.gender}
            id="gender"
            {...register("gender")}
            className="w-full py-1 bg-none ring-2 ring-primary-darker focus-visible:ring-primary rounded-sm text-sm"
          >
            <option
              value="default"
              disabled
              selected
              hidden
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
export default EditContactForm;
