import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class ContatoList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isEnable: true,
            users: [],
            contatos: [],
            teste: [],
            columnDefs: [{
                headerName: "Nome", field: "first_name", sortable: true, filter: true
              }, {
                headerName: "Email", field: "email", sortable: true, filter: true
              }, {
                headerName: "Idioma", field: "language", sortable: true, filter: true
              }, {
                headerName: "Sexo", field: "gender", sortable: true, filter: true
              }, {
                headerName: "Aniversario", field: "birthday", sortable: true, filter: true
              }
            ],
        };
        //this.state ={isEdit:false}
        //this.editContato = this.editContato.bind(this);
        //this.editContatoSubmit = this.editContatoSubmit.bind(this);
        this.removeContato = this.removeContato.bind(this);
    }
    
    removeContato = (e, id) => {
        this.props.removeContato(e, id);
    };

    render() {
        return(
            <div>
                <div style={{ height: '600px', width: '100%' }} className="ag-theme-balham col s12">
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.props.contatos}>
                    </AgGridReact>
                </div>
            </div>
        )
    }
}
export default ContatoList;