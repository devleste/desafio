import { Fragment, useState } from "react";
import { Contact } from "@/types/interfaces/contact";
import { Box, Button, Flex, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BiEditAlt } from "react-icons/bi";
import { EditInputsForm } from "@/Components/InputsFormDefault/EditForm";
import { calculateAge } from "@/utils/calculateAge/calculateAge";

interface EditCardContacts {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    contact: Contact;
    updateContact: (updatedContact: Contact) => void;
}

export function EditCardModal({ isOpen, setIsOpen, contact, updateContact }: EditCardContacts) {
    const [firstName, setFirstName] = useState(contact.first_name);
    const [lastName, setLastName] = useState(contact.last_name);
    const [email, setEmail] = useState(contact.email);
    const [birthday, setBirthday] = useState(contact.birthday);
    const [gender, setGender] = useState(contact.gender);
    const [language, setLanguage] = useState(contact.language);
    const [urlAvatar, setUrlAvatar] = useState(contact.avatar);
    const [age, SetAge] = useState(calculateAge(contact.birthday));

    const handleSave = () => {
        const updatedContact = {
            ...contact,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday,
            gender: gender,
            language: language,
            email: email,
            urlAvatar: urlAvatar,
            age: age,
        };
        updateContact(updatedContact); // Chama a função do contexto para atualizar o contato
        setIsOpen(false); // Fecha o modal após salvar
    };

    return (
        <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay bg={"#00000009"} />
            <ModalContent bg={"black.50"} boxShadow={"none"}>
                <ModalHeader display={"flex"} justifyContent={"center"}>
                    <Text gap={1} display={"flex"} alignItems={"center"} fontSize={"1.5rem"}>
                        <BiEditAlt size={24} /> Editando contato
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <EditInputsForm 
                        contact={contact}
                        email={email}
                        firstName={firstName}
                        gender={gender}
                        language={language}
                        age={age}
                        setAge={SetAge}
                        lastName={lastName}
                        urlAvatar={urlAvatar}
                        birthday={birthday}
                        setBirthday={setBirthday}
                        setEmail={setEmail}
                        setFirstName={setFirstName}
                        setGender={setGender}
                        setLastName={setLastName}
                        setLanguage={setLanguage}
                        setUrlAvatar={setUrlAvatar}
                    />
                </ModalBody>

                <ModalFooter gap={4}>
                    <Button
                        gap={1}
                        _hover={{ bg: 'green.green700' }}
                        color={"white"}
                        w={"100%"}
                        bg={"green.green500"}
                        onClick={handleSave}
                    >
                        Salvar
                    </Button>

                    <Button
                        _hover={{ bg: 'red.900' }}
                        onClick={() => setIsOpen(false)}
                        gap={1}
                        w={"100%"}
                        color='black.100'
                        bg='red.700'
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
