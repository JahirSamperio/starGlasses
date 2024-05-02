import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

export default function ProductCard({ id_lentes, nombre, precio,imagen, onProductClick }) {




  // props for shoppingCart = id, name, price
  // const [shoppingData, setShoppingData] = useState();

  // useEffect(() => {
  //   setShoppingData(JSON.parse(localStorage.getItem("shopping_cart")) || []);
  // }, []);

  // const { enqueueSnackbar } = useSnackbar();

  // const handleProductsToShoppingCart = (id, name, price) => {
  //   // bring the current products in the shopping cart
  //   const currentShoppingData =
  //     JSON.parse(localStorage.getItem("shopping_cart")) || [];

  //   // Verify if certain product is in the shoppingCart comparing item.id
  //   const isProductInCart = currentShoppingData.some((item) => item.id === id);

  //   // on that case, the operation is not executed
  //   if (isProductInCart) {
  //     return;
  //   }

  //   // create an object for the new shoppingCart item
  //   const newItem = {
  //     id,
  //     name,
  //     price,
  //   };

  //   // a new copy of the array using destructuaration and make the
  //   //insertion of the newItem

  //   const newShoppingData = [...currentShoppingData, newItem];

  //   // update shoppingData state
  //   setShoppingData(newShoppingData);

  //   // set new shopping cart on localStorage
  //   localStorage.setItem("shopping_cart", JSON.stringify(newShoppingData));

  //   enqueueSnackbar("Producto agregado al carrito", {
  //     variant: "success",
  //   });
  // };

  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        width: { lg: 250, sm: 220, xs: 300 },
      }}
      onClick={() => onProductClick(id_lentes)}
    >
      <CardActionArea onClick={() => {}}>
        <CardMedia
          component="img"
          image={imagen}
          height={{ lg: 200 }}
          alt={nombre}
          sx={{ padding: "8px 6px" }}
        />
        <CardContent>
          <Typography component="p" variant="body2">
            {nombre}
          </Typography>
          <Typography sx={{ mt: "5px" }}>${precio}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          variant="contained"
          sx={{ fontSize: "12px", flexGrow: 1 }}
          onClick={(e) => {
            // e.preventDefault();
           // handleProductsToShoppingCart(id, name, price);
          }}
        >
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
}
