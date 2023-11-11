import PropTypes from "prop-types";
import useSWR from "swr";


export default function Navbar() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(
    "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060",
    fetcher
  );

  const genderCount = {};
  const languageCount = {};

  if (!data) {
    return <div>Loading...</div>;
  }

  data.forEach((item) => {
    genderCount[item.gender] = (genderCount[item.gender] || 0) + 1;
    languageCount[item.language] = (languageCount[item.language] || 0) + 1;
  });

  Navbar.propTypes = {
    setSelectedCategory: PropTypes.func.isRequired,
    setGenderFilter: PropTypes.func.isRequired,
    setLanguageFilter: PropTypes.func.isRequired,
    setAgeFilter: PropTypes.func.isRequired,
    setBirthdayFilter: PropTypes.func.isRequired,
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-light">
        <a className="navbar-brand text-success" href="#">
          Leste Telecom
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home 
              </a>
            </li>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Statistics
            </button>

            <div
              className="modal fade"
              id="exampleModalLong"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                    Statistic
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <h3>Count Gender:</h3>
                <ul className="list-group">
                {Object.entries(genderCount).map(([gender, count]) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={gender}>{`${gender}: ${count}`}</li>
                ))}
              </ul>
              <h3>Count Language:</h3>
              <ul className="list-group">
                {Object.entries(languageCount).map(([language, count]) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={language}>{`${language}: ${count}`}</li>
                ))}
              </ul>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
