import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pt-br';
import './style.css';

class SideNav extends Component {
  constructor(props){    
      super(props);
      this.state={
          showing: false,
          contatos: [],
          teste: []
      }
  }

  onFilterGender = (e) => {
      this.props.gender(e);
  }

  onFilterLanguage = (e) => {
      this.props.language(e);
  }
  
  onFilterYears = (e) => {
      this.props.years(e);
  }
  
  onFilterNiver = (e) => {
      this.props.niver(e);
  }
  Filtros = () => {
    return (
      <div>
        <li>Filtros :</li>
          <div className="col s10">
            <label>Sexo: </label>
            <select onChange={e => this.onFilterGender(e)} className="browser-default">
            <option value="todos">Todos</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            </select>
          </div>
          <div className="col s10">
            <label>Idioma</label>
            <select onChange={e => this.onFilterLanguage(e)} className="browser-default">
              <option key="todos" value="todos">Todos</option>
              {this.props.backup.map((p) => 
                <option key={p.id} value={p.language}>{p.language}</option>
              )}
            </select>
          </div>
          <div className="col s10">
            <label>Idade</label>
            <select onChange={e => this.onFilterYears(e)} className="browser-default">
              <option key="todos" value="todos">Todos</option>
              {this.props.backup.map((p) => 
                <option key={p.id} value={p.birthday}>{moment(p.birthday).fromNow("yy")}</option>
              )}
            </select>
          </div>
          <div className="col s10">
            <label>Aniversariantes</label>
            <select onChange={e => this.onFilterNiver(e)} className="browser-default">
              <option key="todos" value="todos">Todos</option>
              <option key="janeiro" value="0001-01-01">Janeiro</option>
              <option key="fevereiro" value="0001-02-01">Fevereiro</option>
              <option key="marco" value="0001-03-01">Março</option>
              <option key="abril" value="0001-04-01">Abril</option>
              <option key="maio" value="0001-05-01">Maio</option>
              <option key="junho" value="0001-06-01">Junho</option>
              <option key="julho" value="0001-07-01">Julho</option>
              <option key="agosto" value="0001-08-01">Agosto</option>
              <option key="setembro" value="0001-09-01">Setembro</option>
              <option key="outubro" value="0001-10-01">Outubro</option>
              <option key="novembro" value="0001-11-01">Novembro</option>
              <option key="dezembro" value="0001-12-01">Dezembro</option>
            </select>
          </div>
      </div>
    )
  }

  render() {
    const { showing } = this.state;
    return(
      <div id="myFilter" className="">
        <ul>
        <div className="row">
          <div className="col s12">
            <button className="btn btn-block waves-effect green darken-4" onClick={() => this.setState({ showing: !showing })}>Filtros</button>
          </div>
        </div>
        { showing ?
          this.Filtros()
          : null
        }
          <li><Link to={"/relatorio"} ><button className="btn btn-block waves-effect green darken-4">Relatorio de Contatos</button></Link></li>
        </ul>
      </div>
    )
  };
}

export default SideNav;