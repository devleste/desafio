import React from 'react'
import {FaRegWindowClose, FaUserEdit, FaUser, FaMailBulk, FaMale, FaFemale, FaBirthdayCake, FaLanguage} from 'react-icons/fa'
import '../App.css'

export default function ItemList (props) {

    function iconGender(){
        return props.gender === 'Male' ? <p><FaMale/> {props.gender}</p>
        : <p><FaFemale/>{props.gender}</p>
    }

    return(
        <>
        <div className='card'>
            <div className='icons'>
                <h3 className='delBtn' onClick={props.removeContact}><FaRegWindowClose /></h3>
                <h3 className='editBtn' onClick={props.editContact}><FaUserEdit /></h3>
            </div>
            <img alt='avatar' src={props.avatar} />
            <div className='cardInfo'>
                <h4><FaUser/> {props.first_name} {props.last_name}</h4>
                <p><FaMailBulk/> {props.email}</p>
                {iconGender()}
                <p><FaBirthdayCake/> {props.birthday}</p>
                <p><FaLanguage/> <span className='lang'>
                        {props.language}
                    </span>
                </p>
            </div>
        </div>
        </>
    )
}