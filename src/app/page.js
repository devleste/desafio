'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import StickyHeadTable from "./StickyHeadTable";
import ContactForm from "./ContactForm";
import { ContatoService } from '@/api/ContatoService';
import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contatos, setContatos] = useState([]);
    const [contatoEdit, setContatoEdit] = useState(null);
    const [generoFiltro, setGeneroFiltro] = useState('');
    const [mesFiltro, setMesFiltro] = useState('');
    const [idadeFiltro, setIdadeFiltro] = useState('');
    const [linguagemFiltro, setLinguagemFiltro] = useState('');

    useEffect(() => {
      const buscarContatos = async () => {
        try {
          const response = await ContatoService.getContatos();
          setContatos(response.data);
        } catch(error){
          console.error("Erro ao buscar contatos", error);
        }
      };
      buscarContatos();
    }, []);

    const abreModal = () => setIsModalOpen(true);
    const fechaModal = () => {
      setIsModalOpen(false);
      setContatoEdit(null);
    };

    const handleContatoAdd = (novoContato) => {
      setContatos((prevContatos) => [...prevContatos, novoContato]);
    };

    const handleContatoEdit = async (contatoEditado) => {
      try {
        await ContatoService.updateContato(contatoEditado._id, contatoEditado);
        setContatos((prevContatos) => prevContatos.map((contato) => (contato._id === contatoEditado._id ? contatoEditado : contato)));
      } catch (error) {
        console.error("Erro ao editar contato", error);
      }
    };
     
    const handleContatoDelete = async (id) => {
      try {
          await ContatoService.deleteContato(id);
          setContatos((prevContatos) => prevContatos.filter((contato) => contato._id !== id));
      } catch (error) {
          console.error("Erro ao excluir contato", error);
      }
    };

    const editContato = (contato) => {
      setContatoEdit(contato);
      abreModal();
    };

    const filteredContatos = contatos.filter((contato) => {
      let matches = true;

      if (generoFiltro && contato.genero !== generoFiltro) {
        matches = false;
      }

      if (mesFiltro) {
        const contatoMes = new Date(contato.dataNascimento).getMonth() + 1; // getMonth() retorna 0-11, adicionamos 1 para obter 1-12
        const filtroMes = parseInt(mesFiltro, 10); 
        if (contatoMes !== filtroMes) {
          matches = false;
        }
      }

      if (idadeFiltro) {
        const contatoIdade = new Date().getFullYear() - new Date(contato.dataNascimento).getFullYear();
        if (contatoIdade !== parseInt(idadeFiltro)) {
          matches = false;
        }
      }

      if (linguagemFiltro && contato.linguagem !== linguagemFiltro) {
        matches = false;
      }

      return matches;
    });

    const calcularEstatisticas = (contatos) => {
      const estatisticas = {
        genero: {},
        linguagem: {}
      };
    
      contatos.forEach(contato => {
        // Contagem de gêneros
        if (contato.genero in estatisticas.genero) {
          estatisticas.genero[contato.genero]++;
        } else {
          estatisticas.genero[contato.genero] = 1;
        }
    
        // Contagem de linguagens
        if(contato.linguagem in estatisticas.linguagem){
          estatisticas.linguagem[contato.linguagem]++;
        }else {
          estatisticas.linguagem[contato.linguagem] = 1;
        }
      });

      return estatisticas;
    }

    const estatisticas = calcularEstatisticas(contatos);

    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>Lista de Contatos</h1>
          <button className={styles.buttonContact} onClick={abreModal}>Criar contato</button>
          <ContactForm estaAberto={isModalOpen} fechaModal={fechaModal} ContatoAdicionado={handleContatoAdd} contatoEdit={contatoEdit} onEdit={handleContatoEdit} />
          <div className={styles.filters}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Gênero</InputLabel>
              <Select
                value={generoFiltro}
                onChange={(e) => setGeneroFiltro(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="Feminino">Feminino</MenuItem>
                <MenuItem value="Masculino">Masculino</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type='number'
              label="Mês de Nascimento"
              value={mesFiltro}
              onChange={(e) => setMesFiltro(e.target.value)}
              inputProps={{ min: 1, max: 12 }}
              fullWidth
              margin="normal"
            />
            <TextField
              type='number'
              label="Idade"
              value={idadeFiltro}
              onChange={(e) => setIdadeFiltro(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Linguagem"
              value={linguagemFiltro}
              onChange={(e) => setLinguagemFiltro(e.target.value)}
              fullWidth
              margin="normal"
            />
          </div>
        </header>
        <main className={styles.main}>
          <StickyHeadTable rows={filteredContatos} onEdit={editContato} onDelete={handleContatoDelete}/>
          <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 2 }}>
            <h2>Estatísticas</h2>
            <div>
              <h3>Gênero</h3>
              {Object.keys(estatisticas.genero).map((key) => (
                <p key={key}>{key}: {estatisticas.genero[key]}</p>
              ))}
            </div>
            <div>
              <h3>Linguagem</h3>
              {Object.keys(estatisticas.linguagem).map((key) => (
                <p key={key}>{key}: {estatisticas.linguagem[key]}</p>
              ))}
            </div>
          </Paper>
        </main>
      </div>
    );
}