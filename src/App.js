import React from 'react';
import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import Lista from './components/Lista';
import New from './components/New';

function App() {

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
