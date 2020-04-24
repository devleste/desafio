import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './style.css';

class Relatorio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          contatos: [],
          newArray: [],
        };
        //this.onSearchGenderM = this.onSearchGenderM.bind(this);
    }

    async componentDidMount() { 
        let contatos = JSON.parse(localStorage.getItem("myData"));
        this.setState((prevState, props) => ({
            contatos: contatos
        }));
    }

    onSearchGenderM = () => {
        const valueM = this.state.contatos.filter(d => d.gender === "M").length;
        return valueM;
    }

    onSearchGenderF = () => {
        const valueF = this.state.contatos.filter(d => d.gender === "F").length;
        return valueF;
    }

    onSearchLanguage = () => {
        var idioma = [];

        this.state.contatos.forEach(function (mapas) {
            idioma.push(mapas.language);
        });

        var result = _(this.state.contatos)
            .groupBy('language')
            .map((v, language) => ({
                language,
                count: _.map(v, 'language')
            }))
            .value();
        return result;
    }

    render() {
        let masculino = this.onSearchGenderM();
        let feminino = this.onSearchGenderF();
        let language = this.onSearchLanguage();
        return(
            <div className="container">
                <div className="row">
                    <div className="col m8 s12">
                        <h3>Relatorio de Contatos</h3>
                    </div>
                    <div className="col m4 s12">
                        <Link to={'/'}><input type="submit" className="btn btn-primary" value="Voltar" /></Link>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col m4 s12">
                        <table className="table responsive-table highlight striped">
                            <thead>
                                <tr>
                                    <th className="center" colSpan="2">Resumo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Total do Sexo Masculino :</td><td>{masculino}</td>
                                </tr>
                                <tr>
                                    <td>Total do Sexo Feminino :</td><td>{feminino}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col m4 s12">
                        <table className="responsive-table highlight striped">
                            <thead>
                                <tr>
                                    <th className="center" colSpan="2">Resumo de Idiomas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {language.map((d, i) => 
                                    <tr key={i}>
                                        <td>{d.language}</td>
                                        <td>{d.count.length}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Relatorio;