import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import Lista from './components/Lista';
import ContatosContext from '../src/context/ContatosContext';
import { contatosData } from '../src/mocks/contatosData';
import New from './components/New';

function App() {
  const { listaContatos, setListaContatos } = useContext(ContatosContext);

  useEffect(() => {
    if (!listaContatos || listaContatos.length === 0) {
      const storedData = localStorage.getItem('contatos');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (JSON.stringify(parsedData) !== JSON.stringify(listaContatos)) {
          setListaContatos(parsedData);
        }
      } else {
        setListaContatos(contatosData);
      }
    }
  }, [listaContatos, setListaContatos]);

  return (
    <div className="App">
      <Header />
      <New />
      <Edit />
      <Lista />
    </div>
  );
}

export default App;
