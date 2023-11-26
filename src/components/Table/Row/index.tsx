import style from "./index.module.css";

// Icons
import { BiSolidUserDetail } from "react-icons/bi";

// Type
import storageType from "../../../type/storageType";

// Components
import TransparentButton from '../../ui/TransparentButton/index';
import { genderNameTransformation } from "../../../helpers/genderNameTransformation";

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
      <td data-label="Sobrenome">{item.last_name}</td>
      <td data-label="Email">{item.email}</td>
      <td data-label="Gênero">{genderNameTransformation(item.gender)}</td>
      <td data-label="Idioma">{item.language}</td>
      <td data-label="data de nascimento">{item.birthday}</td>
      <td data-label="detalhes">
        <TransparentButton onClick={() => handleClick(item.id)} className={style.buttonDetail}>
          <BiSolidUserDetail size={30} color="#019272" />
        </TransparentButton>
      </td>
    </tr>
  )
}
