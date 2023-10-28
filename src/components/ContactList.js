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
        setContactId,
        // totalLang,
        // setTotalLang,
        // totalMale,
        // setTotalMale,
        // totalFemale,
        // setTotalFemale
    }) {

    const [age, setAge] = useState(false)
    const [language, setLanguage] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState("")
    const [selectedGender, setSelectedGender] = useState("")
    const [apiData, setApiData] = useState([]);

    let filteredApi = []

    const genders = [
        "M", "F"
    ]

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    const currentDate = new Date();

    const fetchData = () => {
        const request = axios.get("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060");
        request.then(res => {

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].gender === "M") {
                    res.data[i].num = "1"
                } else {
                    res.data[i].num = "2"
                }

                const [year, month, day] = res.data[i].birthday.split("-");
                res.data[i].shortenedbday = parseInt(month)

                const date = new Date(year, month - 1, day);
                const formattedDate = `${months[date.getMonth()]} ${date.getDate()}`
                res.data[i].birthday = formattedDate

                let age = currentDate.getFullYear() - date.getFullYear();
                if (currentDate.getMonth() < date.getMonth() || 
                (currentDate.getMonth() === date.getMonth() && 
                currentDate.getDate() < date.getDate())) {
                    age--;
            }
            res.data[i].age = age
            }

            setApiData(res.data);
            console.log(apiData)
            setContactData(res.data, userContacts)
            // langCount()
            // maleCount()
            // femaleCount()
        });
    }


    useEffect(() => {


        if(selectedMonth) {
            setContactData(apiData)
            setSelectedGender("")
            handleBirthday(selectedMonth)
            setContactData(filteredApi)
            // langCount()
        } else if (selectedGender) {
            setSelectedMonth("")    
            handleGender(selectedGender)
            setContactData(filteredApi)
        } else {
            fetchData();
        }

    }, [selectedMonth, selectedGender]);


// funções abaixo para calcular quantidade de línguas/pessoas de cada sexo
    // function langCount(){
    //     const languages = []
    //     contactData.forEach(person =>{
    //         const language = person.language
    //         if (!languages.includes(language)) {
    //             languages.push(language);
    //         }
    //     })
    //     console.log(languages.length)
    //     setTotalLang(languages.length)
    // }

    // function maleCount() {
    //     const males = []
    //     contactData.forEach(person => {
    //         if (person.gender === "M") males.push("M")
    //     })
    //     console.log(males.length)
    //     setTotalMale(males.length)
    // }

    // function femaleCount() {
    //     const females = []
    //     contactData.forEach(person => {
    //         if (person.gender === "F") females.push("M")
    //     })
    //     console.log(females.length)
    //     setTotalFemale(females.length)
    // }



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

        setSelectedMonth("")
        setContactData(apiData)
        filteredApi = contactData.filter((contact) => parseInt(contact.num) === parseInt(selectedGender))

        return filteredApi
    }


    const handleBirthday = (selectedMonth) => {

        setSelectedGender("")
        setContactData(apiData)
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

                {/* <Count>
                    <h1>Total: {totalLang}</h1>
                    <h2>M: {totalMale}</h2>
                    <h3>F: {totalFemale}</h3>
                </Count> */}
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

// const Count = styled.div`
//     color: #5A5A5A;
//     font-size: 9px;

//     h1 {
//         position: absolute;
//         top: 2.2pc;
//         right: 16.8pc;
//     }

//     h2 {
//         position: absolute;
//         top: 2.2pc;
//         right: 26.2pc;
//     }

//     h3 {
//         position: absolute;
//         top: 2.2pc;
//         right: 24.7pc;
//     }
// `

const List = styled.div`
    display: flex;
    flex-direction: column;
    height: 68vh;
    padding: 30px 0 0 10px;
`

const Rows = styled.div`
    display: flex;
    margin-top: -12px;
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
