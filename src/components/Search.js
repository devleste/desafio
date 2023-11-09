import React, { useContext } from 'react';
import ContatosContext from '../context/ContatosContext';
import styles from './Search.module.css';

function Search() {
  const { searchTerm, setSearchTerm, birthday, language } = useContext(ContatosContext);

  const calculateAge = (dateB) => {
    const currentDate = new Date();
    const birthDateObj = new Date(dateB);
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInYears = ageInSeconds / (365 * 24 * 60 * 60);
    const age = Math.floor(ageInYears);
    return age;
  };

  const ages = Array.isArray(birthday) ? birthday.map(calculateAge) : [];
  const sortedAges = ages.slice().sort((a, b) => a - b);

  if (!Array.isArray(birthday)) {
    return <div>Birthday data is not valid.</div>;
  }
  const months = birthday.map((date) => {
    const parts = date.split('-');
    return parseInt(parts[1], 10);
  });

  const monthsAsIntegers = [...new Set(months)].sort((a, b) => a - b);

  return (
    <fieldset className={styles.search}> 
    <legend>Filter:</legend>
    <div>
      <div className={styles.term}>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={searchTerm.gender}
          onChange={(e) => setSearchTerm({ ...searchTerm, gender: e.target.value })}
          required
        >
          <option value={''}>All</option>
          <option value={'F'}>Female</option>
          <option value={'M'}>Male</option>
        </select>
      </div>
      <div className={styles.term}>
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={searchTerm.language}
          onChange={(e) => setSearchTerm({ ...searchTerm, language: e.target.value })}
          required
        >
          <option value={''}>All</option>
          {language?.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div>
      <div className={styles.term}>
        <label htmlFor="age">Age:</label>
        <select
          id="age"
          name="age"
          value={searchTerm.age}
          onChange={(e) => setSearchTerm({ ...searchTerm, age: e.target.value })}
          required
        >
          <option value={''}>All</option>
          {sortedAges.map((age, index) => (
            <option key={index} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.term}>
        <label htmlFor="birthday">Birthday Month:</label>
        <select
          id="birthday"
          name="birthday"
          value={searchTerm.birthday}
          onChange={(e) => setSearchTerm({ ...searchTerm, birthday: e.target.value })}
          required
        >
          <option value={''}>All</option>
          {monthsAsIntegers.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
    </fieldset>
  )
}

export default Search;