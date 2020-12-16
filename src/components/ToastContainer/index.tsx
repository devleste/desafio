import React from 'react';

import { ToastMessages } from '../../contexts/ToastContext';
import Toast from './Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} id={message.id} type={message.type} description={message.description} />
      ))}
    </Container>
  );
}

export default ToastContainer;