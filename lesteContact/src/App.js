import React, { Fragment } from "react";
import Routes from "./routes";
import GlobalStyled, { Container, Header, Content } from "./styles/global";
import logo from "./assets/logo.png";
import { ContatosProvider } from "./providers/contatos";

export default function App() {
	return (
		<Fragment>
			<Container>
				<a href="/">
					<Header>
						<img src={logo} alt="logo" />
					</Header>
				</a>
				<ContatosProvider>
					<Content>
						<Routes />
					</Content>
				</ContatosProvider>
			</Container>
			<GlobalStyled />
		</Fragment>
	);
}
