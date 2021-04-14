import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdicionarContato from "./pages/AdicionarContato";
import DetalheContato from "./pages/DetalheContato";
import editaContato from "./pages/EditaContato";
import HomePage from "./pages/HomePage";
import ListaContatos from "./pages/ListaContatos";
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/contatos/adicionar" component={AdicionarContato} />
			<Route exact path="/contatos" component={ListaContatos} />
			<Route exact path="/contato/:id/show" component={DetalheContato} />
			<Route exact path="/contato/:id/edit" component={editaContato} />
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
