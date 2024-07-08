import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";

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
          <Link to="/" style={{ textDecoration: "none" }}>
            Tienda
            {/* sintaxis de operador ternario: evaluador ? siCumpleCondicion: siNoCumpleCondicion*/}
            {/* sintaxis de operador AND: evaluador && siCumpleCondicion */}
            {menu === "tienda" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("hombre")}>
          <Link to="/hombre" style={{ textDecoration: "none" }}>
            Hombre
            {menu === "hombre" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link to="/mujer" style={{ textDecoration: "none" }}>
            Mujer
            {menu === "mujer" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("niño")}>
          <Link to="/nino" style={{ textDecoration: "none" }}>
            Niños
            {menu === "niño" && <hr />}
          </Link>
        </li>
      </ul>
      {/* div.nav-login-chart>button{Login}+img[src={cart_icon} alt="carrito"] */}
      <div className="nav-login-cart">
        <button>Login</button>
        {/* <img src={cart_icon} alt="carrito" /> */}
      </div>
      <Drawer />
    </div>
  );
}

export default NavBar;
