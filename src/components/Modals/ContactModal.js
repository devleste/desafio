import React, { useState } from "react";
import styled from "styled-components";

export default function ContactModal({ ContactShown, onClose, contactData, setContactData, setContactModal }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [language, setLanguage] = useState("");
    const [birthday, setBirthday] = useState("");

    if (!ContactShown) return null;

    function submitContact (e) {
        e.preventDefault();
        const newContact = {
            "first_name": {firstName},  
            "last_name": {lastName},
            "email": {email},
            "gender": {gender},
            "language": {language},
            "avatar": {avatar},
            "birthday": {birthday}
        }

        setContactData([...contactData, newContact])

        onClose();
    }

    return (
        <>
        <Background>
            <Container>
                <p onClick={() => setContactModal(false)}>x</p>
            <Title>Submit</Title>
                <form onSubmit={submitContact}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        placeholder="type first name here..."
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        placeholder="type last name here..."
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="type email here..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="avatar">Avatar</label>
                    <input
                        type="text"
                        placeholder="avatar pic url here..."
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                    />
                    <label htmlFor="gender">Gender</label>
                    <input
                        type="text"
                        placeholder="M/F"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        placeholder="type age here..."
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                    <label htmlFor="name">Language</label>
                    <input
                        type="text"
                        placeholder="type language here..."
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                    />
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />
                </form>
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
    background-color: rgb(0,0,0,0.7);
    z-index: 2;
`

const Title = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 16pc;
    right: 21pc;
    border-radius: 12px;
`

const Container = styled.div`
    flex-direction: column;
    background-color: #CDCDCD;
    width: 400px;
    margin: auto;

    p {
        cursor: pointer;
        position: absolute;
        right: 20pc;
        top: 11.5pc;
        font-size: 22px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 180px 0 15px 15px;
    }

    label {
        margin-top: 10px;
        font-size: 12px;
    }

    input {
        width: 65%;
        height: 20px;
        margin: 12px 0 20px 0;
        border-radius: 8px;
    }
`


