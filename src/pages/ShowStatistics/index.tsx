import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Footer } from "../../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface GenderStatistic {
  gender: string;
  count: number;
}

interface LanguageStatistic {
  language: string;
  count: number;
}

export function ShowStatistics() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filteredGenderStatistics, filteredLanguageStatistics } =
    location.state || {
      filteredGenderStatistics: [],
      filteredLanguageStatistics: [],
    };

  function handleGoBackListContatcs() {
    navigate("/listcontact");
  }

  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img
          src={logoImage}
          alt="Logo Leste Telecom"
          className={styles.image}
        />
      </Link>
      <h1 className={styles.title}>Estatísticas</h1>
      <div className={styles.main}>
        <div className={styles.genderStatisticsContainer}>
          <div className={styles.titleContainer}>
            <strong className={styles.subtitle}>
              Estatísticas por gêneros
            </strong>
          </div>
          <table className={styles.tableGender}>
            <tr className={styles.tableHeader}>
              <th>Gêneros</th>
              <th>Números</th>
            </tr>
            {filteredGenderStatistics.map(
              (genderStatistic: GenderStatistic) => (
                <tr key={genderStatistic.gender} className={styles.tableColumn}>
                  <td>{genderStatistic.gender}</td>
                  <td>{genderStatistic.count}</td>
                </tr>
              )
            )}
          </table>
        </div>
        <div className={styles.languageStatisticsContainer}>
          <div className={styles.titleContainer}>
            <strong className={styles.subtitle}>
              Estatísticas por idiomas
            </strong>
          </div>
          <table className={styles.tableLanguage}>
            <tr className={styles.tableHeader}>
              <th>Idiomas</th>
              <th>Números</th>
            </tr>
            {filteredLanguageStatistics.map(
              (languageStatistic: LanguageStatistic) => (
                <tr
                  key={languageStatistic.language}
                  className={styles.tableColumn}
                >
                  <td>{languageStatistic.language}</td>
                  <td>{languageStatistic.count}</td>
                </tr>
              )
            )}
          </table>
        </div>
      </div>
      <button
        className={styles.buttonGoBack}
        onClick={handleGoBackListContatcs}
      >
        voltar para as listas de contatos
      </button>
      <Footer />
    </div>
  );
}
