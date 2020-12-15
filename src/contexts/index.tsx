import React from 'react';

import { ContactsProvider } from './ContactsContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ContactsProvider>
      {children}
    </ContactsProvider>
  );
}

export default AppProvider;