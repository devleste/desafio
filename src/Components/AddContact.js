import React, { useState } from 'react'

export default function AddContact (props) {

    const [avatar, setAvatar] = useState('')
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirth] = useState('')
    const [language, setLang] = useState('')
    const [id, setId] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setId(Math.random())
        if(first_name && last_name && email && gender && birthday && language){
            const newContact = {
                id,
                avatar,
                first_name,
                last_name,
                email,
                gender,
                birthday,
                language,
            }
            props.onAddContact(newContact)

            setFname('')
            setLname('')
            setEmail('')
            setGender('')
            setBirth('')
            setLang('')

        } else {
            alert('Preencha todos os campos para adicionar novo contato!')
        }
    }
    
    return (
        <>
            Avatar Url<input type='text' 
                onChange={e => setAvatar(e.target.value)} value={avatar}/>
            <br />
            First Name<input type='text' 
                onChange={e => setFname(e.target.value)} value={first_name}/>
            <br />
            Last Name<input type='text'
                onChange={e => setLname(e.target.value)} value={last_name} />
            <br />
            Email<input type='email'
                onChange={e => setEmail(e.target.value)} value={email} />
            <br />
            Gender: 
               <span> M<input type='radio' name='gender' value='M'
                    checked={gender=== 'M' ? true : false}
                    onChange={e => setGender(e.target.value)} /> F
                    <input type='radio' name='gender' value='F'
                    checked={gender=== 'F' ? true : false}
                    onChange={e => setGender(e.target.value)} /> </span>
            <br />
            Birthday: <input type='date' 
                onChange={e => setBirth(e.target.value)} value={birthday} />
            <br />
            Language: <input type='text' 
                onChange={e => setLang(e.target.value)} value={language}/>
            <br />
            <button className='btn' onClick={handleSubmit} >Add</button>
        </>
    )
}
