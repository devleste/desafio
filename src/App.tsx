// Style
import "./App.css"

// Components
import Footer from './components/Footer'
import Form from "./components/Form"
import Header from './components/Header'
import Map from "./components/Map"
import SearchInput from "./components/SearchInput"
import TableFuncionalitis from "./components/TabletFuncionalitis"

// Modals
import ModalStatistics from "./components/Modals/ModalStatistics"
import ModalTableDelete from "./components/Modals/ModalaTableDelete"
import ModalTableUpdate from "./components/Modals/ModalTableUpdate"
import ModalAddUser from "./components/Modals/ModalAddUser"
import ModalDetail from "./components/Modals/ModalDetail"
import ModalFilter from "./components/Modals/ModalFilter"
import ModalUpdateUser from "./components/Modals/ModalUpdadeUser"

// Icons
import { BiSolidUserDetail } from "react-icons/bi";

// Zustand
import { useDetail } from "./store/useDetail"

const data = [
  {
    id:	1,
    first_name:	"Ragnar",
    last_name:	"Bendtsen",
    email:	"rbendtsen0@about.me",
    gender:	"M",
    language:	"Kannada",
    avatar:	"https://robohash.org/quooccaecatiqui.png?size=100x100&set=set1",
    birthday:	"1994-12-08",
  },{
    id:	2,
    first_name:	"Chrissy",
    last_name:	"Heinke",
    email:	"cheinke1@businessweek.com",
    gender:	"F",
    language:	"Kurdish",
    avatar:	"https://robohash.org/molestiaseaeius.bmp?size=100x100&set=set1",
    birthday:	"1997-12-17",
  },{
    id:	3,
    first_name:	"Lincoln",
    last_name:	"Antrobus",
    email:	"lantrobus2@dagondesign.com",
    gender:	"M",
    language:	"Oriya",
    avatar:	"https://robohash.org/repellatnonrerum.png?size=100x100&set=set1",
    birthday:	"1957-03-23",
  }
]

function App() {
  const [setDetail, setUser] = useDetail((state) => [state.toggleDetail, state.setUser]);

  function handleClick(id: number){
    setDetail();

    const user = data.filter(item => item.id === id);

    setUser(user[0]);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">Leste Contact</h1>
        <SearchInput />
        <TableFuncionalitis />
        <section>
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Language</th>
                <th scope="col">Avatar</th>
                <th scope="col">Birthday</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {
                data.map((item) => (
                  <tr key={item.id} className="tr">
                    <td data-label="Name">{item.first_name}</td>
                    <td data-label="Lastname">{item.last_name}</td>
                    <td data-label="Email">{item.email}</td>
                    <td data-label="Gender">{item.gender}</td>
                    <td data-label="Language">{item.language}</td>
                    <td data-label="Avatar">
                      <img className="avatar" src={item.avatar} alt="avatar" />
                    </td>
                    <td data-label="Birthday">{item.birthday}</td>
                    <td data-label="Detail">
                      <button onClick={() => handleClick(item.id)} className="buttonDetail"><BiSolidUserDetail size={30} color="#019272" /></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
        <Form/>
        <Map/>

        <ModalStatistics/>
        <ModalTableDelete/>
        <ModalTableUpdate />
        <ModalUpdateUser />
        <ModalAddUser />
        <ModalDetail/>
        <ModalFilter />
        <ModalDetail />
      </main>
      <Footer/>
    </div>
  )
}

export default App
