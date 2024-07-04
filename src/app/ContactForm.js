'use client'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { FormControl, formControlClasses, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ContatoService } from '@/api/ContatoService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ContactForm = ({estaAberto, fechaModal, ContatoAdicionado, contatoEdit, onEdit}) => {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [linguagem, setLinguagem] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [dataNascimento, setDataNascimento] = React.useState('');

  const resetForm = () => {
    setNome('');
    setSobrenome('');
    setEmail('');
    setGenero('');
    setLinguagem('');
    setAvatar('');
    setDataNascimento('');
  };

  React.useEffect(() => {
    if (contatoEdit) {
      setNome(contatoEdit.nome || '');
      setSobrenome(contatoEdit.sobrenome || '');
      setEmail(contatoEdit.email || '');
      setGenero(contatoEdit.genero || '');
      setLinguagem(contatoEdit.linguagem || '');
      setAvatar(contatoEdit.avatar || '');
      setDataNascimento(new Date(contatoEdit.dataNascimento).toISOString().split('T')[0]);
    } else {
      setNome('');
      setSobrenome('');
      setEmail('');
      setGenero('');
      setLinguagem('');
      setAvatar('');
      setDataNascimento('');
    }
  }, [contatoEdit]);

  if(!estaAberto) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contato = {
      nome,
      sobrenome,
      email,
      genero,
      linguagem,
      avatar,
      dataNascimento: new Date(dataNascimento)
    };

    try {
      let response;
      if (contatoEdit) {
        response = await ContatoService.updateContato(contatoEdit._id, contato);
        onEdit({ ...contato, _id: contatoEdit._id });
      } else {
        response = await ContatoService.createContato(contato);
        ContatoAdicionado(response.data);
      }
      resetForm();
      fechaModal();
      alert(contatoEdit ? "Contato editado." : "Contato cadastrado.");
    } catch (error) {
      console.error(contatoEdit ? "Erro ao editar contato " : "Erro ao cadastrar contato ", error);
      alert(contatoEdit ? "Erro ao editar contato." : "Erro ao cadastrar contato.");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={estaAberto}
        onClose={fechaModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={estaAberto}>
        <Box sx={style}>
          <h2 id="modal-modal-title">{contatoEdit ? "Editar Contato" : "Adicionar Contato"}</h2>
            <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <TextField
            label="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Gênero</InputLabel>
              <Select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <MenuItem value="Feminino">Feminino</MenuItem>
                <MenuItem value="Masculino">Masculino</MenuItem>
              </Select>
            </FormControl>
            <TextField
            label="Linguagem"
            value={linguagem}
            onChange={(e) => setLinguagem(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <TextField
            label="Avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <TextField
            type='date'
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
              {contatoEdit ? "Editar" : "Adicionar"}
            </Button>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ContactForm;