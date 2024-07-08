import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../components/assets/all_product";
import { Container, Grid, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import clp from "../components/clp";

function Producto() {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const datos = data.find((prod) => prod.id == id);
    setProducto(datos);
  }, []);

  return (
    <>
      {producto && (
        <Container>
          <Grid container sx={{ mt: "40px" }}>
            <Grid item xs={12} sm={6}>
              <img src={producto.imagen} style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ padding: "15px" }}>
              <Typography variant="h5">
                <b>detalle: </b>
                {producto.nombre}
              </Typography>
              <Typography variant="h5" sx={{ mt: "30px" }}>
                <b>Categoría: </b>
                {producto.categoria}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ mt: "30px" }}
              >
                <b>precio: </b>
                {clp(producto.precio_anterior)}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                <b>descuento: </b>
                {clp(producto.precio_anterior - producto.nuevo_precio)}
              </Typography>
              <Typography variant="h6" sx={{ mt: "30px", textAlign: "right" }}>
                <b>descuento: </b>
                {clp(producto.nuevo_precio)}
              </Typography>
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button
                  color="error"
                  variant="outlined"
                  endIcon={<AddShoppingCartIcon />}
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
