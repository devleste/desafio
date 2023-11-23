// React
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Style
import "./App.css";

// Components
import Footer from './components/Footer';
import Form from "./components/Form";
import Header from './components/Header';
import Map from "./components/Map";
import SearchInput from "./components/SearchInput";
import TableFuncionalitis from "./components/TabletFuncionalitis";

// Modals
import ModalStatistics from "./components/Modals/ModalStatistics";
import ModalTableDelete from "./components/Modals/ModalaTableDelete";
import ModalTableUpdate from "./components/Modals/ModalTableUpdate";
import ModalAddUser from "./components/Modals/ModalAddUser";
import ModalDetail from "./components/Modals/ModalDetail";
import ModalFilter from "./components/Modals/ModalFilter";
import ModalUpdateUser from "./components/Modals/ModalUpdadeUser";

// Storage
import { HandleFetch, HandleSave } from "./services/storage";

// Type
import storageType from './type/storageType';
import Paginate from "./components/Paginate";
import Table from "./components/Table";

// const data = [
//   {
//     id:	1,
//     first_name:	"Ragnar",
//     last_name:	"Bendtsen",
//     email:	"rbendtsen0@about.me",
//     gender:	"M",
//     language:	"Kannada",
//     avatar:	"https://robohash.org/quooccaecatiqui.png?size=100x100&set=set1",
//     birthday:	"1994-12-08",
//   },{
//     id:	2,
//     first_name:	"Chrissy",
//     last_name:	"Heinke",
//     email:	"cheinke1@businessweek.com",
//     gender:	"F",
//     language:	"Kurdish",
//     avatar:	"https://robohash.org/molestiaseaeius.bmp?size=100x100&set=set1",
//     birthday:	"1997-12-17",
//   },{
//     id:	3,
//     first_name:	"Lincoln",
//     last_name:	"Antrobus",
//     email:	"lantrobus2@dagondesign.com",
//     gender:	"M",
//     language:	"Oriya",
//     avatar:	"https://robohash.org/repellatnonrerum.png?size=100x100&set=set1",
//     birthday:	"1957-03-23",
//   }
// ]

function App() {
  const [data, setData] = useState<storageType[]>(HandleFetch());

  const [seachInpuValue, setSeachInpuValue] = useState<string>("");
  const [dataValues, setDataValues] = useState(data);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(5);

  function currentPosts(){
    // This code snippet calculates the index range for retrieving a specific set of data based on the current page and the number of items per page.
    const lastPostIndex = currentPage * postsPerPage; // Returns the index of the last post on the current page
    const firstPostIndex = lastPostIndex - postsPerPage; // Returns the index of the first post on the current page

    return dataValues.slice(firstPostIndex, lastPostIndex); // Slice the data array to retrieve the desired range of posts
  }

  useEffect(() => {
    // console.log(HandleFetch());
    async function getData(){
      if(data){
        return;
      }

      const response = axios.get("https://jsonplaceholder.typicode.com/todos/1");
      setData((await response).data);

      console.log("!!!!!!!!!!!!!!EEEEEEEEEERRRRROOOOO!!!!!!!!!!!!!!!!!");

      HandleSave(data)
    }
    getData();
    function filterTable(){
      setDataValues(data.filter((item:storageType) => (item.first_name).includes(seachInpuValue)))

      if(seachInpuValue === ""){
        setDataValues(data);
      }
    }
    filterTable();
  }, [seachInpuValue, data])

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">Leste Contact</h1>
        <SearchInput value={seachInpuValue} setValue={setSeachInpuValue} />
        <TableFuncionalitis />
        <Table dataValues={currentPosts()} />
        <Paginate 
          totalPosts={dataValues.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
        <Form/>
        <Map/>

        <ModalStatistics />
        <ModalTableDelete data={data} updateTable={setData}/>
        <ModalTableUpdate data={data} />
        <ModalUpdateUser updateTable={setData} />
        <ModalAddUser updateTable={setData} />
        <ModalDetail />
        <ModalFilter data={data} />
        <ModalDetail />
      </main>
      <Footer/>
    </div>
  )
}

export default App

// @TODO - Refatorar os search dos searchInput;
// @TODO - Tolowercase nos search input;
// @TODO - ajeitar o tamanho dos modais;
// @TODO - Substituir o mapa da pagina por outra coisa;
// @TODO - Implementar o envio de formulario para o meu email (contate o desenvolvedor);
// @TODO - refatorar o paginate;
// @TODO - Colocar os types na pasta type;
// @TODO - Melhorar os nomes dos arquivos de context API(zustand);
// @TODO - Diminuir logica nos components;
// @TODO - Responsabilidade unica;
// @TODO - Enxugar o componente App;
// @TODO - Colocar as estatisticas certas;
// @TODO - Começar a fazer os testes;
