import { Dispatch, SetStateAction } from "react";
import { Contact } from "./contact";

export interface VariablesEditForm {
    contact: Contact;
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    language: string;
    email: string;
    urlAvatar: string;
    age: number;
    setAge: Dispatch<SetStateAction<number>>;
    setFirstName: Dispatch<SetStateAction<string>>;
    setLastName: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setBirthday: Dispatch<SetStateAction<string>>;
    setGender: Dispatch<SetStateAction<string>>;
    setLanguage: Dispatch<SetStateAction<string>>;
    setUrlAvatar: Dispatch<SetStateAction<string>>;
};