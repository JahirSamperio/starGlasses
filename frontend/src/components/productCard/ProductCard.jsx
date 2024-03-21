import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

export default function ProductCard({ id, name, precio }) {
  const [shoppingData, setShoppingData] = useState();

  useEffect(() => {
    setShoppingData(JSON.parse(localStorage.getItem("shopping_cart")) || []);
  }, []);

  const handleProductsToShoppingCart = (id, name, precio) => {
    // Obtenemos desde el almacenamiento local
    const currentShoppingData = JSON.parse(localStorage.getItem('shopping_cart')) || [];
  
    // Verificamos si el producto ya está en el carrito usando el item.id y comparando con los que estan 
    // en el carro (shoppingData[])
    const isProductInCart = currentShoppingData.some(item => item.id === id);
  
    // Si el es el caso, no se realiza ninguna operacion
    if (isProductInCart) {
      return;
    }
  
    // Crear un nuevo objeto para el nuevo artículo
    const newItem = {
      id,
      name,
      precio,
    };
  
    // Creamos una nueva copia del carrito por medio de desestructuracion  y agregamos el nuevo artícul
    
    const newShoppingData = [...currentShoppingData, newItem];
  
    // Actualizamos el estado con el nuevo carrito de compras
    setShoppingData(newShoppingData);
  
    // Guardar el nuevo carrito de compras en el almacenamiento local
    localStorage.setItem('shopping_cart', JSON.stringify(newShoppingData));
  };
  

  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        width: { lg: 250, sm: 220, xs: 300 },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/200"
          height={{ lg: 200 }}
          alt="imagen pitera"
          sx={{ padding: "8px 6px" }}
        />
        <CardContent>
          <Typography component="p" variant="body2">
            {name}
          </Typography>
          <Typography sx={{ mt: "5px" }}>${precio}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          variant="contained"
          sx={{ fontSize: "12px", flexGrow: 1 }}
          onClick={(e) => {
            e.preventDefault();
            handleProductsToShoppingCart(id, name, precio);
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
