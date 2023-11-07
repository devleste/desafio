import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('adicionando novo contato a lista', () => {
  render(<App />);
  const addContactIcon = screen.getByTestId('add-contact-icon');
  userEvent.click(addContactIcon);
});
