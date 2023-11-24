import { styled } from "styled-components";
import { useState } from "react";
import EditModal from "./Modal/EditModal";
import ReactModal from "react-modal";
import DeleteModal from "./Modal/DeleteModal";

export default function Card({ contact, key }) {

  const [openedModal, setOpenedModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [formInfo, setFormInfo] = useState({first_name: "", last_name: "", email: "", gender: "", language: "", avatar: "", birthday: ""});

    function formatDate(date){
        if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            const [year, month, day] = date.split('-');
            const result = `${day}/${month}/${year}`;
            return result;
          } else {
           
            return date;
          }
    }

    function handleForm(e){
      setFormInfo(({ ...formInfo, [e.target.name]: e.target.value}));
    }
  

  return (
    <Wrapper>
      <span>
        <img key={key} src={contact.avatar} />
        <p>
          {contact.first_name} {contact.last_name}
        </p>
        <p>{contact.email}</p>
        <p>{formatDate(contact.birthday)}</p>
        <p>{contact.gender}</p>
        <p>{contact.language}</p>
      </span>
      
    <div>  
    <ion-icon onClick={() => {setOpenedModal(true)}}  name="create-outline"></ion-icon>
    <ion-icon onClick={() => {setDeleteModal(true)}} name="trash-outline"></ion-icon>
    </div>
  

    <EditModal 
    openedModal={openedModal} 
    setOpenedModal={setOpenedModal}
    formInfo={formInfo}
    handleForm={handleForm}
    />

    <DeleteModal
    openedModal={deleteModal} 
    setOpenedModal={setDeleteModal}
    />

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  margin-top: 18px;

  span {
    display: grid;
    align-items: center;
    flex-direction: row;
    width: 100%;
    grid-template-columns: 1fr 2fr 3fr 2fr 2fr 2fr;
    padding: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  div {
    font-size: 15px;
    display: flex;
    align-items: center;
    width: 45px;
    justify-content: space-between;
  }

`;