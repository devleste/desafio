import React from "react";
import styled from "styled-components";
import leste from "../assets/lestecontact.png";

export default function Header() {
    return (
        <Container>
            <Logo>
                <img alt="logo" src={leste} />
            </Logo>
        </Container>
    )
}

const Container = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    display: flex;
    background-color: #EDEDED;
`

const Logo = styled.div`
    display: flex;
    margin: auto;

    img {
        width: 80px;
        height: 40px;
        padding: 14px;
    }
`
