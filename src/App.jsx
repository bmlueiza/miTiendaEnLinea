import NavBar from "./components/NavBar/NavBar";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Tienda from "./pages/Tienda";
import Nino from "./pages/Nino";
import Producto from "./pages/Producto";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/hombre" element={<Hombre />} />
        <Route path="/nino" element={<Nino />} />
        <Route path="/producto/:id" element={<Producto />} />
      </Routes>
    </>
  );
}

export default App;
