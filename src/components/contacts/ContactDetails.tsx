import dayjs from "dayjs";
import { Contact } from "../../types/Contact";
const gender = {
  M: "Masculino",
  F: "Feminino",
};

interface ContactDetailsProps {
  contact: Contact;
}
function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <>
      <div className="w-1/3 shrink-0 flex items-center justify-center">
        <img
          src={contact.avatar}
          className=" rounded-full border-primary border-4 h-40 w-40 object-cover"
          alt={`Avatar do contato ${contact.first_name}`}
        />
      </div>
      <div className="w-full text-gray-800 flex flex-col items-center md:items-start">
        <h1 className="text-2xl font-bold mb-3 text-primary">
          {contact.first_name} {contact.last_name}
        </h1>
        <h3 className="text-md">
          <strong>Email: </strong>
          {contact.email}
        </h3>
        <h3 className="text-md">
          <strong>Gênero: </strong>
          {contact.gender == "M" ? gender.M : gender.F}
        </h3>
        <h3 className="text-md">
          <strong>Idioma: </strong>
          {contact.language}
        </h3>
        <h3 className="text-md">
          <strong>Data de Nascimento: </strong>
          {dayjs(contact.birthday).format("DD/MM/YYYY")}
        </h3>
      </div>
    </>
  );
}
export default ContactDetails;
