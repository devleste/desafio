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
    const [userContacts, setUserContacts] = useState([])
    const [totalLang, setTotalLang] = useState("0")
    const [totalMale, setTotalMale] = useState("0")
    const [totalFemale, setTotalFemale] = useState("0")

    return (    
        <>
            <NavBar>
                <Header />
            </NavBar>

            <ContactList 
                contactData={contactData}
                userContacts={userContacts}
                setContactData={setContactData}
                setContactId={setContactId}
                EnableContactModal={setContactModal}
                EnableEditContactModal={setEditContactModal}
                EnableDeleteContactModal={setDeleteContactModal}
                totalLang={totalLang}
                setTotalLang={setTotalLang}
                totalMale={totalMale}
                setTotalMale={setTotalMale}
                totalFemale={totalFemale}
                setTotalFemale={setTotalFemale}
            />

            <ContactModal
                ContactShown={contactModal}
                contactData={contactData}
                setContactData={setContactData}
                setContactModal={setContactModal}
                userContacts={userContacts}
                setUserContacts={setUserContacts}
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
