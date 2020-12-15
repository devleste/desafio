import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from  './styles/global';
import Layout from './components/Layout';
import AppProvider from './contexts';


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
