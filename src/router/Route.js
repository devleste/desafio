import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Statistics from "../pages/statistics/Statistics";

const Routing = ({
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
  setFilteredContacts,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            contacts={contacts}
            addContactVisible={addContactVisible}
            setAddContactVisible={setAddContactVisible}
            editContactVisible={editContactVisible}
            setEditContactVisible={setEditContactVisible}
            addContact={addContact}
            removeContact={removeContact}
            editContact={editContact}
            filter={filter}
            filteredContacts={filteredContacts}
            setFilteredContacts={setFilteredContacts}
          />
        }
      />
      <Route
        path="statistics"
        element={
          <Statistics
            contacts={contacts}
          />
        }
      />
    </Routes>
  );
}

export default Routing;