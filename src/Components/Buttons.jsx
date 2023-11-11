import PropTypes from "prop-types";
import React from "react";

export default function Buttons({ menuItems, }) {
  Buttons.propTypes = {
    menuItems: PropTypes.array.isRequired,
  };

  const [selectedGender, setSelectedGender] = React.useState('All');
  const [selectedLanguage, setSelectedLanguage] = React.useState('All');
  const [selectedBirthMonth, setSelectedBirthMonth] = React.useState('All');

  const uniqueGenders = ["All", ...new Set(menuItems.map((menu)=> menu.gender))]
  const uniqueLanguages = ["All", ...new Set(menuItems.map((menu)=> menu.language))]
  const uniqueMonths = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const filteredMenu = menuItems.filter((menu)=> {
    return (
      (selectedGender === 'All' || menu.gender === selectedGender) &&
      (selectedLanguage === 'All' || menu.language === selectedLanguage) &&
      (selectedBirthMonth === 'All' || new Date(menu.birthday).getMonth() + 1 === uniqueMonths.indexOf(selectedBirthMonth))
    )
  })



  return (
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Open Filter
</button>

 <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Filters</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div>
            <h4>Filter by Gender:</h4>
            {uniqueGenders.map((gender) => (
              <button
                key={gender}
                className={`btn ${selectedGender === gender ? 'btn-dark' : 'btn-light'} mx-2`}
                onClick={() => setSelectedGender(gender)}
              >
                {gender}
              </button>
            ))}
          </div>
          <div>
            <h4>Filter by Language:</h4>
            {uniqueLanguages.map((language) => (
              <button
                key={language}
                className={`btn ${selectedLanguage === language ? 'btn-dark' : 'btn-light'} mx-2`}
                onClick={() => setSelectedLanguage(language)}
              >
                {language}
              </button>
            ))}
          </div>
          <div>
            <h4>Filter by Birth Month:</h4>
            {uniqueMonths.map((month) => (
              <button
                key={month}
                className={`btn ${selectedBirthMonth === month ? 'btn-dark' : 'btn-light'} mx-2`}
                onClick={() => setSelectedBirthMonth(month)}
              >
                {month}
              </button>
            ))}
          </div>
          <h4>Filtered Contacts:</h4>
          <ul className="list-group">
            {filteredMenu.map((contact) => (
              <>
              <li className="list-group-item d-flex justify-content-between align-items-center" key={contact.id}>{contact.first_name} {contact.last_name}</li>
              </>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}