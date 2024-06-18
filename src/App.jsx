import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import { useContextState } from "./Components/utils/global.context";


function App() {
  const { state } = useContextState()

  return (
    <div className= {state.theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
