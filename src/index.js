import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './Components/Form';
import Edit from './Components/Form/edit';
import * as serviceWorker from './serviceWorker';

import NavBar from './Components/NavBar';
import Relatorio from './Components/Relatorio';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/form" component={Form} />
            <Route path='/:userId/:index' component={Edit} />
            <Route path="/relatorio" component={Relatorio} />
            </Switch>
        
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
