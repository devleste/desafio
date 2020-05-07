import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/logo.png'
import { FaMale, FaFemale, FaLanguage } from 'react-icons/fa'

export default function Resume (props) {

    const [lang, setLang] = useState([])
    const [genderM, setMale] = useState(0)
    const [genderF, setFemale] = useState(0)

    const getLang = async () => {
        let langs = []
    
        await props.array.map(i => {
          if(!langs.includes(i.language))
            langs.push(i.language)
        })
        setLang(langs)
    }

    const getCountLang = (lang) => {
        let countLang = []
        props.array.map(i => {
            if(i.language === lang)
                countLang.push(i)
        })
        return countLang.length
    }

    const getContGender = async () => {
        let male = []
        let female = []

        await props.array.map(i => {
            if(i.gender === 'M')
                male.push(i)
            if(i.gender === 'F')
                female.push(i)
        })
        setMale(male.length)
        setFemale(female.length)        
    }

    useEffect(() => {
        getLang()
        getContGender()
    }, [props.array])

    return(
        <div className='resume'>
            <img src={logo} width='150' />
            <div className='gender'>
                <div>
                    <h2><FaMale/> Male: </h2>
                    <p>{genderM}</p>
                </div>
                
                <div>
                    <h2><FaFemale/> Female: </h2>
                    <p>{genderF}</p>
                </div>
            </div>
            <div className='language'>
                <h2><FaLanguage/> Language: </h2>
                {
                    lang.map((i, index) => 
                        <p key={index}>{i}: {getCountLang(i)}</p>
                    )
                }
            </div>
        </div>
    )
}