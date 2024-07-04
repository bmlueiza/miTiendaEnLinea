import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

function NavBar() {
  /* const [variable, funcionModificadoraDeVariable] =useState(valorInicialVariable
  La convención es que la función modificadora de variable se le anteponga un set, dando setNombreDeVariable*/
  const [menu, setMenu] = useState("tienda");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>MiTiendaEnLinea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda
          {/* sintaxis de operador ternario: evaluador ? siCumpleCondicion: siNoCumpleCondicion*/}
          {/* sintaxis de operador AND: evaluador && siCumpleCondicion */}
          {menu === "tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre
          {menu === "hombre" && <hr />}
        </li>
        <li onClick={() => setMenu("mujer")}>
          Mujer
          {menu === "mujer" && <hr />}
        </li>
        <li onClick={() => setMenu("niño")}>
          Niños
          {menu === "niño" && <hr />}
        </li>
      </ul>
      {/* div.nav-login-chart>button{Login}+img[src={cart_icon} alt="carrito"] */}
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carrito" />
      </div>
    </div>
  );
}

export default NavBar;
