import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import ModalAddContact from "../../components/modal_add_contact/ModalAddContact";
import ModalEditContact from "../../components/modal_edit_contact/ModalEditContact";
import Pagination from "../../components/pagination/Pagination";
import paginate from "../../scripts/paginate";
import getAge from "../../scripts/getAge";
import styles from "./Home.module.css";

const Home = ({
  contacts,
  addContactVisible,
  setAddContactVisible,
  editContactVisible,
  setEditContactVisible,
  addContact,
  removeContact,
  editContact,
  filter,
  filteredContacts,
  setFilteredContacts
}) => {
  const [pageIndex, setPageIndex] = useState(0);

  const filterContact = (contact) => {
    if (filter.active) {
      const masculine = filter.masculine && contact.gender === "M";
      const feminine = filter.feminine && contact.gender === "F";
      const language = filter.language.length > 0 && filter.language.find((e) => e === contact.language);
      const minAge = filter.age.min <= getAge(contact.birthday);
      const maxAge = filter.age.max >= getAge(contact.birthday);
      const age = minAge && maxAge;
      const birthMonth = filter.birthMonth.length > 0 &&
        filter.birthMonth.find((e) => e === new Date(contact.birthday).getMonth());

      if (!(masculine || feminine)) {
        return false;
      }
      if (language === undefined) {
        return false;
      }
      if (!age) {
        return false;
      }
      if (birthMonth === undefined) {
        return false;
      }
    }
    return true;
  }

  // Atualiza lista de contatos filtrados e paginação
  useEffect(() => {
    setFilteredContacts(
      contacts.flat(Infinity)?.map((curElm) => {
        if (filterContact(curElm)) {
          return curElm;
        }
      }));
    setFilteredContacts(prevState => prevState?.filter(curElm => curElm !== undefined));
    setFilteredContacts(prevState => paginate(prevState));
  }, [filter, contacts]);

  return (
    <>
      <main className={styles.main}>
        <h5>Contatos</h5>
        {contacts?.length < 1 && (
          <div className={styles.loading}>
            <img src="./img/loading_spinner.svg" alt="Loading" />
          </div>
        )}
        <div className={styles.contacts}>
          <>
            {!filter.active && contacts[pageIndex]?.map((curElm) => {
              if (filterContact(curElm)) {
                return (
                  <Card
                    key={curElm.id}
                    id={curElm.id}
                    firstName={curElm.first_name}
                    lastName={curElm.last_name}
                    email={curElm.email}
                    gender={curElm.gender}
                    language={curElm.language}
                    avatar={curElm.avatar}
                    birthday={curElm.birthday}
                    setEditContactVisible={setEditContactVisible}
                    removeContact={removeContact}
                  />
                )
              }
            })}
            {filter.active && filteredContacts[pageIndex]?.map((curElm) => {
              if (filterContact(curElm)) {
                return (
                  <Card
                    key={curElm.id}
                    id={curElm.id}
                    firstName={curElm.first_name}
                    lastName={curElm.last_name}
                    email={curElm.email}
                    gender={curElm.gender}
                    language={curElm.language}
                    avatar={curElm.avatar}
                    birthday={curElm.birthday}
                    setEditContactVisible={setEditContactVisible}
                    removeContact={removeContact}
                  />
                )
              }
            })}
          </>
        </div>
        {filter.active ? (
          <Pagination
            data={filteredContacts}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        ) : (
          <Pagination
            data={contacts}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        )}
      </main>

      {/* Modal para criar novo contato */}
      <ModalAddContact
        visible={addContactVisible}
        setVisible={setAddContactVisible}
        addContact={addContact}
      />

      {/* Modal para editar um contato */}
      <ModalEditContact
        contacts={contacts}
        visible={editContactVisible}
        setVisible={setEditContactVisible}
        editContact={editContact}
      />
    </>
  );
}

export default Home;