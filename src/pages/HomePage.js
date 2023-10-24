import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

export default function HomePage() {
    return (    
        <>
            <NavBar>
                <Header />
            </NavBar>
            
            <ContactList />
        </>
    )
}

const NavBar = styled.span`
    display: flex;
    width: 100vw;
`
