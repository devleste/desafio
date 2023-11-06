import React, { useState, useEffect } from 'react';
import FilterSelect from '../filter/FilterSelect';
import './List.css';
import jsonData from '../../api/api.json';
import EditComponentSvg from '../svg/Edit';
import EditComponent from '../modals/edit/Edit';
import DeleteComponent from '../svg/Delete';
import DialogComponent from '../modals/delete/DeleteDialog';
import AddComponent from '../svg/Add';
import StatisticsComponent from '../modals/statistics/Statistics';
const ListComponent = () => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [filterBirthYear, setFilterBirthYear] = useState('');
  const [isOpenStatistics, setIsOpenStatistics] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [dialog, setDialog] = useState({
    message: '',
    isLoading: false,
  });

  const [selectedUserId, setSelectedUserId] = useState(null);
  const userQuantity = data.filter((item) => item.first_name).length;
  const uniqueGenders = new Set();
  const manQuantity = data.filter((item) => item.gender == 'M').length;
  const womanQuantity = data.filter((item) => item.gender == 'F').length;
  let userId = null;
  data.forEach((item) => {
    uniqueGenders.add(item.gender);
  });
  const genderQuantity = uniqueGenders.size;

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };

  const handleDelete = (id) => {
    setSelectedUserId(id);
    handleDialog('Are you sure you want to delete this user?', true);
  };

  const areYouSureYouWantToDelete = (choose) => {
    if (choose) {
      setData(data.filter((user) => user.id !== selectedUserId));
    }
    setFilterLanguage('');
    setFilterAge('');
    setFilterBirthYear('');
    handleDialog('', false);
  };

  const handleEdit = (id = null) => {
    setSelectedUserId(id);
    setIsOpenEdit(true);
  };

  const apiEndPoint =
    'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060';

  const calculateAge = (birthdate) => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const getData = async () => {
    //PREAZADO AVALIADOR, A API FORNECIDA TEM LIMITE DE 200 REQUESTS POR DIA, ENTÃO DEIXEI PREPARADO UMA LINHA DE CÓDIGO A SER DESCOMENTADA EM CASO DE A API TER ATINGIDO O LIMITE DE REQUESTS DURANTE A AVALIAÇÃO, NESSE CASO COMENTE O BLOCO TRY CATCH E DESCOMENTE O METODO setData(jsonData) QUE RECEBE DADOS DE UM JSON QUE SIMULA O RECEBIMENTO DE DADOS DE UMA API REST;
    try {
      const response = await fetch(apiEndPoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        setData(jsonResponse);
      }
    } catch (error) {
      console.error('Error fetching data: ' + error);
    }

    //setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  const uniqueLanguages = [...new Set(data.map((item) => item.language))];
  const uniqueAges = [
    ...new Set(data.map((item) => calculateAge(item.birthday))),
  ];
  const uniqueBirthYears = [
    ...new Set(data.map((item) => new Date(item.birthday).getFullYear())),
  ];

  const langQuantity = uniqueLanguages.length;

  const filteredData = data.filter(
    (user) =>
      (!filterName ||
        user.first_name.toLowerCase().includes(filterName.toLowerCase())) &&
      (!filterGender || user.gender === filterGender) &&
      (!filterLanguage ||
        user.language.toLowerCase().includes(filterLanguage.toLowerCase())) &&
      (!filterAge || calculateAge(user.birthday) === parseInt(filterAge, 10)) &&
      (!filterBirthYear ||
        new Date(user.birthday).getFullYear() ===
          parseInt(filterBirthYear, 10)),
  );

  return (
    <div className="container">
      <h1 style={{ fontStyle: 'italic' }}>Contact List</h1>
      {
        <div className="button-container">
          <button
            className="button-svg add-user"
            style={{ color: '#0B8B6A' }}
            onClick={() => handleEdit(null)} // Pass null to indicate creating a new user
          >
            <div>Create</div>
            <AddComponent />
          </button>

          <button
            className="button-svg statistics-button"
            style={{ color: '#0B8B6A' }}
            onClick={() => setIsOpenStatistics(true)}
          >
            Statistics
          </button>
        </div>
      }
      <StatisticsComponent
        open={isOpenStatistics}
        onClose={() => setIsOpenStatistics(false)}
        genderQuantity={genderQuantity}
        langQuantity={langQuantity}
        userQuantity={userQuantity}
        manQuantity={manQuantity}
        womanQuantity={womanQuantity}
      />

      <div className="filter-container">
        <FilterSelect
          filterValue={filterLanguage}
          filterOptions={uniqueLanguages}
          filterHandler={(e) => setFilterLanguage(e.target.value)}
          filterPlaceholder="All Languages"
          filterName="Language"
        />

        <FilterSelect
          filterValue={filterGender}
          filterOptions={['M', 'F']}
          filterHandler={(e) => setFilterGender(e.target.value)}
          filterPlaceholder="All Genders"
          filterName="Gender"
        />

        <FilterSelect
          filterValue={filterAge}
          filterOptions={uniqueAges}
          filterHandler={(e) => setFilterAge(e.target.value)}
          filterPlaceholder="All Ages"
          filterName="Age"
        />

        <FilterSelect
          filterValue={filterBirthYear}
          filterOptions={uniqueBirthYears}
          filterHandler={(e) => setFilterBirthYear(e.target.value)}
          filterPlaceholder="All Birth Years"
          filterName="Birth Year"
        />
      </div>

      <div className="contact-list">
        {filteredData.map((user, index) => (
          <div className="contact-card" key={index}>
            <img
              className="card-avatar"
              src={user.avatar}
              alt={user.first_name}
            />
            <div className="user-details">
              <p className="user-name">{user.first_name}</p>
              <p className="user-name">{user.last_name}</p>
              <p className="user-email">{user.email}</p>
            </div>
            <div className="user-info">
              <p>{user.gender}</p>
              <p>{user.language}</p>
              <p>{calculateAge(user.birthday)} years old</p>
              <p>{user.birthday}</p>
            </div>

            <div className="icons">
              <button
                className="button-svg"
                onClick={() => handleEdit(user.id)}
              >
                <EditComponentSvg />
              </button>
              <button
                className="button-svg"
                onClick={() => handleDelete(user.id)}
              >
                <DeleteComponent />
              </button>
            </div>
          </div>
        ))}
      </div>

      <EditComponent
        open={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
        userId={selectedUserId}
        data={data}
        setData={setData}
      />

      {dialog.isLoading && (
        <DialogComponent
          onDialog={areYouSureYouWantToDelete}
          message={dialog.message}
        />
      )}
    </div>
  );
};

export default ListComponent;
