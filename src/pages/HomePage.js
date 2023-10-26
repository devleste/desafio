import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ContactModal from "../components/Modals/ContactModal";
import ContactList from "../components/ContactList";

export default function HomePage() {
    const [contactData, setContactData] = useState([])
    const [contactModal, setContactModal] = useState(false)

    return (    
        <>
            <NavBar>
                <Header />
            </NavBar>

            <ContactList 
                contactData={contactData}
                setContactData={setContactData}
                EnableContactModal={setContactModal}
            />

            <ContactModal
                ContactShown={contactModal}
                contactData={contactData}
                setContactModal={setContactModal}
                setContactData={setContactData}
                onClose={() => setContactModal(false)}
            />
        </>
    )
}

const NavBar = styled.span`
    display: flex;
    width: 100vw;
`
