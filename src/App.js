import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactsList from "./components/ContactsList/ContactsList";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
            <Header />
            <ContactsList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact>
            <Header />
            <ContactsList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
