import './App.css'
import Header from './components/Header'
import TableBodyContainer from './components/ui/TableComponents/TableBodyContainer'
import TableContainer from './components/ui/TableComponents/TableContainer'
import TableHeadContainer from './components/ui/TableComponents/TableHeadContainer'

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

  return (
    <>
      <Header />
      <TableContainer>
        <TableHeadContainer>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>email</th>
            <th>gender</th>
            <th>language</th>
            <th>avatar</th>
            <th>birthday</th>
          </tr>
        </TableHeadContainer>
        <TableBodyContainer>
          {
            data.map(item => (
              <tr>
                <th>{item.first_name}</th>
                <th>{item.last_name}</th>
                <th>{item.email}</th>
                <th>{item.gender}</th>
                <th>{item.language}</th>
                <th>
                  <img src={item.avatar} alt="avatar" />
                </th>
                <th>{item.birthday}</th>
              </tr>
            ))
          }
        </TableBodyContainer>
      </TableContainer>
    </>
  )
}

export default App
