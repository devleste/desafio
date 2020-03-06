import React, { Component } from 'react';

//import './style.css';

class AddItem extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(
      this.nomeInput.value,
      this.sobrenomeInput.value,
      this.emailInput.value,
      this.sexoInput.value,
      this.idiomaInput.value,
      this.dataNascimentoInput.value
    );

    this.nomeInput.value = "";
    this.sobrenomeInput.value = "";
    this.emailInput.value = "";
    this.sexoInput.value = "";
    this.idiomaInput.value = "";
    this.dataNascimentoInput.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Digite o nome..."
                  ref={nomeInput => (this.nomeInput = nomeInput)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  ref={sobrenomeInput => (this.sobrenomeInput = sobrenomeInput)}
                  placeholder="Digite o Sobrenome..."
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  ref={emailInput => (this.emailInput = emailInput)}
                  placeholder="Digite o e-mail..."
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Sexo</label>
                <select
                  className="form-control"
                  name="gender"
                  ref={sexoInput => (this.sexoInput = sexoInput)}
                >
                  <option value="M" selected defaultValue>
                    M
                  </option>
                  <option value="F">F</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Idioma</label>
                <input
                  type="text"
                  className="form-control"
                  name="language"
                  ref={idiomaInput => (this.idiomaInput = idiomaInput)}
                  placeholder="Digite o idioma..."
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Data de Nascimento</label>
                <input
                  type="date"
                  data-date=""
                  data-date-format="DD MMMM YYYY"
                  className="form-control"
                  name="birthday"
                  ref={dataNascimentoInput =>
                    (this.dataNascimentoInput = dataNascimentoInput)
                  }
                  placeholder="Digite a data de nascimento..."
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-info">
                <i className="fa fa-save"></i>
                {` `}Salvar
              </button>
            </div>
          </div>
        </div>
        <hr />
      </form>
    );
  }
}

export default AddItem;