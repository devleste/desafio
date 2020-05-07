import React, { useState, useEffect } from 'react'

export default function Filter (props) {

    const [lang, setLang] = useState([])
    const [age, setAge] = useState([])
    const [paramsFilter, setParamsFilter] = useState()

    var contacts = [...props.array]

    const langToFilter = async () => {
        let langs = []
    
        await props.array.map(i => {
          if(!langs.includes(i.language))
            langs.push(i.language)
        })
        setLang(langs)
      }

    const ageToFilter = async () => {
    let ages = []
    let today = new Date()
    let yearNow = today.getFullYear()

    props.array.map(i => {
        let birth = i.birthday.split('-')
        let yearBirth = birth[0]
        let age = yearNow - yearBirth
        if(!ages.includes(age))
        ages.push(age)
    })
    setAge(ages)
    }

    useEffect(() => {
        langToFilter()
        ageToFilter()
    }, [contacts.length > 0])

    function renderLang(){
        return(
        <optgroup name='language' label='Language'>
            {lang.map((i, index) => <option key={index} id='language' value={i}>{i}</option>)}
        </optgroup>
        )
    }
    function renderAge(){
        return(
        <optgroup name='age' label='Age'>
            {age.map((i, index) => <option key={index} name='age' value={i}>{i}</option>)}
        </optgroup>
        )
    }

    function setFilterValue(e){
        const value = e.target.value
        setParamsFilter(value)
    }

    function setFilter(e){
        e.preventDefault()
        const filtered = []

        contacts.map(item => {
            if(item.gender === paramsFilter || item.language === paramsFilter){
                filtered.push(item)
            }

            let birth = item.birthday.split('-')
            let yearNow = new Date().getFullYear()
            let age = yearNow - birth[0]
            if(age == paramsFilter)
                filtered.push(item)

            if(birth[1] === paramsFilter)
                filtered.push(item)

            if(paramsFilter === 'all')
                filtered.push(item)
        })

        props.onFilter(filtered)
    }


    return(
        <div>
            <select className='select' onChange={setFilterValue}>
                <option name='all' value='all'>All</option>
                <optgroup name='gender' label='Gender'>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                </optgroup>
                {renderLang()}
                {renderAge()}
                <optgroup name='birthday' label='Birthday'>
                    <option value='01'>Jan</option>
                    <option value='02'>Fev</option>
                    <option value='03'>Mar</option>
                    <option value='04'>Abr</option>
                    <option value='05'>Mai</option>
                    <option value='06'>Jun</option>
                    <option value='07'>Jul</option>
                    <option value='08'>Ago</option>
                    <option value='09'>Sep</option>
                    <option value='10'>Oct</option>
                    <option value='11'>Nov</option>
                    <option value='12'>Dec</option>
                </optgroup>
            </select>
            <button onClick={setFilter} className='btn'>Filter</button>
        </div>
    )
}