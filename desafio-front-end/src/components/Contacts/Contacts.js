import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

export default function Contacts(){

    const [contactsInfo, setContactsInfo] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060`);
        promise.then((res) => {
            setContactsInfo(res.data);
            console.log(res.data);
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    },[]);

return (
   <Wrapper>
    <header>
        <p>Contatos</p> 
        <span>
        <button>Adicionar novo contato</button>
        </span>
    </header>
    <hr />
    <List>
        <Category>
            <p></p>
            <p>Nome completo</p>
            <p>E-mail</p>
            <p>Nascimento</p>
            <p>Gênero</p>
            <p>Linguagem</p>
           
        </Category>
        
        <span>
        {
            contactsInfo.map((contact, index) => (
                <Card 
                key={index}
                contact={contact} 
                />
            ))
           
            }
            </span>
    </List>
   </Wrapper>
)
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
font-family: "Lexend Deca", sans-serif;
color: #FFFFFF;

hr {
    width: 100%;
    height: 1px;
    border:none;
    background-color: #deba76;
    margin-top: 15px;
}

header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    

    button {
        border: none;
        padding: 7px;
        border-radius: 5px;
        color: #201520;
        background-color: #deba76;
        font-family: "Lexend Deca", sans-serif;
        margin-right: 15px;
    }

    p{
    font-size: 20px;
}
}
`
const Category = styled.div`
display: grid;
width: 100%;
grid-template-columns: 1fr 2fr 3fr 2fr 2fr 2fr;
align-items: center;
font-size: 13px;
margin-top: 10px;
`

const List = styled.div`
display: flex;
flex-direction: column;
`

