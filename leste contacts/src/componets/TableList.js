import React from 'react';
import swal from 'sweetalert';
import styled from 'styled-components';

import api from '../api/http';
import TableRow from './TableRow';
import Filter from './Filter';
import Loading from './Loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'


const Table = styled.table`
    {
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
    }
    input {
        border: none;
        padding: 8px;
        box-sizing: border-box;
        width: 100%;
        background-color: #f0f0f0;
        color: black;
        outline: none;
        border-radius: 5px;
        &:focus {
            margin: -2px;
            border: solid 2px #05e37b6e;
        }
    }
    select {
        outline: none;
        border: none;
        padding: 8px;
        border-radius: 5px;
        background-color: #f0f0f0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        &:focus {
            margin: -2px;
            border: solid 2px #05e37b6e;
        }
    }
    th, td {
        border-bottom: solid lightgrey 1px;
        text-align: left;
        padding: 5px;
    }
`;

const Error = styled.div`
    text-align: center;
    color: red;
`;

export default class TableList extends React.Component {
    state = {
        loading: true,
        contacts: [],
        filter: { value: '', by: 'name' }
    }

    constructor(drops) {
        super(drops)
        this.updateContact = this.updateContact.bind(this);
        this.delCont = this.deleteCont.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentDidMount() {
        this.updateContacts();
    }

    /* Funções do componente */
    updateFilter(filter) {
        this.setState({ filter: filter });
    }

    updateContacts() {
        this.setState({ loading: true }); /* Aparecer o loading na tela */
        api.get('').then((res) => {
            const data = res.data;
            this.setState({ contacts: data, loading: false });
        }).catch(() => {
            this.setState({ contacts: null, loading: false }); /* Caso contacts seja nulo ele aparece um erro na tela */
        });
    }

    /* Funções da API */
    updateContact() {
        let cont = document.getElementById('contacts-plus');
        let cont_data = {
            id: (this.state.contacts[this.state.contacts.length - 1].id + 1),
            first_name: cont.getElementsByClassName('name')[0].value,
            last_name: cont.getElementsByClassName('lastname')[0].value,
            email: cont.getElementsByClassName('contact')[0].value,
            gender: cont.getElementsByClassName('gender')[0].value,
            language: cont.getElementsByClassName('language')[0].value,
            birthday: cont.getElementsByClassName('birthday')[0].value
        }
        if (!(cont_data.first_name && cont_data.last_name && cont_data.email && cont_data.gender && cont_data.language && cont_data.birthday)) {
            swal('Informe todos os dados para efetuar o cadastro do contato', { icon: "error" });
            return;
        }
        /* Aqui ele enviaria uma request da api e só adicionaria caso a requisição fosse bem sucedida */
        let contacts = this.state.contacts;
        contacts.unshift(cont_data);
        this.setState({contacts: contacts});
    }

    deleteCont(id) {
        swal({
            title: "Você tem certeza?",
            text: "Uma vez feita essa ação não pode ser desfeita!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                /* Aqui ele enviaria uma request para api */
                swal("Deletado com sucesso!", { icon: "success" });
                let contacts = this.state.contacts;
                let index = contacts.map(c => {return c.id}).indexOf(id);
                contacts.splice(index, 1);
                this.setState({contacts: contacts})
            }
        })
    }

    Filter(contact) {
        if (this.state.filter.by === 'name' && this.state.filter.value !== '') {
            if (contact.first_name.toLowerCase().includes(this.state.filter.value.toLowerCase())) {
                return true;
            }
        } else if(this.state.filter.by === 'gender' && this.state.filter.value !== '') {
            if (contact.gender === this.state.filter.value) {
                return true;
            }
        } else if(this.state.filter.by === 'language' && this.state.filter.value !== '') {
            if (contact.language === this.state.filter.value) {
                return true;
            }
        } else if(this.state.filter.by === 'birthday' && this.state.filter.value !== '') {
            console.log(this.state.filter.value);
            return true;
        } else {
            return true;
        }
        return false;
    }

    render() {
        if (this.state.loading) {
            return (<Loading />);
        } else if (this.state.contacts === null){
            return <Error><h2>Erro ao acessar dados na API!</h2></Error>;
        } else {
            return (
                <div>
                    <Filter filter={this.state.filter} onSearch={(filter) => this.updateFilter(filter)}/>
                    <Table cellSpacing={'0'} cellPadding={'0'}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sobre Nome</th>
                                <th>Email</th>
                                <th>Gênero</th>
                                <th>Idioma</th>
                                <th style={{width: '80px'}}>Idade</th>
                                <th>Data de Nascimento</th>
                                <th style={{width: '80px'}}>Ações</th>
                            </tr>
                        </thead>
                        <tbody id={'cont_list'}>
                            <TableRow>
                                <button className={'action-btn btn-black'} title={'Criar'} onClick={() => this.updateContact(null)}><FontAwesomeIcon icon={faPlus} /></button>
                            </TableRow>
                            {this.state.contacts.map(contact => ( this.Filter(contact) ?
                            <TableRow key={contact.id} contact={contact}>
                                <button className={'action-btn btn-green'} title={'Salvar'}><FontAwesomeIcon icon={faEdit} /></button>
                                <button className={'action-btn btn-red'} title={'Remover'} onClick={() => this.delCont(contact.id)}><FontAwesomeIcon icon={faTrash} /></button>
                            </TableRow> : ''))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}