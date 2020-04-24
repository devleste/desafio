import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ContatoList extends Component {
    constructor(props){
        super(props);
        this.removeContato = this.removeContato.bind(this);
    }
    
    removeContato = (e, id) => {
        this.props.removeContato(e, id);
    };

    render() {
        return(
            <div className="m12 s12">
                <table className="table striped responsive-table">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Idioma</th>
                            <th>Sexo</th>
                            <th>Aniversario</th>
                            <th>Idade</th>
                            <th colSpan="2" className="center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contatos === null && <p>Carregando usuarios ....</p>}
                        {this.props.contatos && this.props.contatos.reverse().map((d, i) => 
                        <tr key={i}>
                            <td><img src={d.avatar} alt={d.id} width="50px" height="50px"/></td>
                            <td>{d.first_name} {d.last_name}</td>
                            <td>{d.email}</td>
                            <td>{d.language}</td>
                            <td>{d.gender === "M" ? "Masculino" : "Feminino"}</td>
                            <td>{moment(d.birthday).format("DD/MM/YYYY")}</td>
                            <td>{moment(d.birthday).fromNow("y")}</td>
                            <td><Link to={`${d.id}/${i}`} params={this.props.contatos}><button className="btn green darken-4">Show</button></Link></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ContatoList;