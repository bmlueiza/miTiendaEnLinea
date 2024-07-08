import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import clp from "../clp";

const MyCard = ({ producto }) => {
  const precio = () => {
    return producto.precio_anterior * producto.cantidad;
  };
  const total = () => {
    return producto.nuevo_precio * producto.cantidad;
  };
  const descuento = () => {
    return precio() - total();
  };
  return (
    <Card
      sx={{
        cursor: "pointer",
        my: "20px",
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <CardMedia
        sx={{ width: "70%", mx: "15%" }}
        component="img"
        alt={producto.nombre}
        src={producto.imagen}
      />
      <CardContent>
        <Typography variant="small">{producto.nombre}</Typography>
        <Typography
          variant="h6"
          sx={{ mt: "30px", display: "flex", justifyContent: "space-between" }}
        >
          <small>Cantidad</small> <span>{producto.cantidad}</span>
        </Typography>
        <Typography
          variant="small"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Valor</span> <span>{clp(precio())}</span>
        </Typography>
        <Typography
          variant="small"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Descuento:</span> <span>{clp(descuento())}</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <small>Total:</small> <span>{clp(total())}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

const Cards = ({ data }) => {
  const handleSendMessage = () => {
    console.log("menssage");
  };

  const total = data.reduce((acumulador, producto) => {
    const subtotal = producto.nuevo_precio * producto.cantidad;
    return acumulador + subtotal;
  }, 0);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Button
        onClick={(e) => handleSendMessage(e)}
        variant="contained"
        sx={{ width: "90%", margin: "5%" }}
      >
        Total {clp(total)}
        <br />
        Contactar con proveedor
      </Button>
      {data.map((producto, index) => (
        <div key={index}>
          <MyCard producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
