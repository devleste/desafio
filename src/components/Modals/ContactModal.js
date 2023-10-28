import React, { useState } from "react";
import styled from "styled-components";

export default function ContactModal(
    { 
        ContactShown, 
        onClose, 
        contactData,
        userContacts,
        setContactModal,
    }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");
    const [birthday, setBirthday] = useState("");

    if (!ContactShown) return null;

    const currentDate = new Date();

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    let userGender

    function submitContact (e) {
        e.preventDefault();

        if (gender === "M") {
            userGender = "1"
        } else {
            userGender = "2"
        }

        const [year, month, day] = birthday.split("-");
        let shortenedbday = parseInt(month)

        const date = new Date(year, month - 1, day);
        const formattedDate = `${months[date.getMonth()]} ${date.getDate()}`

        let count = currentDate.getFullYear() - date.getFullYear();
        if (currentDate.getMonth() < date.getMonth() || 
        (currentDate.getMonth() === date.getMonth() && 
        currentDate.getDate() < date.getDate())) {
            count--;
        }
        let age = count

        const newContact = {
            "id": (contactData.length + 1),
            "first_name": firstName,  
            "last_name": lastName,
            "email": email,
            "gender": gender,
            "age": age,
            "language": language,
            "avatar": avatar,
            "birthday": formattedDate,
            "shortenedbday": shortenedbday,
            "num": userGender,
        }

        userContacts.push(newContact)
        contactData.push(newContact)

        onClose();
    }

    return (
        <>
        <Background>
            <Container>
                <p onClick={() => setContactModal(false)}>x</p>
                <form onSubmit={submitContact}>
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        placeholder="type first name here..."
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        placeholder="type last name here..."
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="type email here..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="avatar">Avatar</label>
                    <input
                        type="url"
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
                    <label htmlFor="name">Language</label>
                    <input
                        type="language"
                        placeholder="type language here..."
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                        required
                    />
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
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


