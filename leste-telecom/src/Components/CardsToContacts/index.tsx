import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { EditCardModal } from "@/utils/modals/EditContact";
import { DeleteCardModal } from "@/utils/modals/DeleteContact";
import { CardComponent } from "./cardComponent";
import { Contact } from "@/types/interfaces/contact";
import { useContextGlobal } from "../Context";
import { InformationModalContact } from "@/utils/modals/InformationContact";

export function CardsContacts() {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [selectedContactDeleted, setSelectedContactDeleted] = useState<Contact | null>(null);
    const [selectedContactInformation, setSelectedContactInformation] = useState<Contact | null>(null);

    const { filteredContacts, updateContact } = useContextGlobal();

    const { isOpen: isEditModalOpen, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure();
    const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();
    const { isOpen: isOpenInformationModal, onOpen: onOpenInformationModal, onClose: onCloseInformationModal } = useDisclosure();

    function handleOpenEditModal(contact: Contact) {
        setSelectedContact(contact);
        onOpenEditModal();
    };

    function handleOpenDeleteModal(contact: Contact) {
        setSelectedContactDeleted(contact);
        onOpenDeleteModal();
    };

    function handleOpenInformationsModal(contact: Contact) {
        setSelectedContactInformation(contact);
        onOpenInformationModal();
    };

    return (
        <>
            <SimpleGrid columns={{ desktop: 3, tabletMedium: 2 }} spacingX='40px' spacingY='20px'>
                {filteredContacts.map((item, idx) => (
                    <Fragment key={idx}>
                        <CardComponent
                            isOpen={isOpenInformationModal}
                            onOpen={onOpenInformationModal}
                            onClose={onCloseInformationModal}
                            contact={item}
                            onEdit={handleOpenEditModal}
                            onDelete={handleOpenDeleteModal}
                            handleOpenInformationsModal={handleOpenInformationsModal}
                        />

                        {isEditModalOpen && selectedContact && (
                            <EditCardModal
                                isOpen={isEditModalOpen}
                                setIsOpen={onCloseEditModal}
                                contact={selectedContact}
                                updateContact={updateContact}
                            />
                        )}

                        {isDeleteModalOpen && selectedContactDeleted && (
                            <DeleteCardModal
                                isOpenDeleteCardModal={isDeleteModalOpen}
                                setIsOpenDeleteCardModal={onCloseDeleteModal}
                                contact={selectedContactDeleted}
                            />
                        )}

                        {isOpenInformationModal && selectedContactInformation && (
                            <InformationModalContact
                                isOpen={isOpenInformationModal}
                                onClose={onCloseInformationModal}
                                contact={selectedContactInformation}
                                handleOpenInformationsModal={handleOpenInformationsModal}
                            />
                        )}
                    </Fragment>
                ))}
            </SimpleGrid>
        </>
    );
}
