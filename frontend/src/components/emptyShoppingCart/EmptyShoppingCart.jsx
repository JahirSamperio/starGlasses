import { Button, Container, Icon, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";

export const EmptyShoppingCart = () => {
  return (
    <Container sx={{ alignItems: "center", display:'flex', justifyContent:'space-evenly' }}>
      <Typography variant="h5">El carrito está vacío.</Typography>
      <Button sx={{ mt: "12px" }} variant="outlined">
        <NavLink to={'/products-list'} ><AddShoppingCartIcon /> Ir a comprar</NavLink>
      </Button>
    </Container>
  );
};
