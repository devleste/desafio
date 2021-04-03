import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const ContSearch = styled.div`
    float: right;
    padding: 10px;
    margin-right 20px;
`;

const ButtonSearch = styled.button`
    padding 7px 10px;
    background-color: #f0f0f0;
    border: none;
    color: gray;
    font-size: 12pt;
    &:hover {
        color: black;
    }
`;

const SearchInput = styled.input`
    border: none;
    padding: 8px;
    width: 200px;
    background-color: #f0f0f0;
    color: black;
    outline: none;
    border-radius: 5px;
    &:focus {
        margin: -2px;
        border: solid 2px #05e37b6e;
    }
`;

const SearchOption = styled.select`
    border: none;
    background-color: #f0f0f0;
    padding 9px;
    margin: 0 5px; 
    appearance: none;
    min-width: 200px;
`;

const FilterOptions = styled.select`
    border: none;
    background-color: #f0f0f0;
    padding 9px;
    margin: 0 5px; 
    appearance: none;
`;

export default class Filter extends React.Component {
    state = {
        filter: 'name',
        search: '',
        onSearchFun: (filters) => {}
    }

    constructor(props) {
        super(props)
        this.state.filter = (props.filter ? props.filter.by : 'name');
        this.state.search = (props.filter ? props.filter.value : '');
        this.onSearch = this.onSearch.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.state.onSearchFun = ( typeof(props.onSearch) === 'function' ? props.onSearch : () => { } );
    }

    /* Executar quando o botão de pesquisar for precionado */
    onSearch() {
        const filter = this.state.filter;
        const search = this.state.search;
        this.state.onSearchFun({by: filter, value: search});
    }

    /* Executar quando o campo de pesquisa for editado */
    updateFilter(event) {
        this.setState({filter: event.target.value});
    }

    /* Executar quando a seleção de pesquisar for editado */
    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    /* Atualizar o campo de pesquisa dependendo da seleção */
    getComponentType() {
        if (this.state.filter === 'name' || this.state.filter === 'language') {
            return <SearchInput type={'text'} onChange={this.updateSearch} />;
        } else  if (this.state.filter === 'gender'){
            return (
                <SearchOption onChange={this.updateSearch} defaultValue={'F'}>
                    <option value={'F'}>Feminio</option>
                    <option value={'M'}>Masculino</option>
                </SearchOption>
            );
        } else if (this.state.filter === 'birthday'){
            return <SearchInput placeholder={'Mês do aniversário'} type={'month'} />
        }
    }

    render() {
        return (
        <ContSearch>
            {this.getComponentType()}
            <FilterOptions value={this.state.filter} onChange={this.updateFilter}>
                <option value='name'>Nome</option>
                <option value='gender'>Gênero</option>
                <option value='language'>Idioma</option>
                <option value='birthday'>Aniversário</option>
            </FilterOptions>
            <ButtonSearch value={this.state.search} onClick={this.onSearch}><FontAwesomeIcon icon={faSearch} /></ButtonSearch>
        </ContSearch>);
    }
}