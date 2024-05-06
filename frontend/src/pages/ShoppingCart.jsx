import { useEffect, useState } from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { EmptyShoppingCart } from "../components/emptyShoppingCart/EmptyShoppingCart";
import ShoppingCartItem from "../components/shoppingCartItem/ShoppingCartItem";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCartAction } from "../redux/actions/shoppingCart/getShoppingCart";
import { getItem } from "../helpers/localStorage/getItem";

export const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { loading, success, error, shoppingCartData } = useSelector(
    (state) => state.shoppingcart.get
  );
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const loadUserID = async () => {
      const id_usuario = await getItem("USERID");
      setUserID(id_usuario);
    };

    loadUserID();
  }, []);

  useEffect(() => {
    if (userID) {
      console.log(userID);
      dispatch(getShoppingCartAction(userID));
    }
  }, [userID]);

  const [list, setList] = useState([]);
  const [empty, setEmpty] = useState(true); // Initially established as true

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

  const handlePrices = (products, attribute) => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      if (attribute in products[i]) {
        sum = sum += products[i][attribute];
      }
    }
    return sum;
  };

  const productSum = handlePrices(list, "price");
  const deliveryFee = 0;
  let finalPrice = productSum + deliveryFee;

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <EmptyShoppingCart />
            </Box>
          ) : (
            shoppingCartData.map((item, index) => (
              <ShoppingCartItem
                name={item.producto_lente.nombre}
                price={item.producto_lente.producto_lentes_precio.precio_venta}
                key={index}
                handleRemoveFromCart={() => handleRemoveItem(item.id_cart)}
              />
            ))
          )}
        </Box>
      </Paper>
      <Paper elevation={10}>
        <Box sx={{ height: "380px", width: "410px" }}>
          <Container>
            <Typography
              variant="h5"
              sx={{ mt: "8px", ml: "12px", fontWeight: 500 }}
            >
              Resumen de la compra:
            </Typography>
          </Container>
          {empty ? (
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 16px",
              }}
            >
              <Typography sx={{ ml: "12px", mt: "8px" }}>
                Aqui va el resumen de tu compra
              </Typography>
            </Container>
          ) : (
            <Container sx={{ mt: "8px" }}>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                }}
              >
                <Typography>{`Producto(s):`}</Typography>
                <Typography>{productSum}</Typography>
              </Container>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                }}
              >
                <Typography>Envio: </Typography>
                <Typography>{deliveryFee}</Typography>
              </Container>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                }}
              >
                <Typography>Total:</Typography>
                <Typography>{finalPrice}</Typography>
              </Container>
              <Button
                variant="contained"
                sx={{ flexGrow: 1, width: "100%", mt: "12px" }}
              >
                Comprar
              </Button>
            </Container>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
