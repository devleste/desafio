import { useContextGlobal } from "@/Components/Context";
import { InputsDeleteContacts } from "@/Components/InputsFormDefault/DeleteForm";
import { Contact } from "@/types/interfaces/contact";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BiTrash } from "react-icons/bi";

export interface VariablesDeleteContact {
    isOpenDeleteCardModal: boolean;
    setIsOpenDeleteCardModal: Dispatch<SetStateAction<boolean>>;
    contact: Contact
}

export function DeleteCardModal({ isOpenDeleteCardModal, setIsOpenDeleteCardModal, contact }: VariablesDeleteContact) {
    const { deleteContact } = useContextGlobal();

    const handleDelete = () => {
        deleteContact(contact.id);
        setIsOpenDeleteCardModal(false); // Fecha o modal após deletar
    };

    if (!contact) {
        return null; // Se o perfil não estiver definido, não renderize o modal
    }

    return (
        <Modal isCentered isOpen={isOpenDeleteCardModal} onClose={() => setIsOpenDeleteCardModal(false)}>
            <ModalOverlay bg={"#00000009"} />
            <ModalContent bg={"black.50"} boxShadow={"none"}>
                <ModalHeader display={"flex"} justifyContent={"center"}>
                    <Text
                        gap={1}
                        display={"flex"}
                        alignItems={"center"}
                        fontSize={"1.25rem"}
                    >
                        Deseja realmente deletar este contato?
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <InputsDeleteContacts 
                        isOpenDeleteCardModal={isOpenDeleteCardModal} 
                        setIsOpenDeleteCardModal={setIsOpenDeleteCardModal} 
                        contact={contact} 
                    />
                </ModalBody>

                <ModalFooter gap={4}>
                    <Button
                        gap={1}
                        _hover={{ bg: 'red.900' }}
                        color='black.100'
                        bg='red.700'
                        w={"100%"}
                        onClick={handleDelete}
                    >
                        <BiTrash size={20} /> Deletar
                    </Button>

                    <Button
                        onClick={() => setIsOpenDeleteCardModal(false)}
                        gap={1}
                        _hover={{ bg: 'green.green600' }}
                        w={"100%"}
                        bg={"green.400"}
                        color={"white"}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
