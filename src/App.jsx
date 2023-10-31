import axios from 'axios';
import React from 'react';
import logo from './assets/logo.png';
import './App.css';


export default function App() {
  const initialForm = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    language: '',
    avatar: '',
    birthday: '',
  };

  const [data, setData] = React.useState(() => {
    const local = localStorage.getItem('data');
    if (local) {
      return JSON.parse(local);
    }
  });
  const [form, setForm] = React.useState(JSON.parse(localStorage.getItem('form')) || initialForm);

  const [search, setSearch] = React.useState({
    gender: '',
    language: '',
    age: '',
    birthday: '',
    birthdayMonth: '',
  });


  React.useEffect(() => {
    axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
      .then(({ data }) => {
        const local = localStorage.getItem('data');
        if (local) return;
        localStorage.setItem('data', JSON.stringify(data));
      });
  }, []);

  function filterData(array, object) {
    let newData = array;
    newData = newData.filter(({ id }) => id !== object.id);
    newData.push(object);
    return newData;
  }

  function setLocalStorage(contact) {
    let ls = JSON.parse(localStorage.getItem('data') || '[]');
    ls = filterData(ls, contact);

    localStorage.setItem('data', JSON.stringify(ls));

    localStorage.removeItem('form');
  }

  function createContact() {
    const contact = { id: data.length + 1, ...form };
    const newData = [...data, contact];
    setData(newData);
    setLocalStorage(contact);
  }

  function removeContac(id) {
    const removeContactFilter = data.filter(contact => contact.id !== id);

    setData(removeContactFilter);

    localStorage.setItem('data', JSON.stringify(removeContactFilter));

    localStorage.setItem('form', JSON.stringify(removeContactFilter));

  }

  function scrollEdit() {
    window.scrollTo({
      top: 0,
      left: 60,
      behavior: 'smooth',
    });
  }

  function populateForm(editId) {
    const contact = data.find(({ id }) => id === editId);
    setForm(contact);
    scrollEdit();
  }

  function updateContact(form) {
    const indexContact = data.filter((contact) => contact.id !== form.id);
    const newData = [...indexContact, form];
    setData(newData);
    setForm(initialForm);
    setLocalStorage(form);
  }

  function countGenders() {
    const genderCounts = data.reduce((counts, contact) => {
      counts[contact.gender] = (counts[contact.gender] || 0) + 1;
      return counts;
    }, {});

    return genderCounts;
  }

  function countLanguage() {
    const languageCounts = data.reduce((counts, contact) => {
      counts[contact.language] = (counts[contact.language] || 0) + 1;
      return counts;
    }, {});

    return languageCounts;
  }

  function searchContact() {
    let filterData = data.filter((contact) => {
      if (search.gender && contact.gender !== search.gender) {
        return false;
      }
      if (search.language && contact.language.toLowerCase() !== search.language.toLowerCase()) {
        return false;
      }
      if (search.birthday && contact.birthday !== search.birthday) {
        return false;
      }

      if (search.age) {
        const today = new Date();
        const birthDate = new Date(contact.birthday);
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age < parseInt(search.age, 10)) {
          return false;
        }
      }

      if (search.birthdayMonth) {
        const birthDate = new Date(contact.birthday);
        const month = birthDate.getMonth() + 1;

        if (month !== parseInt(search.birthdayMonth, 10)) {
          return false;
        }
      }
      return true;
    });

    setData(filterData);
  }

  function clearFilter() {
    setSearch({
      gender: '',
      language: '',
      age: '',
      birthdayMonth: '',
    });
    // searchContact();
  }

  function handleOnChange(e) {
    const temporaryForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(temporaryForm);
    localStorage.setItem('form', JSON.stringify(temporaryForm));
  }

  function handleFilterContact(e) {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createContact(form);
  }

  return (
    <div>
      <div className='logo'>
        <img className='logo-img' src={logo} alt="logo" />
      </div>
      <h3 className='add'>Adicionar novo contato</h3>
      <div className='add-form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='first-name'>Nome*</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={form.first_name}
              onChange={handleOnChange}
              placeholder='Seu primeiro no aqui'
              required
            />
            <label className='last-name'>Sobrenome*</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={form.last_name}
              onChange={handleOnChange}
              placeholder='Seu sobrenome no aqui'
              required
            />
          </div>
          <div>
            <label className='email'>Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              value={form.email}
              onChange={handleOnChange}
              placeholder='exemplo@email.com'
              required
            />
          </div>
          <div id='gender'>
            <label className='gender'>Genero* </label>
            <label className='gender-male'>M</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value='Male'
              checked={form.gender === 'M'}
              onChange={handleOnChange}
              required
            />
            <label className='gender-female'>F</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value='F'
              checked={form.gender === 'F'}
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label className='language'>Idioma*</label>
            <input
              type="text"
              name="language"
              id="language"
              value={form.language}
              onChange={handleOnChange}
              placeholder='Seu idioma'
              required
            />
            <label className='avatar'>Avatar*</label>
            <input
              type="url"
              name="avatar"
              id="avatar"
              value={form.avatar}
              onChange={handleOnChange}
              placeholder='URL da imagem'
              required
            />
          </div>
          <div>
            <label className='birthday'>Aniversário*</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={form.birthday}
              onChange={handleOnChange}
              required
            />
          </div>
          <button
            type="submit"
            className='btn-add'
          >
            Adicionar novo
          </button>

        </form>
        <button
          type="button"
          onClick={() => updateContact(form)}
        >
          Atualizar
        </button>
      </div>
      <h3 className='filter'>Filtro</h3>
      <div className='filter-form'>
        <form>
          <div className='filter-gender'>
            <label className='gender-filter'>Gênero:</label>
            <select
              name="gender"
              id="gender-filter"
              value={search.gender}
              onChange={handleFilterContact}>
              <option value="">Todos</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>

            <label className='language-filter'>Idioma:</label>
            <input
              type="text"
              name="language"
              id="language-filter"
              value={search.language}
              onChange={handleFilterContact}
            />
          </div>
          <div className='filter-age-birthday'>
            <label className='age-filter'>Idade:</label>
            <input
              type="number"
              name="age"
              id="age-filter"
              value={search.age}
              onChange={handleFilterContact}
            />

            <label className='birthday-filter'>Mês de Aniversário:</label>
            <select
              name="birthdayMonth"
              id="birthday-filter"
              value={search.birthdayMonth}
              onChange={handleFilterContact}
            >
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
          </div>
          <button
            className='btn-filter'
            type='button'
            onClick={searchContact}
          >
            Filtrar
          </button>
          <button
            className='btn-clear'
            onClick={clearFilter}
          >
            Limpar Filtro
          </button>
        </form>
      </div>
      <h3 className='statistc'>Estatisticas</h3>
      <div>
        <h3 className='title-gender'>Contagem de Gênero</h3>
        <ul className='card'>
          {Object.entries(countGenders()).map(([gender, count]) => (
            <li className='card-info' key={gender}>
              <span className='gender-list'>{`${gender}`}</span>
              <span className='count'>{`${count}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='title-language'>Contagem de Idiomas</h3>
        <ul className='card'>
          {Object.entries(countLanguage()).map(([language, count]) => (
            <li className='card-info' key={language}>
              <span className='language-list'>{`${language}`}</span>
              <span className='count'>{`${count}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <h3 className='title-table'>Lista da Leste Contact</h3>
      <div className='resposive-table'>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Gênero</th>
              <th>Idioma</th>
              <th>Aniversário</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length !== 0 ? (
              data.map(({ id, first_name, last_name, email, gender, language, avatar, birthday }) => (
                <tr key={id}>
                  <td>
                    <div className='image-avatar'>
                      <img
                        className='avatar-img'
                        src={avatar}
                        alt={first_name} />
                    </div>
                  </td>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{email}</td>
                  <td>{gender}</td>
                  <td>{language}</td>
                  <td>{birthday}</td>
                  <td>
                    <span className='btn-edit' onClick={() => populateForm(id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                      </svg>

                    </span>
                    <span className='btn-delete' onClick={() => removeContac(id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <p>Nenhum contato encontrado.</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}