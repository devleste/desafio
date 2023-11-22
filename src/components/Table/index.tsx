// Style
import style from "./index.module.css";

// Zustand
import { useDetail } from "../../store/useDetail";

// Icons
import { BiSolidUserDetail } from "react-icons/bi";


// Type
import storageType from "../../type/storageType";

type IProps = {
  dataValues: storageType[]
}


export default function Table({ dataValues }:IProps){
  const [setDetail, setUser] = useDetail((state) => [state.toggleDetail, state.setUser]);

  function handleClick(id: number){
    setDetail();
    const user = dataValues.filter((item:storageType )=> item.id === id);
    setUser(user[0]);
  }

  return (
    <section>
      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Language</th>
            <th scope="col">Birthday</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {
            dataValues ?
              dataValues.map((item:storageType) => (
                <tr key={item.id} className="tr">
                  <td data-label="Avatar">
                    <img className="avatar" src={item.avatar} alt="avatar" />
                  </td>
                  <td data-label="Name">{item.first_name}</td>
                  <td data-label="Lastname">{item.last_name}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Gender">{item.gender}</td>
                  <td data-label="Language">{item.language}</td>
                  <td data-label="Birthday">{item.birthday}</td>
                  <td data-label="Detail">
                    <button onClick={() => handleClick(item.id)} className={style.buttonDetail}>
                      <BiSolidUserDetail size={30} color="#019272" />
                    </button>
                  </td>
                </tr>
              )) :
              <p>
                Não contem item
              </p>
          }
        </tbody>
      </table>
    </section>
  )
}
