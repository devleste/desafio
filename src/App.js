import './App.css';
import Logo from './componentes/Logo';
import Campo from './componentes/Campo';
import Lista from './componentes/Lista';
import Formulario from './componentes/Formulario';
import Filtro from './componentes/Filtro';
import Placar from './componentes/Campo/Placar';
import months from "./helpers/months"
import axios from 'axios';
import { useState } from 'react';




function App() {
  
  const [id, setId] = useState(21);
  const [lista, setLista] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [carregandoLista, setCarregandoLista] = useState(false);
  const [listaCarregada, setListaCarregada] = useState(false);
  const [mostrar, setMostrar] = useState('');
  const [cadastro, setCadastro] = useState({});
  const [filtro, setFiltro] = useState({});
  

  const listar = () => {
    setCarregandoLista(true)
    setMostrar('lista')

    axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
      .then((response) => {
        setLista(lista.concat(response.data))
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setCarregandoLista(false)
        setListaCarregada(true)
      })
  }

  const cadastrar = (cadastro) =>{
    cadastro.id = id
    setLista(lista.concat([cadastro]))
    setId(id+1)
    setMostrar('lista')
  }

  const cancelar = () =>{
    setCadastro({})
    setMostrar('lista')
  }

  const adicionar = () => {
    setMostrar('adicionar')
  }

  const descadastrar = (id) => {
    const index = lista.findIndex((person => person.id === id))
    let novaLista = lista.slice()
    novaLista.splice(index, 1)
    setLista(novaLista)
  }

  const editar = (cadastro) => {
    setCadastro(cadastro)
    setMostrar('editar')
  }

  const editarCard = (cadastro) => {
    setMostrar('lista')
    const index = lista.findIndex((person => person.id === cadastro.id))
    let novaLista = lista.slice()
    novaLista.splice(index, 1, cadastro)
    setLista(novaLista)
    setCadastro({})
  }

  const filtrar = (filtro) => {
    setFiltro(filtro)
    if (Object.keys(filtro || {}).length === 0) {
      setListaFiltrada(lista)
      setMostrar('listaFiltrada')
      return
    }
    setListaFiltrada(lista.filter(person => {
      let add = false
      for (const key in filtro) {
        const value = filtro[key]
        if (!value) {
          continue
        }
        switch(key) {
          case 'gender': {
            add = add || person.gender === value
            break
          }
          case 'language': {
            add = add || person.language === value
            break
          }
          case 'age': {
            const birthday = new Date(`${person.birthday} GMT-0300`)
            const today = new Date()
            const years = (today - birthday)/(1000*60*60*24*365.24)
            add = add || `${Math.floor(years)}` === value
            break
          }
          case 'month': {
            const month = months.indexOf(value)
            const birthday = new Date(`${person.birthday} GMT-0300`)
            add = add || birthday.getMonth() === month
            break
          }
          default: {}
        }
      }
      return add
    }))
    setMostrar('listaFiltrada')
  }

  const limpar = () => {
    setFiltro({})
    setMostrar('lista')
  }

  const mostrarFiltro = () => {
    setMostrar('filtro')
  }


  return (
    <div className="App">
      <Logo/>
      <Campo
        listaCarregada={listaCarregada}
        listar={listar}
        mostrarAdicao={mostrar === 'adicionar'}
        adicionar={adicionar}
        mostrarFiltro={mostrarFiltro}
      />

      {['lista', 'listaFiltrada'].includes(mostrar) && <Placar lista={lista}/> }

      {mostrar === 'lista' && <Lista
        lista={lista}
        carregandoLista={carregandoLista}
        descadastrar={descadastrar}
        editar={editar}
      />}

      {mostrar === 'listaFiltrada' && <Lista
        lista={listaFiltrada}
        descadastrar={descadastrar}
        editar={editar}
      />}

      {mostrar === 'adicionar' && <Formulario
        cadastrar={cadastrar}
        cancelar={cancelar}
      />}

      {mostrar === 'editar' && <Formulario
        editarCard={editarCard}
        mostrarEdicao={mostrar === 'editar'}
        cadastro={cadastro}
        cancelar={cancelar}
      />}

      {mostrar === 'filtro' && <Filtro
        filtro={filtro}
        filtrar={filtrar}
        limpar={limpar}
        cancelar={cancelar}
      />}
    </div>
  );
}

export default App;
