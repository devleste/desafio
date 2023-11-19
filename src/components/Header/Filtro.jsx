import React, { useState } from "react";
import { BsFilterCircle } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs"
import LogoLeste from "../../logo.png";


function Filtro({contacts}) {

const [filtrarContact, setFiltrarContact] = useState(false);
const [selectedGender, setSelectedGender] = useState("");
const [selectedLanguage, setSelectedLanguage] = useState("");
const [selectedNascimento, setSelectedNascimento] = useState("");
const [statistical, setStatistical] =useState(false);

//função para filtro de contatos
const filterContacts = () => {
    if (selectedGender === "" && selectedLanguage === "" && selectedNascimento === "") {
        return ""; 
    }

    const filteredContacts = contacts.filter((contact) => {
        const genderCondition = selectedGender === "" || contact.gender === selectedGender;
        const languageCondition = selectedLanguage === "" || contact.language === selectedLanguage;
        const nascimentoCondition = selectedNascimento === "" || contact.birthday === selectedNascimento;

        return genderCondition && languageCondition && nascimentoCondition;
    }).map((contact) => {
        return `<img src=${contact.avatar} />` + "<br>" +
        contact.first_name + " " + 
        contact.last_name + " <br>Gender: " +
        contact.gender  + " <br>E-mail: " +
        contact.email + " <br>Idioma: " +
        contact.language + " <br> nascimento: " + 
        contact.birthday;
    });
    
    const resultElement = document.getElementById("resultFilter");
    resultElement.innerHTML = filteredContacts.join("<br>" );
};


  //contagem estatística
const genderCounts = calculateGenderCounts();
const languageCounts = calculateLanguageCounts();

function calculateGenderCounts() {
    const genderCounts = {};
    contacts.forEach((contact) => {
    const gender = contact.gender;
    if (gender) {
        genderCounts[gender] = (genderCounts[gender] || 0) + 1;
    }
    });
    return genderCounts;
}

function calculateLanguageCounts() {
    const languageCounts = {};
    contacts.forEach((contact) => {
    const language = contact.language;
if (language) {
    languageCounts[language] = (languageCounts[language] || 0) + 1;
}
});
    return languageCounts;
}

return(
    <>
    <header>
        < BsGraphUpArrow className="statistical" onClick={() => setStatistical(true)} />
        <h1 style={{textAlign: 'center'}}>JM Contact</h1>
        <BsFilterCircle className="filter" onClick={() => setFiltrarContact(true)} />  
    </header>

        {statistical && (<div className="statistics-container">
            <h2>Estatistical summary</h2>
            < BsXCircle 
            className="fechar-statistic" 
            onClick={() => setStatistical(false)}
            /> 
            <div>
                <p>Genders:</p>
                <ul>

                    {Object.entries(genderCounts).map(([gender, count]) => (
                    <li key={gender}>
                        {gender}: {count}
                    </li>
                    ))}

                </ul>
                </div>
                <div>
                <p>Language:</p>
                <ul>

                    {Object.entries(languageCounts).map(([language, count]) => (
                    <li key={language}>
                        {language}: {count}
                    </li>
                    ))}

                </ul>
                </div>
        </div>)}

        {filtrarContact && (
            <div className="filtros-contact">
                <div className="sub-header">
                    <h3>
                        Filtre seus contatos
                    </h3>
                        < BsXCircle 
                        className="fechar-filtro" 
                        onClick={() => setFiltrarContact(false)}
                        /> 
                </div>
                <form>
                    <label htmlFor="gender">Gender</label>
                    <select 
                    name="gender" 
                    id="gender" 
                    value={selectedGender} 
                    onChange={(e) => setSelectedGender(e.target.value) }
                    >
                        <option value="">Show All</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                    <label htmlFor="language">Language</label>
                    <select 
                    name="language" 
                    id="language"
                    value={selectedLanguage} 
                    onChange={(e) => setSelectedLanguage(e.target.value) }
                    >
                        <option value="" >Show All </option>
                        {contacts.map((contact) => (
                        <option key={contact.id} >
                        
                            <div className="nameLanguage" >
                            <h4>{contact.language} </h4>
                            </div>
                            
                        </option>
                        ))}
                    </select>
                    
                    <label htmlFor="birthday">Birthday month</label>
                    <select 
                    name="nascimento" 
                    id="nascimento"
                    value={selectedNascimento} 
                    onChange={(e) => setSelectedNascimento(e.target.value)}
                    >
                    <option value="" >Show All </option>
                        {contacts.map((contact) => (
                        <option key={contact.id} >
                        
                            <div className="nameLanguage" >
                            <h4>{contact.birthday} </h4>
                            </div>
                            
                        </option>
                        ))}
                    </select>
                    <button className="button-filter" type="button" onClick={() => filterContacts()}>Filter</button>
                </form>

                <div id="resultFilter" >
                </div>   
            </div>
        )}
    </>
)
}

export default Filtro;
