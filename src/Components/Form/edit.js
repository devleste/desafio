import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          contatos: [],
          usuario: [],
          index: '',
        };
        //this.addNewContato = this.addNewContato.bind(this);
        //this.fEdit = this.fEdit.bind(this);
        //this.editContato = this.editContato(this);
        //this.deleteContato = this.deleteContato.bind(this);
    }
    
    async componentDidMount() { 
        let contatos = JSON.parse(localStorage.getItem("myData"));
        this.setState((prevState, props) => ({
            contatos: contatos
        }));
    }

    fSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            act: 1,
          });
        //"https://robohash.org/dolorearecusandae.bmp?size=100x100\u0026set=set1"
        
        let datas = this.state.contatos;

        let first_name = this.Capitalize(document.getElementById("first_name").value);
        let last_name = this.Capitalize(document.getElementById("last_name").value);
        let email = document.getElementById("email").value;
        let avatar = document.getElementById("avatar").value;
        let language = this.Capitalize(document.getElementById("language").value);
        let birthday = document.getElementById("birthday").value;
        let gender = document.getElementById("gender").value;
        let id = document.getElementById("id").value;
        let index = datas.findIndex(contact => contact.id === parseInt(id));
        
        console.log(index);
        datas[index].avatar = avatar;
        datas[index].first_name = first_name;
        datas[index].last_name = last_name;
        datas[index].email = email;
        datas[index].language = language;
        datas[index].birthday = birthday;
        datas[index].gender = gender;
        
        localStorage.setItem("myData", JSON.stringify(datas))
        this.props.history.push('/')
    }
    removeContato = (e, id) => {
        let r = window.confirm("Tem certeza que deseja excluir esse item ?");
        if (r === true) {
            this.setState(prevState => ({
            contatos: prevState.contatos.filter(d => d !== id)
            }), () => {
            const { contatos } = this.state;
            
            localStorage.setItem("myData", JSON.stringify(contatos))
            this.props.history.push('/');
            });
        }
    };

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render(){
        const { match: { params } } = this.props;
        const resultid = parseInt(params.userId);
        //const i = parseInt(params.index);
        const usuario = this.state.contatos.filter(d => d.id === resultid);
        //{store.results.data.sort((a, b) => a.id - b.id).map
        return(
            <div className="container">
            {
                usuario && usuario.map((u) => 
                    <div className="row" key={u.id}>
                        <div className="col s12 m12">
                            <div className="card green lighten-4">
                                <div className="card-content">
                                    <span className="card-title black-text">Editar Contato</span>
                                    <form name="myForm s12 m12">
                                        <input defaultValue={u.id} name="id" id="id" type="text" hidden/>
                                        <div className="row">
                                            <div className="input-field col s4">
                                                <input defaultValue={u.first_name} name="first_name" id="first_name" type="text" required/>
                                                <label className="active black-text">Nome {this.props.key}</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <input defaultValue={u.last_name} name="last_name" id="last_name" type="text" required/>
                                                <label className="active black-text">Ultimo Nome</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <select defaultValue={u.gender} className="browser-default green lighten-4" id="gender">
                                                    <option value="M">Masculino</option>
                                                    <option value="F">Feminino</option>
                                                </select>
                                                <label className="active black-text">Sexo</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s4">
                                                <input defaultValue={u.email} id="email" type="email" required/>
                                                <label className="active black-text">Email</label>
                                            </div>
                                            <div className="input-field col s4">
                                                <input defaultValue={u.language} id="language" type="text" />
                                                <label className="active black-text">Idioma</label>
                                            </div>
                                            <div className="input-field col m12 s4">
                                                <input id="birthday" type="date" defaultValue={u.birthday} required/>
                                                <label className="active black-text">Aniversario</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m12 s12">
                                            <input id="avatar" type="text" defaultValue={u.avatar}/>
                                            <label className="active black-text">Avatar</label>
                                            </div>
                                        </div>
                                        <div className="card-action">
                                            <div className="row">
                                                <div className="col m2 s12">
                                                    <button className="btn" onClick={(e)=>this.fSubmit(e)}>Editar</button>
                                                </div>
                                                <div className="col m2 s12">
                                                    <button className="btn red darken-5" onClick={(e) => this.removeContato(e, u)}>Apagar</button>
                                                </div>
                                                <div className="col m2 s12" >
                                                    <Link to={'/'}><input type="submit" className="btn btn-primary" value="Voltar" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>   
                )   
            }
            </div>
        )
    }
}

export default Form;