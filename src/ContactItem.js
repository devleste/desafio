import React, { Component } from 'react';

//import './style.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
class ProductItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, first_name } = this.props;

    onDelete(first_name);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(
      this.nomeInput.value,
      this.sobrenomeInput.value,
      this.emailInput.value,
      this.sexoInput.value,
      this.idiomaInput.value,
      this.dataNascimentoInput.value,
      this.props.first_name
    );

    this.setState({ isEdit: false });
  }

  render() {
    const {
      first_name,
      last_name,
      email,
      gender,
      language,
      birthday,
      avatar
    } = this.props;

    return (
      <div>
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <div className="form">
              <div className="row">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    ref={nomeInput => (this.nomeInput = nomeInput)}
                    defaultValue={first_name}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    ref={sobrenomeInput =>
                      (this.sobrenomeInput = sobrenomeInput)
                    }
                    defaultValue={last_name}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    ref={emailInput => (this.emailInput = emailInput)}
                    defaultValue={email}
                  />
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    name="gender"
                    ref={sexoInput => (this.sexoInput = sexoInput)}
                    defaultValue={gender}
                  >
                    <option value="M" selected defaultValue>
                      M
                    </option>
                    <option value="F">F</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="language"
                    ref={idiomaInput => (this.idiomaInput = idiomaInput)}
                    defaultValue={language}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    data-date=""
                    data-date-format="DD MMMM YYYY"
                    className="form-control"
                    name="birthday"
                    ref={dataNascimentoInput =>
                      (this.dataNascimentoInput = dataNascimentoInput)
                    }
                    defaultValue={birthday}
                  />
                </div>

                <button className="btn btn-info">
                  <i className="fa fa-save"></i>
                  {` `}Salvar
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div>
            <b>Nome:</b> {first_name}
            {`     |    `}
            <b>Sobrenome:</b> {last_name}
            {`     |    `}
            <b>Email:</b> {email}
            {`     |    `}
            <b>Sexo:</b> {gender}
            {`     |    `}
            <b>Idioma:</b> {language}
            {`     |    `}
            <b>Nascimento:</b> {birthday}
            {`     |    `}
            <img src={avatar} alt="avatar" width="50" height="50" />
            {`     |    `}
            <button
              className="btn btn-info"
              onClick={this.onEdit}
              title="Apagar"
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-dark ml-2"
              onClick={this.onDelete}
              title="Apagar"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProductItem;