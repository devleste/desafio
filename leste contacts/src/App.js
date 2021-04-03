import styled from 'styled-components';

import './App.css';
import TableList from './componets/TableList.js'

const Card = styled.div`
  background-color: white;
  min-height: 100px;
  margin: 32px 64px;
  border-radius: 15px;
  box-shadow: 0px 3px 10px 0px black;
  padding: 10px;
`;

const Header = styled.div`
  color: #131313;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;
  padding: 10px;
  border-bottom: solid 2.5px gray;
  text-align: center;
`;

function App() {
  return (
    <Card>
      <Header><a href={'https://www.lestetelecom.com.br/'}><img src={'leste-logo.webp'} alt={''}></img></a><h2>Lista de Contatos</h2></Header>
      <TableList />
    </Card>
  );
}

export default App;