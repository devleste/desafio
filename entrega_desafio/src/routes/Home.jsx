import { useState, useEffect } from "react"
import './Home.css'
import axios from "axios"
import ContatoCard from "../components/ContatoCard"
import Filter from "../components/Filter"
import Resumo from "../components/Resumo"
import useStateWithCallback from "../components/UseStateWithCallback"


const Home = () => {
  const [contatos, setContatos] = useStateWithCallback([]);
  const [filteredContatos, setFilteredContatos] = useState([]);
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    const cachedData = localStorage.getItem("contatos");

    if (cachedData) {
      setContatos(JSON.parse(cachedData));
    } else {
      try {
        const response = await axios.get(
          'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060'
        );
        const data = response.data;
        setContatos(data);
        console.log('Pegou na API')

        localStorage.setItem("contatos", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const applyFilters = ({ gender, language, month, age }) => {
    let filteredContacts = [...contatos];


  
    if (gender) {
      filteredContacts = filteredContacts.filter((contato) => contato.gender === gender);
    }
  
    if (language) {
      filteredContacts = filteredContacts.filter((contato) => contato.language === language);
    }
  
    if (month) {
      filteredContacts = filteredContacts.filter((contato) => {
        const now = new Date();
        // Defina o fuso horário para o Horário Padrão do Brasil (BRT - Brasília)
        now.setTime(now.getTime() - 3 * 60 * 60 * 1000);
    
        const contactBirthday = new Date(contato.birthday);
        // Defina o fuso horário para o Horário Padrão do Brasil (BRT - Brasília)
        contactBirthday.setTime(contactBirthday.getTime() - 3 * 60 * 60 * 1000);
    
        const contactMonth = contactBirthday.getMonth() + 1;
        const contactDay = contactBirthday.getDate();
    
        if (contactMonth === 1 && contactDay === 1) {
          return true; // Pessoas nascidas em 01/01
        }
    
        return contactMonth === Number(month);
      });
    }
  
    if (age) {
      const now = new Date();
      const ageRanges = age.split('-');
      const minAge = parseInt(ageRanges[0], 10);
    
      if (age === '56+') {
        filteredContacts = filteredContacts.filter((contato) => {
          const birthday = new Date(contato.birthday);
          const yearsDiff = now.getFullYear() - birthday.getFullYear();
    
          return yearsDiff >= minAge;
        });
      } else {
        const maxAge = parseInt(ageRanges[1], 10);
    
        filteredContacts = filteredContacts.filter((contato) => {
          const birthday = new Date(contato.birthday);
          const yearsDiff = now.getFullYear() - birthday.getFullYear();
    
          return yearsDiff >= minAge && yearsDiff <= maxAge;
        });
      }
    }
    
    setFilteredContatos(filteredContacts);
  };

  const confirmAndDeleteContato = (contatoId) => {
    // Exibe um alerta de confirmação
    const userConfirmed = window.confirm("Tem certeza que deseja excluir este contato?");

    // Se o usuário confirmou, proceda com a exclusão
    if (userConfirmed) {
      const updatedContatos = contatos.filter((contato) => contato.id !== contatoId);

      setContatos(updatedContatos);
      setFilteredContatos(updatedContatos);

      localStorage.setItem('contatos', JSON.stringify(updatedContatos));
    }
  };

  return (
    <div className="home-content">
      <h1 className="home-title">Leste Contact</h1>
      <Filter onFilter={applyFilters} />
      <Resumo contatos={ contatos} />
      <div className="contatosgrid">
      {filteredContatos.length > 0 ? (
        filteredContatos.map((contato) => (
          <ContatoCard key={contato.id} contato={contato} onDelete={() => confirmAndDeleteContato(contato.id)} />
        ))
      ) : (
        contatos.map((contato) => (
          <ContatoCard key={contato.id} contato={contato} onDelete={() => confirmAndDeleteContato(contato.id)} />
        ))
      )}
      </div>
    </div>
  );
}
export default Home;