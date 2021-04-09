import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetalheContato from "./pages/DetalheContato";
import editaContato from "./pages/EditaContato";
import ListaContatos from "./pages/ListaContatos";
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ListaContatos} />
			<Route exact path="/contato/:id/show" component={DetalheContato} />
			<Route exact path="/contato/:id/edit" component={editaContato} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
