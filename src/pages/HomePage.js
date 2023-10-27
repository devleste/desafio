import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ContactModal from "../components/Modals/ContactModal";
import ContactList from "../components/ContactList";
import EditContactModal from "../components/Modals/EditContactModal";
import DeleteContactModal from "../components/Modals/DeleteContactModal";

export default function HomePage() {
    const [contactData, setContactData] = useState([])
    const [contactId, setContactId] = useState("")
    const [contactModal, setContactModal] = useState(false)
    const [editContactModal, setEditContactModal] = useState(false)
    const [deleteContactModal, setDeleteContactModal] = useState(false)

    return (    
        <>
            <NavBar>
                <Header />
            </NavBar>

            <ContactList 
                contactData={contactData}
                setContactData={setContactData}
                setContactId={setContactId}
                EnableContactModal={setContactModal}
                EnableEditContactModal={setEditContactModal}
                EnableDeleteContactModal={setDeleteContactModal}
            />

            <ContactModal
                ContactShown={contactModal}
                contactData={contactData}
                setContactModal={setContactModal}
                onClose={() => setContactModal(false)}
            />

            <EditContactModal
                contactId={contactId}
                contactData={contactData}
                EditContactShown={editContactModal}
                setEditContactModal={setEditContactModal}
                onClose={() => setEditContactModal(false)}
            />

            <DeleteContactModal
                contactId={contactId}
                contactData={contactData}
                DeleteContactShown={deleteContactModal}
                setDeleteContactModal={setDeleteContactModal}
                onClose={() => setDeleteContactModal(false)}
            />
        </>
    )
}

const NavBar = styled.span`
    display: flex;
    width: 100vw;
`
