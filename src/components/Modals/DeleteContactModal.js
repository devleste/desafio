import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function DeleteContactModal(
    {
        DeleteContactShown,
        onClose,
        contactData,
        setDeleteContactModal,
        contactId
    }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => { 
        if (contactData && contactId) {
            const contact = contactData.find((contact) => contact.id === contactId)

            setFirstName(contact.first_name)
            setLastName(contact.last_name)
            setEmail(contact.email)
            setAvatar(contact.avatar)
        }
    }, [contactId])

    if (!DeleteContactShown) return null;

    function deleteContact() {
        const index = contactData.findIndex((contact) => contact.id === contactId)
        contactData.splice(index, 1)
        onClose()
    }

    return (
        <>
        <Background>
            <Container>
                <p onClick={() => setDeleteContactModal(false)}>x</p>
                <Question>
                    <h1>Are you sure you want to delete this contact?</h1>
                    <Avatar src={avatar}/>
                    <Name>{firstName} {lastName}</Name>
                    <Email>{email}</Email>
                    <div>
                        <h2 onClick={deleteContact}>Yes</h2>
                        <h3 onClick={() => setDeleteContactModal(false)}>No</h3>
                    </div>
                </Question>
            </Container>
        </Background>
        </>
    )
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 2;
`

const Container = styled.div`
    position: relative;
    flex-direction: column;
    background-color: #CDCDCD;
    width: 350px;
    margin: 250px auto 0 auto;
    border-radius: 20px;

    p {
        cursor: pointer;
        position: absolute;
        right: 1pc;
        top: 0.5pc;
        font-size: 22px;
    }
`

const Question = styled.div`
    display: flex;
    font-style: italic;
    font-size: 18px;
    width: 210px;
    flex-direction: column;
    margin: auto;

    h1 {
        margin: 20px auto 120px auto;
    }

    h2, h3 {
        cursor: pointer;
    }

    div {
        font-style: normal;
        display: flex;
        width: 200px;
        margin-bottom: 20px;
        justify-content: space-between;
    }
`

const Avatar = styled.img`
    position: absolute;
    top: 5pc;
    left: 3pc;
    border-radius: 100%;
    width: 60px;
    height: 60px;
`

const Name = styled.div`
    font-style: normal;
    position: absolute;
    top: 5.5pc;
    left: 8pc;
`

const Email = styled.div`
    font-style: normal;
    font-size: 14px;
    color: #5a5a5a;
    position: absolute;
    top: 7pc;
    left: 8pc;
`
