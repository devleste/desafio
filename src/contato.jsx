import React, { useState, useEffect } from 'react';
import { FaEdit, FaRegTrashAlt, FaUserPlus } from "react-icons/fa";
import './contatos.css';
import Api from './services/api';

function Contato() {

  const [contatos, setContatos] = useState([])

  useEffect(() => {
    
    Api.get(`${contatos}`)
      .then((response) => {
     
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  }, []);

  const totalGender = contatos.reduce((contagem, item) => {
    contagem[item.gender] = (contagem[item.gender] || 0) + 1;
    return contagem;
  }, {});

  const totalLanguage = contatos.reduce((contagem, item) => {
    contagem[item.language] = (contagem[item.language] || 0) + 1;
    return contagem;
  }, {});


  const [novoContato, setNovoContato] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    language: '',
    birthday: ''
  });

  const adicionarContato = () => {
    if (novoContato.first_name === "" || novoContato.last_name === "" || novoContato.gender === "" || novoContato.language === "") {
      return
    }
    setContatos([...contatos, { id: Date.now(), ...novoContato }]);
    setNovoContato({ first_name: '', last_name: '', gender: '', language: '', birthday: '' });
  };

  const excluirContato = (id) => {
    const novaLista = contatos.filter((contato) => contato.id !== id);
    setContatos(novaLista);
  };

  const editarContato = (id) => {
    const contato = contatos.find((c) => c.id === id);
    setNovoContato({
      first_name: contato.first_name,
      last_name: contato.last_name,
      gender: contato.gender,
      language: contato.language,
      birthday: contato.birthday,
    });
    excluirContato(id);
  };

  return (
    <div className="contatos-container">

      <h1>Lista de Contatos</h1>

      <ul className="contato-list">
        {contatos.map((contato) => (
          <li key={contato.id} className="contato-item">
            <div className="contato-nome">
              <div >
                Nome: {contato.first_name}
              </div>
              <div>
                Sobrenome: {contato.last_name}
              </div>
              <div>
                Gênero: {contato.gender}
              </div>
              <div>
                Idioma: {contato.language}
              </div>
              <div>
                Data de Nascimento: {contato.birthday}
              </div>
            </div>
            <div className="contato-button">
              <button className='editar' onClick={() => editarContato(contato.id)}>
                <FaEdit size={20} color='#000' />
              </button>
              <button className='excluir' onClick={() => excluirContato(contato.id)}>
                <FaRegTrashAlt size={20} color='#000' />

              </button>
            </div>

          </li>

        ))}
        
      </ul>
      <div className="adicionar-contato">
        <h2>Adicionar Novo Contato</h2>
        <input
          type="text"
          placeholder="Nome"
          value={novoContato.first_name}
          onChange={(e) => setNovoContato({ ...novoContato, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="sobrenome"
          value={novoContato.last_name}
          onChange={(e) => setNovoContato({ ...novoContato, last_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gênero"
          value={novoContato.gender}
          onChange={(e) => setNovoContato({ ...novoContato, gender: e.target.value },)}
        />
        <input
          type="text"
          placeholder="Idioma"
          value={novoContato.language}
          onChange={(e) => setNovoContato({ ...novoContato, language: e.target.value })}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={novoContato.birthday}
          onChange={(e) => setNovoContato({ ...novoContato, birthday: e.target.value })}
        />
        <button onClick={adicionarContato}><FaUserPlus size={20} color='#000' /></button>
      </div>
      <div className='resumo'>
          <p>Total de Gêneros:</p>
          <div>
            {Object.keys(totalGender).map(gender => (
              <p key={gender}>{gender}: {totalGender[gender]}</p>
            ))}
          </div>
          <p>Total de Idiomas:</p>
          <div>
            {Object.keys(totalLanguage).map(language => (
              <p key={language}>{language}: {totalLanguage[language]}</p>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Contato