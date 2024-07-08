/* function PesosChilenos(number) {
  const formatNumberToChileanPesos = (number) => {
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(number);
    return formattedNumber;
  };
  return formatNumberToChileanPesos(number);
}

export default PesosChilenos; */

function clp(number) {
  const formattedNumber = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(number);
  return formattedNumber;
}

export default clp;
