import React, { useState } from 'react';
import Page1 from './page/page1';
import './styleMain.css';

function App() {

  const [nome, setNome] = useState('');

  return (
    <div className="App">
      <Page1/>
    </div>
  );
}

export default App;
