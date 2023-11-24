import { useEffect } from "react";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App(){

  useEffect(() => {
    document.title = 'Leste Telecom';

    return () => {
      document.title = 'React App';
    };

  }, []); 

  return(
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  )
}
