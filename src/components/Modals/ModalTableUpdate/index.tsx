import style from "./index.module.css"

// Components
import Modal from "../../ui/Modal";
import SearchInput from "../../SearchInput";

// Zustand
import { useUpdate } from "../../../store/useUpdate";
import { useUpdateUser } from "../../../store/useUpdateUser";

// Icons
import { MdUpgrade } from "react-icons/md";

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

export default function ModalTableUpdate(){
  const [show, setShow] = useUpdate((state) => [state.update, state.toggleUpdate])
  const setUpdateUser = useUpdateUser((state) => state.toggleUpdateUser);

  function handleClick(){
    setShow();
    setUpdateUser();
  }

  return (
    <Modal isOpen={show} toogleModal={setShow} >
      <h1 className={style.title}>Upgrade</h1>
      <SearchInput />
      <section className={style.listContainer}>
        <ul>
          {
            data.map((item) => (
              <li key={item.id}>
                <div className={style.informations}>
                  <img src={item.avatar} alt="Avatar" />
                  <h4>{item.first_name} {item.first_name}</h4>
                </div>
                <button onClick={handleClick}>
                  Update <MdUpgrade size={16} color="#ffffff" />
                </button>
              </li>
            ))
          }
        </ul>
      </section>
    </Modal>
  )
}
