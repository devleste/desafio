import { useContext } from "react";
import { ContactsContext } from "../../context/context";
import Edit from "../EditUser/Edit";
import Loading from "../Loading/Loading";
import ContactListStyle from "./ContactsListStyle";

const ContactsList = () => {

    const {
        filtredAll,
        all,
        update,
        setUpdate,
        newContact,
        isEditOpen,
        setIsEditOpen,
        setNewContacts
    } = useContext(ContactsContext);

    const dataAtual = new Date();

    return (
        <ContactListStyle>
            <div className="filterMenu">
                <div>Avatar</div>
                <div>Name</div>
                <div>Lastnome</div>
                <div>Email</div>
                <div>Gender</div>
                <div>Language</div>
                <div>Age</div>
                <div>Birthday</div>
                <div>Actions</div>
            </div>
            {typeof filtredAll !== 'undefined' ? filtredAll.map((item,index) => {

                const deleteItem = () => {
                    if (window.confirm('Tem certeza que deseja deletar esse usuário?')) {
                    all.splice(index,1)
                    alert('Deletado com sucesso!')
                    localStorage.setItem('contacts',JSON.stringify(all));
                    setUpdate(update ? false : true);
                    }
                } 
                const openEditMenu = () => {
                    let contato = {
                        avatar:filtredAll[index].avatar,
                        first_name:filtredAll[index].first_name,
                        last_name:filtredAll[index].last_name,
                        email:filtredAll[index].email,
                        gender:filtredAll[index].gender,
                        language:filtredAll[index].language,
                        birthday:filtredAll[index].birthday
                    };
                    setNewContacts(contato);
                    setIsEditOpen(isEditOpen ? false : true);
                }

                const editItem = () => {
                    console.log(index);
                    all.splice(index-1,1,newContact)
                    localStorage.setItem('contacts',JSON.stringify(all));
                    setUpdate(update ? false : true);
                    openEditMenu();
                }
                return (
                    <div className="contactList" key={item.id}>
                        <img alt="avatar" src={item.avatar} />
                        <div>{item.first_name}</div>
                        <div>{item.last_name}</div>
                        <div>{item.email}</div>
                        <div>{item.gender}</div>
                        <div>{item.language}</div>
                        <div>{dataAtual.getMonth() >= item.birthday.split("-")[1] ?
                            dataAtual.getFullYear() - item.birthday.split("-")[0]
                            : (dataAtual.getFullYear() - item.birthday.split("-")[0]) - 1
                        }</div>
                        <div>{item.birthday}</div>
                        <div className="buttons">
                            <button
                            onClick={openEditMenu}
                            ><img alt="edit" src="edit-11-xxl.png" /></button>
                            <button
                            onClick={deleteItem}
                            ><img alt="delete" src="download.png" /></button>
                        </div>
                        {isEditOpen && <Edit
                        func={editItem}
                        close={openEditMenu}
                        />}
                    </div>
                )
            }) : (<Loading/>)}
        </ContactListStyle>
    )
}

export default ContactsList;