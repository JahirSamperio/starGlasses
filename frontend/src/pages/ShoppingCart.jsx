import { useEffect, useState } from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { EmptyShoppingCart } from "../components/emptyShoppingCart/EmptyShoppingCart";
import ShoppingCartItem from "../components/shoppingCartItem/ShoppingCartItem";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCartAction } from "../redux/actions/shoppingCart/getShoppingCart";
import { getItem } from "../helpers/localStorage/getItem";
import NavBar from "../components/navBar/NavBar";
import { removeFromShoppingCart } from "../redux/actions/shoppingCart/removeFromShoppingCart";


export const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { loading, success, error, shoppingCartData } = useSelector(
    (state) => state.shoppingcart.get
  );


  const {shoppingCartItemData} = useSelector((state)=> state.shoppingcart.remove);


  


  const [userID, setUserID] = useState(null);
  const [empty, setEmpty] = useState(true);

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

  useEffect(() => {
    if (success) {
      setEmpty(false);
    }
  }, [success]);

  const getFirstLinkFromProductList = () => {
    const linksArray = [];
    shoppingCartData.forEach((product, index) => {
      // Obtener el primer enlace del producto
      const firstLink = product.producto_lente.imagen.split(",")[0].trim();
      // Agregar un objeto con el índice y el primer enlace al array de enlaces
      linksArray.push({ index: index, link: firstLink });
    });
    return linksArray;
  };

  const firstLinks = getFirstLinkFromProductList();

  const [list, setList] = useState([]);

  // Maneja la eliminación de un elemento del carrito
  const handleRemoveItem = (id_cart) => {
    dispatch()
  };  

  const calculatePrices = (products) => {
    let productSum = 0;

    // Calcular la suma total de los precios de los productos
    products.forEach((product) => {
      const price = parseFloat(
        product.producto_lente.producto_lentes_precio.precio_venta
      );
      productSum += price;
    });

    const deliveryFee = 0; // Costo de envío (actualmente establecido en 0)
    const finalPrice = productSum + deliveryFee; // Precio final

    return {
      productSum: productSum.toFixed(2), // Redondear el total de productos a 2 decimales
      deliveryFee: deliveryFee.toFixed(2), // Redondear el costo de envío a 2 decimales
      finalPrice: finalPrice.toFixed(2), // Redondear el precio final a 2 decimales
    };
  };

  const { productSum, deliveryFee, finalPrice } =
    calculatePrices(shoppingCartData);

  return (
    <>
      <NavBar />
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
                  id={item.producto_lente.id_lentes}
                  nombre={item.producto_lente.nombre}
                  price={
                    item.producto_lente.producto_lentes_precio.precio_venta
                  }
                  key={index}
                  imagen={firstLinks[index]?.link}
                //  handleRemoveFromCart={}
                  
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
                  Aquí va el resumen de tu compra
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
                  <Typography>Envío: </Typography>
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
    </>
  );
};
