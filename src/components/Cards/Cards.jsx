import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

function Cards({ data, titulo }) {
  const producto = data; // => [{id: 1, nombre:"blabla",imagen: p1_img, nuevo_precio: 50000, precio_anterior: 80500,}]
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
          {titulo}
        </Typography>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {/* MAPEO */}
          {/* data.map( (elemento, index) => {} esto no () esto si )   ===> regla siempre el 1° elemento tene que tener la prop key */}
          {data.map((producto, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  alt={producto.nombre}
                  src={producto.imagen}
                />
                <CardContent>
                  <Typography variant="h6">{producto.nombre}</Typography>
                </CardContent>
                <CardActions sx={{ px: "15px" }}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{
                      textDecoration: "line-through",
                      lineHeight: "35px",
                      width: "50%",
                    }}
                  >
                    {producto.precio_anterior}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "right",
                      width: "50%",
                    }}
                  >
                    {producto.nuevo_precio}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* FIN DE MAPEO */}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
