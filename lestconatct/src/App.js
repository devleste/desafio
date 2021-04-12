import React, { Fragment } from "react";
import Routes from "./routes";
import GlobalStyled, { Container, Header, Content } from "./styles/global";
import logo from "./assets/logo.png";
import { ContatosProvider } from "./providers/contatos";
import { DBConfig } from "./DBconfig";
import { initDB } from "react-indexed-db";

initDB(DBConfig);
export default function App() {
	return (
		<Fragment>
			<Container>
				<Header>
					<img src={logo} alt="logo" />
				</Header>
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
