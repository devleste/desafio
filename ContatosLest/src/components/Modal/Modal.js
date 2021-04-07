import React from 'react';
import axios from 'axios';
import '../Add/Add.css';

export default class PersonList extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        language: '',
        avatar: '',
        birthday:'',
        gender: ''
    }
  
    setFirst_name = event => {
        event.preventDefault();
        this.setState({ first_name: event.target.value });
        this.setState({ last_name: event.target.value });
        this.setState({ email: event.target.value });
        this.setState({ language: event.target.value });
        this.setState({ avatar: event.target.value });
        this.setState({ birthday: event.target.value });
        this.setState({ gender: event.target.value });
    }
  
    handleSubmit = event => {
        event.preventDefault();
  
        const user = {
            first_name: this.state.first_name,
            last_name: this.setState.last_name,
            email: this.setState.email,
            language: this.setState.language,
            avatar: this.setState.avatar,
            birthday: this.setState.birthday,
            gender: this.setState.gender
        };
  
        axios.post(`https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060`, { user }).then(res => {})
        
    }
  
    render() {
      return (
        <div>
            <div className="addForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Digite o primeiro nome" name="first_name" onChange={this.first_name}></input>

                    <input type="text" placeholder="Digite o ultimo nome" name="last_name" onChange={this.setLast_name}></input>

                    <input type="email" placeholder="Digite o email" name="email" onChange={this.setEmail}></input>

                    <input type="text" placeholder="Digite a linguagem" name="language" onChange={this.setLanguage}></input> 

                    <input type="text" placeholder="Digite o link do avatar" name="avatar" onChange={this.setAvatar}></input>

                    <input type="date" placeholder="Digite a data de nascimento" name="birthday" onChange={this.setLast_name}></input>

                    <select name="gender">
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                    <input type="Submit"></input>
                </form>
            </div>
        </div>
      )
    }
}