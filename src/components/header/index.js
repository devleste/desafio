import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.png';
import './header.css';


class Header extends Component{

    
    render(){

        function toogleMenu(){

            window.scrollTo(0, 0);
            document.querySelector('#navbarNav').classList.remove('show');

        }
        
        return(
        
        <nav class="navbar navbar-expand-lg sticky-top navbar-custom">

            <Link to="/">
                <a class="navbar-brand" target="_blank">
                    <img id="logo" src={logo} alt="Logo"/>
                </a>    
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="fas fa-bars"></i></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto" onClick={toogleMenu}>
                    <li class="nav-item">
                        <Link to="/ListaDeContatos" class="nav-link"><a>Lista de Contatos</a></Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/AddContatos" class="nav-link"><a>Cadastrar Contatos</a></Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/Estatisticas" class="nav-link"><a>Estatisticas</a></Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/" class="nav-link"><a>Home <span class="sr-only">(current)</span></a></Link>
                    </li>
                   
                </ul>
            </div>

        </nav>

        );
    }
}

export default Header;