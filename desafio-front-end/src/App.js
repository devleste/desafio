import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} >
        {/* <Route path="/:category" element={} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
