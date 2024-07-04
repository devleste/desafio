import { contacts as initialContacts } from "@/services/getLesteTelecom";
import { Contact } from "@/types/interfaces/contact";
import { calculateAge } from "@/utils/calculateAge/calculateAge";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

export interface SelectedGenderProps {
    selectedGender: string;
    setSelectedGender: Dispatch<SetStateAction<string>>;
}

export interface VariablesContextType {
    selectedGender: string;
    setSelectedGender: Dispatch<SetStateAction<string>>;
    handleGenderChange: (gender: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: Dispatch<SetStateAction<string>>;
    handleLanguageChange: (language: string) => void;
    filteredContacts: Contact[];
    setFilteredContacts: Dispatch<SetStateAction<Contact[]>>;
    AddContact: (contact: Contact) => void;
    updateContact: (updatedContact: Contact) => void;
    deleteContact: (contactId: number) => void;
    filterByAge: (ageCriteria: string) => void;
};

const defaultValue: VariablesContextType = {
    selectedGender: "",
    setSelectedGender: () => {
        throw new Error("setSelectedGender function is not implemented");
    },
    handleGenderChange: () => {
        console.log("Error in handleGenderChange");
    },
    selectedLanguage: "",
    setSelectedLanguage: () => {
        throw new Error("setSelectedLanguage function is not implemented");
    },
    handleLanguageChange: () => {
        console.log("Error in handleLanguageChange");
    },
    filteredContacts: [],
    setFilteredContacts: () => {
        throw new Error("setFilteredContacts function is not implemented");
    },
    AddContact: () => { 
        throw new Error("AddContact function is not implemented")
    },
    updateContact: () => {
        throw new Error("updateContact function is not implemented");
    },
    deleteContact: () => {
        throw new Error("deleteContact function is not implemented");
    },
    filterByAge: () => {
        throw new Error("filterByAge function is not implemented");
    },
};

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

export default function ParamsContextProvider({ children }: { children: ReactNode }) {
    const [selectedGender, setSelectedGender] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");
    const [contacts, setContacts] = useState<Contact[]>(initialContacts);
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>(initialContacts);

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    };

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    };

    const AddContact = (contact: Contact) => {
        const updatedContacts = [...contacts, contact];
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const updateContact = (updatedContact: Contact) => {
        const updatedContacts = contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        );
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const deleteContact = (contactId: number) => {
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const filterByAge = (ageCriteria: string) => {
        const today = new Date();
        const filteredByAge = contacts.filter(contact => {
            const age = calculateAge(contact.birthday);
            if (ageCriteria === "older") {
                return age > 30;
            } else if (ageCriteria === "younger") {
                return age <= 30;
            }
            return true;
        });
        setFilteredContacts(filteredByAge);
    };

    useEffect(() => {
        const savedContacts = localStorage.getItem('contacts');

        if (savedContacts) {
            const parsedContacts = JSON.parse(savedContacts);
            setContacts(parsedContacts);
            setFilteredContacts(parsedContacts);
        };

    }, []);

    useEffect(() => {
        let filtered = contacts;

        if (selectedGender) {
            filtered = filtered.filter(contact => contact.gender === selectedGender);
        }

        if (selectedLanguage) {
            filtered = filtered.filter(contact => contact.language === selectedLanguage);
        }

        setFilteredContacts(filtered);

    }, [selectedGender, selectedLanguage, contacts]);

    return (
        <ParamsProvider.Provider
            value={{
                selectedGender,
                setSelectedGender,
                selectedLanguage,
                setSelectedLanguage,
                handleGenderChange,
                handleLanguageChange,
                filteredContacts,
                setFilteredContacts,
                AddContact,
                updateContact,
                deleteContact,
                filterByAge
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextGlobal = () => useContext(ParamsProvider);
