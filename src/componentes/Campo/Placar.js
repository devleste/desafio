import './Campo.css'
import React from 'react';

function Placar({lista}) {
  const contar = (lista=[]) => {
    return lista.reduce((contagem, cadastro) => {
      if (cadastro.gender in contagem.gender) {
        contagem.gender[cadastro.gender]++;
      } else {
        contagem.gender[cadastro.gender] = 1;
      }

      if (cadastro.language in contagem.language) {
        contagem.language[cadastro.language]++;
      } else {
        contagem.language[cadastro.language] = 1;
      }

      return contagem
    }, {
      gender: {},
      language: {}
    });
  };

  const contagem = contar(lista)

  const calcularTotal = (lista) => Object.values(lista).reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <div className='cont'>
        <div className='contDiv'>
          <h2>Contagem de Gênero:</h2>
          {/* {Object.entries(contagem.gender).map(([key, value]) => <p>{key}: {value}</p>)} */}
          <p>Total: {calcularTotal(contagem.gender)}</p>
        </div>
        
        <div className='contDiv'>
          <h2>Contagem de Idioma:</h2>
          {/* {Object.entries(contagem.language).map(([key, value]) => <p>{key}: {value}</p>)} */}
          <p>Total: {calcularTotal(contagem.language)}</p>
        </div>
      </div>
    </div>
  );
}

export default Placar;
