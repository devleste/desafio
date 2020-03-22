import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ErroImg from '../../../imagens/erro.png';
import './erro.css';

class Erro extends Component{
    render(){
        
        return(

            <div class="container mt-4">

                <img src={ErroImg} />

                <h1 class="h1_erro" >PÁGINA NÃO ENCONTRADA</h1>

                <p class="p_erro" >Procuramos por essa página em todos os lugares.</p>
                <p class="p_erro">Tem certeza que o URL do site está correto?</p>
                <p class="p_erro">Entre em contato com o proprietário do site.</p>

                <Link to="/" ><button type="button" class="btn-erro">Volte ao início</button></Link>


            </div>
         
        );
    }
}

export default Erro;