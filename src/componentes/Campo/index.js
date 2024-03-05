import Botao from './Botao.js'
import './Campo.css'

function Campo (props){

    return(
        <div className="campo">
            {!props.listaCarregada && <Botao bt="Listar" event={props.listar}/>}
            {!props.mostrarAdicao && <Botao bt="Adicionar" event={props.adicionar}/>}
            {props.listaCarregada && <Botao bt="Filtrar" event={props.mostrarFiltro}/>}
        </div>
    )
}

export default Campo