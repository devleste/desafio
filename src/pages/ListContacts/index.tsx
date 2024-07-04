import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectSmall } from "../../components/SelectSmall";
import { CardContact } from "../../components/CardContact";
import { Link, useNavigate } from "react-router-dom";
import { LANGUAGES } from "../../utils/languages";
import { MONTHS } from "../../utils/months";
import { AGES } from "../../utils/ages";
import { useContacts } from "../../context/Contact";
import { useFilters } from "../../hooks/useFilters";
import { ButtonLarge } from "../../components/ButtonLarge";
import { EmptyList } from "../../components/EmptyList";

export interface ListContactProps {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  language: string;
  gender: string;
  photo: string;
}

export function ListContacts() {
  const { contacts } = useContacts();
  const {
    ageFilter,
    birthdayMonthFilter,
    filteredContacts,
    filteredGenderStatistics,
    filteredLanguageStatistics,
    genderFilter,
    languageFilter,
    setAgeFilter,
    setBirthdayMonthFilter,
    setGenderFilter,
    setLanguageFilter,
    clearFilters,
  } = useFilters(contacts);
  const navigate = useNavigate();

  function handleGoStatistics() {
    navigate("/showstatistics", {
      state: { filteredGenderStatistics, filteredLanguageStatistics },
    });
  }

  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img
          src={logoImage}
          className={styles.image}
          alt="Logo Leste Telecom"
        />
      </Link>
      <div className={styles.filterContainer}>
        <form className={styles.filterForm}>
          <SelectSmall
            value={genderFilter}
            onChange={(event) => setGenderFilter(event.target.value)}
          >
            <option value="" disabled selected>
              Gender Filter
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </SelectSmall>
          <SelectSmall
            value={languageFilter}
            onChange={(event) => setLanguageFilter(event.target.value)}
          >
            <option value="" disabled selected>
              Language Filter
            </option>
            {LANGUAGES.map((language) => {
              return (
                <option id={language.id} value={language.value}>
                  {language.language}
                </option>
              );
            })}
          </SelectSmall>
          <SelectSmall
            value={ageFilter}
            onChange={(event) => setAgeFilter(event.target.value)}
          >
            <option value="" disabled selected>
              Age Filter
            </option>
            {AGES.map((age) => {
              return (
                <option id={age.id} value={age.value}>
                  {age.age}
                </option>
              );
            })}
          </SelectSmall>
          <SelectSmall
            value={birthdayMonthFilter}
            onChange={(event) => setBirthdayMonthFilter(event.target.value)}
          >
            <option value="" disabled selected>
              Birthday Filter
            </option>
            {MONTHS.map((month) => {
              return (
                <option id={month.id} value={month.value}>
                  {month.month}
                </option>
              );
            })}
          </SelectSmall>
        </form>
      </div>
      <div className={styles.counterContainer}>
        <ButtonLarge
          title="Limpar os filtros"
          variant="edit"
          onClick={clearFilters}
        />
        <ButtonLarge
          title="Ver as estatísticas"
          variant="confirm"
          onClick={handleGoStatistics}
        />
      </div>
      <div className={styles.main}>
        <h1 className={styles.titlePage}>Listar os contatos</h1>

        {filteredContacts.length === 0 ? (
          <div className={styles.emptyListContainer}>
            <EmptyList />
          </div>
        ) : (
          filteredContacts.map((contact) => {
            return (
              <div className={styles.listContactContainer}>
                <CardContact key={contact.id} data={contact} />
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}
