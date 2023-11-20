import "./App.css"
import Card from "./components/Card"
import Footer from './components/Footer'
import Header from './components/Header'
import { SearchInput } from "./components/SearchInput"
import Button from "./components/ui/Button"
import { Input } from "./components/ui/Input"

import { PiLightbulbFilamentBold, PiUserFocusBold } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";



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

const dataCard = [
  {
    id: 1,
    title: "Innovation",
    paragraph: "Leste Telecom is always looking for new ways to improve its products and services. We believe that innovation is essential for the company's success.",
    icon: <PiLightbulbFilamentBold size={70} color="#009373" />
  },
  {
    id: 2,
    title: "Customer focus",
    paragraph: "Leste Telecom is committed to meeting the needs of its customers. Our goal is to provide our customers with high-quality products and services that meet their expectations.",
    icon: <PiUserFocusBold size={70} color="#009373" />

  },
  {
    id: 3,
    title: "Team work",
    paragraph: "Leste Telecom believes in the power of teamwork. We are a collaborative company and we value the joint work of all our employees.",
    icon: <RiTeamLine size={70} color="#009373" />
  }
]

function App() {

  return (
    <div className="container">
      <Header />
      <h1 className="title">Leste Contact</h1>
      <SearchInput />
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
              </tr>
            ))
          }
        </tbody>
      </table>
        
      <section className="formSection">
        <h2>Contact us</h2>
        <form className="form">
          <Input htmlForName="Name" placeholder="Type your name" />
          <Input htmlForName="Email" placeholder="Type your email" />
          <div className="textareaContainer">
            <label htmlFor="Message">Message</label>
            <textarea id="Message" placeholder="Type your message"></textarea>
          </div>
          <div>
            <Button>
              Submit
            </Button>
          </div>
        </form>
      </section>

      <section className="cardsContainer">
        {
          dataCard.map(card => (
            <Card key={card.id} icon={card.icon} title={card.title} paragraph={card.paragraph} />
          ))
        }
      </section>
      
      <Footer/>
    </div>
  )
}

export default App
