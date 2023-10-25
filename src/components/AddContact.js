import React from "react";
import styled from "styled-components";

export default function AddContact() {
    return (
        <>
            <Title>Add New Contact</Title>
            <Form>
                <Name>
                    Name:
                    <input></input>
                </Name>
                <Email>
                    Email:
                    <input></input>
                </Email>
                <Gender>
                    Gender:
                    <input></input>
                </Gender>
                <Age>
                    Age:
                    <input></input>
                </Age>
                <Language>
                    Language:
                    <input></input>
                </Language>
                <Birthday>
                    Birthday:
                    <input></input>
                </Birthday>
            </Form>
        </>
    )
}

const Title = styled.h1`
    margin: 100px 0 20px 140px;
`

const Form = styled.div`
    display: flex;
    margin: 30px 0 0 140px;
    width: 500px;
    flex-direction: row;
    flex-wrap: wrap;
`

const Name = styled.div``

const Email = styled.div``

const Gender = styled.div``

const Age = styled.div``

const Language = styled.div``

const Birthday = styled.div``
