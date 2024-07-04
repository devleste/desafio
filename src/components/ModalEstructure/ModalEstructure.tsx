import { IconButton, Dialog, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useContextModal } from '../../contexts/context';

const ModalEstructure = () => {
  const { modal, setModal } = useContextModal();

  return (
    <>
      <Dialog
        onClose={() => setModal({ ...modal, isOpen: false })}
        open={modal.isOpen}
        aria-labelledby='customized-dialog-title'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          {modal.title}
        </DialogTitle>

        <IconButton
          aria-label='close'
          onClick={() => setModal({ ...modal, isOpen: false })}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        {modal.body}
      </Dialog>
    </>
  );
};

export default ModalEstructure;
