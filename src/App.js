import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

import ContatoList from './Components/ContatoList/index';
import SideNav from './Components/SideNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      contatos: [],
      backup: []
    };
    this.editContato = this.editContato.bind(this);
  }

  async componentDidMount() {
    await axios.get('http://localhost:3000/usuarios/db.json')
    //await axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      if (localStorage.getItem("myData") === null) {
        localStorage.setItem('myData', JSON.stringify(this.state.users));
      }

      let contatos = JSON.parse(localStorage.getItem("myData"));
      this.setState((prevState, props) => ({ contatos: contatos }));
      this.setState((prevState, props) => ({ backup: contatos }));

  }

  onFilterGender = (e) => {
    let contatosCopy = [];
    
    if (e.target.value !== "todos") {
      contatosCopy = this.state.backup.filter(d => d.gender !== "");
      contatosCopy = contatosCopy.filter(d => d.gender === e.target.value);
      this.setState((prevState, props) => ({
        contatos: contatosCopy
      }));
    } else {
      this.setState((prevState, props) => ({ contatos: this.state.backup }))
    }
  }

  onFilterLanguage = (e) => {
    let contatosCopy = [];
    
    if (e.target.value !== "todos") {
      contatosCopy = this.state.backup.filter(d => d.gender !== "");
      contatosCopy = contatosCopy.filter(d => d.language === e.target.value);
      this.setState((prevState, props) => ({
        contatos: contatosCopy
      }));
    } else {
      this.setState((prevState, props) => ({ contatos: this.state.backup }));
    }
  }

  onFilterYears = (e) => {
    let contatosCopy = [];
    if (e.target.value !== "todos") {
      contatosCopy = this.state.backup.filter(d => d.birthday !== "");
      contatosCopy = contatosCopy.filter(d => moment(d.birthday).fromNow("yy") === moment(e.target.value).fromNow("yy"));
      this.setState((prevState, props) => ({
        contatos: contatosCopy
      }));
    } else {
      this.setState((prevState, props) => ({ contatos: this.state.backup }));
    }
  }

  onFilterNiver = (e) => {
    let contatosCopy = [];
    
    if (e.target.value !== "todos") {
      let data = moment(e.target.value).format("MMMM");
      contatosCopy = this.state.backup.filter(d => d.birthday !== "");
      contatosCopy = contatosCopy.filter(d => moment(d.birthday).format("MMMM") === data);
      this.setState((prevState, props) => ({
        contatos: contatosCopy
      }));
      console.log(data);
    } else {
      this.setState((prevState, props) => ({ contatos: this.state.backup }));
    }
    
  }

  editContato(id, avatar, first_name, last_name, email, language, gender, birthday) {
    let contatosCopy = this.state.contatos.map((contato) => {
    
      if (contato.id === id) {
        contato.avatar = avatar;
        contato.first_name = first_name;
        contato.last_name = last_name;
        contato.email = email;
        contato.language = language;
        contato.gender = gender;
        contato.birthday = birthday;
      }      
      return contato;
    });

    this.setState((prevState, props) => ({
      contatos: contatosCopy
    }));

    localStorage.setItem('myData',JSON.stringify(contatosCopy));
  }

  render() {
    return (
      <div className="row">

        <div className="col m2 s12">
          <SideNav 
            contatos={this.state.contatos} 
            backup={this.state.backup}
            niver={this.onFilterNiver} 
            years={this.onFilterYears} 
            language={this.onFilterLanguage} 
            gender={this.onFilterGender} 
          />        
        </div>
        <div className="col m10 s12">
          <div className="container-fluid">
            <ContatoList contatos={this.state.contatos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
