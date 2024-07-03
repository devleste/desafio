import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lista from "./pages/Lista"
import FormContato from "./pages/FormContato"
import Header from "./components/header";
import Analise from "./pages/Analise";

/* import Home from "./pages/home";
import Saude from "./pages/saude";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Header from "./components/header";
import Erro from "./pages/error";
import Produto from "./pages/produto"; */


function RoutesApp(){
    return(
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Lista/>}/>
    <Route path="/add" element={<FormContato/>}/>
    <Route path="/add/:paramId" element={ <FormContato/> } />
    <Route path="/analise" element={ <Analise/> } />
    </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp