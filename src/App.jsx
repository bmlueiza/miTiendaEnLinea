import { useState, createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Tienda from "./pages/Tienda";
import Nino from "./pages/Nino";
import Producto from "./pages/Producto";

import { Route, Routes } from "react-router-dom";

export const CarritoContext = createContext();

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <CarritoContext.Provider value={carrito}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/nino" element={<Nino />} />
          <Route
            path="/producto/:id"
            element={<Producto carrito={carrito} setCarrito={setCarrito} />}
          />
        </Routes>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
