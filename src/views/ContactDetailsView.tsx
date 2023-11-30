import { useNavigate, useParams } from "react-router-dom";
import ContactDetails from "../components/contacts/ContactDetails";
import { useContactStore } from "../store/contactStore";

function ContactDetailsView() {
  const params = useParams();
  const data = useContactStore((state) =>
    state.contacts.filter((c) => c.id == params.contactid)
  )[0];
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-3 py-4 px-6">
        <ContactDetails contact={data} />
      </div>
      <div className="h-12 flex items-center justify-end px-4">
        <button
          className="bg-primary text-sm text-white font-bold py-1 px-2 rounded-md"
          onClick={() => {
            navigate(`/contacts/${data!.id}/edit/`, { replace: true });
          }}
        >
          Editar Contato
        </button>
      </div>
    </>
  );
}
export default ContactDetailsView;
