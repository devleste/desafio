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

// Zustand
import { useFilter } from "./store/useFilter";

// Helpers
import filtering from "./helpers/filtering";
import FlashMessage from "./components/FlashMessage";

function App() {
  const [data, setData] = useState<storageType[]>(HandleFetch() ?  HandleFetch() : []);
  const [dataValues, setDataValues] = useState<storageType[]>([]);
  
  const [seachInpuValue, setSeachInpuValue] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const [
    currentLanguage, 
    currentGender, 
    currentFilterDate
    ] = useFilter((state) => [
      state.languageFilter, 
      state.genderFilter, 
      state.dateFilter
    ]);

  function currentPosts(data: storageType[]){
    // This code snippet calculates the index range for retrieving a specific set of data based on the current page and the number of items per page.
    const lastPostIndex = currentPage * postsPerPage; // Returns the index of the last post on the current page
    const firstPostIndex = lastPostIndex - postsPerPage; // Returns the index of the first post on the current page

    return data.slice(firstPostIndex, lastPostIndex); // Slice the data array to retrieve the desired range of posts
  }

  useEffect(() => {
    async function getData(){
      if(data.length !== 0){
        return;
      }

      const response = axios.get("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060");
      setData((await response).data);
      HandleSave((await response).data);
    }
    getData();

    setDataValues(filtering(data, currentFilterDate, currentGender, currentLanguage, seachInpuValue));

  }, [seachInpuValue, data, currentLanguage, currentGender, currentFilterDate]);

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">Leste Contatos</h1>
        <SearchInput value={seachInpuValue} setValue={setSeachInpuValue} />
        <TableFuncionalitis />
        <Table dataValues={currentPosts(dataValues)} />
        <Paginate 
          totalPosts={dataValues.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
        <Form/>

        <ModalStatistics data={data} />
        <ModalTableDelete data={data} updateTable={setData}/>
        <ModalTableUpdate data={data} />
        <ModalUpdateUser updateTable={setData} />
        <ModalAddUser updateTable={setData} />
        <ModalDetail />
        <ModalFilter data={data} />
        <ModalDetail />
        <FlashMessage />
      </main>
      <Footer/>
    </div>
  )
}

export default App

// @TODO - Começar a fazer os testes;
