import { useEffect, useState } from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import { EmptyShoppingCart } from "../components/emptyShoppingCart/EmptyShoppingCart";
import ShoppingCartItem from "../components/shoppingCartItem/ShoppingCartItem";

export const ShoppingCart = () => {
  const [list, setList] = useState([]);
  const [empty, setEmpty] = useState(true); // Inicialmente establecido como true

  useEffect(() => {
    // Obtener el carrito de la compra del localStorage
    const shoppingList = JSON.parse(localStorage.getItem("shopping_cart"));

    if (Array.isArray(shoppingList) && shoppingList.length > 0) {
      // Si hay elementos en el carrito, actualiza el estado y marca como no vacío
      setList(shoppingList);
      setEmpty(false);
    } else {
      // if cart is empty or there are no items, it sets on Empty
      setEmpty(true);
    }
  }, []); // this effect will execute once when rendering the component

  console.log(list);
  // Maneja la eliminación de un elemento del carrito
  const handleRemoveItem = (id) => {
    console.log("ID a eliminar:", id);
    // Filtrar el carrito actual y eliminar el elemento con el id
    const updatedShoppingList = list.filter((item) => item.id !== id);
    // Si el carrito está vacío después de la eliminación, marca como vacío
    const isEmpty = updatedShoppingList.length === 0;
    // Actualizar el estado
    setList(updatedShoppingList);
    // Actualizar el estado en localStorage
    localStorage.setItem("shopping_cart", JSON.stringify(updatedShoppingList));
    // Actualizar el estado de vacío
    setEmpty(isEmpty);
  };

  return (
    <Container
      sx={{
        display: { md: "flex" },
        justifyContent: "space-around",
        mt: "24px",
        mb: "4em",
        minWidth: "maxContent",
      }}
    >
      <Paper sx={{ height: { md: "460px" }, mr: "12px" }} elevation={10}>
        <Typography
          variant="h5"
          sx={{ mt: "8px", ml: "12px", fontWeight: 500 }}
        >
          Productos en el carrito
        </Typography>
        <Box
          sx={{
            height: { md: "400px" },
            width: "810px",
            padding: "10px 12px",
            overflowY: "auto",
          }}
        >
          {empty ? (
            <EmptyShoppingCart />
          ) : (
            list.map((item, index) => ( 
              <ShoppingCartItem
                name={item.name}
                price={item.price}
                key={index}
                handleRemoveFromCart={() => handleRemoveItem(item.id)}
              />
            ))
          )}
        </Box>
      </Paper>
      <Paper elevation={10}>
        <Box sx={{ height: "380px", width: "410px" }}></Box>
      </Paper>
    </Container>
  );
};
