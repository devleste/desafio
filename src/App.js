import React, { useEffect, useState, useContext } from 'react';
import ContatosContext from '../src/context/ContatosContext';
import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import Lista from './components/Lista';
import New from './components/New';
import { contatosData } from '../src/mocks/contatosData';

function App() {
  const [initialRequestMade, setInitialRequestMade] = useState(false);
  const { setListaContatos, setLoading } = useContext(ContatosContext);

  useEffect(() => {
    if (!initialRequestMade) {
      const fetchData = async () => {
        const dataFromLocalStorage = localStorage.getItem('contatos');
      if (dataFromLocalStorage) {
        const parsedData = JSON.parse(dataFromLocalStorage);
        return setListaContatos(parsedData);
      } else {
        const response = await fetch('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060');
        if (!response.ok) {
          setLoading(false);
          return setListaContatos(contatosData);
        }
        const data = await response.json();
        return setListaContatos(data);
      }  
    };
      setInitialRequestMade(true);
      fetchData();
    }
  }, [initialRequestMade, setListaContatos, setLoading]);

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
