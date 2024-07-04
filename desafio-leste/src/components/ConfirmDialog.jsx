import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const ConfirmDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Remover contato'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Você tem certeza que deseja remover esse contato?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className='text-font-first' onClick={onClose}>
          Cancelar
        </Button>
        <Button className='text-red-500' onClick={onConfirm}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
