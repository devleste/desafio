// Style
import style from "./index.module.css";

// Zustand
import { useDetail } from "../../store/useDetail";

// Type
import storageType from "../../type/storageType";
import Row from "./Row";

export default function Table({ dataValues }:{dataValues: storageType[]}){
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
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Email</th>
            <th scope="col">Gênero</th>
            <th scope="col">Idioma</th>
            <th scope="col">Data de nascimento</th>
            <th scope="col">Detalhes</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {dataValues ?
            dataValues.map((item:storageType) => <Row key={item.id} item={item} handleClick={handleClick} />) :
            <tr className={style.notFoundItens}>
              Não contem item
            </tr>
          }
        </tbody>
      </table>
    </section>
  )
}
