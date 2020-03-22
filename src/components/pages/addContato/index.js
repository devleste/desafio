import React, { useState } from 'react';
import './addContato.css';

export default function AddContato() {

    let [first_name, setFirstName] = useState("")
    let [last_name, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [gender, setGender] = useState("")
    let [language, setLanguage] = useState("")
    let [avatar, setAvatar] = useState("")
    let [birthday, setBirthday] = useState("")


    function gerarId(){

        let ultimoId = 0;

        const response = localStorage.getItem("contatosApi");

        let contactsArray = JSON.parse(response);

        let ultimo = contactsArray[contactsArray.length - 1];


        ultimoId = ultimo.id + 1;
        
        let id = parseInt(ultimoId);

        register(id)

    }
    
    function register(id) {

        const response = localStorage.getItem("contatosApi");
        let contactsArray = JSON.parse(response);
        
        let newContact = [];

        let data = String(birthday).split(' ');
        let days = String(data[0]).split('-');
        let dataFormatada =  [days[2],"-", days[1],"-", days[0]].join('');

       
        birthday = dataFormatada;

        newContact = {id, first_name, last_name, email, gender, language, avatar, birthday}

        contactsArray.push(newContact);

        localStorage.setItem("contatosApi", JSON.stringify(contactsArray))


    }

   
        return(
        
                <div class="container">

                    <div className="card mt-4 shadow-custom">
                        <div className="card-body">

                            <div class="jumbotron py-4 shadow-custom">
                                <h1 class="text-center contato-h1">Cadastrar Contato</h1>
                            </div>

                            <div className="card shadow-custom">
                                <div className="card-body">

                                    <form onSubmit={gerarId} className="was-validated">

                                        <div class="form-row">

                                            <div class="col-md-4 mb-3">
                                                <label>Primeiro Nome</label>
                                                <input type="text" class="form-control is-valid" 
                                                value={first_name} required autoFocus autoComplete="off"
                                                onChange={(e)=> setFirstName(e.target.value)} placeholder="Digite o nome" />
                                            </div>

                                            <div class="col-md-4 mb-3">
                                                <label for="validationServer02">Sobre Nome</label>
                                                <input type="text" class="form-control is-valid" id="validationServer02" 
                                                value={last_name} required autoFocus autoComplete="off" 
                                                onChange={(e)=> setLastName(e.target.value)} placeholder="Digite o sobre nome" />
                                            </div>

                                            <div class="col-md-4 mb-3">
                                                <label for="validationServer02">Email</label>
                                                <input type="email" class="form-control is-valid" id="validationServer02" 
                                                value={email} required autoFocus autoComplete="off" 
                                                onChange={(e)=> setEmail(e.target.value)} placeholder="Digite o sobre nome" />
                                            </div>

                                        </div>

                                        <div class="form-row">

                                            <div class="col-md-4 mb-3">
                                                <label for="validationServer02">Sexo </label>
                                                <div class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" id="customControlValidation1" name="genero" value="M"   onChange={e => setGender(e.target.value) } required />
                                                    <label class="custom-control-label" for="customControlValidation1">Masculino</label>
                                                </div>

                                                <div class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="genero" value="F" onChange={e => setGender(e.target.value) } required />
                                                    <label class="custom-control-label" for="customControlValidation2">Feminino</label>
                                                </div>
   

                                            </div>

                                            <div class="col-md-4 mb-3">
                                                    <label for="validationServer02">Linguagem</label>

                                                    <input type="text" class="form-control is-valid" id="validationServer02" 
                                                    value={language} required autoFocus autoComplete="off" 
                                                    onChange={(e)=> setLanguage(e.target.value)} placeholder="Digite o sobre nome" />
                                                </div>

                                                <div class="col-md-4 mb-3">
                                                    <label for="validationServer02">Data de nascimento</label>
                                                    <input type="date" class="form-control is-valid" id="validationServer02" 
                                                    value={birthday} required autoFocus autoComplete="off" 
                                                    onChange={(e)=> setBirthday(e.target.value)} placeholder="Digite o sobre nome" />
                                                </div>

                                            </div>

                                            <div class="form-row">

                                                <div class="col-md-6 mb-3">
                                                    <label for="validationServer02">Avatar(Url)</label>

                                                    <input type="url" class="form-control" id="validationServer02" 
                                                    value={avatar}  
                                                    onChange={(e)=> setAvatar(e.target.value)} placeholder="https://" />
                                                </div>

                                            </div>

                                        <div className="text-center">
                                            <hr/>
                                            <button class="btn btn-success mt-2" type="submit">Cadastrar submit</button>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
        );
}



