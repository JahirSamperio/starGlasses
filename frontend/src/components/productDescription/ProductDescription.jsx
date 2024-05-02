import { Button, Container, IconButton, Typography } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";

export default function ProductDescription({
  nombre,
  precio_venta,
  descripcion,
  handleAddToCart,
  oferta,
}) {
  const precio_ventaNum = parseFloat(precio_venta);
  const ofertaNum = parseFloat(oferta);

  const percentage = ofertaNum !== 0 ? ((ofertaNum / precio_ventaNum) * 100).toFixed(2) : 0;

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: { xs: "12px" },
        maxHeight: "95%",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography variant="h3">{nombre}</Typography>
        <Typography variant="h6" sx={{ mt: "18px" }}>
          {descripcion}
        </Typography>
        <Container
          sx={{
            display: { sm: "flex", md: "block" },
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ mt: "18px" }}>
            {precio_venta}
            {ofertaNum !== 0 && (
              <Typography
                component="span"
                sx={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(46,154,40,0.6194678555015756) 41%, rgba(23,105,31,1) 100%);",
                  borderRadius: "3px",
                  color: "white",
                  ml: "12px",
                }}
              >
                {" "}
                {`${percentage}%`}{" "}
              </Typography>
            )}
          </Typography>
          {ofertaNum !== 0 ? (
            <Typography
              sx={{
                opacity: "0.5",
                textDecoration: "line-through",
                mt: "18px",
              }}
            >
              {(precio_ventaNum + ofertaNum).toFixed(2)}
            </Typography>
          ) : null}
        </Container>
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center", mt: "24px" }}>
        <Button
          sx={{ margin: "0 12px", width: { md: "90%", sm: "95%", xs: "100%" } }}
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(id, nombre, precio_venta);
          }}
        >
          <ShoppingCart />
          {`Agregar al carrito`}
        </Button>
      </Container>
    </Container>
  );
}
