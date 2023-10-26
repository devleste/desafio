import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ContactModal from "../components/Modals/ContactModal";
import ContactList from "../components/ContactList";
import EditContactModal from "../components/Modals/EditContactModal";

export default function HomePage() {
    const [contactData, setContactData] = useState([])
    const [contactId, setContactId] = useState("")
    const [contactModal, setContactModal] = useState(false)
    const [editContactModal, setEditContactModal] = useState(false)

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
        </>
    )
}

const NavBar = styled.span`
    display: flex;
    width: 100vw;
`
