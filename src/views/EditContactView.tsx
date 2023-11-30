import { useNavigate, useParams } from "react-router-dom";
import EditContactForm from "../components/contacts/EditContactForm";
import { useContactStore } from "../store/contactStore";

function EditContactView() {
  const params = useParams();
  const data = useContactStore().find(params.contactid ?? "");

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-3 py-4 px-2 resize">
        <EditContactForm contact={data} />
      </div>
      <div className="flex flex-row justify-center md:justify-end items-center p-4 gap-3">
        <input
          type="submit"
          form="edit-contact-form"
          className="py-1 px-3 mt-5 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark text-sm"
          value={"Salvar"}
        ></input>
        <button
          className="py-1 px-3 mt-5 bg-gray-600 font-semibold rounded-md hover:bg-red-500 text-white text-sm"
          onClick={() => {
            navigate(`/contacts/`, { replace: true });
          }}
        >
          Cancelar
        </button>
      </div>
    </>
  );
}
export default EditContactView;
