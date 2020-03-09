import React from 'react'
import "./global.css"
import "./App.css"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Routes from "./routes"

function App() {
	return (
		<div className="app">
			<Header/>
			<div className="body-app">
				<Sidebar/>
				<Routes />
			</div>
		</div>
	)		
}

export default App