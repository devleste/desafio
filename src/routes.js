import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from "./pages/Home";
import MyContacts from "./pages/MyContacts";
import NewContact from "./pages/NewContact";
import NotFound from "./pages/NotFound";
import EditContact from "./pages/EditContact";

function RoutesApp() {
    return (
        <BrowserRouter>

            <Header />
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/meus-contatos"
                    element={<MyContacts />}
                />

                <Route
                    path="/novo-contato"
                    element={<NewContact />}
                />

                <Route
                    path="/edit-contact"
                    element={<EditContact />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;