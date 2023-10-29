import React from "react";

function ContactFilter({
  filterGender,
  filterLanguage,
  filterAge,
  filterMonth,
  onGenderFilterChange,
  onLanguageFilterChange,
  onAgeFilterChange,
  onMonthFilterChange,
  contacts, // Recebendo a lista de contatos filtrados como prop
}) {
  // Função para calcular a contagem de contatos por idioma
  const calculateLanguageStats = () => {
    const languageStats = {};

    contacts.forEach((contact) => {
      const language = contact.language;

      if (language) {
        if (languageStats[language]) {
          languageStats[language]++;
        } else {
          languageStats[language] = 1;
        }
      }
    });

    return languageStats;
  };

  const languageStats = calculateLanguageStats();
  const languages = Object.keys(languageStats);

  const handleGenderChange = (event) => {
    event.preventDefault();
    onGenderFilterChange(event.target.value);
  };

  const handleLanguageChange = (event) => {
    event.preventDefault();
    onLanguageFilterChange(event.target.value);
  };

  const handleAgeChange = (event) => {
    event.preventDefault();
    onAgeFilterChange(event.target.value);
  };

  const handleMonthChange = (event) => {
    event.preventDefault();
    onMonthFilterChange(event.target.value);
  };

  return (
    <div>
      <label>
        Gênero:
        <select value={filterGender} onChange={handleGenderChange}>
          <option value="">Todos</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </label>

      <label>
        Idioma:
        <select value={filterLanguage} onChange={handleLanguageChange}>
          <option value="">Todos</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>

      <label>
        Idade:
        <select value={filterAge} onChange={handleAgeChange}>
          <option value="">Todas</option>
          <option value="18-30">18-30</option>
          <option value="31-50">31-50</option>
          <option value="51+">51+</option>
          {/* Adicione outras faixas etárias conforme necessário */}
        </select>
      </label>

      <label>
        Mês de Aniversário:
        <select value={filterMonth} onChange={handleMonthChange}>
          <option value="">Todos</option>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
      </label>

      {/* Resumo Estatístico de Idiomas */}
      <div>
        <h3>Resumo Estatístico</h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>
              {language}: {languageStats[language]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactFilter;
