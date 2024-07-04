import { InformationInputsForm } from "@/Components/InputsFormDefault/InformationInputs";
import { Contact } from "@/types/interfaces/contact";
import { Box, Button, Flex, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

export interface InformationContactProps {
    contact: Contact;
    isOpen: boolean;
    onClose: () => void;
    handleOpenInformationsModal: (contact: Contact) => void
};

export function InformationModalContact({
    isOpen,
    onClose,
    contact,
    handleOpenInformationsModal
}: InformationContactProps) {

    console.log("contact em Modal:", contact);

    if (!contact) {
        return null; // Se o perfil não estiver definido, não renderize o modal
    }

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg={"#00000009"} />
            <ModalContent
                bg={"black.50"}
                boxShadow={"none"}
            >
                <ModalHeader display={"flex"} justifyContent={"center"}>
                    <Text
                        gap={1}
                        display={"flex"}
                        alignItems={"center"}
                        fontSize={"1.5rem"}
                    >
                        Informações
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <InformationInputsForm
                        contact={contact}
                        handleOpenInformationsModal={handleOpenInformationsModal}
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                </ModalBody>

                <ModalFooter gap={4}>
                    <Button
                        gap={1}
                        _hover={{
                            bg: 'green.green700',
                        }}
                        color={"white"}
                        w={"100%"}
                        bg={"green.green500"}
                        onClick={onClose}
                    >
                        Concluído
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
