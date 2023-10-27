import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { 
    IoPencil, 
    IoArrowUp, 
    IoArrowDown,
    IoAdd,
    IoTrash
} from "react-icons/io5";

export default function ContactList(
    { 
        EnableContactModal, 
        EnableEditContactModal, 
        EnableDeleteContactModal,
        contactData,
        userContacts,
        setContactData,
        setContactId
    }) {


    const tempArray = [
        {
            "id": 1,
            "first_name": "Bob", 
            "last_name": "France",
            "email": "bob.france@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=13",
            "gender": "M",
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
            "language": "Spanish",
            "birthday": "1984-09-17",
        },
        {
            "id": 5,
            "first_name": "Ned",
            "last_name": "Short",
            "email": "linda.boner@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=57",
            "gender": "M",
            "language": "Japanese",
            "birthday": "1980-03-20",
        },
        {
            "id": 6,
            "first_name": "John",
            "last_name": "Garcia",
            "email": "john.garcia@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=55",
            "gender": "M",
            "language": "French",
            "birthday": "1989-10-10",
        },
        {
            "id": 7,
            "first_name": "Donna",
            "last_name": "Genes",
            "email": "donna.genes@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=44",
            "gender": "F",
            "language": "English",
            "birthday": "1990-08-20",
        },
        {
            "id": 8,
            "first_name": "Ana",
            "last_name": "Gomes",
            "email": "ana.gomes@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=36",
            "gender": "F",
            "language": "Portuguese",
            "birthday": "1998-01-15",
        },
        {
            "id": 9,
            "first_name": "Tony",
            "last_name": "Soprano",
            "email": "gaba.gool@gmail.com",
            "avatar": "https://pbs.twimg.com/media/E7YE8arWEAEKkzO?format=jpg&name=4096x4096",
            "gender": "M",
            "language": "Italian",
            "birthday": "1959-08-22",
        },
        {
            "id": 10,
            "first_name": "Jesse",
            "last_name": "White",
            "email": "jesse.white@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=33",
            "gender": "F",
            "language": "Russian",
            "birthday": "1973-07-30",
        },
        {
            "id": 11,
            "first_name": "Joanna",
            "last_name": "Girl",
            "email": "joanna.girl@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=21",
            "gender": "F",
            "language": "German",
            "birthday": "1979-06-01",
        },
        {
            "id": 12,
            "first_name": "Audrey",
            "last_name": "Ladyson",
            "email": "audrey.ladyson@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=32",
            "gender": "F",
            "language": "English",
            "birthday": "2000-02-27",
        },
        {
            "id": 13,
            "first_name": "Dan",
            "last_name": "Chevsky",
            "email": "dan.chevsky@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=56",
            "gender": "M",
            "language": "German",
            "birthday": "1996-11-28",
        },
        {
            "id": 14,
            "first_name": "Carol",
            "last_name": "Santos",
            "email": "carol.santos@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=48",
            "gender": "F",
            "language": "Portuguese",
            "birthday": "1988-01-02",
        },
        {
            "id": 15,
            "first_name": "Chris",
            "last_name": "Kidson",
            "email": "chris.kidson@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=69",
            "gender": "M",
            "language": "Russian",
            "birthday": "1965-11-01",
        },
        {
            "id": 16,
            "first_name": "Leo",
            "last_name": "Lion",
            "email": "leo.lion@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=59",
            "gender": "M",
            "language": "French",
            "birthday": "1979-04-13",
        },
        {
            "id": 17,
            "first_name": "Soon",
            "last_name": "Sandon",
            "email": "soon.sandon@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=31",
            "gender": "F",
            "language": "Korean",
            "birthday": "2001-03-19",
        },
        {
            "id": 18,
            "first_name": "Mei",
            "last_name": "Wang",
            "email": "mei.wang@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=35",
            "gender": "F",
            "language": "Chinese",
            "birthday": "1990-08-08",
        },
        {
            "id": 19,
            "first_name": "Catherine",
            "last_name": "Soul",
            "email": "catherine.soul@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=29",
            "gender": "F",
            "language": "French",
            "birthday": "1994-09-27",
        },
        {
            "id": 20,
            "first_name": "Rupert",
            "last_name": "Jackson",
            "email": "rupert.jackson@gmail.com",
            "avatar": "https://i.pravatar.cc/150?img=17",
            "gender": "M",
            "language": "Italian",
            "birthday": "1955-10-22",
        },
    ]


    const [age, setAge] = useState(false)
    const [language, setLanguage] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState("")
    const [selectedGender, setSelectedGender] = useState("")

    let filteredApi = []
    let filteredUsers = []

    const genders = [
        "M", "F"
    ]

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    const currentDate = new Date();

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].gender === "M") {
            tempArray[i].num = "1"
        } else {
            tempArray[i].num = "2"
        }

        const [year, month, day] = tempArray[i].birthday.split("-");
        tempArray[i].shortenedbday = parseInt(month)

        const date = new Date(year, month - 1, day);
        const formattedDate = `${months[date.getMonth()]} ${date.getDate()}`
        tempArray[i].birthday = formattedDate


        let age = currentDate.getFullYear() - date.getFullYear();
        if (currentDate.getMonth() < date.getMonth() || 
        (currentDate.getMonth() === date.getMonth() && 
        currentDate.getDate() < date.getDate())) {
            age--;
        }
        tempArray[i].age = age
    }

    const fetchData = () => {
        // const request = axios.get("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060");
        // request.then(res => {

        //     for (let i = 0; i < res.data.length; i++) {
        //         if (res.data[i].gender === "M") {
        //             res.data[i].num = "1"
        //         } else {
        //             res.data[i].num = "2"
        //         }

        //         const [year, month, day] = res.data[i].birthday.split("-");
        //         res.data[i].shortenedbday = parseInt(month)

        //         const date = new Date(year, month - 1, day);
        //         const formattedDate = `${months[date.getMonth()]} ${date.getDate()}`
        //         res.data[i].birthday = formattedDate

        //         let age = currentDate.getFullYear() - date.getFullYear();
        //         if (currentDate.getMonth() < date.getMonth() || 
        //         (currentDate.getMonth() === date.getMonth() && 
        //         currentDate.getDate() < date.getDate())) {
        //             age--;
        //     }
        //     res.data[i].age = age
        //     }


        //     setContactData(res.data, userContacts)
        // });

        setContactData(tempArray, userContacts)
    }


    useEffect(() => {

        if(selectedMonth) {
            setSelectedGender("")
            handleBirthday(selectedMonth)
            setContactData(filteredApi)
            console.log(contactData, "bday")
            console.log(filteredApi, "filteredApi")
        } else if (selectedGender) {
            setSelectedMonth("")    
            handleGender(selectedGender)
            setContactData(filteredApi)
            console.log(contactData, "gender")
        } else {
            fetchData();
        }

    }, [selectedMonth, selectedGender]);



    function handleAge(){
        setAge(!age)
        setLanguage(false)

        if (!age) {
            contactData.sort((a, b) => b.age - a.age)
        } else if (age) {
            contactData.sort((a, b) => a.age - b.age)
        }
    }

    function handleLanguage(){
        setLanguage(!language)
        setAge(false)

        if (!language) {
            contactData.sort((a, b) => {
                const languageA = a.language.toUpperCase()
                const languageB = b.language.toUpperCase()
                if (languageA < languageB) return -1
                if (languageA > languageB) return 1
                return 0
            })
        } else if (language) {
            contactData.sort((a, b) => {
                const languageA = a.language.toUpperCase()
                const languageB = b.language.toUpperCase()
                if (languageB < languageA) return -1
                if (languageB > languageA) return 1
                return 0
            })
        }
    }


    const handleGender = (selectedGender) => {
        setContactData(tempArray, userContacts)
        setSelectedMonth("")
        filteredApi = contactData.filter((contact) => parseInt(contact.num) === parseInt(selectedGender))
        // filteredUsers = userContacts.filter((contact) => parseInt(contact.num) === parseInt(selectedGender))

        return filteredApi
    }


    const handleBirthday = (selectedMonth) => {
        setContactData(tempArray, userContacts)
        setSelectedGender("")

        filteredApi = contactData.filter((contact) => parseInt(contact.shortenedbday) === parseInt(selectedMonth))

        return filteredApi
    }


    return (
    <>
        <Container>
            <List>
                <Rows>
                    <Title>Contact List</Title>
                    <p>Gender</p>
                    <div 
                        onClick={() => handleGender()}
                    >
                    <GenderDrop
                        onClick={(e) => {
                            setSelectedGender(e.target.value)
                            handleGender(e.target.value)
                        }}
                    >
                        {genders.map((gender, index) => (
                            <option 
                                key={index}
                                value={index + 1}
                            >{gender}</option>
                        ))}
                    </GenderDrop>
                    </div>
                    <p>Age</p>
                    <div 
                        onClick={() => handleAge()}
                    >
                        {age ? <DownArrow/> : <UpArrow/>}
                    </div>
                    <p>Language</p> 
                    <div 
                        onClick={() => handleLanguage()}
                    >
                        {language ? <DownArrow/> : <UpArrow/>}
                    </div>
                    <p>Birthday</p> 
                    <div 
                        onClick={() => handleBirthday()}
                    >   
                    <BdayDrop
                        onClick={(e) => {
                            setSelectedMonth(e.target.value)
                            handleBirthday(e.target.value)
                        }}
                    >
                        {months.map((month, index) => (
                            <option 
                                key={index}
                                value={index + 1}
                            >{month}</option>
                        ))}
                    </BdayDrop>
                    </div>

                    <Add onClick={() => EnableContactModal(true)}>
                        <p><AddSign/> New</p>
                    </Add>
                    
                </Rows>
                <Contacts>
                {contactData.map(contact => (
                    <Contact>
                        <img src={contact.avatar} alt="avatar" />
                        <div>
                            <h1>{contact.first_name} {contact.last_name}</h1>
                            <p>{contact.email}</p>
                        </div>
                        <span>
                            <h2>{contact.gender}</h2>
                            <h3>{contact.age}</h3>
                            <h4>{contact.language}</h4>
                            <h5>{contact.birthday}</h5>
                            <Pencil onClick={() => {
                                setContactId(contact.id)
                                EnableEditContactModal(true)
                            }}/>
                            <Trash onClick={() => {
                                setContactId(contact.id)
                                EnableDeleteContactModal(true)
                            }}/>
                        </span>
                    </Contact>
                ))} 
                </Contacts>
            </List>
        </Container>
    </>
    )
}

const Container = styled.div`
    margin: 150px auto 40px auto;
    position: relative;
    width: 700px;
    height: 70vh;
    background-color: #CEEAE5;
    border: 3px solid #cdcdcd;
    border-radius: 5%;
    overflow: hidden;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    height: 68vh;
    padding: 30px 0 0 10px;
`

const Rows = styled.div`
    display: flex;
    margin-top: -8px;
    font-size: 12px;
    color: #5A5A5A;
    font-style: italic;
    position: absolute;
    left: 16.5pc;

    p {
        margin-right: 6px;
    }

    div {
        margin-right: 23px;
    }
`

const GenderDrop = styled.select`
    position: absolute;
    left: 2.7pc;
    width: 12px;
    height: 12px;
    border: 0px;
    background-color: #CEEAE5;
`

const BdayDrop = styled.select`
    position: absolute;
    left: 16.8pc;
    width: 12px;
    height: 12px;
    border: 0px;
    background-color: #CEEAE5;
`

const Title = styled.div`
    position: absolute;
    width: 140px;
    font-size: 24px;
    top: -0.15pc;
    right: 23pc;
`

const Add = styled.div`
    position: absolute;
    top: -0.25pc;
    left: 22.5pc;
    width: 100px;
    font-size: 18px;

    p {
        cursor: pointer;
    }
`

const Pencil = styled(IoPencil)`
    cursor: pointer;
    position: absolute;
    left: 23.5pc;
    opacity: 50%;
    width: 14px;
    height: 14px;
    margin: 0 4px 0 4px;
`

const Trash = styled(IoTrash)`
    cursor: pointer;
    position: absolute;
    left: 25pc;
    opacity: 50%;
    width: 14px;
    height: 14px;
    margin: 0 4px 0 4px;
`

const UpArrow = styled(IoArrowUp)`
    cursor: pointer;
    font-size: 12px;
`

const DownArrow = styled(IoArrowDown)`
    cursor: pointer;
    font-size: 12px;
`

const AddSign = styled(IoAdd)`
    cursor: pointer;
    font-size: 12px;
`

const Contacts = styled.div`
    position: relative;
    margin: 24px 0 0 -5px;
    height: 64vh;
    overflow-y: scroll;
    right: -19px;
`

const Contact = styled.div`
    display: flex;
    margin-top: 10px;
    font-family: "Roboto";
    font-size: 12px;
    padding-bottom: 5px;
    border-bottom: 1px solid #CDCDCD;

    img {
        border-radius: 100%;
        margin: 12px 5px 5px 5px;
        width: 50px;
        height: 50px;
    }

    div {
        position: absolute;
        font-size: 12px;
        left: 4pc;
        margin: 20px 0 8px -2px;
    }


    p {
        font-size: 11px;
        margin-top: 8px;
        color: #5A5A5A;
    }

    span {
        display: flex;
        flex-direction: row;
        position: absolute;
        margin: 0 18px 0 -6px;
        font-size: 12px;
        padding: 24px;
        left: 14.8pc;
        flex-direction: row;
    }

    h2 {
        margin-right: 54px;
    }

    h3 {
        position: absolute;
        left: 5.5pc;
    }

    h4 {
        position: absolute;
        left: 8.8pc;
    }

    h5 {
        position: absolute;
        left: 15pc;
        width: 50px;
    }
`
