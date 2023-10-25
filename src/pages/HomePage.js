import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
// import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";

export default function HomePage() {
    return (    
        <>
            <NavBar>
                <Header />
            </NavBar>
            
            {/* <AddContact /> */}
            <ContactList />
        </>
    )
}

const NavBar = styled.span`
    display: flex;
    width: 100vw;
`
