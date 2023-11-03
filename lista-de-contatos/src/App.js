import React from 'react';
import useFetch from '../src/hooks/useFetch';
import './App.css';

function App() {
  const { lista } = useFetch();
  console.log(lista)
  
  return (
    <div className="App">
      <p>Lista de contatos</p>
    </div>
  );
}

export default App;
