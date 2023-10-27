import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function EditContactModal(
    { 
        EditContactShown, 
        onClose, 
        contactData, 
        setEditContactModal, 
        contactId 
    }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [language, setLanguage] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => { 
        if (contactData && contactId) {
            const contact = contactData.find((contact) => contact.id === contactId)
    
            setFirstName(contact.first_name)
            setLastName(contact.last_name)
            setEmail(contact.email)
            setAvatar(contact.avatar)
            setGender(contact.gender)
            setAge(contact.age)
            setLanguage(contact.language)
            setBirthday(contact.birthday)
        }
    }, [contactId])

    if (!EditContactShown) return null;

    function updateContact (e) {
        e.preventDefault();
        const updateContact = {
            "first_name": firstName,  
            "last_name": lastName,
            "email": email,
            "gender": gender,
            "language": language,
            "avatar": avatar,
            "birthday": birthday
        }

        const index = contactData.findIndex((contact) => contact.id === contactId)
        contactData[index] = updateContact
        onClose();
    }

    return (
        <>
        <Background>
            <Container>
                <p onClick={() => setEditContactModal(false)}>x</p>
                <form onSubmit={updateContact}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        placeholder="type first name here..."
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
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
                        required
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
                        required
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        placeholder="type age here..."
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    />
                    <label htmlFor="name">Language</label>
                    <input
                        type="text"
                        placeholder="type language here..."
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                        required
                    />
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                        required
                    />
                    <button type="submit">Update</button>
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
    background-color: rgb(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 2;
`

const Container = styled.div`
    position: relative;
    flex-direction: column;
    background-color: #CDCDCD;
    width: 400px;
    margin: auto;
    border-radius: 20px;

    p {
        cursor: pointer;
        position: absolute;
        right: 1pc;
        top: 0.5pc;
        font-size: 22px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 180px 0 0 15px;
    }

    label {
        margin: 12px 0 0 12px;
        font-size: 12px;
    }

    input {
        width: 60%;
        height: 20px;
        margin: 6px 0 16px 12px;
        border-radius: 8px;
    }

    button {
        cursor: pointer;
        position: absolute;
        bottom: 1pc;
        right: 1pc;
        border-radius: 12px;
    }
`


