import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";
import ReactModal from "react-modal";
import { ColorRing } from "react-loader-spinner";
import DatePicker from "react-datepicker";

export default function Contacts() {
  const [newContact, setNewContact] = useState([]);
  const [combinedContacts, setCombinedContacts] = useState([]);
  const [list, setList] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [create, setCreate] = useState(false);
  const localStorage = window.localStorage;
  const contacts = {};
  const [formInfo, setFormInfo] = useState({
    gender: "",
    birthday: "",
  });

  const [formText, setFormText] = useState({
    first_name: "",
    last_name: "",
    email: "",
    language: "",
    avatar: "",
  })

  useEffect(() => {
    const urlAPI = `${process.env.REACT_APP_API_URL}`;
    const promise = axios.get(urlAPI);
    promise.then((res) => {
      setCombinedContacts([...res.data, ...newContact]); 
      setList(true);
    });
    promise.catch((err) => {
      console.log(err.response.data);
      alert("Erros no sistema.");
    });

    const localStorageData = JSON.parse(localStorage.getItem("contatos")) || [];
    setNewContact(localStorageData);
  }, []);


  function createContact() {
    const newContactId = combinedContacts.length + 1;
    const newContactObj = {
      id: newContactId,
      first_name: formText.first_name, 
      last_name: formText.last_name, 
      email: formText.email, 
      gender: formInfo.gender, 
      language: formText.language, 
      avatar: formText.avatar, 
      birthday: formInfo.birthday
    }
    
    localStorage.setItem("contatos", JSON.stringify([newContactObj, ...newContact]));
    setNewContact([newContactObj, ...newContact]); 
    setCombinedContacts([newContactObj, ...combinedContacts]);  
  

    setFormText({
      first_name: "",
      last_name: "",
      email: "",
      language: "",
      avatar: "",
    });
    setFormInfo({
      gender: "",
      birthday: "",
    });

    setOpenedModal(false);
    
  }

  function handleForm(e) {
    const { name, value } = e.target;
    setFormText((prevFormText) => ({
      ...prevFormText,
      [name]: value,
    }));
  }

  function handleDateForm(e) {
    if (e instanceof Date) {
      const selectedDate = e.toISOString().split("T")[0];
      setFormInfo((prevFormInfo) => ({
        ...prevFormInfo,
        birthday: selectedDate,
      }));
    }
  }

  function handleGenderForm(e) {
    const { value } = e.target;
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      gender: value,
    }));
  }

  return (
    <Wrapper>
      <header>
        <p>Contatos</p>
        <span>
          <button
            onClick={() => {
              setOpenedModal(true);
            }}
          >
            Adicionar novo contato
          </button>
        </span>
      </header>
      <hr />
      {list ? (
        <List>
          <Category>
            <p></p>
            <p>Nome completo</p>
            <p>E-mail</p>
            <p>Nascimento</p>
            <p>Gênero</p>
            <p>Linguagem</p>
          </Category>

          <span>
            {combinedContacts.map((contact, index) => (
              <Card key={index} contact={contact} />
            ))}
          </span>
        </List>
      ) : (
        <NoList>Nenhum contato</NoList>
      )}

      <StyledModal
        appElement={document.getElementById("root")}
        isOpen={openedModal}
        style={customStyles}
      >
        <p>Novo contato</p>
        <Forms>
          <form onSubmit={createContact}>
            <Info>
              <span>
                <p>Nome:</p>
                <input
                  required
                  type="name"
                  value={formText.first_name}
                  onChange={handleForm}
                  name="first_name"
                />
              </span>
              <span>
                <p>Sobrenome:</p>
                <input
                  required
                  type="name"
                  value={formText.last_name}
                  onChange={handleForm}
                  name="last_name"
                />
              </span>
            </Info>

            <Email>
              <p>E-mail:</p>
              <input
                required
                type="email"
                value={formText.email}
                onChange={handleForm}
                name="email"
              />
            </Email>

            <Info>
              <span>
                <p>Avatar:</p>
                <input
                  required
                  type="imagem"
                  value={formText.avatar}
                  onChange={handleForm}
                  name="avatar"
                />
              </span>
              <span>
                <p>Linguagem:</p>
                <input
                  required
                  type="text"
                  value={formText.language}
                  onChange={handleForm}
                  name="language"
                />
              </span>
            </Info>

            <Info>
              <span>
                <p>Data de nascimento:</p>

                <DatePicker
                  name="birthday"
                  dateFormat="DD/MM/YYYY"
                  value={formInfo.birthday}
                  onChange={handleDateForm}
                />
              </span>
              <span>
                <p>Gênero:</p>
                <form action="">
                  <input 
                  list="Gênero"
                  name="gender"
                  value={formInfo.gender}
                  onChange={handleGenderForm}
                  />
                  <datalist id="Gênero">
                    <option value="M" />
                    <option value="F" />
                    <option value="N" />
                  </datalist>
                </form>
              </span>
            </Info>
          </form>
        </Forms>

        {create ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
            ]}
          />
        ) : (
          <div>
            <WhiteButton
              data-test="cancel"
              onClick={() => setOpenedModal(false)}
            >
              Cancelar
            </WhiteButton>
            <BlueButton data-test="confirm" onClick={() => {createContact()}}>
              Salvar
            </BlueButton>
          </div>
        )}
      </StyledModal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lexend Deca", sans-serif;
  color: #ffffff;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #deba76;
    margin-top: 15px;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
      border: none;
      padding: 7px;
      border-radius: 5px;
      color: #201520;
      background-color: #deba76;
      font-family: "Lexend Deca", sans-serif;
      margin-right: 15px;
    }

    p {
      font-size: 20px;
    }
  }
`;
const Category = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 3fr 2fr 2fr 2fr 0.5fr;
  align-items: center;
  font-size: 13px;
  margin-top: 10px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "35%",
    backgroundColor: "#201520",
    margin: "auto",
    borderRadius: "50px",
    padding: "20px",

    fontFamily: "Lexend Deca",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "25.8px",
    color: "#FFFFFF",
    textAlign: "center",
  },
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "2",
  },
};

const StyledModal = styled(ReactModal)`
  ${customStyles.content}
`;

const BlueButton = styled.button`
  background-color: #deba76;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
  color: #201520;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  width: 112px;
  margin-left: 20px;
  margin-top: 25px;
`;
const WhiteButton = styled.button`
  background-color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
  color: #201520;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  width: 112px;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 13px;
    display: flex;
  }

  input {
    border-radius: 2px;
    border: none;
    outline: none;
    padding: 5px;
  }
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  span {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 10px;
  }

  form {
    margin-bottom: 5px;
    input {
      padding: 5px;
    }
  }
`;
