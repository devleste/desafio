import React from 'react';
import Moment from 'react-moment';
import GrafLingua from './Graf_lingua.js';
import 'moment/locale/pt-br';

export default class PersonList extends React.Component {
    state = {
        persons: [],
        isLoading: true,
        error: null
    }

    apiUsers = [];

    fetchUsers() {
        fetch('http://localhost:3000/usuarios.json')
        //fetch('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
            .then(response => response.json())
            .then(data => {
                this.apiUsers = data;
                this.setState({
                    users: data,
                    isLoading: false,
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }
    
    onChangeGender(e) {
        console.log(e.target.value);
        let newArray = this.apiUsers.filter((d)=>{
            console.log(d)
            let searchValue = d.gender.toLowerCase();
            return searchValue.indexOf(e.target.value) !== -1;
        });
        console.log(newArray)
        this.setState({
            users:newArray
        })
    }
    onChangeIdioma(e) {
        console.log(e.target.value);
        let newArray = this.apiUsers.filter((d)=>{
            console.log(d)
            let searchValue = d.language.toLowerCase();
            return searchValue.indexOf(e.target.value) !== -1;
        });
        console.log(newArray)
        this.setState({
            users:newArray
        })
    }

    render() {
        const {isLoading, users, error} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Filtros</span>
                                <table>
                                    <tr>
                                        <td>
                                            <label for="genero">Genero :</label>                                 
                                            <select id="genero" onChange={this.onChangeGender.bind(this)}>
                                                <option value="M">Masculino</option>
                                                <option value="F">Feminino</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="idioma">Idioma :</label>                                   
                                            <input id="idioma" type="text" value={this.state.value} 
                                            placeholder="Search"
                                            onChange={this.onChangeIdioma.bind(this)} />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div>
                            <GrafLingua />
                        </div>
                    </div>
                    <div className="col s12 m9">
                        <h2>Lista de Usuarios</h2>
                            {error ? <p>{error.message}</p> : null}
                        <ol>
                        <button
                            className="btn btn-dark pull-left"
                            onClick="">Novo Usuario
                        </button>
                        <table>
                            <thead>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Idioma</th>
                                <th>Genero</th>
                                <th>Data Aniversario</th>
                                <th>Idade</th>
                                <th>Ação</th>
                            </thead>
                            <tbody>
                                {!isLoading ? (
                                    users.map(user => {
                                        const {avatar, first_name, last_name, email, language, gender, birthday} = user;
                                        return (
                                            <tr>
                                                <td><img src={avatar} alt={first_name}/></td>
                                                <td>{first_name} {last_name}</td>
                                                <td>{email}</td>
                                                <td>{language}</td>
                                                <td>{gender}</td>
                                                <td>{<Moment format="DD [de] MMMM [de] YYYY">{birthday}</Moment>}</td>
                                                <td>{<Moment fromNow ago>{birthday}</Moment>}</td>
                                                <td><a href=" ">Alterar</a> <a href=" ">Excluir</a></td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <h3>Loading...</h3>
                                )}
                            </tbody>
                        </table>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }

}
