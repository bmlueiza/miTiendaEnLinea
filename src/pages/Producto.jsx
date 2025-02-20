import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../components/assets/all_product";
import { Container, Grid, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import clp from "../components/clp";

function Producto({ setCarrito, carrito }) {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();

  /* useEffect(() => {function},[estadi a evalar] */
  useEffect(
    () => {
      const datos = data.find((prod) => prod.id == id);
      setProducto(datos);
    },
    [] /* si no tiene un valor, se ejecutará la primera vez de renderizado */
  );

  const generarPedido = (producto) => {
    const [primera, segunda, tercera] = producto.nombre.split(" ", 3);
    /* producto.nombre.split(" ")[0] producto.nombre.split(" ")[1] producto.nombre.split(" ")[2] */
    const cod = `${primera[0]}-${segunda[0]}-${tercera[0]}-id-${producto.id}`;

    producto["codigo"] = cod;
    producto["cantidad"] = 1;
    const nuevoArray = [...carrito, producto];
    /* carrit.push(producto) */
    setCarrito(nuevoArray);
  };

  return (
    <>
      {producto && (
        <Container>
          <Grid container spacing={2} sx={{ mt: "40px" }}>
            <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
              <img src={producto.imagen} alt={producto.nombre} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
              <Typography variant="h5">
                <b>Detalle:</b> {producto.nombre}
              </Typography>
              <Typography variant="h5" sx={{ mt: "30px" }}>
                <b>Categoría : </b>
                {producto.categoria}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ mt: "30px" }}
              >
                <b>Precio: </b>
                {clp(producto.precio_anterior)}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                <b>Descuento : </b>
                {clp(producto.precio_anterior - producto.nuevo_precio)}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right", w: "100%" }}>
                <b>Total : </b>
                {clp(producto.nuevo_precio)}
              </Typography>
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button
                  color="error"
                  variant="outlined"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => generarPedido(producto)}
                >
                  Agregar al carro
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Producto;
