import React from 'react';

import { ContactsProvider } from './ContactsContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <ContactsProvider>
        {children}
      </ContactsProvider>
    </ToastProvider>
  );
}

export default AppProvider;