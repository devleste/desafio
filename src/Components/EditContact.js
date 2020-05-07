import React, { useState, useEffect } from 'react'

export default function EditContact (props) {

    
  const [toEdit, setToEdit] = useState()

  useEffect(() => {
      setItemToEdit()
  }, [props.item])

  const setItemToEdit = () => {
      setToEdit(props.item)
      console.log(toEdit)
  }

  const onEdit = e => {
    let name = e.target.name
    let value = e.target.value

    switch (name) {
      case 'avatar':
        toEdit.avatar = value
        break
      case 'first_name':
        toEdit.first_name = value
        break
      case 'last_name':
        toEdit.last_name = value
        break
      case 'email':
        toEdit.email = value
        break
      case 'gender':
        toEdit.gender = value
        break
      case 'language':
        toEdit.language = value
        break
      case 'birthday':
        toEdit.birthday = value
        break
    }
}

const onSaveEdit = () => {
    props.onSaveEdit(toEdit)
    setToEdit('')
  }


    return(
            toEdit ?
        <>
            <h3>Altere o campo que deseja!</h3>
            Avatar Url
            <input onChange={onEdit} placeholder={toEdit.avatar} name='avatar' className='input' type='text' />
            <br />
            First Name
            <input onChange={onEdit} placeholder={toEdit.first_name} name='first_name' className='input' type='text' />
            <br />
            Last Name
            <input  onChange={onEdit} placeholder={toEdit.last_name} name='last_name' className='input' type='text'/>
            <br />
            Email
            <input onChange={onEdit} placeholder={toEdit.email} name='email' className='input' type='email'/>
            <br />
            Gender: 
            <span>M<input onChange={onEdit}
            type='radio' name='gender' value='M' /> F
            <input onChange={onEdit}
            type='radio' name='gender' value='F'/></span>
                <br />
            Birthday:
            <input onChange={onEdit} placeholder={toEdit.birthday} name='birthday' className='input' type='date'/>
            <br />
            Language:
            <input onChange={onEdit} placeholder={toEdit.language} name='language' className='input' type='text' />
            <br />
            <div className='modalBtn'>
                <button id='cancel' className='btn'>Cancel</button>
                <button className='btn' onClick={onSaveEdit}>Save</button>
            </div>
        </> : null
    )
}