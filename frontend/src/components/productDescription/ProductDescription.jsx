import { Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";

export default function ProductDescription() {
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
        <Typography>StarGlasses</Typography>
        <Typography variant="h3">
          Este sera el nombre del producto jaja
        </Typography>
        <Typography variant="h6" sx={{ mt: "18px" }}>
          Aqui ponemos una breve descripcion de nuestro producto, no tan breve
          la vdd, ya se vera de que forma se adapta pero bueno, ni que decir lol
        </Typography>
        <Container sx={{display:{sm:'flex',md:'block'}, justifyContent:'space-between'}}>
          <Typography sx={{ mt: "18px" }}>
            $0000.00
            <Typography
              component="span"
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(46,154,40,0.6194678555015756) 41%, rgba(23,105,31,1) 100%);",
                borderRadius: "3px",
                color: "white",
                ml:'12px'
              }}
            >
              00%
            </Typography>
          </Typography>
          <Typography sx={{ opacity: "0.5", textDecoration: "line-through", mt:'18px'}}>
            $0000.000
          </Typography>
        </Container>
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center", mt: "24px" }}>
        <Button
          sx={{ margin: "0 12px", width: { md: "80%", sm: "90%" } }}
          variant="contained"
        >
          Agregar al carrito
        </Button>
      </Container>
    </Container>
  );
}
