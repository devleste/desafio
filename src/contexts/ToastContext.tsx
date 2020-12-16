import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(params: AddToastProps): void;
  removeToast(id: string): void;
}

export interface ToastMessages {
  id: string;
  type: 'success' | 'error';
  description: string;
}

interface AddToastProps {
  type: 'success' | 'error';
  description: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessages[]>([]);

  const addToast =useCallback(({ type, description }: AddToastProps) => {
    const id = v4();
    const toast = { id, type, description };
    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);

  const removeToast =useCallback((id: string) => {
    setMessages((oldMessages) => oldMessages.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
}

export { ToastProvider, useToast };
