import banner from "../components/assets/banner_kids.png";
import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product";

function Nino() {
  const filteredData = data.filter(
    (product) => product.id > 24 && product.id <= 36
  );
  return (
    <>
      <img
        src={banner}
        alt="banner_niños"
        className="banner"
        style={{ width: "100%" }}
      />
      <Cards data={filteredData} titulo="Niños" />
    </>
  );
}

export default Nino;
