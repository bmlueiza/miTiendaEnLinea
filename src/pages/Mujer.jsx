import banner from "../components/assets/banner_women.png";
import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product";

function Mujer() {
  //retornar datos con id de 1 a 12
  const filteredData = data.filter((product) => product.id <= 12);

  return (
    <>
      <img
        src={banner}
        alt="banner_mujer"
        className="banner"
        style={{ width: "100%" }}
      />
      <Cards data={filteredData} titulo="Mujer" />
    </>
  );
}

export default Mujer;
