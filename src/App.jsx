import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Favs" element={<Favs />} />
        <Route path="*" element={<div>Not Found 404</div>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
