import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Contact } from "../types/types";
import dayjs from "dayjs";

interface ContactContextProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
}

interface ContactContextProviderProps {
  children: ReactNode;
}

const ContactContext = createContext<ContactContextProps | undefined>(
  undefined
);

export const ContactProvider = ({ children }: ContactContextProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Contact) => {
    const formattedContact = {
      ...contact,
      birthday: dayjs(contact.birthday).format("DD/MM/YYYY"),
    };

    setContacts([...contacts, formattedContact]);
  };

  const updateContact = (updatedContact: Contact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContacts = (): ContactContextProps => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContacts must be used within a ContactProvider");
  }
  return context;
};
