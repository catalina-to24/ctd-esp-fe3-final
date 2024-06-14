import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
