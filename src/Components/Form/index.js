import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          contatos: [],
        };
        this.addNewContato = this.addNewContato.bind(this);

    }
    
    async componentDidMount() {
       
        let contatos = JSON.parse(localStorage.getItem("myData"));
        this.setState((prevState, props) => ({
            contatos: contatos
        }));
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    addNewContato() {

        let id = Math.max.apply(Math, this.state.contatos.map(function(o) { return o.id; }));

        let pessoa = JSON.parse(localStorage.getItem('myData') || '[]');
        pessoa.push({
            id: id + 1,
            first_name: this.Capitalize(document.getElementById("first_name").value), 
            last_name: this.Capitalize(document.getElementById("last_name").value), 
            email: document.getElementById("email").value, 
            language: this.Capitalize(document.getElementById("language").value), 
            gender: document.getElementById("gender").value, 
            birthday: document.getElementById("birthday").value, 
            avatar: 'https://robohash.org/'+ document.getElementById("first_name").value +'.png?size=100x100&set=set1'
        });
               
        localStorage.setItem("myData",JSON.stringify(pessoa));
        this.props.history.push('/');
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card green lighten-4">
                            <div className="card-content">
                            <span className="card-title black-text">Novo Contato</span>
                                <div className="row">
                                    <form className="col s12" onSubmit={this.addNewContato}>
                                        <div className="row">
                                            <div className="input-field col s4">
                                                <input placeholder="Digite o primeiro nome" id="first_name" type="text" required/>
                                                <label className="active black-text">Nome</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <input placeholder="Digite o ultimo nome" id="last_name" type="text" required/>
                                                <label className="active black-text">Ultimo Nome</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <select className="browser-default green lighten-4" id="gender">
                                                    <option value="M">Masculino</option>
                                                    <option value="F">Feminino</option>
                                                </select>
                                                <label className="active black-text">Sexo</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s4">
                                                <input placeholder="Digite o email" id="email" type="email" required/>
                                                <label className="active black-text">Email</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <input placeholder="Digite o idioma" id="language" type="text" />
                                                <label className="active black-text">Idioma</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <input id="birthday" type="date" defaultValue="2020-01-01" required/>
                                                <label className="active black-text">Aniversario</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input disabled id="avatar" type="text" defaultValue="https://robohash.org/veritatiscorruptivitae.jpg?size=100x100&set=set1" />
                                            <label className="active black-text">Avatar</label>
                                            </div>
                                        </div>
                                        <div className="card-action">
                                            <div className="row">
                                                <div className="col s6">
                                                    <button className="btn" >Adicionar</button>
                                                </div>
                                                <div className="col s6" align="right">
                                                    <Link to={'/'}><input type="submit" className="btn btn-primary" value="Voltar" /></Link>
                                                </div>
                                            </div>                                      
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;