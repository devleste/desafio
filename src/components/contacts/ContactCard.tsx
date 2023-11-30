import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import DeleteContactModal from "../modals/DeleteContactModal";
import { useNavigate } from "react-router-dom";
import { Contact } from "../../types/Contact";
import { useQueryClient } from "react-query";
interface ContactCardProps {
  contact: Contact;
}

function ContactCard({ contact }: ContactCardProps) {
  const [showDeletion, setShowDeletion] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handleCardClick() {
    return navigate(`/contacts/${contact.id}`);
  }

  return (
    <>
      <div
        className="group h-24 w-full flex items-center justify-between px-4 hover:cursor-pointer hover:bg-slate-100 rounded-md"
        onClick={handleCardClick}
      >
        <div className="flex items-center gap-6">
          <div
            className="rounded-full w-12 h-12 md:h-16 md:w-16 overflow-hidden flex-shrink-0 bg-black/20
        group-hover:ring-primary-dark group-hover:ring-2"
          >
            <img
              src={contact.avatar}
              alt="user avatar"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="group-hover:text-primary-dark flex-shrink-0 text-sm transition-all md:text-md font-bold">{`${contact.first_name} ${contact.last_name}`}</span>
            <span className="flex-shrink-0 text-xs transition-all md:text-sm text-gray-600">
              {contact.email}
            </span>
          </div>
        </div>
        <div className="hidden group-hover:flex w-14 justify-between text-gray-800 mr-3">
          <button
            className="p-1.5 hover:text-primary-dark hover:bg-gray-200 rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/contacts/${contact.id}/edit/`);
            }}
          >
            <IconEdit className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            className="p-1.5 hover:text-red-500 hover:bg-gray-200 rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              setShowDeletion(true);
            }}
          >
            <IconTrash className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <DeleteContactModal
        id={contact.id}
        show={showDeletion}
        onClose={() => {
          queryClient.refetchQueries("getContacts");
          setShowDeletion(false);
        }}
      />
    </>
  );
}
export default ContactCard;
