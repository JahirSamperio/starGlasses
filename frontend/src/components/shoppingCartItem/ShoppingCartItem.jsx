import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Button,
  Typography,
} from "@mui/material";

export default function ShoppingCartItem({
  id,
  nombre,
  price,
  handleRemoveFromCart,
  imagen,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        marginBottom: 12,
      }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={imagen}
          height="120"
          alt="Card Image"
          sx={{ width: "160px" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5">{nombre}</Typography>
          <Typography variant="body2" sx={{ marginTop: 6 }}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button sx={{ marginRight: 16 }}>Ver</Button>
        <Button
          variant="contained"
          color="error"
          sx={{ marginRight: 16 }}
          onClick={() => handleRemoveFromCart(id)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
