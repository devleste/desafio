import './Contact.css';

import imgEdit from '../../image/Edit.png';
import imgRemove from '../../image/remove.png';
import Api from '../../Service/Api';
import axios from 'axios';
import React from 'react';

export default class Contact extends React.Component {
    
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060').then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
  
    //Esse cod ta dando erro, acho que é alguma coisa com a API, com isso removi somente no front
    // deleteContato(id){  
    //     axios.delete(`https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060/${id}`).then(res => {  
    //         const persons = this.state.persons.filter(item => item.id !== id);  
    //         this.setState({ persons });  
    //     })  
    // }

    deleteContact(contact){
        const item = this.state.persons.indexOf(contact);
        this.state.persons.splice(item, 1);
        this.setState(contact);
    }

    render() {
      return (
        <div>
            { this.state.persons.map(person => 
                <article>
                    <div className="imageEditRemove">
                        <button>
                            <img src={imgEdit}/>
                        </button>

                        <button>
                            <img src={imgRemove} onClick={() => this.deleteContact(person)}/>
                        </button>
                    </div>

                    <div className="conteudos">
                        <div className="conteudo1">
                            <img src={person.avatar}></img>
                        </div>


                        <div className="conteudo2">
                            <h4>{person.first_name} {person.last_name}</h4>
                            <div className="line"/>
                            <p>{person.email}</p>
                            <p>{person.language}</p>
                            <p>{person.birthday}</p>
                            <p>{(person.gender == 'F')? "Feminino":"Masculino"}</p>
                        </div>
                    </div>

                </article>)
            }
        </div>
    );}
}