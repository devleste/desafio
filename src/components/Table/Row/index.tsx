import style from "./index.module.css";

// Icons
import { BiSolidUserDetail } from "react-icons/bi";

// Type
import storageType from "../../../type/storageType";

// Components
import TransparentButton from '../../ui/TransparentButton/index';

type IProps = {
  handleClick: (id: number) => void,
  item: storageType
}

export default function Row({item, handleClick}:IProps){

  return (
    <tr key={item.id} className={style.tr}>
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
        <TransparentButton onClick={() => handleClick(item.id)} className={style.buttonDetail}>
          <BiSolidUserDetail size={30} color="#019272" />
        </TransparentButton>
      </td>
    </tr>
  )
}
