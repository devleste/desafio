import React, { useEffect } from 'react';
import { Close } from '@material-ui/icons';

import { useToast } from '../../../contexts/ToastContext';

import { Container } from './styles';

interface ToastProps {
  id: string
  type: 'success' | 'error';
  description: string;
}

const Toast: React.FC<ToastProps> = ({ id, type, description }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 7000);
    return () => {
      clearTimeout(timer)
    }
  }, [id, removeToast]);

  return (
    <Container type={type} >
      <div>
        {type === 'success' ? (
          <p>Feito!</p>
        ) : type === 'error' ? (
          <p>Erro!</p>
        ) : (
          <p></p>
        )}
        <span>{description}</span>
      </div>
      <div>
        <Close onClick={() => removeToast(id)} />
      </div>
    </Container>
  )
}

export default Toast;