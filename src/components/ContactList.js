import React from "react";
import styled from "styled-components";

const tempArray = [
    {
        "id": 1,
        "first_name": "Bob", 
        "last_name": "France",
        "email": "bob.france@gmail.com",
        "avatar": "https://i.pravatar.cc/150?img=13",
        "gender": "M",
        "age": "29",
        "language": "French",
        "birthday": "1993-12-05",
    },
    {
        "id": 2,
        "first_name": "Jonas", 
        "last_name": "Doeson",
        "email": "jonas.doeson@gmail.com",
        "avatar": "https://i.pravatar.cc/150?img=8",
        "gender": "M",
        "age": "34",
        "language": "English",
        "birthday": "1989-05-30",
    },
    {
        "id": 3,
        "first_name": "Susan", 
        "last_name": "Friend",
        "email": "susan.friend@gmail.com",
        "avatar": "https://i.pravatar.cc/150?img=28",
        "gender": "F",
        "age": "33",
        "language": "English",
        "birthday": "1990-03-08",
    },
    {
        "id": 4,
        "first_name": "Jessica", 
        "last_name": "Low",
        "email": "jessica.low@gmail.com",
        "avatar": "https://i.pravatar.cc/150?img=30",
        "gender": "F",
        "age": "39",
        "language": "Spanish",
        "birthday": "1984-09-17",
    },
    {
        "id": 5,
        "first_name": "Linda", 
        "email": "linda.boner@gmail.com",
        "avatar": "https://i.pravatar.cc/150?img=45",
        "gender": "F",
        "age": "29",
        "language": "French",
        "birthday": "1994-08-20",
    },
]

export default function ContactList() {
    return (
    <>
        <Container>
            <List>
                {tempArray.map(contact => (
                    <Contact>
                        <img src={contact.avatar} alt="avatar" />
                        <div>
                            <h1>{contact.first_name} {contact.last_name}</h1>
                            <p>{contact.email}</p>
                        </div>
                        <span>
                            <h2>Gender: {contact.gender}</h2>
                            <h3>Age: {contact.age}</h3>
                            <h4>Language: {contact.language}</h4>
                            <h5>Birthday: {contact.birthday.slice(5, 10)}</h5>
                            <ion-icon name="pencil-sharp"></ion-icon>
                            <ion-icon name="trash-outline"></ion-icon>
                        </span>
                    </Contact>
                ))}
            </List>
        </Container>
    </>
    )
}

const Container = styled.div`
    margin: 150px auto 40px auto;
    position: relative;
    width: 650px;
    height: 70vh;
    background-color: #CEEAE5;
    border: 3px solid #cdcdcd;
    border-radius: 5%;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    height: 68vh;
    padding-bottom: 10px;
`

const Contact = styled.div`
    display: flex;
    margin-top: 10px;
    font-family: "Roboto";
    font-size: 14px;

    img {
        border-radius: 100%;
        margin: 12px 5px 5px 10px;
        width: 50px;
        height: 50px;
    }

    div {
        position: absolute; 
        left: 4.5pc;
        margin: 16px 0 8px 4px;
    }


    p {
        margin-top: 8px;
        color: #5A5A5A;
    }

    span {
        display: flex;
        flex-direction: row;
        position: absolute;
        margin: 0 18px 0 12px;
        font-size: 12px;
        padding: 24px;
        left: 15pc;
        flex-direction: row;
    }

    h2 {
        margin-right: 18px;
    }

    h3 {
        margin-right: 18px;
    }

    h5 {
        margin-right: 30px;
        width: 60px;
    }

    ion-icon {
        cursor: pointer;
        opacity: 50%;
        width: 14px;
        height: 14px;
        margin: 0 4px 0 4px;
    }
`
