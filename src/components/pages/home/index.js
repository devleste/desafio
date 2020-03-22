import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './estilo.css';

export default function Home(){

        if (localStorage.length === 0){
        
            async function loadApi(){

                const response = await api.get();
                let contatos = response.data;

                let mesFiltrado = contatos.filter(n => n.birthday)
                
                    mesFiltrado.map((info) => (
                        info.birthday = formatData(info.birthday)
                    ))
           
                    function formatData(data){
    
                        data = String(data).split(' ');
                        var days = String(data[0]).split('-');

                        var dataFormatada =  [days[2],"-", days[1],"-", days[0]].join('');
                     
                        return dataFormatada;

                    }

                localStorage.setItem("contatosApi", JSON.stringify(contatos));
            }

            loadApi();
              
        }
        
        

        return(

            
            <div>
                <div className="container">

                    <div className="card  mt-4 shadow-custom">
                        <div className="card-body">
                            
                    <div class="jumbotron shadow-custom">
                        <h1 class="text-center text-success LesteTel_h1">Leste Contact</h1>

                    </div>

                    
                        <div className="card shadow-custom">

                            <div className="card-body text-center">
                                <div className="row">

                                    <div className="col-sm-4 my-2">
                                        <Link to="/ListaDeContatos"> <a class="btn btn-success btn-lg" href="#" role="button"> <i class="fas fa-list-alt"></i> Lista de contatos </a></Link>
                                    </div>

                                    <div className="col-sm-4 my-2">
                                        <Link to="/AddContatos"><a class="btn btn-success btn-lg" href="#"  role="button"> <i class="fas fa-user-plus"></i> Adicionar contatos </a></Link>
                                    </div>
                                     
                                    <div className="col-sm-4 my-2">
                                        <Link to="/Estatisticas"><a class="btn btn-success btn-lg" href="#"  role="button"> <i class="fas fa-chart-pie"></i> Estatisticas </a></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>  
        </div>

    );
    
}

