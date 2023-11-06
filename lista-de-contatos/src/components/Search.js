import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';

function Search() {
  const { searchTerm, setSearchTerm, birthday, language } = useContext(ContatosContext);

  // calculo das idades
  const calculateAge = (dateB) => {
    const currentDate = new Date();
    const birthDateObj = new Date(dateB);
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInYears = ageInSeconds / (365 * 24 * 60 * 60);
    const age = Math.floor(ageInYears); // Arredonda a idade para baixo
    return age;
  };

  // Calcular e ordenar as idades
  const ages = Array.isArray(birthday) ? birthday.map(calculateAge) : [];
  const sortedAges = ages.slice().sort((a, b) => a - b);

  // extrair os meses das datas
  if (!Array.isArray(birthday)) {
    return <div>Birthday data is not valid.</div>;
  }
  const months = birthday.map((date) => {
    const parts = date.split('-');
    return parseInt(parts[1], 10);
  });

  // cria um novo array com valores únicos e em ordem crescente
  const monthsAsIntegers = [...new Set(months)].sort((a, b) => a - b);

  return (
    <div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={searchTerm.gender}
          onChange={(e) => setSearchTerm({ ...searchTerm, gender: e.target.value })}
          required
        >
          <option value={''}>Todos</option>
          <option value={'F'}>Feminino</option>
          <option value={'M'}>Masculino</option>
        </select>
      </div>
      <div>
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={searchTerm.language}
          onChange={(e) => setSearchTerm({ ...searchTerm, language: e.target.value })}
          required
        >
          <option value={''}>Todos</option>
          {language?.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <select
          id="age"
          name="age"
          value={searchTerm.age}
          onChange={(e) => setSearchTerm({ ...searchTerm, age: e.target.value })}
          required
        >
          <option value={''}>Todas</option>
          {sortedAges.map((age, index) => (
            <option key={index} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="birthday">birthday month:</label>
        <select
          id="birthday"
          name="birthday"
          value={searchTerm.birthday}
          onChange={(e) => setSearchTerm({ ...searchTerm, birthday: e.target.value })}
          required
        >
          <option value={''}>Todos</option>
          {monthsAsIntegers.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Search;