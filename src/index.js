import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import App from './App';
import ContactsContextProvider from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContactsContextProvider>
        <App />
    </ContactsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
