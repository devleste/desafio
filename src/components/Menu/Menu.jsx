import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactsContext } from "../../context/context";
import MenuStyles from "./MenuStyles";

const Menu = () => {

    const {
        all,
        setAddUser,
        setAge,
        setGender,
        setLanguage,
        setBirthDay,
        age,
        gender,
        language,
        birthDay,
        addUser,
        avatar,
        setAvatar,
        setName,
        setLastName,
        setEmail,
        setGenderValue,
        setLanguageValue,
        setBirthDayValue,
        addNewContact,
        setSearch,
        filtredResultsByGender,
        filtredResultsByLanguage,
        filtredResultsByAge,
        filtredResultsByBirthday,
        setFiltredResults,
        setRandomAvatar,
        randomAvatar,
    } = useContext(ContactsContext);

    useEffect(()=>{
        setFiltredResults(all);
    },[])

    useLayoutEffect(() => {
        setGenderFilter();
    }, [gender])

    useLayoutEffect(() => {
        setLanguageFilter();
    }, [language])

    useLayoutEffect(() => {
        setAgeFilter();
    }, [age])

    useLayoutEffect(() => {
        setBirthDayFilter();
    }, [birthDay])

    const [filter, setFilter] = useState(false);

    
    const handleFilter = () => {
        setFilter(filter ? false : true);
    }
    
    const handleAddContact = () => {
        setAddUser(addUser ? false : true);
    }
    
    const setGenderFilter = (e) => {
        if (gender === 'Nenhum') {
            setFiltredResults(all);
            return
        }
        setFiltredResults(filtredResultsByGender)
    }
    const setBirthDayFilter = (e) => {
        if (birthDay === 'Nenhum') {
            setFiltredResults(all);
            return
        }
        setFiltredResults(filtredResultsByBirthday)
    }
    const setAgeFilter = (e) => {
        if (age === 'Nenhum') {
            setFiltredResults(all);
            return
        }
        setFiltredResults(filtredResultsByAge)
    }
    const setLanguageFilter = (e) => {
        if (language === 'Nenhum') {
            setFiltredResults(all);
            return
        }
        setFiltredResults(filtredResultsByLanguage)
    }
    
    const now = new Date();

    return (
        <MenuStyles>
            <div className="menu">
                <Link to="/">
                    <img className="menuIcon" alt="menu" src="13590446331543238903.svg" />
                </Link>
                <div className="func">
                    <div className="searchContact">
                        <input
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Digite aqui o nome do contato." />
                    </div>
                    <button
                        onClick={handleFilter}
                        className="filter">Adicionar Filtros</button>
                    {filter &&
                        <div className="filterMenu">
                            <div className="gender">
                                <label>Gender:</label>
                                <select value={gender} onChange={e => setGender(e.target.value)}>
                                    <option value="Nenhum">Nenhum</option>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </select>
                            </div>
                            <div className="language">
                                <label>Language:</label>
                                <select value={language} onChange={e => setLanguage(e.target.value)}>
                                <option value="Nenhum">Nenhum</option>
                                    {all.map((item) => {
                                        return (
                                            <option>{item.language}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="age">
                                <label>Age:</label>
                                <select value={age} onChange={e => setAge(parseInt(e.target.value))}>
                                <option value="Nenhum">Nenhum</option>
                                    {all.map((item) => {
                                        return (
                                            <option>{now.getMonth() >= item.birthday.split("-")[1] ?
                                                now.getFullYear() - item.birthday.split("-")[0]
                                                : (now.getFullYear() - item.birthday.split("-")[0]) - 1
                                            }</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="birthday">
                                <label>Birthday:</label>
                                <select value={birthDay} onChange={e => setBirthDay(e.target.value)}>
                                <option value="Nenhum">Nenhum</option>
                                    {all.map((item) => {
                                        return (
                                            <option>{item.birthday.split("-")[1]}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>}
                    <button
                        onClick={handleAddContact}
                        className="addUser">Adicionar um novo contato</button>
                    {addUser &&
                        <div className="addContact">
                        <input
                                value={avatar}
                                placeholder="URL do avatar"
                                onChange={e => setAvatar(e.target.value)}
                            />
                            <div className="randomAvt">
                            <label>Avatar Aleatório</label>
                            <input
                            className="box"
                            checked={randomAvatar === true}
                            onChange={e=>setRandomAvatar(randomAvatar ? false : true)}
                            type="checkbox"/>
                            </div>
                            <input
                                placeholder="Name"
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                placeholder="Lastname"
                                onChange={e => setLastName(e.target.value)}
                            />
                            <input
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <div className="gender">
                                <label>Gender:</label>
                                <select
                                    onChange={e => setGenderValue(e.target.value)}
                                >
                                    <option>M</option>
                                    <option>F</option>
                                </select>
                            </div>
                            <input
                                onChange={e => setLanguageValue(e.target.value)}
                                placeholder="Language"
                            />
                            <input
                                onChange={e => setBirthDayValue(e.target.value)}
                                placeholder="Birthday YYYY-MM-DD"
                            />
                            <button
                                onClick={addNewContact}
                            >Adicionar</button>
                        </div>}
                </div>
            </div>
        </MenuStyles>
    )
}

export default Menu;