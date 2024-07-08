import banner from "../components/assets/banner_mens.png";
import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product";

function Hombre() {
  /* array-a-recorrer +.+ metodo filter + (argumento) => argumento.data-a-evaluar + operador y comparación*/
  const filteredData = data.filter(
    (product) => product.id > 12 && product.id <= 24
  );
  return (
    <>
      <img
        src={banner}
        alt="banner_hombres"
        className="banner"
        style={{ width: "100%" }}
      />
      <Cards data={filteredData} titulo="Hombre" />
    </>
  );
}

export default Hombre;
