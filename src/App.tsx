import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ListContacts } from "./pages/ListContacts";
import { NewContact } from "./pages/NewContact";
import { ContactProvider } from "./context/Contact";
import { EditForm } from "./pages/EditForm";
import { ShowStatistics } from "./pages/ShowStatistics";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnewcontact" element={<NewContact />} />
          <Route path="/listcontact" element={<ListContacts />} />
          <Route path="/editform/:id" element={<EditForm />} />
          <Route path="/showstatistics" element={<ShowStatistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
